React Demos:

Project: 'demos' folder.
index.js: - Set the build sample from it
Demo source code: source folder
Demo output: dist folder

Properties: 

Set as camelCase properties dataSource instead of data-source.
selectedIndexes={[0]} for setting array props.
value={50} for setting numeric props
disabled for setting boolean props
placeHolder="My placeholder" for setting string props.
columns={this.columns} for setting object props.

ReactDOM.render to dynamically render component.
onChange={this.handleChange} for binding to events in the template.

ref - ref is like id.

Ex: 	<div ref="myDiv">

In componendDidMount() you can access it like that:

const myDiv = this.refs.myDiv;


Components: CamelCase names.

Run a demo:

1. Edit index.js in the "demos" folder.
2. Run npm start from command promp.
3. Open the demo with a web server.

For debug

Build only, if you see an error after npm start:

npm run build 

Outputs useful information about the errors.
From dev tools you can debug App.jsx as it is not minified.

