

import React ,{useState}from 'react' //we create multiple state 
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
import toast  from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import { useAuth } from '../../context/auth';



const Login = () => {
  //{getter, setter} we can set the name and get from name
  const [email,setEmail]=useState(""); 
  const [password,setPassword]=useState(""); 
  const [auth,setAuth]=useAuth();

  const  navigate=useNavigate();
  const location=useLocation();


  const handleSubmit=async(e)=>{
    e.preventDefault(); 
    try{
        const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
        {email,password});
        if(res.data.success){
          toast.success(res.data && res.data.massage);
          setAuth({
            ...auth,
            user: res.data.user,
            token:res.data.token,

          });
          localStorage.setItem('auth',JSON.stringify(res.data));
          navigate(location.state||'/');
        //   
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
    <Layout title={"login-Apni dukan"}>
        <div className='form-container'>
        
   <form onSubmit={handleSubmit}>
   <h1 className='title'>LOGIN</h1>
  
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
 
  <div className='mb-3'>
  <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')
  }}> Forget Password</button >
  </div>
  
 
  <button type="submit" className="btn btn-primary">Login</button>
</form>

    </div>
    </Layout>
  )
}

export default Login