<script>
	export let tweets = [];
	function getBackgroundColor(score) {
		// Dark orange when score is 1 -> HSL(30, 100%, 50%)
		// White when score is 0 -> HSL(0, 0%, 100%)
		// Dark blue when score is -1 -> HSL(240, 100%, 50%)

		if (score >= 0) {
			// Interpolate between white and dark orange
			const hue = 30; // Fixed hue for dark orange
			const lightness = 100 - score * 50; // From 100% lightness (white) to 50% lightness (dark orange)
			return `hsl(${hue}, 100%, ${lightness}%)`;
		} else {
			// Interpolate between white and dark blue
			const hue = 240; // Fixed hue for dark blue
			const lightness = 100 + score * 50; // From 100% lightness (white) to 50% lightness (dark blue)
			return `hsl(${hue}, 100%, ${lightness}%)`;
		}
	}

	function getTextColor(score) {
		// Ensure text is readable by using black for lighter backgrounds and white for darker ones
		const lightness = score >= 0 ? 100 - score * 50 : 100 + score * 50;
		return lightness > 70 ? 'black' : 'white';
	}
	import { hoveredIndex } from '$lib/stores/hoverStore';

</script>

<div class="relative h-full w-full max-h-full overflow-y-auto shadow-md sm:rounded-lg">
	<table class="w-full text-sm text-left text-tertiary dark:text-gray-400">
		<thead class="text-xs text-tertiary uppercase bg-gray-100 sticky top-0">
			<tr>
				<th class="p-4"> </th>
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
					class="border-b border-secondary-200 hover:bg-gray-200"
					on:mouseenter={() => hoveredIndex.set(tweet.id)}
					on:mouseleave={() => hoveredIndex.set(null)}
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
					<td class="px-6 py-2">
						<div
							class="flex justify-center rounded p-2"
							style={`background-color: ${getBackgroundColor(tweet.score)}; color: ${getTextColor(tweet.score)}`}
						>
							{tweet.score}
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
