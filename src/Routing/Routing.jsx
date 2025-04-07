import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Login from '../Pages/Guest/Login';
import ForgotPassword from '../Pages/Guest/ForgotPassword';

export default function Routing() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot" element={<ForgotPassword />} />
            </Routes>
        </Router>
    )
}
