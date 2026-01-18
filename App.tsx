
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import About from './components/About';
import Features from './components/Features';
import Results from './components/Results';
import Courses from './components/Courses';
import IGShowcase from './components/IGShowcase';
import BrochurePage from './components/BrochurePage';
import ComparisonPage from './components/ComparisonPage';
import MaterialsPage from './components/MaterialsPage';
import EnrollmentPage from './components/EnrollmentPage';
import { ViewState } from './types';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewState>('home');

    // Force scroll to top immediately whenever the view changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentView]);

    const handleChangeView = (view: ViewState) => {
        setCurrentView(view);
    };

    return (
        <div className="font-sans text-gray-800 bg-gray-50 selection:bg-[#C5A059] selection:text-white overflow-x-hidden min-h-screen flex flex-col">
            <Navbar currentView={currentView} onChangeView={handleChangeView} />
            
            <main className="flex-grow">
                {currentView === 'home' && (
                    <>
                        <Hero />
                        <PainPoints />
                        <About />
                        <Features />
                        <Results />
                        <Courses />
                        <IGShowcase />
                    </>
                )}

                {currentView === 'brochure' && (
                    <BrochurePage onBack={() => handleChangeView('home')} />
                )}

                {currentView === 'comparison' && (
                    <ComparisonPage onBack={() => handleChangeView('home')} />
                )}

                {currentView === 'materials' && (
                    <MaterialsPage onBack={() => handleChangeView('home')} />
                )}

                {currentView === 'enrollment' && (
                    <EnrollmentPage onBack={() => handleChangeView('home')} />
                )}
            </main>

            <Footer />
        </div>
    );
};

export default App;
