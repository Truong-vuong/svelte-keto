<script>
  import Button from "../shared/Button.svelte";
  import List from "../shared/List.svelte";
  import Picture from "../shared/Picture.svelte";
  import ProductCard from "../shared/ProductCard.svelte";
  import ReviewCard from "../shared/ReviewCard.svelte";

  var xDown = null;
  let yDown = null;
  let xUp = null;
  let yUp = null;

  function touchstart(e) {
    const firstTouch = (e.touches || e.originalEvent.touches)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function touchmove(e) {
    if (!xDown || !yDown) return;
    xUp = e.touches[0].clientX;
    yUp = e.touches[0].clientY;
  }

  function touchend(e) {
    let xDiff = xUp - xDown;
    let yDiff = yUp - yDown;
    if (
      Math.abs(xDiff) > Math.abs(yDiff) &&
      Math.abs(xDiff) > 0.33 * document.body.clientWidth
    ) {
      if (xDiff < 0) {
        //sang phải(right)
      } else {
        //sang trái(left)
        console.log("preview");
      }
    }
    (xDown = null), (yDown = null);
  }
</script>

<main class="main">
  <section class="above mx-5 lg:mx-10 xl:mx-20 2xl:mx-40">
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
        <Button flat="true">Click to Order</Button>
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
            Unfortunately, refined carbs and sugar are unclean sources of energy
            for the body. The body burns through sugars rather quickly and
            research has even shown that they barely provide any extra energy
            anyway!
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
        <p class="font-bold text-xl md:text-2xl mb-4">And the worst part is:</p>
        <p class="md:text-xl">
          The longer these foods have been a staple of your diet, the harder it
          is to cut them out due to cravings, headaches, etc.
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
            The role of insulin in the body is to regulate blood sugar levels by
            allowing cells to absorb sugar for energy.
          </p>
          <br />
          <p class="md:text-xl md:my-4">
            However, when insulin is present in the bloodstream, the body<strong
            >
              CANNOT</strong
            >
            burn fat. Plus, the more insulin released into the body (especially with
            high carb diets), the less effective it is at moving glucose out of the
            blood, leading to <strong>insulin resistance</strong>.
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
        <div>
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
      <List
        title="Unlike other weight loss programs, Healthy Keto and Intermittent Fasting involves:"
        item1="Cutting out carbohydrates completely"
        item2="Fasting for intermittent periods throughout the week"
        item3="Putting your body in the new metabolic state of ketosis"
        item4="​Eating high levels of healthy fats and vegetables"
        item5:false
      />
      <div class="p-5 md:p-10 bg-bermuda  rounded-xl md:text-2xl">
        <p>
          Instead of releasing insulin after eating, ketosis will change your
          body’s metabolism to allow it to release ketones!
        </p>
        <br />
        <p class="font-medium">
          These are the chemicals your liver produces that allow you to burn fat
          for energy instead of sugar.
        </p>
        <br />
        <p>
          So, by correctly implementing a keto diet with intermittent fasting,
          you should have no problem turning your health around.
        </p>
        <br />
      </div>
      <List
        title="Keto and IF are perfect for anyone who:"
        item1="Struggles to lose weight"
        item2="Has chronic high blood sugar"
        item3="Is Type 2 Diabetic"
        item4="​Has constant heartburn or acid reflux/GERD"
        item5="Has a severe lack of energy"
      />
    </section>
    <section>
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
              Though some people have no issues starting the ketogenic diet and
              switching to fat for energy, some experience some side effects and
              symptoms during this process, known as the “Keto Flu.”
            </p>
          </div>
          <List
            wFull="w-full"
            flexCol="flex-col"
            title="Some symptoms of the Keto Flu may include:"
            item1="Nausea"
            item2="Vomiting"
            item3="Vomiting"
            item4="​Irritability"
            item5="​Sugar Cravings and more..."
          />
        </div>
      </section>
    </section>
    <section class="grid my-12 p-5 lg:mx-10 xl:mx-20 2xl:mx-40">
      <div class="my-4">
        <p class="md:text-2xl text-center">
          Though these typically don’t last very long (a week or so), it’s very
          important to stick with your new diet - the benefits will be more than
          worth it!
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
    <section
      class="product my-8 mx-4 flex justify-center lg:mx-10 xl:mx-20 2xl:mx-40"
    >
      <div
        on:touchstart={touchstart}
        on:touchmove={touchmove}
        on:touchend={touchend}
        class="products flex gap-x-8 overflow-x-auto"
      >
        <ProductCard
          name="Electrolyte Powder, Raspberry & Lemon"
          image="https://dev-store.drberg.com/fn/images/product/electrolite_mobile-min.webp"
          description="This electrifying formula naturally supports hydration, healthy muscles, and high energy while adjusting to ketosis."
          intro1="​13x more electrolytes than leading sports drinks"
          intro2="​1000 mg of potassium per serving to naturally boost energy levels"
          intro3="​ZERO fattening sugar, carbs, or maltodextrin that can kick you out of ketosis"
          intro4="​​Has a natural raspberry and lemon flavor"
          uses="Avoid weakness, fatigue, constipation, sugar cravings, and restlessness while adjusting to keto!"
        />
        <ProductCard
          name="Nutritional Yeast Tablets"
          image="https://drberg-dam.imgix.net/product-images/nutritional-yeast-1.png?w=149&q=50&auto=compress,format"
          description="When adjusting to ketosis and especially when experiencing the keto flu, one of the best ways to provide support for your whole body is with B vitamins!"
          intro1="​Contains all 8 essential B vitamins to support healthy keto-adaptation"
          intro2="​Supports healthy metabolism for better overall well - being and weight loss"
          intro3="​ZERO fattening sugar, carbs, or maltodextrin that can kick you out of ketosis"
          intro4="​​Prevents keto flu effects like low energy and irritability"
          uses="With just 3 tablets three times per day, you give your body B vitamins that support a healthy metabolism and keto-adaptation."
        />
        <ProductCard
          name="Electrolyte Powder, Raspberry & Lemon"
          image="https://dev-store.drberg.com/fn/images/product/electrolite_mobile-min.webp"
          description="This electrifying formula naturally supports hydration, healthy muscles, and high energy while adjusting to ketosis."
          intro1="​13x more electrolytes than leading sports drinks"
          intro2="​1000 mg of potassium per serving to naturally boost energy levels"
          intro3="​ZERO fattening sugar, carbs, or maltodextrin that can kick you out of ketosis"
          intro4="​​Has a natural raspberry and lemon flavor"
          uses="Avoid weakness, fatigue, constipation, sugar cravings, and restlessness while adjusting to keto!"
        />
        <ProductCard
          name="Electrolyte Powder, Raspberry & Lemon"
          image="https://dev-store.drberg.com/fn/images/product/electrolite_mobile-min.webp"
          description="This electrifying formula naturally supports hydration, healthy muscles, and high energy while adjusting to ketosis."
          intro1="​13x more electrolytes than leading sports drinks"
          intro2="​1000 mg of potassium per serving to naturally boost energy levels"
          intro3="​ZERO fattening sugar, carbs, or maltodextrin that can kick you out of ketosis"
          intro4="​​Has a natural raspberry and lemon flavor"
          uses="Avoid weakness, fatigue, constipation, sugar cravings, and restlessness while adjusting to keto!"
        />
      </div>
    </section>
    <!-- ProductCard -->
    <section class="my-4">
      <div class="bg-tahiti p-5">
        <p class="text-white font-medium mb-4 text-center text-xl md:text-2xl">
          There you have it, that’s everything included in the Complete Keto Kit
          to make your adjustment to ketosis and continued keto diet as easy to
          follow as possible!
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
              <Button flat="true">Click to Order</Button>
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
          to them? Do you want to improve your health and weight without having
          to diet excessively or undergo surgery?
        </p>
        <br />
        <p class="md:text-xl">
          Then there really is no other option than Healthy Keto and
          Intermittent Fasting, and with the Complete Keto Kit, there really is
          no reason not to get started as soon as possible.
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
          <Button flat="true">Click to Order</Button>
        </div>
      </div>
    </section>
    <section class="my-4 lg:mx-10 xl:mx-20 2xl:mx-40">
      <div class="p-5">
        <h2 class="text-center text-2xl md:text-5xl font-medium mb-4">
          Not convinced yet? Take a look at some of these five-star reviews!
        </h2>
        <div class="card flex gap-4 overflow-x-scroll">
          <ReviewCard
            name="Amazon Customer"
            image="AC"
            date="May 20, 2021"
            description="I like Dr. Berg and his program is helping me to finally fix my slow metabolism and lose weight!"
          />
          <ReviewCard
            name="Jose"
            image="J"
            date="June 22, 2021"
            description="taste great. books are great for beginners."
          />
          <ReviewCard
            name="
            bassma fetaihi"
            image="AC"
            date="Oct 9, 2019"
            description="I love this kit
            Thank you dr berg"
          />
          <ReviewCard
            name="
            Catherine Del Raso"
            image="CDR"
            date="Sep 21, 2019"
            description="Everything you need to know about the Ketogenic lifestyle at your fingertips. The supplements are"
          />
          <ReviewCard
            name="
            April R."
            image="AR"
            date="Oct 9, 2019"
            description="Condensed book is easy to read to get started right away. Products help speed results. I noticed weig"
          />
        </div>
        <div class="text-center mt-4">
          <Button inverse="true" flat="true">Show All Reviews</Button>
        </div>
      </div>
    </section>
  </section>
</main>

<style>
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
</style>
