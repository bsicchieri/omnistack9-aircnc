//index (retornar uma listagem de sessões)
//show (listar uma única sessão)
//store (criar uma sessão)
//update (alterar uma sessão)
//destroy (remover uma sessão)

//importando o module de usuário
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        //return res.json({ message: "Hello World" })
        const { email } = req.body; //const email = req.body.email; 

        //caso já haja um usuário com o email ele salva em user
        let user = await User.findOne({ email });

        if(!user){
            //se não encontrar o usuário, ele cria-o
            user = await User.create({ email });
        }

        return res.json(user);
    }
};