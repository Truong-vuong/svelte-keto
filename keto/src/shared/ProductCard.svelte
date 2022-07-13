<script>
  export let name = "MGI";
  export let description = "MGI";
  export let image = "";
  export let uses = "";
  export let intro1 = false;
  export let intro2 = false;
  export let intro3 = false;
  export let intro4 = false;
  export let intro5 = false;
</script>

<section class="">
  <div
    class=" w-[90vw] md:w-[45vw] lg:w-[22vw] xl:w-[18vw] 2xl:w-[17vw] border-[1px] border-solid border-slate-50 rounded-2xl p-5 min-h-[920px] sm:min-h-[720px] md:min-h-[880px] lg:min-h-[1000px]
    xl:min-h-[1200px] 2xl:min-h-[1100px]"
  >
    <div class="flex items-center justify-center">
      <img src={image} alt="product" height="100%" />
    </div>
    <h3 class="text-xl font-bold text-center mt-6 mb-4">{name}</h3>
    <p class="text-black mb-2">{description}</p>
    <div>
      <p class="font-bold mb-2">
        <i class="bx bx-check text-4xl" />
        {intro1}
      </p>
      <p class="font-bold mb-2">
        <i class="bx bx-check text-4xl" />
        {intro2}
      </p>
      <p class="font-bold mb-2">
        <i class="bx bx-check text-4xl" />
        {intro3}
      </p>
      <p class="font-bold mb-2">
        <i class="bx bx-check text-4xl" />
        {intro4}
      </p>
      {#if intro5 !== false}
        <p class="font-bold mb-2">
          <i class="bx bx-check text-4xl" />
          {intro5}
        </p>
      {/if}
    </div>
    <p class="text-black mt-2">{uses}</p>
  </div>
</section>

<style language="postcss">
</style>
