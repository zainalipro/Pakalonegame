import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Users, Code, HelpCircle, Award, Zap, Sun, Moon, Sparkles } from 'lucide-react';
import { applyTheme } from './theme';

export default function AboutUs() {
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
    document.title = "About Us - Pakalone Pakistan: Trust, Security & Performance Center";
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
        console.error("Theme configuration load error in AboutUs:", err);
      }
      const userPreference = localStorage.getItem('pakalone-theme');
      const themeToLoad = userPreference || defaultTheme;
      setActiveThemeId(themeToLoad);
      applyTheme(themeToLoad);
    };
    loadThemeConfig();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--theme-bg)] flex flex-col font-sans text-[var(--theme-text-main)] antialiased transition-colors duration-300 selection:bg-[#0d3a8e] selection:text-white">
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
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 bg-[#082a69] border border-blue-500/30 rounded-full px-3 py-1 text-[10px] font-bold text-yellow-300">
              <Award className="h-3.5 w-3.5 text-yellow-400" />
              <span>#1 Directory Pakistan</span>
            </span>
            <button
              onClick={toggleTheme}
              className="p-1.5 bg-[#082a69] border border-blue-500/30 hover:bg-[#0c3989] rounded-xl text-yellow-300 transition duration-150 flex items-center justify-center cursor-pointer flex-shrink-0"
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

      <div className="flex-grow max-w-4xl w-full mx-auto px-4 py-8 space-y-8">
        {/* Breadcrumb Section */}
        <div className="flex items-center gap-1.5 text-2xs text-[var(--theme-text-muted)] font-bold uppercase tracking-wider">
          <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--theme-text-main)]">About Us</span>
        </div>

        {/* Hero Section */}
        <div className="bg-[var(--theme-card)] rounded-3xl border border-[var(--theme-border)] shadow-xs overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 md:p-12 space-y-4 flex-1 text-left">
            <span className="text-2xs font-extrabold text-[#0d3a8e] uppercase tracking-wider bg-blue-900/10 px-3 py-1 rounded-full border border-[var(--theme-border)] font-mono">
              Welcome to Pakalone (پاک الون)
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-[var(--theme-text-main)] tracking-tight leading-relaxed">
              We Analyze, Test, & Catalog <br />
              <span className="text-amber-500">Verified Android Earning Apps</span>
            </h1>
            <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-semibold">
              Pakalone serves as a specialized utility indexer. We aggregate verified direct download links, checksum details, and secure checkouts for localized Android mobile slot, casino, and card apps including MMY, CX777, Jeeto786, ISB19, and 92BAR. We do not host speculative operations; we simply verify links to keep Pakistani users secure.
            </p>
          </div>
        </div>

        {/* Feature Cards Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-[var(--theme-card)] rounded-2xl border border-[var(--theme-border)] p-5 space-y-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-blue-900/10 text-amber-500 flex items-center justify-center font-bold text-xs border border-[var(--theme-border)]">
              <ShieldCheck className="h-4.5 w-4.5" />
            </div>
            <h3 className="text-sm font-black text-[var(--theme-text-main)]">100% Virus & Malware Scan</h3>
            <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-medium">
              We download each game package, test it through sandbox emulators on multiple versions of Android, and verify that there are no remote-access Trojans, adware bundles, or hidden tracking scripts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--theme-card)] rounded-2xl border border-[var(--theme-border)] p-5 space-y-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-purple-900/15 text-purple-400 flex items-center justify-center font-bold text-xs border border-[var(--theme-border)]">
              <Zap className="h-4.5 w-4.5" />
            </div>
            <h3 className="text-sm font-black text-[var(--theme-text-main)]">High-Speed Cloud Servers</h3>
            <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-medium">
              Say goodbye to frustratingly slow file links. We provision super-fast download nodes so you can access APK resources at maximum speeds, anytime across Pakistan.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[var(--theme-card)] rounded-2xl border border-[var(--theme-border)] p-5 space-y-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-emerald-900/15 text-emerald-400 flex items-center justify-center font-bold text-xs border border-[var(--theme-border)]">
              <Users className="h-4.5 w-4.5" />
            </div>
            <h3 className="text-sm font-black text-[var(--theme-text-main)]">Pure Community-Centric Reviews</h3>
            <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-medium">
              We log transaction times, payout feedback, and direct EasyPaisa or JazzCash checkout success rates shared by real Pakistani mobile players to give you honest, raw stats.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[var(--theme-card)] rounded-2xl border border-[var(--theme-border)] p-5 space-y-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-amber-900/20 text-yellow-500 flex items-center justify-center font-bold text-xs border border-[var(--theme-border)]">
              <Zap className="h-4.5 w-4.5 text-amber-500" />
            </div>
            <h3 className="text-sm font-black text-[var(--theme-text-main)]">Lightweight Custom Coding</h3>
            <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-medium">
              Our web portal is optimized for low-end Android mobile phones. It consumes bare-minimum data bandwidth, zero memory leaks, and loads instantly over slow Zong, Mobilink, or PTCL 3G/4G networks.
            </p>
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
        <div className="bg-[var(--theme-card)] rounded-3xl border border-[var(--theme-border)] p-6 md:p-8 space-y-5 text-left">
          <h3 className="text-sm font-black text-[var(--theme-text-main)] uppercase border-b border-[var(--theme-border)] pb-3 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-amber-500" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="space-y-4 text-xs font-semibold">
            {/* Q1 */}
            <div className="space-y-1">
              <h4 className="text-[var(--theme-text-main)] font-black">Is Pakalone affiliated with Google Play Store?</h4>
              <p className="text-[var(--theme-text-muted)] leading-relaxed">
                No. Pakalone is an independent verification platform. Since localized slots and casino applications in Pakistan are outside Google Play's regional policy boundaries, we provide vetted direct mirrors to keep downloading easy, secure, and authenticated.
              </p>
            </div>
            {/* Q2 */}
            <div className="space-y-1">
              <h4 className="text-[var(--theme-text-main)] font-black font-sans text-right">کیا پاک الون پر گیمز کھیلنے کے چارجز ہوتے ہیں؟</h4>
              <p className="text-[var(--theme-text-muted)] leading-relaxed text-right">
                جی نہیں، پاک الون اپنی پیش کردہ اے پی کے فائلوں کے لیے کوئی فیس وصول نہیں کرتا۔ تمام ایپس مفت ڈاؤن لوڈ کی جا سکتی ہیں۔ تاہم، گیم ڈاؤن لوڈ کرنے کے بعد، ان گیم ڈپازٹس اور پلے رومز کے قوانین براہ راست اس مستقل گیم ایپ کے تحت ہوتے ہیں۔
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
