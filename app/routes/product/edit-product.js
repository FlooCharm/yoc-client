import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return {
			categories: this.store.peekAll('category'),
			product: this.store.peekRecord('product', params.id)
		}
	},
	actions: {
		updateProduct(product) {
			console.log(product);
			product.save();
		},
		setCategory(category) {
			this.set('controller.model.product.category', category);
		}
	}
});
