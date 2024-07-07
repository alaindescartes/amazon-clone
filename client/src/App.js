import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Error from "./components/error/Error";
import CartModal from "./components/portal/Modals/CartModal";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import RootPage from "./components/RootPage";
import Main from "./components/main/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement:<Error/>,
        children: [
            {
                index:true,
                element:<Main/>
            },
            {
                path: "products",
                element: <Home />
            }
        ]
    },
]);

function App() {
  return (

      <RouterProvider router={router}/>
    // <div className="App">
    //   <CartModal />
    //   <Header />
    //   <Home />
    // </div>
  );
}

export default App;
