import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Contact from "../pages/Contact";
import Content from "../pages/Content";

function RouteAnimer({ onContentChange }) {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Content onContentChange={onContentChange} />} />
                <Route path="/ContactMe" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}

export default RouteAnimer;
