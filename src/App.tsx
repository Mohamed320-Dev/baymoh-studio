import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { ContactP } from "./pages/ContactP";
import { Projects } from "./pages/Projects";
import { Events } from "./pages/Events";
import { Studio } from "./components/Studio";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home route - works for both / and /baymoh-studio */}
        <Route index element={<Home />} />
        <Route path="/baymoh-studio" element={<Home />} />

        {/* Other routes */}
        <Route path="/baymoh-studio/events" element={<Events />} />
        <Route path="/baymoh-studio/projects" element={<Projects />} />
        <Route path="/baymoh-studio/studio" element={<Studio />} />
        <Route path="/baymoh-studio/contact" element={<ContactP />} />
      </Route>
    </Routes>
  );
};
