// function UserGreeting(props) {
//     return <h1>Bienvenue !</h1>;
//   }
  
//   function GuestGreeting(props) {
//     return <h1>Veuillez vous connecter</h1>;
//   }
//   function Greeting(props) {
//       const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//       const handleLogIn = (e) => {
//           e.preventDefault();
//           setIsLoggedIn(true);
//       }

//       const handleLogOut = (e) => {
//           e.preventDefault();
//           setIsLoggedIn(false);
//       }

//     return(
//         <React.Fragment>
//             {isLoggedIn ? 
//             <React.Fragment>
//                 <UserGreeting />
//                 <button onClick={handleLogOut}>Se déconnecter</button>
//             </React.Fragment> : 
//             <React.Fragment>
//                 <GuestGreeting />
//                 <button onClick={handleLogIn}>Se connecter</button>
//             </React.Fragment> }
//         </React.Fragment>
//     )
//   }
  
//   ReactDOM.render(
//     <Greeting />,
//     document.querySelector('#app')
//   );

function App(props){

    const [state, setState] = React.useState({
        items: [],
        DataIsLoaded: false
    });

    const { DataIsLoaded, items } = state;
    
    React.useEffect(() => {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setState({
                    items: json,
                    DataIsLoaded: true
                });
            })
    })
        
    return (
        <React.Fragment>
            {!DataIsLoaded ?
            <React.Fragment>
                <h1> Please wait some time... </h1> 
            </React.Fragment> :
            <React.Fragment>
                <h1> Fetch data from an api in react </h1> 
                {
                    items.map((item) => (
                    <ol key = { item.id } >
                        User_Name: { item.username },<br/>
                        User_Email: { item.email },<br/>
                        User_Society: { item.company.name},<br/>
                        User_PhoneNumber: {item.phone},<br/>
                        User_Website: {item.website}
                    </ol>
                    ))
                }
            </React.Fragment>}
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));