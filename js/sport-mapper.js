(function() {
    'use strict';
      var testEnvironment = require && module || false;
      if(testEnvironment) {
        var $ = require('jquery');
        var SportObservable = require('./sport-observable.js');
      }

    function SportMapper() {
        
    }

    function mapDraftGroupsFromViewToObservable(sportViewModel) {
        var draftGroups = [];
        var index = sportViewModel.DraftGroups.length;
        var draftGroupMapper = new window.DK.Ugc.Mapper.DraftGroupMapper();

        while (index--) {
            var draftGroupViewModel = sportViewModel.DraftGroups[index];
            draftGroups[index] = draftGroupMapper.mapFromViewToObservable(draftGroupViewModel, sportViewModel.Name);
        }

        return draftGroups;
    }

    function mapFromViewToObservable(sportViewModel) {
        var sportObservableModel = testEnvironment ? new SportObservable() : new window.DK.Ugc.Observable.SportObservable();
        sportObservableModel.leagueEntryOptions = sportViewModel.LeagueEntryOptions;
        sportObservableModel.multiMatchLimits = sportViewModel.MultiMatchLimits;
        sportObservableModel.name = sportViewModel.Name;
        sportObservableModel.sportIcon = sportViewModel.SportIcon;

        //sportObservableModel.draftGroups = this.mapDraftGroupsFromViewToObservable(sportViewModel);

        sportObservableModel.isActive(sportViewModel.IsActive);
        sportObservableModel.isSelected(sportViewModel.IsSelected);

        return sportObservableModel;
    }

    function mapManyViewsToObservables(sportViewModels) {
        var index = sportViewModels.length;
        var observableSports = [];

        while (index--) {
            var unobservableSport = sportViewModels[index];
            observableSports[index] = this.mapFromViewToObservable(unobservableSport);
        }

        return observableSports;
    }

    SportMapper.prototype = {
        mapDraftGroupsFromViewToObservable: mapDraftGroupsFromViewToObservable,
        mapFromViewToObservable: mapFromViewToObservable,
        mapManyViewsToObservables: mapManyViewsToObservables
    };

    var namespace = {
        Ugc: {
            Mapper: {
                SportMapper: SportMapper
            }
        }
    };

    window.DK = $.extend(true, window.DK || {}, namespace);
    if(testEnvironment) {
      module.exports = SportMapper;
    }
})();