<script>
  // import { onMount } from 'svelte';
  import "../app.postcss"; // Assuming this is for your global styles

  // onMount(() => {
  //   // Check if there's already a user preference for dark mode in localStorage
  //   const userPref = localStorage.getItem('theme');
  
  //   if (userPref === 'dark' || (!userPref && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //     document.documentElement.classList.add('dark'); // Adds the 'dark' class to HTML
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // });
</script>

<slot />
