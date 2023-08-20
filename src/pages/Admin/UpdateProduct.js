import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import  toast  from 'react-hot-toast';
import axios from 'axios';
import {Select} from 'antd';
import { useNavigate,useParams} from 'react-router-dom';
import Products from './Products';
const {Option} =Select;

const UpdateProduct = () => {
  const  navigate=useNavigate();
  const params=useParams();
  const [categories,setCategories]=useState([]);
  const [category,setCategory]=useState("");
  const [name,setName]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState("");
  const [quantity,setQuantity]=useState("");
  const [shipping,setshipping]=useState("");
  const [photo,setPhoto]=useState("");
  const [id,setId]=useState("");
  
//   get single product

    const getSingleProduct=async()=>{
        try{
            const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`);
            setName(data.product.name);
            setId(data.product._id);
            setDescription(data.product.description);
            setPrice(data.product.price)
            setQuantity(data.product.quantity);
            setshipping(data.product.shipping);
            setPhoto(data.product.photo);
            setCategory(data.product.category._id)
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getSingleProduct();
        //eslint-disbale-nextline
    },[])

  //get all categories
  const getAllcategory=async()=>{
    try{
      const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
      if(data?.success){
        setCategories(data?.category);
      }
    }
    catch(error){
      console.log(error);
      toast.error('something went wrong in gtting category')
    }
  };
  useEffect(()=>{
    getAllcategory();
  },[]);

  // create product function
  const handleUpdate=async(e)=>{
    e.preventDefault();
    try{
        const productData=new FormData();
        productData.append("name",name);
        productData.append("description",description);
        productData.append("price",price);
        productData.append("quantity",quantity);
        photo && productData.append("photo",photo);
        productData.append("category",category);
        const {data}= axios.put(`${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`,productData)
        if(data?.success){
          toast.error(data.massage);
          
        }
        else{
          toast.success('prduct updated successfully')
          navigate('/dashboard/admin/products')
        }
    }
    catch(error){
      console.log(error)
      toast.error("error in creating ptoduct/handle create product")
    }

  }
//   ******delete product****

const handledelete =async()=>{
    try{
        let answer=window.prompt('you are going to delete this product');
        if(!answer)return ;

        
        const {data}=await axios.delete(`${process.env.REACT_APP_API}/api/v1/product/delete-product/${id}`);
        toast.success('product deleted successfully');
        navigate('dashboard/admin/products')
    }
    catch(error){
        console.log(error);
        toast.error('something went wrong while deleting product')
    }
}


  return (
    <Layout title={"Dashboard-Create product"}>
        <div className='container-fluid m-3 p-3'>
          <div className='row'>
            <div className='col-md-3'>
              <AdminMenu/>
            </div>
            <div className='col-md-9 '>
                <h1>Update product</h1>
                <div className='m-1 w-75'>
                  <Select bordered={false} placeholder="Select a category" 
                  size="large" showSearch className='form-select mb-3'
                   onChange={(value)=>{setCategory(value)}}
                   value={category}
                   >
                    {categories?.map((c)=>(
                      <Option key={c._id} value={c._id}>{c.name}</Option>
                    ))}

                  </Select>
                <div className='mb-3'>
                  <label  className='btn btn-outline-secondary col-md-12'>
                    {photo? photo.name:"upload photo"} 
                    <input type="file" name="photo" accept='image/*' 
                    onChange={(e)=>setPhoto(e.target.files[0])} hidden/>
                  </label>
                </div>
                <div className='mb-3'>
                  {photo ?(
                    <div className='text-center'>
                      <img src={URL.createObjectURL(photo)} alt='product photo' 
                      height={'200px'} className='img img-responsive'/>
                    </div>
                  ) : (
                    <div className='text-center'>
                      <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${id}`} alt='product photo' 
                      height={'200px'} className='img img-responsive'/>
                    </div>
                  )

                  }
                </div>
                <div className='mb-3'>
                  <input type='text' value={name} placeholder='write product name' 
                  className='form-control'
                  onChange={(e)=>{
                    setName(e.target.value);
                  }} />
                </div>
                <div className='mb-3'>
                  <textarea type='text' value={description} placeholder='write product description' 
                  className='form-control'
                  onChange={(e)=>{
                    setDescription(e.target.value);
                  }} />
                </div>
                <div className='mb-3'>
                  <input type='text' value={price} placeholder='enter product price' 
                  className='form-control'
                  onChange={(e)=>{
                    setPrice(e.target.value);
                  }} />
                </div>
                <div className='mb-3'>
                  <input type='text' value={quantity} placeholder='write product quantity' 
                  className='form-control'
                  onChange={(e)=>{
                    setQuantity(e.target.value);
                  }} />
                </div>
                
                <div className='mb-3'>

                  <Select bordered={false}  placeholder='select shipping' 
                  size="large"
                  showSearch
                  className='form-select mb-3'
                  onChange={(value)=>{
                    setshipping(value);
                  }} 
                  value={shipping ? "yes":"No"}
                  >
                    <Option value='0'>NO</Option>
                    <Option value='1'>YES</Option>

                  </Select>
                </div>
                <div className="mb-3">
                <button className='btn btn-primary' onClick={handleUpdate}>
                UPDATE PRODUCT
                </button>
                </div>
                <div className="mb-3">
                <button className='btn btn-danger' onClick={handledelete}>
                DELETE PRODUCT
                </button>
                </div>

                  
            </div>
            </div>
          </div>
        </div>
       
    </Layout>
  )
}

export default UpdateProduct