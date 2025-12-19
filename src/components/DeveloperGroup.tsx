import { motion } from "framer-motion"
import { Rocket, CheckCircle2, Users2, Sparkles, Github } from "lucide-react"

export function DeveloperGroup() {
    return (
        <main className="pt-24 md:pt-32 pb-20 px-6 md:px-24 min-h-screen">
            <div className="max-w-7xl mx-auto text-center mb-16 px-4 md:px-0">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight"
                >
                    Zinciri Kırma, <br className="sm:hidden" /> <span className="text-gradient">Geleceği</span> Kodla.
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto font-light"
                >
                    Tek başına değil, bir toplulukla birlikte büyü. 21 gün boyunca her gün GitHub'a push yap, disiplin kazan ve toplulukla beraber kendini geliştirip yeni networkler edin.
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
                {/* Unified Marketing Card */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white/[0.02] backdrop-blur-2xl p-6 sm:p-10 md:p-20 rounded-[2rem] md:rounded-[4rem] border border-white/5 relative overflow-hidden group shadow-2xl"
                >
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[120px] -mr-32 -mt-32 rounded-full group-hover:bg-white/10 transition-colors duration-700" />

                    <div className="relative z-10">
                        <div className="mb-12">
                            <span className="bg-white/5 text-white/60 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] border border-white/5 backdrop-blur-md">
                                21 Günlük Maraton
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight flex items-center gap-4 flex-wrap">
                            <Rocket className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-white/80" />
                            <span>
                                21 Day GitHub Push <br />
                                <span className="text-white/30 italic font-light">Habit Building Challenge</span>
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
                            <div className="space-y-8">
                                <p className="text-lg text-white/60 font-light leading-relaxed">
                                    Hoş geldin! Bu bir eğitimden fazlası, bir disiplin hareketi. Her gün en az bir commit ile 21 günlük kod yazma alışkanlığı kazanıyoruz.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-5 group/item">
                                        <div className="w-12 h-12 bg-white/[0.03] rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover/item:border-white/20 transition-colors">
                                            <CheckCircle2 className="w-6 h-6 text-white/40 group-hover/item:text-white/80 transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white/80 mb-1">Hesap Verebilirlik</h4>
                                            <p className="text-sm text-white/30">Günlük raporlar ve GitHub link paylaşımları.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5 group/item">
                                        <div className="w-12 h-12 bg-white/[0.03] rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover/item:border-white/20 transition-colors">
                                            <Users2 className="w-6 h-6 text-white/40 group-hover/item:text-white/80 transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white/80 mb-1">Mentorluk ve Destek</h4>
                                            <p className="text-sm text-white/30">Tıkandığın yerde Core ekibimizden destek.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/[0.03] rounded-[2.5rem] p-8 md:p-10 border border-white/5 backdrop-blur-3xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[60px] -mr-16 -mt-16" />
                                <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white/90">
                                    <Sparkles className="w-5 h-5 text-white/60" />
                                    <span className="tracking-tight">Neden Katılmalısın?</span>
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "GitHub'ında 21 günlük yeşil kareler.",
                                        "Global projelere entegrasyon fırsatı.",
                                        "Toplulukla beraber kendini geliştirme şansı.",
                                        "Blockchain ve Web3 dünyasına ilk adım.",
                                        "Profesyonel network ve dayanışma."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/40 font-light hover:text-white/70 transition-colors">
                                            <div className="w-1 h-1 bg-white rounded-full opacity-20" />
                                            <span className="text-[15px]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* WhatsApp QR Code */}
                            {/* WhatsApp QR Code - Premium Modern Redesign */}
                            <div className="flex flex-col items-center justify-center mb-12 group/qr relative">
                                {/* Glowing Backdrop */}
                                <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full scale-50 group-hover/qr:scale-75 transition-transform duration-1000" />

                                <div className="relative z-10 p-2 bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-700 group-hover/qr:border-white/20 group-hover/qr:bg-white/[0.05] group-hover/qr:-translate-y-3">
                                    <div className="bg-white rounded-[2rem] p-4">
                                        <img
                                            src="/whatsapp-qr.png"
                                            alt="WhatsApp Group QR Code"
                                            className="w-44 h-44 md:w-56 md:h-56 object-contain"
                                        />
                                    </div>

                                    {/* Inner Glass Glow */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/[0.05] to-transparent pointer-events-none rounded-b-[2.5rem]" />
                                </div>

                                <div className="mt-6 text-center space-y-1">
                                    <p className="text-white font-bold text-sm tracking-tight">Hızlı Erişim</p>
                                    <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-light">Kameranızı Okutun</p>
                                </div>
                            </div>

                            <motion.a
                                href="https://chat.whatsapp.com/HaIOsLlNShr6znwTMnOU5E"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.01, y: -2 }}
                                whileTap={{ scale: 0.99 }}
                                className="flex items-center justify-center gap-3 w-full bg-white text-black font-black py-4 md:py-6 rounded-2xl md:rounded-3xl hover:bg-neutral-100 transition-all uppercase tracking-[0.2em] text-center text-lg md:text-xl shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
                            >
                                <Github className="w-6 h-6" />
                                Maratona Katıl
                            </motion.a>
                            <p className="text-center text-white/30 text-xs uppercase tracking-[0.2em] font-medium">
                                *Süreklilik zorunludur. Zinciri kıranlar Core ekibi tarafından takip edilir.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
