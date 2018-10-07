import Controller from '@ember/controller';

export default Controller.extend({

	actions:{
		submit(){
			var answer=this.get('answer');
			var d=Date();
		    var i= window.location.pathname;
			var res = i.substring(11);
			
				
				
		
			$.ajax({
				type:"post",
				url:"http://localhost:8084/forum/forums/answers/addanswer"+res,
				data:{answer:answer,date:d}
				});
				this.set('answer', '');
				this.transitionToRoute('answers',res);
		
}}});
