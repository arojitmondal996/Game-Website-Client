// import React, { useContext, useState } from 'react';
// import { Navigate, NavLink, useNavigate } from "react-router-dom";
// import { AiOutlineGoogle } from 'react-icons/ai';
// import { authContext } from '../AuthProvider/AuthPRovider';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// const Register = () => {
//     const { } = useContext(authContext)
//     const { handleRegister, handleGoogleLogin, manageProfile } = useContext(authContext)
//     const [error, setError] = useState("")
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = e => {
//         e.preventDefault()
//         const name = e.target.name.value
//         const email = e.target.email.value
//         const photo = e.target.photo.value
//         const password = e.target.password.value
//         // password 6 character na hole dhukte debe na
//         if (password.length < 6) {
//             setError("Password must be at least 6 character");
//             return;
//         }
//         if (!password) {
//             setError("Password didn't match")
//             return;
//         }
//         // sign up korar somoy check korbo speacial carecter ase kina
//         if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
//             setError("password will be one uppercase, lowecase, number, & special character");
//             return;
//         }
//         const result = { name, email, photo, password }
//         console.log(result)

//         // register
//         handleRegister(email, password)
//             .then(res => {
//                 manageProfile(name, photo)
//                 navigate("/")
//             })
//     }
//     // google log in
//     const handleGoogleLog = () => {
//         handleGoogleLogin()
//             .then(() => {
//                 navigate("/")
//             })
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <div className='p-20 bg-black'>
//                 <div className='p-60'
//                     style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         height: "100vh",
//                         backgroundColor: "black",
//                         fontFamily: "Arial, sans-serif",
//                     }}
//                 >
//                     <div className='bg-black border border-1px border-solid rounded-xl'
//                         style={{
//                             display: "flex",
//                             borderRadius: "8px",
//                             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//                             overflow: "hidden",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 flex: 1,
//                                 padding: "40px",
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 justifyContent: "center",
//                             }}
//                         >
//                             <h2 className='text-white font-semibold text-2xl' style={{ marginBottom: "20px", textAlign: "center",}}>
//                                 Sign Up with
//                             </h2>
//                             <div
//                                 style={{
//                                     display: "flex",
//                                     justifyContent: "center",
//                                     gap: "10px",
//                                     marginBottom: "20px",
//                                 }}
//                             >
//                                 <NavLink className="items-center flex justify-center"
//                                     style={{
//                                         width: "40px",
//                                         height: "40px",
//                                         borderRadius: "50%",
//                                         border: "none",
//                                         cursor: "pointer",
//                                         fontSize: "18px",
//                                         color: "#fff",
//                                     }}
//                                 >
//                                     <button className='text-2xl' to="/" onClick={handleGoogleLog}><AiOutlineGoogle /></button>
//                                 </NavLink>        
//                             </div>
//                             <div
//                                 style={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     margin: "20px 0",
//                                     position: "relative",
//                                 }}
//                             >
//                                 <div style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
//                                 <span
//                                     style={{
//                                         padding: "0 10px",
//                                         color: "#888",
//                                         position: "relative",
//                                         zIndex: 1,
//                                     }}
//                                 >
//                                     Or
//                                 </span>
//                                 <div style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
//                             </div>
//                             <div>
//                                 <div style={{ marginBottom: "15px" }}>
//                                     <label className='text-white'
//                                         htmlFor="name"
//                                         style={{ display: "block", marginBottom: "5px" }}
//                                     >
//                                         Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name" placeholder="name"
//                                         style={{
//                                             width: "100%",
//                                             padding: "10px",
//                                             border: "1px solid #ccc",
//                                             borderRadius: "4px",
//                                         }}
//                                     />
//                                 </div>
//                                 <div style={{ marginBottom: "15px" }}>
//                                     <label className='text-white'
//                                         htmlFor="email"
//                                         style={{ display: "block", marginBottom: "5px" }}
//                                     >
//                                         Email address
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         placeholder="email"
//                                         style={{
//                                             width: "100%",
//                                             padding: "10px",
//                                             border: "1px solid #ccc",
//                                             borderRadius: "4px",
//                                         }}
//                                     />
//                                 </div>
//                                 <div style={{ marginBottom: "15px" }}>
//                                     <label className='text-white'
//                                         htmlFor="photo"
//                                         style={{ display: "block", marginBottom: "5px"}}
//                                     >
//                                         Photo Url
//                                     </label>
//                                     <input
//                                         type="photo"
//                                         id="photo"
//                                         name="photo"
//                                         placeholder="photo"
//                                         style={{
//                                             width: "100%",
//                                             padding: "10px",
//                                             border: "1px solid #ccc",
//                                             borderRadius: "4px",
//                                         }}
//                                     />
//                                 </div>
//                                 <div className='relative' style={{ marginBottom: "15px" }}>
//                                     <label className='text-white'
//                                         htmlFor="password"
//                                         style={{ display: "block", marginBottom: "5px" }}
//                                     >
//                                         Password
//                                     </label>
//                                     <input
//                                         type={showPassword ? "text" : "password"}
//                                         id="password"
//                                         name="password"
//                                         placeholder="password"
//                                         style={{
//                                             width: "100%",
//                                             padding: "10px",
//                                             border: "1px solid #ccc",
//                                             borderRadius: "4px",
//                                         }}
//                                     />
//                                     <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-2 top-10'>
//                                         {
//                                             showPassword ? <FaEyeSlash /> : <FaEye />
//                                         }
//                                     </button>
//                                 </div>
//                                 {
//                                     error && <p className='text-red-500'>{error}</p>
//                                 }
//                                 <div
//                                     style={{
//                                         display: "flex",
//                                         justifyContent: "space-between",
//                                         alignItems: "center",
//                                         fontSize: "14px",
//                                         marginBottom: "20px",
//                                     }}
//                                 >
//                                 </div>
//                                 <button
//                                     style={{
//                                         width: "100%",
//                                         padding: "10px",
//                                         backgroundColor: "#007bff",
//                                         border: "none",
//                                         borderRadius: "4px",
//                                         color: "#fff",
//                                         fontSize: "16px",
//                                         cursor: "pointer",
//                                         transition: "background-color 0.3s",
//                                     }}
//                                 >
//                                     Signup Now
//                                 </button>
//                             </div>
//                             <p
//                                 style={{
//                                     textAlign: "center",
//                                     marginTop: "20px",
//                                     fontSize: "14px",
//                                     color: "#555",
//                                 }}
//                             >
//                                 Already have an account Please?{" "}
//                                 <NavLink to="/login" href="#" style={{ color: "#007bff", textDecoration: "none" }}>
//                                     Sign In
//                                 </NavLink>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default Register;

import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { authContext } from "../AuthProvider/AuthPRovider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { handleRegister, handleGoogleLogin, manageProfile } = useContext(authContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
            setError("Password must include uppercase, lowercase, number, and special character.");
            return;
        }

        handleRegister(email, password)
            .then(() => {
                manageProfile(name, photo);
                navigate("/");
            })
            .catch((err) => setError(err.message));
    };

    const handleGoogleLog = () => {
        handleGoogleLogin()
            .then(() => navigate("/"))
            .catch((err) => setError(err.message));
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 text-white rounded-lg shadow-lg max-w-md w-full p-6 space-y-6"
            >
                <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
                <div className="flex justify-center space-x-4">
                    <button
                        type="button"
                        onClick={handleGoogleLog}
                        className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition"
                    >
                        <AiOutlineGoogle size={24} />
                    </button>
                </div>
                <div className="text-center text-gray-400">Or</div>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block text-sm">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-500"
                            placeholder="Enter photo URL"
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-indigo-500"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 top-9 text-gray-400"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <button
                    type="submit"
                    className="w-full p-2 bg-[#0056b3] hover:bg-indigo-700 rounded text-white font-semibold"
                >
                    Signup Now
                </button>
                <p className="text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <NavLink to="/login" className="text-indigo-500 hover:underline">
                        Sign In
                    </NavLink>
                </p>
            </form>
        </div>
    );
};

export default Register;
