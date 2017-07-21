const indexController = (req, res) => {
	console.log(req.user);
    if (req.isAuthenticated()) {
        res.render('index');
    } else {
        res.redirect('/login');
    }
};

module.exports = indexController;
