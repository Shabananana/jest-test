(function () {
    'use strict';
    var testEnvironment = require !== undefined && module !== undefined && module.exports != null;
    if(testEnvironment) {
      var $ = require('jquery');
      var ko = require('knockout');
    }
    var activeClass = ' active ';
    var selectedClass = ' selected ';

    function SportObservable() {
        this.leagueEntryOptions = null;
        this.multiMatchLimits = [];
        this.name = '';
        this.sportIcon = '';

        this.draftGroups = [];

        this.isActive = ko.observable(false);
        this.isSelected = ko.observable(false);
        this.css = ko.computed(css, this);
    }

    function css() {
        var cssValue = '';

        if (this.isActive()) {
            cssValue += activeClass;
        }

        if (this.isSelected()) {
            cssValue += selectedClass;
        }

        return cssValue;
    }

    var namespace = {
        Ugc: {
            Observable: {
                SportObservable: SportObservable
            }
        }
    };

    window.DK = $.extend(true, window.DK || {}, namespace);
    if(testEnvironment) {
      module.exports = SportObservable;
    }  
})();