(function () {
    "use strict";
    angular.module("grid")
    .component("grid", {
        templateUrl: "src/grid.html",
        transclude: true,
        bindings: {
            data: '<',

            allowSelect: '<',
            selectedRow: '='
        },

        controllerAs: 'grd',
        controller: function grid () {
            var ctrl = this;
            
            ctrl.rowDefinitions = { class: '' };
            ctrl.columnDefinitions = [];

            ctrl.$onInit = function () {
            }
        }
    })
    .component('columnDefinition', {
        require: {
            grid: '^grid'
        },
        bindings: {
            key: "@",
            title: "@",
        },
        controllerAs: 'clmnDef',
        controller: function columnDefinition ($transclude) {
            var ctrl = this;
            
            ctrl.$onInit = function () {
                ctrl.grid.columnDefinitions.push(ctrl);
            }
        }
    })
    .component('rowDefinition', {
        require: {
            grid: '^grid'
        },
        bindings: {
            class: '@'
        },
        controllerAs: 'rowDef',
        controller: function rowDefinition () {
            var ctrl = this;
            
            ctrl.$onInit = function () {
                ctrl.grid.rowDefinition = ctrl;
            }
        }
    })
    .component('gridColumn', {
        templateUrl: "src/gridColumn.html",
        require: {
            grid: '^grid'
        },
        bindings: {
            value: "@",
        },
        controllerAs: 'grdCol',
        controller: function gridColumn () {
            var ctrl = this;
        }
    })
})();