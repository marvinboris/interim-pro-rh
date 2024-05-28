import { LayoutAdmin, LayoutFrontend, LayoutUser } from "./layouts";
import {
  PageAbout,
  PageAdminApplications,
  PageAdminApplicationsAdd,
  PageAdminCompanies,
  PageAdminCompaniesAdd,
  PageAdminDashboard,
  PageAdminProfiles,
  PageAdminSettings,
  PageAuthLogin,
  PageAuthRegister,
  PageBlog,
  PageBlogDetails,
  PageContact,
  PageHome,
  PageSearch,
  PageServiceEngineeringTraining,
  PageServiceHR,
  PageServiceInterim,
  PageServiceTeam,
  PageTrainings,
  PageUserDashboard,
  PageUserProfile,
  PageUserRequests,
} from "./pages";

import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route path="/admin/settings" element={<PageAdminSettings />} />
        <Route
          path="/admin/companies/add"
          element={<PageAdminCompaniesAdd />}
        />
        <Route path="/admin/companies" element={<PageAdminCompanies />} />
        <Route path="/admin/profiles" element={<PageAdminProfiles />} />
        <Route
          path="/admin/applications/add"
          element={<PageAdminApplicationsAdd />}
        />
        <Route path="/admin/applications" element={<PageAdminApplications />} />
        <Route path="/admin" element={<PageAdminDashboard />} />
      </Route>

      <Route path="/user" element={<LayoutUser />}>
        <Route path="/user/profile" element={<PageUserProfile />} />
        <Route path="/user/requests" element={<PageUserRequests />} />
        <Route path="/user" element={<PageUserDashboard />} />
      </Route>

      <Route path="" element={<LayoutFrontend />}>
        <Route path="/register" element={<PageAuthRegister />} />
        <Route path="/login" element={<PageAuthLogin />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/search" element={<PageSearch />} />
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
        <Route path="/trainings" element={<PageTrainings />} />
        <Route path="/blog/:slug" element={<PageBlogDetails />} />
        <Route path="/blog" element={<PageBlog />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="" element={<PageHome />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
