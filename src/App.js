import './App.css';
import {useState} from "react";
import revelationSound from "./sounds/mix_07s.mp3";
const voice = new Audio(revelationSound);

function App() {
    const [revealed, setRevealed] = useState('');
    const [words, setWords] = useState('Are you ready for the truth?');
    function revealTruth() {
        voice.play();
        setRevealed('reveal');
        setTimeout(() => {
            setWords('You just found the best web developer for the job');
        }, 3500);
    }
    return (
        <div className="container">
            <div className="glass-circle">
                <div>
                    <h3 className={revealed}>{words}</h3>
                </div>
                {revealed === '' && <button className="mystic-btn" onClick={revealTruth}>Reveal</button>}
            </div>
        </div>
    );
}

export default App;
