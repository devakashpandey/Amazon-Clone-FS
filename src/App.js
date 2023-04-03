import "./App.css";
import Header from "./components/header/Header";
import Banner from "./Home/Banner";
import Footer from "./components/footer/Footer";
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
    createRoutesFromElements(<Route path="/" element={<Layout />} />)
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
