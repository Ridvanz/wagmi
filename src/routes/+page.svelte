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
</script>

<!-- <div class="transform origin-center  "> -->

<!-- <div class="grid grid-cols-12 grid-rows-12 place-content-stretch h-screen w-screen"> -->
<div class="flex flex-col gap-4 h-screen w-screen max-w-screen content-stretch bg-white">
	<!-- Navbar (Full width) -->
	<header class="bg-black">
		<Navbar />
	</header>

	<!-- Token Searcher (Left side) -->
	<div class="flex flex-col lg:flex-row h-screen min-h-40 gap-4">
		<div class="flex flex-col gap-4">
			<!-- <div class="flex flex-col"> -->
			<div class="rounded-xl ml-4 shadow-secondary-500/50">
				<TokenSelector />
			</div>

			<!-- Crypto Stats (Left side, below Token Searcher) -->
			<section
				class=" rounded-xl ml-4 overflow-y-auto border-primary shadow-sm shadow-secondary-500/50 bg-blue-500"
			>
				<TokenStats />
			</section>
		</div>

		<div class="flex flex-col">
			<!-- Main Chart (Center) -->
			<main class="rounded-xl shadow-sm shadow-secondary-500/50">
				<Chart />
			</main>

			<!-- Data Table (Center, below Main Chart) -->
			<section class="rounded-xl shadow-sm shadow-secondary-500/50 bg-green-500">
				<!-- <Table /> -->

				<TweetsTable tweets={tweetsData} />

				<!-- <Carousel /> -->
			</section>
		</div>

		<!-- Searcher (Right side) -->
		<div class="flex flex-col">
			<aside class=" rounded-xl mr-4 shadow-secondary-500/50 bg-red-500">
				<UserSelector />
			</aside>

			<!-- Twitter Post (Right side, below Searcher) -->
			<section
				class="crounded-xl mr-4 overflow-y-auto border-primary shadow-sm shadow-secondary-500/50"
			>
				<UserStats />
			</section>
		</div>
	</div>

	<!-- Footer (Full width) -->
	<footer
		class="col-start-1 col-end-13 row-start-auto row-end-auto self-end lg from-tertiary-200 via-tertiary-100 to-tertiary-200 border-primary shadow-sm shadow-secondary-500/50"
	>
		<div class="">
			<Footer />
			<div></div>
		</div>
	</footer>
</div>

<!-- </div> -->
