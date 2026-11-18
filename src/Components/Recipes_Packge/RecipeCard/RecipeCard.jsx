import { useState } from "react";

export function RecipeCard({ recipe, className = "" }) {
  const stars = [1, 2, 3, 4, 5];

  // saved یعنی این کارت سیو شده یا نه (اولش false)
  const [saved, setSaved] = useState(false);

  function toggleSave() {
    setSaved(!saved);
  }

  return (
    <div className={"card bg-base-100 border border-gray-200 rounded-lg overflow-hidden " + className}>
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-28 md:h-44 object-cover"
        />
        <button
          type="button"
          onClick={toggleSave}
          className="absolute top-2 right-2 w-7 h-7 md:top-3 md:right-3 md:w-9 md:h-9 bg-white rounded-md flex items-center justify-center"
        >
          <i
            className={
              saved
                ? "fa-solid fa-bookmark text-[#B85C54]"
                : "fa-regular fa-bookmark text-[#B85C54]"
            }
          ></i>
        </button>
      </div>

      <div className="p-3 bg-white text-black">
        <div className="text-xs">
          {stars.map((star) => (
            <i
              key={star}
              className={
                star <= recipe.rating
                  ? "fa-solid fa-star text-[#B85C54]"
                  : "fa-solid fa-star text-gray-300"
              }
            ></i>
          ))}
        </div>

        <h3 className="mt-2 text-xs md:mt-3 md:text-sm">{recipe.title}</h3>

        <div className="hidden md:flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <img
              src="https://rx.iscdn.net/2019/12/194165_alex_martin_2020_11cc.jpg?width=100"
              alt="Alex Martin"
              className="w-7 h-7 rounded-full"
            />
            <span className="text-xs text-black">Alex Martin</span>
          </div>
          <span className="border border-gray-200 rounded-md px-2 py-1 text-xs text-gray-500">
            <i className="fa-solid fa-fire text-[#B85C54]"></i> {recipe.cals} cals
          </span>
        </div>
      </div>
    </div>
  );
}