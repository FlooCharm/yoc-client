import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	price: DS.attr('number'),
	category: DS.belongsTo('category'),
	productIngredients: DS.hasMany('productIngredients'),
});