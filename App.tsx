import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Mail, Instagram, Youtube, Linkedin, 
  ChevronRight, MessageSquare, GraduationCap, Globe, 
  Calendar, Award, CheckCircle2, Star, ArrowRight
} from 'lucide-react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import CoursesPage from './pages/Courses';
import Methodology from './pages/Methodology';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Franchise from './pages/Franchise';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Reels from './pages/Reels';
import OpenStore from './pages/OpenStore';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/metodologia" element={<Methodology />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/franquia" element={<Franchise />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/openstore" element={<OpenStore />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;