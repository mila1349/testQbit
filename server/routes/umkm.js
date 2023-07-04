import express from "express";
import {uploadImg} from '../middleware/image.js'
import { createUmkm, getUmkms } from '../controllers/umkm.js'


const router = express.Router();

router.get('/get', getUmkms);
router.post('/add', uploadImg.single('umkm'), createUmkm);

export default router




