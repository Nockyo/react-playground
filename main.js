//const helloWorld = React.createElement('h1', {}, 'Hello world!');

const firstName = 'r0ulito';
const lastName = 'formateur';

/* class FirstName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text : props.text,
            count: 0        
        };
        this.increment = this.increment.bind(this);
    }
    

    capitalizeText(value) {
        return value[0].toUpperCase() + value.slice(1);
    }

    increment() {
        this.setState({
            count: this.state.count +1
        });

        console.log(this.state.count);
    }


    render() {
        return(
            <React.Fragment>
                <span onClick={this.increment}>{this.capitalizeText(this.state.text)} </span>
                {this.state.count}
            </React.Fragment>
        )
    }
} */


function FirstName(props) {

    const [text, setText] = React.useState(props.text);
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1)

    }
    const capitalizeText = (value) => {
        return value[0].toUpperCase() + value.slice(1);

    }


    return(
        <React.Fragment>
            <span onClick={increment}>{capitalizeText(text)} </span>
            {count}
        </React.Fragment>
    )
    
}


function LastName(props) {
    const [state, setState] = React.useState({
        text : props.text,
        count : 0
    })
    // const [text, setText] = React.useState(props.text)
    // const [count, setCount] = React.useState(0);

    const capitalizeText = value => value.toUpperCase();


    /**
     * 
     * {
        text : props.text,
        count : 1
    }
     */
    const increment = () => {
        setState(prevState => ({
            ...prevState,
            count: state.count + 1
        }));
        console.log(state);
        
    }


    return(
        <span className="red-text" onClick={increment}>{capitalizeText(state.text)} {state.count}</span>
    )
}


// Solution sans bonus
const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName} /> </h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));