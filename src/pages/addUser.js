import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { firestore } from "../config/firebase";
// for toast

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// for firbase
const initialState = { fullName: "", age: "", country: "" };
export const AddUser = () => {
    const [data, setData] = useState(initialState);
    // for firebase
    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
        // console.log(e.target.name);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit");
        // console.log(data);
        const { fullName, age, country } = data
        try {
            const docRef = await addDoc(collection(firestore, "users"), { fullName, age, country });
            console.log("Document written with ID: ", docRef.id);
            setData(initialState);
            toast.success('Your Data Has been Submitted ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } catch (e) {
            console.error("Error adding document: ", e);
        }
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
                                                name="fullName"
                                                className="form-control"
                                                required
                                                value={data.fullName}
                                                onChange={handleChange}

                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3 mt-2">
                                        <div className="col">
                                            <input
                                                type="number"
                                                name="age"
                                                placeholder="Age"
                                                required
                                                className="form-control"
                                                value={data.age}
                                                onChange={handleChange}


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
                                                required
                                                value={data.country}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-outline-primary w-100">Add User </button>
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
