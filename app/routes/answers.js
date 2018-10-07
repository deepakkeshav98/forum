import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
	model(params)
	  {
  // return Ember.RSVP.hash({
       // ques: this.store.find('question',params.id),
      this.store.push ({
       data: [{
        id: 1,
        type: 'ref',
        attributes: {
        refid:params.id
        
       }}]});
     

        return Ember.RSVP.hash({
        ans:this.store.query('answer',params.id),
        ref:this.store.findAll('ref'),
       // ques:this.store.findAll('question')
   //return this.store.query('answer',params.id);  
   });
    }
    });
