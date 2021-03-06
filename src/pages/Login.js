import React, { useState, useEffect } from "react";
import "../pages/index.css";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from "../config/firebase";
// for firbase
const initialState = { email: "", password: "" };
// firebase authentications
export const Login = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        console.log(user);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // console.log("user is logged out ");
        console.log(auth.currentUser);

        // ...
      }


    })
  }, []);

  const [data, setdata] = useState(initialState);

  // for firebase
  const handleChange = (e) => {
    setdata({
      ...data, [e.target.name]: e.target.value,

    })
    console.log(e.target.name);
  }



  const buttons = [
    { color: "#1877f2", icon: "facebook" },
    { color: "#25d366", icon: "whatsapp" },
    { color: "#dd4b39", icon: "google plus" },
    { color: "#1da1f2", icon: "twitter" },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    //destructuring use below
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user Logged In ");
        console.log(userCredential);
        console.log(user);

        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
        // ..
      });
  }


  // for signout
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("signout button clicked");
      setUser({});
    }).catch((error) => {
      // An error happened.
    });
  }

  // show auth user profile

  const showAuthUser = () => {
    console.log(auth.currentUser);

  }
  //  show update Profile
  const showUpdateProfile = () => {
    const user = auth.currentUser;
    updateProfile(user, {
      displayName: "AWAIS", photoURL: "https://res.cloudinary.com/dtzcvsa8l/image/upload/v1656487646/AWAIS%20S/IMG_20190609_093124_uc5rdn.jpg"
    }).then(() => {
      console.log("Profile Updated!")
      // ...
    }).catch((error) => {
      console.log(error);
      // An error occurred
      // ...
    });

  }

  // for email verifications

  const handleEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email Verification Sent!");
        // ...
      }).catch((error) => {
        console.log(error);
        // An error occurred
        // ...
      });
  }
  return (
    <div className="login d-flex justify-content-center align-items-center">
      <div className="container">
        {
          user.email ?
            <div className="row">
              <div className="col text-center">
                <img src={user.photoURL} alt={`${user.email} Profile Pic`} className="img-fluid " style={{ borderRadius: "100%", height: "70px", width: "70px" }} />
                <h2 className="text-white">User Email:{user.email}</h2>
                <h2 className="text-white">User UID:{user.uid}</h2>
                <h2 className="text-white">User Name:{user.displayName}</h2>

                <button onClick={showAuthUser} className="btn btn-primary" >show auth current user  </button><br />
                <button onClick={showUpdateProfile} className="btn btn-warning my-3" >Update User Profile </button><br />
                <button onClick={handleSignOut} className="btn btn-danger" >logout</button><br />
                <button onClick={handleEmail} className="btn btn-dark my-4" >send verification email</button>
              </div>
            </div> :


            <div className="row">
              <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 ">
                <div className="card p-3 p-md-4 shadow-lg p-3 mb-5 bg-body rounded">
                  <div className="row">
                    <div className="col">
                      <h1 className="text-center mb-5">SignUp</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <div className="col">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="form-control"
                            onChange={handleChange}

                          />
                        </div>
                      </div>

                      <div className="row mb-3 mt-2">
                        <div className="col">
                          <input
                            type="Password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            onChange={handleChange}

                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button className="btn btn-primary w-100">Register Form </button>
                        </div>
                      </div>
                    </form>
                    <div className="row d-flex justify-content-center text-center">
                      <div className="col">
                        {buttons.map((button, i) => {
                          // console.log(i, button);
                          return (
                            <button
                              key={i}
                              className="btn rounded-circle text-white me-3 mt-3 ms-2 "
                              style={{ background: button.color }}
                            >
                              <i className={`bi bi-${button.icon}`}></i>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  );
};
