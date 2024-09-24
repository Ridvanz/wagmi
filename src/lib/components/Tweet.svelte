<script>
	import { onMount } from 'svelte';

	// Function to load Twitter script if not already loaded
	function loadTwitterScript() {
		if (!window.twttr) {
			const script = document.createElement('script');
			script.src = 'https://platform.twitter.com/widgets.js';
			script.async = true;
			script.charset = 'utf-8';
			document.head.appendChild(script);
		} else {
			window.twttr.widgets.load();
		}
	}

	onMount(() => {
		loadTwitterScript();
	});
</script>

<blockquote class="twitter-tweet" data-theme="dark">
	<p lang="en" dir="ltr">
		Morning from <a
			href="https://twitter.com/search?q=%24SPECT&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$SPECT</a
		>
		to a potential Altcoin Season? <br /><br />Lets see how our partners and friends are doing!
		<a href="https://twitter.com/search?q=%24LNQ&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$LNQ</a>,
		<a href="https://twitter.com/search?q=%24PALM&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$PALM</a>,
		<a href="https://twitter.com/search?q=%24ZIG&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$ZIG</a>,
		<a href="https://twitter.com/search?q=%24CSWAP&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$CSWAP</a>,
		<a href="https://twitter.com/hashtag/M87?src=hash&amp;ref_src=twsrc%5Etfw">#M87</a>,
		<a href="https://twitter.com/search?q=%24SVPN&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$SVPN</a>,
		<a href="https://twitter.com/search?q=%24PEIPEI&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$PEIPEI</a
		>.<br /><br />Congratulations to these builders in their respective sectors! All working towards
		their own adoption! <a href="https://twitter.com/linq_ai?ref_src=twsrc%5Etfw">@linq_ai</a>,
		<a href="https://twitter.com/palmaierc?ref_src=twsrc%5Etfw">@palmaierc</a>,…
		<a href="https://t.co/VKpduxMXI5">pic.twitter.com/VKpduxMXI5</a>
	</p>
	&mdash; SPECTRE AI (@Spectre__AI)<a
		href="https://twitter.com/Spectre__AI/status/1837079921983901904?ref_src=twsrc%5Etfw"
		>September 20, 2024</a
	>
</blockquote>
