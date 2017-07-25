const indexController = (req, res) => {
    if (req.isAuthenticated()) {
        res.render('index');
    } else {
        res.redirect('/login');
    }
};

module.exports = indexController;
