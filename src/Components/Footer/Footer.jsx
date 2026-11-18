const columns = [
  { title: "Quick links", links: ["Home", "Recipes", "Blog"] },
  { title: "Quick links", links: ["Share Recipe", "About Us", "Contact"] },
  { title: "Legal", links: ["Terms Of Use", "Privacy & Cookies"] },
];

const socials = [
  "fa-brands fa-itunes-note fa-xl",
  "fa-brands fa-x-twitter fa-xl",
  "fa-brands fa-facebook-f fa-xl",
  "fa-brands fa-instagram fa-xl",
  "fa-brands fa-pinterest fa-xl",
];

function Footer() {
  return (
    <div>
      {/* --Footer-- */}
      <div className="hidden lg:block">
      <footer
        className="
        p-10
        text-base-content
        bg-base-200
        footer
        sm:footer-horizontal
      "
      >
        <div
          className="
            ml-[80px]
          "
        >
          <img
            src="https://s6.uupload.ir/files/perfectrecipe-logo_33k1.png"
            alt=""
            className="
               w-[230px]
             "
          />
          <span
            className="
      text-[#8B8B8B] font-roboto
    "
          >
            The purpose of lorem ipusum is to create a <br />
            natural looking block of text (sentence, <br />
            paragraph,page,etc.) that doesn't distract from <br />
            the layout.
          </span>
        </div>
        <nav
          className="

    "
        >
          <h6
            className="
        text-black font-roboto font-bold
      "
          >
            Quick links
          </h6>
          <a
            className="
        text-[#8B8B8B] font-roboto
        link link-hover
      "
          >
            Home
          </a>
          <a
            className="
        text-[#8B8B8B] font-roboto
        link link-hover
      "
          >
            Recipes
          </a>
          <a
            className="
        text-[#8B8B8B] font-roboto
        link link-hover
      "
          >
            Blog
          </a>
        </nav>
        <nav>
          <h6
            className="
        text-black font-roboto font-bold
      "
          >
            Quick links
          </h6>
          <a
            className="
        text-[#8B8B8B] font-roboto
        link link-hover
      "
          >
            Share Recipes{" "}
          </a>
          <a
            className="
        text-[#8B8B8B] font-roboto
        link link-hover
      "
          >
            About us
          </a>
          <a
            className="
        text-[#8B8B8B] font-roboto
        link link-hover
      "
          >
            Contact
          </a>
        </nav>
        <nav>
          <h6
            className="
        text-black font-roboto font-bold
      "
          >
            Legal
          </h6>
          <a
            className="
        text-[#8B8B8B] font-roboto
        link link-hover
      "
          >
            Terms of use
          </a>
          <a
            className="
        text-[#8B8B8B] font-roboto
        link link-hover
      "
          >
            Privacy & <br />
            Cookies
          </a>
        </nav>
        <form
          className="
      text-center
    "
        >
          <fieldset
            className="
        w-80
      "
          >
            <h6
              className="
        font-roboto font-bold text-xl
      "
            >
              Newsletter
            </h6>
            <label
              className="
          text-[#8B8B8B] font-roboto
        "
            >
              Subscribe to our newseltter to get more free tip
            </label>
            <div
              className="
          mt-2
          join
        "
            >
              <span
                className="
              mt-2
              text-[#8B8B8B]
            "
              >
                <i
                  class="
              fa-regular fa-envelope
            "
                ></i>
              </span>
   <section>
               <input
                type="text"
                placeholder=" Enter Your Email"
                className="
           w-[270px]
           border-2 border-gray-500 rounded-md
           input join-item
         "
              />
   </section>
            </div>
          </fieldset>
          <button
            type="submit"
            className="
              w-[270px] h-[40px]
              ml-8.5
              text-white font-roboto font-bold
              bg-[#B55D51]
              rounded-md
            "
          >
            Subscide
          </button>
        </form>
      </footer>
      <hr
        className="
      w-[84%]
      ml-[115px]
      text-[#8B8B8B]
    "
      />
      <footer
        className="
      px-10 py-4
      text-base-content
      bg-base-200
      border-base-300 border-t
      footer
    "
      >
        <aside
          className="
      grid-flow-col
      ml-[70px]
      items-center
    "
        >
          <p
            className="
        text-[#8B8B8B] font-roboto
      "
          >
            @2023 RecipeLogo, All Right Reserved
          </p>
        </aside>
        <nav
          className="
      mt-[-85px]
      md:place-self-center md:justify-self-end
    "
        >
          <div
            className="
        grid grid-flow-col
        mr-[95px]
        gap-5
      "
          >
            <a href="#">
              <i
                class="
      fa-brands fa-itunes-note fa-xl
    "
              ></i>
            </a>
            <a href="#">
              <i
                class="
          fa-brands fa-x-twitter fa-xl
        "
              ></i>
            </a>
            <a href="#">
              <i
                class="
                fa-brands fa-facebook-f fa-xl
              "
              ></i>
            </a>
            <a
              href="#"
              className="
          w-[24px] h-[24px]
          fill-current
        "
            >
              <i
                class="
            fa-brands fa-instagram fa-xl
          "
              ></i>
            </a>
            <a href="#">
              <i
                class="
      fa-brands fa-pinterest fa-xl
    "
              ></i>
            </a>
          </div>
        </nav>
      </footer>

      {/* --Footer-- */}
      </div>

      <footer className="bg-base-200 px-6 pb-6 pt-10 font-roboto lg:hidden">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 md:flex-row md:justify-between">
          <div className="md:max-w-[260px]">
            <img
              src="https://s6.uupload.ir/files/perfectrecipe-logo_33k1.png"
              alt="PerfectRecipe"
              className="w-[190px]"
            />
            <p className="mt-3 text-sm text-[#8B8B8B]">
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 text-sm">
            {columns.map((col, index) => (
              <nav key={index} className="flex flex-col gap-3">
                <h6 className="font-bold text-black">{col.title}</h6>
                {col.links.map((link) => (
                  <a key={link} href="#" className="text-[#8B8B8B]">
                    {link}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>

        {/* آیکون‌ها: روی موبایل بالای خط */}
        <div className="mt-8 flex justify-center gap-6 md:hidden">
          {socials.map((icon) => (
            <a key={icon} href="#">
              <i className={icon}></i>
            </a>
          ))}
        </div>

        <hr className="mx-auto mt-8 max-w-3xl border-[#d9d9d9]" />

        <div className="mx-auto mt-4 flex max-w-3xl items-center justify-center md:justify-between">
          <p className="text-sm text-[#8B8B8B]">
            © 2023 RecipeLogo. All Right Reserved
          </p>
          <div className="hidden gap-5 md:flex">
            {socials.map((icon) => (
              <a key={icon} href="#">
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
