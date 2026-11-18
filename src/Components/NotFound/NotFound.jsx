import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function NotFound() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // افکت پارالاکس نرم با حرکت موس
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 24;
    const y = (e.clientY / window.innerHeight - 0.5) * 24;
    setMouse({ x, y });
  };

  return (
    <>
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FFF7F5] via-white to-[#FFF0ED] flex items-center justify-center px-4 pt-24 pb-12 font-roboto"
      >
        {/* انیمیشن‌های اختصاصی CSS */}
        <style>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-16px) rotate(6deg); }
          }
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(14px) rotate(-6deg); }
          }
          @keyframes steamRise {
            0% { transform: translateY(6px) scale(0.85); opacity: 0; }
            40% { opacity: 0.85; }
            100% { transform: translateY(-22px) scale(1.15); opacity: 0; }
          }
          @keyframes lidBounce {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            20% { transform: translateY(-5px) rotate(-4deg); }
            40% { transform: translateY(0) rotate(3deg); }
            60% { transform: translateY(-3px) rotate(-2deg); }
            80% { transform: translateY(0) rotate(0deg); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0%, 100% { transform: scale(1); opacity: 0.45; }
            50% { transform: scale(1.12); opacity: 0.7; }
          }
          .anim-float { animation: floatSlow 4.5s ease-in-out infinite; }
          .anim-float-rev { animation: floatReverse 5.5s ease-in-out infinite; }
          .anim-steam-1 { animation: steamRise 2.2s ease-out infinite; }
          .anim-steam-2 { animation: steamRise 2.2s ease-out 0.7s infinite; }
          .anim-steam-3 { animation: steamRise 2.2s ease-out 1.4s infinite; }
          .anim-lid { transform-origin: center; animation: lidBounce 2.6s ease-in-out infinite; }
          .anim-fade-1 { animation: fadeUp 0.6s ease-out forwards; }
          .anim-fade-2 { opacity: 0; animation: fadeUp 0.6s ease-out 0.15s forwards; }
          .anim-fade-3 { opacity: 0; animation: fadeUp 0.6s ease-out 0.3s forwards; }
          .anim-glow { animation: pulseGlow 6s ease-in-out infinite; }
        `}</style>

        {/* دایره‌های محو و درخشان پس‌زمینه (هماهنگ با Hero صفحه اصلی) */}
        <div
          className="pointer-events-none absolute -top-24 -right-20 h-80 w-80 rounded-full bg-gradient-to-b from-[#F6B5AD] to-[#FDE8E4] blur-2xl anim-glow"
          style={{ transform: `translate(${mouse.x * -0.8}px, ${mouse.y * -0.8}px)` }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-[#F6B5AD]/70 to-[#FFF0ED] blur-3xl anim-glow"
          style={{ transform: `translate(${mouse.x * 0.8}px, ${mouse.y * 0.8}px)` }}
        />

        {/* آیکون‌های آشپزی شناور در پس‌زمینه */}
        <div
          className="pointer-events-none hidden md:block absolute top-32 left-[14%] text-3xl text-[#B85C54]/25 anim-float"
          style={{ transform: `translate(${mouse.x * 1.1}px, ${mouse.y * 1.1}px)` }}
        >
          <i className="fa-solid fa-utensils"></i>
        </div>
        <div
          className="pointer-events-none hidden md:block absolute bottom-28 left-[18%] text-3xl text-[#B85C54]/20 anim-float-rev"
          style={{ transform: `translate(${mouse.x * -1}px, ${mouse.y * -1}px)` }}
        >
          <i className="fa-solid fa-pepper-hot"></i>
        </div>
        <div
          className="pointer-events-none hidden md:block absolute top-36 right-[15%] text-3xl text-[#B85C54]/25 anim-float-rev"
          style={{ transform: `translate(${mouse.x * -1.2}px, ${mouse.y * 1.2}px)` }}
        >
          <i className="fa-solid fa-pizza-slice"></i>
        </div>
        <div
          className="pointer-events-none hidden md:block absolute bottom-32 right-[16%] text-3xl text-[#B85C54]/20 anim-float"
          style={{ transform: `translate(${mouse.x * 1.2}px, ${mouse.y * -1.2}px)` }}
        >
          <i className="fa-solid fa-mug-hot"></i>
        </div>

        {/* کارت مرکزی محتوا */}
        <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
          {/* بج بالای صفحه */}
          <span className="anim-fade-1 inline-flex items-center gap-2 rounded-full border border-[#F6B5AD] bg-[#FFF0ED] px-4 py-1.5 text-xs font-medium text-[#B85C54] shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#B85C54] animate-ping"></span>
            ERROR 404 • PAGE NOT FOUND
          </span>

          {/* بخش اصلی 4 [قابلمه بخاردار] 4 */}
          <div
            className="anim-fade-1 mt-6 flex items-center justify-center gap-3 sm:gap-6 select-none"
            style={{
              transform: `translate(${mouse.x * 0.35}px, ${mouse.y * 0.35}px)`,
              transition: "transform 0.15s ease-out",
            }}
          >
            <span className="text-[90px] sm:text-[135px] md:text-[160px] font-extrabold leading-none text-black drop-shadow-sm">
              4
            </span>

            {/* صفر وسط به شکل قابلمه انیمیشنی */}
            <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 flex items-center justify-center">
              <svg viewBox="0 0 180 180" className="w-full h-full overflow-visible">
                {/* سایه زیر قابلمه */}
                <ellipse cx="90" cy="158" rx="52" ry="9" fill="#B85C54" opacity="0.16" />

                {/* خطوط بخار متحرک */}
                <path
                  d="M68 58 Q62 44 70 32"
                  fill="none"
                  stroke="#B85C54"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="anim-steam-1"
                />
                <path
                  d="M90 52 Q84 36 92 22"
                  fill="none"
                  stroke="#F07B67"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  className="anim-steam-2"
                />
                <path
                  d="M112 58 Q106 44 114 32"
                  fill="none"
                  stroke="#B85C54"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="anim-steam-3"
                />

                {/* درِ قابلمه با انیمیشن قل‌قل کردن */}
                <g className="anim-lid">
                  <circle cx="90" cy="60" r="8" fill="#A9524A" />
                  <path
                    d="M42 82 C42 64, 138 64, 138 82 Z"
                    fill="#F6B5AD"
                    stroke="#B85C54"
                    strokeWidth="4"
                  />
                  <line
                    x1="36"
                    y1="82"
                    x2="144"
                    y2="82"
                    stroke="#B85C54"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>

                {/* دسته‌های قابلمه */}
                <path
                  d="M40 96 C24 96, 24 114, 40 114"
                  fill="none"
                  stroke="#A9524A"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M140 96 C156 96, 156 114, 140 114"
                  fill="none"
                  stroke="#A9524A"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* بدنه قابلمه */}
                <path
                  d="M42 86 H138 V126 C138 142, 124 150, 90 150 C56 150, 42 142, 42 126 Z"
                  fill="#B85C54"
                />
                {/* انعکاس نور روی قابلمه */}
                <path
                  d="M54 98 V124 C54 132, 60 137, 68 139"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.35"
                />
              </svg>
            </div>

            <span className="text-[90px] sm:text-[135px] md:text-[160px] font-extrabold leading-none text-[#B85C54] drop-shadow-sm">
              4
            </span>
          </div>

          {/* تیتر و توضیحات */}
          <h1 className="anim-fade-2 mt-4 text-2xl sm:text-4xl font-bold text-black">
            Oops! This Recipe Is{" "}
            <span className="text-[#B85C54]">Not On The Menu</span>
          </h1>
          <p className="anim-fade-2 mt-3 max-w-md text-sm sm:text-base text-[#8B8B8B] leading-relaxed">
            Looks like the page you’re looking for got eaten or moved to another
            kitchen. Let’s get you back to something delicious!
          </p>

          {/* دکمه‌های اصلی */}
          <div className="anim-fade-3 mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#B85C54] px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#B85C54]/30 transition duration-200 hover:bg-[#A9524A] hover:-translate-y-0.5 active:scale-95"
            >
              <i className="fa-solid fa-house transition-transform group-hover:-translate-x-0.5"></i>
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#EBEBEB] px-7 py-3.5 text-sm font-medium text-black shadow-md transition duration-200 hover:bg-[#F6B5AD]/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Go Back
            </button>
          </div>

          {/* لینک‌های سریع پیشنهادی */}
          <div className="anim-fade-3 mt-9 flex flex-wrap items-center justify-center gap-2 text-xs text-[#8B8B8B]">
            <span>Or explore:</span>
            <Link
              to="/Recipe"
              className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-black transition hover:border-[#B85C54] hover:text-[#B85C54]"
            >
              Recipes
            </Link>
            <Link
              to="/Blog"
              className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-black transition hover:border-[#B85C54] hover:text-[#B85C54]"
            >
              Blog
            </Link>
            <Link
              to="/AddRecipe"
              className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-black transition hover:border-[#B85C54] hover:text-[#B85C54]"
            >
              Add Recipe
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}