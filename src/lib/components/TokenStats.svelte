<script>
    import TokenStatCard from './StatCard.svelte';

    let token = {
        name: "Ethereum",
        symbol: "ETH",
        price: "$3,200",
        market_cap: "$380B",
        circulating_supply: "117.8M",
        volume_24h: "$14.2B",
        change_24h: "-2.45%",
        all_time_high: "$4,356",
        rank: 2,
        dominance: "18.5%"
    };
</script>

<div class="flex flex-wrap gap-2 p-2 bg-gradient-to-b from-tertiary-100 to-tertiary-200 rounded-lg w-full  h-full">
    <TokenStatCard label="Token Name" value={token.name} />
    <TokenStatCard label="Symbol" value={token.symbol} />
    <TokenStatCard label="Price" value={token.price}  />
    <TokenStatCard label="Market Cap" value={token.market_cap}  />
    <TokenStatCard label="Circulating Supply" value={token.circulating_supply} />
    <TokenStatCard label="24h Volume" value={token.volume_24h}  />
    <TokenStatCard label="24h Change" value={token.change_24h}  />
    <TokenStatCard label="All Time High" value={token.all_time_high} />
    <TokenStatCard label="Rank" value={token.rank} />
    <TokenStatCard label="Dominance" value={token.dominance} />
</div>
