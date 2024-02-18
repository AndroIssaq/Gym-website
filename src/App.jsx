import "./App.css";
import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
/*
 <div className='flex items-center justify-center gap-[20px]'>
      <button onClick={()=>i18n.changeLanguage('ar')}>AR</button>
      <button onClick={()=>i18n.changeLanguage('en')}>EN</button>
    </div>*/
