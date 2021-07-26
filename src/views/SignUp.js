import React, { useEffect, useRef,useState } from "react";
import "../assets/css/forms-main.min.css";
import SignUpSVG from "../assets/img/register.svg";
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useAuth } from "../context/authContext"
import {Link,useHistory}from 'react-router-dom'
export default function SignUp() {
  //refs
  const sectionRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

//states
const [error,setError]=useState('')
const [loading,setLoading]=useState(false)

//hooks
const {signup,currentUser}=useAuth()
const history=useHistory()

//side effect
  useEffect(() => {
    sectionRef.current.className += " animate";
  }, []);
  
  //functions
  async function handleSubmit(e){
e.preventDefault();

if(passwordRef.current.value !== passwordConfirmRef.current.value){
  return setError('passwords do not match')
}

try{
  setError('')
  setLoading(true)
  await signup(emailRef.current.value, passwordRef.current.value);
  history.push("/admin/dashboard")
}catch(error){
  setError(error.message)
}
setLoading(false)
  }



  return (
    <section ref={sectionRef}>
      <div className="form__container">
        <div className="otherAction">
          <div className="otherAction__desc">
            <h4 className="otherAction__title">Own an account ?</h4>
            <p className="otherAction__text">
              If you are already one of us, just log in !
            </p>
            <Link to="/signin" className=" otherAction__btn">Log In</Link>
          </div>
          <div className="otherAction__img__container">
            <img
              src={SignUpSVG}
              alt="signin-rocket-svg"
              className="otherAction__img"
            />
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="form__title">SIGN UP</h3>
          <div className="form__input__group">
          {error&& <b className="form__alert__danger">
            {error}</b>}
          </div>
          <div className="form__input__group">
            <label className="form__input__label">Email</label>
            <div className="form__input__wrapper">
              <PersonIcon style={{color:"#767676",fontSize:'20px'}} />
              <input
                type="email"
                ref={emailRef}
                className="form__input"
                placeholder="Enter your email"
                autoComplete="false"
              />
            </div>
          </div>

          <div className="form__input__group">
            <label className="form__input__label">Password</label>
            <div className="form__input__wrapper">
              <VpnKeyIcon style={{color:"#767676",fontSize:'20px'}} />
              <input
                type="password"
                ref={passwordRef}
                className="form__input"
                placeholder="Enter your password"
                autoComplete="false"
              />
            </div>
          </div>
          <div className="form__input__group">
            <label className="form__input__label">Password Confirmation</label>
            <div className="form__input__wrapper">
              <VpnKeyIcon style={{color:"#767676",fontSize:'20px'}} />
              <input
                type="password"
                ref={passwordConfirmRef}
                className="form__input"
                placeholder="Enter your password"
                autoComplete="false"
              />
            </div>
          </div>
          <button className="form__btn">LET'S GO</button>
        </form>
      </div>
    </section>
  );
}
