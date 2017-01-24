<h1>Angular In-Place-Confirm Button</h1>
Poping up an alert window is the most popular way to confirm a button action, which is anoying sometimes. This idea for In-Place-Confirm Button is to get rid of space wasting and get clearer vision to confirm an action.

Usage: <br />
```
angular.module('myApp', ['ngInPlaceConfirmBtn'])
```

```
<ng-in-place-confirm-btn option="option" submit="submit"></ng-in-place-confirm-btn>
```

```
$scope.option = 
{
    name: 'My IPC Button',
    hasInputBox: true,
    placeholder: '(required) This is placeholder',
    tooltip: 'This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip',
    tooltipDirection: 'right',
    inputBoxName: 'myInput',
    inputRequired: true
};
```