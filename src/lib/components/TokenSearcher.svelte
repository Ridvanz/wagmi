<script lang="ts">
    import { onMount } from 'svelte';
    
    let searchQuery = '';
    let allTokens = [
      'Bitcoin (BTC)', 'Ethereum (ETH)', 'Cardano (ADA)', 'Binance Coin (BNB)', 'Solana (SOL)', 
      'Polkadot (DOT)', 'Ripple (XRP)', 'Dogecoin (DOGE)', 'Shiba Inu (SHIB)', 'Chainlink (LINK)'
    ]; // Example token list
    let filteredTokens = [...allTokens];
    let selectedTokens: string[] = [];
  
    // Filter tokens based on search query
    function filterTokens() {
      filteredTokens = allTokens.filter(token =>
        token.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedTokens.includes(token)
      );
    }
  
    // Handle selecting a token
    function selectToken(token: string) {
      selectedTokens = [...selectedTokens, token];
      filterTokens(); // Update filtered tokens list after selection
    }
  
    // Handle removing a token from the selected section
    function removeToken(token: string) {
      selectedTokens = selectedTokens.filter(t => t !== token);
      filterTokens(); // Update filtered tokens list after removal
    }
  
    // Initially filter tokens (before search)
    onMount(() => {
      filterTokens();
    });
  </script>
  
  <!-- Search and select component container -->
  <div class="flex flex-col h-full border rounded-lg p-4 bg-gray-900 text-white">
    <!-- Search bar -->
    <input
      type="text"
      placeholder="Search for a token..."
      bind:value={searchQuery}
      on:input={filterTokens}
      class="p-2 mb-4 border-b-2 border-orange-500 bg-gray-800 text-white rounded outline-none focus:border-orange-300"
    />
  
    <!-- Available tokens list -->
    <div class="flex-1 overflow-auto mb-4">
      {#if filteredTokens.length === 0}
        <p class="text-gray-400">No tokens found.</p>
      {/if}
      <ul>
        {#each filteredTokens as token}
          <li
            class="p-2 mb-2 bg-gray-700 rounded cursor-pointer hover:bg-orange-500 transition"
            on:click={() => selectToken(token)}
          >
            {token}
          </li>
        {/each}
      </ul>
    </div>
  
    <!-- Selected tokens section -->
    <div class="border-t border-orange-500 pt-2">
      <h3 class="text-orange-400 mb-2">Selected Tokens:</h3>
      {#if selectedTokens.length === 0}
        <p class="text-gray-400">No tokens selected.</p>
      {/if}
      <ul>
        {#each selectedTokens as token}
          <li class="p-2 mb-2 bg-orange-600 rounded flex justify-between items-center">
            <span>{token}</span>
            <button
              class="bg-orange-800 text-white rounded p-1 ml-4 hover:bg-orange-500"
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
  