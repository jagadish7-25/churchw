"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  created_at: string;
}

export default function PrayerRequestsPage() {
  const [requests, setRequests] = useState<PrayerRequest[]>([]);
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkUserAndFetch();
  }, []);

  const checkUserAndFetch = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push("/auth");
      return;
    }
    fetchRequests();
  };

  const fetchRequests = async () => {
    try {
      const { data, error } = await supabase
        .from("prayer_requests")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      setRequests(data || []);
    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase.from("prayer_requests").insert([
        {
          user_id: user.id,
          name,
          request,
          is_public: true, // Making it public by default for demo
        }
      ]);

      if (error) throw error;
      
      setName("");
      setRequest("");
      fetchRequests(); // Refresh the list
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit prayer request.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-[1] backdrop-blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, transparent 60%)" }}
      />
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto pt-24 px-4 pb-12">
        <div className="flex justify-between items-center mb-8 animate-blur-fade-up">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight">Prayer Requests</h1>
          <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-white transition-colors">
            Sign Out
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Submit Form */}
          <div className="md:col-span-1 animate-blur-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="liquid-glass rounded-2xl p-6">
              <h2 className="text-xl font-medium mb-4">Submit a Request</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Prayer Request</label>
                  <textarea
                    required
                    rows={4}
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-white/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-white text-black font-medium rounded-lg px-4 py-2.5 hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </div>
          </div>

          {/* List of Requests */}
          <div className="md:col-span-2 space-y-4 animate-blur-fade-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-xl font-medium mb-4">Community Prayers</h2>
            {loading ? (
              <p className="text-gray-400">Loading requests...</p>
            ) : requests.length === 0 ? (
              <p className="text-gray-400">No prayer requests yet. Be the first to share.</p>
            ) : (
              requests.map((pr) => (
                <div key={pr.id} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-lg">{pr.name}</span>
                    <span className="text-xs text-gray-400">
                      {new Date(pr.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {pr.request}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
