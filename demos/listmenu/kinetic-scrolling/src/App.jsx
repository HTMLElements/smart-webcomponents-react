import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef, useEffect } from "react";
import { ListMenu } from 'smart-webcomponents-react/listmenu';

const App = () => {
    const listmenu = useRef();

    useEffect(() => {
        const aboutEurope = document.createElement('template');

        aboutEurope.id = 'aboutEurope';
        aboutEurope.innerHTML = `<p>Europe is a continent located entirely in the Northern Hemisphere and
	mostly in the Eastern Hemisphere. It is bordered by the Arctic Ocean to
	the north, the Atlantic Ocean to the west, and the Mediterranean Sea to
	the south. It comprises the westernmost part of Eurasia. Europe is generally
	considered as separated from Asia by the watershed divides of the Ural
	and Caucasus Mountains, the Ural River, the Caspian and Black Seas, and
	the waterways of the Turkish Straits. Yet the non-oceanic boundary between
	Europe and Asia—a concept dating back to classical antiquity—is arbitrary
	and amounts to a historical and social construct. The primarily physiographic
	term "continent" as applied to Europe also incorporates cultural and political
	elements whose discontinuities are not always reflected by the continent's
	current overland boundary with Asia.</p>
<p>Europe covers about 10,180,000 square kilometres (3,930,000 sq mi), or
	2% of the Earth's surface (6.8% of land area). Politically, Europe is divided
	into about fifty sovereign states of which the Russian Federation is the
	largest and most populous, spanning 39% of the continent and comprising
	15% of its population. Europe had a total population of about 741 million
	(about 11% of world population) as of 2016. The European climate is largely
	affected by warm Atlantic currents that temper winters and summers on much
	of the continent, even at latitudes along which the climate in Asia and
	North America is severe. Further from the sea, seasonal differences are
	more noticeable than close to the coast.</p>`;
        document.body.appendChild(aboutEurope);

        if (listmenu.current) {
            listmenu.current.dataSource = [
                {
                    label: ' About Europe',
                    items: [
                        { label: 'aboutEurope' }
                    ]
                },
                { label: 'Russia' },
                { label: 'Ukraine' },
                { label: 'France' },
                { label: 'Spain' },
                { label: 'Sweden' },
                { label: 'Norway' },
                { label: 'Germany' },
                { label: 'Finland' },
                { label: 'Poland' },
                { label: 'Italy' },
                { label: 'United Kingdom' },
                { label: 'Romania' },
                { label: 'Belarus' },
                { label: 'Kazakhstan' },
                { label: 'Greece' },
                { label: 'Bulgaria' },
                { label: 'Iceland' },
                { label: 'Hungary' },
                { label: 'Portugal' },
                { label: 'Austria' },
                { label: 'Czech Republic' },
                { label: 'Serbia' },
                { label: 'Ireland' },
                { label: 'Lithuania' },
                { label: 'Latvia' },
                { label: 'Croatia' },
                { label: 'Bosnia and Herzegovina' },
                { label: 'Slovakia' },
                { label: 'Estonia' },
                { label: 'Denmark' },
                { label: 'Switzerland' },
                { label: 'Netherlands' },
                { label: 'Moldova' },
                { label: 'Belgium' },
                { label: 'Albania' },
                { label: 'Macedonia' },
                { label: 'Turkey' },
                { label: 'Slovenia' },
                { label: 'Montenegro' },
                { label: 'Kosovo' },
                { label: 'Azerbaijan' },
                { label: 'Luxembourg' },
                { label: 'Georgia' },
                { label: 'Andorra' },
                { label: 'Malta' },
                { label: 'Liechtenstein' },
                { label: 'San Marino' },
                { label: 'Monaco' },
                { label: 'Vatican City' }
            ];
        }
    }, []);

    return (
        <div>
            <ListMenu ref={listmenu} className="animation" id="listMenu" filterable grouped overflow="hidden"></ListMenu>
        </div>
    );
};

export default App;
