import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import ScrollToTop from "./lib/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
