import { Route, Routes } from "react-router-dom";
import "./App.css";
import MiniDrawer from "./components/header/Drawer";
import Main from "./components/main/main";
import ControlledAccordions from "./components/pages/HistoryPalestine";
import Footer from "./components/footer";
import Israil from "./components/pages/israil";
import Donations from "./components/pages/Donations";
import Needed from "./components/pages/needed";
import Section2 from "./components/pages/news";
import Map1 from "./components/pages/map";

function App() {
  return (
    <>
      <MiniDrawer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/تاريخ فلسطين" element={<ControlledAccordions />} />
        <Route path="/ الكيان الصهيوني" element={<Israil />} />
        <Route path="/التبرعات" element={<Donations />} />
        <Route path="/احتياجات المواطنين" element={<Needed />} />
        <Route path="/الاخبار العاجله" element={<Section2 />} />
        <Route path="/خريطه فلسطين" element={<Map1 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
