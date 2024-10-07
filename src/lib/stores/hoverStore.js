// import { writable } from 'svelte/store';

// // Store to manage hover state
// const hoverStore = writable(false);
// export default hoverStore;

// hoverStore.subscribe((value) => {
// 	console.log(value);
// }); // logs '0'

// hoverStore.set(true); // logs '1'

// hoverStore.update((n) => !n); // logs '2'

import { writable } from 'svelte/store';

export const hoveredIndex = writable(null); // Initialize with a value of 0
