import React from "react";
import ReactDOM from 'react-dom/client';
import Products from "../../pages/products/index";
import MainLayout from "../../layouts/main-layout";

import {
    createBrowserRouter, createRoutesFromElements,
    Route, RouterProvider,
} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {store} from "../../store.js";

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


const root = ReactDOM.createRoot(document.getElementById("app"));
let persistor = persistStore(store);

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </PersistGate>
    </Provider>
);
