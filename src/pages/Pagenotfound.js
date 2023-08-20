import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
const Pagenotfound = () => {
  return (
    <Layout title={"go back-Page not found"}>
      <div className='pnotfound'>
      <h1 className="pnotfound-title"> 404</h1>
      <h2 className='pnotfound-heading'> Oops ! Page Not found</h2>
      <Link to='/' className="pnotfound-btn">
        Go to Home Page
      </Link>

      </div>
        
    </Layout>
  )
}

export default Pagenotfound