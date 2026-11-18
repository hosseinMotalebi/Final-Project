import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export function About() {
  // لیست ویژگی‌های سایت برای نمایش در کارت‌ها
  const features = [
    {
      id: 1,
      icon: "fa-solid fa-utensils",
      title: "Simple & Tasty",
      text: "Easy step-by-step recipes that anyone can cook at home without stress.",
    },
    {
      id: 2,
      icon: "fa-solid fa-heart",
      title: "Healthy Choices",
      text: "Fresh ingredients and clear nutrition facts to help you eat better every day.",
    },
    {
      id: 3,
      icon: "fa-solid fa-users",
      title: "Food Community",
      text: "Share your own recipes, leave comments, and get inspired by other home chefs.",
    },
  ];
  const stats = [
    { id: 1, number: "500+", label: "Recipes" },
    { id: 2, number: "12K+", label: "Happy Cooks" },
    { id: 3, number: "20+", label: "Categories" },
  ];

  return (
    <>
      <div className="bg-white font-roboto pt-28 pb-16">
        {/* بخش معرفی بالای صفحه */}
        <section className="max-w-5xl mx-auto px-5 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF0ED] text-[#B85C54] text-xs font-medium">
            About PerfectRecipe
          </span>

          <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-black leading-tight">
            Cooking Made <span className="text-[#B85C54]">Simple</span> &amp; Fun
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#8B8B8B] leading-relaxed">
            PerfectRecipe is a place for food lovers to discover daily dishes,
            learn new cooking tips, and share their favorite homemade recipes
            with the world.
          </p>
        </section>

        {/* بخش داستان ما (عکس + متن) */}
        <section className="max-w-5xl mx-auto px-5 mt-14 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://cdn.imgurl.ir/uploads/r261765_.png"
              alt="Healthy food"
              className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Our <span className="text-[#B85C54]">Story</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#8B8B8B] leading-relaxed">
              We started PerfectRecipe with one simple goal: making home cooking
              enjoyable for everyone. Whether you are a beginner or an
              experienced chef, you can find quick breakfasts, healthy salads,
              and delicious dinners right here.
            </p>

            {/* آمارها */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
              {stats.map((item) => (
                <div key={item.id}>
                  <p className="text-2xl sm:text-3xl font-bold text-[#B85C54]">
                    {item.number}
                  </p>
                  <p className="text-xs sm:text-sm text-[#8B8B8B] mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش ۳ ویژگی اصلی */}
        <section className="bg-[#FFF0ED] mt-16 py-14 px-5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
              Why Choose <span className="text-[#B85C54]">Us?</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#FFF0ED] text-[#B85C54] flex items-center justify-center text-xl">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#8B8B8B] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بخش دعوت به اقدام (دکمه‌ها) */}
        <section className="max-w-3xl mx-auto px-5 mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Ready to Start Cooking?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#8B8B8B]">
            Explore our latest recipes or share your own special dish with our
            community.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/Recipe"
              className="px-7 py-3 text-sm font-medium text-white bg-[#B85C54] rounded-xl shadow-md transition hover:bg-[#A9524A] active:scale-95"
            >
              Explore Recipes
            </Link>
            <Link
              to="/AddRecipe"
              className="px-7 py-3 text-sm font-medium text-black bg-[#EBEBEB] rounded-xl shadow-md transition hover:bg-[#d9d9d9] active:scale-95"
            >
              Add Your Recipe
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}