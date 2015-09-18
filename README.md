# angular-daterangepicker

Angular directive for Dan Grossman's [bootstrap-daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker).

Demo: http://tb.github.io/angular-daterangepicker/example

## Installation

Using bower:
```
bower install tb-angular-daterangepicker
```

## How to use it

You should already have a bunch of scripts and CSS required for angular-daterangepicker:

CSS:
```html
<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="daterangepicker-bs3.css">
```

JavaScript:
```html
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>
<script src="moment.min.js"></script>
<script src="daterangepicker.js"></script>
<script src="angular.min.js"></script>
```

to the list above, you should add:

```html
<script src="angular-daterangepicker.js"></script>
```

Then, inject `daterangepicker` in your application module:

```js
angular.module('myApp', ['daterangepicker']);
```

Controller:

```js
$scope.options = {
  locale: {...},
  ranges: {...},
	separator: '/'
}
```

Template:

```html
<input type="text" daterangepicker="options" ng-model="myDateRange" />
```

### Build

You can run the tests by running:
```
npm install
bower install
grunt
```

assuming you already have `grunt` installed, otherwise you also need to do:
```
npm install -g grunt-cli
```