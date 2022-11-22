import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./Style/GlobalStyles.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/NotFound/NotFound";

// style components
import store from "./redux/store";
import Reviews from "./Pages/Reviews/Reviews";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
