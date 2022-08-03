import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'mobx-react';
import App from './pages/app';
import stores from './store';
import './index.scss';
import 'antd/dist/antd.css'


const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<Provider {...stores}>  <App /></Provider>);
