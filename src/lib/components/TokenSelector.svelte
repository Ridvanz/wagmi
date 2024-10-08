<script lang="ts">
	import SearchSelect from './SearchSelect.svelte';
	import Ethereum from './icons/Ethereum.svelte';
	import Cardano from './icons/Cardano.svelte';
	import Binance from './icons/Binance.svelte';
	import Polkadot from './icons/Polkadot.svelte';
	import Solana from './icons/Solana.svelte';
	import Ripple from './icons/Ripple.svelte';
	import Bitcoin from './icons/Bitcoin.svelte';
	import Chainlink from './icons/Chainlink.svelte';

	// let allTokens: string[] = [
	// 	'Bitcoin (BTC)',
	// 	'Ethereum (ETH)',
	// 	'Cardano (ADA)',
	// 	'Binance Coin (BNB)',
	// 	'Solana (SOL)',
	// 	'Polkadot (DOT)',
	// 	'Ripple (XRP)',
	// 	'Dogecoin (DOGE)',
	// 	'Shiba Inu (SHIB)',
	// 	'Chainlink (LINK)'
	// ];

	let allTokens = [
		{icon: Ethereum, label: 'Ethereum (ETH)'},
		{icon: Bitcoin, label: 'Bitcoin (BTC)'},
		{icon: Cardano, label: 'Cardano (ADA)'},
		{icon: Binance, label: 'Binance Coin (BNB)'},
		{icon: Solana, label: 'Solana (SOL)'},
		{icon: Polkadot, label: 'Polkadot (DOT)'},
		{icon: Ripple, label: 'Ripple (XRP)'},
		{icon: Chainlink, label: 'Chainlink (LINK)'},

	]

	let tokenIcons = {
		'Bitcoin (BTC)':
			'https://static-00.iconduck.com/assets.00/bitcoin-cryptocurrency-icon-256x256-cxuyjtwk.png',
		'Ethereum (ETH)':
			'https://static-00.iconduck.com/assets.00/ethereum-cryptocurrency-icon-512x512-u1g6py59.png',
		'Cardano (ADA)':
			'https://static-00.iconduck.com/assets.00/cardano-cryptocurrency-icon-512x512-x99hiphg.png',
		'Binance Coin (BNB)':
			'https://static-00.iconduck.com/assets.00/binance-coin-cryptocurrency-icon-512x512-aacfkhah.png',
		'Solana (SOL)': 'https://static-00.iconduck.com/assets.00/solana-sol-icon-512x483-w6lob3zd.png',
		'Polkadot (DOT)':
			'https://static-00.iconduck.com/assets.00/polkadot-cryptocurrency-icon-512x508-0s30anez.png',
		'Ripple (XRP)': 'https://static-00.iconduck.com/assets.00/ripple-icon-474x512-ijy3q110.png',
		'Dogecoin (DOGE)':
			'https://static-00.iconduck.com/assets.00/dogecoin-cryptocurrency-icon-512x512-z7jjg89f.png',
		'Shiba Inu (SHIB)': 'https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=035',
		'Chainlink (LINK)': 'https://cryptologos.cc/logos/chainlink-link-logo.svg?v=035'
	};

	let selectedTokens: string[] = [];

	function getTokenIcon(token) {
		return tokenIcons[token] || '';
	}
</script>

<SearchSelect
	items={allTokens}
	placeholder="Search for a token"
	bind:selectedItems={selectedTokens}
	itemLabel={(token) => token.label}
	itemIcon={getTokenIcon}
/>
