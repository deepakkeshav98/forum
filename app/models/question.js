import DS from 'ember-data';

export default DS.Model.extend({
    refid:DS.attr(),
	question:DS.attr(),
	description:DS.attr(),
	date:DS.attr()
});
