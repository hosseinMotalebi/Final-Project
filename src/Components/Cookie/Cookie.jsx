import { useRef } from "react";

function Cookie() {
  const bannerRef = useRef(null);

  if (localStorage.getItem("cookieChoice")) {
    return null;
  }

  const handleChoice = (choice) => {
    localStorage.setItem("cookieChoice", choice);
    bannerRef.current.style.display = "none";
  };

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-4 left-4 right-4 z-50 flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-5 bg-white border border-gray-300 rounded-lg shadow-lg font-roboto"
    >
      <div className="md:w-[65%]">
        <h2 className="text-xl font-medium text-black">
          🍪 We value your privacy
        </h2>
        <p className="mt-1 text-sm text-[#8B8B8B]">
          We use cookies to make your browsing experience sweeter! Cookies help
          us analyze traffic and show you personalized content. By clicking
          "accept all" you're giving us permission to treat you to a cookie or
          two. To read our full{" "}
          <a href="#" className="underline">
            Cookie Policy
          </a>
          .
        </p>
      </div>

      <div className="flex items-center gap-8">
        <button
          onClick={() => handleChoice("rejected")}
          className="text-sm text-[#8B8B8B] underline hover:text-black"
        >
          Reject all
        </button>
        <button
          onClick={() => handleChoice("accepted")}
          className="px-12 py-3 text-lg text-white bg-[#B85C54] rounded-lg shadow-md transition hover:bg-[#A9524A] active:scale-95"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
export default Cookie;
