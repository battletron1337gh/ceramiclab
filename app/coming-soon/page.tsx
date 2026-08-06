"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ComingSoonPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [from, setFrom] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFrom(params.get("from") || "/");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "ceramic2026") {
      document.cookie = "ceramiclab_preview=ceramiclab-preview-2026; path=/; max-age=604800; SameSite=Lax";
      router.push(from);
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <Image
            src="/logo-full.png"
            alt="CeramicLab"
            width={320}
            height={160}
            className="mx-auto h-auto w-full max-w-[260px]"
            priority
          />
          <p className="text-xl text-neutral-400">Something premium is coming.</p>
        </div>

        <p className="text-neutral-500">
          We are building a new destination for pro car care & detailing.
          Enter the preview password below to access the work-in-progress site.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Preview password"
            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500"
          />
          {error && (
            <p className="text-red-500 text-sm">Incorrect password. Try again.</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-colors"
          >
            Enter Preview
          </button>
        </form>

        <p className="text-xs text-neutral-700">
          © 2026 CeramicLab. All rights reserved.
        </p>
      </div>
    </main>
  );
}
