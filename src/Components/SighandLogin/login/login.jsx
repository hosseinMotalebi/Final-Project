import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { tryAdminLogin, findUser } from "../../Admin/adminAuth";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
            if (await tryAdminLogin(email, password)) {
        navigate("/admin");
        return;
      }
      const user = findUser(email, password);
      if (user) {
        const loggedUser = { id: user.id, fullName: user.fullName, email: user.email };
        localStorage.setItem("logged_in_user", JSON.stringify(loggedUser));
        navigate("/");
        return;
      }
      setError("Email or password is incorrect.");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
            <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-medium text-gray-900 mb-5">
                Welcome back
              </h1>
              <div className="border border-gray-200 rounded-sm">
                <div className="flex items-center px-4 h-12 border-b-2 border-[#B85F57]">
                  <i className="fa-regular fa-envelope text-gray-400 text-sm w-6"></i>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="username"
                    className="input input-ghost h-full w-full text-sm focus:outline-none focus:bg-transparent"
                  />
                </div>
                <div className="flex items-center px-4 h-12">
                  <i className="fa-solid fa-lock text-gray-400 text-sm w-6"></i>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
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
              </div>

              {error && (
                <p className="text-xs text-red-500 mt-3" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn border-0 bg-[#B85F57] hover:bg-[#a35249] text-white font-medium rounded-sm shadow-lg w-32 h-10 min-h-0 mt-5"
              >
                Log in
              </button>

              <p className="text-xs text-gray-500 mt-5">
                Don't have an account?{" "}
                <Link to="/Signup" className="text-[#B85F57]">
                  Sign up
                </Link>
              </p>
            </form>
         <div className="flex justify-end">
                            <img className="w-[120px]" src="https://s6.uupload.ir/files/perfectrecipe-logo_33k1.png" alt="" />
                  </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Login;
