import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from './common/components/AppLayout';

import StoresPage from './pages/Stores/components/Stores';

const DashboardPage = React.lazy(
  () => import('./pages/Dashboard/components/Dashboard'),
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="stores" element={<StoresPage />} />
      </Route>
    </Routes>
  );
};

export default App;
