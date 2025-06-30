import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React from "react";
import { Splitter, SplitterItem } from 'smart-webcomponents-react/splitter';

const App = () => {
    return (
        <div>
            <Splitter id="splitter">
                
                <SplitterItem size="25%" collapsible>
                    <h2>What is Lorem Ipsum?</h2>
                    <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                </SplitterItem>

                <SplitterItem size="25%" collapsible>
                    <h2>Why do we use it?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lobortis mi...</p>
                    <p>Vivamus placerat quam vel eros hendrerit, id sagittis eros suscipit...</p>
                    <p>Donec ut tortor eu lorem lobortis mollis non sit amet mauris...</p>
                    <p>Quisque condimentum sed est eu consequat...</p>
                    <p>Nam mattis tristique lectus vitae vestibulum...</p>
                    <p>Sed feugiat sem rutrum arcu blandit...</p>
                    <p>Duis hendrerit sagittis sapien at pellentesque...</p>
                    <p>Curabitur lacinia lectus eu tortor dictum rutrum...</p>
                    <p>Maecenas imperdiet est in efficitur commodo...</p>
                    <p>Quisque egestas vel neque cursus vulputate...</p>
                    <p>Integer porta tellus vel magna placerat placerat...</p>
                    <p>Etiam placerat purus eget metus porttitor...</p>
                </SplitterItem>

                <SplitterItem size="25%">
                    <h2>Why do we use it?</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
                </SplitterItem>

                <SplitterItem collapsible>
                    <h2>Where does it come from?</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC...</p>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested...</p>
                </SplitterItem>

            </Splitter>
        </div>
    );
};

export default App;
