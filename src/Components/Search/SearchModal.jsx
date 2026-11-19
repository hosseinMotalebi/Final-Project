import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchModal({ onClose }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.SearchItems || []);
      });
  }, []);

  const result = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // وقتی کاربر Enter زد یا روی ذره‌بین کلیک کرد
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "" && result.length === 0) {
      onClose();
      navigate("/404"); // می‌فرسته به صفحه ۴۰۴ خودت
    }
  };

  const handleClick = () => {
    onClose();
    navigate("/Recipe");
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto font-roboto">
      <button
        type="button"
        onClick={onClose}
        className="fixed top-6 right-8 text-3xl text-[#F07B67] cursor-pointer"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="max-w-2xl mx-auto px-5 pt-16 pb-12">
        {/* باکس سرچ تبدیل به فرم شد تا با Enter کار کنه */}
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-md mx-auto flex items-center h-12 px-4 border border-gray-400 rounded-md"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cheese"
            autoFocus
            className="w-full text-sm text-black outline-none"
          />
          <button type="submit" className="ml-2 cursor-pointer">
            <i className="fa-solid fa-magnifying-glass text-lg text-gray-600"></i>
          </button>
        </form>

        <hr className="mt-7 border-gray-500" />

        <div className="max-w-lg mx-auto mt-8 flex flex-col gap-6">
          {result.length > 0 ? (
            result.map((item) => (
              <div
                key={item.id}
                onClick={handleClick}
                className="flex items-center gap-5 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-16 object-cover rounded-md shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.text}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-gray-400 mb-3">
                No results found. Press Enter to continue.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}