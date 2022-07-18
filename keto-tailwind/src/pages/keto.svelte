<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import Button from "../shared/Button.svelte";
  import List from "../shared/List.svelte";
  import Picture from "../shared/Picture.svelte";
  import ProductCard from "../shared/ProductCard.svelte";

  import { onMount } from "svelte";

  let root;
  let list1 = {
    title: "Keto and IF are perfect for anyone who:",
    items: [
      "Struggles to lose weight",
      "Has chronic high blood sugar",
      "Is Type 2 Diabetic",
      "Has constant heartburn or acid reflux/GERD",
      "Has a severe lack of energy",
    ],
  };

  let list2 = {
    title: "Keto and IF are perfect for anyone who:",
    items: [
      "Struggles to lose weight 22",
      "Has chronic high blood sugar 2222",
      "Is Type 2 Diabetic222",
      "Has constant heartburn or acid reflux/GERD ",
      "Has a severe lack of energy222",
    ],
  };

  let list3 = {
    title: "Keto and IF are perfect for anyone who:",
    items: [
      "Nausea",
      "Vomiting",
      "​Irritability",
      "Vomiting",
      "​Sugar Cravings and more...",
    ],
  };

  let card1 = {
    name: "Electrolyte Powder, Raspberry & Lemon",
    uses: "Avoid weakness, fatigue, constipation, sugar cravings, and restlessness while adjusting to keto!",
    image:
      "https://dev-store.drberg.com/fn/images/product/electrolite_mobile-min.webp",
    description:
      "This electrifying formula naturally supports hydration, healthy muscles, and high energy while adjusting to ketosis.",
    intros: [
      "​13x more electrolytes than leading sports drinks",
      "​1000 mg of potassium per serving to naturally boost energy levels",
      "​ZERO fattening sugar, carbs, or maltodextrin that can kick you out of ketosis",
      "​​Has a natural raspberry and lemon flavor",
    ],
  };
  onMount(() => {
    let container = root.querySelector(".container");
    let slide = root.querySelector(".slide");
    let box = root.querySelectorAll(".box");
    let width = box[0].offsetWidth + 32;
    slide.style.minWidth = `${box.length * width}px`;
    let start;
    let change;

    container.addEventListener("dragstart", (e) => {
      start = e.clientX;
    });
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      let touch = e.clientX;
      change = start - touch;
    });
    container.addEventListener("dragend", slideShow);

    //touch mobile
    container.addEventListener("touchstart", (e) => {
      start = e.touches[0].clientX;
    });
    container.addEventListener("touchmove", (e) => {
      e.preventDefault();
      let touch = e.touches[0];
      change = start - touch.clientX;
    });
    container.addEventListener("touchend", slideShow);

    function slideShow() {
      if (change > 0) {
        container.scrollLeft += width;
      } else {
        container.scrollLeft -= width;
      }
    }

    //ReviewCard
    let container2 = root.querySelector(".container2");
    let slide2 = root.querySelector(".slide2");
    let box2 = root.querySelectorAll(".box2");
    let iconRight = root.querySelector(".icon-right");
    let iconLeft = root.querySelector(".icon-left");
    let width2 = box2[0].offsetWidth + 32;
    slide2.style.minWidth = `${box2.length * width}px`;
    let start2;
    let change2;

    container2.addEventListener("dragstart", (e) => {
      start2 = e.clientX;
    });
    container2.addEventListener("dragover", (e) => {
      e.preventDefault();
      let touch2 = e.clientX;
      change2 = start2 - touch2;
    });
    container2.addEventListener("dragend", slideShow2);

    //touch mobile
    container2.addEventListener("touchstart", (e) => {
      start2 = e.touches[0].clientX;
    });
    container2.addEventListener("touchmove", (e) => {
      e.preventDefault();
      let touch2 = e.touches[0];
      change2 = start2 - touch2.clientX;
    });
    container2.addEventListener("touchend", slideShow2);

    iconRight.addEventListener("click", (e) => {
      container2.scrollLeft += width2;
    });

    iconLeft.addEventListener("click", (e) => {
      container2.scrollLeft -= width2;
    });

    function slideShow2() {
      if (change2 > 0) {
        container2.scrollLeft += width2;
        console.log(width2);
      } else {
        container2.scrollLeft -= width2;
      }
    }
  });
</script>

