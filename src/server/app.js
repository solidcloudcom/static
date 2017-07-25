const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = require('./router.js');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const config = require('./config');

const VKstrategy = require('./oauth/vkauth');
const FBStrategy = require('./oauth/fbauth');
const User = require('./models/User');


mongoose.connect('mongodb://<blank>@ds155582.mlab.com:55582/scrap-n-nofity', { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DATABASE ERROR:'));
db.once('open', console.info.bind(console, 'DB CONNECTED'));


const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: true,
}));

app.use(passport.initialize());
app.use(passport.session());
// passport.use(VKstrategy);
passport.use(FBStrategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne({ id })
        .then(user => done(null, user))
        .catch(done);
});

app.use('/', router);

app.use((err, req, res, next) => {
    if (err) {
        console.error(err.stack);
        res.status(500).send('Server error');
    } else {
        next();
    }
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000, (err) => {
    if (err) {
        console.error('Something went wrong', err);
    } else {
        console.log('Listening on port 3000');
    }
});
