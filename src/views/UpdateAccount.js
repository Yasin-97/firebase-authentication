import React, { useEffect, useRef,useState } from "react";
import "../assets/css/forms-main.min.css";
import SignInSVG from "../assets/img/log.svg";
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useAuth } from "../context/authContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateAccount() {

  //refs
  const sectionRef = useRef();
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  //states
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  //hooks
const { currentUser, updateEmail,updatePassword } = useAuth()
const history = useHistory()

//side effects
  useEffect(() => {
    sectionRef.current.className += " animate";
  }, []);

  //functions
  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/admin/dashboard")
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
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
          <h3 className="form__title">Update account</h3>
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
                defaultValue={currentUser.email}
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
                placeholder="Leave empty to keep unchanged"
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
                placeholder="Leave empty to keep unchanged"
                autoComplete="false"
              />
            </div>
          </div>
          <button className="form__btn">LET'S GO</button>
          <div className="form__other__option">
        <Link className="link" to="/admin/dashboard">Cancel</Link>
      </div>
        </form>
      </div>
    </section>
  );
}
