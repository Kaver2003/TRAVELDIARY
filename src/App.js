import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import {TravelProvider} from './context/TravelContext';


import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import AddTravel from './pages/AddTravel';
import TravelDetail from './components/Travel/TravelDetail';
import NotFound from './pages/NotFound';
import Navbar from "./components/ UI/Navbar";



const App = () => {
    return (
        <AuthProvider>
            <TravelProvider>
                <Router>
                    <div className="min-h-screen flex flex-col">
                        <Navbar/>
                        <main className="flex-grow bg-gray-50">
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/explore" element={<Explore/>}/>
                                <Route path="/add-travel" element={<AddTravel/>}/>
                                <Route path="/travel/:id" element={<TravelDetail/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </main>
                        {/*<Footer />*/}
                    </div>
                </Router>
            </TravelProvider>
        </AuthProvider>
    );
};

export default App;