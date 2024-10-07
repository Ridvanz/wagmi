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
<script>
	import { count } from '$lib/stores/hoverStore.js';

	function increment() {
		count.update((n) => n + 1);
	}

	function decrement() {
		count.update((n) => n - 1);
	}
</script>

<div class="h-full w-full">
	<button on:click={increment} class="w-full bg-primary-500 text-black rounded px-6 py-2 hover:bg-tertiary">+</button>
	<p>{$count}</p>
	<button on:click={decrement}>-</button>
</div>
