(function( doc ){
	'use strict';

	function app() {
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
		var $containerList = doc.querySelector('.list-container');
		var $list = $containerList.querySelector('.list');
		var listItemTxt = lotteryItems[ Math.floor( Math.random() * lotteryItems.length ) ];
		var $music = doc.querySelector('.music');
		var self = this;

		return {
			init: function() {
				this.startMusic();
				this.startLOttery()

				setTimeout(this.updateList, 10300);
				setTimeout(this.stopMusic, 15800);
			},

			startMusic: function() {
				$music.setAttribute('autoplay', true );
			},

			stopMusic: function() {
				$music.src = ' ';
			},

			startLOttery: function() {
				lotteryItems.map(function( item ) {
					var li = doc.createElement('li');
					li.textContent = item;

					$list.appendChild( li );
				});
			},

			updateList: function() {
				$containerList.innerHTML = '<p class="list-item"><span>' + listItemTxt + '</span></p>';
			}
		}
	}

	app().init();

})( document );
