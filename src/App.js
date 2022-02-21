import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Routes } from './Routes';
import './fonts.css';

export function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}
