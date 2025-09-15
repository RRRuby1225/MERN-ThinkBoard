import {Routes, Route} from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import HomeDetailPage from "./pages/HomeDetailPage";
import { themeChange } from 'theme-change'
import { useEffect } from "react";

const App = () => {
  // daisyui————CSS Theme Change
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* 背景样式覆盖 */}
      <div
        className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#FF9900_100%)]"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<HomeDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;