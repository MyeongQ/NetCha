import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Community from "./routes/Community";
import NetflixList from "./routes/NetflixList";
import WatchaList from "./routes/WatchaList";
import Mypage from "./routes/Mypage";

function App() {
    return (
        <BrowserRouter>
            {/* V6 문법 - 라우트 사용 */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />}/>
                <Route path="community" element={<Community />}/>
                <Route path="netflix" element={<NetflixList />}/>
                <Route path="watcha" element={<WatchaList />}/>
                <Route path="mypage" element={<Mypage />}/>
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;