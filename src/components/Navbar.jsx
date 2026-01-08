import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/demos';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection('hero')}
                    className="text-xl md:text-2xl font-bold gradient-text cursor-pointer"
                >
                    GK<span className="text-white">.</span>dev
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.slice(1).map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* CTA Button (Desktop) */}
                <a
                    href="https://wa.me/905306506990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
                >
                    İletişime Geç
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden">
                    <div className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="px-4 pt-2">
                            <a
                                href="https://wa.me/905306506990"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-sm py-3 w-full justify-center"
                            >
                                İletişime Geç
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
