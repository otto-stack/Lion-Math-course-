import React from 'react';
import { Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { IG_SHOWCASE_IMAGE } from '../assets';
import ImageWithFallback from './ImageWithFallback';

const IGShowcase: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 text-center">
                <ScrollReveal>
                    <div className="mb-10">
                        <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs md:text-sm">Follow Us</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">緊貼最新資訊</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                            追蹤我們的 Instagram，第一時間獲取最新考試 Tip 題、免費資源派發消息及課程獨家優惠！
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="relative max-w-2xl mx-auto mb-10 group">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-[#C5A059] to-[#D4AF37] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                            <ImageWithFallback 
                                src={IG_SHOWCASE_IMAGE}
                                alt="Lion Math Instagram" 
                                className="rounded-2xl shadow-2xl w-full border border-gray-100"
                            />
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <a 
                        href="https://www.instagram.com/dselion.math/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <Instagram className="mr-2" size={20} />
                        立即 Follow @dselion.math
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default IGShowcase;