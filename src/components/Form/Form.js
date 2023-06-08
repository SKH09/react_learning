import React, {useState} from "react";


const Form = () => {

    const [details, setDetails] = useState({
        name:"",
        email:"",
        password:"",
        address:"",
    })

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setDetails((prev) => {
            return{...prev, [name]: value}
        })
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(details);
    }
    return <form style={{padding:'30px', marginTop:'20px',border:'3px solid black', borderRadius:'20px', display:'flex',flexDirection:'column',justifyContent:'start', alignItems:'center' }} onSubmit={handleSubmit}>
        <h1 style={{color:'white',textShadow:'0px 0px 5px black',}}>1. Application Form using State</h1>
        <h3 style={{fontSize:'24px',color:'blue'}} >Name:</h3> <input style={{border:'none', borderRadius:'10px',width:'200px',padding:'10px 40px',backgroundColor:'orange'}} type="text" name="name" onChange={handleChange}/>
        <h3 style={{fontSize:'24px',color:'blue'}}>Email:</h3> <input style={{border:'none', borderRadius:'10px',width:'200px',padding:'10px 40px',backgroundColor:'orange'}}type="email" name="email" onChange={handleChange}/>
        <h3 style={{fontSize:'24px',color:'blue'}}>Password:</h3> <input style={{border:'none', borderRadius:'10px',width:'200px',padding:'10px 40px',backgroundColor:'orange'}}type="password" name="password" onChange={handleChange}/>
        <h3 style={{fontSize:'24px',color:'blue'}}>Address:</h3> <textarea style={{border:'none', borderRadius:'10px',width:'200px',padding:'10px 40px',backgroundColor:'orange'}}name="address" onChange={handleChange}></textarea> <br/>
        <button style={{width:'150px', fontSize:'30px',marginTop:'20px',padding:'10px', backgroundColor:'black',color:'white', border:'none', borderRadius:'20px'}} type="submit">Submit</button>
    </form>
}


export default Form;