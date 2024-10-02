<script>
	export let tweets = [];
</script>

<div class="relative h-full w-full max-h-full overflow-y-auto shadow-md sm:rounded-lg">
	<table class="w-full text-sm text-left text-tertiary dark:text-gray-400">
		<thead
			class="text-xs text-tertiary uppercase bg-gradient-to-b from-primary-100 via-white to-white sticky top-0"
		>
			<tr>
				<th class="p-4">
					<div class="flex items-center">
						<!-- <input id="checkbox-all" type="checkbox" class="w-4 h-4"> -->
						<label for="checkbox-all" class="sr-only">Select all</label>
					</div>
				</th>
				<th class="px-6 py-3">Username</th>
				<th class="px-6 py-3">Tweet</th>
				<th class="px-6 py-3">Likes</th>
				<th class="px-6 py-3">Retweets</th>
				<th class="px-6 py-3">Sentiment</th>
				<th class="px-6 py-3">Impact</th>
			</tr>
		</thead>
		<tbody>
			{#each tweets as tweet}
				<tr
					class="bg-gradient from-secondary-200 to-secondary-100 border-b border-secondary-200 hover:bg-gray-200 "
				>
					<td class="p-4">
						<div class="flex items-center">
							<!-- <input id="checkbox-{tweet.id}" type="checkbox" class="w-4 h-4"> -->
							<label for="checkbox-{tweet.id}" class="sr-only">Select</label>
						</div>
					</td>
					<td class="px-6 py-2">{tweet.username}</td>
					<td class="px-6 py-2">{tweet.text}</td>
					<td class="px-6 py-2">{tweet.likes}</td>
					<td class="px-6 py-2">{tweet.retweets}</td>
					<td class="px-6 py-2">{tweet.sentiment}</td>
					<td class="px-6 py-2"
						><div class = "flex justify-center rounded text-gray-100" style={`background-color: hsl(${(tweet.score + 1) * -120}, 100%, 30%)`}>
                            {tweet.score}
                          </div></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
