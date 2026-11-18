import { TrendingRecipes } from "../../Recipes_Packge/TrendingRecipes/TrendingRecipes";
import { ExploreRecipes } from "../../Recipes_Packge/ExploreRecipes/ExploreRecipes";
import { BlogCard } from "../../BlogCard/BlogCard";
import { blog } from "../../../data/Blog";
import { useEffect, useRef, useState } from "react";
import { categories, brands } from "../../../data/Pupular";
import Footer from "../../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
export function Home() {
  const inputRefmain = useRef(null);
  const ClickRef = () => {
    inputRefmain.current.focus();
    alert("ایمیل :" + inputRefmain.current.value + "باموفیقت ثیت شد");
  };
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  useEffect(() => {
    setCategoryList(categories);
    setBrandList(brands);
  }, []);
  const Signupnavigate = useNavigate();
  const gotoaddRecipe = useNavigate();
  const gotologin = useNavigate ();
  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-8 pt-28 font-roboto md:px-10 lg:hidden">
        <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-gradient-to-b from-[#F6B5AD] to-[#FDE8E4] md:-top-28 md:-right-10 md:h-[420px] md:w-[420px]"></div>

        <div className="relative flex items-center justify-between gap-6">
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl">
              Your Daily Dish <br />A <span className="text-[#B85C54]">Food</span>{" "}
              Journey
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#8B8B8B] md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
            </p>

            <div className="mt-6 flex justify-center gap-4 md:hidden">
              <Link
                to="/Login"
                className="rounded-lg bg-[#EBEBEB] px-8 py-3 text-sm font-medium text-black shadow-md"
              >
                Log in
              </Link>
              <button
                onClick={() => Signupnavigate("/Signup")}
                type="button"
                className="rounded-lg bg-[#B85C54] px-8 py-3 text-sm font-medium text-white shadow-md"
              >
                Sign up
              </button>
            </div>

            <div className="mt-6 hidden md:block">
              <button
                onClick={() => Signupnavigate("/Signup")}
                type="button"
                className="rounded-lg bg-[#B85C54] px-10 py-3 text-sm font-medium text-white shadow-md"
              >
                Sign up
              </button>
              <p className="mt-3 text-xs text-[#7A7A7A]">
                Do you have account?{" "}
                <Link to="/Login" className="text-[#B85C54]">
                  Log in
                </Link>
              </p>
            </div>
          </div>

        </div>
      </section>

      <div className="hidden lg:block">
      <div
        className="
          font-roboto
          absolute left-[8vw] top-[20.4vw]
        "
      >
        {" "}
        <h1
          className="
            text-[4.25vw] font-bold leading-[1.25] text-black
          "
        >
          Your Daily Dish <br />A{" "}
          <span
            className="
              text-[#B85C54]
            "
          >
            Food
          </span>{" "}
          Journey
        </h1>
        <p
          className="
            mt-[1.6vw]
            text-[1.7vw] font-normal leading-[1.35] text-[#8B8B8B]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit. Maecenas vitae enim pharetra, venenatis nunc <br />
          eget, finibus est. Proin velit
        </p>
        <button
        onClick={()=>Signupnavigate("/Signup")}
          type="button"
          className="
          h-[3.7vw] w-[12.4vw]
          mt-[1.6vw]
          text-[1.25vw] font-medium text-white
          bg-[#B85C54]
          rounded-[0.5vw]
          shadow-md
          transition hover:bg-[#A9524A] active:scale-95
          
          "
          >
          Sign up
        </button>
        <p
          className="
            mt-[0.9vw]
            text-[1.09vw] text-[#7A7A7A]
          "
        >
          Do you have account?{" "}
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
      </div>
      </div>
      <section
        className="
          flex flex-col
          px-5 py-6 mt-4
          font-roboto
          items-center justify-center gap-6
          md:flex-row md:px-10 md:gap-8
          lg:px-[4vw] lg:py-[3vw] lg:mt-[800px] lg:gap-[2.6vw]
        "
      >
        <img
          src="https://s6.uupload.ir/files/thankyou_euis.png"
          className="
            overflow-hidden
            w-full h-52 object-cover
            bg-[#EDEDED]
            rounded-lg
            shrink-0
            md:w-[46%] md:h-[32vw]
            lg:h-[22.8vw] lg:w-[21.7vw] lg:rounded-[0.7vw] lg:object-fill
          "
        ></img>
        <div
          className="
            w-full text-center
            md:w-[46%]
            lg:w-[40.7vw]
          "
        >
          <h2
            className="
              text-3xl font-medium leading-[1.25] text-black md:text-4xl lg:text-[2.8vw]
            "
          >
            Share Your{" "}
            <span
              className="
                text-[#B85C54]
              "
            >
              Recipes
            </span>
          </h2>

          <p
            className="
              mt-4
              text-sm font-normal leading-[1.35] text-[#8B8B8B]
              md:text-base
              lg:mt-[2.1vw] lg:text-[1.35vw]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas{" "}
            <br className="hidden lg:block" />
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
          </p>

          <button
            type="button"
                 onClick={() => gotoaddRecipe("/AddRecipe")}
            className="
              h-11 w-44
              mt-5
              text-sm font-medium text-white
              bg-[#B85C54]
              rounded-md
              lg:h-[3vw] lg:w-[9.9vw] lg:mt-[2.2vw] lg:text-[1vw] lg:rounded-[0.35vw]
              shadow-lg
              transition hover:bg-[#A9524A] active:scale-95
            "
          >
            Create New Recipe
          </button>
        </div>
      </section>
      <TrendingRecipes />
      <section  
        className="
          max-w-5xl
          mx-auto px-4 pb-10
          font-roboto
        "
      >
        <div
          className="
            flex
            mb-6
            items-end justify-between
          "
        >
          <h2
            className="
              text-3xl font-bold text-black
            "
          >
            Blog
          </h2>
          <a
            href="#"
            className="
              hidden md:block
              text-[#B85C54] font-roboto font-bold
            "
          >
            View more
          </a>
        </div>

        <div
          className="
            grid grid-cols-1
            gap-6
            md:grid-cols-2
          "
        >
          {blog.map((blog) => (
            <BlogCard key={blog.image} blog={blog} />
          ))}
        </div>
        <ExploreRecipes />
      </section>
      <section
        className="
          h-auto px-5 pb-12
          mt-3 pt-12
          text-center
          bg-[#fff0ED]
          md:h-[380px] md:pt-20 md:pb-0
        "
      >
        <span
          className="
            font-roboto font-medium text-3xl md:text-4xl
          "
        >
          Let's Stay In Touch!
        </span>
        <br />
        <br className="hidden md:block" />
        <br className="hidden md:block" />
        <span
          className="
            font-roboto font-normal text-danger text-[#A5A5A5] text-base md:text-2xl
          "
        >
          Join our newslatter, so that we reach out to you with <br className="hidden md:block" />
          our news and offers
        </span>
        <div
          className="
            "
            >
            <input
            type="email"
            placeholder="Enter Your Email"
            ref={inputRefmain}
            className="
            w-full h-[40px]
            mt-6 pl-4
            md:w-[500px] md:mt-9 md:mr-4
            font-roboto font-normal
            bg-white
            border-2 border-gray-500 rounded-md
          "
          />
          <button
            type="submit"
            onClick={ClickRef}
            className="
              w-full h-[40px]
              mt-3 md:mt-0 md:w-[100px]
              text-white font-roboto
              bg-[#B55D51]
              rounded-md
            "
          >
            Subscide
          </button>
        </div>
      </section>
      {/* ---Pupular-- */}
      <div
        className="
          min-h-screen
          bg-white
        "
      >
        <section
          className="
            max-w-3xl
            mx-auto px-4 pt-6
          "
        >
          <div
            className="
              flex flex-col
            "
          >
            <h2
              className="
                text-3xl font-roboto font-bold text-black
              "
            >
              Popular Categories
            </h2>
            <a
              href="#"
              className="
                text-sm text-[#C8553D] font-roboto font-bold
                hidden md:block
                self-end link link-hover
              "
            >
              View more
            </a>
          </div>

          <div
            className="
              grid grid-cols-2
              mt-6
              gap-x-8 gap-y-12
              md:grid-cols-4
            "
          >
            {categoryList.map((item) => (
              <div
                key={item.id}
                className="
                  flex flex-col
                  items-center gap-3
                "
              >
                <div
                  className="
                    avatar
                  "
                >
                  <div
                    className="
                      w-36
                      rounded-full
                      md:w-28
                    "
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
                <p
                  className="
                    text-sm text-black font-roboto font-normal
                  "
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section
          className="
            max-w-3xl
            mx-auto px-4 mt-24 pb-24
          "
        >
          <div
            className="
              flex flex-wrap
              items-center justify-center gap-10
            "
          >
            {brandList.map((brand) => (
              <img
                key={brand.id}
                src={brand.logo}
                alt={brand.name}
                className="
                  object-contain
                  h-6
                "
              />
            ))}
          </div>
        </section>
      </div>
      {/* ---Pupular-- */}
      <Footer />
    </div>
  );
}
