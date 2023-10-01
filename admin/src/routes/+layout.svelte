<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { error } from '@sveltejs/kit';
	let isMobile = false;
	if (browser) {
		isMobile = window.innerWidth <= 768;
		if (isMobile) {
			console.error('Mobile not supported');
			goto('/mobile');
		}
	}
</script>

<slot />
