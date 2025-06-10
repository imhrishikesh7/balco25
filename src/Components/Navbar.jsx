import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const menuData = [
    {
        title: 'Know BALCO',
        subtitle: 'Get to know us better',
        items: [
            'About Us',
            'Empowering Progress while Shaping the Future',
            'A year of progress',
            'Strengthening India’s industrial backbone',
            'Meeting demand across borders',
            'BALCO Chronicles',
            'Our diverse product range',
            'Chairman’s communique',
            'Letter from CEO ',
            'CFO’s message',
        ],
    },
    {
        title: 'Business Overview',
        subtitle: 'How we operate',
        items: ['BALCO’s growth project ', 'How we create value', 'Materiality Matters', 'Engaging with our stakeholders ', 'Risk-proofing our journey', 'Putting ECG at the core', 'Our ECG blueprint', 'VSF and VSAP', 'Our Vision', 'Financial capital ', 'Manufactured capital', 'Intellectual capital', 'Human capital', 'Social and Relationship Capital', 'Natural capital','Awards and Accolades', 'Certifications', 'Profiles of Board of Directors'],
    },
    {
        title: 'Statutory Reports',
        subtitle: 'Legal and ESG disclosures',
        items: ['Annual Reports', 'ESG Disclosures', 'Regulatory Filings', 'Corporate Governance'],
    },
    {
        title: 'Financial Statements',
        subtitle: 'Key financial data',
        items: ['Balance Sheet', 'Profit & Loss', 'Cash Flow', 'Equity Statement'],
    },
];

export default function BalancedMegaMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selected, setSelected] = useState(menuData[0]);

    return (
        <div className="sticky top-0 z-50 font-sans bg-[#f3f4f6]">
            {/* Top Navbar */}
            <div className="mx-auto max-w-[99%] mt-1 bg-[#f3f4f6] border border-gray-300 text-gray-800 nav-shadow rounded-xl px-6 py-6 flex justify-between items-center">
                <div className="text-xl font-bold tracking-tight w-70">
                    <Link to="/"><img src="/outlook.png" alt="" /></Link>
                </div>
                <div className="relative w-6 h-6 cursor-pointer">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-full h-full flex flex-col justify-center cursor-pointer items-start gap-2 relative z-10"
                    >
                        <span
                            className={`h-1 bg-blue-500 rounded transition-all duration-400 absolute left-0 ${menuOpen ? 'rotate-45 top-1/2 w-full' : 'top-1 w-1/2'
                                }`}
                        />
                        <span
                            className={`h-1 bg-blue-500 rounded transition-all duration-400 absolute left-0 ${menuOpen ? 'scale-x-0 top-1/2 w-3/4' : 'top-1/2 w-3/4'
                                }`}
                        />
                        <span
                            className={`h-1 bg-blue-500 rounded transition-all duration-400 absolute left-0 ${menuOpen ? '-rotate-45 top-1/2 w-full' : 'bottom-0 w-full'
                                }`}
                        />
                    </button>
                </div>
                {/* </button> */}
            </div>

            {/* Mega Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 right-0 mx-auto max-w-[99%] mt-2 bg-[#f9fafb] border border-gray-300 rounded-xl shadow-xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {/* Left */}
                            <div className="bg-[#e5e7eb] p-6 border-r border-gray-300">
                                <h4 className="text-sm font-semibold text-gray-600 uppercase mb-4">What's Inside</h4>
                                <div className="space-y-3">
                                    {menuData.map((menu) => (
                                        <div
                                            key={menu.title}
                                            onClick={() => setSelected(menu)}
                                            className={`cursor-pointer p-4 rounded-lg border transition-all ${selected.title === menu.title
                                                ? 'bg-blue-100 border-blue-400 text-blue-800'
                                                : 'bg-white border-gray-200 hover:border-blue-400 text-gray-700'
                                                }`}
                                        >
                                            <h5 className="font-medium text-base">{menu.title}</h5>
                                            <p className="text-xs text-gray-500">{menu.subtitle}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right */}
                            <div className="md:col-span-2 p-8 bg-[#e9eaea]">
                                <motion.div
                                    key={selected.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-xl font-semibold mb-1 text-gray-800">{selected.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6">{selected.subtitle}</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {selected.items.map((item, idx) => (
                                            <Link
                                                to={item.toLowerCase().replace(/\s+/g, '_')}
                                                key={idx}
                                                onClick={() => setMenuOpen(false)}
                                                className="bg-white hover:bg-blue-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition text-sm text-gray-800"
                                            >
                                                {item}
                                            </Link>


                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
