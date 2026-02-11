const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all news
router.get('/', async (req, res) => {
    try {
        const [news] = await db.query('SELECT * FROM news ORDER BY published_date DESC');
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single news
router.get('/:id', async (req, res) => {
    try {
        const [news] = await db.query('SELECT * FROM news WHERE id = ?', [req.params.id]);
        if (news.length === 0) {
            return res.status(404).json({ error: 'News not found' });
        }
        res.json(news[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;