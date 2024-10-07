<script>
	import StatBox from './StatBox.svelte';
    import StatCard from './StatCard.svelte';

    let user = {
      name: "Jackson Smith",
      handle: "@jackson_smith",
      followers: "25.3K",
      following: "987",
      tweets: "1,234",
      likes: "5,678",
      retweets: "1,245",
      mentions: "321",
      profile_visits: "12.4K",
      verified: true,
      bookmarks: "432",
      media_posts: "345"
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


<div class="flex flex-col min-h-fit rounded-lg border">
  <div class="flex font-medium items-center flex-row py-5 gap-3 p-4 px-6">
    <div class="flex flex-col gap-4">
      <img  class="w-8 h-8 mr-2" src="https://static-00.iconduck.com/assets.00/ethereum-cryptocurrency-icon-512x512-u1g6py59.png"/>
      {user.name}
    </div>
    <div class="ml-auto flex flex-col gap-4">
      <p>{user.followers}</p>
      <p>Followers</p>
    </div>
    <div class="flex flex-col gap-4">
      <p>{user.following}</p>
      <p>Following</p>
    </div>
  </div>
  <hr/>
  <div class="flex text-sm flex-row">
      <div class="flex flex-1 flex-col  ">
              <StatBox label="Price" value={user.tweets} />
              <StatBox label="Circulating Vol" value={user.retweets} variant="2" />
              <StatBox label="24h Change" value={user.profile_visits} />
              <StatBox label="24h Volume" value={user.bookmarks} variant="2"/>
      </div>
      <div class="flex flex-1 border-l flex-col ">
              <StatBox label="Market Cap" value={user.likes} />
              <StatBox label="All Time High" value={user.mentions} variant="2"  />
              <StatBox label="Rank" value={user.verified ? 'Yes' : 'No'}  />
              <StatBox label="Dominance" value={user.media_posts} variant="2"  />
      </div>
  </div>
</div>
