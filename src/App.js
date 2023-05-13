import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Container } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import Project from "./pages/Project";
import Work from "./pages/Work";
export function App() {
    return (
        <>
            <ChakraProvider>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Project/>}/>
                        <Route path="/experiences" element={<Work/>}/>
                    </Routes>
                </Router>
            </ChakraProvider>
        </>
    );
}

export default App
