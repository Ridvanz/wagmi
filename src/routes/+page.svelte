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
<div class="flex flex-col w-screen max-w-screen">
	<!-- Navbar (Full width) -->
	<div class="h-screen flex flex-col w-screen">
		<header class="bg-black">
			<Navbar />
		</header>

		<!-- Token Searcher (Left side) -->
		<div class="flex flex-col lg:flex-row min-h-40 gap-6 p-4 w-screen">
			<div class="flex flex-[2] flex-col gap-4">
				<!-- <div class="flex flex-col"> -->
				<TokenSelector />
				<TokenStats />
			</div>

			<div class="flex flex-[5] flex-col h-full">
				<Chart />
				<TweetsTable tweets={tweetsData} />
			</div>

			<!-- Searcher (Right side) -->
			<div class="flex flex-[2] gap-4 flex-col">
				<UserSelector />
				<UserStats />
			</div>
		</div>
	</div>

	<!-- Footer (Full width) -->

	<!-- <Footer /> -->
</div>

<!-- </div> -->
