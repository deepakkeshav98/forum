import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('addquestion');
  this.route('home');
  this.route('answers',{path:'answers/:id'});
  this.route('addanswer',{path:'addanswer/:refid'});
  this.route('login');
  // this.route('registration');
  this.route('register');
});

export default Router;
