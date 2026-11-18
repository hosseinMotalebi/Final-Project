import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { thankYouData } from "../../data/thankyou";

function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const [resent, setResent] = useState(false);
  const email = location.state?.email || thankYouData.defaultEmail;

  return (
    <>
      <div className="min-h-[vh] bg-white flex items-center justify-center p-4 pt-28 font-roboto">
        <div className="w-full max-w-4xl bg-white shadow-lg flex flex-col md:flex-row">
          <img
            src={"https://s6.uupload.ir/files/thankyou_aa1k.png"}
            alt="Taking a photo of food"
            className="md:w-[47%] w-full object-cover"
          />
          <div className="md:w-[53%] p-6 flex flex-col items-center justify-between text-center">
            <div className="flex flex-col items-center justify-center flex-1">
              <h1 className="text-2xl font-medium text-black">
                {thankYouData.title}
              </h1>

              <p className="text-xs text-[#8B8B8B] mt-6">
                {thankYouData.message}
              </p>
              <p className="text-xs text-black mt-5">{email}</p>

              <p className="text-xs text-[#8B8B8B] mt-8">
                {thankYouData.question}
              </p>
              <button
                onClick={() => setResent(true)}
                className="text-xs text-[#B85C54] mt-2 hover:underline"
              >
                {resent ? thankYouData.resentText : thankYouData.resendText}
              </button>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => navigate(-1)}
                  className="px-9 py-2 text-sm text-white bg-[#B85C54] rounded-md shadow-md transition hover:bg-[#A9524A] active:scale-95"
                >
                  {thankYouData.backText}
                </button>
                <button
                  onClick={() => navigate("/Signup")}
                  className="px-8 py-2 text-sm text-black bg-[#EBEBEB] rounded-md shadow-md transition hover:bg-[#d9d9d9] active:scale-95"
                >
                  {thankYouData.editText}
                </button>
              </div>
            </div>
            <img
              className="w-[100px] self-end"
              src="https://uploadkon.ir/uploads/306b26_26perfect-recipe-logo.svg"
              alt="PerfectRecipe"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ThankYou;
