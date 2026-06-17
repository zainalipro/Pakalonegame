import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Clock, Check, Send, AlertCircle, Sun, Moon, Sparkles } from 'lucide-react';
import { applyTheme } from './theme';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [activeThemeId, setActiveThemeId] = useState('saas-light');

  const toggleTheme = () => {
    let nextTheme = 'saas-light';
    if (activeThemeId === 'saas-light') {
      nextTheme = 'saas-dark';
    } else if (activeThemeId === 'saas-dark') {
      nextTheme = 'gold';
    } else {
      nextTheme = 'saas-light';
    }
    setActiveThemeId(nextTheme);
    applyTheme(nextTheme);
  };

  useEffect(() => {
    document.title = "Contact Us - Pakalone Games: 24/7 Verified Support Helpdesk";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Load theme configuration
    const loadThemeConfig = async () => {
      let defaultTheme = 'saas-light';
      try {
        const res = await fetch('/api/public/settings');
        if (res.ok) {
          const data = await res.json();
          if (data.portal_theme_mode) {
            defaultTheme = data.portal_theme_mode;
          }
        }
      } catch (err) {
        console.error("Theme configuration load error in ContactUs:", err);
      }
      const userPreference = localStorage.getItem('pakalone-theme');
      const themeToLoad = userPreference || defaultTheme;
      setActiveThemeId(themeToLoad);
      applyTheme(themeToLoad);
    };
    loadThemeConfig();
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
    <div className="min-h-screen bg-[var(--theme-bg)] flex flex-col font-sans text-[var(--theme-text-main)] antialiased transition-colors duration-300 selection:bg-[#0d3a8e] selection:text-white">
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
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 bg-[#082a69] border border-blue-500/30 rounded-full px-3 py-1 text-[10px] font-bold text-yellow-300">
              <Clock className="h-3.5 w-3.5 text-emerald-400" />
              <span>AVG response: &lt;12 hrs</span>
            </span>
            <button
              onClick={toggleTheme}
              className="p-1.5 bg-[#082a69] border border-blue-500/30 hover:bg-[#0c3989] rounded-xl text-yellow-300 transition duration-150 flex items-center justify-center cursor-pointer"
              title="Toggle theme appearance"
            >
              {activeThemeId === 'saas-light' ? (
                <Moon className="h-4 w-4 text-yellow-300" />
              ) : activeThemeId === 'saas-dark' ? (
                <Sparkles className="h-4 w-4 text-sky-300" />
              ) : (
                <Sun className="h-4 w-4 text-yellow-400" />
              )}
            </button>
          </div>
        </header>
      </div>

      <div className="flex-grow max-w-5xl w-full mx-auto px-4 py-8">
        {/* Breadcrumb section */}
        <div className="mb-6 flex items-center gap-1.5 text-2xs text-[var(--theme-text-muted)] font-bold uppercase tracking-wider">
          <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--theme-text-main)]">Contact Us</span>
        </div>

        {/* Outer Split Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Interactive Support Ticket Form */}
          <div className="lg:col-span-7 bg-[var(--theme-card)] p-6 md:p-8 rounded-3xl border border-[var(--theme-border)] shadow-xs text-left space-y-6">
            <div>
              <h1 className="text-lg font-black text-amber-500 uppercase flex items-center gap-1.5">
                <Send className="h-4.5 w-4.5 text-amber-500" />
                <span>Submit Support Ticket</span>
              </h1>
              <p className="text-2xs text-[var(--theme-text-muted)] font-bold uppercase tracking-wider mt-1 font-mono">
                Verify mirror paths or request digital technical assistance
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-2xs text-[var(--theme-text-muted)] font-bold uppercase block">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zain Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[var(--theme-header-bg)] border border-[var(--theme-border)] rounded-xl p-3 text-xs font-bold text-[var(--theme-text-main)] placeholder-slate-400 focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-2xs text-[var(--theme-text-muted)] font-bold uppercase block">Your Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. user@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[var(--theme-header-bg)] border border-[var(--theme-border)] rounded-xl p-3 text-xs font-bold text-[var(--theme-text-main)] placeholder-slate-400 focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-2xs text-[var(--theme-text-muted)] font-bold uppercase block">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MMY App download error, payout issue, advertising"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[var(--theme-header-bg)] border border-[var(--theme-border)] rounded-xl p-3 text-xs font-bold text-[var(--theme-text-main)] placeholder-slate-400 focus:outline-none focus:border-amber-500 transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-2xs text-[var(--theme-text-muted)] font-bold uppercase block font-sans">Message Detail (Urdu or English)</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about the issue or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[var(--theme-header-bg)] border border-[var(--theme-border)] rounded-xl p-3 text-xs font-semibold text-[var(--theme-text-main)] placeholder-slate-400 focus:outline-none focus:border-amber-500 transition font-sans leading-relaxed"
                />
              </div>

              {status.type && (
                <div className={`p-4 rounded-xl border flex items-start gap-2.5 text-xs font-bold leading-relaxed ${
                  status.type === 'success' 
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                    : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                }`}>
                  {status.type === 'success' ? (
                    <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#0d3a8e] hover:bg-amber-500 disabled:bg-slate-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-xs hover:shadow-md transition cursor-pointer flex items-center justify-center gap-2"
                id="contact-submit-btn"
              >
                <span>{submitting ? "Transmitting Ticket..." : "Dispatch Support Message"}</span>
              </button>
            </form>
          </div>

          {/* Right Block: Official Physical Contact Detail Indices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Points Card */}
            <div className="bg-[var(--theme-card)] p-6 rounded-3xl border border-[var(--theme-border)] shadow-xs text-left space-y-4">
              <h3 className="text-xs font-black text-[var(--theme-text-main)] uppercase tracking-tight">
                🏛️ Company Credentials Center-Point
              </h3>

              <div className="space-y-4">
                {/* Email Address point */}
                <div className="flex gap-4.5 items-start">
                  <div className="p-2.5 bg-blue-900/10 text-amber-500 rounded-xl border border-[var(--theme-border)] flex-shrink-0">
                    <Mail className="h-5 w-5 text-amber-500" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[var(--theme-text-muted)] font-bold uppercase tracking-wider block font-mono">Email Communication</span>
                    <a href="mailto:support@pakalone.online" className="text-[var(--theme-text-main)] font-black text-xs hover:underline hover:text-amber-500 selection:bg-amber-300">
                      support@pakalone.online
                    </a>
                    <span className="text-[10px] text-[var(--theme-text-muted)] block font-medium">For complaints, removals, and advertising queries.</span>
                  </div>
                </div>

                {/* Headquarters Location Point */}
                <div className="flex gap-4.5 items-start">
                  <div className="p-2.5 bg-purple-900/10 text-purple-400 rounded-xl border border-[var(--theme-border)] flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[var(--theme-text-muted)] font-bold uppercase tracking-wider block font-mono">Headquarters Location</span>
                    <span className="text-[var(--theme-text-main)] font-black text-xs block">
                      Pakalone Tech Labs, Block-L, Sector Y DHA, Lahore, Punjab, Pakistan
                    </span>
                    <span className="text-[10px] text-[var(--theme-text-muted)] block font-medium">Coordinate index: 30.3753° N, 69.3451° E</span>
                  </div>
                </div>

                {/* Hours point */}
                <div className="flex gap-4.5 items-start">
                  <div className="p-2.5 bg-amber-900/10 text-amber-400 rounded-xl border border-[var(--theme-border)] flex-shrink-0">
                    <Clock className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[var(--theme-text-muted)] font-bold uppercase tracking-wider block font-mono">Operational Schedule</span>
                    <span className="text-[var(--theme-text-main)] font-black text-xs block">
                      Monday to Saturday (09:00 AM – 06:00 PM PKT)
                    </span>
                    <span className="text-[10px] text-[var(--theme-text-muted)] block font-medium">Offices closed during formal Eid and national holidays.</span>
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

      {/* Floating Theme Controller for Mobile View with large 44px+ touch-target element */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden flex-shrink-0">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/90 text-white rounded-full shadow-2xl border border-slate-700/50 backdrop-blur-md active:scale-95 transition-all duration-200 cursor-pointer h-11"
          id="mobile-floating-theme-toggle"
        >
          {activeThemeId === 'saas-light' ? (
            <>
              <Moon className="h-4.5 w-4.5 text-yellow-300" />
              <span className="text-[10px] font-black uppercase tracking-wider text-yellow-100">Dark Mode</span>
            </>
          ) : activeThemeId === 'saas-dark' ? (
            <>
              <Sparkles className="h-4.5 w-4.5 text-sky-300" />
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-100">Gold Theme</span>
            </>
          ) : (
            <>
              <Sun className="h-4.5 w-4.5 text-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-wider text-yellow-100">Light Mode</span>
            </>
          )}
        </button>
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
