import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Clock, Building2, Banknote } from 'lucide-react';

const Hero = () => {
    const scrollToPortfolio = () => {
        const element = document.getElementById('portfolio');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const stats = [
        { icon: Clock, value: '48 Saat', label: 'Hızlı Teslimat' },
        { icon: Building2, value: '8 Sektör', label: 'Geniş Deneyim' },
        { icon: Banknote, value: '2.000 TL\'den', label: 'Uygun Fiyat' }
    ];

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center relative overflow-hidden bg-grid"
        >
            {/* Background Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Kicker */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                            <span className="text-sm text-gray-300">Web Developer | 8 Sektörde Uzman</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
                        >
                            <span className="text-white">İşletmenize Özel</span>
                            <br />
                            <span className="gradient-text">Web Sitesi</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            48 saatte yayına alıyorum. Modern, hızlı ve uygun fiyatlı web siteleri.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                        >
                            <button
                                onClick={scrollToPortfolio}
                                className="btn-primary"
                            >
                                Demo Projelerime Bakın
                                <ArrowRight size={18} />
                            </button>
                            <a
                                href="https://wa.me/905306506990"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <MessageCircle size={18} />
                                Hemen İletişime Geç
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-4 md:gap-8"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                                        <stat.icon size={20} className="text-electric-blue" />
                                        <span className="text-xl md:text-2xl font-bold text-white">{stat.value}</span>
                                    </div>
                                    <span className="text-xs md:text-sm text-gray-500">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual - Device Mockups */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Laptop Mockup */}
                        <div className="relative z-10 glass-card rounded-3xl p-6 animate-float">
                            {/* Browser Chrome */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex-1 bg-white/10 rounded-full py-1 px-3 text-xs text-gray-400 text-center">
                                    lumina-guzellik.vercel.app
                                </div>
                            </div>
                            {/* Screen Content Placeholder */}
                            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-purple-600/20 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">Lumina Estetik</div>
                                    <div className="text-sm text-gray-400">Güzellik Merkezi Demo</div>
                                </div>
                            </div>
                        </div>

                        {/* Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-8 -right-4 w-40"
                            style={{ animationDelay: '1s' }}
                        >
                            <div className="glass-card rounded-3xl p-3">
                                <div className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-600/20 flex items-center justify-center">
                                    <div className="text-center px-2">
                                        <div className="text-sm font-bold text-white mb-1">Mobil Uyumlu</div>
                                        <div className="text-xs text-gray-400">Her cihazda mükemmel</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -left-4 glass-card rounded-xl px-4 py-2 flex items-center gap-2">
                            <span className="text-green text-lg">✓</span>
                            <span className="text-sm text-white">SEO Optimized</span>
                        </div>
                        <div className="absolute top-1/2 -left-8 glass-card rounded-xl px-4 py-2 flex items-center gap-2">
                            <span className="text-yellow text-lg">⚡</span>
                            <span className="text-sm text-white">Hızlı Yükleme</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500">Aşağı Kaydır</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
