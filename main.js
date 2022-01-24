//const helloWorld = React.createElement('h1', {}, 'Hello world!');


const lastName = 'Mathieu';
const firstName = 'Guyard';

const helloWorld = <React.Fragment><h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1></React.Fragment>

ReactDOM.render(helloWorld, document.querySelector('#app'));
