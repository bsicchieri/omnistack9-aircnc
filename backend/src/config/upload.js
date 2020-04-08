//importando o multer (yarn add multer)
const multer = require('multer');

const path = require('path');

//__dirname: informa o diretório atual
module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};