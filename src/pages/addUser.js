import React, { useState } from "react";
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


    const handleSubmit = (e) => {

    }

    return (
        <div className="login d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 ">
                        <div className="card p-3 p-md-4 shadow-lg p-3 mb-5 bg-body rounded">
                            <div className="row">
                                <div className="col">
                                    <h1 className="text-center mb-5">Add User Data</h1>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input
                                                type="text"
                                                placeholder="Enter Full Name"
                                                name="email"
                                                className="form-control"

                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3 mt-2">
                                        <div className="col">
                                            <input
                                                type="number"
                                                name="age"
                                                placeholder="Password"
                                                className="form-control"

                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3 mt-2">
                                        <div className="col">
                                            <input
                                                type="text"
                                                name="country"
                                                placeholder="Enter Your Country"
                                                className="form-control"

                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-primary w-100">Add User </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
