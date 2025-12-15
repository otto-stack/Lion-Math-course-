import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, WEBSITE_LINK } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-10 md:gap-12 border-b border-gray-800 pb-12 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="font-black text-2xl text-[#C5A059] tracking-tight">LION MATH</div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                            系出名門，專科專教。我們致力於用最有效的原創方法，協助每一位學生在數學科取得卓越成績，像獅子一樣成為考場上的王者。
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.instagram.com/dselion.math/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#C5A059] hover:text-white text-gray-400 p-2.5 rounded-full transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-lg mb-4 md:mb-6 text-white">快速連結</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors py-1 block md:inline">首頁</a></li>
                            <li><a href="#about" className="hover:text-[#C5A059] transition-colors py-1 block md:inline">導師簡介</a></li>
                            <li><a href="#courses" className="hover:text-[#C5A059] transition-colors py-1 block md:inline">課程列表</a></li>
                            <li><a href="#results" className="hover:text-[#C5A059] transition-colors py-1 block md:inline">戰績見證</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 md:mb-6 text-white">聯絡我們</h4>
                        <ul className="space-y-4 text-sm text-gray-400 flex flex-col items-center md:items-start">
                            <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                                <MapPin size={18} className="text-[#C5A059] mt-0.5" />
                                <span>
                                    <strong className="text-white block mb-1">上課地點</strong>
                                    旺角 Mong Kok<br/>
                                    元朗 Yuen Long
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#C5A059]" />
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">
                                    {WHATSAPP_NUMBER}
                                </a>
                            </li>
                            <li className="pt-2 w-full md:w-auto">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-colors w-full md:w-auto shadow-lg hover:shadow-green-900/20">
                                    <MessageCircle size={18} className="mr-2" />
                                    WhatsApp 查詢
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>&copy; {new Date().getFullYear()} Louis Education - Lion Math. All rights reserved.</p>
                    <div>
                        <a href={WEBSITE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors flex items-center">
                            總校網站 <ExternalLink size={12} className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;