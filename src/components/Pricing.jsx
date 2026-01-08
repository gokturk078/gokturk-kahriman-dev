import { motion } from 'framer-motion';
import { Check, MessageCircle, Sparkles, Globe } from 'lucide-react';
import { pricingFeatures } from '../data/demos';

const Pricing = () => {
    return (
        <section id="pricing" className="section relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[150px]" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Şeffaf <span className="gradient-text">Fiyatlandırma</span>
                    </h2>
                    <p className="section-subtitle">
                        Gizli maliyet yok. Ne alacağınızı biliyorsunuz.
                    </p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-lg mx-auto"
                >
                    <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-electric-blue/20 to-purple/20 blur-3xl" />

                        {/* Special Offer Badge */}
                        <div className="absolute -top-px -right-px">
                            <div className="bg-gradient-to-r from-yellow via-orange-500 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-2xl flex items-center gap-1.5">
                                <Sparkles size={14} />
                                İlk 10 Müşteriye %10 İndirim
                            </div>
                        </div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                                    Web Sitesi Paketi
                                </h3>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl md:text-6xl font-extrabold gradient-text">
                                        ₺2.000
                                    </span>
                                    <span className="text-gray-500">'den başlayan</span>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-8">
                                {pricingFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0">
                                            <Check size={14} className="text-green" />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Domain Options */}
                            <div className="glass rounded-xl p-4 mb-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <Globe size={18} className="text-electric-blue" />
                                    <span className="font-semibold text-white">Domain Seçenekleri</span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <div className="flex items-start gap-2">
                                        <span className="text-green mt-0.5">•</span>
                                        <span>
                                            <span className="text-white">Subdomain (ücretsiz):</span> siteniz.vercel.app
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-cyan mt-0.5">•</span>
                                        <span>
                                            <span className="text-white">Özel domain:</span> siteniz.com (siz alırsınız ~600 TL/yıl, ben bağlarım)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <a
                                href="https://wa.me/905306506990?text=Merhaba,%20web%20sitesi%20yaptırmak%20istiyorum."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full justify-center text-lg py-4"
                            >
                                <MessageCircle size={20} />
                                Hemen Başlayalım
                            </a>

                            {/* Note */}
                            <p className="text-center text-sm text-gray-500 mt-4">
                                💬 Ücretsiz danışma için mesaj atın
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12"
                >
                    {[
                        { icon: '⚡', text: 'Hızlı Teslimat' },
                        { icon: '🔒', text: 'Güvenli Ödeme' },
                        { icon: '💯', text: 'Memnuniyet Garantisi' }
                    ].map((badge, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-400">
                            <span className="text-lg">{badge.icon}</span>
                            <span className="text-sm">{badge.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
