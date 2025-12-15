import React from 'react';
import { BookOpen, Calculator, MessageCircle, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { WHATSAPP_LINK } from '../constants';
import { FeatureItem } from '../types';
import { FEATURE_NOTES_IMAGE } from '../assets';
import ImageWithFallback from './ImageWithFallback';

const Features: React.FC = () => {
    const featureList: FeatureItem[] = [
        {
            icon: <BookOpen size={32} />,
            title: "獨家原創筆記",
            desc: "化繁為簡，筆記內包含大量「Lion's Remarks」，精準指出學生常犯錯誤與陷阱。",
            image: FEATURE_NOTES_IMAGE,
            hasImage: true
        },
        {
            icon: <Calculator size={32} />,
            title: "概念 x 技巧",
            desc: (
                <>
                    拒絕死記硬背。擁有
                    <strong className="text-[#C5A059] block mt-1">過十種獨家原創 Program，坊間獨有，每年更新確保緊貼考評</strong>
                    ，助你以概念應萬變。
                </>
            ),
            hasImage: false
        },
        {
            icon: <MessageCircle size={32} />,
            title: "無限支援",
            desc: "設有 WhatsApp 問書服務，由 Lion Sir 親自錄音或文字回覆，絕非助教代勞，保證問到識為止。",
            link: true,
            hasImage: false
        }
    ];

    return (
        <section className="py-20 md:py-24 bg-gray-50" id="features">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs md:text-sm">Why Choose Us</span>
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-2">拒絕神技 概念為本 原創技巧</h2>
                        <div className="w-16 md:w-20 h-1.5 bg-[#C5A059] mx-auto mt-4 rounded-full"></div>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {featureList.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 150} className="h-full">
                            <div 
                                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group h-full"
                            >
                                <div className="w-16 h-16 bg-[#F9F9F9] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C5A059] transition-colors duration-300 transform group-hover:rotate-6">
                                    <div className="text-[#C5A059] group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <div className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {item.desc}
                                </div>
                                
                                {item.hasImage && item.image && (
                                    <div className="mt-auto w-full h-56 md:h-64 rounded-xl overflow-hidden bg-gray-200 shadow-inner">
                                        <ImageWithFallback 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                {item.link && (
                                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center text-[#C5A059] font-bold hover:underline bg-[#C5A059]/10 px-4 py-2 rounded-lg transition-colors hover:bg-[#C5A059] hover:text-white">
                                        試下問書 <ChevronRight size={16} className="ml-1" />
                                    </a>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;