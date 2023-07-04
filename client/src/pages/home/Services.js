import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const spring = {
    type: "spring",
    duration:1
};

function Left({service, index}){
    return(
    <div className="services">
        <img src="images/elipse1.png" alt="" className='elipse1'/>
        <img src="images/elipse2.png" alt="" className='elipse2'/>
        <img src="images/elipse2.png" alt="" className='elipse3'/>


        <motion.h5 layoutId="index" transition={spring}>0{index+1} / 04</motion.h5>
        <div className="description">
            <motion.h3 layoutId="ourServices" transition={spring}>Manfaat</motion.h3>
            <motion.h2 layoutId="expert" transition={spring}>UMKM</motion.h2>
            <motion.h1 layoutId="service" transition={spring}>{service.name}</motion.h1>
            <motion.p layoutId="desc" transition={spring}>{service.desc}</motion.p>
            <a href="/daftar">
                <motion.button layoutId="btn" transition={spring}>Daftar Sekarang</motion.button>
            </a>
            
        </div>
        <motion.img src={service.img} alt="" initial={{y:-1000}} animate={{y:0}} transition={{duration:1}}/>
    </div>
    )
}

function Right({service, index}){
    return(
    <div className="services right">
        <img src="images/elipse1.png" alt="" className='elipse1'/>
        <img src="images/elipse2.png" alt="" className='elipse2'/>
        <img src="images/elipse2.png" alt="" className='elipse3'/>
        <motion.h5 layoutId="index" transition={spring}>0{index+1} / 04</motion.h5>
        
        <motion.img src={service.img} alt="" initial={{y:1000}} animate={{y:0}} transition={{duration:1}}/>
        <div className="description">
            <motion.h3 layoutId="ourServices" transition={spring}>Manfaat</motion.h3>
            <motion.h2 layoutId="expert" transition={spring}>UMKM</motion.h2>
            <motion.h1 layoutId="service" transition={spring}>{service.name}</motion.h1>
            <motion.p layoutId="desc" transition={spring}>{service.desc}</motion.p>
            <a href="/daftar">
                <motion.button layoutId="btn" transition={spring}>Daftar Sekarang</motion.button>
            </a>
        </div>
        <motion.h5 layoutId="index" transition={spring}>0{index+1} / 04</motion.h5>
    </div>
    )
}
function Services() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [matchesPhone, setMatchesPhone] = useState(window.matchMedia("(max-width: 600px)").matches)
    const services = [
        {
            name:"Cipta Lapangan Kerja",
            img:"images/lapangan.gif",
            desc:"UMKM dapat dengan cepat menyerap tenaga kerja lokal dan mengurangi tingkat pengangguran di suatu daerah."
        },
        {
            name:"Inovasi dan Kreativitas",
            img:"images/inovasi.gif",
            desc:"UMKM sering kali menjadi ide segar, produk unik, dan solusi kreatif yang memperkaya pasar dan menghadirkan nilai tambah bagi konsumen."
        },
        {
            name:"Pelestarian Budaya",
            img:"images/budaya.gif",
            desc:"Banyak UMKM menghasilkan produk yang terkait dengan tradisi, kerajinan tangan, makanan khas, dan warisan lokal."
        },
        {
            name:"Keberlanjutan Lingkungan",
            img:"images/lingkungan.gif",
            desc:"UMKM memiliki kesadaran tinggi terhadap isu lingkungan dan berusaha untuk mengadopsi praktik bisnis yang ramah lingkungan."
        },
    ]

    useEffect(() => {
        window.matchMedia("(max-width: 600px)").addEventListener('change', e => setMatchesPhone(e.matches));
    }, []);

  return (
    <motion.div id='services'
        initial={{y:'100px', opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}t3ew3w3e
        viewport={{ once: true }}
    >
        <AnimatePresence>
            {
                activeIndex % 2 == 0 ? 
                    <Left service={services[activeIndex]} index={activeIndex}/> 
                        : !matchesPhone?
                    <Right service={services[activeIndex]} index={activeIndex}/> 
                        : 
                    <Left service={services[activeIndex]} index={activeIndex}/> 
            }
        </AnimatePresence>
        <ul className="btn-circle-container">
            {
                services.map((item, index)=>(
                    <li onClick={()=>setActiveIndex(index)} style={activeIndex===index?{background:"#fff" ,border:"3px solid #E57D21"}:null}></li>  
                ))
            }
        </ul>
    </motion.div>
  )
}

export default Services