const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all tenders
router.get('/', async (req, res) => {
    try {
        const [tenders] = await db.query('SELECT * FROM tenders ORDER BY created_at DESC');
        res.json(tenders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;