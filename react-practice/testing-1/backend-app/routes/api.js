var express = require('express');
var router = express.Router();
let supabase = require('../connection.js')
require('dotenv').config();


router.get('/', async function (req, res, next) {
  let data = await supabase.from('form_data').select('*').order('created_at', { ascending: false }).limit(1);
  console.log(data)
  res.json(data)
});

router.post('/', async (req, res) => {
  const title = req.body;
  // console.log('Received data:', title);
  const { data, error } = await supabase.from('form_data').insert([title]);
  if (error) {
    console.log(error)
    return res.status(500).json({ error: error.message });
  }
  res.json(data);

});

module.exports = router;
