import express from 'express'
import bodyParser from 'body-parser'
import postRoutes from './routes/umkm.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors())


app.use('/', postRoutes);

//display images url
app.use(express.static('public')); 
app.use('/images', express.static('images'));

const PORT = 5000 || 5000;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})