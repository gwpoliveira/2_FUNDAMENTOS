//Components
import FirstComponent from './components/FirstComponet';
import TempleteExplressions from './components/TempleteExpressions';
import Mycomponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';


//styles / Css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <h1>Desafio</h1>
      <Challenge />
      
      <br /><br />
      <FirstComponent />     
      <TempleteExplressions />
      <Mycomponent />
      <Events />
    
    </div>
  );
}

export default App;
