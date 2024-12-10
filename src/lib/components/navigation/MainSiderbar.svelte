<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { Image, RectangleHorizontal, Type } from 'lucide-svelte';

	// Menu items.
	const items = [
		{
			title: 'Logo',
			url: '/',
			icon: Image
		},

		{
			title: 'Typography',
			url: '/typography',
			icon: Type
		},

		{
			title: 'Banner',
			url: '/banner',
			icon: RectangleHorizontal
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
