//importando o User e o Spot
const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    //filtro tecnologias
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        //verificar se o usuário existe
        const user = await User.findById(user_id);
        
        if (!user){
           return res.status(400).json({ error: 'User does not exists' }); 
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        //console.log(req.body);
        //console.log(req.file);

        return res.json(spot);
    }
};