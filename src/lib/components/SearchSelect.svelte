<script lang="ts">
  export let placeholder: string = 'Search...';
  export let selectedItems: any[] = [];
  export let fetchData: (query: string) => Promise<any[]>; // Function to fetch data from API
  export let itemKey: (item: any) => any; // Function to get unique key
  export let itemLabel: (item: any) => string; // Function to get display label
  export let itemIcon: (item: any) => string = () => ''; // Optional function to get icon

  let searchQuery = '';
  let items: any[] = []; // Fetched items from API

  let timeoutId;
  const debounceDelay = 300;

  // Debounced API call for search
  async function searchItems(query: string) {
    if (!query) {
      items = []; // Clear items if no query
      return;
    }

    try {
      const result = await fetchData(query); // Use the passed fetchData function
      items = result;
      console.log("Items:", items);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Debounce the search query
  function debounceSearch() {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => searchItems(searchQuery), debounceDelay);
  }

  // Trigger debounce when searchQuery changes
  $: if (searchQuery) debounceSearch();

  // Filter items that aren't already selected
  $: filteredItems = items.filter(
    (item) => !selectedItems.some((selectedItem) => itemKey(selectedItem) === itemKey(item))
  );

  function selectItem(item: any) {
    selectedItems = [...selectedItems, item];
    searchQuery = ''; // Clear search input after selection
  }

  function removeItem(item: any) {
    selectedItems = selectedItems.filter((selected) => itemKey(selected) !== itemKey(item));
  }
</script>

<!-- Search and select component -->
<div class="flex flex-col h-full">
  <!-- Search bar -->
  <div class="w-full px-2">
    <input
      type="text"
      bind:value={searchQuery}
      {placeholder}
      aria-label={placeholder}
      class="w-full mt-2 bg-white rounded-xl outline-none focus:border-primary text-tertiary"
    />
  </div>

  <!-- Available items list -->
  <div class="flex-1 overflow-auto m-2">
    {#if filteredItems.length === 0 && searchQuery}
      <p class="text-secondary1">No items found.</p>
    {:else}
      <ul>
        {#each filteredItems as item (itemKey(item))}
          <li>
            <button
              class="w-full text-left p-2 mb-1 rounded-lg shadow-md hover:bg-primary-300 transition border-b border-secondary-300 flex items-center justify-between"
              on:click={() => selectItem(item)}
            >
              <div class="flex items-center flex-grow">
                {#if itemIcon(item)}
                  <img src={itemIcon(item)} alt="{itemLabel(item)} icon" class="w-6 h-6 mr-2" />
                {/if}
                <span>{itemLabel(item)}</span>
              </div>
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <!-- Selected items list -->
  <div class="mt-auto">
    <h3 class="text-black my-2">Selected Items:</h3>
    <div class="border rounded-xl border-secondary-300 text-tertiary w-full p-4">
      {#if selectedItems.length === 0}
        <p class="text-tertiary">No items selected.</p>
      {:else}
        <ul>
          {#each selectedItems as item (itemKey(item))}
            <li class="p-1 mb-1 rounded flex justify-between items-center text-gray">
              <span class="flex items-center">
                {#if itemIcon(item)}
                  <img src={itemIcon(item)} alt="{itemLabel(item)} icon" class="w-6 h-6 mr-2" />
                {/if}
                <span>{itemLabel(item)}</span>
              </span>
              <button
                class="bg-primary-500 text-black rounded px-6 py-2 ml-2 hover:bg-tertiary"
                on:click={() => removeItem(item)}
              >
                Remove
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>
