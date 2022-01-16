const http = require('http');
const fs = require('fs');
const buffer = require('buffer');
const querystring = require('querystring');
const axios = require('axios');


var contents = {

};

var headers = {
  'Host': 'h5.ele.me',
  // 'Origin': 'http://222.200.98.147',
  // 'Referer': 'http://222.200.98.147/'
};
axios.get('https://h5.ele.me/restapi/shopping/openapi/entries?latitude=23.1268311&longitude=113.3418504&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template', {
  headers: headers,
}).then(response => {
  console.log(response.data)
}).catch((e) => {
  console.log(e)
});


