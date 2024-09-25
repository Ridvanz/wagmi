<script lang="ts">
    let searchQuery = '';
    let allTokens: string[] = [
      'Bitcoin (BTC)', 'Ethereum (ETH)', 'Cardano (ADA)', 'Binance Coin (BNB)', 'Solana (SOL)', 
      'Polkadot (DOT)', 'Ripple (XRP)', 'Dogecoin (DOGE)', 'Shiba Inu (SHIB)', 'Chainlink (LINK)'
    ]; // Example token list
    let selectedTokens: string[] = [];
  
    // Reactive statement for filtered tokens
    $: filteredTokens = allTokens.filter(token =>
      token.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedTokens.includes(token)
    );
  
    function selectToken(token: string) {
      selectedTokens = [...selectedTokens, token];
      searchQuery = ''; // Clear search input after selection
    }
  
    function removeToken(token: string) {
      selectedTokens = selectedTokens.filter(t => t !== token);
    }
  </script>
  
  <!-- Search and select component container -->
  <div class="flex flex-col h-full border rounded-lg p-4 bg-tertiary text-white">
    <!-- Search bar -->
    <input
      type="text"
      placeholder="Search for a token..."
      bind:value={searchQuery}
      aria-label="Search for a token"
      class="p-2 mb-4 border-b-2 border-primary bg-secondary text-white rounded outline-none focus:border-secondary2"
    />
  
    <!-- Available tokens list -->
    <div class="flex-1 overflow-auto mb-4">
      {#if filteredTokens.length === 0}
        <p class="text-secondary1">No tokens found.</p>
      {/if}
      <ul>
        {#each filteredTokens as token}
          <li>
            <button
              class="w-full text-left p-2 mb-2 bg-secondary rounded hover:bg-primary transition"
              on:click={() => selectToken(token)}
            >
              {token}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  
    <!-- Selected tokens section -->
    <div class="border-t border-primary pt-2">
      <h3 class="text-tertiary mb-2">Selected Tokens:</h3>
      {#if selectedTokens.length === 0}
        <p class="text-secondary1">No tokens selected.</p>
      {/if}
      <ul>
        {#each selectedTokens as token}
          <li class="p-2 mb-2 bg-primary rounded flex justify-between items-center">
            <span>{token}</span>
            <button
              class="bg-secondary text-white rounded p-1 ml-4 hover:bg-tertiary"
              aria-label="Remove {token}"
              on:click={() => removeToken(token)}
            >
              Remove
            </button>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  
  <style>
    .flex-1 {
      max-height: 200px; /* Adjustable height for scrolling */
    }
  </style>
  