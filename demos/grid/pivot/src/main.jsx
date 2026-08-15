import { createRoot } from 'react-dom/client';
import App from './App';
import './page.css';

// Deliberately not wrapped in <React.StrictMode>. Strict mode runs effects twice in development,
// and this demo's mount effect calls createPivotDesigner - which would dock a second
// smart-pivot-panel into the same host. The demo is about the Grid, not about defending against
// double-invoked effects, so the mode is off rather than the code contorted around it.
createRoot(document.getElementById('root')).render(<App />);
