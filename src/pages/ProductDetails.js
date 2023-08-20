
import axios from 'axios'

import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from './../components/Layout/Layout';

const ProductDetails = () => {
    const params=useParams()
    // const navigate = useNavigate();
    const [product,setProduct]=useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);

   
    // get product

    const getProduct =async()=>{
    try{
        const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`)
        setProduct(data?.product);
        getSimilarProduct(data?.product._id,data?.product.category._id);
    }
    catch(error){
        console.log(error);
    }
}
// get similar product
const getSimilarProduct = async (pid,cid) => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`);

      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
   // intial details
   useEffect(()=>{
    if(params?.slug) 
    getProduct();
},[params?.slug])

  return (
    <Layout>
    
    <div className='row container mt-2'>
        <div className='col-md-4'>
        {/* <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
        className="card-img-top"
        alt={product?.name}
        /> */}
         <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product?._id}`}
         className="card-img-top" alt="..." />
        </div>
        <div className='col-md-8 '>
            <h1 className='text-center'>{product.name}</h1>
            <h6>Category:{product?.category?.name}</h6>
            <h6 className='text-center'>{product.description}</h6>
            
            <hr/>
            <h5 >Price: Rs {product.price}</h5>
            <button className="btn btn-secondary ms-1">ADD TO CART</button>
            
            



        </div>

    </div>
    <hr/>
    <hr/>
    <div className='row'>
        <h5>similar products</h5>
        {relatedProducts.length<1 && (<p className='text-center'>NO similar product found</p>)}
        <div className='d-flex flex-wrap'>
        {relatedProducts?.map(p=>(
                
                    <div className="card m-2" style={{width: '18rem'}} >
                    <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description.substring(0,30)}</p>
                        <p className="card-text">Rs{p.price}</p>
                        
                        <button className="btn btn-secondary ms-1">add to cart</button>
                    </div>
                </div>

                
                

            ))}
        </div>
    

        </div>
    
    
    </Layout>
  )
}

export default ProductDetails