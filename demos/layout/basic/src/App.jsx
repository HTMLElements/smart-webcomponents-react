import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect } from "react";
import { Layout, LayoutItem, LayoutGroup } from 'smart-webcomponents-react/layout';

function App() {
    useEffect(() => {
        // replace this.init(); with logic if needed
    }, []);

    return (
        <div>
            <Layout>
                <LayoutItem>Item 1</LayoutItem>
                <LayoutItem>Item 2</LayoutItem>
                <LayoutGroup orientation="horizontal">
                    <LayoutItem>Item 3</LayoutItem>
                    <LayoutItem>Item 4</LayoutItem>
                </LayoutGroup>
            </Layout>
        </div>
    );
}

export default App;