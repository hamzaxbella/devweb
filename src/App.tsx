import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import HtmlModule from './pages/HtmlModule';
import CssModule from './pages/CssModule';
import HttpModule from './pages/HttpModule';
import JsModule from './pages/JsModule';
import Playground from './pages/Playground';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="html" element={<HtmlModule />} />
          <Route path="css" element={<CssModule />} />
          <Route path="js" element={<JsModule />} />
          <Route path="http" element={<HttpModule />} />
          <Route path="playground" element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
