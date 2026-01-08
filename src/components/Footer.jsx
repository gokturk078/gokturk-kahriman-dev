import { Instagram, MessageCircle, Github, Linkedin, Heart } from 'lucide-react';
import { navLinks, contactInfo } from '../data/demos';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const socialLinks = [
        {
            icon: MessageCircle,
            href: `https://wa.me/${contactInfo.whatsapp}`,
            label: 'WhatsApp'
        },
        {
            icon: Instagram,
            href: `https://instagram.com/${contactInfo.instagram}`,
            label: 'Instagram'
        },
        {
            icon: Github,
            href: 'https://github.com/gokturkkahriman',
            label: 'GitHub'
        },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/gokturkkahriman',
            label: 'LinkedIn'
        }
    ];

    return (
        <footer className="bg-navy-dark border-t border-white/5">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
                    {/* Branding */}
                    <div>
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-2xl font-bold gradient-text cursor-pointer mb-4 inline-block"
                        >
                            GK<span className="text-white">.</span>dev
                        </button>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Modern web siteleri, hızlı teslimat. Küçük işletmelerin dijital yüzünü oluşturuyorum.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Hızlı Linkler</h4>
                        <ul className="space-y-2">
                            {navLinks.slice(1, 6).map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Beni Takip Edin</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                        <div className="mt-4">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                {contactInfo.email}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © 2025 Göktürk Kahriman. Tüm hakları saklıdır.
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Heart size={14} className="text-red-500" /> ile İstanbul'da yapıldı
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
