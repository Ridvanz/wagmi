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
	<div class="2xl:h-screen flex flex-col 2xl:max-h-screen  overflow-hidden w-screen">
		<header class="bg-black">
			<Navbar />
		</header>

		<!-- Token Searcher (Left side) -->
		<!-- <div class="flex flex-col lg:flex-row min-h-40 gap-4 p-4 w-screen">
			<div class="flex flex-[2] flex-col gap-4">
				<TokenSelector />
				<TokenStats />
			</div>

			<div class="flex flex-[5] gap-4 flex-col h-full">
				<Chart />
				<TweetsTable tweets={tweetsData} />
			</div>

			<div class="flex flex-[2] gap-4 flex-col">
				<UserSelector />
				<UserStats />
			</div>
		</div> -->

		<div class="hidden 2xl:grid grid-cols-12 grid-rows-12 gap-4 max-h-[93%] w-screen p-4">
			<aside class="col-start-1 col-end-4 row-start-1 row-end-8">
				<TokenSelector />
			</aside>
			<section class="col-start-1 col-end-4 row-start-8 row-end-[16]">
				<TokenStats />
			</section>
			<main class="col-span-6 row-span-7 rounded-xl">
				<Chart />
			</main>
			<section class="col-start-4 col-end-10 row-start-8 row-end-[16]  ">
				<TweetsTable tweets={tweetsData} />
			</section>
			<aside class="col-start-10 col-end-13 row-start-1 row-end-8">
				<UserSelector />
			</aside>
			<section class="col-start-10 col-end-13 row-start-8 row-end-[16]">
				<UserStats />
			</section>
		</div>

			<div class="flex flex-col-reverse lg:flex-row 2xl:hidden  gap-4  w-screen p-4">
				
				<div class="flex flex-1 flex-col gap-4 w-full">
					<TokenSelector />
					<TokenStats />
					<UserSelector />
					<UserStats />
				</div> 
				<div class="flex  flex-[3] flex-col gap-4 w-full">
				<Chart />
				<TweetsTable tweets={tweetsData} />
			</div>

		</div>
	</div>

	<!-- Footer (Full width) -->

	<!-- <Footer /> -->
</div>

<!-- </div> -->
