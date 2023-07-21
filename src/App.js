import React from 'react';
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./Pages/Home/Home"
import "./index.scss";
import { PersistGate } from 'redux-persist/integration/react'

function App() {

    return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/:id?" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
    );
}

export default App;
