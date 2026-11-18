import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Navbar/Home/Home";
import { Recipe } from "./Components/Recipes_Packge/Recipe/Recipe";
import { AddRecipe } from "./Components/Navbar/AddRecipe/Add_Recipe";
import { Blog } from "./Components/Navbar/Blog/Blog";
import { About } from "./Components/Navbar/About/About";
import Signup from "./Components/SighandLogin/Signup/Signup";
import { Navbar } from "./Components/Navbar/Navbar";
import Login from "./Components/SighandLogin/login/login";
import AdminPanel from "./Components/Admin/AdminPanel";
import ThankYou from "./Components/ThankYou/thankyour";
import Cookie from "./Components/Cookie/Cookie";
import Newsletter from "./Components/Newsletter/Newsletter";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="/admin" element={<AdminPanel />} />
<Route path="*" element={<NotFound />} />
      </Routes>
      <Cookie />
      <Newsletter />
    </>
  );
}

export default App;
