import { useEffect } from 'react';

import { Background } from './components/background';
import { Footer } from './components/footer';

import { Home } from './pages/home';

import './app.scss';

function App() {

  useEffect(() => {
  },[])

  return (
      <main style={{height: '4000px'}}>
          {/* <nav className="navbar">
              <div className="navbar-nav">
                <Menu/>
                <h2 className="large">Doggy Daycare</h2>
                <h2 className="small">DD</h2>
                <Logo/>
              </div>
          </nav> */}
          
          <Home/>
          <Footer/>
          <Background/>
      </main>
  );
}

export default App;
