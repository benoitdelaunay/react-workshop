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
            name: React.PropTypes.string.isRequired,
            quantity: React.PropTypes.number
        })).isRequired,
    },

    /**
     * Render
     * @returns {XML}
     */
    render: function() {
        return (
            <div>
                {this.props.beers.map(beer => {
                    return (<Beer key={'beer-' + beer.id} name={beer.name} quantity={beer.quantity}/>);
                })}
            </div>
        )
    }
});

module.exports = Beers;

