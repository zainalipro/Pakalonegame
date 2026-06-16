import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Users, Code, HelpCircle, CheckCircle2, Award, Zap, Heart } from 'lucide-react';

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us - Pakalone Pakistan: Trust, Security & Performance Center";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-[#0d3a8e] selection:text-white">
      {/* Navbar block */}
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
            <Award className="h-3.5 w-3.5 text-yellow-400" />
            <span>#1 Directory Pakistan</span>
          </span>
        </header>
      </div>

      <div className="flex-grow max-w-4xl w-full mx-auto px-4 py-8 space-y-8">
        {/* Breadcrumb Section */}
        <div className="flex items-center gap-1.5 text-2xs text-slate-400 font-bold uppercase tracking-wider">
          <Link to="/" className="hover:text-[#0d3a8e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600">About Us</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:p-12 space-y-4 flex-1 text-left">
            <span className="text-2xs font-extrabold text-[#0d3a8e] uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 font-mono">
              Welcome to Pakalone (پاک الون)
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 tracking-tight leading-none leading-relaxed">
              We Analyze, Test, & Catalog <br />
              <span className="text-[#0d3a8e]">Verified Android Earning Apps</span>
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Founded in 2026, Pakalone Games (پاک الون) has emerged as Pakistan's premier independent portal dedicated to scanning, reviewing, and verifying popular mobile casino slots, lucky spinners, and multiplayer card games. By providing mirror apk options alongside detailed reviews, we protect Pakistani mobile users from counterfeit packages and low trust links.
            </p>
          </div>
        </div>

        {/* 4-Step Security Audit Cycle Row */}
        <div className="space-y-4">
          <div className="text-left">
            <h3 className="font-display text-base font-black text-slate-900 uppercase tracking-tight">
              ⚡ Our Rigorous 4-Step Safety Verification Engine
            </h3>
            <p className="text-2xs text-slate-400 font-bold uppercase tracking-wider font-mono">How We Maintain Massive Domain Credibility</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border border-slate-200.5 p-5 space-y-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0d3a8e] flex items-center justify-center font-bold text-xs border border-blue-100">
                01
              </div>
              <h4 className="text-xs font-black text-slate-900 uppercase">Malware Signature Diagnostics</h4>
              <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                Prior to publishing any download mirror of high-tier slots (like MMY App, CX777, Jeeto786, ISB19), our technicians running secure sandboxed emulator servers decompile the APK packages, scrutinizing digital signatures and confirming zero trace of embedded malicious payloads.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-slate-200.5 p-5 space-y-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs border border-purple-100">
                02
              </div>
              <h4 className="text-xs font-black text-slate-900 uppercase">RNG and Multiplier Auditing</h4>
              <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                We check real-time and structural feedback from communities. Our audit algorithms verify that random number generators (RNG) embedded inside classic slot dials match fair statistical multipliers, validating genuine earning outcomes for mobile players.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-slate-200.5 p-5 space-y-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs border border-emerald-100">
                03
              </div>
              <h4 className="text-xs font-black text-slate-900 uppercase">Telco Payout Pipeline Check</h4>
              <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                We execute routine manual cashout checks, assessing delay parameters to EasyPaisa and JazzCash local wallets. Any app experiencing terminal blockages is immediately downrated in our public listings to protect Pakistani player capital.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl border border-slate-200.5 p-5 space-y-3 text-left">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs border border-amber-100">
                04
              </div>
              <h4 className="text-xs font-black text-slate-900 uppercase">Persistent Mirror Host Maintenance</h4>
              <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                Internet paths are highly volatile. Daily scripts verify that the storage paths (like `pakalone.online/downloads/*`) point exclusively to the most updated, official, and authenticated build iterations to prevent phishing traps.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values statement with Urdu reference */}
        <div className="bg-[#12161f] text-slate-350 rounded-3xl p-6 md:p-10 border border-slate-800 flex flex-col md:flex-row gap-6 md:items-center justify-between text-left">
          <div className="space-y-2 max-w-md">
            <span className="text-[9px] bg-[#1da1f2] text-white font-extrabold px-2 py-0.5 rounded-md uppercase font-mono">Our Promise</span>
            <h4 className="text-sm font-black text-white uppercase tracking-tight">ہماری بنیادی ترجیحات: صداقت اور امانت</h4>
            <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
              پاک الون (Pakalone) صرف ان ایپس کو اپنی فہرست کا حصہ بناتا ہے جن کو ہمارا آزمائشی نظام مکمل محفوظ تسلیم کرتا ہے۔ ہم پاکستان کے سب سے با اعتماد ڈیجیٹل ڈائریکٹری حب کے طور پر کام کرتے ہیں۔
            </p>
          </div>
          <div className="flex gap-4.5">
            <div className="text-center p-3 bg-slate-800/40 rounded-2xl border border-slate-700/30">
              <span className="block text-xl font-black text-yellow-400 font-mono">100%</span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">Vetted APKs</span>
            </div>
            <div className="text-center p-3 bg-slate-800/40 rounded-2xl border border-slate-700/30">
              <span className="block text-xl font-black text-emerald-400 font-mono">Rs 100</span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">Min Payout Entry</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl border border-slate-200.5 p-6 md:p-8 space-y-5 text-left">
          <h3 className="text-sm font-black text-slate-900 uppercase border-b border-slate-100 pb-3 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-4 text-xs font-semibold">
            {/* Q1 */}
            <div className="space-y-1">
              <h4 className="text-slate-900 font-black">Is Pakalone affiliated with Google Play Store?</h4>
              <p className="text-slate-550 leading-relaxed">
                No. Pakalone is an independent verification platform. Since many localized real-money slot machines in Pakistan (like MMY App, CX777) are outside Google Play's regional criteria, we supply verified direct storage mirror APK builds to provide safe, audited download options.
              </p>
            </div>
            {/* Q2 */}
            <div className="space-y-1">
              <h4 className="text-slate-900 font-black font-sans text-right">کیا پاک الون پر گیمز کھیلنے کے چارجز ہوتے ہیں؟</h4>
              <p className="text-slate-550 leading-relaxed text-right">
                جی نہیں، پاک الون اپنی پیش کردہ اے پی کے فائلوں کے لیے کوئی فیس وصول نہیں کرتا۔ تمام ایپس مفت ڈاؤن لوڈ کی جا سکتی ہیں۔ تاہم، گیم ڈاؤن لوڈ کرنے کے بعد، ان گیم ڈپازٹس اور پلے رومز کے قوانین براہ راست اس مستقل گیم ایپ کے تحت ہوتے ہیں۔
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
