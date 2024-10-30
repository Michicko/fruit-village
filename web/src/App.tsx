import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/Layouts/Root";
import About from "./pages/About";
import ShippingAndPayment from "./pages/ShippingAndPayment";
import Blog from "./pages/Blog";
import Sale from "./pages/Sale";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import PageLayout from "./components/Layouts/PageLayout";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";
import Waitlist from "./pages/Waitlist";
import ViewedProducts from "./pages/ViewedProducts";
import Bonuses from "./pages/Bonuses";
import Product from "./pages/Product/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="sale" element={<Sale />} />

          <Route element={<PageLayout withRightSidebar={true} />}>
            <Route path="about" element={<About />} />
            <Route
              path="shipping-and-payment"
              element={<ShippingAndPayment />}
            />
            <Route path="blog" element={<Blog />} />

            <Route path="contacts" element={<Contacts />} />
          </Route>

          <Route element={<PageLayout withLeftSidebar={true} />}>
            <Route path="account" element={<Account />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="waitlist" element={<Waitlist />} />
            <Route path="bonuses" element={<Bonuses />} />
            <Route path="viewed-products" element={<ViewedProducts />} />
          </Route>

          <Route element={<PageLayout noSidebars={true} />}>
            <Route path="sale/:slug" element={<Product />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
