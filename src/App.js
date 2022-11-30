import {Route, Routes} from "react-router-dom";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage/ProductPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<CatalogPage/>}/>
                <Route path={"cart"} element={<CartPage/>}/>
                <Route path={"product"}>
                    <Route path={":productId"} element={<ProductPage/>}/>
                </Route>
                <Route path={"feedback"} element={<FeedbackPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
