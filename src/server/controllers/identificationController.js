const identificationController = (req, res) => {
    res.json(req.user);
};

module.exports = identificationController;
