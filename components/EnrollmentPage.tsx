import React from 'react';
import { ArrowLeft, FileSignature, ChevronRight, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { GOOGLE_FORM_LINK, WHATSAPP_LINK } from '../constants';

interface EnrollmentPageProps {
    onBack: () => void;
}

const EnrollmentPage: React.FC<EnrollmentPageProps> = ({ onBack }) => {
    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="mb-10">
                    <button 
                        onClick={onBack}
                        className="flex items-center text-[#C5A059] font-bold hover:underline mb-6"
                    >
                        <ArrowLeft size={20} className="mr-2" /> 返回首頁
                    </button>
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
                            報名補習流程
                        </h2>
                        <p className="text-gray-500 text-center text-lg">
                            簡單兩步，開啟您的奪星之旅
                        </p>
                    </ScrollReveal>
                </div>

                <div className="space-y-6">
                    <ScrollReveal delay={100}>
                        <a 
                            href={GOOGLE_FORM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group relative overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#C5A059] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            <div className="flex items-center">
                                <div className="bg-[#C5A059]/10 p-4 rounded-full mr-6 group-hover:bg-[#C5A059] transition-colors duration-300">
                                    <FileSignature size={32} className="text-[#C5A059] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#C5A059] transition-colors">1. 填寫報名表格</h3>
                                    <p className="text-gray-500 text-sm">點擊此處填寫 Google Form，我們將盡快確認您的報名。</p>
                                </div>
                                <ChevronRight className="ml-auto text-gray-300 group-hover:text-[#C5A059] transition-colors duration-300 transform group-hover:translate-x-1" size={24} />
                            </div>
                        </a>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <a 
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group relative overflow-hidden"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            <div className="flex items-center">
                                <div className="bg-green-100 p-4 rounded-full mr-6 group-hover:bg-green-500 transition-colors duration-300">
                                    <MessageCircle size={32} className="text-green-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">2. WhatsApp 查詢課程詳情</h3>
                                    <p className="text-gray-500 text-sm">如有任何疑問，歡迎直接 WhatsApp 聯絡 Lion Sir。</p>
                                </div>
                                <ChevronRight className="ml-auto text-gray-300 group-hover:text-green-500 transition-colors duration-300 transform group-hover:translate-x-1" size={24} />
                            </div>
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default EnrollmentPage;