var React = require('react/addons'),
	GroceryItem = require('./GroceryItem.jsx'),
	GrocerListAddItem = require('./GroceryListAddItem.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Grocery Listify</h1>
				<div>
					{
						this.props.items.map(function(item, index) {
							return (
								<GroceryItem item={item} key={'item'+index}/>
							)
						})
					}
				</div>
				<GrocerListAddItem />
			</div>
		)
	}
});