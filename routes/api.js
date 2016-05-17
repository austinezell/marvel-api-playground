"use strict"
const router = require("express").Router();
const request = require("request");
const md5 = require("md5");
const CONSTANTS = require('../config/constants')

function apiQueries(){
  const ts = Date.now();
  const hash = md5(`${ts}${CONSTANTS.MV_PRIVATE_KEY}${CONSTANTS.MV_PUBLIC_KEY}`);

  return `&ts=${ts}&apikey=${CONSTANTS.MV_PUBLIC_KEY}&hash=${hash}`
}
router.get("/test", (req, res)=>{
  const ts = Date.now();
  const hash = md5(`${ts}${CONSTANTS.MV_PRIVATE_KEY}${CONSTANTS.MV_PUBLIC_KEY}`);

  const url = `http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=wol&limit=50&ts=${ts}&apikey=${CONSTANTS.MV_PUBLIC_KEY}&hash=${hash}`;

  request(url, (err, response, body)=>{
    res.send(JSON.parse(body));
  })
})

router.get("/:name", (req, res)=>{

  const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${req.params.name}&limit=100${apiQueries()}`;

  request(url, (err, response, body)=>{
    res.send(JSON.parse(body))
  })
})

module.exports = router;
