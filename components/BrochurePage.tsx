import React from 'react';
import { ArrowLeft, FileText, CheckCircle, Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { BROCHURE_PDF_LINK } from '../constants';

interface BrochurePageProps {
    onBack: () => void;
}

const BrochurePage: React.FC<BrochurePageProps> = ({ onBack }) => {
    return (
        <section className="py-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-10">
                    <button 
                        onClick={onBack}
                        className="flex items-center text-[#C5A059] font-bold hover:underline mb-6"
                    >
                        <ArrowLeft size={20} className="mr-2" /> 返回首頁
                    </button>
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 flex items-center mb-4">
                            <FileText className="mr-3 text-[#C5A059]" size={36} /> 課程章程與時間表
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            這份文件包含了所有課程的詳細介紹、教學進度表 (Syllabus) 以及上課時間安排。建議所有同學下載並詳細閱讀。
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={200}>
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 bg-[#1A1A1A] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                            <FileText size={80} className="text-white/20 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-2">LION MATH</h3>
                            <p className="text-[#C5A059] font-medium">課程章程 2025-26</p>
                            <div className="mt-8 text-xs text-gray-400">PDF Document</div>
                        </div>
                        
                        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">下載完整章程</h3>
                            <ul className="space-y-3 mb-8 text-gray-600">
                                <li className="flex items-center">
                                    <CheckCircle size={18} className="text-[#C5A059] mr-2" />
                                    <span>詳細課程大綱與教學目標</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={18} className="text-[#C5A059] mr-2" />
                                    <span>最新上課時間表 (Timetable)</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle size={18} className="text-[#C5A059] mr-2" />
                                    <span>學費說明</span>
                                </li>
                            </ul>
                            
                            <a 
                                href={BROCHURE_PDF_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#C5A059] hover:bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 w-full md:w-auto"
                            >
                                <Download className="mr-2" size={20} />
                                下載 / 查看 PDF
                            </a>
                            <p className="text-xs text-gray-400 mt-4 text-center md:text-left">
                                * 檔案格式為 PDF，建議使用平板或電腦閱讀
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default BrochurePage;