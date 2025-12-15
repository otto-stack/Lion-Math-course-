import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';
import { ENROLL_LINK } from '../constants';

interface NavbarProps {
    currentView: ViewState;
    onChangeView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        setIsOpen(false);
        // Special pages handling
        if (['brochure', 'comparison', 'materials', 'enrollment'].includes(id)) {
            onChangeView(id as ViewState);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Home page sections handling
            onChangeView('home');
            if (id !== 'home') {
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: '首頁', id: 'home' },
        { name: '導師簡介', id: 'about' },
        { name: '與眾不同', id: 'comparison' }, 
        { name: '課程配套', id: 'materials' }, 
        { name: '課程特色', id: 'features' },
        { name: '戰績見證', id: 'results' },
        { name: '課程列表', id: 'courses' },
        { name: '課程章程', id: 'brochure' }, 
        { name: '報名流程', id: 'enrollment' },
        { name: '聯絡我們', id: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div 
                    className={`font-black text-xl md:text-2xl tracking-tighter cursor-pointer ${isScrolled || currentView !== 'home' ? 'text-[#1A1A1A]' : 'text-[#C5A059]'} z-50 whitespace-nowrap mr-2`}
                    onClick={() => handleNavClick('home')}
                >
                    LION MATH
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-1 xl:space-x-3 overflow-x-auto no-scrollbar">
                    {navLinks.map((link) => (
                        <button 
                            key={link.name} 
                            onClick={() => handleNavClick(link.id)}
                            className={`font-medium text-xs xl:text-sm tracking-wide hover:text-[#C5A059] transition-colors whitespace-nowrap px-2 py-1 ${
                                link.id === currentView ? 'text-[#C5A059] font-bold' :
                                (isScrolled || currentView !== 'home' ? 'text-gray-600' : 'text-gray-300')
                            }`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <a 
                        href={ENROLL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#C5A059] text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-full text-xs xl:text-sm font-bold hover:bg-[#D4AF37] transition-transform transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap ml-2"
                    >
                        立即報讀
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden z-50">
                    <button onClick={() => setIsOpen(!isOpen)} className={`${(isScrolled || currentView !== 'home' || isOpen) ? 'text-gray-800' : 'text-white'} p-2`}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 animate-fade-in lg:hidden overflow-y-auto">
                    <div className="flex flex-col space-y-2 pb-8">
                        {navLinks.map((link) => (
                            <button 
                                key={link.name} 
                                onClick={() => handleNavClick(link.id)}
                                className={`block w-full py-4 text-center text-lg font-bold border-b border-gray-100 active:bg-gray-50 active:text-[#C5A059] ${currentView === link.id ? 'text-[#C5A059]' : 'text-gray-800'}`}
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="pt-6">
                             <a 
                                href={ENROLL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-[#C5A059] text-white py-4 rounded-xl text-lg font-bold shadow-lg active:scale-95 transition-transform"
                            >
                                立即報讀
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;