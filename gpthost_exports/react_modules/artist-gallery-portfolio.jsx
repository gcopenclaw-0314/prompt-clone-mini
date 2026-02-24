import React, { useEffect, useState } from "react";

const ArtistGalleryPortfolio = () => {
        return (
            <div className="bg-[#f5f1ea] min-h-screen text-[#2d2a26] font-sans">
                {/* Header */}
                <header className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-start z-50 pointer-events-none">
                    <div className="pointer-events-auto">
                        <h1 className="text-2xl font-bold tracking-tight">Émile</h1>
                        <p className="text-sm text-[#7a746d]">Visual Artist</p>
                    </div>
                    <button className="pointer-events-auto w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-[#2d2a26] hover:text-white transition-colors cursor-pointer">
                        <div className="space-y-1">
                            <div className="w-5 h-0.5 bg-current"></div>
                            <div className="w-5 h-0.5 bg-current"></div>
                        </div>
                    </button>
                </header>

                {/* Gallery */}
                <main className="px-6 pt-32 pb-12 md:px-12 md:pt-40">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
                        {[
                            { title: "Study in Blue", size: "Oil on Canvas, 2023", img: "https://images.unsplash.com/photo-1579783902614-a3fb392796a5?q=80&w=1000&auto=format&fit=crop" },
                            { title: "Fragments", size: "Mixed Media, 2022", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop" },
                            { title: "Silence", size: "Photography, 2024", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000&auto=format&fit=crop" },
                            { title: "Structure V", size: "Sculpture, 2023", img: "https://images.unsplash.com/photo-1555580136-1e0c8b6b19a1?q=80&w=1000&auto=format&fit=crop" },
                            { title: "Echo", size: "Digital, 2024", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" },
                            { title: "Void", size: "Installtion, 2021", img: "https://images.unsplash.com/photo-1515405295579-ba7b454989ab?q=80&w=1000&auto=format&fit=crop" }
                        ].map((art, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="w-full aspect-square md:aspect-[4/5] bg-white rounded-[2rem] overflow-hidden shadow-sm mb-4">
                                    <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="px-2">
                                    <h2 className="text-xl font-medium">{art.title}</h2>
                                    <p className="text-sm text-[#7a746d]">{art.size}</p>
                                </div>
                            </div>
                        ))}
                        
                        {/* Placeholder/Loading skeleton */}
                        <div className="w-full aspect-square md:aspect-[4/5] bg-[#ebe7e0] rounded-[2rem] animate-pulse flex items-center justify-center text-[#d1cdc6]">
                            Loading...
                        </div>
                    </div>
                </main>
            </div>
        );
    };

export default ArtistGalleryPortfolio;
