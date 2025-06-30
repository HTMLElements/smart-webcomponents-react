import 'smart-webcomponents-react/source/styles/smart.default.css';
import './App.css';
import React, { useRef } from "react";
import { Ribbon } from 'smart-webcomponents-react/ribbon';

const App = () => {
    const ribbon = useRef();

    const dataSource = [
        {
            label: 'Home',
            ribbonGroups: [
                {
                    label: 'Clipboard',
                    icon: 'content_paste material-icons',
                    ribbonItems: [
                        {
                            label: 'Paste',
                            icon: 'content_paste material-icons',
                            size: 'normal',
                            cssClass: 'flat',
                            type: 'button',
                            allowedSizes: ['normal']
                        },
                        {
                            type: 'group',
                            direction: 'vertical',
                            ribbonItems: [
                                {
                                    label: 'Cut',
                                    icon: 'content_cut material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'verySmall',
                                },
                                {
                                    label: 'Copy',
                                    icon: 'content_copy material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'verySmall'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Font',
                    icon: 'format_bold material-icons',
                    ribbonItems: [
                        {
                            type: 'group',
                            direction: 'vertical',
                            ribbonItems: [
                                {
                                    type: 'group',
                                    direction: 'horizontal',
                                    ribbonItems: [
                                        {
                                            label: 'Font',
                                            type: 'input',
                                            settings: {
                                                dataSource: ['Arial', 'Arial Black', 'Calibri'],
                                                value: 'Arial',
                                                dropDownButtonPosition: 'right'
                                            },
                                            cssClass: 'font-family-input'
                                        },
                                        {
                                            label: 'Font size',
                                            type: 'input',
                                            settings: {
                                                dataSource: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 28, 36, 48, 72],
                                                value: '11',
                                                dropDownButtonPosition: 'right'
                                            },
                                            cssClass: 'font-size-input'
                                        },
                                    ]
                                },
                                {
                                    type: 'group',
                                    direction: 'horizontal',
                                    ribbonItems: [
                                        {
                                            label: 'Bold',
                                            icon: 'format_bold material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Italic',
                                            icon: 'format_italic material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Underline',
                                            icon: 'format_underlined material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            type: 'separator'
                                        },
                                        {
                                            label: '',
                                            tooltip: 'Font color',
                                            itemTemplate: '<smart-color-picker></smart-color-picker>',
                                            settings: {
                                                value: '#000000',
                                                valueDisplayMode: 'colorBox',
                                                dropDownAppendTo: 'body',
                                            },
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Paragraph',
                    icon: 'format_align_left material-icons',
                    ribbonItems: [
                        {
                            type: 'group',
                            direction: 'vertical',
                            ribbonItems: [
                                {
                                    type: 'group',
                                    direction: 'horizontal',
                                    ribbonItems: [
                                        {
                                            label: 'Align left',
                                            icon: 'format_align_left material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Align center',
                                            icon: 'format_align_center material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Align right',
                                            icon: 'format_align_right material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            type: 'separator'
                                        },
                                        {
                                            label: 'Justify',
                                            icon: 'format_align_justify material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        }
                                    ]
                                },
                                {
                                    type: 'group',
                                    direction: 'horizontal',
                                    ribbonItems: [
                                        {
                                            label: 'Numbered list',
                                            icon: 'format_list_numbered material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Bulleted list',
                                            icon: 'format_list_bulleted material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            type: 'separator'
                                        },
                                        {
                                            label: 'Decrease indent',
                                            icon: 'format_indent_decrease material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Increase indent',
                                            icon: 'format_indent_increase material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'separator'
                        },
                        {
                            type: 'group',
                            direction: 'vertical',
                            ribbonItems: [
                                {
                                    label: 'Wrap text',
                                    icon: 'wrap_text material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'verySmall',
                                    allowedSizes: ['iconOnly','verySmall']
                                },
                                {
                                    label: 'Sort Selection',
                                    icon: 'sort_by_alpha material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'verySmall',
                                    allowedSizes: ['iconOnly','verySmall']
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Editing',
                    icon: 'edit material-icons',
                    ribbonItems: [
                        {
                            type: 'group',
                            wrapSize: 'verySmall',
                            ribbonItems: [
                                {
                                    label: 'Find',
                                    icon: 'search material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'normal',
                                    allowedSizes: ['verySmall', 'normal']
                                },
                                {
                                    type: 'group',
                                    wrapSize: 'small',
                                    ribbonItems: [
                                        {
                                            label: 'Replace',
                                            icon: 'find_replace material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'normal',
                                            allowedSizes: ['verySmall', 'small', 'normal']
                                        },
                                        {
                                            label: 'Select all',
                                            icon: 'select_all material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'normal',
                                            allowedSizes: ['verySmall', 'small', 'normal']
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Insert',
            ribbonGroups: [
                {
                    label: 'Tables',
                    icon: 'table_chart material-icons',
                    ribbonItems: [
                        {
                            type: 'group',
                            direction: 'vertical',
                            ribbonItems: [
                                {
                                    type: 'group',
                                    direction: 'horizontal',
                                    ribbonItems: [
                                        {
                                            label: 'Insert table',
                                            icon: 'table_chart material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Insert row above',
                                            icon: 'keyboard_arrow_up material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Insert row below',
                                            icon: 'keyboard_arrow_down material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Insert column left',
                                            icon: 'keyboard_arrow_left material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Insert column right',
                                            icon: 'keyboard_arrow_right material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            type: 'separator'
                                        },
                                        {
                                            label: 'Delete row',
                                            icon: 'delete_sweep material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Delete column',
                                            icon: 'delete_sweep material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        },
                                        {
                                            label: 'Delete table',
                                            icon: 'delete_sweep material-icons',
                                            type: 'button',
                                            cssClass: 'flat',
                                            size: 'iconOnly'
                                        }
                                    ]
                                },
                                {
                                    label: 'Table styles',
                                    itemTemplate: '<smart-drop-down-list></smart-drop-down-list>',
                                    settings: {
                                        dataSource: ['Table style 1', 'Table style 2', 'Table style 3', 'Table style 4', 'Table style 5'],
                                        selectedValues: ['Table style 1'],
                                        dropDownAppendTo: 'body',
                                    },
                                    cssClass: 'table-styles-drop-down'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Illustrations',
                    icon: 'insert_photo material-icons',
                    ribbonItems: [
                        {
                            type: 'group',
                            direction: 'vertical',
                            ribbonItems: [
                                {
                                    label: 'Pictures',
                                    icon: 'insert_photo material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'verySmall',
                                    allowedSizes: ['verySmall']
                                },
                                {
                                    label: 'Online pictures',
                                    icon: 'cloud_upload material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'verySmall',
                                    allowedSizes: ['verySmall']
                                },
                                {
                                    label: 'Shapes',
                                    icon: 'bubble_chart material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'verySmall',
                                    allowedSizes: ['verySmall']
                                }
                            ]
                        },
                        {
                            type: 'separator'
                        },
                        {
                            type: 'group',
                            wrapSize: 'small',
                            ribbonItems: [
                                {
                                    label: 'Icons',
                                    icon: 'insert_emoticon material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'normal',
                                    allowedSizes: ['small','normal']
                                },
                                {
                                    label: '3D models',
                                    icon: 'aspect_ratio material-icons',
                                    type: 'button',
                                    cssClass: 'flat',
                                    size: 'normal',
                                    allowedSizes: ['small','normal']
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'View',
            ribbonGroups: [
                {
                    label: 'Show',
                    icon: 'visibility material-icons',
                    wrapSize: 'small',
                    ribbonItems: [
                        {
                            label: 'Gridlines',
                            icon: 'grid_on material-icons',
                            type: 'button',
                            cssClass: 'flat',
                            size: 'normal',
                            allowedSizes: ['small','normal']
                        },
                        {
                            label: 'Headings',
                            icon: 'view_headline material-icons',
                            type: 'button',
                            cssClass: 'flat',
                            size: 'normal',
                            allowedSizes: ['small','normal']
                        }
                    ]
                },
                {
                    label: 'Zoom',
                    icon: 'zoom_out_map material-icons',
                    wrapSize: 'small',
                    ribbonItems: [
                        {
                            label: 'Zoom to page',
                            icon: 'pageview material-icons',
                            type: 'button',
                            cssClass: 'flat',
                            size: 'normal',
                            allowedSizes: ['small','normal']
                        },
                        {
                            label: 'Zoom to selection',
                            icon: 'zoom_out_map material-icons',
                            type: 'button',
                            cssClass: 'flat',
                            size: 'normal',
                            allowedSizes: ['small','normal']
                        }
                    ]
                }
            ]
        },
        {
            label: 'Help',
            wrapSize: 'small',
            ribbonGroups: [
                {
                    label: 'Help',
                    icon: 'help_outline material-icons',
                    ribbonItems: [
                        {
                            label: 'Help',
                            icon: 'help_outline material-icons',
                            type: 'button',
                            cssClass: 'flat',
                            size: 'normal',
                            allowedSizes: ['verySmall','small','normal']
                        },
                        {
                            label: 'About',
                            icon: 'info_outline material-icons',
                            type: 'button',
                            cssClass: 'flat',
                            size: 'normal',
                            allowedSizes: ['verySmall','small','normal']
                        }
                    ]
                }
            ]
        }
    ];

    const fileMenu = {
        type: 'dropDown',
        items: [
            {
                label: 'New',
                shortcut: 'Ctrl+N'
            },
            {
                label: 'Open',
                shortcut: 'Ctrl+0'
            },
            {
                label: 'Open Containing Folder',
                items: [
                    {
                        label: 'Explorer'
                    },
                    {
                        label: 'cmd'
                    }
                ]
            },
            {
                label: 'Save',
                shortcut: 'Ctrl+S',
                disabled: true,
                separator: true
            },
            {
                label: 'Exit',
                shortcut: 'Alt+F4'
            }
        ]
    };

    return (
        <div>
            <div className="smart-demo-container">
                <div className="document-container">
                    <Ribbon ref={ribbon} dataSource={dataSource} fileMenu={fileMenu}>
                    </Ribbon>
                    <div className="document">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet lorem est, vel venenatis eros venenatis eu. Nulla facilisi. Phasellus ac orci ullamcorper diam cursus malesuada. Phasellus non interdum massa. Suspendisse varius sapien id facilisis consectetur. Fusce blandit, neque et suscipit tempus, neque lorem congue sem, et sodales lacus sem non ante. Pellentesque id urna vitae nibh pulvinar condimentum. Maecenas finibus egestas hendrerit.
                        <br /><br />
                        Quisque id imperdiet sapien. Fusce molestie dignissim sollicitudin. Sed dictum velit non volutpat ultricies. Proin lobortis ultricies scelerisque. Aenean consectetur nunc sit amet mauris sollicitudin vehicula. Integer vehicula posuere nisl. Vivamus molestie scelerisque nibh, nec facilisis orci suscipit nec. Suspendisse eget leo fermentum, consequat nunc at, tempus mauris.
                        <br /><br />
                        Duis efficitur a urna non vulputate. Morbi hendrerit sem non sapien elementum bibendum. Nulla convallis neque nec velit facilisis, in blandit sem eleifend. Vestibulum quis elit eu arcu mollis mollis. Vestibulum est orci, accumsan nec libero quis, mollis placerat erat. Praesent non risus fringilla, mattis leo et, pulvinar leo. Donec blandit maximus feugiat. Donec ut velit eu diam efficitur hendrerit.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
