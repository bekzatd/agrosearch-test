import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cart";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
    cart: cartReducer,
});

const persistedReduser = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
});
