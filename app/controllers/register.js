import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        register(){
            var user=this.get('user');
			var email=this.get('email');
            var pass=this.get('password');
            $.ajax({
				type:"post",
				url:"http://localhost:8084/forum/forums/adduser",
				data:{user:user,email:email,password:pass}
				});
                this.set('user', '');
                this.set('email', '');
                this.set('password', '');
				this.transitionToRoute('home');
		
        }
    }
});
