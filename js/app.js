(function( doc ){
	'use strict';

	function app() {
		let lotteryItems = [
			'Douglas H.',
			'Guilherme H.',
			'Pedro H.',
			'Lucas H.',
			'Gabriel H.',
			'Matheus H.',
			'Wandreus H.',
			'Fábio H.',
		];

		let stores = [
			'Compra Certa\n(Corp e Colab)',
			'Brastemp\n(PF e PJ)',
			'Consul\n(PF e PJ)',
			'Direto na Loja'
		];

		let $mainList    = doc.querySelector('.list-container');
		let $list        = $mainList.querySelector('.list');
		let listItemTxt  = lotteryItems[ Math.floor( Math.random() * lotteryItems.length ) ];
		let storeItemTxt = stores[ Math.floor( Math.random() * stores.length ) ];
		let $music       = doc.querySelector('.music');
		let self         = this;

		return {
			init: function() {
				if ( $music !== null ) {
					this.startMusic();
					setTimeout( this.stopMusic, 15800 );
				}

				this.startLOttery()
				setTimeout( this.updateList, 10300 );
			},

			startMusic: function() {
				$music.setAttribute('autoplay', true );
			},

			stopMusic: function() {
				$music.src = ' ';
			},

			startLOttery: function() {
				lotteryItems.map(function( item ) {
					let li = doc.createElement('li');
					li.textContent = item;

					$list.appendChild( li );
				});
			},

			updateList: function() {
				$mainList.innerHTML = `
					<p class="list-item">
						<span>
							${listItemTxt} [<small>${storeItemTxt}</small>]
						</span>
					</p>`;
			}
		}
	}

	app().init();

})( document );
