import './main.scss'

// site - https://app.exchangerate-api.com/
// Your API Key: e61c827ba73d14a6e8d34006
// Full Request URL: https://v6.exchangerate-api.com/v6/e61c827ba73d14a6e8d34006/latest/${currencyFirstEl.value}



const currencyFirstEl = document.getElementById( 'currency-first' );
const worthFirstEl = document.getElementById( 'worth-first' );

const currencySecondEl = document.getElementById( 'currency-second' );
const worthSecondEl = document.getElementById( 'worth-second' );

const exchangeRateEl = document.getElementById( 'exchange-rate' );


function updateRate() {
	fetch( `https://v6.exchangerate-api.com/v6/e61c827ba73d14a6e8d34006/latest/${currencyFirstEl.value}` )
		.then( ( response ) => response.json() )
		.then( ( data ) => {
			const rate = data.conversion_rates[ currencySecondEl.value ];
			exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;

			worthSecondEl.value = ( worthFirstEl.value * rate ).toFixed( 2 );
		} )
}


currencyFirstEl.addEventListener( 'change', updateRate );
currencySecondEl.addEventListener( 'change', updateRate );
worthFirstEl.addEventListener( 'input', updateRate );
worthSecondEl.addEventListener( 'input', updateRate );