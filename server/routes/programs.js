const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all programs
router.get('/', async (req, res) => {
    try {
        const [programs] = await db.query('SELECT * FROM programs ORDER BY name');
        res.json(programs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single program by slug
router.get('/:slug', async (req, res) => {
    try {
        const [program] = await db.query('SELECT * FROM programs WHERE slug = ?', [req.params.slug]);
        if (program.length === 0) {
            return res.status(404).json({ error: 'Program not found' });
        }
        res.json(program[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;