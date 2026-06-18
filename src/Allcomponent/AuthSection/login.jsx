import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./authcontext"; 
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.message,
        confirmButtonColor: "#f59e0b",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      Swal.fire({
        icon: "success",
        title: "Logged in with Google!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: err.message,
        confirmButtonColor: "#f59e0b",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tr from-slate-900 via-slate-850 to-amber-950 px-4 py-12 relative overflow-hidden">
      
      {/* Decorative blurred soft light blobs matching signup */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl"></div>

      <div className="w-full max-w-lg bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 relative z-10 transition-all duration-300">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-black tracking-wider bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent uppercase">
         Bistro Boss
          </Link>
          <h2 className="text-2xl font-extrabold text-slate-800 mt-3">
            Welcome Back
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Login to access your account securely
          </p>
        </div>

        {/* Dynamic Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email input field with premium icon */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 text-slate-800 font-medium placeholder-slate-400 text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input with Eye Toggle */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0V10.5m-2.812 10.5h14.624c1.096 0 1.962-.931 1.834-2.019l-.863-7.343A1.92 1.92 0 0 0 18.25 10.5H5.75a1.92 1.92 0 0 0-1.876 1.583l-.863 7.341c-.127 1.088.738 2.019 1.834 2.019Z" />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 focus:bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 text-slate-800 font-medium placeholder-slate-400 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.808 7.808L21 21m-2.258-2.258-3.65-3.65M11.24 11.24a2.25 2.25 0 0 0 3.18 3.18m-3.18-3.18a2.25 2.25 0 0 1 3.18 3.18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>

          {/* Forget Password link */}
          <div className="flex justify-end">
            <a href="#" className="text-xs font-semibold text-amber-500 hover:text-amber-600 transition">
              Forgot password?
            </a>
          </div>

          {/* Premium Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-300 text-sm tracking-wide uppercase disabled:opacity-50 disabled:pointer-events-none"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Separator / Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-3 text-slate-400 font-semibold tracking-wider">Or Login With</span>
          </div>
        </div>

        {/* Google Authentication Integration */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-2xl shadow-sm hover:shadow active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 text-sm"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Footer Redirect Link */}
        <p className="text-center mt-6 text-sm text-slate-500">
          Signup I have no Account?{" "}
          <Link
            to="/signup"
            className="text-amber-500 hover:text-amber-600 font-bold hover:underline transition ml-1"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;