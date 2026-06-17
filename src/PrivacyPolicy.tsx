import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Eye, Check, Mail, Sun, Moon, Sparkles } from 'lucide-react';
import { applyTheme } from './theme';

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState<'english' | 'urdu'>('english');
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
    document.title = "Privacy Policy - Pakalone Games Pakistan - 100% Reliable & Secure Portal";
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
        console.error("Theme configuration load error in PrivacyPolicy:", err);
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
      {/* 🇵🇰 Top Navbar Bar */}
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
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Secure SSL Protocol</span>
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

      <div className="flex-grow max-w-4xl w-full mx-auto px-4 py-8">
        {/* Breadcrumb Section */}
        <div className="mb-6 flex items-center gap-1.5 text-2xs text-[var(--theme-text-muted)] font-bold uppercase tracking-wider">
          <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--theme-text-main)]">Privacy Policy</span>
        </div>

        {/* Translation Tabs */}
        <div className="mb-8 flex bg-[var(--theme-card)] p-1 rounded-xl border border-[var(--theme-border)] shadow-3xs max-w-sm">
          <button
            onClick={() => setActiveTab('english')}
            className={`flex-1 py-2 text-center text-xs font-black rounded-lg transition-all ${
              activeTab === 'english' ? 'bg-[#0d3a8e] text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            English Policy
          </button>
          <button
            onClick={() => setActiveTab('urdu')}
            className={`flex-1 py-2 text-center text-xs font-black rounded-lg transition-all font-sans ${
              activeTab === 'urdu' ? 'bg-[#0d3a8e] text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            پرائیویسی پالیسی (Urdu)
          </button>
        </div>

        {/* Dynamic legal content box */}
        <div className="bg-[var(--theme-card)] rounded-3xl border border-[var(--theme-border)] shadow-xs overflow-hidden">
          {/* Top visual banner */}
          <div className="bg-[var(--theme-header-bg)] border-b border-[var(--theme-border)] p-6 md:p-8 flex items-start gap-4">
            <div className="p-3.5 bg-blue-900/10 text-amber-500 rounded-2xl flex-shrink-0 border border-[var(--theme-border)]">
              <Lock className="h-6 w-6" id="privacy-lock-icon" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-[var(--theme-text-main)] tracking-tight">
                {activeTab === 'english' ? 'Privacy Policy & Data Shield' : 'پرائیویسی پالیسی اور ڈیٹا تحفظ'}
              </h1>
              <p className="text-xs text-[var(--theme-text-muted)] mt-1 font-semibold leading-relaxed">
                {activeTab === 'english' 
                  ? 'Last updated: June 15, 2026. This comprehensive privacy blueprint outlines how Pakalone collects, manages, and safeguards integrity networks in Pakistan.'
                  : 'آخری بار ترمیم: 15 جون 2026۔ یہ دستاویز واضح کرتی ہے کہ پاک الون آپ کے ڈیٹا کی رازداری اور تحفظ کو کیسے یقینی بناتا ہے۔'}
              </p>
            </div>
          </div>

          {activeTab === 'english' ? (
            <div className="p-6 md:p-8 space-y-8 text-[var(--theme-text-muted)] leading-relaxed text-xs font-semibold">
              
              {/* Introduction card */}
              <div className="bg-emerald-50/50 border border-emerald-100 p-4.5 rounded-2xl space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] bg-emerald-500 text-white font-black px-2 py-0.5 rounded-md uppercase font-mono shadow-3xs">
                  <ShieldCheck className="h-3 w-3" />
                  <span>100% Secure Vetting</span>
                </span>
                <p className="text-[11px] font-bold text-slate-700 leading-relaxed">
                  Pakalone Games Portal operates as a localized digital resource directory. We double check mirror links for verified Android APK applications (including MMY App, CX777, Jeeto786, ISB15, All Slots 777, and more). We prioritize user safety and never participate in fraudulent schemes or unsolicited profile harvesting.
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  1. Information We Automatically Inspect
                </h3>
                <p>
                  To deliver localized and high-speed delivery nodes of digital entertainment archives, our services analyze non-identifiable structural metadata:
                </p>
                <ul className="space-y-2 pl-4 list-disc marker:text-[#0d3a8e]">
                  <li>
                    <strong className="text-slate-800">Internet Protocol & Log Geotargeting:</strong> We check regional indicators to correctly render EasyPaisa and JazzCash support options, localizing language files for Pakistani citizens.
                  </li>
                  <li>
                    <strong className="text-slate-800">Device Hardware Telemetry:</strong> Anonymized Android OS variant versions (e.g. Android 12, 13, 14), screen density metrics, and package installer configuration systems are catalogued solely to ensure APK package compatibility.
                  </li>
                  <li>
                    <strong className="text-slate-800">Cookie and Pixel Headers:</strong> Static cookies are deployed to remember user theme settings (SaaS Light, SaaS Dark, Gold Metallic) and high priority download category selections.
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  2. Third-Party Entertainment Mirrors (MMY APP, CX777, All Slots 777, etc.)
                </h3>
                <p>
                  Pakalone acts as a secure, verified repository directory platform:
                </p>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 font-mono text-[11px] text-slate-600">
                  <p className="font-bold text-slate-800">📌 Structural Architecture Disclaimer:</p>
                  <p>
                    When downloading third-party mirror applications, the developer of that specific game maintains their own telemetry nodes. Pakalone does NOT retain, access, or log your payment wallet keys, pin passwords, and gaming OTP validation codes. All payout routines take place securely inside the selected application itself on direct telco gateways.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  3. Information Sharing and Safety Audits
                </h3>
                <p>
                  Consistent with absolute user trust, Pakalone maintains strict confidentiality constraints:
                </p>
                <ul className="space-y-2 pl-4 list-disc marker:text-[#0d3a8e]">
                  <li>We <strong className="text-slate-900">NEVER</strong> rent, monetize, or sell subscriber email addresses or message logs to digital brokers.</li>
                  <li>All support tickets filed through our SSL support panel are encrypted on server databases.</li>
                  <li>We utilize Cloudflare Security Layers to shield user queries from potential DDoS anomalies.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  4. Children's Regulatory Compliance (COPPA & 18+ Directive)
                </h3>
                <p>
                  The digital software directory focuses entirely on adult entertainment cards, multiplayer slots, and cashout systems. We strictly limit use to individuals <strong className="text-slate-900">18 years or older</strong>. If a parent detects that a minor under the age of 18 has registered an email or filed a ticket, contact our compliance mailbox instantly for comprehensive record scrub routines.
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-sm font-black text-slate-900 uppercase flex items-center gap-1.5">
                  <Eye className="h-4.5 w-4.5 text-blue-600" />
                  <span>Contact Our Safety Officer</span>
                </h3>
                <p>
                  For any personal data audit requests, compliance questions, or complaints regarding download paths, feel free to dispatch a secure message to:
                </p>
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-250 p-4 rounded-2xl max-w-sm">
                  <div className="p-2 bg-blue-100 text-[#0d3a8e] rounded-xl">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-2xs text-slate-400 block uppercase font-mono">Official Legal Mail</span>
                    <a href="mailto:support@pakalone.online" className="text-[#0d3a8e] font-black text-xs hover:underline">
                      support@pakalone.online
                    </a>
                  </div>
                </div>
              </section>

            </div>
          ) : (
            <div className="p-6 md:p-8 space-y-8 text-[var(--theme-text-muted)] leading-relaxed text-right font-sans text-xs">
              
              {/* Introduction card */}
              <div className="bg-emerald-50/50 border border-emerald-100 p-4.5 rounded-2xl space-y-2 text-right">
                <span className="inline-flex items-center gap-1.5 text-[10px] bg-emerald-500 text-white font-black px-2 py-0.5 rounded-md uppercase font-mono shadow-3xs">
                  <span>100% محفوظ ویب سائٹ</span>
                </span>
                <p className="text-[12px] font-bold text-slate-705 leading-relaxed">
                  پاک الون گیمز پورٹل (Pakalone) پاکستان میں ایک آزاد معلوماتی اور محفوظ اے پی کے ڈائریکٹری کے طور پر کام کرتا ہے۔ یہاں ہم مشہور گیمز کے مستند لنکس کا جائزہ پیش کرتے ہیں اور ایزی پیسہ اور جاز کیش والیٹس کے ساتھ گیمنگ ٹرانزیکشنز کے محفوظ طریقے بتاتے ہیں۔
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۱۔ ہم کونسی معلومات جمع کرتے ہیں؟
                </h3>
                <p>
                  ہماری ویب سائٹ کی کارکردگی کو بہتر بنانے اور آپ کو متبادل لنکس کی تیز ترین رسائی فراہم کرنے کے لیے ہم عام معلومات جیسے:
                </p>
                <ul className="space-y-2 pr-4 list-disc marker:text-[#0d3a8e]">
                  <li>
                    <strong>انٹرنیٹ پروٹوکول (IP Address):</strong> یہ ایپ کی ڈاؤن لوڈ لوکیشن کو خود کار طریقے سے پاکستان کے صارفین کے لیے موزوں بناتا ہے۔
                  </li>
                  <li>
                    <strong>ڈیوائس موافقت:</strong> آپ کے موبائل فون کا اینڈرائیڈ ورژن (جیسے اینڈرائیڈ 12، 13 یا 14) تاکہ یہ یقینی بنایا جا سکے کہ اے پی کے فائل آپ کے فون پر بغیر کسی ہچکچاہٹ کے کام کرے گی۔
                  </li>
                  <li>
                    <strong>کوکیز (Cookies):</strong> یہ آپ کے پسندیدہ تھیم (جیسے گولڈ یا ڈارک ایڈیشن) کو یاد رکھنے میں مدد دیتی ہیں۔
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۲۔ فریقِ ثالث کی ایپس (MMY App, CX777 اور دیگر) کے متعلق اہم وضاحت
                </h3>
                <p>
                  پاک الون صرف ایک ریویو اور ٹیسٹنگ ڈائریکٹری ہے:
                </p>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-right text-[12px] space-y-1">
                  <p className="font-bold text-slate-900">⚠️ ٹرانزیکشنل سیکیورٹی وارننگ:</p>
                  <p>
                    جب آپ کوئی بھی گیم ڈاؤن لوڈ کرتے ہیں، تو سائن اپ کا ڈیٹا اور ادائیگیوں کا عمل متعلقہ گیم ایپ کے اندر ہی سر انجام پاتا ہے۔ پاک الون کسی بھی صارف کا پاس ورڈ، اکاؤنٹ نمبر یا ایزی پیسہ پن کوڈ کبھی بھی اپنے پاس سٹور یا محفوظ نہیں کرتا۔ یہ مکمل طور پر محفوظ ہے۔
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۳۔ معلومات کا شیئر نہ کیا جانا (Privacy Guarantee)
                </h3>
                <p>
                  پاک الون پاکستانی صارفین کے غیر معمولی اعتماد کی قدر کرتا ہے:
                </p>
                <p>
                  ہم آپ کا ای میل ایڈریس، نام یا کانٹیکٹ میسیجز کسی بھی تیسری کمپنی کو فروخت یا شیئر نہیں کرتے۔ تمام انکوائری ٹکٹس صرف سپورٹ کے حل کے لیے استعمال کی جاتی ہیں۔
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۴۔ عمر کی پابندی (18+ Limit)
                </h3>
                <p>
                  اس سائٹ پر درج بہت سی گیمز میں مالی جوکھم اور کمانے والی فعال گیمز شامل ہیں۔ اسی لیے پاک الون کو صرف وہی صارفین استعمال کر سکتے ہیں جن کی عمر ۱۸ سال یا اس سے زیادہ ہو۔ اگر کوئی نابالغ بچہ غلطی سے ہمیں ٹکٹ بھیجتا ہے، تو مطلع کرنے پر ہم ڈیٹا فوری حذف کر دیتے ہیں۔
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-3 pt-4 border-t border-slate-100 text-right">
                <h3 className="text-sm font-black text-slate-950 uppercase pb-1">
                  ۵۔ ہمارے قانونی نمائندے سے رابطہ کریں
                </h3>
                <p>
                  اگر آپ کا ڈیٹا کی حفاظت یا اے پی کے ڈاؤن لوڈز کے حوالے سے کوئی بھی سوال ہے، تو آپ بلا جھجھک ہمیں آفیشل میل کر سکتے ہیں:
                </p>
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-250 p-4 rounded-2xl max-w-sm ml-auto">
                  <div className="p-2 bg-blue-100 text-[#0d3a8e] rounded-xl">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left select-all">
                    <span className="text-2xs text-slate-400 block uppercase font-mono">آفیشل سپورٹ ای میل</span>
                    <a href="mailto:support@pakalone.online" className="text-[#0d3a8e] font-black text-xs hover:underline">
                      support@pakalone.online
                    </a>
                  </div>
                </div>
              </section>

            </div>
          )}
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
