import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Overview from './pages/Overview';
import OceanExplorer from './pages/OceanExplorer';
import TemperatureReconstruction from './pages/TemperatureReconstruction';
import VerticalProfiles from './pages/VerticalProfiles';
import HeatwaveIntelligence from './pages/HeatwaveIntelligence';
import HistoricalAnalogues from './pages/HistoricalAnalogues';
import ScientificTrust from './pages/ScientificTrust';
import DataSources from './pages/DataSources';
import ModelPerformance from './pages/ModelPerformance';
import MonitoringMLOps from './pages/MonitoringMLOps';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="explorer" element={<OceanExplorer />} />
          <Route path="reconstruction" element={<TemperatureReconstruction />} />
          <Route path="profiles" element={<VerticalProfiles />} />
          <Route path="heatwaves" element={<HeatwaveIntelligence />} />
          <Route path="analogues" element={<HistoricalAnalogues />} />
          <Route path="trust" element={<ScientificTrust />} />
          <Route path="datasources" element={<DataSources />} />
          <Route path="performance" element={<ModelPerformance />} />
          <Route path="mlops" element={<MonitoringMLOps />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
