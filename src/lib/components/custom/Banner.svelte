<script lang="ts">
	import { Colors } from '$lib/constants/colorscheme';
	import Logo from './Logo.svelte';
	import MainLogus from './MainLogo.svelte';

	import branding from '$lib/constants/branding';

	interface Props {
		title?: string;
		backgroundColor: 'transparent';
		textColor: typeof Colors;
		logoPrimaryColor: typeof Colors;
		logoSecondaryColor: typeof Colors;
	}

	const { backgroundColor, textColor, logoPrimaryColor, logoSecondaryColor }: Props = $props();
</script>

<div class="border-px h-fit rounded-sm border border-foreground/50 p-4 pb-32 shadow-lg">
	<div
		class="flex items-center justify-between gap-4 border border-dashed border-[red] p-8"
		style:background-color={backgroundColor}
	>
		<!-- left -->
		<div class="flex items-center gap-8">
			<MainLogus fill={logoPrimaryColor} height="107.5px" width="60px" />

			<div class="flex flex-col gap-4">
				<h1 style:color={textColor} class="text-4xl font-bold">{branding.brandName}</h1>
				<p style:color={textColor} class="">{branding.headline}</p>
			</div>
		</div>

		<!-- right -->
		<div class="flex flex-col items-center gap-2">
			<Logo fill={logoSecondaryColor} height="107.5px" width="60px" />
			<p style:color={textColor} class="text-xl font-bold">{branding.subBrandName}</p>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

	h1,
	p {
		font-family: 'Montserrat', sans-serif;
	}
</style>
