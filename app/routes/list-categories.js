import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.findAll('category');
	},
	actions: {
		removeCategory (category) {
			category.destroyRecord();
		}
	}
});
