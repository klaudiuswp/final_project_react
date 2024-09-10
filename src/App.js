import './App.css';
import {
  CardComponent,
  NavbarComponent,
  MainComponent
} from './components';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <MainComponent/>
      {/* <CardComponent/> */}
    </div>
  );
}

export default App;
