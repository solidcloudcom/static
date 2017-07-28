const router = require('express').Router();

const authRouter = require('./auth');

const indexController = require('../controllers/indexController');
const identificationController = require('../controllers/identificationController');

router.use('/auth', authRouter);

router.get('/login', (req, res) => {
    res.render('index');
});

router.get('/me', identificationController);

router.get('*', indexController);

module.exports = router;
