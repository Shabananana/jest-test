jest.dontMock('../sport-observable.js').dontMock('knockout');

describe('sport-observable', function() {
	it('returns an empty sports observable', function() {
		var $ = require('jquery');
		var ko = require('knockout')
		var sportsObservable = require('../sport-observable.js');
		var observable = new sportsObservable();
		console.dir(observable);
		expect(observable.name).toBe('');
		expect(observable.leagueEntryOptions).toBe(null);
		expect(typeof observable.isActive).toBe('function');
	});
});