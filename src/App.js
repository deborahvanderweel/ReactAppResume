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
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={FadeUp}>
                        <About />
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={FadeUp}>
                        <PersonalList />
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2}>
                    <Animator animation={FadeUp}>
                        <ExperienceList />
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </div>
    );
}

export default App;