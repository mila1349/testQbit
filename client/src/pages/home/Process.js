import React from 'react'
import Info from '../../components/Info'

function Process() {
    const data = [
        {
            title:"Inovasi",
            description:" UMKM di Indonesia sering kali menjadi tempat inovasi yang menarik. Keterlibatan langsung pemilik usaha dan skala yang relatif kecil memungkinkan UMKM untuk dengan cepat mengadopsi perubahan dan menguji ide-ide baru."
        },
        {
            title:"Kreatifitas",
            description:"Pemilik usaha UMKM sering kali memiliki kebebasan untuk menggali potensi kreatif mereka dan menciptakan produk dengan desain yang menarik, orisinal, dan berbeda dari yang ada di pasaran."
        },
        {
            title:"Kualitas",
            description:"Dengan menggunakan bahan baku berkualitas, mengadopsi proses produksi yang baik, dan memperhatikan detail, UMKM berusaha untuk menghasilkan produk dan jasa dengan standar kualitas yang tinggi."
        },
    ]
  return (
    <div className='wrapper process' >
        <div id='info'>
            {
                data.map((item, index)=>(
                    <Info 
                        index={index}
                        data={item}
                    />
                ))
            }
            </div>
        <a href="/daftar">
             <button>daftar Sekarang</button>
        </a>
       
    </div>
  )
}

export default Process