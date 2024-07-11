import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublishingList from "./pages/PublishingList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublishingList />} />
        {/* <Route path="/main" element={<Layouts />} >
          <Route path="/" element={<PublishingList />} />
        </Route> */}
        <Route path="*" element={<h1>없는페이지입니다.</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
