import multer from "multer"
import path from "path"

//bukti images
const storageImg = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images/')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

export const uploadImg = multer({ storage : storageImg })

