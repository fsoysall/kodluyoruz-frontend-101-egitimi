// import logo from './logo.svg';
import './App.css';

import ToDO from './components/ToDO';


function App() {
  var An = new Date().toLocaleString();

  return <div className='App'>
    <div style={{textAlign:'left'}} >SELAM [ {An} ]</div>
    <ToDO>sass</ToDO>
  </div>
 
}

export default App;


