import * as query from '../utils/query.js'
import {db} from '../config/db.js'

function addAddressImg (img){
    if(img!==null){
        const address = 'http://localhost:5000/'
        return `${address}${img}` 
    }else{
        return null
    }
}

export const getUmkms = async (req, res)=>{
    db.query(query.getUsers, (err, result)=>{
        if(err){
            res.status(404).json({message:err.message})
            console.log("err",err)
        }else{
            console.log(result)
            for (let index = 0; index < result.length; index++) {
                result[index].image = addAddressImg(result[index].image);
            }
            res.status(200).json(result)
        }
    })

};

export const createUmkm = async (req, res)=>{
    const data = JSON.parse(req.body.data)
    console.log(data)
    const image=`${req.file.destination}${req.file.filename}`
    const umkm = [data.name, data.type, image]

    db.query(query.createUser, umkm, (err, result)=>{
        if(err){
            console.log(err)
            res.status(409).json({message:err.message})
        }else{
            res.status(201).json(data)
        }
    })
}
