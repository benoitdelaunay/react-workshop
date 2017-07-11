/* ================================== *\
 * App example
 * ================================== */
/*
function App() {
    return (<h1>Hello world !</h1>);
}
*/

/* ================================== *\
 * Props example
 * ================================== */
/*
function Beer(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <div>quantity: {props.quantity}</div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Beer name="Duchesse Anne" quantity="1"/>
            <Beer name="Affligem" quantity="2"/>
            <Beer name="Charles Quint" quantity="3"/>
        </div>
    );
}
*/

/* ================================== *\
 * Each example
 * ================================== */
/*
function Beer(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <div>quantity: {props.quantity}</div>
        </div>
    );
}

function App() {
    var beers = [{
        id: 1,
        name: "Duchesse Anne",
        quantity: 10,
    }, {
        id: 2,
        name: "Affligem",
        quantity: 20,
    }, {
        id: 3,
        name: "Charles Quint",
        quantity: 30,
    }];

    return (
        <div>
            {beers.map(beer => {
                return (<Beer key={'beer-' + beer.id} name={beer.name} quantity={beer.quantity}/>);
            })}
        </div>
    );
}
*/


/* ================================== *\
 * Each example
 * ================================== */
function Beer(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <div>quantity: {props.quantity}</div>
        </div>
    );
}

function App() {
    var beers = [{
        id: 1,
        name: "Duchesse Anne",
        quantity: 10,
    }, {
        id: 2,
        name: "Affligem",
        quantity: 20,
    }, {
        id: 3,
        name: "Charles Quint",
        quantity: 30,
    }];

    return (
        <div>
            {beers.map(beer => {
                return (<Beer key={'beer-' + beer.id} name={beer.name} quantity={beer.quantity}/>);
            })}
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);