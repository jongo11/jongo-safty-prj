import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublishingList from "@pages/PublishingList";
import MainLayouts from "./layouts/MainLayouts";
import Main from "./pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublishingList />} />
        <Route path="/main" element={<MainLayouts />}>
          <Route index element={<Main />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
);
};

export default Router;
