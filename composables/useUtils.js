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

export function sendViewPageTracking(page_num) {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const body = new URLSearchParams({
    token: token,
    page: page_num,
  });

  const response = $fetch(
    "https://api.uuunnniii.com/v4/report2024/record.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    }
  );
}
