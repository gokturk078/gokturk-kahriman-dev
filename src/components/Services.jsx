import { motion } from 'framer-motion';
import {
    Palette,
    Smartphone,
    MessageCircle,
    Zap,
    Globe,
    Headphones
} from 'lucide-react';
import { services } from '../data/demos';

// Icon mapping
const iconMap = {
    Palette: Palette,
    Smartphone: Smartphone,
    MessageCircle: MessageCircle,
    Zap: Zap,
    Globe: Globe,
    Headphones: Headphones
};

// Colors for each service
const colorClasses = [
    'from-purple-500 to-pink-500',
    'from-cyan-500 to-blue-500',
    'from-green-500 to-emerald-500',
    'from-yellow-500 to-orange-500',
    'from-blue-500 to-indigo-500',
    'from-rose-500 to-red-500'
];

const Services = () => {
    return (
        <section id="services" className="section relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px]" />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Neler <span className="gradient-text">Sunuyorum?</span>
                    </h2>
                    <p className="section-subtitle">
                        Küçük işletmenizi dijitale taşımak için ihtiyacınız olan her şey tek pakette.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group glass-card rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[index]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {IconComponent && <IconComponent size={26} className="text-white" />}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-400 mb-4">
                        Hangi hizmeti istediğinizden emin değil misiniz?
                    </p>
                    <a
                        href="https://wa.me/905306506990?text=Merhaba,%20web%20sitesi%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex"
                    >
                        <MessageCircle size={18} />
                        Ücretsiz Danışalım
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
