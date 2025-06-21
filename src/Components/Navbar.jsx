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
      'Putting ESG at the core',
      'Our ESG blueprint',
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
    items: [
      'Management Discussion and Analysis', 
      'Notice', 
      "Board's Report", 
      'Report on Corporate Governance'
    ],
    hasPdf: true // Flag to indicate this section has individual PDFs
  },
  {
    title: 'Financial Statements',
    subtitle: 'Key financial data',
    items: [
      "Independent Auditor's Report", 
      'Balance Sheet', 
      'Statement of Profit and Loss', 
      'Statement of Cash Flows',
      'Statement of Changes in Equity',
      'Notes to Financial Statements'
    ],
    hasPdf: true // Flag to indicate this section has individual PDFs
  },
];

// PDF mapping for individual items
const pdfMapping = {
  // Statutory Reports PDFs
  'Management Discussion and Analysis': "docs/ManagementDiscussionandAnalysis.pdf",
  'Notice': "docs/Notice.pdf",
  "Board's Report": "docs/Board's Report.pdf",
  'Report on Corporate Governance': "docs/Report on Corporate Governance.pdf",
  
  // Financial Statements PDFs
  "Independent Auditor's Report": "docs/IndependentAuditorsReport.pdf",
  'Balance Sheet': 'docs/financial/balance_sheet.pdf',
  'Statement of Profit and Loss': 'docs/financial/profit_loss.pdf',
  'Statement of Cash Flows': 'docs/financial/cash_flows.pdf',
  'Statement of Changes in Equity': 'docs/financial/changes_equity.pdf',
  'Notes to Financial Statements': 'docs/financial/notes_financial.pdf'
};

export default function CorporateBalcoNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(menuData[0]);
  const location = useLocation();

  const getPathFromItem = (item) =>
    '/' + item.toLowerCase().replace(/[\s&]+/g, '_').replace(/[^\w_]/g, '');

  const isActive = (item) => location.pathname === getPathFromItem(item);

  const handleDownloadReport = () => {
    const pdfUrl = 'docs/Balco_AR_2025.pdf'; 
    window.open(pdfUrl, '_blank');
  };

  // Function to handle individual PDF opens
  const handleItemClick = (item, e) => {
    // Check if this item has a PDF mapping
    if (pdfMapping[item]) {
      e.preventDefault(); // Prevent navigation
      window.open(pdfMapping[item], '_blank');
      setMenuOpen(false);
    }
    // If no PDF mapping, let the normal Link navigation happen
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 font-sans bg-white shadow-sm border-b border-gray-100">
      {/* Top Navbar */}
      <div className="w-full bg-white px-6 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center cursor-pointer">
            <Link to="/" className="flex items-center w-60" onClick={handleLogoClick}>
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
                        {menu.hasPdf && (
                          <span className="text-xs text-gray-300 flex items-center mt-1">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            PDFs Available
                          </span>
                        )}
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
                  <div className="mb-8 flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{selected.title}</h3>
                      {selected.hasPdf && (
                        <p className="text-green-400 text-sm flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Click items to download individual PDFs
                        </p>
                      )}
                    </div>
                    
                    {/* Download Full Report Button */}
                    <button
                      onClick={handleDownloadReport}
                      className="bg-gradient-to-r from-[#09579f] to-[#0a6bb8] hover:from-[#0a6bb8] hover:to-[#09579f] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 border border-[#09579f] hover:border-[#0a6bb8]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Download Full Report</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {selected.items.map((item, idx) => {
                      const path = getPathFromItem(item);
                      const hasPdf = pdfMapping[item];
                      
                      return (
                        <Link
                          to={hasPdf ? '#' : path}
                          key={idx}
                          onClick={(e) => {
                            if (hasPdf) {
                              handleItemClick(item, e);
                            } else {
                              setMenuOpen(false); // Close menu for regular links
                            }
                          }}
                          className={`p-4 rounded-lg border transition-all duration-200 text-sm font-medium text-left whitespace-nowrap overflow-hidden block relative ${
                            isActive(item) && !hasPdf
                              ? 'bg-[#66cc33] text-white border-[#66cc33] shadow-lg'
                              : 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-white border-gray-700 hover:border-gray-600'
                          }`}
                          title={hasPdf ? `Click to download ${item} PDF` : item}
                        >
                          <div className="truncate flex items-center justify-between">
                            <span>{item}</span>
                            {hasPdf && (
                              <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            )}
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