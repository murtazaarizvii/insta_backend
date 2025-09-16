const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/',(req,res)=>{
res.send("hello")
})
module.exports = router;
