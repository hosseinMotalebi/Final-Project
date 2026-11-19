import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Footer from "../../Footer/Footer";

export function Recipe({ bookmarks = [], handleBookmark }) {
    const [recipe, setRecipe] = useState(null);
  const [recent, setRecent] = useState([]);
  const [related, setRelated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [product, setProduct] = useState(null);

      
  // وضعیت دکمه‌ها
  const [checked, setChecked] = useState([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((db) => {
        // اولین آیتم هر لیست
        const firstRecipe = db.Recipes[0];
        setRecipe(firstRecipe);
        setChecked(firstRecipe.checked);
setRecent(db.RecentRecipes);
        setRelated(db.RelatedRecipes);
        setTrending(db.TrendingRecipes);
        setProduct(db.Products[0]);
        setSuggestions(db.YouMightLike);
      });
  }, []);

  // تیک زدن مواد لازم
function toggleIngredient(index) {
    if (checked.includes(index)) {
      setChecked(checked.filter((i) => i !== index));
    } else {
      setChecked([...checked, index]);
    }
  }

  // دکمه ذخیره
// چک می‌کنه این غذا توی لیست بوکمارک‌ها هست یا نه
const saved = recipe && bookmarks.some((item) => item.title === recipe.title);

// دکمه ذخیره
function toggleSave() {
  if (recipe) {
    handleBookmark(recipe);
  }
}  // دکمه اشتراک گذاری
  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  }

  // فرم ایمیل
  function handleSignup() {
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email.");
      return;
    }

    // سایت سرور نداره، پس ایمیل جایی ذخیره نمی‌شه و فقط پیام نشون می‌دیم
    setMessage("Thank you for signing up!");
    setEmail("");
  }


// --Comment--
  const [comments, setComments] = useState([
    {
      name: "Sara Johnson",
      time: "40min ago",
      image: "https://i.pravatar.cc/100?img=47",
      text: "Wow, this Mixed Greens with Sun-Dried Tomato Dressing recipe is a flavor explosion in my mouth! very delicious.",
      likes: 26,
      liked: false,
      isReply: false,
    },
    {
      name: "Jessica Martinez",
      time: "20min ago",
      image: "https://i.pravatar.cc/100?img=32",
      text: "I agree with you, very delicious.",
      likes: 10,
      liked: false,
      isReply: true,
    },
    {
      name: "David Wilson",
      time: "1hr ago",
      image: "https://i.pravatar.cc/100?img=12",
      text: "The combination of fresh greens and the zesty sun-dried tomato dressing is a total game-changer. So easy to make and so incredibly delicious!",
      likes: 46,
      liked: false,
      isReply: false,
    },
  ]);

  const [text, setText] = useState("");

  // تعداد ستاره‌ها
  const [rating, setRating] = useState(4);

  // شماره‌ی کامنتی که داریم بهش جواب میدیم (null یعنی هیچکدوم)
  const [replyIndex, setReplyIndex] = useState(null);

  // متن جواب
  const [replyText, setReplyText] = useState("");

  // اضافه کردن کامنت جدید به پایین لیست
  function addComment() {
    if (text === "") return;

    const newComment = {
      name: "You",
      time: "now",
      image: "https://i.pravatar.cc/100?img=12",
      text: text,
      likes: 0,
      liked: false,
      isReply: false,
    };

    setComments([...comments, newComment]);
    setText("");
  }

  // اضافه کردن جواب درست زیر همون کامنت
  function addReply(index) {
    if (replyText === "") return;

    const newReply = {
      name: "You",
      time: "now",
      image: "https://i.pravatar.cc/100?img=32",
      text: replyText,
      likes: 0,
      liked: false,
      isReply: true,
    };

    const newList = [...comments];
    newList.splice(index + 1, 0, newReply); // بذارش بعد از کامنت شماره index

    setComments(newList);
    setReplyText("");
    setReplyIndex(null); // بستن باکس جواب
  }

  // لایک کردن و برداشتن لایک
  function toggleLike(index) {
    const newList = [...comments];
    const item = newList[index];

    if (item.liked) {
      newList[index] = { ...item, liked: false, likes: item.likes - 1 };
    } else {
      newList[index] = { ...item, liked: true, likes: item.likes + 1 };
    }
    setComments(newList);
  }
  // باز و بسته کردن باکس جواب
  function toggleReply(index) {
    if (replyIndex === index) {
      setReplyIndex(null);
    } else {
      setReplyIndex(index);
    }
  }
// --Comment--
{/* You might like this */}

