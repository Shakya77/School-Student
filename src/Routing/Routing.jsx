import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import { useState } from 'react';

export default function Routing() {
    const [loggedIn, setLoggedIn] = useState(true);

    return (
        <Router>
            <Routes>
                <Route path="/" element={Home} />
            </Routes>
        </Router>
    )
}
