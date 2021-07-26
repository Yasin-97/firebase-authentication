import React, { useEffect, useRef,useState } from "react";
import "../assets/css/forms-main.min.css";
import SignInSVG from "../assets/img/log.svg";
import PersonIcon from '@material-ui/icons/Person';
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {

  //refs
  const sectionRef = useRef();
  const emailRef = useRef()

  //states
  const [error, setError] = useState("")
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  //hooks
const { resetPassword } = useAuth()

//side effects
  useEffect(() => {
    sectionRef.current.className += " animate";
  }, []);

  //functions
  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);
    await resetPassword(emailRef.current.value)
      .then(() => {
        setMessage("Check your inbox for further instructions");
      })
      .catch((err) => setError(err.message));
      
    setLoading(false);
  }


  return (
    <section ref={sectionRef}>
      <div className="form__container">
        <div className="otherAction" >
        
          <div className="otherAction__img__container">
            <img
              src={SignInSVG}
              alt="signin-rocket-svg"
              className="otherAction__img"
            />
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="form__title">Password Reset</h3>
          <div className="form__input__group">
         { error&&<b className="form__alert__danger">
            {error}
            </b>}
          {message&&<b className="form__alert__success">{message}</b>}
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

         
          <button className="form__btn">LET'S GO</button>
          <div className="form__other__option">
          <Link className="link" to="/signin">Log in</Link>
          <p>Need account ? <Link className="link" to="/signup">Sign up</Link></p>
          </div>
        </form>
      </div>
    </section>
  );
}
