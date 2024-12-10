<script>
	import Banner from '$lib/components/custom/Banner.svelte';
	import { Colors } from '$lib/constants/colorscheme';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	const examples = [
		{
			title: 'Standard',
			backgroundColor: 'transparent',
			textColor: Colors.Night,
			logoPrimaryColor: Colors.MoonStone,
			logoSecondaryColor: Colors.LapisLazuli
		},

		{
			title: 'Green',
			backgroundColor: 'transparent',
			textColor: Colors.Night,
			logoPrimaryColor: Colors.LapisLazuli,
			logoSecondaryColor: Colors.LapisLazuli
		},
		{
			title: 'Black',
			backgroundColor: 'transparent',
			textColor: Colors.Night,
			logoPrimaryColor: Colors.Night,
			logoSecondaryColor: Colors.LapisLazuli
		}
	];
</script>

<ScrollArea class="p-8">
	<div class="grid gap-8">
		{#each examples as config}
			<Banner {...config} />
		{/each}
	</div>
</ScrollArea>
