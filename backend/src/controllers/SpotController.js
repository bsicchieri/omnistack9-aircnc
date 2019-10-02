//importando o Spot
const Spot = require('../models/Spot');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.heards;

        //console.log(req.body);
        //console.log(req.file);

        return res.json({ ok: true })
    }
};