<!-- TwitterUserSelector.svelte -->
<script lang="ts">
    import SearchSelect from './SearchSelect.svelte';
  
      let allUsers = [
    { name: 'CZ Binance', handle: '@cz_binance' },          // CEO of Binance
    { name: 'Vitalik Buterin', handle: '@VitalikButerin' },  // Co-founder of Ethereum
    { name: 'PlanB', handle: '@100trillionUSD' },            // Bitcoin analyst, Stock-to-Flow model
    { name: 'Michael Saylor', handle: '@saylor' },           // CEO of MicroStrategy, Bitcoin proponent
    { name: 'Tyler Winklevoss', handle: '@tyler' },          // Co-founder of Gemini, Bitcoin investor
    { name: 'Anthony Pompliano', handle: '@APompliano' },     // Crypto investor, podcast host
    { name: 'Willy Woo', handle: '@woonomic' },              // On-chain Bitcoin analyst
    { name: 'Peter McCormack', handle: '@PeterMcCormack' },   // Host of "What Bitcoin Did" podcast
    { name: 'Raoul Pal', handle: '@RaoulGMI' },              // Founder of Real Vision, macro investor
    { name: 'SBF', handle: '@SBF_FTX' },                     // Founder of FTX exchange
    // Add more crypto KOLs as needed
  ];

    let selectedUsers = [];
  
    // Function to get display label for each user
    const userLabel = (user) => `${user.name} (${user.handle})`;
  
    // Function to get a unique key for each user
    const userKey = (user) => user.handle;
  </script>
  
  <SearchSelect
    items={allUsers}
    placeholder="Search for a User..."
    bind:selectedItems={selectedUsers}
    itemLabel={userLabel}
    itemKey={userKey}
  />
  