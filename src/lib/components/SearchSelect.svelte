<script lang="ts">
  export let items: any[] = [];
  export let placeholder: string = 'Search...';
  export let selectedItems: any[] = [];
  export let itemKey: (item: any) => any = (item) => item; // Function to get unique key
  export let itemLabel: (item: any) => string = (item) => item.toString(); // Function to get display label
  export let itemIcon: (item: any) => string = (item) => ''; // Function to get icon

  let searchQuery = '';

  // Reactive statement for filtered items
  $: filteredItems = items.filter(
    (item) =>
      itemLabel(item).toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedItems.some((selectedItem) => itemKey(selectedItem) === itemKey(item))
  );

  function selectItem(item: any) {
    selectedItems = [...selectedItems, item];
    searchQuery = ''; // Clear search input after selection
  }

  function removeItem(item: any) {
    selectedItems = selectedItems.filter((t) => itemKey(t) !== itemKey(item));
  }
</script>

<!-- Search and select component container -->
<div class="flex flex-col h-full">
  <div class="flex flex-col flex-grow border w-full border-secondary-300 rounded-xl">
    <!-- Search bar -->
    <div class="w-full px-2">
      <input
        type="text"
        {placeholder}
        bind:value={searchQuery}
        aria-label={placeholder}
        class="w-full mt-2 bg-white rounded-xl outline-none focus:border-primary text-tertiary"
      />
    </div>

<!-- Available items list -->
<div class="flex-1 overflow-auto m-2">
  {#if filteredItems.length === 0}
    <p class="text-secondary1">No items found.</p>
  {/if}
  <ul>
    {#each filteredItems as item}
      <li>
        <button
          class="w-full text-left p-2 mb-1 rounded-lg shadow-md hover:bg-primary-300 transition border-b border-secondary-300 flex items-center justify-between"
          on:click={() => selectItem(item)}
        >
          <!-- Left side: Icon and Token Name -->
          <div class="flex items-center flex-grow">
            {#if itemIcon(item)}
              <img src={itemIcon(item)} alt="{itemLabel(item)} icon" class="w-6 h-6 mr-2" />
            {/if}
            <span>{itemLabel(item).split(' (')[0]}</span>
          </div>
          
          <!-- Right side: Token Ticker -->
          {#if itemLabel(item)?.match(/\(([^)]+)\)/)}
            <span class="ml-2">{itemLabel(item)?.match(/\(([^)]+)\)/)?.[1]}</span>
          {/if}
        </button>
      </li>
    {/each}
  </ul>
</div>

  </div>

  <!-- Spacer to push the Selected Items section to the bottom -->
  <div class="mt-auto">
    <h3 class="text-black my-2">Selected Items:</h3>

    <!-- Selected items section -->
    <div class="border rounded-xl border-secondary-300 text-tertiary w-full p-4">
      {#if selectedItems.length === 0}
        <p class="text-tertiary">No items selected.</p>
      {/if}
      <ul>
        {#each selectedItems as item}
          <li
            class="p-1 mb-1  rounded flex justify-between items-center text-gray"
          >
            <span class="flex items-center">
              {#if itemIcon(item)}
                <img src={itemIcon(item)} alt="{itemLabel(item)} icon" class="w-6 h-6 mr-2" />
              {/if}
              <span>{itemLabel(item).split(' (')[0]}</span>
            </span>
            <button
<<<<<<< HEAD
              class="bg-primary-500 text-black rounded px-6 py-2 ml-2  hover:bg-tertiary"
=======
              class="bg-primary-500 text-black rounded px-6 py-2 ml-2 text-white hover:bg-tertiary"
>>>>>>> c6cf759 (new)
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
</div>
