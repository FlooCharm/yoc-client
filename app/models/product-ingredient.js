import DS from 'ember-data';

export default DS.Model.extend({
	amount: DS.attr('number'),
	ingredient: DS.belongsTo('ingredient'),
	product: DS.belongsTo('product') 
});
