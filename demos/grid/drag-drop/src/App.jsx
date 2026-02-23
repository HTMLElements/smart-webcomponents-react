import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';

import React, { useRef, useEffect } from 'react';
import { Tree, TreeItemsGroup, TreeItem } from 'smart-webcomponents-react/tree';
import { Grid } from 'smart-webcomponents-react/grid';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';

const initialData = [
    {
        id: 1,
        name: 'Anna Svensson',
        membershipLevel: 'Gold',
        color: 'gold',
        email: 'anna@sweden.olympics',
        city: 'Stockholm',
        company: 'Sweden Cross-Country Ski',
        employees: 8,
        role: 'Athlete',
        notes: 'Leading cross-country skier. Focused on endurance and pacing for 10km events.'
    },
    {
        id: 2,
        name: 'Lars Petersen',
        membershipLevel: 'Silver',
        color: 'silver',
        email: 'lars@norway.olympics',
        city: 'Oslo',
        company: 'Norway Biathlon',
        employees: 6,
        role: 'Athlete',
        notes: 'Competing in biathlon. Balancing ski speed with shooting accuracy.'
    },
    {
        id: 3,
        name: 'Emily Chen',
        membershipLevel: 'Bronze',
        color: 'peru',
        email: 'emily@china.olympics',
        city: 'Beijing',
        company: 'China Figure Skating',
        employees: 5,
        role: 'Athlete',
        notes: 'Pairs figure skater. Perfecting lifts and synchronized spins.'
    },
    {
        id: 4,
        name: 'Maxim Kovalev',
        membershipLevel: 'Gold',
        color: 'darkgoldenrod',
        email: 'maxim@russia.olympics',
        city: 'Moscow',
        company: 'Russia Ice Hockey',
        employees: 12,
        role: 'Athlete',
        notes: 'Captain of men’s ice hockey team. Leading team in offensive strategies.'
    },
    {
        id: 5,
        name: 'Sofia Müller',
        membershipLevel: 'Silver',
        color: 'lightblue',
        email: 'sofia@germany.olympics',
        city: 'Munich',
        company: 'Germany Luge',
        employees: 4,
        role: 'Athlete',
        notes: 'Luge competitor. Focused on start speed and sled control.'
    },
    {
        id: 6,
        name: 'Kaito Tanaka',
        membershipLevel: 'Bronze',
        color: 'darkcyan',
        email: 'kaito@japan.olympics',
        city: 'Sapporo',
        company: 'Japan Snowboarding',
        employees: 7,
        role: 'Athlete',
        notes: 'Specialist in halfpipe. Practicing aerial tricks and rotations.'
    },
    {
        id: 7,
        name: 'Olivia Brown',
        membershipLevel: 'Gold',
        color: 'firebrick',
        email: 'olivia@canada.olympics',
        city: 'Calgary',
        company: 'Canada Alpine Ski',
        employees: 6,
        role: 'Athlete',
        notes: 'Alpine skiing champion. Excels in downhill and super-G events.'
    },
    {
        id: 8,
        name: 'Jakob Larsen',
        membershipLevel: 'Silver',
        color: 'royalblue',
        email: 'jakob@denmark.olympics',
        city: 'Copenhagen',
        company: 'Denmark Skeleton',
        employees: 3,
        role: 'Athlete',
        notes: 'Skeleton racer. Focusing on start technique and aerodynamics.'
    },
    {
        id: 9,
        name: 'Elena Rossi',
        membershipLevel: 'Bronze',
        color: 'slategray',
        email: 'elena@italy.olympics',
        city: 'Turin',
        company: 'Italy Short Track Speed Skating',
        employees: 5,
        role: 'Athlete',
        notes: 'Competing in 500m and 1000m speed skating events.'
    },
    {
        id: 10,
        name: 'Lucas Dubois',
        membershipLevel: 'Gold',
        color: 'darkorange',
        email: 'lucas@france.olympics',
        city: 'Chamonix',
        company: 'France Bobsled',
        employees: 7,
        role: 'Athlete',
        notes: 'Bobsled driver. Competing in 2-man and 4-man events.'
    },
    {
        id: 11,
        name: 'Mia Johnson',
        membershipLevel: 'Silver',
        color: 'teal',
        email: 'mia@usa.olympics',
        city: 'Lake Placid',
        company: 'USA Freestyle Skiing',
        employees: 6,
        role: 'Athlete',
        notes: 'Freestyle skier specializing in aerials and moguls.'
    },
    {
        id: 12,
        name: 'Nikolai Petrov',
        membershipLevel: 'Bronze',
        color: 'darkslateblue',
        email: 'nikolai@russia.olympics',
        city: 'Saint Petersburg',
        company: 'Russia Speed Skating',
        employees: 4,
        role: 'Athlete',
        notes: 'Speed skater competing in 1500m and 5000m events.'
    },
    {
        id: 13,
        name: 'Hanna Weber',
        membershipLevel: 'Gold',
        color: 'purple',
        email: 'hanna@switzerland.olympics',
        city: 'Zurich',
        company: 'Switzerland Curling',
        employees: 5,
        role: 'Athlete',
        notes: 'Skip for curling team. Focused on strategy and precise throws.'
    },
    {
        id: 14,
        name: 'Oscar Nilsson',
        membershipLevel: 'Silver',
        color: 'cadetblue',
        email: 'oscar@sweden.olympics',
        city: 'Gothenburg',
        company: 'Sweden Nordic Combined',
        employees: 4,
        role: 'Athlete',
        notes: 'Nordic combined athlete. Training for ski jumping and cross-country skiing.'
    }
];

