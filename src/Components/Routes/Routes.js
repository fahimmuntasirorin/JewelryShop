import MainLayout from "../Layout/MainLayout/MainLayout";
import About from "../Pages/About/About";
import Booking from "../Pages/Booking/Booking";
import Contact from "../Pages/Contact/Contact";
import Error from "../Utilities/ErrorPage/Error";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/HomePage/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/booking',
                element:<Booking></Booking>
            }
        ]
    }
]);

export default router;