<script>
	import StatBox from './StatBox.svelte';
	import TokenStatCard from './StatCard.svelte';

	let token = {
		name: 'Ethereum',
		symbol: 'ETH',
		price: '$3,200',
		market_cap: '$380 B',
		circulating_supply: '117.8 M',
		volume_24h: '$14.2 B',
		change_24h: '-2.45%',
		all_time_high: '$4,356',
		rank: 2,
		dominance: '18.5%'
	};
</script>

<div class="flex-1">
	<div class="flex flex-col rounded-lg border">
		<div class="flex font-medium flex-col py-5 gap-3 p-4 px-6">
			<img
				class="w-8 h-8 mr-2"
				src="https://static-00.iconduck.com/assets.00/ethereum-cryptocurrency-icon-512x512-u1g6py59.png"
			/>
			{token.name} ({token.symbol})
		</div>
		<hr />
		<div class="flex text-sm flex-row">
			<div class="flex flex-1 flex-col">
				<StatBox label="Price" value={token.price} />
				<StatBox label="Circulating Vol" value={token.circulating_supply} variant="2" />
				<StatBox label="24h Change" value={token.change_24h} />
				<StatBox label="24h Volume" value={token.volume_24h} variant="2" />
			</div>
			<div class="flex flex-1 border-l flex-col">
				<StatBox label="Market Cap" value={token.market_cap} />
				<StatBox label="All Time High" value={token.all_time_high} variant="2" />
				<StatBox label="Rank" value={token.rank} />
				<StatBox label="Dominance" value={token.dominance} variant="2" />
			</div>
		</div>
	</div>
</div>

