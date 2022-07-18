<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button
  class="text-base md:text-3xl border-none p-3 md:p-6 font-bold cursor-pointer {type}"
  class:flat
  class:inverse
>
  <slot />
</button>

<style lang="postcss">
  .primary {
    @apply text-white bg-tahiti;
  }
  .primary:hover {
    transition: 0.4s linear;
  }
  .flat {
    @apply rounded-sm;
  }
  .inverse {
    @apply bg-white text-tahiti border-2 border-solid border-tahiti;
  }
  .inverse:hover {
    @apply text-white bg-tahiti;
    transition: 0.4s linear;
  }
</style>
