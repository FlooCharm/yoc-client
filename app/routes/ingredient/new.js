import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.createRecord('ingredient');
	},
	actions: {
		saveIngredient (ingredient) {
			ingredient.save();
		},
		willTransition () {
			this.get('controller.model').rollbackAttributes();
		}
	}

});
