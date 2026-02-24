import React, { useEffect, useState } from "react";

const { MoveUpRight, Mail } = { MoveUpRight: () => <span>↗</span>, Mail: () => <span>✉</span> }; 

    const PaperfolioPortfolioTemplate = () => {
        return (
            <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white p-4 md:p-8">
                {/* Shell / Breadcrumbs */}
                <div className="mb-6 flex items-center text-sm text-gray-500 gap-2">
                    <span className="hover:text-black cursor-pointer">Templates</span>
                    <span>/</span>
                    <span className="hover:text-black cursor-pointer">Portfolio</span>
                    <span>/</span>
                    <span className="text-black font-medium">Paperfolio</span>
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-1">Paperfolio</h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                            <span>By @username</span>
                            <span>•</span>
                            <span>1.2k views</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                            Preview
                        </button>
                        <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                            Get Template (1 Credit)
                        </button>
                    </div>
                </div>

                {/* Preview Frame */}
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-50 p-4 md:p-12">
                    {/* Inner Content (The Template Itself) */}
                    <div className="bg-white rounded-[2rem] border-4 border-black p-6 md:p-12 max-w-5xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <nav className="flex justify-between items-center mb-16 md:mb-24">
                            <div className="w-10 h-10 bg-black rounded-full"></div>
                            <div className="flex gap-4 md:gap-8 font-medium">
                                <a href="#" className="hover:underline">Work</a>
                                <a href="#" className="hover:underline">About</a>
                                <a href="#" className="hover:underline">Contact</a>
                            </div>
                        </nav>

                        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                                Creative<br/>Director<br/>& Designer.
                            </h2>
                            <div className="text-xl md:text-2xl font-medium leading-tight max-w-sm">
                                Creating digital experiences for brands that want to stand out.
                                <div className="mt-8 flex gap-4">
                                    <button className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                        <MoveUpRight />
                                    </button>
                                    <button className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                        <Mail />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="aspect-[4/3] bg-gray-100 rounded-[2rem] border-2 border-black relative group overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5 font-bold text-xl">
                                    View Project
                                </div>
                            </div>
                            <div className="aspect-[4/3] bg-black rounded-[2rem] border-2 border-black relative group overflow-hidden cursor-pointer text-white p-8 flex items-end">
                                <span className="text-3xl font-bold">Lumina</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default PaperfolioPortfolioTemplate;
