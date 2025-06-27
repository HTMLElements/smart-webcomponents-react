import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom/client';
import { Button, ToggleButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';

const App = () => {

    const cardRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const dataSource = [
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Tiger_in_Ranthambhore.jpg',
            title: 'Bengal tiger',
            comment: 'Bengal tigers weigh up to 325 kg (717 lb), and reach a head and body length of 320 cm (130 in).',
            content: 'The Bengal tiger (<em>Panthera tigris tigris</em>) is the most numerous tiger. By 2011, the total population was estimated at fewer than 2,500 individuals with a decreasing trend.'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/1280px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg',
            title: 'Indochinese tiger',
            comment: 'Males range in size from 2.55 to 2.85 m (8.4 to 9.4 ft) and in weight from 150 to 195 kg (331 to 430 lb).',
            content: 'The Indochinese tiger (<em>Panthera tigris corbetti</em>) is a tiger subspecies occurring in Myanmar, Thailand, Lao PDR, Viet Nam, Cambodia and southwestern China.'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MalayanTiger01.jpg/1280px-MalayanTiger01.jpg',
            title: 'Malayan tiger',
            comment: 'The average length of a male is 8 ft 6 in (259 cm), and of a female 7 ft 10 in (239 cm).',
            content: 'The Malayan tiger (<em>Panthera tigris jacksoni</em>) inhabits the Malay Peninsula and has been classified as Critically Endangered by IUCN.'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/1280px-P.t.altaica_Tomak_Male.jpg',
            title: 'Siberian tiger',
            comment: 'The body length is not less than 150 cm (60 in), condylobasal length of skull 250 mm (10 in).',
            content: 'The Siberian tiger (<em>Panthera tigris altaica</em>) inhabits the Sikhote Alin region and parts of the Russian Far East.'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2012_Suedchinesischer_Tiger.JPG/1280px-2012_Suedchinesischer_Tiger.JPG',
            title: 'South China tiger',
            comment: 'Males measure from 230 to 265 cm (91 to 104 in), and weigh 130 to 175 kg (287 to 386 lb).',
            content: 'The South China tiger (<em>Panthera tigris tigris</em>) is a tiger population in southern China provinces.'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Panthera_tigris_sumatran_subspecies.jpg',
            title: 'Sumatran tiger',
            comment: 'Males weigh 100 to 140 kg (220 to 310 lb) and measure 2.2 to 2.55 m (87 to 100 in).',
            content: 'The Sumatran tiger (<em>Panthera tigris sondaica</em>) lives in the Indonesian island of Sumatra.'
        }
    ];

    const contentHandler = (card) => {
        ReactDOM.render(
            <div>
                <Button className="share">Share</Button>
                <Button className="more">More</Button>
                <ToggleButton><i className="material-icons">&#xE313;</i></ToggleButton>
            </div>,
            card.querySelector('.card-buttons'),
            () => {
                const toggleBtn = card.getElementsByTagName('smart-toggle-button')[0];
                const moreBtn = card.querySelector('.more');
                const content = card.querySelector('.card-content');

                moreBtn.addEventListener('click', () => {
                    content.classList.remove('hidden');
                    toggleBtn.checked = true;
                });

                toggleBtn.addEventListener('click', () => {
                    content.classList.toggle('hidden');
                });
            }
        );
    };

    useEffect(() => {
        document.getElementById('templateContainer').innerHTML = `
            <template id="customTemplate">
                <div class="card-image">
                    <img src="{{image}}">
                    <h2 class="card-title">{{title}}</h2>
                </div>
                <div class="card-comment">{{comment}}</div>
                <div class="card-buttons"></div>
                <div class="card-content hidden">{{content}}</div>
            </template>`;

        cardRefs.forEach((ref, index) => {
            if (ref.current) {
                ref.current.dataSource = dataSource[index];
            }
        });
    }, []);

    return (
        <div>
            <smart-cards>
                {cardRefs.map((ref, index) => (
                    <Card
                        key={index}
                        ref={ref}
                        contentHandler={contentHandler}
                        className="expandable-card"
                        itemTemplate="customTemplate"
                    />
                ))}
            </smart-cards>
            <div id="templateContainer"></div>
        </div>
    );
};

export default App;
