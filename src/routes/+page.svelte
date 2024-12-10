<script>
	import Logo from '$lib/components/custom/Logo.svelte';
	import { Colors } from '$lib/constants/colorscheme';
</script>

<div class="flex flex h-full flex-wrap items-center justify-center gap-8">
	{#each Object.keys(Colors) as colorKey}
		<div class="flex flex-col items-center gap-4">
			<Logo fill={Colors[colorKey]} />
			<span class="text-xl font-bold" style:color={Colors[colorKey]}>{colorKey}</span>
		</div>
	{/each}
</div>
