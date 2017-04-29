import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	query: 'a',
	method: '',
	options: {},
	didInsertElement () {
		var query = this.get('query');
		var method = this.get('method');
		var options = this.get('options');
		this.$(query)[method](options);
	}
});
