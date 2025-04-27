import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUpDemo from '../Pages/SignUpDemo/SignUpDemo';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUpDemo />} />
            </Routes>
        </Router>
    )
}
