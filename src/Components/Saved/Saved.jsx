import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
export function Saved({ bookmarks, handleBookmark }) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-28 pb-16 font-roboto min-h-[70vh]">
        <h1 className="text-2xl font-bold text-black lg:text-3xl">
          Saved Recipes ({bookmarks.length})
        </h1>

        {bookmarks.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">هنوز هیچ غذایی ذخیره نکردی!</p>
            <Link
              to="/Recipe"
              className="rounded-md bg-[#B85C54] px-6 py-2.5 text-sm text-white"
            >
              دیدن دستور پخت‌ها
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookmarks.map((item) => (
              <div
                key={item.title}
                className="card bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                  />
                  <button
                    onClick={() => handleBookmark(item)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-md shadow cursor-pointer"
                  >
                    <i className="fa-solid fa-bookmark text-[#B85C54]"></i>
                  </button>
                </div>

                <div className="p-4">
                  <Link
                    to="/Recipe"
                    className="text-base font-bold text-black hover:text-[#B85C54]"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}