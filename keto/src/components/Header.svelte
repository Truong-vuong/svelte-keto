<script>
  import Button from "../shared/Button.svelte";
</script>

<header class="header">
  <div
    class="header__main flex flex-col justify-center w-full h-[40vh] md:h-[80vh] lg:h-[100vh] md:bg-fixed"
  >
    <section class="flex flex-col gap-y-4 mx-5 py-16 lg:ml-60">
      <img
        class="w-[140px] h-12"
        src="https://drberg-dam.imgix.net/dr-berg-images/logo-48-small.svg?w=140&q=75&auto=compress,format"
        alt="logo"
      />
      <h2
        class="text-white text-4xl md:text-8xl font-medium w-48 md:w-[420px] "
      >
        COMPLETE KETO KIT
      </h2>
      <p class="text-white text-left text-xs md:text-xl">
        Everything You Need to maintain the Keto Diet and Achieve Optimal
        Health.
      </p>
    </section>
  </div>
  <div class="header__action">
    <section class="flex flex-col gap-y-2 items-center">
      <picture class="mt-[-15%]">
        <source
          media="(min-width: 1024px)"
          srcset="https://drberg-dam.imgix.net/product-images/keto-kit.png?w=991&q=50&auto=compress,format"
        />
        <source
          media="(min-width: 640px)"
          srcset="https://drberg-dam.imgix.net/product-images/keto-kit.png?w=592&q=50&auto=compress,format"
        />
        <source
          media="(mim-width: 0px)"
          srcset="https://drberg-dam.imgix.net/product-images/keto-kit.png?w=278&q=50&auto=compress,format"
        />
        <img
          src="https://drberg-dam.imgix.net/product-images/keto-kit.png?w=278&q=50&auto=compress,format"
          alt="Chris standing up holding his daughter Elva"
        />
      </picture>
      <Button type="primary" flat="true">Click to Order</Button>
    </section>
  </div>
</header>

<style>
  .header__main {
    background-image: url("https://images.unsplash.com/photo-1556139930-c23fa4a4f934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
    background-repeat: no-repeat;
  }
</style>
