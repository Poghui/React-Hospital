import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from '../pages/Create';
import Read from '../pages/Read';
import Home from '../pages/Home';

const router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/read" element={<Read />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default router