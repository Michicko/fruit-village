import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ShippingPayment from "./pages/ShippingPayment";
import Sale from "./pages/Sale";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Error404 from "./pages/Error404";
import ScrollToTop from "./components/Components/ScrollToTop";
import Product from "./pages/Product";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop pathname={pathname} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shipping-and-payment" element={<ShippingPayment />} />
          <Route path="sale" element={<Sale />} />
          <Route path="sale/:slug" element={<Product />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
