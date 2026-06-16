import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, AlertTriangle, Scale, Check, ShieldAlert } from 'lucide-react';

export default function Disclaimer() {
  const [activeTab, setActiveTab] = useState<'english' | 'urdu'>('english');

  useEffect(() => {
    document.title = "Important Disclaimer & Risk Warnings - Pakalone Pakistan";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-[#0d3a8e] selection:text-white">
      {/* Top navbar bar */}
      <div className="bg-gradient-to-r from-[#0d3a8e] to-[#0c4cbd] text-white shadow-md">
        <header className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-white/10 rounded-xl transition-colors flex items-center justify-center">
              <ArrowLeft className="h-5 w-5 text-white" />
            </Link>
            <div className="text-left">
              <h1 className="font-display text-lg font-black text-white tracking-tight uppercase leading-none">
                Pakalone Legal Hub
              </h1>
              <p className="text-[9px] font-bold text-yellow-300 tracking-wide mt-1 uppercase font-mono">
                Risk & Compliance Department
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 bg-[#082a69] border border-blue-500/30 rounded-full px-3 py-1 text-[10px] font-bold text-yellow-300">
            <ShieldAlert className="h-3.5 w-3.5 text-rose-400" />
            <span>Risk Warnings Layer</span>
          </span>
        </header>
      </div>

      <div className="flex-grow max-w-4xl w-full mx-auto px-4 py-8">
        {/* Breadcrumb section */}
        <div className="mb-6 flex items-center gap-1.5 text-2xs text-slate-400 font-bold uppercase tracking-wider">
          <Link to="/" className="hover:text-[#0d3a8e] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600">Disclaimer</span>
        </div>

        {/* Translation tabs */}
        <div className="mb-8 flex bg-white p-1 rounded-xl border border-slate-200 shadow-3xs max-w-sm">
          <button
            onClick={() => setActiveTab('english')}
            className={`flex-1 py-2 text-center text-xs font-black rounded-lg transition-all ${
              activeTab === 'english' ? 'bg-[#0d3a8e] text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            English Disclaimer
          </button>
          <button
            onClick={() => setActiveTab('urdu')}
            className={`flex-1 py-2 text-center text-xs font-black rounded-lg transition-all font-sans ${
              activeTab === 'urdu' ? 'bg-[#0d3a8e] text-white shadow-sm' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            دستبرداری (Urdu)
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Top visual banner */}
          <div className="bg-slate-50/50 border-b border-slate-100 p-6 md:p-8 flex items-start gap-4">
            <div className="p-3.5 bg-rose-50 text-rose-700 rounded-2xl flex-shrink-0 border border-rose-100">
              <AlertTriangle className="h-6 w-6 text-rose-600" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0d3a8e] tracking-tight">
                {activeTab === 'english' ? 'Legal Disclaimer & Volatility Warning' : 'قانونی دستبرداری اور مالی خطرات'}
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-semibold leading-relaxed">
                {activeTab === 'english' 
                  ? 'This document serves as an explicit operational shield. Use of download links certifies alignment with these limitations of liability.'
                  : 'یہ دستاویز پاک الون کے استعمال کے بعد پیدا ہونے والی ذمہ داریوں کی حد کو واضح کرتی ہے۔ احتیاط سے پڑھیں۔'}
              </p>
            </div>
          </div>

          {activeTab === 'english' ? (
            <div className="p-6 md:p-8 space-y-8 text-slate-650 leading-relaxed text-xs font-semibold">
              
              {/* Section 1 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  1. Informational Directory Status Only
                </h3>
                <p>
                  Pakalone is an <strong className="text-slate-900">independent resource directory, reviewing and indexing platform</strong>. We provide catalogued reviews, package statistics, and community-reported checkout speeds of popular Android gaming files including MMY App, CX777, Jeeto786, ISB19, and 92BAR.
                </p>
                <p>
                  We are <strong className="text-slate-900">NOT</strong> a gaming provider, casino operator, wagering network, bank, or gaming platform development house. We do not participate in game operations, hold digital deposit chambers, or organize casino modules.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  2. Third-Party Software and Uptime
                </h3>
                <p>
                  Any APK installation file hosted under mirror servers represents external code compiled by respective independent developers. While we pass these packages through clean sweep antivirus algorithms and hash validation scripts, we:
                </p>
                <ul className="space-y-1.5 pl-4 list-disc marker:text-rose-500 text-slate-600">
                  <li>Do not guarantee that the third party servers will remain online or active.</li>
                  <li>Are not responsible for in-game errors, loss of user login names, or account blocks executed by developer systems.</li>
                  <li>Do not hold administrative privileges over in-game payout speeds or transaction logs.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  3. Risk and Financial Solvency
                </h3>
                <p>
                  All applications involving real money multiplication (speculative cards, slot mechanics, spinning luck dials) are subject to immense financial volatility and unpredictability. 
                </p>
                <p className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-950 text-[11px] leading-relaxed">
                  <strong>⚠️ RISK PROPOSAL NOTICE:</strong> Play and register at your own risk. Pakalone, its staff, engineers, and brand administrators are 100% absolved of any monetary losses, legal inquiries, personal financial distress, or device damage stemming from downloading or engaging with these external applications in Pakistan.
                </p>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-900 border-l-3 border-[#0d3a8e] pl-2 uppercase">
                  4. Intellectual Property citation
                </h3>
                <p>
                  All commercial trademarks, game designs, logos, product names, and banking symbols (such as Telenor EasyPaisa, Mobilink JazzCash, MMY, CX777, or All Slots 777) represent the registered property of their respective legal corporations or creators. We mention them solely for consumer review and directory citation purposes under Fair Use policies.
                </p>
              </section>

            </div>
          ) : (
            <div className="p-6 md:p-8 space-y-8 text-slate-650 leading-relaxed text-right font-sans text-xs">
              
              {/* Section 1 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۱۔ محض تعلیمی اور معلوماتی حیثیت
                </h3>
                <p>
                  پاک الون ایک آزاد اور خود مختار پورٹل ہے۔ ہم مختلف کمائی والی گیمز (جیسے ایم ایم وائی ایپ، سی ایکس 777، جیتو 786، آل سلاٹس 777) کا غیر جانبدارانہ جائزہ پیش کرتے ہیں۔ ہمارا کسی بھی گیمنگ برانڈ کے ساتھ کوئی شراکت داری کا قانونی الحاق نہیں ہے۔
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۲۔ فریقِ ثالث کی ذمہ داریاں
                </h3>
                <p>
                  سائٹ پر ڈاؤن لوڈ کے لیے متبادل لنکس سے ملنے والی اے پی کے (APK) فائلیں بیرونی ڈویلپرز کی تیار کردہ ہوتی ہیں۔ اگرچہ ہم سیکیورٹی کے تمام فلٹرز لگا کر چیک کرتے ہیں، لیکن ہم فریقِ ثالث کے گیم پلے، اکاؤنٹ لاگ ان، اور بونسز کی کارکردگی کے قانونی طور پر ذمہ دار نہیں ہیں۔
                </p>
              </section>

              {/* Section 3 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۳۔ مالی خطرات سے دوری اور انتباہ
                </h3>
                <p>
                  پیسے کمانے والی اور سلاٹس والٹس سے منسلک ایپس میں جیت، ہار اور سرمایہ کاری کا ایک بڑا جوکھم پوشیدہ ہوتا ہے۔
                </p>
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-right text-rose-950 text-[11px] leading-relaxed">
                  <strong>⚠️ لازمی دستبرداری کی کلاز:</strong> دھیان رہے کہ کسی بھی ایپ یا گیم میں رقم یا کوائنز کا لینا دینا آپ کی اپنی سوچ اور مالی استعداد پر منحصر ہے۔ پاک الون، اس کی انتظامیہ اور وابستہ افراد کسی بھی قسم کے مالی نقصان یا فون ہارڈ ویئر میں خرابی کے بالکل بھی سود مند یا کلی ذمہ دار نہیں ہیں۔
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-3">
                <h3 className="text-sm font-black text-slate-950 border-r-3 border-[#0d3a8e] pr-2 uppercase pb-1">
                  ۴۔ ٹریڈ مارکس و کاپی رائٹ کی پالیسی
                </h3>
                <p>
                  انٹرنیٹ ویب سائٹس اور ایپس کے نام، لوگوز اور برانڈز جیسے ایزی پیسہ (EasyPaisa) اور جاز کیش (JazzCash) مائیکرو فنانس بینکوں کے اپنے رجسٹرڈ حقوق ہیں۔ ہم انہیں صرف صارفین کی جانکاری اور گائیڈ لائنز کے لیے جائز حد تک استعمال کرتے ہیں۔
                </p>
              </section>

            </div>
          )}
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
