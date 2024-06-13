<script lang="ts">
	import '../app.scss';
	import Footer from '../components/footer/Footer.svelte';
	import Header from './Header.svelte';
	import './styles.scss';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
