// export const PAGES = {
//   Page1: defineAsyncComponent(() => import("@/components/page/1.vue")),
//   Page2: defineAsyncComponent(() => import("@/components/page/2.vue")),
//   Page3: defineAsyncComponent(() => import("@/components/page/3.vue")),
//   Page4: defineAsyncComponent(() => import("@/components/page/4.vue")),
//   Page5: defineAsyncComponent(() => import("@/components/page/5.vue")),
// };

import Page1 from "~/components/page/1.vue";
import Page2 from "~/components/page/2.vue";
import Page3 from "~/components/page/3.vue";
import Page4 from "~/components/page/4.vue";
import Page5 from "~/components/page/5.vue";

export const PAGES = {
  Page1: Page1,
  Page2: Page2,
  Page3: Page3,
  Page4: Page4,
  Page5: Page5,
 
};

export const showUpTo = ref(1);

export function appendNextPage(by, scrollTo = false) {
  if (showUpTo.value >= Object.keys(PAGES).length) {
    console.error("");
    return;
  }

  if (by >= showUpTo.value) {
    showUpTo.value++;
  }

  if (scrollTo) {
    setTimeout(() => {
      const nextPage = document.getElementById(`page${by + 1}`);
      nextPage.scrollIntoView({ behavior: "smooth" });
    }, 200);
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