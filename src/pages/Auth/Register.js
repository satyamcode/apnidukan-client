import React ,{useState}from 'react' //we create multiple state 
import Layout from '../../components/Layout/Layout'
// import {toast} from 'react-toastify'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast  from 'react-hot-toast';
import "../../styles/AuthStyles.css";


const Register = () => {
  const [name,setName]=useState(""); //{getter, setter} we can set the name and get from name
  const [email,setEmail]=useState(""); 
  const [password,setPassword]=useState(""); 
  const [phone,setPhone]=useState(""); 
  const [address,setAddress]=useState("");  
  const [answer,setAnswer]=useState("");  
  const  navigate=useNavigate();
  // from submit function

  const handleSubmit=async(e)=>{
    e.preventDefault(); 
    
    try{
        const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
        {name,email,password,phone,address,answer});
        if(res.data.success){
          toast.success(res.data.massage);
          navigate('/login');
        }
        else{
          toast.error(res.data.massage);
        }

    }
    catch(error){
      console.log(error);
      toast.error("something went wrong");
    }
  };
  


  return (
   <Layout title={"Register - apni dukan"}>
    <div className='form-container'>
    
   <form onSubmit={handleSubmit}>
   <h1 className='title'>Sign up</h1>
  <div className="mb-3">
   
    <input 
    type="text" 
    value={name}
    onChange={(e)=> setName(e.target.value)}
    className="form-control" 
    id="exampleInputName" 
    placeholder='Name' 
    required
    />
  
    
  </div>
  <div className="mb-3">
   
    <input 
    type="email" 
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    className="form-control" 
    id="exampleInputmail" 
    placeholder='Emailid' 
    required/>
    
  </div>

  <div className="mb-3">
   
    <input 
    type="password" 
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder='Password'
    required/>
  </div>
  <div className="mb-3">
    
    <input 
    type="text"
    value={phone} 
    onChange={(e)=> setPhone(e.target.value)}
    className="form-control" 
    id="exampleInputPhone" 
    placeholder='Phone number' 
    required/>
    
  </div>
  <div className="mb-3">
    
    <input 
    type="text" 
    value={address}
    onChange={(e)=> setAddress(e.target.value)}
    className="form-control" 
    id="exampleInputAddress" 
    placeholder='Address' 
    required/>
    
  </div>
  <div className="mb-3">
    
    <input 
    type="text" 
    value={answer}
    onChange={(e)=> setAnswer(e.target.value)}
    className="form-control" 
    id="exampleInputBackupPassword" 
    placeholder='enter backup password' 
    required/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Signup</button>
</form>

    </div>
    
   </Layout>
  )
}

export default Register