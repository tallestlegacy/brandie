<script lang="ts">
	import MainSiderbar from '$lib/components/navigation/MainSiderbar.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	import '../app.css';
	import "../typography.css";

	let { children } = $props();
</script>

<Sidebar.Provider>
	<MainSiderbar />
	<main class="flex flex-1 flex-col">
		<Sidebar.Trigger />
		{@render children?.()}
	</main>
</Sidebar.Provider>
