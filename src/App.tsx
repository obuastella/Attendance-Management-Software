import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Student/Login";
import SignUp from "./pages/Auth/Student/SignUp";
import LecturerLogin from "./pages/Auth/Lecturer/LecturerLogin";
import LecturerSignUp from "./pages/Auth/Lecturer/lecturerSignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/*  */}
        <Route path="/lecturer/sign-up" element={<LecturerSignUp />} />
        <Route path="/lecturer/login" element={<LecturerLogin />} />
      </Routes>
    </Router>
  );
}
