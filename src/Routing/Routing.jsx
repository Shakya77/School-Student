import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import ToggleButton from '../ToggleTheme/ToggleButton';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/toggle" element={<ToggleButton />} />
            </Routes>
        </Router>
    )
}
