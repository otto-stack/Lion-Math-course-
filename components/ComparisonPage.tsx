import React from 'react';
import { ArrowLeft, Check, X, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { ENROLL_LINK } from '../constants';

interface ComparisonPageProps {
    onBack: () => void;
}

const ComparisonPage: React.FC<ComparisonPageProps> = ({ onBack }) => {
    return (
        <section className="py-24 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="mb-12 relative flex flex-col md:block items-center md:text-center">
                        <button 
                            onClick={onBack}
                            className="self-start mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 flex items-center text-[#C5A059] font-bold hover:underline"
                        >
                            <ArrowLeft size={20} className="mr-2" /> 返回
                        </button>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 flex flex-col md:flex-row items-center justify-center w-full">
                            學習模式 <span className="text-white bg-[#D93025] px-4 py-1 mt-2 md:mt-0 md:ml-3 rounded shadow-md skew-x-[-10deg]">與眾不同</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
                        <div className="grid grid-cols-12 text-white text-center">
                            <div className="col-span-2 md:col-span-1 bg-white"></div>
                            <div className="col-span-5 md:col-span-5 bg-[#C5A059] py-6 flex flex-col justify-center items-center relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="text-lg md:text-2xl font-black tracking-wider">LION MATH</div>
                                    <div className="text-xs md:text-sm opacity-90 mt-1">獅子數學補習室</div>
                                </div>
                                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] md:text-xs px-3 py-1 rounded-bl-xl font-bold">奪星之選</div>
                            </div>
                            <div className="col-span-5 md:col-span-6 bg-gray-500 py-6 flex flex-col justify-center items-center">
                                <div className="text-lg md:text-2xl font-black tracking-wider text-gray-100">坊間一般</div>
                                <div className="text-xs md:text-sm opacity-80 mt-1 text-gray-200">數學補習班</div>
                            </div>
                        </div>

                        {[
                            {
                                title: "精準教學",
                                lion: ["釐清概念 + 原創技巧，以不變應萬變", "獨家編寫計數機 Program，速度快人一步", "試題庫包含 40 年 Past Paper 及名校試題"],
                                others: ["死記硬背「神技」，題目稍變即死", "使用坊間罐頭 Program，功能單一", "練習題目過淺或與 DSE 脫節"]
                            },
                            {
                                title: "針對訓練",
                                lion: ["100% 評卷員視角詳細改卷，指出失分位", "筆記收錄 \"Lion's Remarks\" 踢爆常犯錯誤", "定期高強度測驗與模擬試 (Mock)"],
                                others: ["僅提供分數，缺乏具體改進建議", "照書讀，未針對學生盲點", "缺乏實戰操練機會"]
                            },
                            {
                                title: "支援配套",
                                lion: ["Lion Sir 親自 WhatsApp 錄音/文字回覆", "彈性補堂安排 (Video / Zoom Live)", "課後無限支援，跟進進度"],
                                others: ["助教代覆，甚至「已讀不回」", "補堂限制多，缺乏彈性", "上完堂即與導師斷聯"]
                            }
                        ].map((section, idx) => (
                            <div key={idx} className="grid grid-cols-12 border-b border-gray-100 last:border-0 min-h-[180px]">
                                <div className="col-span-2 md:col-span-1 bg-gray-50 flex items-center justify-center p-2 border-r border-gray-200">
                                    <div className="writing-vertical-lr text-gray-400 font-black text-lg md:text-xl tracking-widest leading-loose">
                                        {section.title}
                                    </div>
                                </div>

                                <div className="col-span-5 md:col-span-5 p-4 md:p-8 bg-[#C5A059]/5 flex flex-col justify-center space-y-4 border-r border-dashed border-[#C5A059]/30">
                                    {section.lion.map((item, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className="bg-[#C5A059] rounded-full p-1 mr-3 mt-0.5 shrink-0 shadow-sm">
                                                <Check size={12} className="text-white" strokeWidth={4} />
                                            </div>
                                            <span className="text-gray-800 font-bold text-sm md:text-base leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-span-5 md:col-span-6 p-4 md:p-8 bg-gray-50 flex flex-col justify-center space-y-4">
                                    {section.others.map((item, i) => (
                                        <div key={i} className="flex items-start opacity-70">
                                            <div className="bg-red-500 rounded-full p-1 mr-3 mt-0.5 shrink-0 shadow-sm">
                                                <X size={12} className="text-white" strokeWidth={4} />
                                            </div>
                                            <span className="text-gray-500 font-medium text-sm md:text-base leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
                
                <div className="mt-12 text-center">
                    <ScrollReveal delay={400}>
                        <a 
                            href={ENROLL_LINK}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-[#C5A059] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            體驗與眾不同的教學，立即報讀
                            <ChevronRight className="ml-2" />
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ComparisonPage;