import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { ENROLL_LINK } from '../constants';
import { LION_SIR_IMAGE, PLACEHOLDERS } from '../assets';
import ImageWithFallback from './ImageWithFallback';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-[#1A1A1A]" id="home">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[#1A1A1A]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A059' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#1A1A1A] z-0"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center">
                    <div className="text-white space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
                        <ScrollReveal delay={100}>
                            <div className="inline-block bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] px-4 py-1.5 rounded text-xs md:text-sm font-bold tracking-widest uppercase mb-2">
                                HKDSE 數學科導師 LION SIR
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={200}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
                                <span className="text-[#C5A059]">系出名門</span> <br className="hidden md:block" />
                                <span className="text-white">專科專教</span>
                            </h1>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={300}>
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light italic">
                                "VENI, VIDI, VICI"<br/>
                                <span className="text-sm not-italic text-gray-400 mt-2 block font-normal tracking-wide">我來，我見，我征服</span>
                            </p>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={400}>
                            <div className="space-y-4 py-6 border-t border-b border-white/10 md:border-y-0 md:border-l-4 md:border-[#C5A059] md:pl-6 max-w-sm mx-auto md:mx-0">
                                <p className="flex items-center justify-center md:justify-start text-gray-200 text-sm md:text-base">
                                    <CheckCircle size={16} className="text-[#C5A059] mr-3 shrink-0" />
                                    <span>業內首位「00後」數學導師</span>
                                </p>
                                
                                <div className="flex items-center justify-center md:justify-start bg-[#C5A059]/10 p-2.5 rounded-lg -mx-2 md:mx-0 md:-ml-2 md:pl-3 border border-[#C5A059]/30 shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                                    <Star size={20} className="text-[#C5A059] mr-3 shrink-0 fill-[#C5A059]" />
                                    <span className="text-white font-bold text-base md:text-lg tracking-wide">
                                        連續 4 年親身應戰 DSE <span className="text-[#C5A059] text-xl ml-1">全奪 5**</span>
                                    </span>
                                </div>

                                <p className="flex items-center justify-center md:justify-start text-gray-200 text-sm md:text-base">
                                    <CheckCircle size={16} className="text-[#C5A059] mr-3 shrink-0" />
                                    <span>香港大學精算及金融雙主修 (Dean's Honors)</span>
                                </p>
                                <p className="flex items-center justify-center md:justify-start text-gray-200 text-sm md:text-base">
                                    <CheckCircle size={16} className="text-[#C5A059] mr-3 shrink-0" />
                                    <span>創下 MC 卷 45/45 滿分記錄</span>
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={500}>
                            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full max-w-sm mx-auto md:mx-0">
                                <a href={ENROLL_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#C5A059] hover:bg-white hover:text-[#1A1A1A] text-white text-center px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-[#C5A059]/20 active:scale-95">
                                    立即報讀
                                </a>
                                <button onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 border border-white/30 backdrop-blur-sm hover:bg-white hover:text-black text-white text-center px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 active:scale-95">
                                    查看課程資訊
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="relative flex justify-center md:justify-end order-1 md:order-2 w-full max-w-sm md:max-w-md mx-auto">
                        <ScrollReveal delay={600} className="w-full">
                            <div className="relative w-4/5 md:w-full aspect-square mx-auto">
                                <div className="absolute -inset-4 bg-[#C5A059]/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1A1A1A] md:transform md:rotate-3 hover:rotate-0 transition-transform duration-500 bg-white">
                                     <ImageWithFallback 
                                        src={LION_SIR_IMAGE}
                                        fallback={PLACEHOLDERS.LION_SIR}
                                        alt="Lion Sir" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;