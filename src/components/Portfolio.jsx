import { motion } from 'framer-motion';
import { ExternalLink, Clock } from 'lucide-react';
import { demos } from '../data/demos';

const Portfolio = () => {
    return (
        <section id="portfolio" className="section relative overflow-hidden bg-navy-dark/50">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[200px]" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Demo <span className="gradient-text">Projelerim</span>
                    </h2>
                    <p className="section-subtitle">
                        8 farklı sektör için hazırladığım örnek web siteleri. İsterseniz sizin sektörünüz için de benzerini yapabilirim.
                    </p>
                </motion.div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {demos.map((demo, index) => (
                        <motion.div
                            key={demo.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                                {/* Thumbnail */}
                                <div className={`aspect-video relative overflow-hidden bg-gradient-to-br ${demo.gradient}`}>
                                    {/* Overlay Pattern */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute inset-0 bg-grid" />
                                    </div>

                                    {/* Content Placeholder */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                        <span className="text-lg md:text-xl font-bold text-white text-center drop-shadow-lg">
                                            {demo.title}
                                        </span>
                                        {demo.status === 'coming-soon' && (
                                            <div className="mt-2 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                                <Clock size={12} className="text-white/80" />
                                                <span className="text-xs text-white/80">Yakında</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover Overlay */}
                                    {demo.status === 'live' && (
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="btn-primary text-sm py-2 px-4">
                                                Demoyu İncele
                                                <ExternalLink size={14} />
                                            </span>
                                        </div>
                                    )}

                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white font-medium">
                                            {demo.category}
                                        </span>
                                    </div>

                                    {/* Status Badge */}
                                    {demo.status === 'live' && (
                                        <div className="absolute top-3 right-3">
                                            <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green/20 backdrop-blur-sm border border-green/30">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
                                                <span className="text-xs text-green font-medium">Yayında</span>
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">
                                        {demo.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 line-clamp-2">
                                        {demo.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="mt-4">
                                        {demo.status === 'live' ? (
                                            <a
                                                href={demo.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-electric-blue hover:text-cyan transition-colors font-medium"
                                            >
                                                Demoyu İncele
                                                <ExternalLink size={14} />
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center gap-2 text-sm text-gray-500 cursor-not-allowed">
                                                <Clock size={14} />
                                                Yakında...
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="glass-card rounded-2xl px-6 py-4 inline-flex items-center gap-3 mx-auto">
                        <span className="text-2xl">💡</span>
                        <p className="text-gray-300 text-sm md:text-base">
                            <span className="text-white font-medium">Sektörünüz listede yok mu?</span>
                            {' '}Sorun değil! Size özel demo hazırlayabilirim.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