const [suggestions, setSuggestions] = useState([]);
const [savedSuggestions, setSavedSuggestions] = useState([]);

  function toggleSuggestion(id) {
  if (savedSuggestions.includes(id)) {
    setSavedSuggestions(savedSuggestions.filter((i) => i !== id));
  } else {
    setSavedSuggestions([...savedSuggestions, id]);
  }
}
{/* You might like this */}


  // تا وقتی دیتا نیومده
  if (!recipe) {
    return (
      <p className="pt-32 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </p>
    );
  }
  return (
    <>
    <section className="mx-auto max-w-6xl px-4 pt-28 pb-16 font-roboto lg:pt-32">
      {/* مسیر صفحه */}
      <div className="text-sm text-[#8B8B8B] font-roboto font-medium">
        <Link to="/">Home</Link> &gt; <Link to="/Recipe">Recipe</Link> &gt;{" "}
        <span className="text-black">{recipe.title}</span>
      </div>

      <div className="mt-6 flex items-center justify-between lg:hidden">
        <h2 className="text-2xl font-medium text-black">Recipes</h2>
        <div className="flex items-center gap-4">
          <button onClick={toggleSave}>
            <i
              className={
                saved
                  ? "fa-solid fa-bookmark text-[#B85C54]"
                  : "fa-regular fa-bookmark text-[#B85C54]"
              }
            ></i>
          </button>
          <button onClick={handleShare} className="text-xl text-[#B85C54]">
            <i className="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      </div>

      <h1 className="mt-3 max-w-[35rem] text-xl font-medium text-black lg:mt-8 lg:text-3xl">
        {recipe.title.replace(":", "")}
      </h1>

      {/* اطلاعات بالای صفحه */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <div className="flex flex-wrap items-center gap-6 text-xs text-black">
          <span>
            <i className="fa-regular fa-circle-user text-[#B85C54]"></i>{" "}
            {recipe.author}
          </span>
          <span>
            <i className="fa-regular fa-calendar text-[#B85C54]"></i>{" "}
            {recipe.date}
          </span>
          <span>
            <i className="fa-regular fa-comment-dots text-[#B85C54]"></i>{" "}
            {recipe.comments} comments
          </span>
          <span>
            <i className="fa-regular fa-bookmark text-[#B85C54]"></i>{" "}
            {recipe.saves} Saves
          </span>
          <span>
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={
                  star <= recipe.rating
                    ? "fa-solid fa-star text-[10px] text-[#B85C54]"
                    : "fa-solid fa-star text-[10px] text-gray-300"
                }
              ></i>
            ))}{" "}
            <span className="text-[9px] text-[#8B8B8B]">
              {recipe.ratingValue} / {recipe.reviews} Reviews
            </span>
          </span>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={toggleSave}
            className="h-9 w-9 rounded-md border border-gray-200 bg-white"
          >
            <i
              className={
                saved
                  ? "fa-solid fa-bookmark text-[#B85C54]"
                  : "fa-regular fa-bookmark text-[#B85C54]"
              }
            ></i>
          </button>
          <button onClick={handleShare} className="text-xl text-[#B85C54]">
            <i className="fa-solid fa-share-nodes"></i>
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        {/* ستون سمت چپ */}
        <div>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="aspect-[16/10] w-full object-cover"
          />
          <div className="flex flex-wrap items-center justify-center gap-6 py-8 text-center text-sm">
            <div className="flex divide-x divide-gray-300">
              <div className="px-6">
                <p className="text-[#6b6b6b]">Prep time:</p>
                <p className="mt-2 text-black">{recipe.prepTime}</p>
              </div>
              <div className="px-6">
                <p className="text-[#6b6b6b]">Cook time:</p>
                <p className="mt-2 text-black">{recipe.cookTime}</p>
              </div>
              <div className="px-6">
                <p className="text-[#6b6b6b]">Serving</p>
                <p className="mt-2 text-black">{recipe.serving}</p>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="hidden rounded-md border border-[#B85C54] px-4 py-2 text-xs text-[#B85C54] md:block"
            >
              <i className="fa-solid fa-print"></i> Print Recipe
            </button>
          </div>

          <p className="text-sm text-black">{recipe.description}</p>

          <h2 className="mt-8 text-2xl text-black">Ingredients:</h2>
          <ul className="mt-4">
            {recipe.ingredients.map((item, index) => (
              <li key={index} className="py-1">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={checked.includes(index)}
                    onChange={() => toggleIngredient(index)}
                    className="h-4 w-4 accent-[#B85C54]"
                  />
                  <span
                    className={
                      checked.includes(index)
                        ? "text-[#8B8B8B] line-through"
                        : "text-black"
                    }
                  >
                    {item}
                  </span>
                </label>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-2xl text-black">Instructions:</h2>
          <ol className="mt-5 flex flex-col gap-6">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-[3px] bg-[#B85C54] text-[11px] text-white">
                  {index + 1}
                </span>
                <p className="text-base text-black">{step}</p>
              </li>
            ))}
          </ol>

          {/* کارت خاکستری دستور پخت */}
          <div className="mt-10 hidden bg-[#f3f1f1] p-6 w-[390px] lg:block">
            <div className="flex
 flex-wrap gap-4">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-[86px] w-[114px] object-cover"
              />
              <div>
                <h3 className="max-w-[210px] text-sm font-medium text-black">
                  {recipe.title.replace(":", "")}
                </h3>
                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-[9px] text-black">
                  <span>
                    <i className="fa-regular fa-circle-user text-[#B85C54]"></i>{" "}
                    {recipe.author}
                  </span>
                  <span>
                    <i className="fa-regular fa-calendar text-[#B85C54]"></i>{" "}
                    {recipe.date}
                  </span>
                  <span>
                    <i className="fa-solid fa-utensils text-[#B85C54]"></i>{" "}
                    {recipe.categories}
                  </span>
                  <span>
                    <i className="fa-regular fa-comment-dots text-[#B85C54]"></i>{" "}
                    {recipe.comments} comments
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-1 text-[8px] text-[#8B8B8B] flex ">
              {[1, 2, 3, 4, 5].map((star) => (
                <i
                  key={star}
                  className={
                    star <= recipe.rating
                      ? "fa-solid fa-star mr-0.5 text-[#B85C54]"
                      : "fa-solid fa-star mr-0.5 text-gray-400"
                  }
                ></i>
              ))}{" "}
              {recipe.ratingValue} / {recipe.cardReviews} Reviews
            </p>

            <div className="mt-4 flex flex-wrap gap-3 border-b border-gray-300 pb-5">
              <button
                onClick={() => window.print()}
                className="rounded-[3px] bg-[#B85C54] px-4 py-2 text-[9px] text-white"
              >
                <i className="fa-solid fa-print"></i> Print Recipe
              </button>
              <button
                onClick={toggleSave}
                className="rounded-[3px] bg-[#B85C54] px-4 py-2 text-[9px] text-white"
              >
                <i className="fa-regular fa-bookmark"></i> Add to Favorite
              </button>
              <button
                onClick={handleShare}
                className="rounded-[3px] bg-[#B85C54] px-4 py-2 text-[9px] text-white"
              >
                <i className="fa-solid fa-share-nodes"></i> Share Recipe
              </button>
            </div>

            <h2 className="mt-6 text-xl text-black">Ingredients:</h2>
            <ul className="mt-3">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="py-1.5">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={checked.includes(index)}
                      onChange={() => toggleIngredient(index)}
                      className="h-4 w-4 accent-[#B85C54]"
                    />
                    <span
                      className={
                        checked.includes(index)
                          ? "text-sm text-[#8B8B8B] line-through"
                          : "text-sm text-black"
                      }
                    >
                      {item}
                    </span>
                  </label>
                </li>
              ))}
            </ul>

            <h2 className="mt-6 text-xl text-black">Instructions:</h2>
            <ol className="mt-4 flex flex-col gap-4">
              {recipe.cardInstructions.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-[3px] bg-[#B85C54] text-[9px] text-white">
                    {index + 1}
                  </span>
                  <p className="text-xs text-black">{step}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-6 text-xl text-black">Cooking Note:</h2>
            <ol className="mt-4 flex flex-col gap-4">
              {recipe.cookingNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-[3px] bg-[#B85C54] text-[9px] text-white">
                    {index + 1}
                  </span>
                  <p className="text-xs text-black">{note}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* خط قرمز و کامنت */}
          <div className="mt-12 h-1 w-full bg-[#B85C54]"></div>
          <h2 className="mt-8 text-2xl text-black">Comment</h2>
          <div className="mt-3 border-b border-gray-300"></div>
        </div>

        {/* ستون سمت راست */}
        <aside className="hidden flex-col gap-12 lg:flex">
          {/* ارزش غذایی */}
          <div className="bg-[#F3F3F3] p-4">
            <h3 className="text-sm font-medium text-black">Nutrition Facts</h3>
            <ul className="mt-3">
              {recipe.nutrition.map((item) => (
                <li
                  key={item.label}
                  className="flex justify-between border-b border-gray-200 py-2.5 text-xs last:border-b-0"
                >
                  <span className="text-[#6b6b6b]">{item.label}</span>
                  <span className="text-black">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* دستورهای اخیر */}
          <div>
            <h3 className="text-lg font-medium text-black">Recent Recipes</h3>
            <ul className="mt-4 flex flex-col gap-4">
              {recent.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[66px] w-[92px] object-cover"
                  />
                  <div>
                    <p className="text-xs text-black">{item.title}</p>
                    <p className="mt-1.5 text-[10px] text-[#8B8B8B]">
                      <i className="fa-solid fa-fire text-[#B85C54]"></i>{" "}
                      {item.cals} cals
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* فرم ایمیل */}
          <div className="rounded-lg bg-[#FFE9E5] p-6 text-center">
            <h3 className="text-lg font-medium text-black">
              Stay connected with our Recipes updates
            </h3>
            <p className="mt-4 text-xs text-black">
              for the latest health tips and delicious recipes
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="mt-5 h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-xs outline-none"
            />
            {message && <p className="mt-2 text-xs text-black">{message}</p>}
            <button
              onClick={handleSignup}
              className="mt-4 h-11 w-full rounded-md bg-[#B85C54] text-sm text-white"
            >
              Sign up
            </button>
          </div>

          {/* دستورهای مرتبط */}
          <div>
            <h3 className="text-lg font-medium text-black">Related Recipes</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5">
              {related.map((item) => (
                <li key={item.id} className="text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[57px] w-full object-cover"
                  />
                  <p className="mt-1 text-[9px] text-black">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* دستورهای ترند */}
          <div>
            <h3 className="text-base font-medium text-black">
              Trending Recipes
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              {trending.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[53px] w-[82px] object-cover"
                  />
                  <div>
                    <p className="text-[9px] text-black">{item.title}</p>
                    <p className="mt-1 text-[7px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className={
                            star <= item.rating
                              ? "fa-solid fa-star mr-0.5 text-[#B85C54]"
                              : "fa-solid fa-star mr-0.5 text-gray-300"
                          }
                        ></i>
                      ))}
                    </p>
                    <p className="mt-1 text-[8px] text-[#8B8B8B]">
                      <i className="fa-solid fa-fire text-[#B85C54]"></i>{" "}
                      {item.cals} cals
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* محصول مرتبط */}
          {product && (
            <div className="bg-[#F3F3F3] p-4 text-center">
              <h3 className="text-lg text-black">{product.title}</h3>
              <img
                src={product.image}
                alt={product.title}
                className="mt-3 h-[86px] w-full bg-white object-contain"
              />
              <a
                href={product.link}
                className="mt-4 block rounded-md bg-[#B85C54] py-2 text-[10px] font-medium text-white"
              >
                Buy Now
              </a>
            </div>
          )}
        </aside>
      </div>
      {/* --Comment-- */}
    <div className="max-w-3xl mx-auto p-6">
      {/* کامنت‌ها */}
      {comments.map((item, index) => (
        <div
          key={index}
          className={"border-b border-gray-300 py-5 " + (item.isReply ? "ml-6 md:ml-12" : "")}
        >
          <div className="flex gap-3">
            <img src={item.image} className="w-11 h-11 rounded-full" />

            <div className="flex-1">
              {/* نام + زمان + سه نقطه سمت راست */}
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
                <button>
                  <BsThreeDots />
                </button>
              </div>

              <p className="text-sm mt-3">{item.text}</p>

              {/* دکمه Reply و لایک */}
              <div className="flex gap-6 mt-3 text-xs text-gray-500">
                <button
                  onClick={() => toggleReply(index)}
                  className="flex items-center gap-1"
                >
                  <BiCommentDetail size={18} className="text-[#B85C54]" />
                  Reply
                </button>

                <button
                  onClick={() => toggleLike(index)}
                  className="flex items-center gap-1"
                >
                  {item.liked ? (
                    <FaHeart size={16} className="text-[#B85C54]" />
                  ) : (
                    <FaRegHeart size={16} className="text-[#B85C54]" />
                  )}
                  {item.likes}
                </button>
              </div>
            </div>
          </div>

          {/* باکس جواب: فقط برای کامنتی که روش Reply زدیم */}
          {replyIndex === index && (
            <div className="mt-3 md:ml-14">
              <textarea
                className="w-full h-20 bg-gray-100 p-3 text-sm outline-none"
                placeholder="Write your reply..."
                value={replyText}
                onChange={ (e) => setReplyText(e.target.value)}
              ></textarea>
              <button
                onClick={() => addReply(index)}
                className="bg-[#B85C54] text-white text-xs px-5 py-2 rounded mt-2"
              >
                Reply
              </button>
            </div>
          )}
        </div>
      ))}

      {/* دکمه Load more (سمت راست، حاشیه قرمز) */}
      <div className="flex justify-end mt-3">
        <button className="border border-[#B85C54] text-[#B85C54] text-xs px-4 py-1.5 rounded">
          Load more comments
        </button>
      </div>

      {/* فرم نظر */}
      <h3 className="font-medium mt-10">Rate this recipe and share your opinion</h3>

      {/* ستاره‌ها: اگه شماره‌ی ستاره از rating کمتر بود قرمز، وگرنه خاکستری */}
      <div className="flex gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => setRating(star)}>
            <FaStar
              size={16}
              className={star <= rating ? "text-[#B85C54]" : "text-gray-400"}
            />
          </button>
        ))}
      </div>

      <textarea
        className="w-full h-28 mt-3 bg-gray-100 p-3 text-sm outline-none"
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex justify-end mt-3">
        <button
          onClick={addComment}
          className="bg-[#B85C54] text-white text-xs px-8 py-2 rounded"
        >
          Post
        </button>
      </div>
    </div>
        {/* --Comment-- */}

