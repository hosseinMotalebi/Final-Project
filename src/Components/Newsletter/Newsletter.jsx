import { useEffect, useRef, useState } from "react";
import { newsletterData } from "../../data/newsletter";

function Newsletter() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const emailRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("newsletterSeen")) {
      return;
    }
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem("newsletterSeen", "true");
    setShow(false);
  };

  const handleSubscribe = () => {
    const email = emailRef.current.value;
    if (!email.includes("@") || !email.includes(".")) {
      setMessage({ type: "error", text: newsletterData.errorText });
      return;
    }
    setMessage({ type: "success", text: newsletterData.successText });
    setTimeout(handleClose, 1500);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 font-roboto">
      <div className="relative w-full max-w-3xl bg-white rounded-md shadow-lg flex flex-col md:flex-row overflow-hidden">
        <img
          src={"https://s6.uupload.ir/files/newsletter_4p8.png"}
          alt="Spices"
          className="md:w-[47%] w-full h-48 md:h-auto object-cover"
        />

        <div className="md:w-[53%] p-8 md:pt-24 md:pb-10">
          <button
            onClick={handleClose}
            className="absolute top-4 right-5 text-2xl text-[#B85C54]"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <h2 className="text-4xl font-medium text-black leading-tight">
            {newsletterData.title}
          </h2>
          <p className="mt-6 text-base text-[#8B8B8B]">{newsletterData.text}</p>

          <div className="mt-8 flex items-center gap-3 px-3 h-12 border border-gray-400 rounded-md">
            <i className="fa-regular fa-envelope text-gray-500"></i>
            <input
              type="email"
              placeholder={newsletterData.placeholder}
              ref={emailRef}
              className="w-full text-sm outline-none"
            />
          </div>

          {message.text && (
            <p
              className={
                "text-xs mt-2 " +
                (message.type === "error" ? "text-red-600" : "text-green-600")
              }
            >
              {message.text}
            </p>
          )}

          <button
            onClick={handleSubscribe}
            className="w-full h-12 mt-4 text-white bg-[#B85C54] rounded-md shadow-lg transition hover:bg-[#A9524A] active:scale-95"
          >
            {newsletterData.button}
          </button>

          <p className="mt-6 text-sm text-[#8B8B8B]">{newsletterData.privacy}</p>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
