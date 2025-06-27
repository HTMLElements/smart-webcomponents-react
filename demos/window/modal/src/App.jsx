import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { Button } from 'smart-webcomponents-react/button';
import { Window } from 'smart-webcomponents-react/window';
import ReactDOM from 'react-dom';

const App = () => {
    const windowRef = useRef(null);
    const modalRef = useRef(null);

    const handleClick = () => {
        if (windowRef.current) {
            windowRef.current.opened ? windowRef.current.close() : windowRef.current.open();
        }
    };

    const cancelHandler = (event) => {
        const target = event.target;
        const modal = modalRef.current;
        const formWindow = windowRef.current;

        if (target.closest('smart-window') === modal.nativeElement) {
            modal.close();
        } else {
            formWindow.close();
        }
    };

    const agreeHandler = (event) => {
        const target = event.target;
        const modal = modalRef.current;
        const formWindow = windowRef.current;

        if (target.closest('smart-window') === modal.nativeElement) {
            formWindow.close();
            modal.close();
        } else {
            modal.open();
        }
    };

    const handleReady = (type) => {
        const modal = modalRef.current;
        const [labelA, labelB] = type === 'modal' ? ['No', 'Yes'] : ['Cancel', 'Agree'];

        ReactDOM.render(
            <section>
                <Button className="cancel" onClick={cancelHandler}>{labelA}</Button>
                <Button className="agree" onClick={agreeHandler}>{labelB}</Button>
            </section>,
            document.querySelector("#buttonContainer")
        );
    };

    useEffect(() => {
        const template = document.createElement('template');
        template.id = 'footerTemplate';
        template.innerHTML = '<div id="buttonContainer"></div>';
        document.body.appendChild(template);

        if (windowRef.current && modalRef.current) {
            windowRef.current.footerTemplate = template.id;
            modalRef.current.footerTemplate = template.id;
        }
    }, []);

    return (
        <div>
            <div className="options">
                <div className="option">
                    <Button id="openButton" onClick={handleClick}>Open/Close</Button>
                </div>
            </div>

            <Window
                ref={windowRef}
                id="formWindow"
                opened
                label="Window"
                onReady={() => handleReady()}
            >
                <div id="article">
                    <section>
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    </section>
                    <section>
                        <h3>Where does it come from?</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
                    </section>
                    <section>
                        <h3>Why do we use it?</h3>
                        <p>It is a long established fact that a reader will be distracted by readable content...</p>
                    </section>
                    <section>
                        <h3>Where can I get some?</h3>
                        <p>There are many variations of passages of Lorem Ipsum available...</p>
                    </section>
                    <section>
                        <h3>More</h3>
                        <p>Fusce blandit eros vitae libero iaculis, sit amet rhoncus augue dignissim...</p>
                    </section>
                </div>
            </Window>

            <Window
                ref={modalRef}
                id="modal"
                modal
                windowParent="formWindow"
                label="Dialog"
                headerButtons={["close"]}
                onReady={() => handleReady('modal')}
            >
                <h3>Are you sure?</h3>
            </Window>
        </div>
    );
};

export default App;
