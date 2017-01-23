(function () {
    'use strict';

    angular
        .module('ngInPlaceConfirmBtn', ['ngAnimate'])
        .directive('ngInPlaceConfirmBtn', ipcActionBtnFunc);

    function ipcActionBtnFunc() {
        return {
            template: '<div style="position: relative"><div class="ipc-btn-container" ng-class="{\'has-error\': showValidation && option.hasInputBox && option.inputRequired && !inputValue.trim()}" on-global-click="cancel()">' +
            '<div class="ipc-confirm-text ng-hide" ng-show="showConfirm" ng-if="!option.hasInputBox">' +
            '<span>Confirm to {{option.name}}</span>' +
            '</div>' +
            '<input class="form-control ipc-input ng-hide" type="text" ng-model="option.inputValue" name="{{option.inputBoxName}}" ng-change="hideValidation()" placeholder="{{option.placeholder}}" data-toggle="tooltip" data-placement="top" title="{{option.placeholder}}" ng-show="showConfirm" ng-if="option.hasInputBox">' +
            '<a class="btn btn-default btn-block ipc-btn" ng-class="{transparent: showConfirm}" role="button" ng-click="delegateToConfirm()">{{option.name}}</a>' +
            '<div class="btn-group btn-group-justified ipc-confirm-btn ng-hide" role="group" ng-show="showConfirm">' +
            '<a class="btn btn-primary bold" role="button" ng-click="!submitting && submitAction()" ng-disabled="submitting">{{submitting?"Submitting...":"Confirm"}}</a>' +
            '<a class="btn btn-default" role="button" ng-click="!submitting && cancel()" ng-disabled="submitting">Cancel</a>' +
            '</div>' +
            '</div>' +
            '<div class="my-popover" ng-class="option.tooltipDirection || \'left\'" ng-show="showConfirm && option.tooltip">' +
            '<div class="my-popover-arrow"></div>' +
            '<div class="my-popover-body" style="padding: 8px; width: 300px;"><span>{{option.tooltip}}</span></div>' +
            '</div></div>',
            restrict: 'E',
            scope: {
                option: "=",
                submit: "="
            },
            link: function (scope, element) {
                scope.submitting = false;
                scope.showConfirm = false;
                scope.showValidation = false;
                scope.option.inputValue = '';
                scope.delegateToConfirm = function () {
                    scope.showConfirm = true;
                    scope.showValidation = false;
                };
                scope.cancel = function () {
                    scope.showConfirm = false;
                    scope.showValidation = false;
                };
                scope.hideValidation = function () {
                    scope.showValidation = false;
                };
                scope.submitAction = function () {
                    if (scope.option.hasInputBox == false || scope.option.inputRequired == false || scope.option.inputValue.trim()) {
                        if (scope.submit && typeof scope.submit === "function") {
                            scope.submit(scope.option.inputValue, scope.option);
                        }
                    } else {
                        scope.showValidation = true;
                    }
                };
                scope.$on('submitting', function () {
                    scope.submitting = true;
                });
                scope.$on('submitted', function () {
                    scope.submitting = false;
                    scope.option.inputValue = '';
                    scope.cancel();
                });
            }
        }
    }
})();