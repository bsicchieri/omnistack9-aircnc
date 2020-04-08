//importando o Spot
const Spot = require('../models/Spot');

//exportando o método index
module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });

        return res.json(spots);
    }
}