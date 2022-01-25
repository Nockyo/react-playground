// function App(props) {
//     React.useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(usersObject => setUsers(usersObject))
//     }, [])

//     const [users, setUsers] = React.useState([]);



//     return(
//         <React.Fragment>
//         {
//             users.map((u) =>(
//                 <UserCard key={u.id} user={u}/>
//             ))
//         }
//         </React.Fragment>
//     )
// }

// function UserCard({user}) {
    

//     return (
//         <ul className="user-card">
//             <li>{user.name}</li>
//             <li>{user.email}</li>
//             <li>{user.company.name}</li>
//             <li>{user.phone}</li>
//             <li>{user.website}</li>
//         </ul>
//     )
// }

// ReactDOM.render(<App/>, document.querySelector('#app'))

function Form(props) {

    const[data, setData] = React.useState({
        name: '',
        essay: '',
        flavor: 'coconut'
    });

    // React.useEffect(() => {
    //     console.log(data);
    // }, [data]);

    const handleChange = ({target : {name, value}}) => {
        setData({
            [name] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Le nom a été soumis : ' + data.name + 'Un essai a été envoyé : ' + data.essay + 'Votre parfum favori est : ' + data.flavor);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input name="name" type="text" value={data.name} onChange={handleChange} />
            </label>
            <input name="essay" type="submit" value="Envoyer" />
            <label>
                Essay:
                <textarea value={data.essay} onChange={handleChange} />
            </label>
            <input name="flavor" type="submit" value="Envoyer" />
            <label>
                Choisissez votre parfum favori :
                <select value={data.flavor} onChange={handleChange}>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );

  }

ReactDOM.render(<Form/>, document.querySelector('#app'))