'use strict';

var Beer = React.createClass({
    /**
     * PropTypes
     */
    propTypes: {
        // liste des bières
        name: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number,
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
     * Render
     * @returns {XML}
     */
    render: function() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <div>quantity: {this.props.quantity}</div>
            </div>
        )
    }
});

module.exports = Beer;