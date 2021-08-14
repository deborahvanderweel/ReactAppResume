import './Stylesheets/App.css';
import "animate.css/animate.min.css";
import About from './Components/Elements/About.jsx';
import Personal from './Components/Elements/Personal.jsx';
import ExperienceList from './Components/Elements/ExperienceList.jsx';

function App() {
  return (
    <div className="App">
      <About />
      <Personal />
      <ExperienceList />
    </div>
  );
}

export default App;
