import React, { useEffect, useState } from "react";

const SignInWithVercel = () => {
        return (
            <div className="bg-black text-white min-h-screen font-sans flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-black border border-gray-800 rounded-xl shadow-2xl overflow-hidden relative">
                    {/* Header */}
                    <div className="p-8 pb-4 text-center">
                        <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">▲</div>
                        <h1 className="text-2xl font-bold mb-2">Sign in to Vercel</h1>
                        <p className="text-gray-400 text-sm">Welcome back! Please enter your details.</p>
                    </div>

                    {/* Auth Options */}
                    <div className="p-8 space-y-4">
                        <button className="w-full bg-white text-black font-medium py-2.5 px-4 rounded-md flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L24 24H0L12 0Z"/></svg>
                            Continue with Vercel
                        </button>
                        
                        <div className="flex items-center gap-4 py-2">
                            <div className="h-px bg-gray-800 flex-1"></div>
                            <span className="text-xs text-gray-500 uppercase">Or</span>
                            <div className="h-px bg-gray-800 flex-1"></div>
                        </div>

                        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-400">Email Address</label>
                                <input type="email" className="w-full bg-black border border-gray-800 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-gray-600" placeholder="you@example.com" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <label className="text-xs font-medium text-gray-400">Password</label>
                                    <a href="#" className="text-xs text-blue-500 hover:text-blue-400">Forgot password?</a>
                                </div>
                                <input type="password" className="w-full bg-black border border-gray-800 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors" />
                            </div>
                            <button className="w-full bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                                Sign In
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-800 text-center text-sm text-gray-500 bg-gray-900/30">
                        Don't have an account? <a href="#" className="text-blue-500 hover:text-blue-400">Sign Up</a>
                    </div>
                </div>
            </div>
        );
    };

export default SignInWithVercel;
