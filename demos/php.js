const fs = require('fs');
const path = require('path');

walkSync(path.resolve(__dirname  + '/source/'));

function upperCaseFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}


function walkSync(dir) {
    const files = fs.readdirSync(dir);
	let fileIndex = 0;
	
    for (const file of files) {
        const newDir = path.join(dir, file);
	    
        if (fs.statSync(newDir).isDirectory()) {
            walkSync(newDir);
        }
        else {
			if (file === "App.jsx") {
				const parts = dir.split('\\');
				const component = upperCaseFirstLetter(parts[parts.length-2]);
				const demo = upperCaseFirstLetter(parts[parts.length-1]);
						
				const data = `<?php
	$description = 'Smart ${component} for React ${demo} example. React ${component} UI.';
	$keywords = '${component}';
	$title = 'Smart ${component} for React | ${component} | Smart UI for React';
	$path = isset($isRoot) ? '../../../' : '../../../../demos/';
	$base = '../../../../demos/';
	$infobase = '../../../../demos/';
	$demo = '../../../../demos/${component.toLowerCase()}/${demo.toLowerCase()}';
?>
<?php include($path . 'single-demo-template.php'); ?>`;

				
				const componentDir = path.resolve(__dirname  + `/demos/${component.toLowerCase()}`); 
				const demoDir = path.resolve(componentDir  + `/${demo.toLowerCase()}`); 
				
				if (!fs.existsSync(componentDir)) {
					fs.mkdirSync(componentDir);
				}
				
				if (!fs.existsSync(demoDir)) {
					fs.mkdirSync(demoDir);
				}
				
				fs.writeFileSync(path.join(demoDir, 'index.php'), data);
			
				const index = `
<!DOCTYPE html><html lang="en"><head><base href="./../../../dist/${component.toLowerCase()}/${demo.toLowerCase()}/"><title>React ${component} ${demo} | ${component} | Smart UI for ReactJS</title><meta charset="utf-8"><link rel="shortcut icon" href="./favicon.ico"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#000000"><meta name="description" content="Web site created using create-react-app"><link rel="stylesheet" href="../../../node_modules/smart-webcomponents-react/source/styles/smart.default.css"><style>body{position:relative}body,html{min-height:800px}#root{display:block;width:100%;height:100%;overflow:visible;min-height:800px;box-sizing:border-box}</style><link rel="apple-touch-icon" href="logo192.png"><link rel="manifest" href="./manifest.json"><title>React App</title><link href="./static/css/main.0f4fc3c8.chunk.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>            		
`
				fs.writeFileSync(path.join(demoDir, 'index.htm'), index);
							
			}
		}		
    }
}

