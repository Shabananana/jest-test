jest.dontMock('../sport-mapper.js');
jest.dontMock('../sport-observable.js');
jest.dontMock('knockout');

describe('sportMapper', function() {
	it('maps sports view objects to observables', function() {
		var $ = require('jquery');
		var sportMapper = require('../sport-mapper.js');
		var mockData = {
			  LeagueEntryOptions: [],
        MultiMatchLimits: 1,
        Name: 'Test Sport ViewModel',
        SportIcon: '/',
        IsActive: true,
        IsSelected: false
		};
		var formattedMockData = sportMapper.prototype.mapFromViewToObservable(mockData);
		expect(formattedMockData.name).toBe(mockData.Name);
		expect(formattedMockData.MultiMatchLimits).toBe(mockData.multiMatchLimits);
	});
});