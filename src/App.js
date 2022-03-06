import './Stylesheets/App.css';
import "animate.css/animate.min.css";
import About from './Components/Elements/About.jsx';
import PersonalList from './Components/Elements/PersonalList.jsx';
import ExperienceList from './Components/Elements/ExperienceList.jsx';
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, MoveIn, MoveOut } from "react-scroll-motion";

const FadeUp = batch(FadeIn(0, 1), MoveIn(0, 50), MoveOut(0, 50));

function App() {
    return (
        <div className="App" >
            <About />
            <PersonalList />
            <ExperienceList />
        </div>
    );
}

export default App;