{/* ------------------------------------ */}

{/* You might like this */}

<h2 className="mt-10 text-xl font-roboto font-bold lg:mt-16 lg:text-2xl">You might like this</h2>

<div className="mt-6 grid grid-cols-2 gap-4 max-w-3xl md:grid-cols-3 md:gap-5 lg:mt-8">
  {suggestions.map((item) => (
    <div key={item.id} className="card bg-white border border-gray-200">
      <div className="relative">
        <img src={item.image} alt={item.title} className="w-full h-28 object-cover" />
        <button
          onClick={() => toggleSuggestion(item.id)}
          className="absolute top-2 right-2 bg-white p-1 rounded"
        >
          <i
            className={
              savedSuggestions.includes(item.id)
                ? "fa-solid fa-bookmark text-[#B85C54]"
                : "fa-regular fa-bookmark text-[#B85C54]"
            }
          ></i>
        </button>
      </div>

      <div className="p-3 h-20">
        <p className="text-[#B85C54] text-xs">★★★★☆</p>
        <p className="text-xs mt-2">{item.title}</p>
      </div>
    </div>
  ))}
</div>
{/* You might like this */}

{/* ===== فقط موبایل و تبلت: Nutrition + ایمیل + Tags ===== */}
<div className="mt-10 flex flex-col gap-10 lg:hidden">
  <div className="bg-[#F3F3F3] p-4">
    <h3 className="text-base font-medium text-black">Nutrition Facts</h3>
    <ul className="mt-3">
      {recipe.nutrition.map((item) => (
        <li
          key={item.label}
          className="flex justify-between border-b border-gray-200 py-2.5 text-sm last:border-b-0"
        >
          <span className="text-[#6b6b6b]">{item.label}</span>
          <span className="text-black">{item.value}</span>
        </li>
      ))}
    </ul>
  </div>

  <div className="rounded-lg bg-[#FFE9E5] p-6 text-center">
    <h3 className="text-xl font-medium text-black">
      Stay connected with our Recipes updates
    </h3>
    <p className="mt-4 text-xs text-black">
      for the latest health tips and delicious recipes
    </p>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter Your Email"
      className="mt-5 h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-xs outline-none"
    />
    {message && <p className="mt-2 text-xs text-black">{message}</p>}
    <button
      onClick={handleSignup}
      className="mt-4 h-11 w-full rounded-md bg-[#B85C54] text-sm text-white"
    >
      Sign up
    </button>
  </div>

  <div>
    <h3 className="mb-4 text-lg">Tags</h3>
    <span className="badge badge-outline m-1">#Dessert</span>
    <span className="badge badge-outline m-1">#CheesecakeRecipe</span>
    <span className="badge badge-outline m-1">#FoodBlog</span>
    <span className="badge badge-outline m-1">#DeliciousDesserts</span>
    <span className="badge badge-outline m-1">#Baking</span>
  </div>
</div>

{/* ------------------------------------ */}


    </section>
      <Footer />
    </>
  );
}