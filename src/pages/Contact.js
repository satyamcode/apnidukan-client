import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend,BiPhoneCall} from "react-icons/bi"
const Contact = () => {
  return (
    <Layout title={"contect us-apni dukan"}>
        <div className="row contactus">
          <div className='col-md-5'>
            <img src='/images/apnidukanlogo2.png'
            alt="contectus"
            style={{width:"100%" ,height:"60vh"}}/>
            
          </div>
          <div className='col-md-4'>
            <h1 className='bg-dark p-2 text-white text center'> CONTECT US</h1>
            <p className='text-justify mt-2'>
              Any quary and information about any product feel free to call form 8 AM to 9 PM
            </p>
            <p className='mt-3'>
              <BiMailSend/> : 987satyam567@gmail.Com

            </p>
            <p className='mt-3'>
              <BiPhoneCall/> : 9696313849

            </p>


          </div>

        </div>
    </Layout>
  )
}

export default Contact