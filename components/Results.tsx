import React from 'react';
import ScrollReveal from './ScrollReveal';
import { RESULT_IMAGES } from '../assets';
import ImageWithFallback from './ImageWithFallback';

const Results: React.FC = () => {
    return (
        <section className="py-20 md:py-24 bg-[#1A1A1A] text-white relative overflow-hidden" id="results">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                    <div className="w-full md:w-1/2 space-y-8 md:space-y-10">
                        <ScrollReveal>
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">實戰見證 <br className="md:hidden" /><span className="text-[#C5A059]">奪星首選</span></h2>
                                <p className="text-gray-400 text-sm md:text-base">數據不會說謊，我們的學生成績就是最好的證明。</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {[
                                { val: "TOP 15", desc: "Mock Exam 600+考生中排名" },
                                { val: "45/45", desc: "MC 卷超高分戰績" },
                                { val: "90%+", desc: "整體學生升Grade率" },
                                { val: "UP 3+", desc: "重讀生半年升3個Grade" }
                            ].map((stat, i) => (
                                <ScrollReveal key={i} delay={i * 100}>
                                    <div className="bg-white/5 p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#C5A059]/50 transition-colors">
                                        <div className="text-2xl md:text-3xl font-black text-[#C5A059] mb-1">{stat.val}</div>
                                        <div className="text-xs md:text-sm text-gray-300 leading-snug">{stat.desc}</div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal delay={400}>
                            <div className="space-y-4">
                                {[
                                    "Lion Sir 教嘅 Program 真係快過全香港 99.9% 中學生！",
                                    "比學校老師教得好太多，唔識問到識，好快覆。"
                                ].map((quote, i) => (
                                    <div key={i} className="bg-white/10 p-4 rounded-xl italic text-gray-300 text-sm md:text-base border-l-2 border-[#C5A059]">
                                        "{quote}"
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="w-full md:w-1/2 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
                            {RESULT_IMAGES.map((img, i) => (
                                <ScrollReveal key={i} delay={i * 150} className={`w-full ${i % 2 === 1 ? 'md:translate-y-6' : ''}`}>
                                    <div className="bg-white p-2 rounded-xl transform transition-all duration-300 hover:scale-105 shadow-xl">
                                        <ImageWithFallback 
                                            src={img} 
                                            alt={`Student Review ${i+1}`} 
                                            className="w-full h-48 sm:h-64 md:h-80 object-cover object-top rounded-lg"
                                        />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;