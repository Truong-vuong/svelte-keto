<script>
  export let flexCol = "";
  export let list = { title: "", items: [] };
</script>

<div
  class="list my-4 text-base md:text-xl md:flex md:{flexCol} md:items-center md:gap-x-4"
>
  <p class="font-bold md:w-1/2">
    {list.title}
  </p>
  <div class="my-4 md:w-1/2">
    {#each list.items as item, i (i)}
      <div class="my-4 w-full">
        <i class="bx bx-chevrons-right font-bold" />
        <span>{item}</span>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
