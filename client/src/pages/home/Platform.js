import React, {useEffect, useState} from 'react'
import Switch from '../../components/Switch';
import {AnimateSharedLayout, motion, AnimatePresence} from 'framer-motion'
import axios from 'axios';

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    duration: 10
  };

const types = ["Fashion","Kuliner","Pariwisata","Kriya","Teknologi","Kesehatan","Kecantikan","Pertanian"]
function SharedComponent({data}){
    return(
        <AnimatePresence>
        <motion.div className="shared-component"
            layoutId={data.name}
            transition={spring}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
        >
            <div className="box">
                <img src={data.image} alt="" />
            </div>
            <p>{data.name}</p>
        </motion.div>
        </AnimatePresence>
    )
}


function Platform() {
    const [businesses, setBusiness] = useState([])
    const [selected, setSelected] = useState(types[0]);
    const [selectedBis, setSelectedBis] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/get`)
        .then(res => {
          setBusiness(res.data)
        }).catch(err=>{
          console.log(err)
        })
    },[])

    useEffect(()=>{
        let temp = []
        businesses.forEach((item)=>{
            if(item.type == selected){
                temp.push(item)
            }
        })

        setSelectedBis(temp)
    },[selected])


    return (
    <div id='platform'>
        <motion.div className="platform"
            initial={{y:'100px', opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:1}}
            viewport={{ once: true }}
        >
            <h1>Daftar UMKM</h1>
            <p className='width-60'>Untuk memfasiliasi UMKM di Indonesia, kami melakukan pendaftaran online untu warga yang ingin memuka UMKM, berikut beberapa UMKM yang terdaftar:</p>
            <Switch data={types} selected={selected} setSelected={setSelected} />

            <AnimateSharedLayout>
            <div className="content_shared">
                {selectedBis.map(
                    (x) => <SharedComponent  data={x}/>
                )}
            </div>
            </AnimateSharedLayout>
        </motion.div>
    </div>
  )
}

export default Platform