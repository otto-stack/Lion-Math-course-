import React from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { STUDENT_STUDYING_IMAGE } from '../assets';
import ImageWithFallback from './ImageWithFallback';

const PainPoints: React.FC = () => {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <ScrollReveal>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group mx-auto max-w-lg md:max-w-none">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                                <ImageWithFallback 
                                    src={STUDENT_STUDYING_IMAGE}
                                    alt="Student Studying" 
                                    className="w-full h-64 sm:h-80 md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 left-6 z-20 text-white">
                                    <p className="font-bold text-xl md:text-2xl mb-1">專注．奮鬥</p>
                                    <p className="text-sm md:text-base opacity-90 font-light">我們的課堂實況</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                    
                    <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
                        <ScrollReveal delay={200}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                                你是否也曾在數學科<br className="hidden md:block"/>
                                <span className="text-red-600 inline-block border-b-4 border-red-600 pb-1 mt-1 md:mt-0">屢遇失敗？</span>
                            </h2>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={300}>
                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>
                                    「我中四時曾經因為不清楚技巧與概念，在題目上浪費大量時間，成績差到被老師當眾取笑...」
                                </p>
                                <p>
                                    你也許正如當年的我，渴望進步卻欠缺一盞明燈。
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={400}>
                            <div className="bg-[#F9F9F9] p-6 md:p-8 rounded-2xl border-t-4 md:border-t-0 md:border-l-4 border-[#C5A059] shadow-sm">
                                <h4 className="font-bold text-[#1A1A1A] text-xl mb-3 flex items-center justify-center md:justify-start">
                                    <Star size={24} className="text-[#C5A059] mr-2 fill-current" />
                                    Lion Sir 的承諾
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-center md:text-left">
                                    我曾付出 120% 的努力鑽研解題方法，現在，我將用這套原創技巧，帶領你像獅子般克服困難，由底子不好一步步走向草原之王的位置。
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;