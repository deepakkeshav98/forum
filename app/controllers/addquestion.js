import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		submit(){
			var question=this.get('question');
			var description=this.get('description');
			var d=Date();
			var user=this.get('model').email;
			console.log(user);
		//	var date=d.getDate()+'/'+d.getMonth()+1+'/'+d.getYear();
			$.ajax({
				type:"post",
				url:"http://localhost:8084/forum/forums/addquestion",
				data:{question:question,description:description,date:d,user:user}
				
				
			});
			
		
		this.set('question', '');
	    this.set('description', '');
		this.transitionToRoute('home');
	}}
});
