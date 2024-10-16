import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Root from "./components/layouts/Root";
import About from "./pages/About";
import ShippingAndPayment from "./pages/ShippingAndPayment";
import Blog from "./pages/Blog";
import Sale from "./pages/Sale";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import PageLayout from "./components/layouts/PageLayout";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route element={<PageLayout />}>
            <Route path="about" element={<About />} />
            <Route
              path="shipping-and-payment"
              element={<ShippingAndPayment />}
            />
            <Route path="blog" element={<Blog />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="sale" element={<Sale />} />
          <Route path="account" element={<Account />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
