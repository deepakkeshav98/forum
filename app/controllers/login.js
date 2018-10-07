import Controller from '@ember/controller';

export default Controller.extend({
    authManager: Ember.inject.service('session'),

    actions: {
      authenticate() {
        this.store.push ({
            data: [{
             id: 1,
             type: 'user',
             attributes: {
             email:this.get('login')
             
            }}]});
          
        let {login,password}=this.getProperties('login','password');
          this.get('authManager').authenticate('authenticator:oauth2',login,password).then(() => {
          alert('Success! Click the top link!');
          this.transitionToRoute('home');
        }, (err) => {
          alert('check your username and password!');
        
        });
        
      
      }
    }
});
