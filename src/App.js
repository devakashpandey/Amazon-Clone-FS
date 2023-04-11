import "./App.css";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import CreateAccount from "./pages/signUp/CreateAccount";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/cart/Cart";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<CreateAccount />}></Route>
        </Route>
      </>
    )
  );

  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
