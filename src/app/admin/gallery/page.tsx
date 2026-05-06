"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";

export default function AdminGalleryPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState<"image" | "video">("image");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setMessage("");

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // 1. Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from("gallery")
        .getPublicUrl(filePath);

      // 3. Insert into gallery table
      const { error: dbError } = await supabase.from("gallery").insert([
        {
          title,
          media_url: publicUrl,
          type,
        },
      ]);

      if (dbError) throw dbError;

      setMessage("File uploaded successfully!");
      setTitle("");
      setFile(null);
    } catch (error: any) {
      console.error(error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />

      <div className="relative z-10 max-w-lg mx-auto pt-24 px-4 pb-12">
        <div className="liquid-glass rounded-2xl p-8 animate-blur-fade-up">
          <h1 className="text-3xl font-light mb-6 text-center">Admin Gallery Upload</h1>
          
          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-white/30"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Media Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as "image" | "video")}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-white/30 text-white [&>option]:bg-gray-900"
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">File</label>
              <input
                type="file"
                required
                accept={type === "image" ? "image/*" : "video/*"}
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200 transition-colors"
              />
            </div>

            {message && (
              <p className="text-sm text-center text-gray-300 bg-white/5 p-2 rounded">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !file}
              className="w-full bg-white text-black font-medium rounded-lg px-4 py-3 hover:bg-gray-200 transition-colors disabled:opacity-50 mt-4"
            >
              {loading ? "Uploading..." : "Upload Media"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
