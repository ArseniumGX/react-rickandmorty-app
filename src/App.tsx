import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router.tsx';
import { Footer, Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
