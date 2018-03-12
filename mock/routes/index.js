var express = require('express');
var router = express.Router();
var axios = require('axios');

var headers = {
  'Host': 'h5.ele.me',
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/entries', function (req, res, next) {

  axios.get('https://h5.ele.me/restapi/shopping/openapi/entries?latitude=23.1268311&longitude=113.3418504&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template', {
    headers: headers,
  }).then(response => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  });
});

router.get('/api/restaurants', function (req, res, next) {
  var offset = req.query.offset || 0;
  var restaurantsUrl = 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=23.12908&longitude=113.264359&offset=' + offset + '&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5';
  axios.get(restaurantsUrl, {
    headers: headers,
  }).then(response => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  });
});

module.exports = router;
