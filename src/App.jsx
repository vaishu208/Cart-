import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/*anything that comes through the forward slash will be directed to the homepage. */}
        {/*we created a root where we define the path and element props*/}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default App;
