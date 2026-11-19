export function BlogCard({ blog }) {
  return (
    <article className="card w-auto overflow-hidden rounded-[4px] border border-[#e8e8e8] bg-white shadow-none">
      <figure className="h-[240px] w-full overflow-hidden">
        <img
          src={blog.image}
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
