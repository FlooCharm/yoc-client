import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.findAll('ingredient');
	},
	actions: {
		removeIngredient (ingredient) {
			ingredient.destroyRecord();
		}
	}
});
