import Page1 from "~/components/page/1.vue";
import Page2 from "~/components/page/2.vue";
import Page3 from "~/components/page/3.vue";
import Page4 from "~/components/page/4.vue";
import Page5 from "~/components/page/5.vue";
import Page6 from "~/components/page/6.vue";
import Page7 from "~/components/page/7.vue";
import Page8 from "~/components/page/8.vue";
import Page9 from "~/components/page/9.vue";
import Page10 from "~/components/page/10.vue";
import Page11 from "~/components/page/11.vue";
import Page12 from "~/components/page/12.vue";
import Page13 from "~/components/page/13.vue";
import Page14 from "~/components/page/14.vue";
import Page15 from "~/components/page/15.vue";
import Page16 from "~/components/page/16.vue";
import Page17 from "~/components/page/17.vue";

export const PAGES = {
  // Page1: Page1,
  // Page2: Page2,
  // Page3: Page3,
  // Page4: Page4,
  // Page5: Page5,
  // Page6: Page6,
  // Page7: Page7,
  // Page8: Page8,
  // Page9: Page9,
  // Page10: Page10,
  // Page11: Page11,
  Page12: Page12,
  Page13: Page13,
  Page14: Page14,
  Page15: Page15,
  Page16: Page16,
  Page17: Page17,
};

export const showUpTo = ref(1);

export function appendNextPage(by, scrollTo = false) {
  if (showUpTo.value >= Object.keys(PAGES).length) {
    console.error("");
    return;
  }

  if (by == showUpTo.value) {
    showUpTo.value++;
  }

  if (scrollTo) {
    setTimeout(() => {
      const nextPage = document.getElementById(`page${by + 1}`);
      nextPage.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}

export function onEnterViewportForFirstTime(page, action) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        action();
        observer.unobserve(entries[0].target);
      }
    },
    {
      rootMargin: "-50% 0px -50% 0px",
    }
  );
  observer.observe(document.getElementById(`page${page}`));
}
