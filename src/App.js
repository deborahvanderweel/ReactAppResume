import './Stylesheets/App.css';
import "animate.css/animate.min.css";
import About from './Components/Elements/About.jsx';
import PersonalList from './Components/Elements/PersonalList.jsx';
import ExperienceList from './Components/Elements/ExperienceList.jsx';

function App() {
  return (
    <div className="App">
      <About />
      <PersonalList />
      <ExperienceList />
    </div>
  );
}

export default App;
