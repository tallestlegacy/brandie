<script lang="ts">
	import Logus from '$lib/assets/MainLogus.svelte';
	import type { SvgProps } from '$lib/types/shared-props';

	const { fill = '#000000', width = '120px', height = '215px' }: SvgProps = $props();
</script>

<Logus {...{ fill, width, height }} />
