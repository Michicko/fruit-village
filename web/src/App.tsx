import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
    </Routes>
  );
}

export default App;
