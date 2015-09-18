describe('daterangepicker directive', function() {
	var $compile, $rootScope;

	beforeEach(module('daterangepicker'));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('creates an instance of daterangepicker', function() {
		var element = $compile('<input type="text" date-range-picker ng-model="dummy">')($rootScope);
		expect(element.data('daterangepicker')).toBeDefined();
	});

	it('creates an instance with default values', function() {
		var element = $compile('<input type="text" date-range-picker ng-model="dummy">')($rootScope);
		$rootScope.$apply();

		expect(element.data('daterangepicker').startDate.format('YYYY-MM-DD')).toBe(moment().format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').endDate.format('YYYY-MM-DD')).toBe(moment().format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').format).toBe('YYYY-MM-DD');
		expect(element.data('daterangepicker').separator).toBe(' - ');
		expect(JSON.stringify(element.data('daterangepicker').ranges)).toBe(JSON.stringify({}));
	});

	it('creates an instance with provided options', function() {
		$rootScope.options = {
			format: 'L',
			separator: '/'
		};
		var element = $compile('<input type="text" date-range-picker="options" ng-model="dummy">')($rootScope);
		$rootScope.$apply();

		expect(element.data('daterangepicker').format).toBe('L');
		expect(element.data('daterangepicker').separator).toBe('/');
	});

	it('passes on ranges from scope to daterangepicker instance', function() {
		$rootScope.ranges = {
			'Today': [moment().startOf('day'), moment()],
			'Yesterday': [moment().subtract(1, 'days').format('YYYY-MM-DD'), moment().subtract(1, 'days').format('YYYY-MM-DD')]
		};
		var element = $compile('<input type="text" date-range-picker="{ranges: ranges}" ng-model="dummy">')($rootScope);

		expect(element.data('daterangepicker').ranges.Today).not.toBeUndefined();
		expect(element.data('daterangepicker').ranges.Today[0].format('YYYY-MM-DD')).toBe(moment().startOf('day').format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').ranges.Today[1].format('YYYY-MM-DD')).toBe(moment().format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').ranges.Yesterday).not.toBeUndefined();
		expect(element.data('daterangepicker').ranges.Yesterday[0].format('YYYY-MM-DD')).toBe(moment().subtract(1, 'days').format('YYYY-MM-DD'));
		expect(element.data('daterangepicker').ranges.Yesterday[1].format('YYYY-MM-DD')).toBe(moment().subtract(1, 'days').format('YYYY-MM-DD'));
	});
});