export const useSummary = () => {
  const summary = useState("summary", () => undefined);
  const appName = useState("appName", () => "UNI");

  const fetchSummary = async () => {
    if (summary.value) return;

    const body = new URLSearchParams();
    body.append("user_itsc", "zyangbh");
    body.append("user_school_label", "UST");
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
    const data = JSON.parse(response).data;
    if (!data) {
      console.error("Failed to fetch summary");
      return;
    }

    summary.value = data;

    console.log(data);

    setAppName(data.user_school_label);
  };

  function setAppName(schoolLabel) {
    switch (schoolLabel) {
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

  return {
    summary,
    fetchSummary,
    appName,
  };
};
