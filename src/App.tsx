import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, BarChart3, Palette, Megaphone } from "lucide-react"
import { BackgroundPaths } from "./components/ui/background-paths"
import { DeveloperGroup } from "./components/DeveloperGroup"
import { DottedSurface } from "./components/ui/dotted-surface"

function App() {
    const [currentPage, setCurrentPage] = useState("home")
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Simple "routing" based on hash or state
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === "#group") {
                setCurrentPage("group")
            } else {
                setCurrentPage("home")
            }
            setIsMenuOpen(false)
        }

        window.addEventListener("hashchange", handleHashChange)
        handleHashChange() // Initial check

        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navLinks = [
        { name: "Ana Sayfa", href: "/", id: "home" },
        { name: "Hizmetler", href: "#services", id: "services" },
        { name: "Portfolyo", href: "#portfolio", id: "portfolio" },
        { name: "Developer Grup", href: "#group", id: "group" },
    ]

    const renderContent = () => {
        if (currentPage === "group") {
            return <DeveloperGroup />
        }

        return (
            <main className="relative z-10">
                {/* BackgroundPaths as Hero */}
                <section id="hero">
                    <BackgroundPaths title="Dijitalde Sınırları Zorlayın." />
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 md:py-32 px-6 md:px-24">
                    <h2 className="text-3xl md:text-6xl font-bold mb-16 md:mb-20 text-center tracking-tight">Neler Yapıyoruz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-white/20 transition-all group">
                            <div
                                className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <BarChart3 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Dijital Strateji</h3>
                            <p className="text-white/40 font-light leading-relaxed">Veriye dayalı pazarlama stratejileriyle markanızı hedef kitlesine
                                ulaştırıyoruz.</p>
                        </div>
                        <div className="glass p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-white/20 transition-all group">
                            <div
                                className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Palette className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Yaratıcı Tasarım</h3>
                            <p className="text-white/40 font-light leading-relaxed">Görsel kimliğinizi modern ve çarpıcı tasarımlarla yeniden inşa
                                ediyoruz.</p>
                        </div>
                        <div className="glass p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover:border-white/20 transition-all group">
                            <div
                                className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Megaphone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Medya Yönetimi</h3>
                            <p className="text-white/40 font-light leading-relaxed">Sosyal medya ve dijital kanallarda görünürlüğünüzü en üst seviyeye
                                çıkarıyoruz.</p>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="py-20 md:py-32 px-6 md:px-24 bg-white/[0.02]">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-bold mb-16 md:mb-20 tracking-tight">Seçili İşlerimiz</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="aspect-video glass rounded-3xl overflow-hidden relative group border-white/5">
                                <div className="p-10 h-full flex flex-col justify-end">
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Sosyal Medya Yönetimi</span>
                                    <h4 className="text-2xl font-bold">Saray Börekçisi</h4>
                                </div>
                            </div>
                            <a href="#group" onClick={(e) => { e.preventDefault(); setCurrentPage("group"); window.location.hash = "group"; }}
                                className="aspect-video glass rounded-3xl overflow-hidden relative group cursor-pointer border-white/5 transition-transform hover:scale-[1.02]">
                                <div
                                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-md">
                                    <span className="font-bold text-black bg-white px-6 py-3 rounded-full">Ekibe Katıl</span>
                                </div>
                                <div className="p-10 h-full flex flex-col justify-end">
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Geliştirici Ekip</span>
                                    <h4 className="text-2xl font-bold">Developer Grup</h4>
                                </div>
                            </a>
                            <div className="aspect-video glass rounded-3xl overflow-hidden relative group border-white/5">
                                <div className="p-10 h-full flex flex-col justify-end">
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Web3 & Blockchain</span>
                                    <h4 className="text-2xl font-bold">Sui Network Mainnet Projesi</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 md:py-32 px-6 md:px-24">
                    <div className="max-w-5xl mx-auto glass p-8 md:p-20 rounded-[2rem] md:rounded-[4rem] text-center border-white/10 bg-white/[0.02]">
                        <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight">Birlikte <span className="text-gradient">Büyüyelim</span>.</h2>
                        <p className="text-white/30 mb-12 text-lg md:text-xl font-light">Projenizi anlatın, markanızı zirveye taşıyalım.</p>
                        <form className="grid md:grid-cols-2 gap-6 text-left">
                            <input type="text" placeholder="Adınız"
                                className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20" />
                            <input type="email" placeholder="E-posta"
                                className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20" />
                            <textarea placeholder="Mesajınız"
                                className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 h-40 focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"></textarea>
                            <button
                                type="button"
                                className="md:col-span-2 bg-white text-black font-black py-5 rounded-2xl hover:bg-neutral-200 transition-all uppercase tracking-widest text-lg active:scale-95">Gönder</button>
                        </form>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="min-h-screen bg-transparent text-white font-sans selection:bg-white/20 relative">
                {/* Global Background Layer */}
                <div className="fixed inset-0 bg-black -z-10" />
                <DottedSurface className="fixed inset-0 opacity-40 pointer-events-none" />

                {/* Navigation */}
                <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-max z-[60] bg-white/[0.03] backdrop-blur-2xl px-6 md:px-10 py-3 md:py-4 flex justify-between items-center rounded-full border border-white/10 shadow-2xl">
                    <div className="text-xl sm:text-2xl font-bold tracking-tighter relative z-50 mr-8 md:mr-12">
                        <a href="/" onClick={(e) => { e.preventDefault(); window.location.hash = ""; }}>VERIM <span className="text-white">DIGITAL</span></a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.id === "home") {
                                        e.preventDefault();
                                        window.location.hash = "";
                                    }
                                }}
                                className={`nav-link ${currentPage === link.id ? "nav-link-active shadow-white/10" : "hover:text-white"} transition-colors pb-1`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact"
                            className="hover:text-black hover:bg-white transition-all font-bold text-white border border-white/20 px-4 py-1 rounded-full">Bize
                            Ulaşın</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden relative z-[110] p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Scroll Lock */}
                            <style>{`body { overflow: hidden; }`}</style>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
                            >
                                {/* Extra Close Button in Overlay */}
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="absolute top-8 right-8 p-3 text-white/50 hover:text-white transition-colors"
                                >
                                    <X size={32} />
                                </button>

                                <div className="flex flex-col items-center justify-center gap-8 w-full px-6">
                                    {navLinks.map((link, i) => (
                                        <motion.a
                                            key={link.id}
                                            href={link.href}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={(e) => {
                                                if (link.id === "home") {
                                                    e.preventDefault();
                                                    window.location.hash = "";
                                                }
                                                setIsMenuOpen(false);
                                            }}
                                            className={`text-4xl font-bold tracking-tighter ${currentPage === link.id ? "text-white" : "text-white/40"}`}
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                    <motion.a
                                        href="#contact"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="bg-white text-black px-12 py-5 rounded-full font-black text-xl uppercase tracking-widest mt-8 shadow-2xl"
                                    >
                                        Bize Ulaşın
                                    </motion.a>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {renderContent()}

                <footer className="py-12 md:py-24 border-t border-white/5 text-center text-white/20 text-sm relative z-30">
                    <p className="mb-8">&copy; 2025 Verim Digital. Tüm hakları saklıdır.</p>
                </footer>



                {/* Bottom Gradient Overlay */}
                <div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
            </div>
        </ThemeProvider>
    )
}

export default App
