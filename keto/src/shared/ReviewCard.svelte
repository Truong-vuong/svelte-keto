<script>
  export let name = "MGI";
  export let description = "MGI";
  export let image = "";
  export let date = "";
</script>

<section class=" ">
  <div
    class="w-[90vw] md:w-[45vw] lg:w-[24vw] xl:w-[20vw] 2xl:w-[18vw] flex flex-col gap-4 bg-grey rounded-xl p-5 min-h-[220px] "
  >
    <div class="flex gap-4">
      <div
        class="flex items-center justify-center w-10 h-10 rounded-full bg-tahiti text-white font-bold"
      >
        {image}
      </div>
      <div>
        <p class="text-xl font-semibold">{name}</p>
        <div class="flex gap-4 text-sm">
          <p>{date}</p>
          <span class="text-orange">Verified Purchase</span>
        </div>
      </div>
    </div>
    <div>
      <p>{description}</p>
    </div>
  </div>
</section>

<style>
</style>
