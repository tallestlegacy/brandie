<script lang="ts">
	import { Colors } from '$lib/constants/colorscheme';
	import Logo from './Logo.svelte';

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

<div class="border-px border-foreground/50 h-fit border p-4 pb-32 shadow-lg">
	<div class="flex items-center justify-between gap-4">
		<!-- left -->
		<div class="flex items-center gap-8">
			<div class="flex aspect-square min-w-[240px] items-center justify-center rounded-full">
				<Logo fill={logoPrimaryColor} />
			</div>

			<div class="flex flex-col">
				<h1 class="text-4xl font-bold">{branding.brandName}</h1>
			</div>
		</div>

		<!-- right -->
		<div class="flex aspect-square min-w-[120px] items-center justify-center rounded-full">
			<Logo fill="gray" height="107.5px" width="60px" />
		</div>
	</div>
	<div class="flex justify-end">
		<p>{branding.headline}</p>
	</div>
</div>
