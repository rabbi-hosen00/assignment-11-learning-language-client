

import { Fade, Slide, Zoom, Bounce } from 'react-awesome-reveal';

function AnimationReact() {
    return (
        <div className="App">
            {/* Fade Animation */}
            <Fade>
                <h1>Welcome to Our Website</h1>
            </Fade>

            {/* Corrected Slide Animation */}
            <Slide direction="right">
                <p>This content slides from the left.</p>
            </Slide>

            {/* Zoom Animation */}
            <div className="App flex items-center justify-center h-30 w-30">
                <Zoom>
                    <img
                        className="h-full w-full"
                        src="https://media.lordicon.com/icons/wired/flat/1769-soccer-football.svg"
                        alt="Zoom example"
                    />
                </Zoom>
            </div>

            {/* Bounce Animation */}
            <Bounce>
                <button>Click Me!</button>
            </Bounce>
        </div>
    );
}

export default AnimationReact;
