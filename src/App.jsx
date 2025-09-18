import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />} />
        <Route path="/errorPage" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
