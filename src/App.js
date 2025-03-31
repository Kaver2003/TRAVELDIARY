import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {TravelProvider} from './context/TravelContext';

import Home from './pages/Home';
import Explore from './pages/Explore';
import AddTravel from './pages/AddTravel';
import TravelDetail from './components/Travel/TravelDetail';
import NotFound from './pages/NotFound';
import Navbar from "./components/ UI/Navbar";

import './styles/index.css'
import Footer from "./components/ UI/Footer";
import EditTravel from "./pages/EditTravel";

const App = () => {
    return (

        <TravelProvider>
            <Router>
                <div className="min-h-screen flex flex-col">
                    <Navbar/>
                    <main className="flex-grow bg-gray-50">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/explore" element={<Explore/>}/>
                            <Route path="/add-travel" element={<AddTravel/>}/>
                            <Route path="/edit-travel/:id" element={<EditTravel />} />
                            <Route path="/travel/:id" element={<TravelDetail/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </div>
            </Router>
        </TravelProvider>

    );
};

export default App;