import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = [
  {
    title: 'Know BALCO',
    subtitle: 'Get to know us better',
    items: [
      'About Us',
      'Empowering Progress while Shaping the Future',
      'A year of progress',
      "Strengthening India's industrial backbone",
      'Meeting demand across borders',
      'BALCO Chronicles',
      'Our diverse product range',
      "Chairman's communique",
      'Letter from CEO ',
      "CFO's message",
    ],
  },
  {
    title: 'Business Overview',
    subtitle: 'How we operate',
    items: [
      "BALCO's growth project",
      'How we create value',
      'Materiality Matters',
      'Engaging with our stakeholders ',
      'Risk-proofing our journey',
      'Putting ECG at the core',
      'Our ECG blueprint',
      'VSF and VSAP',
      'Our Vision',
      'Financial capital ',
      'Manufactured capital',
      'Intellectual capital',
      'Human capital',
      'Social and Relationship Capital',
      'Natural capital',
      'Awards and Accolades',
      'Certifications',
      'Profiles of Board of Directors',
    ],
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

export default function CorporateBalcoNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(menuData[0]);
  const location = useLocation();

  const getPathFromItem = (item) =>
    '/' + item.toLowerCase().replace(/[\s&]+/g, '_').replace(/[^\w_]/g, '');

  const isActive = (item) => location.pathname === getPathFromItem(item);

  return (
    <div className="sticky top-0 z-50 font-sans bg-white shadow-sm border-b border-gray-100">
      {/* Top Navbar */}
      <div className="w-full bg-white px-6 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center cursor-pointer">
            <Link to="/" className="flex items-center w-60">
           <img src="/outlook.webp" className='w-full' alt="" />
            </Link>
          </div>
        </div>
        
        <div className="flex items-center">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center relative focus:outline-none group"
          >
            <span className={`h-0.5 bg-gray-700 rounded transition-all duration-300 absolute group-hover:bg-[#09579f] ${
              menuOpen ? 'rotate-45 w-6' : 'w-5 translate-y-[-4px]'
            }`} />
            <span className={`h-0.5 bg-gray-700 rounded transition-all duration-300 absolute group-hover:bg-[#09579f] ${
              menuOpen ? 'scale-x-0' : 'w-6'
            }`} />
            <span className={`h-0.5 bg-gray-700 rounded transition-all duration-300 absolute group-hover:bg-[#09579f] ${
              menuOpen ? '-rotate-45 w-6' : 'w-4 translate-y-[4px]'
            }`} />
          </button>
        </div>
      </div>

      {/* Full Screen Mega Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-20 bg-gray-900 text-white overflow-y-auto"
          >
            <div className="min-h-full grid grid-cols-1 lg:grid-cols-4">
              {/* Left Panel - Menu Categories */}
              <div className="bg-gray-800 p-6 lg:p-8 border-r border-gray-700">
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-6">What's inside</h4>
                  <div className="space-y-3">
                    {menuData.map((menu) => (
                      <div
                        key={menu.title}
                        onClick={() => setSelected(menu)}
                        className={`cursor-pointer p-4 rounded-lg border transition-all duration-200 ${
                          selected.title === menu.title
                            ? 'bg-[#09579f] text-white border-[#09579f] shadow-lg'
                            : 'bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600 text-gray-100'
                        }`}
                      >
                        <h5 className="font-semibold text-sm mb-1">{menu.title}</h5>
                        {/* <p className="text-xs text-gray-300">{menu.subtitle}</p> */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel - Menu Items */}
              <div className="lg:col-span-3 p-6 lg:p-8 bg-gray-900">
                <motion.div
                  key={selected.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{selected.title}</h3>
                    {/* <p className="text-gray-400 text-sm">{selected.subtitle}</p> */}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {selected.items.map((item, idx) => {
                      const path = getPathFromItem(item);
                      return (
                        <Link
                          to={path}
                          key={idx}
                          onClick={() => setMenuOpen(false)}
                          className={`p-4 rounded-lg border transition-all duration-200 text-sm font-medium text-left whitespace-nowrap overflow-hidden block ${
                            isActive(item)
                              ? 'bg-[#66cc33] text-white border-[#66cc33] shadow-lg'
                              : 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white border-gray-700 hover:border-gray-600'
                          }`}
                          title={item}
                        >
                          <div className="truncate">
                            {item}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Close button for mobile */}
            <div className="lg:hidden fixed top-4 right-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}