<script lang="ts">
  import Comment from './Comment.svelte';
  import { addComment } from './model';

  export let href: string;

  let a: Record<string, any>;

  const items = [1, 2, 3, 4];

  const add = async () => {
    a = await addComment();
  };
</script>

<button class="btn1 p-10" on:click={add}>Button!</button>

<ul>
  <li>123</li>
  <li>4567</li>
  <li>{href}</li>

  {#each items as n}
    <li>
      <Comment name={n + ' item'} />
    </li>
  {/each}

  <li>{JSON.stringify(a ?? 'Svelte Loading...')}</li>
</ul>
