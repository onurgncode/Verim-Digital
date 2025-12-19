import { motion } from "framer-motion"

export function WhatsAppButton() {
    const whatsappUrl = "https://chat.whatsapp.com/HaIOsLlNShr6znwTMnOU5E"

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
            title="WhatsApp Grubumuza Katılın"
        >
            <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 2l-2.5 7.5Z" />
            </svg>
        </motion.a>
    )
}
