const router = require('express').Router();

const authRouter = require('./auth');
const indexController = require('../controllers/indexController');

router.use('/auth', authRouter);

router.get('/login', (req, res) => {
    res.render('index');
});

router.get('*', indexController);

module.exports = router;
