<script>
	import pik from '$lib/images/logo.svg';

	const buttons = [
		{
			href: '#',
			label: 'Login',
			classes:
				'text-white dark:text-tertiary hover:bg-tertiary-50 focus:ring-4 focus:ring-tertiary-300 font-medium rounded-lg text-sm px-4 py-1.5  dark:hover:bg-tertiary-500 focus:outline-none dark:focus:ring-tertiary-800'
		},
		{
			href: '#',
			label: 'Sign up',
			classes:
				'text-white bg-gradient-to-r from-[#EE7001] to-[#FFC897] shadow-[0px_1px_17.7px_0px_#EE7001] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-1.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-500'
		}
	];

	const menuItems = [
		{
			href: '#',
			label: 'KOL & Competitor'
		},
		{
			href: '#',
			label: 'Social Media'
		},
		{
			href: '#',
			label: 'On-Chain'
		},
		{
			href: '#',
			label: 'Causality'
		}
	];

	let selectedMenuItem = 0;
</script>

<nav class="h-full flex items-center justify-center">
	<div class="w-full flex flex-wrap items-center justify-between mx-8 px-4 py-2">
		<a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
			<div class="flex items-center rounded-md pl-2 pr-2">
				<img src={pik} class="h-8" alt="Flowbite Logo" />
			</div>
		</a>
		<div class="flex items-center md:order-1 space-x-1 md:space-x-2 rtl:space-x-reverse">
			{#each buttons as button}
				<a href={button.href} class={button.classes}>{button.label}</a>
			{/each}
		</div>
		<div id="mega-menu-icons" class="items-center justify-between w-auto">
			<ul
				class="h-full w-full text-sm font-medium text-center text-tertiary-100 flex dark:divide-tertiary-700 dark:text-tertiary-400 rounded-xl bg-[#1C1D1A]"
			>
				{#each menuItems as item, index}
					<li class="w-full flex flex-row text-nowrap">
						<a
							href={item.href}
							class="{selectedMenuItem === index
								? 'text-primary bg-white rounded-xl'
								: ' text-white'} text-xs px-6 py-2 h-full">{item.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
