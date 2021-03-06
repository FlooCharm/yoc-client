import Ember from 'ember';

export default Ember.Route.extend({
	model (params) {
		return this.store.findRecord('category', params.id);
	},
	actions: {
		updateCategory (model) {
			model.save();
		}
	}
});
