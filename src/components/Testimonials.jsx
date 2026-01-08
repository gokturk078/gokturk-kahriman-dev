import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/demos';

const Testimonials = () => {
    return (
        <section id="testimonials" className="section relative overflow-hidden bg-navy-dark/50">
            {/* Background Gradient */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px]" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Müşteri <span className="gradient-text">Yorumları</span>
                    </h2>
                    <p className="section-subtitle">
                        Projelerimi tamamladığım müşterilerden geri bildirimler.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-6 md:p-8 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote size={48} className="text-white" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-yellow fill-yellow" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-300 leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-purple flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Placeholder Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-sm text-gray-500 italic">
                        * Müşteri yorumları demo amaçlıdır. Gerçek referanslar için iletişime geçebilirsiniz.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
