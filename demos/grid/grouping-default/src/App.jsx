import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import { useRef } from 'react';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

export default function App() {

	const gridRef = useRef();

	const dataSource = [
	    { name: 'Lion', class: 'Mammalia', description: 'Powerful big cat known as king of the savannah', color: '#c68642' },
        { name: 'Giraffe', class: 'Mammalia', description: 'Tallest land animal with long neck', color: '#daa520' },
        { name: 'Zebra', class: 'Mammalia', description: 'Striped herbivore of the savannah', color: '#000000' },
        { name: 'Rhino', class: 'Mammalia', description: 'Thick-skinned horned herbivore', color: '#708090' },
        { name: 'Hippo', class: 'Mammalia', description: 'Large semi-aquatic river mammal', color: '#6a5acd' },
        { name: 'Cheetah', class: 'Mammalia', description: 'Fastest land animal on Earth', color: '#f4a460' },
        { name: 'Leopard', class: 'Mammalia', description: 'Stealthy spotted big cat predator', color: '#8b4513' },
        { name: 'Buffalo', class: 'Mammalia', description: 'Large horned grazing mammal', color: '#2f4f4f' },
        { name: 'Hyena', class: 'Mammalia', description: 'Scavenging predator with strong jaws', color: '#b8860b' },

        { name: 'Crocodile', class: 'Reptilia', description: 'Large river-dwelling reptile predator', color: '#556b2f' },
        { name: 'Chameleon', class: 'Reptilia', description: 'Color-changing tree reptile', color: '#32cd32' },
        { name: 'Python', class: 'Reptilia', description: 'Large non-venomous constrictor snake', color: '#6b8e23' },

        { name: 'Ostrich', class: 'Aves', description: 'Largest flightless bird', color: '#2f4f4f' },
        { name: 'Flamingo', class: 'Aves', description: 'Pink wading bird with long legs', color: '#ff69b4' },
        { name: 'Eagle', class: 'Aves', description: 'Powerful bird of prey', color: '#8b4513' },

        { name: 'Frog', class: 'Amphibia', description: 'Moist-skinned jumping amphibian', color: '#32cd32' },

        { name: 'Tilapia', class: 'Actinopterygii', description: 'Freshwater African fish species', color: '#4682b4' },

        { name: 'Baobab', class: 'Plantae', description: 'Iconic African tree with massive trunk', color: '#8b5a2b' },
        { name: 'Acacia', class: 'Plantae', description: 'Thorny savannah tree', color: '#228b22' },
        { name: 'Grass', class: 'Plantae', description: 'Savannah ground vegetation', color: '#9acd32' }
	]
	
	const dataSourceSettings = {
		dataFields: [
			'name: string',
			'class: string',
			'description: string',
			'color: string'
		]
	}

	const sorting = {
		enabled: true
	};

	const behavior = {
		allowColumnReorder: true
	};

	const grouping = {
        enabled: true,
        groupBy: ['class'],
        renderMode: 'default',
        autoExpandAll: true
	};

	const columns = [{
            dataField: 'name',
            label: 'Animal',
            align: 'center',
            cellsAlign: 'center',
            cellsRenderer: (id, dataField, value, record) => {
                const animalIcons = {
                    Lion: 'fa-solid fa-paw',
                    Giraffe: 'fa-solid fa-horse-head',
                    Zebra: 'fa-solid fa-horse',
                    Rhino: 'fa-solid fa-hippo',
                    Hippo: 'fa-solid fa-hippo',
                    Cheetah: 'fa-solid fa-paw',
                    Leopard: 'fa-solid fa-paw',
                    Buffalo: 'fa-solid fa-cow',
                    Hyena: 'fa-solid fa-dog',

                    Crocodile: 'fa-solid fa-dragon',
                    Chameleon: 'fa-solid fa-frog',
                    Python: 'fa-solid fa-worm',

                    Ostrich: 'fa-solid fa-kiwi-bird',
                    Flamingo: 'fa-solid fa-dove',
                    Eagle: 'fa-solid fa-feather',

                    Frog: 'fa-solid fa-frog',
                    Tilapia: 'fa-solid fa-fish',

                    Baobab: 'fa-solid fa-tree',
                    Acacia: 'fa-solid fa-tree',
                    Grass: 'fa-solid fa-seedling'
                };

                const iconClass = animalIcons[value] || 'fa-solid fa-paw';

                return `
				<div style="font-size:14px; color:${record.color}">
				  <i class="${iconClass}"></i> ${record.name}
				</div>
			  `;
            }
        },
        { dataField: 'class', label: 'Class', width: '30%' },
        { dataField: 'description', label: 'Description', width: '50%' }
	];

	const handleAfterInit = async () => {

		const rows = await gridRef.current.getVisibleRows();
		console.log(rows);
		rows[0].expand();
		
	}

	return (
		<div>
			<div className="demo-description">
				<h1>Grid Grouping in Basic Mode</h1>
				<p>The example demonstrates the grouping renderMode="basic".</p>
			</div>
			<Grid
				id="grid"
				ref={gridRef}
				dataSource={dataSource}
				dataSourceSettings={dataSourceSettings}
				sorting={sorting}
				behavior={behavior}
				grouping={grouping}
				columns={columns}
				onAfterInit={handleAfterInit}
			></Grid>
		</div>
	)
}