<script lang="ts">
  import { onMount } from 'svelte';

  import { getComments } from './model';

  export let name: string;

  let count = 10;

  onMount(async () => {
    count = await getComments();
  });
</script>

<div>Svelte Items!~ {name} {count}</div>
