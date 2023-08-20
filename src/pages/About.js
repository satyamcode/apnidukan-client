import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us- Apni dukan"}>
        <div className="row contactus">
        <div className='col-md-4'>
            <h4 className='bg-dark p-2 text-white text center'> About US</h4>
            
            <p className='mt-3'>
            apnidukan  is  online food and grocery store. With over 2,000 products and over a 500 brands in 
            our catalogue you will find everything you are looking for. Right from, Rice and Dals, Spices and 
            Seasonings to Packaged products, Beverages, Personal care products – we have it all.
            Choose from a wide range of options in every category, exclusively handpicked to help you find the
             best quality available at the lowest prices. Select a time slot for delivery and your order will be
              delivered right to your doorstep.

            </p>
          


          </div>
          <div className='col-md-6'>
            <h4 className='bg-dark p-2 text-white text center'>Why should I use bigbasket</h4>
            
            <p className='mt-3'>
            apni dukan allows you to walk away from the drudgery of grocery shopping and welcome an easy 
            relaxed way of browsing and shopping for groceries. Discover new products and shop for all your 
            food and grocery needs from the comfort of your home or office. No more getting stuck in traffic 
            jams, paying for parking, standing in long queues and carrying heavy bags – get everything you need, 
            when you need, right at your doorstep. shopping online is now easy as every product on your monthly 
            shopping list, is now available online at apni dukan.
            </p>
          


          </div>

        </div>
        
        
    </Layout>
  )
}

export default About