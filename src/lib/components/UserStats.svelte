<script>
	import { image1 } from '$lib/images/mock-images';
	import StatBox from './StatBox.svelte';
	import StatCard from './StatCard.svelte';

	let user = {
		name: 'Jackson Smith',
		handle: '@jackson_smith',
		followers: '25.3K',
		following: '987',
		tweets: '1,234',
		likes: '5,678',
		retweets: '1,245',
		mentions: '321',
		profile_visits: '12.4K',
		verified: true,
		bookmarks: '432',
		media_posts: '345'
	};
</script>

<!-- <div class="flex flex-wrap gap-2 p-2 rounded-lg w-full h-full">
    <StatCard label="Followers" value={user.followers} />
    <StatCard label="Following" value={user.following} />
    <StatCard label="Tweets" value={user.tweets} />
    <StatCard label="Likes" value={user.likes} />
    <StatCard label="Retweets" value={user.retweets} />
    <StatCard label="Mentions" value={user.mentions} />
    <StatCard label="Profile Visits" value={user.profile_visits} />
    <StatCard label="Verified Status" value={user.verified ? 'Yes' : 'No'} />
    <StatCard label="Bookmarks" value={user.bookmarks}  />
    <StatCard label="Media Posts" value={user.media_posts} />
</div> -->

	<div class="flex  2xl:h-full max-h-full flex-col min-h-fit rounded-xl border">
		<div class="flex font-normal items-center flex-row py-5 gap-3 p-4 px-5">
			<div class="flex flex-col gap-4">
				<div class="w-8 h-8 rounded-full mr-2 overflow-hidden ">
				<img
					alt="user"
					class="object-cover"
					src={image1}
				/>
			</div>
				{user.name}
			</div>
			<div class="ml-auto flex flex-col gap-4">
				<p class="text-primary">{user.followers}</p>
				<p class="text-sm">Followers</p>
			</div>
			<div class="flex flex-col gap-4">
				<p class="text-primary">{user.following}</p>
				<p class="text-sm">Following</p>
			</div>
		</div>
		<hr />
		<div class="flex flex-1 text-sm flex-row">
			<div class="flex flex-1 flex-col">
				<StatBox label="Price" value={user.tweets} />
				<StatBox label="Circulating Vol" value={user.retweets} variant="2" />
				<StatBox label="24h Change" value={user.profile_visits} />
				<StatBox label="24h Volume" value={user.bookmarks} variant="2" />
			</div>
			<div class="flex flex-1 border-l flex-col">
				<StatBox label="Market Cap" value={user.likes} />
				<StatBox label="All Time High" value={user.mentions} variant="2" />
				<StatBox label="Rank" value={user.verified ? 'Yes' : 'No'} />
				<StatBox label="Dominance" value={user.media_posts} variant="2" />
			</div>
		</div>
	</div>
