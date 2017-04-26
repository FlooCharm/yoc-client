import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return {
			categories: this.store.peekAll('category'),
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
		}
	}
});
