import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Card } from 'smart-webcomponents-react/card';
import { Pager } from 'smart-webcomponents-react/pager';

const App = () => {
    const card = useRef();
    const card2 = useRef();
    const card3 = useRef();
    const card4 = useRef();
    const card5 = useRef();
    const card6 = useRef();
    const card7 = useRef();

    const dataSource = {
        title: 'Marketing',
        content: '123.4M'
    };

    const dataSource2 = {
        title: 'Conversion',
        content: '537',
        percentage: '+22',
        image: './../../../src/images/card-demo-chart-4.png'
    };

    const dataSource3 = {
        title: 'Impressions',
        content: '123.4M',
        percentage: '+12.3',
        image: './../../../src/images/card-demo-chart-5.png'
    };

    const dataSource4 = {
        title: 'Sales',
        content: '345.8M'
    };

    const dataSource5 = {
        title: 'Design',
        content: '345.2M'
    };

    const dataSource6 = {
        title: 'Clicks',
        content: '537'
    };

    useEffect(() => {
        document.getElementById('templateContainer').innerHTML = `
            <template id="smallTemplate">
                <div className="card-title">{{title}}</div>
                <div className="card-content">{{content}}</div>
            </template>
            <template id="mediumTemplate">
                <div className="card-title">{{title}}</div>
                <div className="card-content">{{content}}</div>
                <div className="card-target">
                    <span className="card-percentage">{{percentage}}%</span> of target
                </div>
                <div className="card-graphic">
                    <img src="{{image}}" />
                </div>
            </template>
            <template id="largeTemplate">
                <h3>{{title}}</h3>
                <div className="carrusel">
                    <div className="slide">
                        <div className="card-graphic">
                            <img src="{{image1}}" />
                        </div>
                    </div>
                    <div className="slide hidden">
                        <div className="card-graphic">
                            <img src="{{image2}}" />
                        </div>
                    </div>
                    <div className="slide hidden">
                        <div className="card-graphic">
                            <img src="{{image3}}" />
                        </div>
                    </div>
                </div>
                <div className="pager"></div>
            </template>
        `;

        const chartsCard = card.current;

        chartsCard.dataSource = {
            title: 'Progress',
            image1: './../../../src/images/card-demo-chart-1.png',
            image2: './../../../src/images/card-demo-chart-2.png',
            image3: './../../../src/images/card-demo-chart-3.png'
        };

        chartsCard.contentHandler = (cardElement) => {
            ReactDOM.render(
                <Pager showPageIndexSelectors pageIndexSelectors={3} />,
                cardElement.querySelector('.pager'),
                function () {
                    const pager = this.nativeElement;
                    const slides = cardElement.querySelectorAll('.slide');

                    pager.addEventListener('change', (event) => {
                        slides.forEach((slide, index) => {
                            slide.classList.toggle('hidden', index !== event.detail.index);
                        });
                    });
                }
            );
        };

    }, []);

    return (
        <div>
            <smart-cards>
                <Card ref={card} id="charts" className="image-card large" itemTemplate="largeTemplate"></Card>
                <Card ref={card2} dataSource={dataSource} id="marketing" className="image-card small" itemTemplate="smallTemplate"></Card>
                <Card ref={card3} dataSource={dataSource2} id="conversion" className="image-card medium" itemTemplate="mediumTemplate"></Card>
                <Card ref={card4} dataSource={dataSource3} id="impressions" className="image-card medium" itemTemplate="mediumTemplate"></Card>
                <Card ref={card5} dataSource={dataSource4} id="sales" className="image-card small" itemTemplate="smallTemplate"></Card>
                <Card ref={card6} dataSource={dataSource5} id="design" className="image-card small" itemTemplate="smallTemplate"></Card>
                <Card ref={card7} dataSource={dataSource6} id="clicks" className="image-card small" itemTemplate="smallTemplate"></Card>
            </smart-cards>
            <div id="templateContainer"></div>
        </div>
    );
};

export default App;
