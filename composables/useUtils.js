export function unhide(el) {
  if (!el) return;
  el.classList.remove("hide");
}

export function unhideAll(page_num, queries) {
  queries.forEach((query) => {
    const query_els = document.querySelectorAll(`.page${page_num} ${query}`);
    if (query_els) {
      query_els.forEach((el) => {
        unhide(el);
      });
    }
  });
}
