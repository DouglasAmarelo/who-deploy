var lotteryItems = [
	'Douglão',
	'Fumaça',
	'Pedin',
	'Mucilon',
	'Pelu',
	'Matheus',
	'Xampson',
];
var $containerList = document.querySelector('.list-container');
var $list          = $containerList.querySelector('.list');
var listItemTxt    = lotteryItems[ Math.floor( Math.random() * lotteryItems.length ) ];

lotteryItems.map(function( item ) {
	var li = document.createElement('li');
	li.textContent = item;

	$list.appendChild( li );
});

setTimeout(function() {
	$containerList.innerHTML = '<p class="list-item"><span>' + listItemTxt + '</span></p>';
}, 2000);