function App(props) {  

    const[task, setTask] = React.useState({
        id: 0,
        title: 'test',
        isCompleted : false,
        isEditing: false
    });
    const[toDoList, setToDoList] = React.useState([]);

    const listItems = toDoList.map((item) => <li key={item.id}>{item.title}<ToDoItem list={toDoList} /></li>);

    const handleKeyDown = (e) => {

        if(e.key === 'Enter'){
            setTask(prevState => ({...prevState, id: toDoList.length+1}))
            setToDoList(prevState => ([...prevState, task]));
            setTask(prevState => ({...prevState, title : ''}));
        } else if (e.key === 'Escape') {
            setTask(prevState => ({...prevState, title : ''}));
        } else {}
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setTask(prevState => ({...prevState, title : value}));
    };

    return (
        <React.Fragment>
            <input type="text" value={task['title']} onKeyDown={handleKeyDown} onChange={handleChange} />
            <ol>{listItems}</ol>
        </React.Fragment>
    );
}

function ToDoItem(props) {

    console.log(props.id)

    const handleCheck = (e) => {
        if(props.list.isCompleted){
            // setTask()
            //false
        } else {
            // setTask()
            //true
        }
    }

    return (
        <React.Fragment>
            {props.list.isCompleted ?
                <React.Fragment>
                    <input type="checkbox" checked onChange={handleCheck} />
                    <button>Supprimer</button>
                </React.Fragment> :
                <React.Fragment>
                    <input type="checkbox" onChange={handleCheck} />
                    <button>Supprimer</button>
                </React.Fragment>
            }
        </React.Fragment> 
        
    )
}

ReactDOM.render(<App />, document.getElementById('app'));

//Entrée = enregistrer la valeur dans un tableau toDo, Echap = vider l'input
//{target : {value} }