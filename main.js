//const helloWorld = React.createElement('h1', {}, 'Hello world!');


const lastName = 'Mathieu';
const firstName = 'Guyard';

const helloWorld = <React.Fragment><h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1></React.Fragment>

// ReactDOM.render(helloWorld, document.querySelector('#app'));

function MonSuperComposant() {

    return(
        <React.Fragment>
            <h1>{lastName} {firstName}</h1>
            <section>
                <article className="article">
                    <p>hello10</p>
                </article>
                <article className="article">
                    <p>hello20</p>
                </article>
                <article className="article">
                    <p>hello30</p>
                </article>
            </section>
        </React.Fragment>
    )
}

ReactDOM.render(<MonSuperComposant />, document.querySelector('#app'));
