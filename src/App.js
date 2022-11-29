import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import "./Style/GlobalStyles.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/NotFound/NotFound";
import Catalog from "./Pages/Catalog/Catalog";
import store from "./redux/store";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Categories from "./Pages/Categories/Categories";
import Flower from "./Pages/Flower/Flower";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/flower/:id" element={<Flower />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
