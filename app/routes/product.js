import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			categories: this.store.findAll('category'),
			ingredients: this.store.findAll('ingredient')
		})
		
	}
});
