import "./assets/css/App.css";
import { UserDataProvider } from "./context/UserDataContext";
import { Home } from "./pages/home/Home";
import { Session } from "./pages/session/Session";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
        <UserDataProvider>
            {/* BrowserRouter activamos ReactRouterDOM en la app */}
            <BrowserRouter>
                {/* Activamos la funcionalidad de poder empezar a crear RUTAS en */}
                <Routes>
                    <Route path="/session" element={<Session />} />
                    <Route index path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </UserDataProvider>
        </>
    );
}

export default App;
