
import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.createRecord('category');
	},
	actions: {
		saveCategory (category) {
			category.save();
		},
		willTransition () {
			this.get("controller.model").rollbackAttributes();
		}
	}
});
