import { createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products/Products.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import MainLayout from './layout/MainLayout.jsx';
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";




const router= createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'productDetails',
                element: <ProductDetails />
            }
        ]
    }
]);
export default router;