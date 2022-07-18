<script>
  export let card = {
    name: "",
    description: "",
    image: "",
    uses: "",
    intros: [],
  };
</script>

<section class="p-4">
  <div class=" flex items-center justify-center">
    <img src={card.image} alt="product" height="200px" />
  </div>
  <h3 class="text-xl font-bold text-center mt-6 mb-4">{card.name}</h3>
  <p class="text-black mb-2">{card.description}</p>
  <div>
    {#each card.intros as intro, i (i)}
      <div class="font-bold mb-2">
        <i class="bx bx-check text-4xl" />
        {intro}
      </div>
    {/each}
  </div>
  <p class="text-black mt-2">{card.uses}</p>
</section>

<style>
</style>
