const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const bcrypt = require('bcryptjs');

// Middleware to verify admin token
const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = (upload) => {
  // Admin login
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // For demo - create admin if not exists
      const [admins] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      
      if (admins.length === 0 && email === 'admin@bulingatss.rw') {
        // Create default admin
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await db.query(
          'INSERT INTO users (email, password, role) VALUES (?, ?, ?)',
          [email, hashedPassword, 'admin']
        );
      }

      const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
      
      if (users.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = users[0];
      const validPass = await bcrypt.compare(password, user.password);
      
      if (!validPass) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get dashboard stats
  router.get('/stats', verifyAdmin, async (req, res) => {
    try {
      const [applications] = await db.query('SELECT COUNT(*) as total FROM applications');
      const [pending] = await db.query("SELECT COUNT(*) as count FROM applications WHERE status = 'pending'");
      const [accepted] = await db.query("SELECT COUNT(*) as count FROM applications WHERE status = 'accepted'");
      const [events] = await db.query('SELECT COUNT(*) as total FROM news');
      
      res.json({
        totalApplications: applications[0].total,
        pendingApplications: pending[0].count,
        acceptedApplications: accepted[0].count,
        totalEvents: events[0].total
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Create news/event
  router.post('/news', verifyAdmin, upload.single('image'), async (req, res) => {
    try {
      const { title, content, excerpt, category } = req.body;
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

      await db.query(
        'INSERT INTO news (title, content, excerpt, image_url, category, published_date) VALUES (?, ?, ?, ?, ?, NOW())',
        [title, content, excerpt, imageUrl, category]
      );

      res.json({ success: true, message: 'News created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Delete news
  router.delete('/news/:id', verifyAdmin, async (req, res) => {
    try {
      await db.query('DELETE FROM news WHERE id = ?', [req.params.id]);
      res.json({ success: true, message: 'News deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};