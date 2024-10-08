<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { onMount } from 'svelte';

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

	onMount(
		()=>{
			if(selectedItems.length==0) {
			selectItem(items[0])
		}
		}
	)
</script>

<!-- Search and select component container -->
<div class="flex flex-col h-full flex-1">
	<div class="flex flex-col h-fit flex-1 border w-full border-secondary-300 rounded-xl p-3">
		<!-- Search bar -->
		<Input type="text" {placeholder} bind:value={searchQuery} aria-label={placeholder} />

		<!-- Available items list -->
		<div class="flex-1 mt-2 pr-1 overflow-y-auto max-h-72">
			{#if filteredItems.length === 0}
				<p class="text-secondary1">No items found.</p>
			{/if}
			<ul>
				{#each filteredItems as item}
					<li>
						
						<button
							class="w-full text-sm p-3 py-4 mb-1 hover:bg-primary-300 transition border-b border-secondary-300 flex items-center justify-between"
							on:click={() => selectItem(item)}
						>
							<!-- Left side: Icon and Token Name -->
							<div class="flex items-center gap-3 flex-grow">
								{#if item.icon}
									<svelte:component this={item.icon} class="w-6 h-6 mr-2" />
								{/if}
								{#if item.image}
								<div class="w-6 h-6 rounded-full mr-2 overflow-hidden ">
									<img
										alt="user"
										class="object-cover"
										src={item.image}
									/>
								</div>
								{/if}
								<span >{itemLabel(item).split(' (')[0]}</span>
							</div>

							<!-- Right side: Token Ticker -->
							<span class="ml-2 text-xs">{itemLabel(item).match(/\(([^)]+)\)/)[1]}</span>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- Spacer to push the Selected Items section to the bottom -->
	<div class=" flex-1">
		<h3 class="text-black my-3">Selected Items:</h3>

		<!-- Selected items section -->
		<div
			class="border max-h-56 rounded-xl border-secondary-300 text-tertiary w-full p-3 py-2 overflow-y-auto"
		>
			{#if selectedItems.length === 0}
				<p class="text-tertiary">No items selected.</p>
			{/if}
			<ul>
				{#each selectedItems as item, index}
					<li
						class="p-1 mb-1 text-sm rounded {selectedItems.length !== index + 1
							? 'border-b'
							: ''}  py-3 border-secondary-300 flex justify-between items-center text-gray"
					>
						<div class="flex gap-1 items-center">
	
							{#if item.icon}
									<svelte:component this={item.icon} class="w-6 h-6 mr-2" />
								<!-- <img src={itemIcon(item)} alt="{itemLabel(item)} icon" class="w-6 h-6 mr-2" /> -->
								{/if}
							{#if item.image}
								<div class="w-6 h-6 rounded-full mr-2 overflow-hidden ">
									<img
										alt="user"
										class="object-cover"
										src={item.image}
									/>
								</div>
								{/if}
							<span>{itemLabel(item).split(' (')[0]}</span>

							<span class="ml-2 text-xs">{itemLabel(item).match(/\(([^)]+)\)/)[1]}</span>
						</div>
						<button
							class="bg-primary text-xs text-primary-foreground rounded-lg px-6 py-2 ml-2 hover:bg-tertiary"
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
