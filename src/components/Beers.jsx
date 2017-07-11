'use strict';

var Beer = require('./Beer');

var Beers = React.createClass({
    /**
     * PropTypes
     */
    propTypes: {
        // liste des bières
        // beers: React.PropTypes.any.isRequired,
        beers: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            quantity: React.PropTypes.number,
        })).isRequired
    },

    getInitialState: function() {
        return {
            cart: []
        }
    },

    addBeerInCart: function(id) {
        var cart = this.state.cart;
        var beerIndex = _.findIndex(cart, function(beerInCart) {
            console.log(beerInCart);
            return beerInCart.id === id;
        });

        if (beerIndex !== -1) {
            cart[beerIndex].quantity = cart[beerIndex].quantity+1;
        } else {
            cart.push({
                id: id,
                quantity: 1
            });
        }

        console.log(cart);

        this.setState({
            cart: cart,
        });
    },

    /**
     * Render
     * @returns {XML}
     */
    render: function() {
        return (
            <div>
                {this.props.beers.map(beer => {
                    return (
                        <Beer
                            key={'beer-' + beer.id}
                            id={beer.id}
                            name={beer.name}
                            quantity={beer.quantity}
                            onAddInCart={this.addBeerInCart}
                        />
                    );
                })}
            </div>
        )
    }
});

module.exports = Beers;

