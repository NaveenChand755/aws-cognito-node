import React, {useState}from "react";
import { useHistory } from "react-router-dom"; 
import axios from 'axios'

 const Login = () =>{
    const [formData, setFormData] = useState({
        username: "",
        password: ""
      });

      const history = useHistory();

      const {  username, password } = formData;

      const onChange = e => setFormData({
        ...formData, [e.target.name] : e.target.value
        
    })

    

    const onSubmit = async e => {
        e.preventDefault();
          const User = {
              username,
              password
          }
          try {
              const config = {
                  headers:{
                      'Content-Type':'application/json'
                  }
              }
              const body = JSON.stringify(User)
              const res = await axios.post('/auth/login', body , config)  
              alert(res.data.statusMessage) 
              if(res.data.statusCode == '200')  
              history.push("/ngnix-logs");    
          } catch (error) {
               alert(error.res.data)
          }
    }


        return (
            <form  onSubmit ={e => onSubmit(e)} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="username" className="form-control" name="username"placeholder="Enter User Name" value={username} onChange ={e=>onChange(e)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={password} onChange ={e=>onChange(e)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }

    export default Login