const Demo = () => {
    const treeRef = useRef();
    const gridRef = useRef();

    // Used to track drag state
    const isDragging = useRef(false);

    // Grid columns definition
    const columns = [
        {
            label: 'Name',
            dataField: 'name',
            width: 200,
            allowResize: true,
            cellsClassName: 'customer-cell',
            template: (formatObject) => {
                const record = formatObject.row.data;
                formatObject.template = [
                    {
                        className: 'tag',
                        style: {
                            background: record.color,
                            marginRight: '10px'
                        },
                        label: record.name?.split(' ')?.map(name => name[0]).join('')
                    },
                    {
                        children: [
                            {
                                className: 'name',
                                label: record.name
                            },
                            {
                                className: 'membership',
                                label: `${record.membershipLevel || ''} member`
                            }
                        ]
                    }
                ];
            }
        },
        {
            label: 'Team',
            dataField: 'company',
            width: 200
        },
        {
            label: 'E-mail',
            dataField: 'email',
            width: 180,
            template: 'email'
        },
        {
            label: 'City',
            dataField: 'city',
            width: 150,
            template: (formatObject) => {
                const value = formatObject.value;
                formatObject.template = [
                    {
                        label: `<a href="https://www.google.com/maps/place/${value}" target="_blank" class="city-link">
                            <i class="fa fa-location-dot"></i>
                            <span>${value}</span>
                        </a>`,
                        style: {
                            color: 'var(--jqx-primary)',
                            marginLeft: '10px'
                        }
                    }
                ];
            }
        },
        {
            label: 'Notes',
            dataField: 'notes',
            minWidth: 150,
            editor: 'textarea'
        }
    ];

    // Grid settings
    const gridSettings = {
        dataSource: initialData,
        dataSourceSettings: {
            dataFields: [
                'id: number',
                'name: string',
                'membershipLevel: string',
                'color: string',
                'email: string',
                'city: string',
                'company: string',
                'employees: number',
                'role: string',
                'notes: string'
            ]
        },
        layout: {
            allowCellsWrap: true,
            rowMinHeight: 45,
            rowHeight: 45
        },
        appearance: {
            alternationCount: 2,
            showRowLines: true,
            showColumnLines: true
        },
        sorting: {
            enabled: true
        },
        selection: {
            enabled: true,
            allowCellSelection: true
        },
        editing: {
            enabled: true,
            mode: 'cell'
        },
        columns
    };

    // Row hover effect for drag-over
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        // Add hover class on row mouse enter if dragging
        const handleRowMouseEnter = (event) => {
            if (isDragging.current) {
                const row = event.detail;
                if (row && row.element) {
                    row.element.classList.add('hover');
                }
            }
        };

        // Remove hover class on row mouse leave
        const handleRowMouseLeave = (event) => {
            const row = event.detail;
            if (row && row.element) {
                row.element.classList.remove('hover');
            }
        };

        grid.onRowMouseEnter = handleRowMouseEnter;
		grid.onRowMouseLeave = handleRowMouseLeave;
    }, []);

    // Tree drag and drop logic
    useEffect(() => {
        const tree = treeRef.current;
        const grid = gridRef.current;
        if (!tree || !grid) return;

        // Drag start
        const handleDragStart = (event) => {
            isDragging.current = true;
            // Prevent dragging "Communities"
            if (event.detail.items[0].label === 'Communities') {
                event.preventDefault();
            }
        };

        // Drag end
        const handleDragEnd = (event) => {
            isDragging.current = false;
            // Prevent dropping "Financial services"
            if (event.detail.items[0].label === 'Financial services') {
                event.preventDefault();
                return;
            }
            // If dropped on grid
            if (event.detail.container.closest('smart-grid')) {
                const gridElement = event.detail.target.closest('smart-grid');
                if (gridElement) {
                    const htmlRow = event.detail.target.closest('smart-grid-row');
                    const value = event.detail.items[0].value;
                    // Random data for new row
                    const colors = ['gold', 'silver', 'peru', 'darkgoldenrod', 'lightblue', 'darkcyan', 'firebrick', 'royalblue', 'slategray'];
                    const cities = ['Toronto', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'];
                    const companies = ['Sweden Alpine Ski', 'Norway Biathlon', 'China Figure Skating', 'Russia Ice Hockey', 'Germany Luge', 'Japan Snowboarding', 'Canada Alpine Ski', 'Denmark Skeleton', 'Italy Short Track Speed Skating'];
                    const notes = [
                        'Alpine ski coach. Guiding skiers on slalom and giant slalom techniques',
                        'Top biathlete. Focused on sprint events and shooting under pressure',
                        'Skeleton racer. Focusing on start technique and aerodynamics',
                        'Ski jumper. Practicing timing, balance, and wind compensation techniques',
                        'Snowboard cross competitor. Focusing on speed and obstacle navigation',
                        'Short track speed skater. Known for aggressive passing and tight turns.',
                        'Freestyle skier specializing in aerials and moguls.',
                        'Bobsled driver. Competing in 2-man'
                    ];
                    const membershipLevel = ['Gold', 'Silver', 'Bronze'];

                    const data = {
                        name: value,
                        email: `${value.toLowerCase().replace(/\s/g, '')}@example.com`,
                        city: cities[Math.floor(Math.random() * cities.length)],
                        company: companies[Math.floor(Math.random() * companies.length)],
                        notes: notes[Math.floor(Math.random() * notes.length)],
                        color: colors[Math.floor(Math.random() * colors.length)],
                        membershipLevel: membershipLevel[Math.floor(Math.random() * membershipLevel.length)]
                    };

                    if (htmlRow) {
                        const row = grid.getRowByElement(htmlRow);
                        const newRow = grid.insertRowAfter(data, row);
                        grid.flashRow(newRow.id);
                    } else {
                        const newRow = grid.addRow(data);
                        grid.flashRow(newRow.id);
                    }
                }
            }
        };
	
		
        tree.nativeElement.addEventListener('dragStart', handleDragStart);
        tree.nativeElement.addEventListener('dragEnd', handleDragEnd);

        return () => {
            tree.nativeElement.removeEventListener('dragStart', handleDragStart);
            tree.nativeElement.removeEventListener('dragEnd', handleDragEnd);
        };
    }, []);

    return (
        <div className="viewport">
            <div className="demo-description">
                <h1>Tree to Grid Drag and Drop</h1>
                <p>
                    This demo illustrates how to implement drag-and-drop functionality between a <strong>jqxTree</strong> and a
                    <strong>jqxGrid</strong>. Users can drag items from the tree and drop them onto the grid to add new rows
                    based on the tree item data. The demo also demonstrates how to handle drag-and-drop events, customize the
                    data being transferred, and provide visual feedback during the drag operation.
                    In this example, the tree represents a membership hierarchy with different levels (Gold, Silver, Bronze) and
                    associated athletes. When an athlete is dragged from the tree and dropped onto the grid, a new row is
                    created in the grid with the athlete's information, including their name, team, and membership level. The
                    grid can be configured to allow further editing of the added rows or to display additional details as
                    needed.
                </p>
            </div>
            <div className="jqx-flex" style={{ display: 'flex', gap: '20px' }}>
                <Tree
                    ref={treeRef}
                    id="athletesTree"
                    className="membership-tree"
                    allowDrag
                    allowDrop
                    style={{ width: 300, height: 800 }}
                >
                    {/* Gold Members */}
                    <TreeItemsGroup label="🏅Gold Members" expanded disableDrag>
                        <TreeItemsGroup label="Athletes" expanded disableDrag>
                            <TreeItem value="Anna Svensson" className="customer-cell">
                                <span className="name">Anna Svensson</span>
                                <br />
                                <span className="team">Sweden Cross-Country Ski</span>
                            </TreeItem>
                            <TreeItem value="Maxim Kovalev" className="customer-cell">
                                <span className="name">Maxim Kovalev</span>
                                <br />
                                <span className="team">Russia Ice Hockey</span>
                            </TreeItem>
                            <TreeItem value="Olivia Brown" className="customer-cell">
                                <span className="name">Olivia Brown</span>
                                <br />
                                <span className="team">Canada Alpine Ski</span>
                            </TreeItem>
                            <TreeItem value="Lucas Dubois" className="customer-cell">
                                <span className="name">Lucas Dubois</span>
                                <br />
                                <span className="team">France Bobsled</span>
                            </TreeItem>
                            <TreeItem value="Hanna Weber" className="customer-cell">
                                <span className="name">Hanna Weber</span>
                                <br />
                                <span className="team">Switzerland Curling</span>
                            </TreeItem>
                            <TreeItem value="Daniel Kim" className="customer-cell">
                                <span className="name">Daniel Kim</span>
                                <br />
                                <span className="team">South Korea Short Track</span>
                            </TreeItem>
                            <TreeItem value="Laura Fischer" className="customer-cell">
                                <span className="name">Laura Fischer</span>
                                <br />
                                <span className="team">Germany Biathlon</span>
                            </TreeItem>
                        </TreeItemsGroup>
                    </TreeItemsGroup>

                    {/* Silver Members */}
                    <TreeItemsGroup label="🥈Silver Members" disableDrag>
                        <TreeItemsGroup label="Athletes" disableDrag>
                            <TreeItem value="Lars Petersen" className="customer-cell">
                                <span className="name">Lars Petersen</span>
                                <br />
                                <span className="team">Norway Biathlon</span>
                            </TreeItem>
                            <TreeItem value="Sofia Müller" className="customer-cell">
                                <span className="name">Sofia Müller</span>
                                <br />
                                <span className="team">Germany Luge</span>
                            </TreeItem>
                            <TreeItem value="Jakob Larsen" className="customer-cell">
                                <span className="name">Jakob Larsen</span>
                                <br />
                                <span className="team">Denmark Skeleton</span>
                            </TreeItem>
                            <TreeItem value="Mia Johnson" className="customer-cell">
                                <span className="name">Mia Johnson</span>
                                <br />
                                <span className="team">USA Freestyle Skiing</span>
                            </TreeItem>
                            <TreeItem value="Sophia Andersson" className="customer-cell">
                                <span className="name">Sophia Andersson</span>
                                <br />
                                <span className="team">Norway Ski Jumping</span>
                            </TreeItem>
                        </TreeItemsGroup>
                        <TreeItemsGroup label="Coaches" disableDrag>
                            <TreeItem value="Mats Ekström" className="customer-cell">
                                <span className="name">Mats Ekström</span>
                                <br />
                                <span className="team">Sweden Alpine Ski</span>
                            </TreeItem>
                        </TreeItemsGroup>
                    </TreeItemsGroup>

                    {/* Bronze Members */}
                    <TreeItemsGroup label="🥉Bronze Members" disableDrag>
                        <TreeItem value="Emily Chen" className="customer-cell">
                            <span className="name">Emily Chen</span>
                            <br />
                            <span className="team">China Figure Skating</span>
                        </TreeItem>
                        <TreeItem value="Kaito Tanaka" className="customer-cell">
                            <span className="name">Kaito Tanaka</span>
                            <br />
                            <span className="team">Japan Snowboarding</span>
                        </TreeItem>
                        <TreeItem value="Elena Rossi" className="customer-cell">
                            <span className="name">Elena Rossi</span>
                            <br />
                            <span className="team">Italy Short Track Speed Skating</span>
                        </TreeItem>
                        <TreeItem value="Nikolai Petrov" className="customer-cell">
                            <span className="name">Nikolai Petrov</span>
                            <br />
                            <span className="team">Russia Speed Skating</span>
                        </TreeItem>
                        <TreeItem value="Isabella Moretti" className="customer-cell">
                            <span className="name">Isabella Moretti</span>
                            <br />
                            <span className="team">Italy Snowboard</span>
                        </TreeItem>
                        <TreeItem value="Henrik Jørgensen" className="customer-cell">
                            <span className="name">Henrik Jørgensen</span>
                            <br />
                            <span className="team">Denmark Ice Hockey</span>
                        </TreeItem>
                    </TreeItemsGroup>
                </Tree>
                <Grid
                    ref={gridRef}
                    id="grid"
                    {...gridSettings}
                    style={{ width: 'calc(100% - 300px)', maxWidth: 1000, height: 800 }}
                />
            </div>
        </div>
    );
};

export default Demo;
