<!-- <script>
    import { hoverStore } from '$lib/stores/hoverStore.js';

    function enter() {
        hoverStore.set(true);
    }

    function leave() {
        hoverStore.set(false);
    }
</script>

<div 
    role="button"  
    tabindex="0"  
    on:mouseenter={enter} 
    on:mouseleave={leave}>
    Hover over me!
</div>
 -->
<!-- <script>
	import {hoveredIndex} from '$lib/stores/hoverStore.js';

	function increment() {
		hoveredIndex.update((n) => n + 1);
	}

	function decrement() {
		hoveredIndex.update((n) => n - 1);
	}
</script>

<div class="h-full w-full w-full bg-primary-500 text-black rounded px-6 py-2 hover:bg-tertiary">
	<button on:click={increment} class="">+</button>
	<p>{$hoveredIndex}</p>
	<button on:click={decrement}>-</button>
</div> -->

<script lang="ts">
    let items: any[] = []; // This will store the fetched data
  
    // Fetch data from the API with a hardcoded query
    async function fetchData() {
      const searchQuery = "bitcoin"; // Hardcoded search query
  
      try {
        const response = await fetch(`http://127.0.0.1:8000/crypto_token/?name=${encodeURIComponent(searchQuery)}`);
        
        if (response.ok) {
          const data = await response.json(); // Parse response as JSON
          items = data; // Assign fetched data to `items`
          console.log("Data fetched:", items); // Debugging log
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  </script>
  
  <!-- Button to trigger the fetch -->
  <button on:click={fetchData} class="p-2 bg-blue-500 text-white rounded">Fetch Data</button>
  
  <!-- Display the fetched data -->
  {#if items.length > 0}
    <ul>
      {#each items as item}
        <li>
          <strong>{item.name}</strong> ({item.symbol})
          <img src={item.icon} alt={item.name} class="w-6 h-6" />
          <p>Contract Address: {item.contract_address}</p>
          <p>Market Cap: {item.market_cap}</p>
          <p>Total Supply: {item.total_supply}</p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No items fetched yet. Press the button to fetch data.</p>
  {/if}
  