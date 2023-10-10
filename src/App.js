
import {Routes, Route} from 'react-router-dom';
import Main from "./Components/Main/Main";
import Team from "./Components/Team/Team";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route path="/integrantes" element={<Team/>} />
                <Route path="/*" element={<h1>not found</h1>} />
            </Route>
        </Routes>
    );
    
}


export default App;
