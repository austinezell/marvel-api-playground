"use strict"
const router = require("express").Router();
const request = require("request");
const md5 = require("md5");
const CONSTANTS = require('../config/constants')

function apiQueries(params){
  let queryString = "?";
  for (let key in params){
    if (params[key]) queryString += `${key}=${params[key]}&`;
  }
  const ts = Date.now();
  const hash = md5(`${ts}${CONSTANTS.MV_PRIVATE_KEY}${CONSTANTS.MV_PUBLIC_KEY}`);

  return `${queryString}&ts=${ts}&apikey=${CONSTANTS.MV_PUBLIC_KEY}&hash=${hash}`
}

router.get("/:nameStartsWith?/:limit?", (req, res)=>{
  const queries = apiQueries(req.params);
  const url = `http://gateway.marvel.com/v1/public/characters${queries}`;
    console.log(url);
  request(url, (err, response, body)=>{
    res.send(JSON.parse(body))
  })
})

module.exports = router;
