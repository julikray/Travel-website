const { Router } = require('express');
const { signup, login } = require('../controller/user_controller');

const router = Router();

router.post("/signup", signup);
router.post("/login", login);


module.exports = router;