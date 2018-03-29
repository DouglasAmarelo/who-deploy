(function( wind, doc ){
	'use strict';

	var lotteryItems = [
		'Douglas H.',
		'Guilherme H.',
		'Pedro H.',
		'Lucas H.',
		'Gabriel H.',
		'Matheus H.',
		'Wandreus H.',
		'Fábio H.',
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

})( window, document );
