import DS from 'ember-data';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({

  store: Ember.inject.service(),
  
   load(){if (this.get('session.isAuthenticated')) {
    return this.get('store').queryRecord('user', { me: true }).then((user) => {
      this.set('user', user);
    });
  } else {
    return RSVP.resolve();
  }}

});