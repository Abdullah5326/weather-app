import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import ErrorPage from "./components/ErrorPage";
import PageNotFound from "./components/PageNotFound";
import NoSearchResults from "./components/NoSearchResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/noSearchResults" element={<NoSearchResults />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
