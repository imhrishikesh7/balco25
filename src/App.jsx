import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
// About BALCO
import EmpoweringProgress from './Pages/KnowBALCO/EmpoweringProgress';
import AboutUs from './Pages/KnowBALCO/AboutUs';
import YearOfProgress from './Pages/KnowBALCO/YearOfProgress'
import Backbone from './Pages/KnowBALCO/Backbone'
import Border from './Pages/KnowBALCO/Border'
import DiverseProducts from './Pages/KnowBALCO/DiverseProducts'
import Chairman from './Pages/KnowBALCO/Chairman'
import CEO from './Pages/KnowBALCO/CEO'
import CFO from './Pages/KnowBALCO/CFO.JSX'
// Business Overview
import GrowthProject from './Pages/BusinessOverview/GrowthProject'
import CreateValue from './Pages/BusinessOverview/CreateValue'
import MaterialityMatters from './Pages/BusinessOverview/MaterialityMatters'
import EngagingStakeholders from './Pages/BusinessOverview/EngagingStakeholders'
import RiskProofing from './Pages/BusinessOverview/RiskProofing'
import PuttingECG from './Pages/BusinessOverview/PuttingESG'
import ESGBlueprint from './Pages/BusinessOverview/ESGBlueprint'
import VSF from './Pages/BusinessOverview/VSF'
import CapitalAllocation from './Pages/BusinessOverview/CapitalAllocation'
import FinancialCapital from './Pages/BusinessOverview/FinancialCapital'
import ManufacturedCapital from './Pages/BusinessOverview/ManufacturedCapital'
import IntellectualCapital from './Pages/BusinessOverview/IntellectualCapital'
import HumanCapital from './Pages/BusinessOverview/HumanCapital'
import Awards from './Pages/BusinessOverview/Awards'
import Certificates from './Pages/BusinessOverview/Certificates'
import BOD from './Pages/BusinessOverview/BOD'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/empowering_progress_while_shaping_the_future' element={<EmpoweringProgress />} />
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/a_year_of_progress' element={<YearOfProgress />} />
            <Route path="/strengthening_indias_industrial_backbone" element={<Backbone />} />
            <Route path='/meeting_demand_across_borders' element={<Border />} />
            <Route path='/our_diverse_product_range' element={<DiverseProducts />} />
            <Route path='/chairman’s_communique' element={<Chairman />} />
            <Route path='/letter_from_ceo_' element={<CEO />} />
            <Route path='/cfo’s_message' element={<CFO />} />
            {/* Business Overview */}
            <Route path='/balco’s_growth_project_' element={<GrowthProject />} />
            <Route path='/how_we_create_value' element={<CreateValue />} />
            <Route path='/materiality_matters' element={<MaterialityMatters />} />
            <Route path='/engaging_with_our_stakeholders_' element={<EngagingStakeholders />} />
            <Route path='/risk-proofing_our_journey' element={<RiskProofing />} />
            <Route path='/putting_ecg_at_the_core' element={<PuttingECG />} />
            <Route path='/our_ecg_blueprint' element={<ESGBlueprint />} />
            <Route path='/vsf_and_vsap' element={<VSF />} />
            <Route path='/our_vision' element={<CapitalAllocation />} />
            <Route path='/financial_capital_' element={<FinancialCapital />} />
            <Route path='/manufactured_capital' element={<ManufacturedCapital />} />
            <Route path='/intellectual_capital' element={<IntellectualCapital />} />
            <Route path='/human_capital' element={<HumanCapital />} />
            <Route path='/awards_and_accolades' element={<Awards />} />
            <Route path='/certifications' element={<Certificates />} />
            <Route path='/profiles_of_board_of_directors' element={<BOD />} />
          </Routes>
        </main>
        {/* Footer stays at the bottom */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
