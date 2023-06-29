import React , {useEffect}from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";


export default function Navbar() {
  const history = useNavigate()
  // We we use 'a' then page wil reload and send us to our destination, but if we use "Link", it will send us to our desination, without refressing, that's what a single page application should do
  // "Link" should be only use to routing, for other need, we should try button/a
  const path = useLocation().pathname

  useEffect(()=> {
    if(!localStorage.getItem("authorization")){
      history("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const logoutButton = () =>{
    history("/login")
    localStorage.removeItem("authorization")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong>
              To-Do
            </strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className= {`nav-link ${path==="/" ? "active":""}`} aria-current="page" to="/">
                  <strong>
                    Home
                  </strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${path==="/about" ? "active":""}`} to="/about">
                  <strong>
                    About
                  </strong>
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex"> 
          {!localStorage.getItem("authorization") &&  <div>
        <Link className="btn btn-primary btn-sm mx-2" to="/login">Login</Link>
            <Link className="btn btn-primary btn-sm mx-2" to="/signup">SignUp</Link> 
          </div> }
            <button className="btn btn-dark btn-sm mx-2" onClick={logoutButton}>LogOut</button>

          </div>
        </div>
      </nav>
    </>
  );
}
