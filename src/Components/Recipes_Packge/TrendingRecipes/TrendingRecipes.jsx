import { RecipeCard } from "../RecipeCard/RecipeCard";
import { recipes } from "../../../data/recipes";

export function TrendingRecipes({ bookmarks = [], handleBookmark }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 font-roboto">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black">Trending Recipe</h2>
        <a href="#" className="hidden md:block text-[#B85C54] font-roboto font-bold">View more</a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            bookmarks={bookmarks}
            handleBookmark={handleBookmark}
          />
        ))}
      </div>
    </section>
  );
}