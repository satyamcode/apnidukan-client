import React ,{useState}from 'react' //we create multiple state 
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast  from 'react-hot-toast';
import "../../styles/AuthStyles.css";


const ForgotPassword = () => {
        //{getter, setter} we can set the name and get from name
        const [email,setEmail]=useState(""); 
        const [newPassword,setNewPassword]=useState(""); 
        const [answer,setAnswer]=useState(""); 
      
      
        const  navigate=useNavigate();
      
      
        const handleSubmit=async(e)=>{
          e.preventDefault(); 
          try{
              const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
              {email,newPassword,answer});
              if(res.data.success){
                toast.success(res.data.massage);
                
               
                navigate('/');
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
    <Layout title={'forgot Password -Apni Dukan'}>
       <div className='form-container'>
   
   <form onSubmit={handleSubmit}>
   <h1 className='title'>RESET PASSWORD</h1>
  
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
    type="text" 
    value={answer}
    onChange={(e)=> setAnswer(e.target.value)}
    className="form-control" 
    id="exampleInputBackup" 
    placeholder='enter backup password' 
    required/>
    
  </div>

  <div className="mb-3">
   
    <input 
    type="password" 
    value={newPassword}
    onChange={(e)=> setNewPassword(e.target.value)}
    className="form-control" 
    id="exampleInputPassword1" 
    placeholder='NewPassword'
    required/>
  </div>
  
 
  <button type="submit" className="btn btn-primary">Reset</button>
</form>
</div>
    </Layout>
  )
}

export default ForgotPassword