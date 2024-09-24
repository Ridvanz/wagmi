<!-- import from table.svelte -->
<script>
import Table from "$lib/components/Table.svelte";
import Footer from '$lib/components/Footer.svelte';
import Navbar from '$lib/components/Navbar.svelte';
import Carousel from "$lib/components/Carousel.svelte";
import TweetCarousel from "$lib/components/TweetCarousel.svelte";
import Tweet from "$lib/components/Tweet.svelte";
import Search from "$lib/components/Search.svelte";
import TokenSelector from "$lib/components/TokenSelector.svelte";
import UserSelector from "$lib/components/UserSelector.svelte";
</script>

<!-- <div class="transform origin-center  "> -->

    <!-- <div class="grid grid-cols-12 grid-rows-12 place-content-stretch h-screen w-screen"> -->
        <div class="grid grid-cols-12 grid-rows-12 gap-1 pl-2 pr-2 h-screen w-screen max-h-screen max-w-screen bg-gradient-to-b from-primary-300 to-secondary-500 ">
  
            <!-- Navbar (Full width) -->
            <header class="col-start-1 col-end-13 row-start-1 row-end-1 bg-yellow-100 lg">
              <Navbar />
            </header>
          
            <!-- Token Searcher (Left side) -->
            <aside class="col-start-1 col-end-3 row-start-2 row-end-8 bg-gradient-to-b from-primary-300 to-tertiary-200 p-4 rounded-lg shadow-lg">
              <UserSelector />
              
            </aside>
          
            <!-- Crypto Stats (Left side, below Token Searcher) -->
            <section class="col-start-1 col-end-3 row-start-8 row-end-12 bg-gradient-to-b from-primary-300 to-tertiary-200 p-4 rounded-lg shadow-lg ">
              <!-- <CryptoStats /> -->
            </section>
          
            <!-- Searcher (Right side) -->
            <aside class="col-start-11 col-end-13 row-start-2 row-end-8 bg-gradient-to-b from-primary-300 to-tertiary-200 p-4 rounded-lg shadow-lg">
              <TokenSelector />

            </aside>
          
            <!-- Twitter Post (Right side, below Searcher) -->
            <section class="col-start-11 col-end-13 row-start-8 row-end-12 bg-gradient-to-t from-primary-300 to-tertiary-200 p-4 rounded-lg shadow-lg overflow-y-auto">
            </section>
          
            <!-- Main Chart (Center) -->
            <main class="col-span-8 row-span-6 bg-white p-4 rounded-lg shadow-lg flex items-stretch justify-stretch">
              <!-- <Highchart /> -->

            </main>
          
            <!-- Data Table (Center, below Main Chart) -->
            <section class="col-span-8 row-span-4 bg-gradient-to-t from-primary-300 to-tertiary-200 p-2 rounded-lg shadow-lg bg-primary-500">
              <Table />
               
              <!-- <Carousel /> -->
            </section>
          
            <!-- Footer (Full width) -->
            <footer class="col-start-1 col-end-13 row-start-auto row-end-auto self-end lg">
                <div class="">
              <Footer />              
              <div>
            </footer>
          
          </div>
          
<!-- </div> -->