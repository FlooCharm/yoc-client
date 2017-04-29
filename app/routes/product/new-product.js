import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return {
			categories: this.store.peekAll('category'),
			ingredients: this.store.peekAll('ingredient'),
			product: this.store.createRecord('product')
		}
	},
	actions: {
		saveProduct (product) {
			product.save();
		},
		willTransition () {
			this.get('controller.model.product').rollbackAttributes();
		},
		setCategory (category) {
			this.get('controller.model.product').set('category', category);
		},
		setIngredient (ingredient, productIngredient) {
			productIngredient.set('ingredient', ingredient);
		},		
		addIngredient () {
			let pi = this.store.createRecord('productIngredient');
			this.get('controller.model.product.productIngredients').pushObject(pi);
		}
	}
});
