import React, { useEffect, useState } from "react";

const CaseStudyPortfolio = () => {
        return (
            <div className="bg-[#f2f0f5] min-h-screen text-[#333] font-sans">
                {/* Header */}
                <header className="flex justify-between items-center px-6 py-6 md:px-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Sarah" />
                        </div>
                        <div className="flex flex-col text-xs leading-tight">
                            <span className="font-bold">Sarah Mitchell</span>
                            <span className="text-gray-500">San Francisco, CA</span>
                        </div>
                    </div>
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        <a href="#work" className="hover:text-black text-gray-600">Work</a>
                        <a href="#contact" className="hover:text-black text-gray-600">Contact</a>
                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors">
                            ☾
                        </button>
                    </nav>
                </header>

                {/* Hero */}
                <section className="px-6 md:px-12 py-24 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
                        Designing digital products that feel human.
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                        Senior Product Designer at TechCorp. Specializing in design systems, accessibility, and user research.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">Email me</button>
                        <button className="px-6 py-3 bg-white text-black border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">Let's connect</button>
                    </div>
                </section>

                {/* Services */}
                <section className="px-6 md:px-12 py-12">
                    <p className="text-sm uppercase tracking-widest text-gray-500 mb-8">How can I help you?</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="mb-4 text-2xl group-hover:scale-110 transition-transform origin-left">✎</div>
                            <h3 className="text-xl font-bold mb-2">Design Request</h3>
                            <p className="text-gray-500">Let's talk about your project needs and timeline.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                             <div className="mb-4 text-2xl group-hover:scale-110 transition-transform origin-left">💬</div>
                            <h3 className="text-xl font-bold mb-2">Consulting</h3>
                            <p className="text-gray-500">Sharing 10+ years of expertise in product strategy.</p>
                        </div>
                    </div>
                </section>

                {/* Work */}
                <section id="work" className="px-6 md:px-12 py-24">
                    <div className="flex flex-col gap-16">
                        {[
                            { id: "01", client: "Stripe", date: "2023", title: "Global Payments Redesign", color: "bg-indigo-100" },
                            { id: "02", client: "Linear", date: "2022", title: "Mobile App Interaction", color: "bg-stone-200" },
                            { id: "03", client: "Airbnb", date: "2021", title: "Host Experience", color: "bg-rose-100" },
                            { id: "04", client: "Vercel", date: "2021", title: "Developer Analytics", color: "bg-blue-50" }
                        ].map((work) => (
                            <div key={work.id} className="group cursor-pointer">
                                <div className={`w-full aspect-[16/9] md:aspect-[21/9] ${work.color} rounded-3xl mb-6 relative overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-10 font-bold tracking-tighter">
                                        PREVIEW IMAGE
                                    </div>
                                    <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-mono uppercase">
                                        {work.client} — {work.date}
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 md:gap-8">
                                    <span className="font-mono text-gray-400 mt-2">{work.id}/06</span>
                                    <h3 className="text-3xl md:text-5xl font-bold group-hover:underline decoration-2 underline-offset-4">{work.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white px-6 md:px-12 py-24 mt-24">
                     <div className="max-w-4xl mx-auto text-center">
                         <h2 className="text-4xl font-bold mb-6">Thanks for stopping by.</h2>
                         <p className="text-gray-500 mb-8">Feel free to reach out if you want to collaborate or just say hi.</p>
                         <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors mb-24">
                             Download Resume
                         </button>
                         <div className="flex justify-center gap-8 text-sm font-medium text-gray-600">
                             <a href="#" className="hover:text-black">LinkedIn</a>
                             <a href="#" className="hover:text-black">Twitter</a>
                             <a href="#" className="hover:text-black">Instagram</a>
                         </div>
                     </div>
                </footer>
            </div>
        );
    };

export default CaseStudyPortfolio;
