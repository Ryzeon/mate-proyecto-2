import {React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Team from "./Components/Team/Team";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/mate-proyecto-2" element={<Nav />}>
                <Route index element={<Main/>} />
                <Route path="integrantes" element={<Team/>} />
                <Route path="*" element={<h1>not found</h1>} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
    
}


export default App;