<div class="keto">
  <Header />
  <main bind:this={root} class="main mx-auto">
    <section class="above  mx-5 lg:mx-10 xl:mx-20 2xl:mx-40">
      <section
        class="info my-12 overflow-hidden p-4 sm:py-14 md:py-28 rounded-xl md:bg-fixed"
      >
        <div
          class="w-2/3 text-white text-base md:text-2xl md:max-w-[400px] md:ml-10"
        >
          <p>
            A staggering number of adults in the US suffer from obesity, over 70
            million.
            <strong
              >Plus, over 30 million of these adults have Type 2 Diabetes!</strong
            >
          </p>
          <p
            class="mt-4 p-4 text-sm md:text-xl bg-[#2a363e80] md:max-w-[400px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
          >
            <i>It’s a sad fact, but that doesn’t make it any less true</i>
          </p>
        </div>
      </section>
      <section class="my-12">
        <p class="text-center text-xl md:text-2xl font-medium">
          What could have led to an epidemic of such terrifying proportions as
          this one?
        </p>
        <div class="my-2">
          <Picture
            srclg="https://dev-store.drberg.com/fn/images/donut_tablet.webp"
            srcmd="https://dev-store.drberg.com/fn/images/donut_tablet.webp"
            srcsm="https://dev-store.drberg.com/fn/images/donut_mobile.webp"
            alt="donus"
          />
        </div>
        <div
          class="flex flex-col md:flex-row md:items-center my-4 text-base md:text-xl"
        >
          <p class="md:w-1/2">
            Yes, in the United States, it seems like <span class="font-bold"
              >nearly every single diet consists</span
            > of foods high in
          </p>
          <div class="my-4 md:w-1/2">
            <p class="my-3">
              <i class="bx bx-chevrons-right font-bold" />
              Sugar
            </p>
            <p class="my-3">
              <i class="bx bx-chevrons-right font-bold" />
              Refined Cabonhydrates
            </p>
            <p class="my-3">
              <i class="bx bx-chevrons-right font-bold" />
              Artificial Sweeteners and Additives
            </p>
          </div>
        </div>
      </section>
      <section class="grid my-12">
        <div class="grid bg-yellow rounded-2xl overflow-hidden">
          <div class="bg-brown p-5 sm:px-8">
            <p class="text-white text-xl md:text-2xl font-medium text-center">
              Diets high in these foods lead to an increased risk of obesity and
              associated conditions, like:
            </p>
          </div>
          <div class="flex flex-col md:flex-row md:gap-x-4 p-5">
            <div class="text-center my-5">
              <Picture
                srclg="https://dev-store.drberg.com/fn/images/infographic/mask_desktop1-min.webp"
                srcmd="https://dev-store.drberg.com/fn/images/infographic/mask_tablet1-min.webp"
                srcsm="https://dev-store.drberg.com/fn/images/infographic/mask_mobile1-min.webp"
                alt="human"
              />
              <p class="text-xl font-medium mt-2">Type 2 Diabetes</p>
            </div>
            <div class="text-center my-5">
              <Picture
                srclg="https://dev-store.drberg.com/fn/images/infographic/mask_desktop2-min.webp"
                srcmd="https://dev-store.drberg.com/fn/images/infographic/mask_tablet2-min.webp"
                srcsm="https://dev-store.drberg.com/fn/images/infographic/mask_mobile2-min.webp"
                alt="human"
              />
              <p class="text-xl font-medium mt-2">Stroke</p>
            </div>
            <div class="text-center my-5">
              <Picture
                srclg="https://dev-store.drberg.com/fn/images/infographic/mask_desktop3-min.webp"
                srcmd="https://dev-store.drberg.com/fn/images/infographic/mask_tablet3-min.webp"
                srcsm="https://dev-store.drberg.com/fn/images/infographic/mask_mobile3-min.webp"
                alt="human"
              />
              <p class="text-xl font-medium mt-2">Header Diseases</p>
            </div>
          </div>
        </div>
        <div class="my-4 ">
          <p class="text-center md:text-xl">
            These conditions are all pretty scary and can have some serious side
            effects that can severely take away from your quality of life.
          </p>
        </div>
        <div class="text-center">
          <Button flat>Click to Order</Button>
        </div>
      </section>
      <section class="desc my-12 md:flex md:gap-x-4 md:items-center">
        <div class="md:w-1/2">
          <div class="bg-brown p-5 my-4">
            <p
              class="text-white text-2xl md:text-5xl md:leading-relaxed font-bold"
            >
              Your Body Uses Carbs for Energy
            </p>
          </div>
          <div>
            <p class="md:text-xl md:my-4">
              When you consume refined carbohydrates, your body will create
              glucose, which the body uses as an energy source.
            </p>
            <br />
            <p class="md:text-xl md:my-4">
              Unfortunately, refined carbs and sugar are unclean sources of
              energy for the body. The body burns through sugars rather quickly
              and research has even shown that they barely provide any extra
              energy anyway!
            </p>
            <br />
            <p class="md:text-xl">
              In fact, they can leave you feeling <strong>EXHAUSTED</strong> and
              ready to <strong>CRASH</strong>.
            </p>
          </div>
        </div>
        <div class="mt-4 md:w-1/2">
          <Picture
            srclg="https://dev-store.drberg.com/fn/images/infographic/human_car_desktop-min.webp"
            srcmd="https://dev-store.drberg.com/fn/images/infographic/human_car_tablet-min.webp"
            srcsm="https://dev-store.drberg.com/fn/images/infographic/human_car_mobile-min.webp"
            alt="human"
          />
        </div>
      </section>
      <section class="my-12">
        <div class="bg-yellow rounded-xl p-5 md:p-10">
          <p class="font-bold text-xl md:text-2xl mb-4">
            And the worst part is:
          </p>
          <p class="md:text-xl">
            The longer these foods have been a staple of your diet, the harder
            it is to cut them out due to cravings, headaches, etc.
          </p>
          <p class="md:text-xl">
            But that’s not all of the drawbacks that come with a high carb diet…
          </p>
        </div>
      </section>
      <section
        class="desc my-12 md:flex md:flex-row-reverse md:gap-x-4 md:items-center"
      >
        <div class="md:w-1/2">
          <div class="bg-brown p-5 my-4">
            <p
              class="text-white text-2xl md:text-5xl md:leading-relaxed font-bold"
            >
              The Dangers of Insulin
            </p>
          </div>
          <div>
            <p class="md:text-xl md:my-4">
              Whenever you eat, your pancreas releases a hormone, called <strong
                >insulin</strong
              >.
            </p>
            <br />
            <p class="md:text-xl md:my-4">
              The role of insulin in the body is to regulate blood sugar levels
              by allowing cells to absorb sugar for energy.
            </p>
            <br />
            <p class="md:text-xl md:my-4">
              However, when insulin is present in the bloodstream, the body<strong
              >
                CANNOT</strong
              >
              burn fat. Plus, the more insulin released into the body (especially
              with high carb diets), the less effective it is at moving glucose out
              of the blood, leading to <strong>insulin resistance</strong>.
            </p>
            <br />
            <p class="md:text-xl md:my-4">
              If left untreated, this can lead to Type 2 Diabetes and the other
              conditions I mentioned above.
            </p>
          </div>
        </div>
        <div class="mt-4 md:w-1/2">
          <Picture
            srclg="https://dev-store.drberg.com/fn/images/infographic/clock_sugar_desktop-min.webp"
            srcmd="https://dev-store.drberg.com/fn/images/infographic/clock_sugar_tablet-min.webp"
            srcsm="https://dev-store.drberg.com/fn/images/infographic/clock_sugar_mobile-min.webp"
            alt="healthy"
          />
        </div>
      </section>
    </section>

    <section class="below">
      <section class="watch">
        <div>
          <div class="mx-5 lg:mx-10 xl:mx-20 2xl:mx-40">
            <p class="text-center mb-4 text-xl md:text-2xl">
              That’s why I’ve always recommended:
            </p>
          </div>
          <div class="healthy__img w-100% h-48 md:min-h-[460px] md:bg-fixed">
            <div class="w-3/5 flex">
              <p
                class="text-white text-2xl md:text-5xl md:leading-normal font-medium mt-6 md:mt-12 ml-4"
              >
                The Healthy Keto Lifestyle with Intermittent Fasting
              </p>
            </div>
          </div>
        </div>
        <div class="relative">
          <section class="flex flex-col items-center ">
            <div class="mt-[-14%]">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="https://dev-store.drberg.com/fn/images/watch_desktop.webp"
                  loading="lazy"
                />
                <source
                  media="(min-width: 640px)"
                  srcset="https://dev-store.drberg.com/fn/images/watch_mobile.webp"
                  loading="lazy"
                />
                <source
                  media="(min-width: 0px)"
                  srcset="https://dev-store.drberg.com/fn/images/watch_mobile.webp"
                  loading="lazy"
                />
                <img
                  class="rounded-full p-5"
                  src="https://dev-store.drberg.com/fn/images/watch_mobile.webp"
                  width="100%"
                  loading="lazy"
                  height="100%"
                  alt="watch"
                />
              </picture>
            </div>
          </section>
        </div>
      </section>
      <section class="p-5 lg:mx-10 xl:mx-20 2xl:mx-40">
        <List list={list2} />

        <div class="p-5 md:p-10 bg-bermuda  rounded-xl md:text-2xl">
          <p>
            Instead of releasing insulin after eating, ketosis will change your
            body’s metabolism to allow it to release ketones!
          </p>
          <br />
          <p class="font-medium">
            These are the chemicals your liver produces that allow you to burn
            fat for energy instead of sugar.
          </p>
          <br />
          <p>
            So, by correctly implementing a keto diet with intermittent fasting,
            you should have no problem turning your health around.
          </p>
          <br />
        </div>
        <List list={list1} />
      </section>
      <section class="">
        <div class="bg-tahiti text-white text-center p-5 md:p-20">
          <p class="md:text-xl">
            Ready to get started? Well, there’s just one thing we need to talk
            about first...
          </p>
          <p class="text-2xl md:text-5xl font-bold mt-4">
            Adjusting to Ketosis with the Complete Keto Kit
          </p>
        </div>
        <section
          class="mx-5 md:flex md:items-center md:gap-x-4 lg:mx-10 xl:mx-20 2xl:mx-40"
        >
          <div class="my-4 md:w-1/2">
            <div>
              <Picture
                srclg="https://dev-store.drberg.com/fn/images/sleep_desktop-min.webp"
                srcmd="https://dev-store.drberg.com/fn/images/sleep_tablet-min.webp"
                srcsm="https://dev-store.drberg.com/fn/images/sleep_mobile-min.webp"
                alt="human"
              />
            </div>
          </div>
          <div class="md:w-1/2 md:text-xl ">
            <div class="my-4">
              <p>
                Though some people have no issues starting the ketogenic diet
                and switching to fat for energy, some experience some side
                effects and symptoms during this process, known as the “Keto
                Flu.”
              </p>
            </div>
            <List flexCol="flex-col" list={list3} />
          </div>
        </section>
      </section>
      <section class="grid my-12 p-5 lg:mx-10 xl:mx-20 2xl:mx-40">
        <div class="my-4">
          <p class="md:text-2xl text-center">
            Though these typically don’t last very long (a week or so), it’s
            very important to stick with your new diet - the benefits will be
            more than worth it!
          </p>
        </div>
        <div class="grid bg-bermuda rounded-2xl overflow-hidden">
          <div class="bg-tahiti p-5 md:p-10">
            <p class="text-white text-center text-xl md:text-2xl font-medium">
              So, to make the process of adjusting to ketosis as painless as
              possible, I created my Complete Keto Kit, perfect for:
            </p>
          </div>
          <div class="p-5 md:flex md:gap-x-4">
            <div class="text-center my-5">
              <Picture
                srclg="https://dev-store.drberg.com/fn/images/infographic/keto-flu_desktop-min.webp"
                srcmd="https://dev-store.drberg.com/fn/images/infographic/keto-flu_tablet-min.webp"
                srcsm="https://dev-store.drberg.com/fn/images/infographic/keto-flu_mobile-min.webp"
                alt="flu"
              />
              <p class="text-xl font-medium mt-2">Keto Flu Support</p>
            </div>
            <div class="text-center my-5">
              <Picture
                srclg="https://dev-store.drberg.com/fn/images/infographic/energy_desktop-min.webp"
                srcmd="https://dev-store.drberg.com/fn/images/infographic/energy_tablet-min.webp"
                srcsm="https://dev-store.drberg.com/fn/images/infographic/energy_mobile-min.webp"
                alt="enrgy"
              />
              <p class="text-xl font-medium mt-2">Energy support</p>
            </div>
            <div class="text-center my-5">
              <Picture
                srclg="https://dev-store.drberg.com/fn/images/infographic/supplements_desktop-min.webp"
                srcmd="https://dev-store.drberg.com/fn/images/infographic/supplements_tablet-min.webp"
                srcsm="https://dev-store.drberg.com/fn/images/infographic/supplements_mobile-min.webp"
                alt="supplements"
              />
              <p class="text-xl font-medium mt-2">
                Getting started with keto supplements
              </p>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <p class="text-xl md:text-2xl text-center text-black font-medium">
            This incredibly valuable bundle includes several of my favorite
            products for helping people adjust to ketosis and truly get the most
            out of their diet.
          </p>
        </div>
      </section>
      <!-- ProductCard -->
      <section class="parent lg:px-10 xl:px-20 2xl:px-40">
        <div class="container ">
          <div class="slide">
            <div class="box">
              <ProductCard card={card1} />
            </div>
            <div class="box  ">
              <ProductCard card={card1} />
            </div>
            <div class="box  ">
              <ProductCard card={card1} />
            </div>
            <div class="box  ">
              <ProductCard card={card1} />
            </div>
          </div>
        </div>
      </section>
      <!-- ProductCard -->
      <section class="my-4">
        <div class="bg-tahiti p-5">
          <p
            class="text-white font-medium mb-4 text-center text-xl md:text-2xl"
          >
            There you have it, that’s everything included in the Complete Keto
            Kit to make your adjustment to ketosis and continued keto diet as
            easy to follow as possible!
          </p>
          <div
            class="bg-white rounded-xl p-5 md:flex md:gap-x-4 md:items-center lg:mx-10 xl:mx-20 2xl:mx-40"
          >
            <div class="p-4 md:p-8 md:w-1/2">
              <Picture
                srclg="https://dev-store.drberg.com/fn/images/healthy_mobile-min.webp"
                srcmd="https://dev-store.drberg.com/fn/images/healthy_mobile-min.webp"
                srcsm="https://dev-store.drberg.com/fn/images/healthy_mobile-min.webp"
                alt="healthy"
              />
            </div>
            <div class=" md:w-1/2">
              <p class="md:text-2xl">
                But wait… I’ve got one more <strong>FREE BONUS ITEM</strong> for
                you to complement this book -<strong>
                  Healthy Keto & Intermittent Fasting: A Simple Overview</strong
                >.
              </p>
              <div class="text-center md:text-start mt-4">
                <Button flat>Click to Order</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="my-4 lg:mx-10 xl:mx-20 2xl:mx-40">
        <div class="mx-8">
          <h2 class="text-2xl md:text-5xl text-center font-bold mb-4">
            In Conclusions
          </h2>
          <p class="md:text-xl">
            Do you want to get rid of those stubborn pounds, or just keep adding
            to them? Do you want to improve your health and weight without
            having to diet excessively or undergo surgery?
          </p>
          <br />
          <p class="md:text-xl">
            Then there really is no other option than Healthy Keto and
            Intermittent Fasting, and with the Complete Keto Kit, there really
            is no reason not to get started as soon as possible.
          </p>
          <div>
            <Picture
              srclg="https://dev-store.drberg.com/fn/images/Bonus4_desktop.webp"
              srcmd="https://dev-store.drberg.com/fn/images/Bonus4_tablet.webp"
              srcsm="https://dev-store.drberg.com/fn/images/Bonus4_mobile.webp"
              alt="bonus"
            />
          </div>
          <div class="mt-4 text-center">
            <Button flat>Click to Order</Button>
          </div>
        </div>
      </section>
      <!-- ReviewCard -->
      <div class="mx-5 lg:mx-10 xl:mx-20 2xl:mx-[166px]">
        <section class="parent2 my-8 relative">
          <h2 class="text-center text-2xl md:text-5xl font-medium mb-4">
            Not convinced yet? Take a look at some of these five-star reviews!
          </h2>
          <button class="icon icon-left left-4 hidden md:block">
            <i class="bx bxs-chevron-left" />
          </button>
          <button class="icon icon-right right-4 hidden md:block">
            <i class="bx bxs-chevron-right" />
          </button>
          <div class="container2 ">
            <div class="slide2">
              <div class="box2">
                <div class="flex gap-x-2">
                  <div
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-tahiti text-white font-bold"
                  >
                    ab
                  </div>
                  <div>
                    <p class="text-xl font-semibold">Anna Bide</p>
                    <div class="flex gap-4 text-sm">
                      <p>May 20, 2021</p>
                      <span class="text-orange">Verified Purchase</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Berg and his program is helping me to finally fix my slow
                    metabolism and lose weight!
                  </p>
                </div>
              </div>
              <div class="box2">
                <div class="flex gap-x-2">
                  <div
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-tahiti text-white font-bold"
                  >
                    ab
                  </div>
                  <div>
                    <p class="text-xl font-semibold">Anna Bide</p>
                    <div class="flex gap-4 text-sm">
                      <p>May 20, 2021</p>
                      <span class="text-orange">Verified Purchase</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Berg and his program is helping me to finally fix my slow
                    metabolism and lose weight!
                  </p>
                </div>
              </div>
              <div class="box2">
                <div class="flex gap-x-2">
                  <div
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-tahiti text-white font-bold"
                  >
                    ab
                  </div>
                  <div>
                    <p class="text-xl font-semibold">Anna Bide</p>
                    <div class="flex gap-4 text-sm">
                      <p>May 20, 2021</p>
                      <span class="text-orange">Verified Purchase</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Berg and his program is helping me to finally fix my slow
                    metabolism and lose weight!
                  </p>
                </div>
              </div>
              <div class="box2">
                <div class="flex gap-x-2">
                  <div
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-tahiti text-white font-bold"
                  >
                    ab
                  </div>
                  <div>
                    <p class="text-xl font-semibold">Anna Bide</p>
                    <div class="flex gap-4 text-sm">
                      <p>May 20, 2021</p>
                      <span class="text-orange">Verified Purchase</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Berg and his program is helping me to finally fix my slow
                    metabolism and lose weight!
                  </p>
                </div>
              </div>
              <div class="box2">
                <div class="flex gap-x-2">
                  <div
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-tahiti text-white font-bold"
                  >
                    ab
                  </div>
                  <div>
                    <p class="text-xl font-semibold">Anna Bide</p>
                    <div class="flex gap-4 text-sm">
                      <p>May 20, 2021</p>
                      <span class="text-orange">Verified Purchase</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Berg and his program is helping me to finally fix my slow
                    metabolism and lose weight!
                  </p>
                </div>
              </div>
              <div class="box2">
                <div class="flex gap-x-2">
                  <div
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-tahiti text-white font-bold"
                  >
                    ab
                  </div>
                  <div>
                    <p class="text-xl font-semibold">Anna Bide</p>
                    <div class="flex gap-4 text-sm">
                      <p>May 20, 2021</p>
                      <span class="text-orange">Verified Purchase</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Berg and his program is helping me to finally fix my slow
                    metabolism and lose weight!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-4">
            <Button inverse flat>Show All Reviews</Button>
          </div>
        </section>
      </div>
      <!-- ReviewCard -->
    </section>
  </main>
  <Footer />
