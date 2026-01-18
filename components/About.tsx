import React from 'react';
import { Star, CheckCircle, GraduationCap, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { LION_SIR_IMAGE, CERTIFICATE_IMAGE, PLACEHOLDERS } from '../assets';
import ImageWithFallback from './ImageWithFallback';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-[#1A1A1A] text-white relative">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-[#1A1A1A]"></div>
            <div className="absolute top-20 right-0 w-72 h-72 bg-[#C5A059] rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>

            <div className="container mx-auto px-6 relative z-10 pt-10">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#C5A059] font-bold tracking-widest uppercase text-sm">About Lion Sir</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4">系出名門 <span className="text-[#C5A059]">實戰王者</span></h2>
                        <p className="text-gray-400">從中四的挫折到 DSE 的頂峰，這不只是一份履歷，更是一段奮鬥的見證。</p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <ScrollReveal delay={200}>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-white p-1 border-2 border-[#C5A059] overflow-hidden mr-4 shadow-lg shrink-0">
                                    <ImageWithFallback 
                                        src={LION_SIR_IMAGE} 
                                        fallback={PLACEHOLDERS.LION_SIR}
                                        alt="Lion Sir Avatar" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Lion Sir</h3>
                                    <p className="text-[#C5A059] text-sm">HKDSE 數學科導師</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                                <p>
                                    <strong>「為何叫獅子數學？」</strong>
                                </p>
                                <p>
                                    獅子在成為百獸之王前，幼獅階段經歷了無數痛苦與挫折。正如我當年在數學科屢遇失敗，但我深信：<strong>「VENI, VIDI, VICI」</strong>（我來，我見，我征服）。
                                </p>
                                <p>
                                    曾經被嘲笑的經歷，令我決心付出超過 120% 的努力鑽研。我希望我的學生也能如獅子般，即便底子不好，只要願意克服困難，都能一步步登上頂峰，成為真正的王者。
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className="space-y-8">
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <GraduationCap className="text-[#C5A059] mr-3" />
                                    頂尖學歷背景
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start bg-[#C5A059]/10 p-3 rounded-xl border border-[#C5A059]/30">
                                        <Star size={20} className="text-[#C5A059] mr-3 mt-1 shrink-0 fill-[#C5A059]" />
                                        <span className="text-white font-bold text-lg">
                                            連續 4 年親身應戰 DSE <span className="text-[#C5A059]">全奪 5**</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle size={18} className="text-[#C5A059] mr-3 mt-1 shrink-0" />
                                        <span className="text-gray-300">香港大學精算及金融雙主修 (Double-Major)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle size={18} className="text-[#C5A059] mr-3 mt-1 shrink-0" />
                                        <span className="text-gray-300">獲頒 Dean's Honors List (院長榮譽錄)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle size={18} className="text-[#C5A059] mr-3 mt-1 shrink-0" />
                                        <span className="text-gray-300">正考取北美精算師協會 (ASA) 精算師執業資格</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle size={18} className="text-[#C5A059] mr-3 mt-1 shrink-0" />
                                        <span className="text-gray-300">曾任教大學統計學及工程數學課程的學生</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-2 bg-[#C5A059]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                                    <ImageWithFallback 
                                        src={CERTIFICATE_IMAGE}
                                        fallback={PLACEHOLDERS.CERTIFICATE}
                                        alt="DSE 5** Certificate" 
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                        <div className="flex items-center text-white">
                                            <Award className="text-[#C5A059] mr-2" />
                                            <span className="font-bold">DSE 數學科 5** 實力鐵證</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;