/**
 * @license angular-daterangepicker v0.1.1
 * License: MIT
 */
(function (angular) {
	'use strict';

	angular.module('daterangepicker', []).directive('dateRangePicker', ['$compile', '$parse', function ($compile, $parse) {
		return {
			restrict: 'AE',
			require: '?ngModel',
			scope: {
				'dateRangePicker': '='
			},
			link: function ($scope, $element, $attributes, ngModelCtrl) {
				var options = $scope.dateRangePicker || {};
				options.format = options.format || 'YYYY-MM-DD';
				options.separator = options.separator || ' - ';

				ngModelCtrl.$formatters.push(function (modelValue) {
					if (!modelValue) {
						return '';
					}
					if (options.singleDatePicker) {
						return modelValue.format(options.format);
					} else {
						return [modelValue.startDate.format(options.format), modelValue.endDate.format(options.format)].join(options.separator);
					}
				});

				$scope.$watch($attributes.ngModel, function (modelValue) {
					if (!modelValue) {
						return;
					}
					if (options.singleDatePicker) {
						$element.data('daterangepicker').setEndDate(modelValue);
					}
					else {
						$element.data('daterangepicker').setStartDate(modelValue.startDate);
						$element.data('daterangepicker').setEndDate(modelValue.endDate);
					}
				});

				$element.daterangepicker(options, function(start, end) {
					$scope.$apply(function () {
						if (options.singleDatePicker) {
							ngModelCtrl.$setViewValue(end);
						}
						else {
							ngModelCtrl.$setViewValue({startDate: start, endDate: end});
						}
					});
				});
			}
		};
	}]);

})(angular);
