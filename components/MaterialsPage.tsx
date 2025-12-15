import React from 'react';
import { ArrowLeft, ChevronRight, Book, FileText, Zap, Clock, PenTool, Video, MessageCircle, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { ENROLL_LINK } from '../constants';

interface MaterialsPageProps {
    onBack: () => void;
}

const MaterialsPage: React.FC<MaterialsPageProps> = ({ onBack }) => {
    const materials = [
        {
            title: "精美主筆記 & 附加筆記",
            desc: "設計簡潔不沉悶，中英對照。針對考試編寫，涵蓋課題概念及題型。特定課題附送附加筆記深化概念。",
            icon: <Book size={32} className="text-white" />,
            color: "bg-[#C5A059]"
        },
        {
            title: "40年歷屆試題合集",
            desc: "精選近 40 年最值得做的試題 (CE + AL 非 Out-syl)，按課題分類，熟習考評局出題思路。",
            icon: <FileText size={32} className="text-white" />,
            color: "bg-blue-600"
        },
        {
            title: "地獄/精選操練題目",
            desc: "包含海量長題目與 MC，按難度劃分。題目 100% 貼準考評 (DSE/名校改編)，適合實戰。",
            icon: <Zap size={32} className="text-white" />,
            color: "bg-red-600"
        },
        {
            title: "課前測驗 (Quiz)",
            desc: "無預警不定時測驗，數分鐘時間鞏固並重溫上一堂所學概念，鼓勵每週溫習。",
            icon: <Clock size={32} className="text-white" />,
            color: "bg-purple-600"
        },
        {
            title: "課堂功課",
            desc: "每期設有特定功課，完成後通過 WhatsApp 發送給導師批改，鞏固所學。",
            icon: <PenTool size={32} className="text-white" />,
            color: "bg-green-600"
        },
        {
            title: "額外課堂影片",
            desc: "部分課題設有額外影片，示範完整題目做法或涵蓋更深題目，掃描筆記 QR Code 即可收看。",
            icon: <Video size={32} className="text-white" />,
            color: "bg-orange-500"
        },
        {
            title: "無限問書服務",
            desc: "直接 WhatsApp Lion Sir，親自錄音/文字回覆。不經助教，保證問到識為止。",
            icon: <MessageCircle size={32} className="text-white" />,
            color: "bg-teal-500"
        },
        {
            title: "Last-Minute Summary",
            desc: "每期附送一頁重點懶人包，囊括該期課題重點、陷阱位，臨考前數分鐘必備。",
            icon: <Layers size={32} className="text-white" />,
            color: "bg-indigo-600"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <button 
                        onClick={onBack}
                        className="flex items-center text-[#C5A059] font-bold hover:underline mb-6"
                    >
                        <ArrowLeft size={20} className="mr-2" /> 返回首頁
                    </button>
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="text-[#C5A059] font-bold tracking-widest uppercase text-sm">Exclusive Materials</span>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">全方位課程配套</h2>
                            <div className="w-20 h-1.5 bg-[#C5A059] mx-auto mt-6 rounded-full"></div>
                            <p className="text-gray-500 mt-6 text-lg">
                                我們提供的不只是補習，而是一套完整的奪星系統，助你全方位提升。
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {materials.map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                            <div 
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden h-full"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 ${item.color} opacity-5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}></div>
                                
                                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                    {item.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <ScrollReveal delay={800}>
                        <a 
                            href={ENROLL_LINK}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-[#1A1A1A] hover:bg-[#333] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            立即報名，獲取所有配套
                            <ChevronRight className="ml-2" />
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default MaterialsPage;