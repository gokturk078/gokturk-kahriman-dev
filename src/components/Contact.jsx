import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/demos';

const Contact = () => {
    return (
        <section id="contact" className="section relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-purple/10 to-cyan/20" />
            <div className="absolute inset-0 bg-grid opacity-20" />

            {/* Animated Orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-electric-blue/30 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple/30 rounded-full blur-[120px] animate-pulse-slow" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-blue to-purple mx-auto mb-8 flex items-center justify-center shadow-lg shadow-electric-blue/30"
                    >
                        <ArrowRight size={36} className="text-white" />
                    </motion.div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Haydi, Projenize{' '}
                        <span className="gradient-text">Başlayalım!</span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
                        Ücretsiz danışma için hemen iletişime geçin. Size özel demo hazırlayabilirim.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <motion.a
                            href={`https://wa.me/${contactInfo.whatsapp}?text=Merhaba,%20web%20sitesi%20yaptırmak%20istiyorum.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary text-lg py-4 px-8"
                        >
                            <MessageCircle size={22} />
                            WhatsApp'tan Yazın
                        </motion.a>

                        <motion.a
                            href={`https://instagram.com/${contactInfo.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-secondary text-lg py-4 px-8"
                        >
                            <Instagram size={22} />
                            Instagram'dan DM
                        </motion.a>
                    </div>

                    {/* Alternative Contact */}
                    <div className="glass-card rounded-2xl px-6 py-4 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Mail size={18} />
                            <span className="text-sm">E-posta:</span>
                        </div>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-white hover:text-electric-blue transition-colors font-medium"
                        >
                            {contactInfo.email}
                        </a>
                    </div>

                    {/* Response Time */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex items-center justify-center gap-2 text-gray-400"
                    >
                        <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                        <span className="text-sm">Genellikle 1 saat içinde yanıt veriyorum</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
