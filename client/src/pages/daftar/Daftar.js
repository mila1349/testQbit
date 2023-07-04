import React, {useState} from 'react'
import './style.scss'
import Dropzone from 'react-dropzone'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function Contact() {
  const [message, setMessage] = useState({name:"", type:"Fashion"})
  const [file, setFile] = useState(null)
  const options = ["Fashion","Kuliner","Pariwisata","Kriya","Teknologi","Kesehatan","Kecantikan","Pertanian"]

  function handleSubmit(e){
    e.preventDefault();
    console.log(message)
    if(file!=null && file!=undefined){
      const formData = new FormData();
      formData.append('data', JSON.stringify(message))
      formData.append('umkm',file)

      axios.post(`http://localhost:5000/add`, formData)
      .then(res => {
        console.log(res.data);
        notifySuccess("UMKM anda berhasil terdaftar")
      }).catch(err=>{
        console.log(err)
      })

      setMessage({name:"",type:""})
      setFile(null)
    }else{
      notifyError("Harap pilih gambar")
    }
}

function notifyError(msg){
  toast.error(msg)
}

function notifySuccess(msg){
  toast.success(msg)
}

  return (
    <div id='contact'>
      <ToastContainer />
        <div className="wrapper">
            <h1>Daftarkan UMKM kamu sekarang!!!</h1>
            <div className="email-contact">
                <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Nama UMKM' value={message.name} required onChange={e=>setMessage({...message, name:e.target.value})}/>
                <select name="" id="" onChange={e=>setMessage({...message, type:e.target.value})} value={message.type}>
                  {
                    options.map((item)=>(
                      <option value={item}>{item}</option>
                    ))
                  }
                </select>
                <Dropzone
                    onDrop={(files) => setFile(files[0])}
                    accept="image/*"
                    minSize={1024}
                    maxSize={3072000}
                    maxFiles={1}
                    multiple={false}
                    
                >
                    {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "drop-zone" })}>
                        <input {...getInputProps()} />
                        <img src="images/upload-image.png" alt="" />
                        <p>Jatuhkan Gambar disini atau pilih</p>
                        <p className="selected-file">{file?.name}</p>
                    </div>
                    )}
                </Dropzone>
                <button type='submit'>Daftar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact