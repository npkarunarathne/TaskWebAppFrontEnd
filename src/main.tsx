import { createRoot } from 'react-dom/client'
import React from "react";
import App from "./App.tsx";
import "./index.css";
import { persistor, store } from "./store/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </PersistGate>
    </Provider>,
)
