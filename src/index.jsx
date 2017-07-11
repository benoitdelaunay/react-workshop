'use strict';

var Beers = require('./components/Beers');

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
    name: "Charles Quint"
}];

/* ================================== *\
 * Each example
 * ================================== */
ReactDOM.render(
    <Beers beers={beers}/>,
    document.getElementById("app")
);