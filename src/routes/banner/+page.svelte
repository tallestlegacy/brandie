<script>
	import Banner from '$lib/components/custom/Banner.svelte';
	import { Colors } from '$lib/constants/colorscheme';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	const examples = [
		{
			title: 'Standard',
			backgroundColor: 'transparent',
			textColor: Colors.Night,
			logoPrimaryColor: Colors.Yellow,
			logoSecondaryColor: Colors.MoonStone
		},

		{
			title: 'Black',
			backgroundColor: Colors.Night,
			textColor: Colors.AliceBlue,
			logoPrimaryColor: Colors.Yellow,
			logoSecondaryColor: Colors.MoonStone
		},
		{
			title: 'Blue',
			backgroundColor: Colors.MoonStone,
			textColor: Colors.AliceBlue,
			logoPrimaryColor: Colors.AliceBlue,
			logoSecondaryColor: Colors.AliceBlue
		}
	];
</script>

<ScrollArea class="p-8">
	<div class="mx-auto grid max-w-screen-lg gap-8">
		{#each examples as config}
			<Banner {...config} />
		{/each}
	</div>
</ScrollArea>
