import { useRef, useState } from "react";
import Footer from "../../Footer/Footer";
import { addUser } from "../../Admin/adminAuth";
import { useNavigate } from "react-router-dom";

function Signup (){
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatRef = useRef(null);
  const [message, setMessage] = useState({ type: "", text: "" });
  const gotologin = useNavigate ();
  const handleSignup = () => {
    const fullName = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeat = repeatRef.current.value;

    if (!fullName.trim() || !email.trim() || !password) {
      setMessage({ type: "error", text: "Please fill in username, email and password." });
      return;
    }
    if (password !== repeat) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }
    const result = addUser({ fullName, email, password });
    if (!result.ok) {
      setMessage({ type: "error", text: result.error });
      return;
    }
    navigate("/ThankYou", { state: { email } });
  };
    return(
        <>
            <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans mt-5">
              <div className="w-full max-w-5xl bg-white shadow-lg rounded-sm p-6 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img
                    src="https://cdn.imgurl.ir/uploads/r261765_.png"
                    alt="Healthy food bowl"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl font-medium text-gray-900 mb-5">
                      Want to join our Family
                    </h1>
                        <div className="border border-gray-200 rounded-sm">
                      <div className="flex items-center px-4 h-12 border-b-2 border-[#B85F57]">
                        <i className="fa-regular fa-user text-gray-400 text-sm w-6"></i>
                        <input
                          type="text"
                          placeholder="Username"
                          ref={usernameRef}
                          className="input input-ghost h-full w-full text-sm focus:outline-none focus:bg-transparent"
                        />
                      </div>
                              <div className="flex items-center px-4 h-12 border-b border-gray-200">
                        <i className="fa-regular fa-envelope text-gray-400 text-sm w-6"></i>
                        <input
                          type="email"
                          placeholder="Enter Your Email "
                          ref={emailRef}
                          defaultValue={""}
                          className="input input-ghost h-full w-full text-sm focus:outline-none focus:bg-transparent"
                        />
                        <i className="fa-solid fa-circle-check text-[#B85F57] text-lg"></i>
                      </div>
                          <div className="flex items-center px-4 h-12 border-b border-gray-200">
                        <i className="fa-solid fa-lock text-gray-400 text-sm w-6"></i>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          ref={passwordRef}
                          className="input input-ghost h-full w-full text-sm focus:outline-none focus:bg-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-gray-400"
                        >
                          <i
                            className={
                              showPassword
                                ? "fa-regular fa-eye-slash"
                                : "fa-regular fa-eye"
                            }
                          ></i>
                        </button>
                      </div>
                              <div className="flex items-center px-4 h-12">
                        <i className="fa-solid fa-lock text-gray-400 text-sm w-6"></i>
                        <input
                          type="password"
                          placeholder="Repeat password"
                          ref={repeatRef}
                          className="input input-ghost h-full w-full text-sm focus:outline-none focus:bg-transparent"
                        />
                      </div>
                    </div>
                            <label className="flex items-center gap-2 mt-4 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-xs rounded-sm checked:bg-[#B85F57] checked:border-[#B85F57] checked:text-white"
                      />
                      <span className="text-xs text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="font-medium underline">
                          terms & policy
                        </a>
                      </span>
                    </label>
                    {message.text && (
                      <p className={"text-xs mt-3 " + (message.type === "error" ? "text-red-500" : "text-green-600")}>
                        {message.text}
                      </p>
                    )}
                            <button onClick={handleSignup} className="btn border-0 bg-[#B85F57] hover:bg-[#a35249] text-white font-medium rounded-sm shadow-lg w-32 h-10 min-h-0 mt-5">
                      Sign up
                    </button>
                            <p className="text-xs text-gray-500 mt-8 mb-3">Or you can join with</p>
                    <div className="flex gap-3">
                      <button className="btn btn-outline border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-500 font-normal text-xs rounded-sm flex-1 h-9 min-h-0">
                        <i className="fa-brands fa-google text-[#EA4335] text-base"></i>
                        Sign in with Google
                      </button>
                      <button className="btn btn-outline border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-500 font-normal text-xs rounded-sm flex-1 h-9 min-h-0">
                        <i className="fa-brands fa-facebook text-[#1877F2] text-base"></i>
                        Sign in with Google
                      </button>
                    </div>
        
                    <p className="text-xs text-gray-500 mt-5">
                      Already have an account?{" "}
                      <button
                          onClick={() => gotologin("/login")}
            href=""
            className="
              text-[#B85C54]
           "
          >
            Log in
          </button>
                    </p>
                  <div className="flex justify-end">
                            <img className="w-[120px]" src="https://s6.uupload.ir/files/perfectrecipe-logo_33k1.png" alt="" />
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
        </>
    )
}
export default Signup;