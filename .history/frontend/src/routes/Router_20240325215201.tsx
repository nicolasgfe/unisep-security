import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/home" element={<Home /}
        </Routes>
    )
}