<!-- import from table.svelte -->
<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import TweetCarousel from '$lib/components/TweetCarousel.svelte';
	import Tweet from '$lib/components/Tweet.svelte';
	import TokenSelector from '$lib/components/TokenSelector.svelte';
	import UserSelector from '$lib/components/UserSelector.svelte';
	import TweetsTable from '$lib/components/TweetsTable.svelte';
	import { tweetsData } from '$lib/data/TweetsData.js';
	import UserStats from '$lib/components/UserStats.svelte';
	import TokenStats from '$lib/components/TokenStats.svelte';
	import Chart from '$lib/components/Chart.svelte';
	import { hoveredIndex } from '$lib/stores/hoverStore';


</script>

<!-- <div class="transform origin-center  "> -->

<!-- <div class="grid grid-cols-12 grid-rows-12 place-content-stretch h-screen w-screen"> -->
<div
	class="grid grid-cols-12 grid-rows-12 gap-4  h-screen w-screen max-h-screen max-w-screen content-stretch bg-white"
>
	<!-- Navbar (Full width) -->
	<header
		class="col-start-1 col-end-13 row-start-1 row-end-1  h-full   bg-black "
	>
	
		<Navbar />

	</header>

	<!-- Token Searcher (Left side) -->
	<aside
		class="col-start-1 col-end-3 row-start-2 row-end-8 rounded-xl ml-4  shadow-secondary-500/50"
	>
{$hoveredIndex}
		<TokenSelector />
	</aside>

	<!-- Crypto Stats (Left side, below Token Searcher) -->
	<section
		class="col-start-1 col-end-3 row-start-8 row-end-12  rounded-xl ml-4  overflow-y-auto border-primary shadow-sm shadow-secondary-500/50"
	>
	
		<TokenStats />
	</section>

	<!-- Searcher (Right side) -->
	<aside
		class="col-start-11 col-end-13 row-start-2 row-end-8   rounded-xl mr-4  shadow-secondary-500/50"
	>
		<UserSelector />
	</aside>

	<!-- Twitter Post (Right side, below Searcher) -->
	<section
		class="col-start-11 col-end-13 row-start-8 row-end-12 rounded-xl mr-4 overflow-y-auto border-primary shadow-sm shadow-secondary-500/50"
	>
		<UserStats />
	</section>

	<!-- Main Chart (Center) -->
	<main
		class="col-span-8 row-span-6 rounded-xl    shadow-sm shadow-secondary-500/50"
	>
		<Chart />
	</main>

	<!-- Data Table (Center, below Main Chart) -->
	<section
		class="col-span-8 row-span-4 rounded-xl   shadow-sm shadow-secondary-500/50"
	>
		<!-- <Table /> -->

		<TweetsTable tweets={tweetsData} />

		<!-- <Carousel /> -->
	</section>

	<!-- Footer (Full width) -->
	<footer class="col-start-1 col-end-13 row-start-auto row-end-auto self-end lg from-tertiary-200 via-tertiary-100 to-tertiary-200 border-primary shadow-sm shadow-secondary-500/50">
		<div class="">

			<Footer />
			<div></div>
		</div>
	</footer>
</div>

<!-- </div> -->
