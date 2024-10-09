<!-- TwitterUserSelector.svelte -->
<script lang="ts">
	import { image1, image2 } from '$lib/images/mock-images';
    import SearchSelect from './SearchSelect.svelte';
  
      let allUsers = [
    {image: image1 ,name: 'CZ Binance', handle: '@cz_binance' },          // CEO of Binance
    {image: image2 , name: 'Vitalik Buterin', handle: '@VitalikButerin' },  // Co-founder of Ethereum
    {image: image1 , name: 'PlanB', handle: '@100trillionUSD' },            // Bitcoin analyst, Stock-to-Flow model
    {image: image2 , name: 'Michael Saylor', handle: '@saylor' },           // CEO of MicroStrategy, Bitcoin proponent
    {image: image2 , name: 'Tyler Winklevoss', handle: '@tyler' },          // Co-founder of Gemini, Bitcoin investor
    {image: image2 , name: 'Anthony Pompliano', handle: '@APompliano' },     // Crypto investor, podcast host
    {image: image1 , name: 'Willy Woo', handle: '@woonomic' },              // On-chain Bitcoin analyst
    {image: image1 , name: 'Peter McCormack', handle: '@PeterMcCormack' },   // Host of "What Bitcoin Did" podcast
    {image: image2 , name: 'Raoul Pal', handle: '@RaoulGMI' },              // Founder of Real Vision, macro investor
    {image: image1 , name: 'SBF', handle: '@SBF_FTX' },                     // Founder of FTX exchange
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
    type="user"
    bind:selectedItems={selectedUsers}
    itemLabel={userLabel}
    itemKey={userKey}
  />
  