import { motion } from 'framer-motion';
import { Zap, Palette, Smartphone, Shield } from 'lucide-react';

const About = () => {
    const badges = [
        { icon: Zap, label: '48 Saat Teslimat', color: 'text-yellow' },
        { icon: Palette, label: 'Özel Tasarım', color: 'text-purple' },
        { icon: Smartphone, label: 'Mobil Uyumlu', color: 'text-cyan' },
        { icon: Shield, label: 'Güvenli Altyapı', color: 'text-green' }
    ];

    const techStack = [
        'React', 'Next.js', 'Tailwind', 'Vercel', 'Figma'
    ];

    return (
        <section id="about" className="section relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[150px]" />

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Merhaba, Ben <span className="gradient-text">Göktürk</span> 👋
                        </h2>

                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-8">
                            <p>
                                18 yaşında, full-stack web developer olarak küçük işletmelerin
                                <span className="text-white font-medium"> dijital yüzünü</span> oluşturuyorum.
                            </p>
                            <p>
                                AI teknolojileri ve modern araçlarla
                                <span className="text-white font-medium"> hızlı, kaliteli ve uygun fiyatlı </span>
                                web siteleri geliştiriyorum.
                            </p>
                            <p className="text-white font-medium border-l-4 border-electric-blue pl-4">
                                Misyonum: Her işletmenin profesyonel bir web sitesine sahip olmasını sağlamak.
                            </p>
                        </div>

                        {/* Badges */}
                        <div className="grid grid-cols-2 gap-4">
                            {badges.map((badge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card rounded-xl px-4 py-3 flex items-center gap-3"
                                >
                                    <badge.icon className={`${badge.color}`} size={22} />
                                    <span className="text-sm text-white font-medium">{badge.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Main Card */}
                        <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-purple/10" />

                            <div className="relative z-10">
                                {/* Profile Section */}
                                <div className="flex items-center gap-6 mb-8">
                                    {/* Avatar Placeholder */}
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-electric-blue to-purple flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-electric-blue/30">
                                        GK
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Göktürk Kahriman</h3>
                                        <p className="text-gray-400">Full-Stack Web Developer</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                                            <span className="text-sm text-green">Yeni projelere açık</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <p className="text-sm text-gray-500 mb-3">Kullandığım Teknolojiler</p>
                                    <div className="flex flex-wrap gap-2">
                                        {techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold gradient-text">8+</div>
                                        <div className="text-xs text-gray-500">Demo Proje</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold gradient-text">48</div>
                                        <div className="text-xs text-gray-500">Saat Teslimat</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold gradient-text">100%</div>
                                        <div className="text-xs text-gray-500">Memnuniyet</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Decoration */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-electric-blue to-cyan rounded-full blur-2xl opacity-30 animate-pulse-slow" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
