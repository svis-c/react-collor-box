import Content from './components/Content';
import Feature from './components/Feature';
import Header from './components/Header';
import Signup from './components/Signup';
import Topbar from './components/Topbar';
import './App.css';

function App() {
  return (
    <div className='colorBlocks'>
      
        <div className='topbar'>
          <Topbar />
        </div>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <Content />
        </div>
      
        <div className='signup'>
          <Signup />
        </div>
        <div className='bcg1'>
          <Feature />
        </div>
        <div className='bcg2'>
          <Feature />
        </div>
        <div className='bcg3'>
          <Feature />
        
      </div>
    </div>
  );
}

export default App;
