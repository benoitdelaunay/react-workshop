'use strict';

var Beer = React.createClass({
    /**
     * PropTypes
     */
    propTypes: {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number,
        onAddInCart: React.PropTypes.func.isRequired,
    },

    /**
     * Valeurs par défaut des props
     */
    getDefaultProps: function() {
        return {
            quantity: 0,
        }
    },

    /**
     * Initiale state
     * @returns {{cart: number}}
     */
    getInitialState: function() {
        return {
            amountQuantity: this.props.quantity,
            cart: 0,
        }
    },

    _addInCart: function() {
        this.props.onAddInCart(this.props.id);

        this.setState({
            amountQuantity: this.state.amountQuantity-1,
            cart: this.state.cart+1
        });
    },

    /**
     * Affichage du bouton d'ajout
     * @returns {*}
     * @private
     */
    _renderBtnAdd: function() {
        var render = null;

        if (this.state.amountQuantity > 0) {
            render = (
                <button onClick={this._addInCart}>Add in cart</button>
            );
        }

        return render;
    },

    /**
     * Render
     * @returns {XML}
     */
    render: function() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <div>quantity: {this.state.amountQuantity}</div>
                <div>cart: {this.state.cart}</div>
                {this._renderBtnAdd()}
            </div>
        )
    }
});

module.exports = Beer;