</div>

<style lang="postcss">
  .info {
    background-image: url("https://dev-store.drberg.com/fn/images/Caibung_mobile.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .healthy__img {
    background-image: url("https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .parent,
  .parent2 {
    @apply w-full overflow-hidden;
  }

  .container,
  .container2 {
    @apply min-w-full overflow-hidden cursor-pointer scroll-smooth;
  }
  .slide,
  .slide2 {
    @apply h-full flex justify-evenly my-4;
  }

  .box {
    @apply min-w-[80vw] h-full min-h-[960px] mx-4 overflow-hidden rounded;
    box-shadow: 0 0 4px 2px #0003;
  }

  .box2 {
    @apply bg-white min-w-[80vw] h-full p-4 mx-4 overflow-hidden min-h-[200px] rounded;
    box-shadow: 0 0 4px 2px #0003;
  }

  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .icon {
    border: 2px solid #0091a8;
    @apply border-2 border-solid border-tahiti w-12 h-12 absolute top-1/2 -translate-y-1/2 rounded-full bg-grey;
    transform: translateY(-50%);
  }

  .icon:hover {
    @apply bg-tahiti;
    transition: 0.4s linear;
  }

  @media (min-width: 640px) {
    .box {
      min-width: 88vw;
      min-height: 780px;
    }
  }
  @media (min-width: 768px) {
    .box {
      min-width: 60vw;
      min-height: 880px;
    }
    .box2 {
      min-width: 42vw;
    }
  }
  @media (min-width: 1024px) {
    .box {
      min-width: 46vw;
      min-height: 880px;
    }
  }
  @media (min-width: 1280px) {
    .box {
      min-width: 16vw;
      min-height: 980px;
    }
    .box2 {
      min-width: 18vw;
      margin-left: 8px;
    }
  }
</style>
