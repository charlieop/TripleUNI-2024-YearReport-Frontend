export const useSummary = () => {
  const summary = useState("summary", () => undefined);
  const appName = useState("appName", () => "UNI");

  const fetchSummary = async () => {
    if (summary.value) return;

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const body = new URLSearchParams({
      token: token,
    });

    const response = await $fetch(
      "https://api.uuunnniii.com/v4/report2024/get.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      }
    );
    let data = undefined;
    try {
      data = JSON.parse(response).data;
    } catch (e) {
      console.error("Failed to fetch summary");
      console.log(response);
      return;
    }
    if (!data) {
      console.error("Failed to fetch summary");
      return;
    }

    summary.value = data;

    console.log(data);

    setAppName(data.user_school_label);
  };

  const fetchAIContent = async () => {
    if (!summary.value) return;
    if (
      summary.value.ai_description &&
      summary.value.ai_image &&
      summary.value.ai_title
    )
      return;

    console.log("fetching AI content...");

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const body = new URLSearchParams({
      token: token,
    });

    const response = await $fetch(
      "https://api.uuunnniii.com/v4/report2024/ai.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      }
    );
    let data = undefined;
    try {
      data = JSON.parse(response);
    } catch (e) {
      console.error("Failed to fetch AI content");
      console.log(response);
      return;
    }
    if (!data) {
      console.error("Failed to fetch AI content");
      return;
    }

    summary.value.ai_description = data.ai_description;
    summary.value.ai_image = data.ai_image;
    summary.value.ai_title = data.ai_title;

    console.log(data);
  };

  function setAppName(schoolLabel) {
    switch (schoolLabel.toUpperCase()) {
      case "HKU":
        appName.value = "噗噗";
        break;
      case "UST":
        appName.value = "星尘";
        break;
      case "CUHK":
        appName.value = "哔哔机";
        break;
      default:
        appName.value = "UNI";
    }
  }

  function getPostID(post) {
    if (!post) return undefined;
    switch (summary.value.user_school_label.toUpperCase()) {
      case "HKU":
        return post.hku_post_id;
      case "UST":
        return post.ust_post_id;
      case "CUHK":
        return post.cuhk_post_id;
      default:
        return post.uni_post_id;
    }
  }

  return {
    summary,
    fetchSummary,
    fetchAIContent,
    appName,
    getPostID,
  };
};
