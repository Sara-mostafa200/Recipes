import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Details from './Components/RecipeDetails/Details';
import Notfound from "./Components/Notfound/Notfound";

let router = createHashRouter([
  { path: "", element: <Layout />, children: [
    {index:true , element:<Home/>},
    {path:'details/:id' , element:<Details/>},
    {path:"*" , element:<Notfound/>}

  ] },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
