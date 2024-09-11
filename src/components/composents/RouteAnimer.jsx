import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Contact from "../pages/Contact";
import Content from "../pages/Content";
import Erreur from "../pages/Erreur";

function RouteAnimer({ onContentChange }) {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Content onContentChange={onContentChange} />} />
                <Route path="/ContactMe" element={<Contact />} />
                <Route path="*" element={<Erreur code={404} />} />
                <Route path="/IAmATeaPod" element={<Erreur code={418} />} />
            </Routes>
        </AnimatePresence>
    );
}

export default RouteAnimer;
