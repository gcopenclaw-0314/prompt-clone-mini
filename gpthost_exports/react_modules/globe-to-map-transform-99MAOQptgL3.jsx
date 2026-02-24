import React, { useEffect, useRef, useState } from "react";

const GlobeToMapTransform = () => {
        const mountRef = useRef(null);
        const [isMap, setIsMap] = useState(false);

        useEffect(() => {
            // Very basic placeholder for the Three.js viz to simulate the look
            // In a real implementation, this would be complex WebGL
            // Here we just render a canvas with a grid to represent the wireframe
            
            const canvas = document.createElement('canvas');
            canvas.width = mountRef.current.clientWidth;
            canvas.height = 400;
            const ctx = canvas.getContext('2d');
            mountRef.current.innerHTML = '';
            mountRef.current.appendChild(canvas);

            const draw = () => {
                ctx.fillStyle = '#09090b';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.strokeStyle = '#3b82f6';
                ctx.lineWidth = 1;
                ctx.globalAlpha = 0.5;

                const cx = canvas.width / 2;
                const cy = canvas.height / 2;
                
                // Draw either a circle (globe) or a rect (map) based on state
                // We'll animate this crudely with CSS transition on the container class in real React,
                // but here just drawing static based on state for simplicity of the snippet.
                
                if (!isMap) {
                    ctx.beginPath();
                    ctx.arc(cx, cy, 150, 0, Math.PI * 2);
                    ctx.stroke();
                    
                    // Meridians
                    for(let i=0; i<8; i++) {
                        ctx.beginPath();
                        ctx.ellipse(cx, cy, 150 * Math.cos(i), 150, 0, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                    // Parallels
                    for(let i=1; i<5; i++) {
                        ctx.beginPath();
                        ctx.ellipse(cx, cy, 150, 150 * Math.cos(i), Math.PI/2, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                } else {
                    const w = 600;
                    const h = 300;
                    ctx.strokeRect(cx - w/2, cy - h/2, w, h);
                    
                    // Grid
                     for(let i=1; i<8; i++) {
                        ctx.beginPath();
                        ctx.moveTo(cx - w/2 + (w/8)*i, cy - h/2);
                        ctx.lineTo(cx - w/2 + (w/8)*i, cy + h/2);
                        ctx.stroke();
                     }
                     for(let i=1; i<5; i++) {
                        ctx.beginPath();
                        ctx.moveTo(cx - w/2, cy - h/2 + (h/5)*i);
                        ctx.lineTo(cx + w/2, cy - h/2 + (h/5)*i);
                        ctx.stroke();
                     }
                }
            };
            
            draw();
            
            // Re-draw on state change (simulated animation frame)
        }, [isMap]);

        return (
            <div className="bg-black min-h-screen text-white font-sans p-8 flex flex-col items-center">
                <div className="max-w-4xl w-full">
                    <header className="mb-12 text-center">
                        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Globe Projection Morph</h1>
                        <p className="text-gray-400">Interactive visualization transforming spherical coordinates to equirectangular projection.</p>
                    </header>

                    <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                         {/* Toolbar */}
                         <div className="absolute top-4 right-4 z-10 flex gap-2">
                             <button 
                                onClick={() => setIsMap(!isMap)}
                                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition-colors border border-zinc-700">
                                {isMap ? "View Globe" : "View Map"}
                             </button>
                             <button className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white">
                                 ↻
                             </button>
                         </div>

                         {/* Viz Container */}
                         <div ref={mountRef} className="w-full h-[400px] flex items-center justify-center cursor-move active:cursor-grabbing">
                             {/* Canvas injected here */}
                         </div>
                         
                         {/* Controls */}
                         <div className="p-6 bg-zinc-900 border-t border-zinc-800">
                             <div className="flex items-center gap-4">
                                 <span className="text-xs uppercase tracking-widest text-zinc-500">Morph</span>
                                 <input 
                                    type="range" 
                                    min="0" 
                                    max="1" 
                                    step="0.01" 
                                    value={isMap ? 1 : 0}
                                    onChange={(e) => setIsMap(e.target.value > 0.5)}
                                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500" 
                                 />
                                 <span className="text-xs font-mono text-zinc-500">{isMap ? "2D" : "3D"}</span>
                             </div>
                         </div>
                    </div>

                    <div className="mt-8 text-center text-xs text-zinc-600">
                        Drag to rotate • Scroll to zoom
                    </div>
                </div>
            </div>
        );
    };

export default GlobeToMapTransform;
