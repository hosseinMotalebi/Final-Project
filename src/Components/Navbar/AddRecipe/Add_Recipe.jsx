import { useRef, useState } from "react";
import Footer from "../../Footer/Footer";


export  function AddRecipe (){

  // ----- useRef: to read what the user typed -----
  const titleRef = useRef(null);
  const newIngredientRef = useRef(null);
  const newStepRef = useRef(null);
  const servingsRef = useRef(null);
  const cookHoursRef = useRef(null);
  const cookMinutesRef = useRef(null);
  const prepHoursRef = useRef(null);
  const prepMinutesRef = useRef(null);
  const cuisineRef = useRef(null);
  const collectionRef = useRef(null);

  // ----- useState: things that change the page -----
  const [images, setImages] = useState([]); // all photos
  const [mainImage, setMainImage] = useState(null); // photo in the big card
  const [cover, setCover] = useState(null); // cover photo
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]); // { text, header }
  const [steps, setSteps] = useState([]); // { text, image, header, number }

  // how many letters fit in one line of a step (phone = less, computer = more)
  const lettersPerLine = window.innerWidth < 768 ? 32 : 50;

  // ================= PHOTOS =================
  const addPhoto = (e) => {
    const file = e.target.files[0]; // the photo the user chose
    if (file === undefined) return;
    const url = URL.createObjectURL(file); // a link to show the photo
    setImages([...images, url]); // put the new photo at the end of the list
    setMainImage(url); // show it in the big card
  };

  const changePhoto = (e) => {
    const file = e.target.files[0];
    if (file === undefined) return;
    const url = URL.createObjectURL(file);
    // remove the old photo, then add the new one
    setImages([...images.filter((img) => img !== mainImage), url]);
    setMainImage(url);
  };

  const deletePhoto = () => {
    setImages(images.filter((img) => img !== mainImage)); // keep all photos except this one
    setMainImage(null);
    if (cover === mainImage) {
      setCover(null);
    }
  };

  // ================= INGREDIENTS =================
  const addIngredient = () => {
    const text = newIngredientRef.current.value;
    if (text === "") return;
    setIngredients([...ingredients, { text: text, header: false }]);
    newIngredientRef.current.value = ""; // clear the input
  };

  const addIngredientHeader = () => {
    const text = prompt("Header name"); // a small box that asks the user
    if (text === null || text === "") return;
    setIngredients([...ingredients, { text: text, header: true }]);
  };

  const changeIngredient = (e, position) => {
    const newList = [...ingredients]; // copy the list
    newList[position].text = e.target.value; // change one item
    setIngredients(newList);
  };

  // ================= INSTRUCTIONS =================
  const addStep = () => {
    const text = newStepRef.current.value;
    if (text === "") return;
    const number = steps.filter((step) => step.header === false).length + 1; // step number
    setSteps([...steps, { text: text, image: null, header: false, number: number }]);
    newStepRef.current.value = "";
  };

  const addStepHeader = () => {
    const text = prompt("Header name");
    if (text === null || text === "") return;
    setSteps([...steps, { text: text, image: null, header: true, number: 0 }]);
  };

  const changeStepText = (e, position) => {
    const newList = [...steps];
    newList[position].text = e.target.value;
    setSteps(newList);
  };

  const changeStepPhoto = (e, position) => {
    const file = e.target.files[0];
    if (file === undefined) return;
    const newList = [...steps];
    newList[position].image = URL.createObjectURL(file);
    setSteps(newList);
  };

  // ================= SAVE =================
  const save = () => {
    if (titleRef.current.value === "") {
      alert("Please write the recipe title");
      return;
    }

    const recipe = {
      title: titleRef.current.value,
      images: images,
      cover: cover,
      description: description,
      ingredients: ingredients,
      steps: steps,
      servings: servingsRef.current.value,
      cookingTime: cookHoursRef.current.value + "h " + cookMinutesRef.current.value + "m",
      prepTime: prepHoursRef.current.value + "h " + prepMinutesRef.current.value + "m",
      cuisine: cuisineRef.current.value,
      collection: collectionRef.current.value,
    };  
    
    console.log(recipe);
    alert("Recipe saved!");
  };


    return(
        <>
    <div className="min-h-screen bg-white font-roboto text-black mt-20 sm:mt-24 lg:mt-[120px]">
      {/* ===== top bar ===== */}
      <div className="flex items-center justify-between border-y px-4 py-5 sm:px-6 md:px-[94px] md:py-6">
        <h1 className="text-xl font-medium md:text-[26px]">Create new recipe</h1>
        <button
          onClick={save}
          className="btn btn-sm h-[34px] min-h-0 w-[72px] border-0 md:w-[88px] bg-[#B85C54] text-xs font-normal text-white shadow-md hover:bg-[#A9524A]"
        >
          <span className="md:hidden">Next</span>
          <span className="hidden md:inline">Save</span>
        </button>
      </div>

      <div className="mx-auto mt-8 w-[459px] max-w-full px-4 pb-16 md:mt-10 md:px-0 md:pb-24">
        {/* ===== title ===== */}
        <p className="mb-3 text-[22px] md:text-xl">Recipe Title:</p>
        <input
          type="text"
          ref={titleRef}
          className="input input-bordered h-11 w-full rounded border-[#B85C54] bg-white text-sm"
        />

        {/* ===== image ===== */}
        <p className="mb-3 mt-8 text-[22px] md:text-xl">Recipe image:</p>

        {/* big card */}
        <div className="relative h-[295px] overflow-hidden md:h-[264px] rounded-md bg-[#ECEEEE]">
          <img src={mainImage} alt="" className="h-full w-full object-contain" />

          <div className="absolute left-2 top-2 flex gap-1">
            <button
              onClick={() => setCover(mainImage)}
              className="rounded border border-[#B85C54] bg-white px-3 py-[3px] text-[13px] text-[#B85C54]"
            >
              Set as cover
            </button>
            <label className="cursor-pointer rounded border border-[#B85C54] bg-white px-3 py-[3px] text-[13px] text-[#B85C54]">
              Change image
              <input type="file" accept="image/*" className="hidden" onChange={changePhoto} />
            </label>
          </div>

          <button
            onClick={deletePhoto}
            className="absolute bottom-2 left-2 flex h-[26px] w-[26px] items-center justify-center rounded border border-[#B85C54] bg-white text-xs text-[#B85C54]"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>

        {/* small photos */}
        <div className="mt-3 flex flex-wrap gap-3">
          <label className="flex h-[104px] w-[127px] md:h-[94px] md:w-[116px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-gray-300 bg-[#F4F4F4] text-[13px]">
            <i className="fa-solid fa-camera text-2xl text-[#B85C54]"></i>
            Add Photo
            <input type="file" accept="image/*" className="hidden" onChange={addPhoto} />
          </label>

          {images.map((img) => (
            <div
              key={img}
              onClick={() => setMainImage(img)}
              className={
                mainImage === img
                  ? "relative h-[104px] w-[127px] md:h-[94px] md:w-[116px] cursor-pointer overflow-hidden rounded-md border-2 border-[#B85C54] bg-[#ECEEEE]"
                  : "relative h-[104px] w-[127px] md:h-[94px] md:w-[116px] cursor-pointer overflow-hidden rounded-md border border-gray-300 bg-[#ECEEEE]"
              }
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
              <span
                className={
                  cover === img ? "absolute left-0 top-0 rounded-br bg-[#B85C54] px-3 text-[10px] text-white" : "hidden"
                }
              >
                Cover
              </span>
            </div>
          ))}
        </div>

        {/* ===== description ===== */}
        <p className="mb-3 mt-10 text-[22px] md:text-xl">Description:</p>
        <input
          type="text"
          maxLength={100}
          placeholder="Introduce your recipe"
          onChange={(e) => setDescription(e.target.value)}
          className="input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
        />
        <p className="mt-2 text-right text-xs text-gray-400">{description.length}/100</p>

        {/* ===== ingredients ===== */}
        <p className="mb-3 mt-6 text-[22px] md:text-xl">Ingredients:</p>
        <div className="flex flex-col gap-3">
          {ingredients.map((item, index) => (
            <input
              key={index}
              type="text"
              value={item.text}
              onChange={(e) => changeIngredient(e, index)}
              className={
                item.header
                  ? "h-11 w-full bg-white text-base font-bold outline-none"
                  : "input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
              }
            />
          ))}

          <input
            type="text"
            placeholder="Add ingredients"
            ref={newIngredientRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") addIngredient(); // press Enter to add
            }}
            className="input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
          />
        </div>
        <button onClick={addIngredientHeader} className="mt-3 text-sm text-[#B85C54]">
          <i className="fa-solid fa-plus mr-1 text-xs"></i>Header
        </button>

        {/* ===== instructions ===== */}
        <p className="mt-10 text-[22px] md:text-xl">Instructions:</p>
        <p className="mb-3 text-[10px] text-gray-400">Tap to edit</p>

        {steps.map((step, index) =>
          step.header ? (
            <input
              key={index}
              type="text"
              value={step.text}
              onChange={(e) => changeStepText(e, index)}
              className="mb-3 h-11 w-full bg-white text-base font-bold outline-none"
            />
          ) : (
            <div key={index} className="mb-4">
              <p className="font-semibold">Step {step.number}</p>
              <div className="mt-2 flex gap-4">
                <label className="relative flex h-12 w-[65px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#F4F4F4] text-xl text-gray-500">
                  <i className="fa-solid fa-camera"></i>
                  <img src={step.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => changeStepPhoto(e, index)}
                  />
                </label>
                <textarea
                  value={step.text}
                  rows={Math.ceil(step.text.length / lettersPerLine) + 1}
                  onChange={(e) => changeStepText(e, index)}
                  className="w-full resize-none bg-transparent text-sm leading-6 outline-none"
                ></textarea>
              </div>
            </div>
          )
        )}

        <input
          type="text"
          placeholder="Write Instruction"
          ref={newStepRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") addStep(); // press Enter to add
          }}
          className="input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
        />
        <button onClick={addStepHeader} className="mt-3 text-sm text-[#B85C54]">
          <i className="fa-solid fa-plus mr-1 text-xs"></i>Header
        </button>

        {/* ===== servings ===== */}
        <p className="mb-3 mt-10 text-[22px] md:text-xl">Servings:</p>
        <input
          type="number"
          placeholder="#"
          ref={servingsRef}
          className="input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
        />
        <p className="mt-2 text-[10px] text-gray-400">How many portions does this recipe make ?</p>

        {/* ===== cooking time ===== */}
        <p className="mb-3 mt-10 text-[22px] md:text-xl">Cooking Time:</p>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Hours 0"
            ref={cookHoursRef}
            className="input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
          />
          <input
            type="number"
            placeholder="Minutes 0"
            ref={cookMinutesRef}
            className="input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
          />
        </div>
        <p className="mt-2 text-[10px] text-gray-400">How long does it take to cook this recipe?</p>

        {/* ===== prep time ===== */}
        <p className="mb-3 mt-10 text-[22px] md:text-xl">Prep Time:</p>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Hours 0"
            ref={prepHoursRef}
            className="input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
          />
          <input
            type="number"
            placeholder="Minutes 0"
            ref={prepMinutesRef}
            className="input input-bordered h-11 w-full rounded border-gray-300 bg-white text-sm"
          />
        </div>
        <p className="mt-2 text-[10px] text-gray-400">How long does it take to prepate this recipe?</p>

        {/* ===== cuisine ===== */}
        <p className="mb-3 mt-10 text-[22px] md:text-xl">cuisine:</p>
        <div className="relative w-[72%] md:w-56">
          <select
            ref={cuisineRef}
            className="h-11 w-full appearance-none rounded border border-gray-300 bg-white px-4 text-sm"
          >
            <option>Italian</option>
            <option>Mexican</option>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Persian</option>
          </select>
          <i className="fa-solid fa-chevron-down pointer-events-none absolute right-4 top-4 text-xs text-[#B85C54]"></i>
        </div>

        {/* ===== collection ===== */}
        <p className="mb-3 mt-8 text-[22px] md:text-xl">Collection:</p>
        <div className="relative w-[72%] md:w-56">
          <select
            ref={collectionRef}
            className="h-11 w-full appearance-none rounded border border-gray-300 bg-white px-4 text-sm"
          >
            <option value="">Select collection</option>
            <option>Favorites</option>
            <option>Quick meals</option>
            <option>Dinner</option>
            <option>Desserts</option>
          </select>
          <i className="fa-solid fa-chevron-down pointer-events-none absolute right-4 top-4 text-xs text-[#B85C54]"></i>
        </div>
      </div>
    </div>

    {/* footer only for phone and tablet (desktop design has no footer) */}
    <div>
      <Footer />
    </div>
        </>
    )
}

