import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
      </Route>
    )
  );

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}></RouterProvider>
      {/* <Header />
      <Banner />
      <Footer /> */}
    </div>
  );
};

export default App;
