import React, { useState } from "react";
import "../pages/index.css";
// for firbase
const initialState = { email: "", password: "" };

export const Login = () => {
  const [data, setdata] = useState(initialState);

  // for firebase
  const handleChange = (e) => {
    setdata({
      ...data, [e.target.name]: e.target.value,

    })
    console.log(e.target.name);
  }
  


  // const buttons = [
  //   { color: "#1877f2", icon: "facebook" },
  //   { color: "#25d366", icon: "whatsapp" },
  //   { color: "#dd4b39", icon: "google plus" },
  //   { color: "#1da1f2", icon: "twitter" },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(data);
  };
  return (
    <div className="login d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 ">
            <div className="card p-3 p-md-4 shadow-lg p-3 mb-5 bg-body rounded">
              <div className="row">
                <div className="col">
                  <h1 className="text-center mb-5"> Login</h1>
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
                      <button className="btn btn-primary w-100">login</button>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col">
                    {/* {buttons.map((button, i) => {
                      console.log(i,button);
                      return (
                        <button
                          key={i}
                          className="btn rounded-circle text-white me-3 mt-3 ms-2 "
                          style={{ background: button.color }}
                        >
                          <i className={`bi bi-${button.icon}`}></i>
                        </button>
                      );
                    })} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
