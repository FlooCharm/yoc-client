import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('categories');
  this.route('list-categories');
  this.route('editCategory', { path: 'editCategory/:id'});
  this.route('product', function() {
    this.route('new-product');
    this.route('list-product');
    this.route('edit-product', { path: 'edit-product/:id'});
  });
});

export default Router;
