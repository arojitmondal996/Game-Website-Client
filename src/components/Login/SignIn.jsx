import { NavLink, useNavigate } from "react-router-dom";
import image from "../../assets/register.webp"
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authContext } from "../AuthProvider/AuthPRovider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const { handleGoogleLogin, handleLogin } = useContext(authContext)
    const [showPassword, setShowPassword] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState("")

    // for changing password need to make a useRef
    const emailRef = useRef();

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        handleLogin(email, password)
            .then(res => {
                navigate("/")
                toast("Wow so easy!");
            })
            .catch(err => {
                setError(err.message)
            })
    }

    const handleGoogle = () => {
        handleGoogleLogin()
            .then(() => {
                navigate("/")
            })
    }

    // if you forget your password then try it
    const handleForgetPassword = () => {
        console.log("get me email address", emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            console.log("Please provide a valid email address")
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password Reset email sent, please check your email")
                })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        backgroundColor: "black",
                        fontFamily: "Arial, sans-serif",
                    }}
                >
                    <div className="bg-black border border-1px border-solid rounded-xl"
                        style={{
                            display: "flex",
                            backgroundColor: "black",
                            // borderRadius: "8px",
                            // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            boxShadow: "white",
                            // border: "1px solid",
                            overflow: "hidden",
                            maxWidth: "800px",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "warning",
                            }}
                        >
                            <img
                                className="h-[580px]"
                                src={image} // Replace with your actual image URL
                                alt="Illustration"
                            // style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </div>
                        <div
                            style={{
                                flex: 1,
                                padding: "40px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <h2 className="text-white text-xl font-semibold" style={{ marginBottom: "20px", textAlign: "center", color: "" }}>
                                Sign in with
                            </h2>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "10px",
                                    marginBottom: "20px",
                                }}
                            >
                                <NavLink className="items-center border-gray-200 bg-black flex justify-center"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        // border: "none",
                                        cursor: "pointer",
                                        fontSize: "18px",
                                        color: "#fff",
                                        // backgroundColor: "#3b5998",
                                    }}
                                >
                                    <NavLink className="font-bold text-2xl" onClick={handleGoogle}><AiOutlineGoogle /></NavLink>
                                </NavLink>
                                {/* <button className="items-center flex justify-center"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: "18px",
                                        color: "#fff",
                                        backgroundColor: "#1da1f2",
                                    }}
                                >
                                    <FiGithub />
                                </button> */}
                                {/* <button
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    color: "#fff",
                                    backgroundColor: "#0077b5",
                                }}
                            >
                                L
                            </button> */}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "20px 0",
                                    position: "relative",
                                }}
                            >
                                <div style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
                                <span className=""
                                    style={{
                                        // backgroundColor: "#fff",
                                        padding: "0 10px",
                                        color: "#888",
                                        position: "relative",
                                        zIndex: 1,
                                    }}
                                >
                                    Or
                                </span>
                                <div style={{ flex: 1, height: "1px", backgroundColor: "#ccc" }}></div>
                            </div>
                            <div>
                                <div style={{ marginBottom: "15px" }}>
                                    <label className="text-white"
                                        htmlFor="email"
                                        style={{ display: "block", marginBottom: "5px", }}
                                    >
                                        Email address
                                    </label>
                                    <input
                                        ref={emailRef}
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                        }}
                                    />
                                </div>
                                <div className='relative' style={{ marginBottom: "15px" }}>
                                    <label className="text-white"
                                        htmlFor="password"
                                        style={{ display: "block", marginBottom: "5px",}}
                                    >
                                        Password
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder="password"
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "4px",
                                        }}
                                    />
                                    <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-2 top-10'>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </button>
                                    {
                                        error && <p className='text-red-500 mt-5 text-center'>{error.split("/")[1].slice(0, 18)}</p>
                                    }
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        fontSize: "14px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <label onClick={handleForgetPassword} className="label">
                                        {/* <input type="checkbox" /> Remember me */}
                                        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            backgroundColor: "#007bff",
                                            border: "none",
                                            borderRadius: "4px",
                                            color: "#fff",
                                            fontSize: "16px",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s",
                                        }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                            <p
                                style={{
                                    textAlign: "center",
                                    marginTop: "20px",
                                    fontSize: "14px",
                                    color: "#555",
                                }}
                            >
                                Don't have an account?{" "}
                                <NavLink to="/register" href="#" style={{ color: "#007bff", textDecoration: "none" }}>
                                    Register
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </form>

        </div>

    );
};

export default SignIn;