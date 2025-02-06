import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import ScrollToTop from "./lib/ScrollToTop";
import MainLayout from "./ui/Layouts/MainLayout";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;
