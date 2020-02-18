const express = require('express');
const app = express();

require('date-utils');

// server
const port = process.env.PORT || 3000
app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});

// router
app.get('/', async function(req, res, next) {

  const SLACK_TOKEN = 'XXXXXXXXXXXXX'; 
  const CHANNEL_ID = 'XXXXXXXXX';
  const USER_NAME = 'おしらせおじさん';

  const msg = req.query.msg;

  const request_promise = require("request-promise");

  const response = await request_promise({
    uri : 'https://slack.com/api/chat.postMessage',
    method : "POST",
    headers : {
        'content-type' : 'application/x-www-form-urlencoded',
        'charset' : 'utf-8' 
    },
    form : {
      token: SLACK_TOKEN,
      channel: CHANNEL_ID ,
      username: USER_NAME ,
      text: msg
    },
    json : true
  });

  return res.send(response)
});