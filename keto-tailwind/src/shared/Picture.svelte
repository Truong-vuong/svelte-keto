<script>
  export let srcsm = "";
  export let srcmd = "";
  export let srclg = "";
  export let alt = "The Photo";
</script>

<picture>
  <source
    class="rounded-xl"
    media="(min-width: 768px)"
    srcset={srclg}
    loading="lazy"
  />
  <source
    class="rounded-xl"
    media="(min-width: 640px)"
    srcset={srcmd}
    loading="lazy"
  />
  <source
    class="rounded-xl"
    media="(min-width: 0px)"
    srcset={srcsm}
    loading="lazy"
  />
  <img
    class="rounded-xl"
    src={srcsm}
    width="100%"
    loading="lazy"
    height="100%"
    {alt}
  />
</picture>

<style>
</style>
