import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import featuredImg from "../../../assets/blog-featured.png";
import Footer from "../../Footer/Footer";

function BlogCard({ blog }) {
  return (
    <article className="card w-auto overflow-hidden rounded-[4px] border border-[#e8e8e8] bg-white shadow-none">
      <figure className="h-[240px] w-full overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="px-3 pb-4 pt-2">
        <div className="text-[10px] leading-4 text-[#777] font-roboto font-bold">{blog.data}</div>
        <h2 className="mt-1 text-xl font-roboto font-black leading-tight text-black">
          {blog.title}
        </h2>
        {blog.description && (
          <p className="mt-2 line-clamp-3 text-xs leading-4 text-[#777]">
            {blog.description}
          </p>
        )}
      </div>
    </article>
  );
}

function Breadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumbs p-0 text-sm font-roboto font-medium">
      <ul>
        <li>
          <Link to="/" className="text-[#8B8B8B] no-underline">
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const path = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = decodeURIComponent(segment)
            .replace(/-/g, " ")
            .replace(/^\w/, (c) => c.toUpperCase());
          return (
            <li key={path}>
              {isLast ? (
                <span className="text-black">{label}</span>
              ) : (
                <Link to={path} className="text-[#8B8B8B] no-underline">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const featuredPost = {
  img: featuredImg,
  data: "on September 19, 2032",
  title: "Classic New York-Style Cheesecake Recipe",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit erat, ornare elementum dolor gravida, vehicula vestibulum nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit erat, ornare elementum dolor gravida, vehicula vestibulum nibh....",
};

function FeaturedPost({ blog }) {
  return (
    <article className="card flex-col gap-5 rounded-lg bg-white p-4 shadow-[0_4px_30px_rgba(0,0,0,0.08)] sm:p-5 md:flex-row md:items-stretch md:gap-8">
      {/* Text */}
      <div className="flex flex-1 flex-col justify-between gap-6 md:py-1 md:pl-2">
        <div>
          <p className="text-sm text-[#8B8B8B]">{blog.data}</p>

          <h2 className="mt-5 text-xl font-medium leading-snug text-black sm:text-2xl md:mt-7">
            {blog.title}
          </h2>

          <p className="mt-5 text-[15px] leading-[1.6] text-[#8B8B8B] md:mt-6">
            {blog.description}
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="btn h-11 min-h-0 rounded-md border-none bg-[#B85C54] px-8 text-base font-normal text-white shadow-[0_6px_14px_rgba(184,92,84,0.35)] transition hover:bg-[#A9524A] active:scale-95 md:px-6"
          >
            Read more
            <i className="fa-solid fa-arrow-right hidden text-sm md:inline-block" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Image: روی موبایل بالای متن، روی دسکتاپ سمت راست */}
      <figure className="order-first aspect-[16/10] w-full overflow-hidden md:order-none md:aspect-auto md:min-h-[324px] md:w-[46%] md:shrink-0">
        <img
          src={blog.img}
          alt={blog.title}
          className="h-full w-full object-cover"
        />
      </figure>
    </article>
  );
}

export function Blog() {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState("1"); // صفحه‌بندی

  useEffect(() => {
    let cancelled = false;

    fetch("/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("مشکل در خواندن فایل db.json");
        }
        return response.json();
      })
      .then((data) => {
        if (!cancelled) {
          setCard(Array.isArray(data.Blogcard) ? data.Blogcard : []);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message ||" خطا در دریافت اطلاعات از دیتابیس ");
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <section className="min-h-[50vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg" aria-label="Loading" />
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-[50vh] flex flex-col items-center justify-center gap-3 px-4 text-center">
        <h3 className="text-xl font-semibold text-red-600">خطا در بارگذاری اطلاعات</h3>
        <p className="text-sm text-gray-500">{error}</p>
        <p className="text-xs text-gray-400">
          مطمئن شو فایل <code>public/db.json</code> وجود دارد.
        </p>
      </section>
    );
  }
  return (
    <>
    <section className="mx-auto max-w-5xl px-4 pt-28 md:pt-32 pb-16 font-roboto">
      <Breadcrumb />
      <h1 className="mt-8 md:mt-12 text-3xl font-medium text-black">Blog</h1>

      <div className="mt-10">
        <FeaturedPost blog={featuredPost} />
      </div>

      {card.length === 0 ? (
        <div className="alert mt-10">
          <span>هیچ مطلبی در Blogcard پیدا نشد.</span>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {card.map((item) => (
            <BlogCard key={item.id ?? item.title} blog={item} />
          ))}
        </div>
      )}

      {/* صفحه‌بندی */}
      <div className="mt-12 flex items-center justify-center gap-2 text-xs">
        <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 text-[#B85C54]">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {["1", "2", "...", "6", "7"].map((n) => (
          <button
            key={n}
            onClick={() => n !== "..." && setPage(n)}
            className={
              page === n
                ? "h-7 w-7 rounded border border-[#B85C54] text-[#B85C54]"
                : "h-7 w-7 rounded border border-gray-200 text-black"
            }
          >
            {n}
          </button>
        ))}
        <button className="flex h-7 w-7 items-center justify-center rounded border border-gray-200 text-[#B85C54]">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
      <Footer />
    </>
  );
}


