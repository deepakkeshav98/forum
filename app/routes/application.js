import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin,{
    authManager:Ember.inject.service('session'), 
    model() {
        return this.store.findAll('user');
       }
    }
);