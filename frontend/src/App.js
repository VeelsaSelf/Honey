import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/pages/HomePage";
import "@/App.css";

function App() {
    return (
        <div className="min-h-screen bg-background">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
            <Toaster position="bottom-right" />
        </div>
    );
}

export default App;
