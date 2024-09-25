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
  <div class="flex flex-col h-full border-secondary-900 rounded-lg p-2 bg-gradient-to-b from-tertiary-900 via-tertiary-800 to-tertiary-900 text-white">
    <!-- Search bar -->
    <input
      type="text"
      {placeholder}
      bind:value={searchQuery}
      aria-label={placeholder}
      class="p-2 mb-4 border-b-2 border-tertiary bg-primary-900  rounded outline-none focus:border-secondary text-white"
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
              class="w-full text-left p-2 mb-2 bg-gradient-to-tr from-tertiary-900 via-secondary-900 to-tertiary-900 rounded hover:bg-primary-300 transition border border-secondary-500"
              on:click={() => selectItem(item)}
            >
              {itemLabel(item)}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  
    <!-- Selected items section -->
    <div class="border-t border-secondary-700 pt-2 text-white">
      <h3 class="text-gray-300 mb-2">Selected Items:</h3>
      {#if selectedItems.length === 0}
        <p class="text-secondary1">No items selected.</p>
      {/if}
      <ul>
        {#each selectedItems as item}
          <li class="p-2 mb-2 bg-gradient-to-tr from-primary-900 to-primary-600 rounded flex justify-between items-center text-gray">
            <span>{itemLabel(item)}</span>
            <button
              class="bg-primary text-black rounded p-1 ml-4 hover:bg-tertiary"
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
  
