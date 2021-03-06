/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

import Word from '../models/word';

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/game', (req, res) => {

  const word = Word.find();
  console.log('home.js controller : ', req.params.name);
  res.render('home/game', { word });
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/faq', (req, res) => {
  res.render('home/faq');
});
