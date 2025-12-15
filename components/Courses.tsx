import React from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { ENROLL_LINK } from '../constants';
import { Course } from '../types';

const Courses: React.FC = () => {
    const courses: Course[] = [
        {
            title: "S4-S5 王者常規系列",
            subtitle: "Regular Series",
            desc: "打穩地基，從零開始教學，新手視角拆解概念。適合補底及清概念的同學。",
            tags: ["中四", "中五", "補底"],
            price: "$950"
        },
        {
            title: "S6 Masterclass 精讀課程",
            subtitle: "LQ & MC",
            desc: "針對 LQ 卷一得分位及 MC 卷二速解技巧。教授超過 100+ 種題型。",
            tags: ["中六", "技巧", "Program"],
            featured: true,
            price: "$950"
        },
        {
            title: "S6 Ultimate Class 煉獄操卷",
            subtitle: "Drilling Series",
            desc: "地獄式高強度操練，目標直指 5**。包含 Mock Exam 及詳細改卷。",
            tags: ["中六", "奪星", "操練"],
            price: "$950"
        }
    ];

    return (
        <section className="py-20 md:py-24 bg-white" id="courses">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <span className="text-[#C5A059] font-bold tracking-widest uppercase text-xs md:text-sm">Curriculum</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">完整課程體系</h2>
                        <p className="text-gray-500 mt-4 text-sm md:text-base px-4">針對不同目標與程度，量身打造的奪星之路</p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-lg mx-auto md:max-w-none">
                    {courses.map((course, index) => (
                        <ScrollReveal key={index} delay={index * 150} className="h-full">
                            <div 
                                className={`relative rounded-3xl p-6 md:p-8 border flex flex-col transition-all duration-300 h-full ${course.featured ? 'border-[#C5A059] bg-white shadow-xl md:scale-105 z-10 ring-4 ring-[#C5A059]/10' : 'border-gray-100 bg-gray-50 hover:shadow-lg'}`}
                            >
                                {course.featured && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C5A059] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">
                                        POPULAR
                                    </div>
                                )}
                                <div className="text-[#C5A059] font-bold text-xs md:text-sm tracking-wide mb-2 uppercase">{course.subtitle}</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{course.desc}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {course.tags.map(tag => (
                                        <span key={tag} className="bg-gray-200/70 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="pt-6 border-t border-gray-200/60 mt-auto">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <span className="text-gray-500 text-xs md:text-sm">每期 4 堂</span>
                                        <span className="text-2xl md:text-3xl font-black text-gray-900">{course.price}</span>
                                    </div>
                                    <div className="text-right text-xs text-gray-400 mb-4 transform -mt-1">
                                        * 詳細價錢以IG post公布為準
                                    </div>
                                    <a href={ENROLL_LINK} target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-3.5 rounded-xl font-bold transition-transform active:scale-95 shadow-md ${course.featured ? 'bg-[#C5A059] text-white hover:bg-[#D4AF37]' : 'bg-gray-900 text-white hover:bg-gray-700'}`}>
                                        立即報讀
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <ScrollReveal delay={500}>
                         <a href={ENROLL_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#C5A059] font-bold hover:underline text-sm md:text-base">
                            查看詳細課程時間表 <ChevronRight size={18} className="ml-1" />
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Courses;