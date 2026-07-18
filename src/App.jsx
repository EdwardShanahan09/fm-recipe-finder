import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Recipes from "./pages/Recipes/Recipes";
import Recipe from "./pages/Recipe/Recipe";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/recipes" element={<Recipes />} />

          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
