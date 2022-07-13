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

<style>
  .primary {
    color: white;
    background-color: #0091a8;
  }
  .primary:hover {
    background-color: #37b5c8;
  }
  .flat {
    border-radius: 2px;
  }
  .inverse {
    background-color: white;
    color: #0091a8;
    border: 2px solid #0091a8;
  }
  .inverse:hover {
    color: white;
    background-color: #0091a8;
  }
</style>
