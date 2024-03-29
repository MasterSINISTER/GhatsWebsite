import React,{useEffect} from "react";
import "./customNav.css";
import { Link } from "react-router-dom";
export default function CustomNav() {
  useEffect(() => {
    // Add event listeners for dropdown hover
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });
  
    // Cleanup event listeners on component unmount
    return () => {
      dropdownItems.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  const handleMouseEnter = (event) => {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
    dropdownMenu.classList.add('show');
  };
  
  const handleMouseLeave = (event) => {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
      dropdownMenu.classList.remove('show');
  };


  const mainIndex = {
    zIndex: '999',
  };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top" id='custom-navbar' style={{padding:'40px',width:'50%',marginLeft:'25%'}}>
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-5 mb-lg-0 mg-10 position-absolute top-10 start-50 translate-middle-x">
              <li className="nav-item1">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{fontSize:'1.5rem',fontWeight:'600'}}
                >
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-5"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{fontSize:'1.5rem',fontWeight:'600'}}
                >
                  Explore Now
                </a>
                <ul className="dropdown-menu" style={mainIndex}>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      style={mainIndex}
                    >
                      Ghats
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      style={mainIndex}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-5"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{fontSize:'1.5rem',fontWeight:'600'}}
                >
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/team">
                      Meet Our Team
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/support">
                      Support
                    </a>
                  </li>
                </ul>
              </li>

              {/* 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle ms-5" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png' alt="" className='account-img' />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/login">Login</a></li>
            
          </ul>
          
        </li> */}

              {/* <li className="nav-item dropdown">
            <Link className="nav-link ms-5" aria-current="page" to="/team">About Us</Link>
            </li> */}
            </ul>
            {/* <div className=''>
        <img src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png' alt=" " className='account-img'/>
      </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
