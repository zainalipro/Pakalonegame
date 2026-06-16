import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Mail, MapPin, Clock, Check, Send, AlertCircle, Sparkles } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  useEffect(() => {
    document.title = "Contact Us - Pakalone Games: 24/7 Verified Support Helpdesk";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please provide both your email address and message contents.' });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: null, message: '' });

      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: formData.subject || "Direct inquiry from Legal Contact page"
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Submission failure");

      setStatus({ 
        type: 'success', 
        message: data.message || "Your inquiry ticket has been registered successfully! Our digital support team will examine your query and reply within 12-24 hours." 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error("Support transmission issue:", err);
      setStatus({ 
        type: 'error', 
        message: err.message || "Failed to submit message. Please try again later or email us directly at support@pakalone.online" 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-[#0d3a8e] selection:text-white">
      {/* Top navbar bar */}
      <div className="bg-gradient-to-r from-[#0d3a8e] to-[#0c4cbd] text-white shadow-md">
        <header className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 bg-zinc-950/20 px-3 py-1.5 rounded-2xl border border-white/10 shadow-sm backdrop-blur-3xs">
            <Link to="/" className="p-1.5 hover:bg-white/15 rounded-xl transition-colors flex items-center justify-center">
              <ArrowLeft className="h-4.5 w-4.5 text-white" />
            </Link>
            <span className="text-white/30 text-xs">|</span>
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="PakAlone Logo" className="h-[34px] w-auto object-contain max-w-[130px]" />
            </Link>
          </div>
          <span className="inline-flex items-center gap-1 bg-[#082a69] border border-blue-500/30 rounded-full px-3 py-1 text-[10px] font-bold text-yellow-300">
            <Clock className="h-3.5 w-3.5 text-emerald-400" />
            <span>AVG response: &lt;12 hrs</span>
          </span>
        </header>
      </div>

      <div className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
        {/* Breadcrumb section */}
        <div className="mb-6 flex items-center gap-1.5 text-2xs text-slate-400 font-bold uppercase tracking-wider">
          <Link to="/" className="hover:text-[#0d3a8e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600">Contact Us</span>
        </div>

        {/* Outer Split Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Interactive Support Ticket Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xs text-left space-y-6">
            <div>
              <h2 className="text-lg font-black text-[#0d3a8e] uppercase flex items-center gap-1.5">
                <Send className="h-4.5 w-4.5 text-blue-600" />
                <span>Submit Support Ticket</span>
              </h2>
              <p className="text-2xs text-slate-400 font-bold uppercase tracking-wider mt-1 font-mono">
                Verify mirror paths or request digital technical assistance
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-2xs text-slate-450 font-bold uppercase block">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zain Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0d3a8e] transition"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-2xs text-slate-450 font-bold uppercase block">Your Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. user@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0d3a8e] transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-2xs text-slate-450 font-bold uppercase block">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MMY App download error, payout issue, advertising"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0d3a8e] transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-2xs text-slate-450 font-bold uppercase block font-sans">Message Detail (Urdu or English)</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about the issue or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0d3a8e] transition font-sans leading-relaxed"
                />
              </div>

              {status.type && (
                <div className={`p-4 rounded-xl border flex items-start gap-2.5 text-xs font-bold leading-relaxed ${
                  status.type === 'success' 
                    ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
                    : 'bg-rose-50 border-rose-100 text-rose-800'
                }`}>
                  {status.type === 'success' ? (
                    <Check className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#0d3a8e] hover:bg-[#0b317a] disabled:bg-slate-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xs hover:shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                id="contact-submit-btn"
              >
                <span>{submitting ? "Transmitting Ticket..." : "Dispatch Support Message"}</span>
              </button>
            </form>
          </div>

          {/* Right Block: Official Physical Contact Detail Indices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Points Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200.5 shadow-xs text-left space-y-4">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-tight">
                🏛️ Company Credentials Center-Point
              </h3>

              <div className="space-y-4">
                {/* Email Address point */}
                <div className="flex gap-4.5 items-start">
                  <div className="p-2.5 bg-blue-50 text-[#0d3a8e] rounded-xl border border-blue-100 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">Email Communication</span>
                    <a href="mailto:support@pakalone.online" className="text-slate-800 font-black text-xs hover:underline hover:text-[#0d3a8e] selection:bg-amber-300">
                      support@pakalone.online
                    </a>
                    <span className="text-[10px] text-slate-400 block font-medium">For complaints, removals, and advertising queries.</span>
                  </div>
                </div>

                {/* Headquarters Location Point */}
                <div className="flex gap-4.5 items-start">
                  <div className="p-2.5 bg-purple-50 text-purple-705 rounded-xl border border-purple-100 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">Headquarters Location</span>
                    <span className="text-slate-800 font-black text-xs block">
                      Pakalone Tech Labs, Block-L, Sector Y DHA, Lahore, Punjab, Pakistan
                    </span>
                    <span className="text-[10px] text-slate-400 block font-medium">Coordinate index: 30.3753° N, 69.3451° E</span>
                  </div>
                </div>

                {/* Hours point */}
                <div className="flex gap-4.5 items-start">
                  <div className="p-2.5 bg-amber-50 text-amber-705 rounded-xl border border-amber-100 flex-shrink-0">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">Operational Schedule</span>
                    <span className="text-slate-800 font-black text-xs block">
                      Monday to Saturday (09:00 AM – 06:00 PM PKT)
                    </span>
                    <span className="text-[10px] text-slate-400 block font-medium">Offices closed during formal Eid and national holidays.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Urdu support notes Card */}
            <div className="bg-[#10131a] text-slate-350 p-6 rounded-3xl border border-slate-800 text-right space-y-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-emerald-500 text-white font-black px-2 py-0.5 rounded-md uppercase font-mono shadow-3xs">
                <span>رہنمائی و شکایت مرکز</span>
              </span>
              <h4 className="text-xs font-black text-white uppercase tracking-tight">رابطہ برائے معلومات اور شکایات</h4>
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
                پاک الون ٹیم متبادل ڈاؤن لوڈ لنکس کو اپ ڈیٹ رکھنے کے لیے کوشاں رہتی ہے۔ اگر کوئی گیم ڈاؤن لوڈ کرنے یا اس کی انسٹالیشن میں دشواری ہو رہی ہو، تو آپ اپنا نام، ای میل اور مسئلہ درج کر کے ہمیں سپورٹ ٹکٹ روانہ کریں۔ ہماری ٹیم جلد از جلد آپ کی مدد کرے گی۔
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Footer minimal signature */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-2xs font-bold border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 space-y-2">
          <p>© 2026 Pakalone Games. Securely Vetted for Android Devices Pakistan.</p>
          <div className="flex items-center justify-center gap-2">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">Back to Homepage</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
