import { useEffect } from 'react';

import { Background } from './components/background/background';
import { Footer } from './components/footer';

import { Home } from './pages/home';

import './app.scss';
import { Menu } from './components/menu';
import { Cursor } from './components/cursor';

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
          <Menu />
          <Cursor/>
          <Home/>
          <Background/>
      </main>
  );
}

export default App;
