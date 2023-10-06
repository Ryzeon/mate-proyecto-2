import {React, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/mate-proyecto-2" element={<Nav />}>
                <Route index element={<Main/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
    
}


export default App;
