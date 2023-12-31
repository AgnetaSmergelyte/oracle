import './App.css';
import {useState} from "react";
import revelationSound from "./sounds/mix_07s.mp3";
const voice = new Audio(revelationSound);

function App() {
    const [revealed, setRevealed] = useState('');
    const [words, setWords] = useState('Are you ready for the truth?');
    const [animation, setAnimation] = useState(true);
    function revealTruth() {
        if (animation) {
            voice.play();
            setRevealed('reveal');
            setTimeout(() => {
                setWords('You just found the best web developer for the job');
                setTimeout(() => {
                    setAnimation(false)
                }, 3500)
            }, 3500);
        } else {
            window.location.href = 'https://www.agnetasmergelyte.lt/';
        }
    }
    return (
        <div className="container">
            <div className="glass-circle" onClick={revealTruth}>
                <div>
                    <h3 className={revealed}>{words}</h3>
                </div>
                {revealed === '' && <button className="mystic-btn">Reveal</button>}
            </div>
        </div>
    );
}

export default App;
