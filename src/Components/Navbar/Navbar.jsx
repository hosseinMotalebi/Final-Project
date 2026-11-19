import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import avatarImg from "../../assets/avatar.png";
import { SearchModal } from "../Search/SearchModal";

export function Navbar({ bookmarks = [] }) {
  const navigate = useNavigate();
  useLocation();

  // باز و بسته بودن منوی همبرگری (موبایل و تبلت)
  const [open, setOpen] = useState(false);

  // باز و بسته بودن صفحه سرچ (فقط برای کاربر لاگین‌شده)
  const [searchOpen, setSearchOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("logged_in_user"));

  const handleLogout = () => {
    localStorage.removeItem("logged_in_user");
    setOpen(false);
    setSearchOpen(false);
    navigate("/");
  };

  return (
    <>
      <header className="absolute top-0 left-0 z-20 w-full h-20 sm:h-24 px-4 sm:px-7 flex items-center justify-between font-roboto">
        <Link to="/">
          <img
            src="https://s6.uupload.ir/files/perfectrecipe-logo_33k1.png"
            alt="PerfectRecipe"
            className="w-[160px] sm:w-[200px] xl:w-[250px]"
          />
        </Link>

        {/* لینک‌ها فقط روی دسکتاپ */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-[15px] font-medium text-black">
          <Link to="/">Home</Link>
          <Link to="/Recipe">Recipe</Link>
          <Link to="/AddRecipe">Add Recipe</Link>
          <Link to="/Blog">blog</Link>
          <Link to="/About">About us</Link>
        </nav>

        {/* موبایل و تبلت: آیکون بوکمارک + سرچ (اگه لاگین باشه) + دکمه همبرگری */}
        <div className="lg:hidden flex items-center gap-4">
          <Link
            to="/saved"
            className="relative text-xl text-[#B85C54]"
            aria-label="saved recipes"
          >
            <i className="fa-solid fa-bookmark"></i>
            {bookmarks.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {bookmarks.length}
              </span>
            )}
          </Link>

          {user && (
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-xl text-[#8B8B8B]"
              aria-label="search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          )}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-2xl text-black"
            aria-label="menu"
          >
            <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>

        {/* منوی بازشونده موبایل و تبلت */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white px-6 py-5 shadow-lg flex flex-col gap-4 text-base font-medium text-black">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/Recipe" onClick={() => setOpen(false)}>Recipe</Link>
            <Link to="/AddRecipe" onClick={() => setOpen(false)}>Add Recipe</Link>
            <Link to="/Blog" onClick={() => setOpen(false)}>blog</Link>
            <Link to="/About" onClick={() => setOpen(false)}>About us</Link>
            <Link to="/saved" onClick={() => setOpen(false)} className="text-[#B85C54]">
              Saved Recipes ({bookmarks.length})
            </Link>

            {user ? (
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <span>{user.fullName}</span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 text-sm text-white bg-[#B85C54] rounded-xl"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="flex gap-3 border-t border-gray-200 pt-4">
                <Link
                  to="/Login"
                  onClick={() => setOpen(false)}
                  className="px-8 py-2 text-sm bg-[#EBEBEB] rounded-xl"
                >
                  Log in
                </Link>
                <Link
                  to="/Signup"
                  onClick={() => setOpen(false)}
                  className="px-8 py-2 text-sm text-white bg-[#B85C54] rounded-xl"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        )}

        {/* دکمه‌های سمت راست فقط دسکتاپ */}
        {user ? (
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/saved"
              className="relative text-2xl text-[#B85C54]"
              aria-label="saved recipes"
            >
              <i className="fa-solid fa-bookmark"></i>
              {bookmarks.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-[28px] text-[#8B8B8B] cursor-pointer"
              aria-label="search"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar">
                <div className="w-9 rounded-full">
                  <img src={avatarImg} alt="user" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-xl z-30 w-48 p-2 shadow-lg mt-2"
              >
                <li className="px-3 py-2 font-roboto text-white bg-green-400 rounded-xl text-center">
                  {user.fullName}
                </li>
                <li>
                  <button
                    className="bg-red-400 rounded-xl text-white font-roboto my-1"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                  <button
                    className="bg-red-400 rounded-xl text-white font-roboto"
                    onClick={handleLogout}
                  >
                    Setting
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/saved"
              className="relative text-2xl text-[#B85C54] mr-2"
              aria-label="saved recipes"
            >
              <i className="fa-solid fa-bookmark"></i>
              {bookmarks.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </Link>

            <Link
              to="/Login"
              className="
                px-6 xl:px-9 py-3 mt-1
                text-sm font-roboto font-medium text-black
                bg-[#EBEBEB]
                rounded-xl
                shadow-md
                transition hover:bg-[#d9a9a9] active:scale-95
              "
            >
              Log in
            </Link>
            <Link
              to="/Signup"
              className="
                px-6 xl:px-9 py-3
                text-sm font-roboto font-medium text-white
                bg-[#B85C54]
                rounded-xl
                shadow-md
                transition hover:bg-[#A9524A] active:scale-95 ms-4
              "
            >
              Sign up
            </Link>
          </div>
        )}
      </header>

      {/* صفحه سرچ فقط وقتی کاربر لاگین کرده و روی ذره‌بین زده باز میشه */}
      {user && searchOpen && (
        <SearchModal onClose={() => setSearchOpen(false)} />
      )}
    </>
  );
} 