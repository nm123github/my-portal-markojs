

var myButton = require('../../components/fe/my-button')
	.renderSync({buttonName: 'Load async name validator'})
	.appendTo(document.getElementById('my-client-button')) // change so that we can continue to use the sticky header without the transform issue (SRP non-breaking)
	.getComponent();
