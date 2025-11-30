"use client";

import { FormEvent, useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus("success");
    setEmail("");
    
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col items-center space-y-4">
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "loading" || status === "success"}
          className="w-full px-6 py-4 bg-[#111] border border-white/10 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-white/20 transition-all text-center"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full px-6 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {status === "loading" ? "Loading..." : status === "success" ? "Thanks!" : "Notify Me"}
        </button>
      </form>
      <p className="text-xs text-gray-400 text-center uppercase tracking-wider">
        Be the first to know when we launch
      </p>
    </div>
  );
}
