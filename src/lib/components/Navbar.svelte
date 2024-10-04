<script>
	import pik from '$lib/images/logo.svg';

	const buttons = [
		{
			href: '#',
			label: 'Login',
			classes: 'text-white dark:text-tertiary hover:bg-tertiary-50 focus:ring-4 focus:ring-tertiary-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-tertiary-500 focus:outline-none dark:focus:ring-tertiary-800'
		},
		{
			href: '#',
			label: 'Sign up',
			classes: 'text-white bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-500'
		}
	];

	const menuItems = [
		{
			href: '#',
			label: 'KOL & Competitor',
			classes: 'inline-block w-full p-2 px-5 text-lg text-primary bg-white border-r border-tertiary-500 dark:border-tertiary-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-tertiary-700 dark:text-white'
		},
		{
			href: '#',
			label: 'Social Media',
			classes: 'inline-block w-full p-2 px-5 text-lg bg-tertiary-800 border-r border-tertiary-500 dark:border-tertiary-700 hover:text-tertiary-700 hover:bg-tertiary-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-tertiary-800 dark:hover:bg-tertiary-700'
		},
		{
			href: '#',
			label: 'On-Chain',
			classes: 'inline-block w-full p-2 px-5 text-lg bg-tertiary-800 border-r border-tertiary-500 dark:border-tertiary-700 hover:text-tertiary-700 hover:bg-tertiary-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-tertiary-800 dark:hover:bg-tertiary-700'
		},
		{
			href: '#',
			label: 'Causality',
			classes: 'inline-block w-full p-2 px-5 text-lg bg-tertiary-800 border-s-0 border-tertiary-500 dark:border-tertiary-700 rounded-e-lg hover:text-tertiary-700 hover:bg-tertiary-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-tertiary-800 dark:hover:bg-tertiary-700'
		}
	];
</script>

<nav class="h-full flex items-center justify-center">
	<div class="w-full flex flex-wrap items-center justify-between mx-8 p-4">
		<a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
			<div class="flex items-center rounded-md pl-2 pr-2">
				<img src={pik} class="h-12" alt="Flowbite Logo" />
			</div>
		</a>
		<div class="flex items-center md:order-1 space-x-1 md:space-x-2 rtl:space-x-reverse">
			{#each buttons as button}
				<a href={button.href} class={button.classes}>{button.label}</a>
			{/each}
		</div>
		<div id="mega-menu-icons" class="items-center justify-between w-auto">
			<ul class="h-full w-full text-sm font-medium text-center text-tertiary-100 rounded-lg flex dark:divide-tertiary-700 dark:text-tertiary-400 p-4">
				{#each menuItems as item}
					<li class="w-full focus-within:z-10">
						<a href={item.href} class={item.classes} style="white-space: nowrap;">{item.label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
