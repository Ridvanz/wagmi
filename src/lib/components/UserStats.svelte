<script>
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

<div class="flex flex-wrap gap-2 p-2 rounded-lg w-full h-full">
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
</div>
