"use strict"
const router = require("express").Router();
const request = require("request");
const md5 = require("md5");
const CONSTANTS = require('../config/constants')

router.get("/", (req, res)=>{
  const ts = Date.now();
  const hash = md5(`${ts}${CONSTANTS.MV_PRIVATE_KEY}${CONSTANTS.MV_PUBLIC_KEY}`);

  const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${CONSTANTS.MV_PUBLIC_KEY}&hash=${hash}`;

  request(url, (err, response, body)=>{
    res.send(body)
  })
})

module.exports = router;
