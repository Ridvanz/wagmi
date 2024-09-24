<!-- TokenSelector.svelte -->
<script lang="ts">
    import SearchSelect from './SearchSelect.svelte';
  
    let allTokens: string[] = [
      'Bitcoin (BTC)', 'Ethereum (ETH)', 'Cardano (ADA)', 'Binance Coin (BNB)', 'Solana (SOL)', 
      'Polkadot (DOT)', 'Ripple (XRP)', 'Dogecoin (DOGE)', 'Shiba Inu (SHIB)', 'Chainlink (LINK)'
    ]; // Example token list
  
    let selectedTokens: string[] = [];
  </script>
  
  <SearchSelect
    items={allTokens}
    placeholder="Search for a token..."
    bind:selectedItems={selectedTokens}
    itemLabel={token => token}
  />
  