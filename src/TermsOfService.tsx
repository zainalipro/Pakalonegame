import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Scale, AlertTriangle, Check, BookOpen, Sun, Moon, Sparkles } from 'lucide-react';
import { applyTheme } from './theme';

export default function TermsOfService() {
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
    document.title = "Terms of Service - Pakalone Pakistan - Reliable Earning Companion";
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
        console.error("Theme configuration load error in TermsOfService:", err);
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
      {/* Navbar segment */}
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
              <Scale className="h-3.5 w-3.5 text-emerald-400" />
              <span>Legitimacy Index Block</span>
            </span>
            <button
               onClick={toggleTheme}
               className="p-1.5 bg-[#082a69] border border-blue-500/30 hover:bg-[#0c3989] rounded-xl text-yellow-350 transition duration-150 flex items-center justify-center cursor-pointer flex-shrink-0"
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
          <span className="text-[var(--theme-text-main)]">Terms of Service</span>
        </div>

        {/* Translation Tabs Selector */}
        <div className="mb-8 flex bg-[var(--theme-card)] p-1 rounded-xl border border-[var(--theme-border)] shadow-3xs max-w-sm">
          <button
            onClick={() => setActiveTab('english')}
            className={`flex-1 py-2 text-center text-xs font-black rounded-lg transition-all ${
              activeTab === 'english' ? 'bg-[#0d3a8e] text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            English Terms
          </button>
          <button
            onClick={() => setActiveTab('urdu')}
            className={`flex-1 py-2 text-center text-xs font-black rounded-lg transition-all font-sans ${
              activeTab === 'urdu' ? 'bg-[#0d3a8e] text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            قوانین و ضوابط (Urdu)
          </button>
        </div>

        {/* Legal body content card */}
        <div className="bg-[var(--theme-card)] rounded-3xl border border-[var(--theme-border)] shadow-xs overflow-hidden">
          {/* Header layout layout */}
          <div className="bg-[var(--theme-header-bg)] border-b border-[var(--theme-border)] p-6 md:p-8 flex items-start gap-4">
            <div className="p-3.5 bg-amber-900/10 text-amber-500 rounded-2xl flex-shrink-0 border border-[var(--theme-border)]">
              <BookOpen className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-[var(--theme-text-main)] tracking-tight">
                {activeTab === 'english' ? 'User Agreement & Terms of Use' : 'صارف کا معاہدہ اور قوانینِ استعمال'}
              </h1>
              <p className="text-xs text-[var(--theme-text-muted)] mt-1 font-semibold leading-relaxed">
                {activeTab === 'english' 
                  ? 'Last update: June 15, 2026. Prior to download of any APK files listed on Pakalone Games, please ingest these Terms thoroughly.'
                  : 'آخری بار ترمیم: 15 جون 2026۔ پاک الون سے کسی بھی ایپ کو حاصل کرنے سے پہلے اس صارف معاہدے کو احتیاط سے پڑھیں۔'}
              </p>
            </div>
          </div>

          {activeTab === 'english' ? (
            <div className="p-6 md:p-8 space-y-8 text-[var(--theme-text-muted)] leading-relaxed text-xs font-semibold">
              
              <div className="bg-rose-50 border border-rose-100 p-4.5 rounded-2xl space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] text-rose-800 font-extrabold font-sans uppercase tracking-wider">
                  <AlertTriangle className="h-4 w-4 text-rose-600 animate-pulse" />
                  <span>Important Financial Risk Warning</span>
                </div>
                <p className="text-[11px] font-bold text-rose-950 leading-relaxed">
                  The mobile entertainment and slot arcade games hosted by third party systems involve absolute exposure to fast multipliers and financial outcomes. Pakalone accepts no responsibility. Real money gaming consists of critical speculative risks. Underage individuals (under 18) are completely banned.
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By navigating Pakalone.online, accessing, and using download indexes, you explicitly validate your complete consent and binding acknowledgement of these Terms & Service limits. If you choose to disagree with any clause described herein, you are instructed to instantly terminate file access and leave this website.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  2. Nature of Digital Directory Service
                </h3>
                <p>
                  Pakalone acts as a secure catalogue mirror and testing service center. We perform deep signatures reviews, malware inspections, and check consistency of payout routers connection logs. 
                </p>
                <p className="pl-4 border-l-2 border-slate-200 text-slate-500 bg-slate-50 p-3 rounded-xl">
                  We are not game developers, software hosters, operators of money rooms, promoters, or bankers. The absolute technical ownership of individual game mechanics resides completely with the respective third-party provider.
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  3. User Eligibility & Geographic Boundaries
                </h3>
                <p>
                  Our services are customized and designed exclusively for the localized populace of Pakistan. 
                </p>
                <p>
                  You represent and warrant that your age matches or exceeds 18 years, you are fully competent to assent, and that downloading mobile slots does not run contrary to specific juridical laws in your district within Pakistan.
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  4. Third-Party Links & EasyPaisa/JazzCash Transactions
                </h3>
                <p>
                  The directory outlines specific payout guidelines referencing EasyPaisa and JazzCash mobile wallets. 
                </p>
                <ul className="space-y-2 pl-4 list-disc marker:text-[#0d3a8e]">
                  <li>Intellectual property names "EasyPaisa" and "JazzCash" correspond to Microfinance banking trademarks, cited strictly for verification references.</li>
                  <li>Any transactional delay, processing bottleneck, check cancellation, or balance issues taking place within the third party slot APK apps is outside of Pakalone’s access. You must address the in-app support or respective wallet representatives directly.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  5. Indemnification and Limitation of Liability
                </h3>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY THE GOVERNING LAWS OF THE ISLAMIC REPUBLIC OF PAKISTAN, PAKALONE, ITS OPERATORS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, OR SPECULATIVE DAMAGE (INCLUDING WALLET CAPITAL DEPRECIATION OR SOFTWARE SYSTEM GLITCHES) RESULTING FROM SOFTWARE DOWNLOAD FROM OUR STORAGE MIRRORS. YOU ASSUME 100% PERSONAL SOLVENCY EXPOSURE.
                </p>
              </section>

            </div>
          ) : (
            <div className="p-6 md:p-8 space-y-8 text-[var(--theme-text-muted)] leading-relaxed text-right font-sans text-xs">
              
              <div className="bg-rose-50 border border-rose-100 p-4.5 rounded-2xl space-y-2 text-right text-xs">
                <div className="flex items-center gap-1.5 text-[10px] text-rose-800 font-extrabold uppercase mr-auto justify-end">
                  <AlertTriangle className="h-4 w-4 text-rose-600 animate-pulse" />
                  <span>مالی جوکھم کی شرائط و ضوابط</span>
                </div>
                <p className="text-[12px] font-bold text-rose-950 leading-relaxed">
                  کمائی کرنے اور کھیلوں میں نقد رقم کا لین دین کرنے والی ایپس میں مالی جوکھم موجود ہوتا ہے۔ پاکستان میں تاش گیمز اور سلاٹس سلاٹس کلاسک گیمز کھیلنے سے قبل یہ بات یقینی بنائیں کہ آپ اپنے تمام تر اقدامات کے خود ذمہ دار ہیں۔ پاک الون کسی قسم کے نقصان کا ذمہ دار نہیں ہوگا۔ ۱۸ سال سے کم عمر افراد کا داخلہ سختی سے ممنوع ہے۔
                </p>
              </div>

              {/* Section 1 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۱۔ شرائط کی منظوری
                </h3>
                <p>
                  جب آپ Pakalone.online کو وزٹ کرتے ہیں یا دیئے گئے ڈاؤن لوڈ کے مستند لنکس سے فائلز حاصل کرتے ہیں، تو آپ حتمی طور پر اس صارف معاہدے کی تمام تر شرائط کو باقاعدہ قبول کرتے ہیں۔ اگر آپ کو کسی بھی شق پر اختلاف ہے، تو آپ کو فوری طور پر سائٹ چھوڑنے کی ہدایت کی جاتی ہے۔
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۲۔ ویب سائٹ کی تکنیکی حیثیت
                </h3>
                <p>
                  پاک الون ایک معلوماتی پورٹل اور ٹیسٹنگ ڈائریکٹری ہے۔ ہم باقاعدگی سے ان ایپلیکیشنز کی جانچ پڑتال کرتے ہیں تاکہ یہ یقینی بنایا جا سکے کہ وہ وائرس سے پاک اور کام کرنے کے قابل ہیں۔ تاہم، ہم کسی گیم کے ڈویلپر نہیں ہیں۔ گیموں کے تمام جملہ حقوق ان کے اپنے مالکان کے پاس محفوظ ہیں۔
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۳۔ قانونِ پاکستان اور صارفین کی اہلیت
                </h3>
                <p>
                  یہ ویب سائٹ خاص طور پر صرف پاکستانی ریجن کے بالغ افراد کے لیے تیار کی گئی ہے۔ اس بات کو یقینی بنائیں کہ آپ کی عمر ۱۸ سال سے زائد ہے اور آپ کا دماغی توازن درست ہے تاکہ آپ کسی دباؤ کے بغیر اپنی مرضی سے اس پورٹل کا مطالعہ کریں۔
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۴۔ ایزی پیسہ اور جاز کیش ٹرانزیکشنز کا طریقہ کار
                </h3>
                <p>
                  ہم صرف جائزہ فراہم کرتے ہیں کہ کس ایپ کے ذریعے کمائی کو ایزی پیسہ یا جاز کیش اکاؤنٹ میں بھیجا جاتا ہے۔ متعلقہ والٹس کے تجارتی مالکان مائیکرو فنانس بینک ہیں، جن سے ہمارا کوئی ملکیتی الحاق نہیں ہے۔ اگر ادائیگیوں میں کوئی مسئلہ آئے تو براہ کرم متعلقہ گیم کی ان ایپ ہیلپ لائن سے رجوع کریں۔
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۵۔ قانونی معافی اور ذمہ داری کی حد
                </h3>
                <p>
                  پاکستان کی عدالتوں اور دائرہ اختیار کے قواعد کے مطابق، پاک الون کی انتظامیہ کسی بھی تجارتی اتار چڑھاؤ یا گیم والٹ میں ہونے والے نقصان کے نقصانات کے لیے قانونی ذمہ دار نہیں ہوگی۔ صارفین اپنی خود مختار مرضی کے مالک ہیں۔
                </p>
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
