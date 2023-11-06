import React from "react";
import ReactDOM from 'react-dom/client';
import Products from "../../pages/products/index";
import MainLayout from "../../layouts/main-layout";

import {
    createBrowserRouter, createRoutesFromElements,
    Route, RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />}>
                <Route
                    index
                    element={<Products />}
                />
            </Route>
            {/*<Route path="*" element={<Error404 />} />*/}
        </>
    )
);

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
