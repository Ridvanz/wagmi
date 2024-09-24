<!-- SearchSelect.svelte -->
<script lang="ts">
    export let items: any[] = [];
    export let placeholder: string = 'Search...';
    export let selectedItems: any[] = [];
    export let itemKey: (item: any) => any = item => item; // Function to get unique key
    export let itemLabel: (item: any) => string = item => item.toString(); // Function to get display label
  
    let searchQuery = '';
  
    // Reactive statement for filtered items
    $: filteredItems = items.filter(item =>
      itemLabel(item).toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedItems.some(selectedItem => itemKey(selectedItem) === itemKey(item))
    );
  
    function selectItem(item: any) {
      selectedItems = [...selectedItems, item];
      searchQuery = ''; // Clear search input after selection
    }
  
    function removeItem(item: any) {
      selectedItems = selectedItems.filter(t => itemKey(t) !== itemKey(item));
    }
  </script>
  
  <!-- Search and select component container -->
  <div class="flex flex-col h-full border rounded-lg p-4 bg-secondary-300 text-white">
    <!-- Search bar -->
    <input
      type="text"
      {placeholder}
      bind:value={searchQuery}
      aria-label={placeholder}
      class="p-2 mb-4 border-b-2 border-secondary bg-secondary-400  rounded outline-none focus:border-secondary2"
    />
  
    <!-- Available items list -->
    <div class="flex-1 overflow-auto mb-4">
      {#if filteredItems.length === 0}
        <p class="text-secondary1">No items found.</p>
      {/if}
      <ul>
        {#each filteredItems as item}
          <li>
            <button
              class="w-full text-left p-2 mb-2 bg-primary-400 rounded hover:bg-primary-300 transition"
              on:click={() => selectItem(item)}
            >
              {itemLabel(item)}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  
    <!-- Selected items section -->
    <div class="border-t border-primary pt-2 text-black">
      <h3 class="text-secondary3 mb-2">Selected Items:</h3>
      {#if selectedItems.length === 0}
        <p class="text-secondary1">No items selected.</p>
      {/if}
      <ul>
        {#each selectedItems as item}
          <li class="p-2 mb-2 bg-primary rounded flex justify-between items-center">
            <span>{itemLabel(item)}</span>
            <button
              class="bg-secondary text-white rounded p-1 ml-4 hover:bg-secondary3"
              aria-label="Remove {itemLabel(item)}"
              on:click={() => removeItem(item)}
            >
              Remove
            </button>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  
