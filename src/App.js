import './App.css';
import Cad from './Component/Cad';
import Performance from './Component/Performance';
import Profile from './Component/Profile';


function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
        <Profile/>
        </div>
        <div className="col">
          <Performance/>
        </div>

      </div>
      <div className="row p-5">
      <Cad/> 
      </div>
      
    </div>
  );
}

export default App;
