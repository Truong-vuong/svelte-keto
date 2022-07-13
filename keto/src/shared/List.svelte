<script>
  export let title = "";
  export let item1 = "";
  export let item2 = "";
  export let item3 = "";
  export let item4 = "";
  export let item5 = false;
  export let flexCol = "";
  export let wFull = "";
</script>

<div
  class="list my-4 text-base md:text-xl md:flex md:{flexCol} md:items-center md:gap-x-4"
>
  <p class="font-bold md:w-1/2">
    {title}
  </p>
  <div class="my-4 md:w-1/2">
    <p class="my-3">
      <i class="bx bx-chevrons-right font-bold" />
      {item1}
    </p>
    <p class="my-3">
      <i class="bx bx-chevrons-right font-bold" />
      {item2}
    </p>
    <p class="my-3">
      <i class="bx bx-chevrons-right font-bold" />
      {item3}
    </p>
    {#if item4 !== false}
      <p class="my-3">
        <i class="bx bx-chevrons-right font-bold" />
        {item4}
      </p>
    {/if}
    {#if item5 !== false}
      <p class="my-3">
        <i class="bx bx-chevrons-right font-bold" />
        {item5}
      </p>
    {/if}
  </div>
</div>

<style>
</style>
