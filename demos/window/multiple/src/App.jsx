import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useCallback } from "react";
import ReactDOM from 'react-dom/client';
import { Button } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';

const App = () => {

    const handleClick = useCallback(() => {
        const windows = document.querySelectorAll('smart-window');
        windows.forEach(w => w.open());
    }, []);

    const handleCreate = useCallback(() => {
        const windowCount = document.getElementsByTagName('smart-window').length;
        const id = 'Window ' + (windowCount + 1);

        const container = document.createDocumentFragment();

        ReactDOM.render(
            <Window id={id} label={id} opened resizable>
                This is the content of {id}
            </Window>,
            container,
            function () {
                document.getElementById('windowContainer')?.appendChild(this.nativeElement);
            }
        );
    }, []);

    return (
        <div id="windowContainer">
            <Window id="window1" opened label="Window 1">
                <div id="article">
                    <section>
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </p>
                    </section>
                    <section>
                        <h3>Where does it come from?</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text...
                        </p>
                    </section>
                </div>
            </Window>

            <Window id="window2" opened label="Window 2">
                <div id="article">
                    <section>
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Why do we use it? It is a long established fact that a reader will be distracted...
                        </p>
                    </section>
                    <section>
                        <h3>Where does it come from?</h3>
                        <p>Where can I get some? There are many variations of passages of Lorem Ipsum available...
                        </p>
                    </section>
                </div>
            </Window>

            <Window id="window3" opened label="Window 3">
                <div id="article">
                    <section>
                        <h3>Want more?</h3>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames...
                        </p>
                    </section>
                    <section>
                        <h3>Further more ...</h3>
                        <p>Maecenas iaculis luctus vestibulum. Duis at auctor justo...
                        </p>
                    </section>
                </div>
            </Window>

            <div className="options">
                <div className="option">
                    <Button id="openWindows" onClick={handleClick}>Open</Button>
                </div>
                <div className="option">
                    <Button id="addWindow" onClick={handleCreate}>Add New</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
