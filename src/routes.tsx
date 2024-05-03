import { LayoutFrontend } from "./layouts";
import {
  PageAbout,
  PageBlog,
  PageBlogDetails,
  PageContact,
  PageHome,
  PageServiceEngineeringTraining,
  PageServiceHR,
  PageServiceInterim,
  PageServiceTeam,
} from "./pages";

import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<LayoutFrontend />}>
        <Route path="/contact" element={<PageContact />} />
        <Route
          path="/services/mise-a-disposition-du-personnel"
          element={<PageServiceTeam />}
        />
        <Route
          path="/services/interim-et-placement-des-travailleurs"
          element={<PageServiceInterim />}
        />
        <Route path="/services/conseil-rh" element={<PageServiceHR />} />
        <Route
          path="/services/ingenierie-de-formation"
          element={<PageServiceEngineeringTraining />}
        />
        <Route path="/blog/:slug" element={<PageBlogDetails />} />
        <Route path="/blog" element={<PageBlog />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="" element={<PageHome />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
