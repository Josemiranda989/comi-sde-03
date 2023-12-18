const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.resolve(__dirname, '../../public/images/products'))
    },
    filename:(req,file,cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName)
    }
})

const fileFilter = function (req, file, cb) {
    // Verifica si el archivo es una imagen
    console.log('tipo de archivo ', file.mimetype);
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('El archivo no es una imagen, vuelve atras e intenta de nuevo'), false);
    }
  };

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

module.exports = upload