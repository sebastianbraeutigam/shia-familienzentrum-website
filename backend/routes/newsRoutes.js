const express = require('express');
const router = express.Router();
const { getAllNews, createNews, deleteNews } = require('../models/newsModel');
const auth = require('../middleware/auth');

router.get('/', getAllNewsHandler);
router.post('/', auth, createNewsHandler);
router.delete('/:id', auth, deleteNewsHandler);

async function getAllNewsHandler(req, res) {
  const news = await getAllNews();
  res.json(news);
}

async function createNewsHandler(req, res) {
  const { title, content } = req.body;
  const entry = await createNews(title, content);
  res.status(201).json(entry);
}

async function deleteNewsHandler(req, res) {
  await deleteNews(req.params.id);
  res.status(204).send();
}

module.exports = router;
