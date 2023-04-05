// include fs-extra package
var fs = require("fs-extra");
 
var source = '../smart-angular/react-library/dist'
var destination = './node_modules/smart-webcomponents-react/'
 
// copy source folder to destination
fs.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});

source = '../smart-angular/react-library/index.d.ts'
destination = './node_modules/smart-webcomponents-react/index.d.ts'
 
// copy source folder to destination
fs.copyFile(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy index.d.ts completed!')
});