import "./App.css";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "./pages/cart/Cart";

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
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );

  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
      {/* <Header />
      <Banner />
      <Footer /> */}
    </div>
  );
};

export default App;
