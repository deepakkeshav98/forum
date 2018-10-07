import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
	host:'http://localhost:8084/forum',
	namespace:'forums',
	authorizer: 'authorizer:application'

});
