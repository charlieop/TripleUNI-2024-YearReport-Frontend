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
    let code = undefined;
    let msg = undefined;
    try {
      const pharse = JSON.parse(response);
      data = pharse.data;
      code = pharse.code;
      msg = pharse.msg;
    } catch (e) {
      console.error("Failed to fetch summary");
      console.log(response);
      return;
    }
    if (code !== 200) {
      console.error("Failed to fetch summary");
      console.log(response);
      if (code === 400) {
        alert("无法找到你的年度总结数据, 明年再来吧!");
      } else {
        alert("我们遇到了一个错误, 请稍后重试." + "\nMsg:" + msg + "\nCode:" + code);
      }
      return;
    }

    if (!data) {
      console.error("Failed to fetch summary");
      console.log(response);
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

const DUMMY_DATA = {
  ai_description:
    "故事发生在繁忙而充满活力的香港大学校园，主角Vector是一个热爱探索与学习的学生。他在林荫道中漫步，思考着自己的未来，与此同时，他的耳边不断传来各式各样的声音——同学们在讨论金融市场和各种名企的实习机会以及街头巷尾那些有趣的话题。\n\nVector是一个好奇心旺盛的人，他从不轻易停止对新领域的探索。虽然自今年初以来他的发帖量减少了，但他在校园活动中依旧活跃。每到下午，他倾向于在学校图书馆或者咖啡厅里坐上几个小时，手里捧着笔记本，记录自己偶然想到的灵感或是某个研究课题的点滴想法。\n\n在他的网络生活中，他频繁使用着特定的表情符号，不时地在讨论某些商业相关话题的树洞中留下可爱的痕迹。他的搜索记录显示，他对某个神秘关键词“gxr”极感兴趣，这或许是一种联结，将其与拓展视野和人际关系的渴望联系在一起。\n\n在一个阳光明媚的下午，他再次驻足在论坛上，他看到了一则关于职场经验分享的帖子，忍不住留下了自己的评论和思考。为了更好地为自己规划一条充满潜力的职业道路，他开始围观别人丰富的职场经历，观察他们的成功与失误。\n\nVector的生活看似简单，却充满了惊喜。他热爱生活中的小冒险，无论是参与学校的街访活动，还是在图书馆中孜孜不倦地汲取知识。Vector的故事尚未结束，这位勤勉的年轻人在校园内外都留下了积极的足迹，并始终期待着探索更多未知的可能性。",
  ai_image:
    "https://i.boatonland.com/report2024/MAWazn754ZphYNxmr74MHB2bKPF8P3aT.png",
  ai_title: "充满探求的校园多面手",
  earliest_post: {
    date: "2024-02-13",
    time: "08:00",
    data: {
      is_author: false,
      is_following: false,
      post_comment_num: 11,
      post_create_time: 1707752472,
      post_follower_num: 2,
      post_id: 393422,
      post_image: [
        "https://i.boatonland.com/HKU/post/mNzGZcXrS5et6WtrSzm4iFs3PptEKhp5.jpg",
      ],
      post_is_uni: true,
      post_media: null,
      post_msg: "fwb协议自取",
      post_msg_markdown: null,
      post_msg_short: "fwb协议自取",
      post_msg_short_is_complete: true,
      post_public: 0,
      post_topic: "情感",
      post_view: 952,
      uni_post_id: 688507,
      user_alias: "洞主",
      user_alias_new: "洞主",
      user_avatar: "hkughost",
      user_is_org: false,
      user_is_real_name: false,
      user_school_label: "HKU",
      user_serial: null,
    },
  },
  latest_post: {
    date: "2024-02-28",
    time: "05:59",
    data: {
      is_author: false,
      is_following: false,
      post_comment_num: 8,
      post_create_time: 1709040903,
      post_follower_num: 2,
      post_id: 400089,
      post_image: null,
      post_is_uni: false,
      post_media: null,
      post_msg:
        "小姐姐知道你也混噗噗，但你这样的吃相未免有些太难看了吧🤣既然能接受蹭来的流量，就也要能接受被流量反噬的结果呀",
      post_msg_markdown: null,
      post_msg_short:
        "小姐姐知道你也混噗噗，但你这样的吃相未免有些太难看了吧🤣既然能接受蹭来的流量，就也要能接受被流量反噬",
      post_msg_short_is_complete: false,
      post_public: 1,
      post_topic: "随写",
      post_view: 540,
      uni_post_id: 696009,
      user_alias: "洞主",
      user_alias_new: "洞主",
      user_avatar: "hkughost",
      user_is_org: false,
      user_is_real_name: false,
      user_school_label: "HKU",
      user_serial: null,
    },
  },
  max_follow_post: {
    data: {
      is_author: false,
      is_following: true,
      post_comment_num: 37,
      post_create_time: 1717760336,
      post_follower_num: 226,
      post_id: 429537,
      post_image: null,
      post_is_uni: true,
      post_media: null,
      post_msg:
        "一个B22商科生的求职takeaway\n【本树洞是 #428216 的续篇】\n应亲爱的树洞洞友们的反馈，洞主在这里斗胆分享一些求职道路上的心得体会。我深知树洞里的金融大佬们藏龙卧虎，有神仙offer的大神与久经recruiting沙场的老将们不知凡几，我十分清楚自己在这里只是一个求职路上的小学生，如果有说的不对的地方请各位不吝赐教。我自己的求职主要是偏向一级市场方向，所以在这里贴出我的ibd求职经历，供大家参考。\n\n我的求职经过：上一个时代的求职道路\n\n可能和大多数学弟妹们一样，我刚刚入学的时候对于整个商科的求职一无所知：完全不知道投行、券商、咨询、买方、卖方这些名词意味着什么；我的家庭也没有能力将我送到那些名头响亮的公司去做实习。我主要是靠自己的误打误撞加上一点运气实现的上岸。\n我的第一份实习是大一升大二的暑假家里面托关系找的一间三流的本地小券商，我在里面做宏观组的行研。作为打招呼的关系户，还是大一的学生，我基本上什么也不会，带教也没有给我任何与专业相关的任务——我被当做吉祥物供了起来，每天上午十一点到办公室，下午三四点走人，日子好不清闲快活。然而，问题是我几乎没有任何可以往简历上书写的东西，我只好读了几篇水水的报告在简历上假装成我自己的成果，但好在2020年的金融市场一片火热，我很快找到了下一份实习。",
      post_msg_markdown:
        "一个B22商科生的求职takeaway\n\n【本树洞是 #428216 的续篇】\n\n应亲爱的树洞洞友们的反馈，洞主在这里斗胆分享一些求职道路上的心得体会。我深知树洞里的金融大佬们藏龙卧虎，有神仙offer的大神与久经recruiting沙场的老将们不知凡几，我十分清楚自己在这里只是一个求职路上的小学生，如果有说的不对的地方请各位不吝赐教。我自己的求职主要是偏向一级市场方向，所以在这里贴出我的ibd求职经历，供大家参考。\n\n1.\t我的求职经过：上一个时代的求职道路\n\n可能和大多数学弟妹们一样，我刚刚入学的时候对于整个商科的求职一无所知：完全不知道投行、券商、咨询、买方、卖方这些名词意味着什么；我的家庭也没有能力将我送到那些名头响亮的公司去做实习。我主要是靠自己的误打误撞加上一点运气实现的上岸。\n\n我的第一份实习是大一升大二的暑假家里面托关系找的一间三流的本地小券商，我在里面做宏观组的行研。作为打招呼的关系户，还是大一的学生，我基本上什么也不会，带教也没有给我任何与专业相关的任务——我被当做吉祥物供了起来，每天上午十一点到办公室，下午三四点走人，日子好不清闲快活。然而，问题是我几乎没有任何可以往简历上书写的东西，我只好读了几篇水水的报告在简历上假装成我自己的成果，但好在2020年的金融市场一片火热，我很快找到了下一份实习。",
      post_msg_short:
        "一个B22商科生的求职takeaway\n【本树洞是 #428216 的续篇】\n应亲爱的树洞洞友们的反馈，洞主在这里斗胆分享",
      post_msg_short_is_complete: false,
      post_public: 1,
      post_topic: "求职",
      post_view: 2668,
      uni_post_id: 731410,
      user_alias: "洞主",
      user_alias_new: "洞主",
      user_avatar: "hkughost",
      user_is_org: false,
      user_is_real_name: false,
      user_school_label: "HKU",
      user_serial: null,
    },
    rank: 35,
    post_id: 429537,
  },
  min_follow_post: {
    data: {
      is_author: false,
      is_following: true,
      post_comment_num: 3,
      post_create_time: 1731288143,
      post_follower_num: 1,
      post_id: 468395,
      post_image: null,
      post_is_uni: false,
      post_media: null,
      post_msg:
        "HKUPootal街访｜预知结局的水晶球🔮\n\nHiii！一年一度的双十一街访又如期而至啦，小噗今天会在港大校园做街访喔！\n\n这次的街访问题【假如你有预知感情结局的水晶球，你会不会选择预知结局呢？】欢迎大家带着你的答案来找小噗分享哦～\n\n接受采访更能赢取Pootal可爱周边，机不可失失不再来，快来偶遇小噗吧🙌🏻",
      post_msg_markdown: null,
      post_msg_short:
        "HKUPootal街访｜预知结局的水晶球🔮\n\nHiii！一年一度的双十一街访又如期而至啦，小噗今天会在港大校园做街访",
      post_msg_short_is_complete: false,
      post_public: 1,
      post_topic: "随写",
      post_view: 346,
      uni_post_id: 778299,
      user_alias: "HKUPootal",
      user_alias_new: "HKUPootal",
      user_avatar: "stars-1",
      user_is_org: true,
      user_is_real_name: true,
      user_school_label: "HKU",
      user_serial: "HKUPootal",
    },
  },
  most_comment_post: {
    post_id: 419705,
    comment_count: 32,
  },
  most_follow_post: {
    post_id: 420117,
    follow_count: 15,
  },
  most_view_post: {
    post_id: 420683,
    view_count: 1876,
  },
  total_hour_distribution: [
    0.05518483853863674, 0.03967626154100451, 0.02402215858554851,
    0.014038469657256405, 0.008820822930955402, 0.006483373726401897,
    0.006872546094251447, 0.011977492939262993, 0.02367296784225165,
    0.035682750191947575, 0.044147942386389576, 0.04999241511910052,
    0.052970196426948654, 0.05473153457167247, 0.055681433571112195,
    0.05616783194766146, 0.05783981518650578, 0.057399570094675056,
    0.05549494210088321, 0.05407563915143787, 0.055614886974541276,
    0.05861914381005741, 0.0602447054311325, 0.06058826118036489,
  ],
  total_post_count: 85676,
  user_achievements: [
    {
      title: "凑凑热度",
      description: "围观了7次自己的树洞",
      importance: 5,
    },
    {
      title: "铁暗恋",
      description: "搜索「gxr」超过28次",
      importance: 5,
    },
    {
      title: "爆款制造机",
      description: "发布的内容浏览量达1876次",
      importance: 4,
    },
    {
      title: "瓜田守望者",
      description: "浏览超过1188次热榜",
      importance: 4,
    },
    {
      title: "评论区话事人",
      description: "评论超过802条",
      importance: 4,
    },
    {
      title: "闰日之声",
      description: "2月29日在树洞留下足迹",
      importance: 4,
    },
    {
      title: "STAT2601",
      description: "在树洞讨论wat相关内容",
      importance: 3,
    },
    {
      title: "树洞探长",
      description: "搜索达到1592次",
      importance: 3,
    },
    {
      title: "洞海遨游",
      description: "在线天数达到334天",
      importance: 3,
    },
    {
      title: "瞌睡噗",
      description: "熬夜超过51.5%",
      importance: 3,
    },
    {
      title: "博览群洞",
      description: "浏览了7950条树洞",
      importance: 2,
    },
    {
      title: "植树有方",
      description: "发布了113条树洞",
      importance: 2,
    },
  ],
  user_comment_for_top10:
    "你能自己申请退学吗？不能至少先把奖学金捐出来做慈善了，这样洞友可能就心善不举报你了",
  user_commented_top10: true,
  user_create_date: null,
  user_create_date_rank: null,
  user_create_date_till_now: null,
  user_date_count: 334,
  user_first_see_post: {
    is_author: false,
    is_following: false,
    post_comment_num: 36,
    post_create_time: 1704039556,
    post_follower_num: 1,
    post_id: 376912,
    post_image: null,
    post_is_uni: true,
    post_media: null,
    post_msg:
      "新的一年，祝所有看到这条的朋友们\n学业事业顺顺利利\n爱情桃花全面开花\n家人健康平安\n财源滚滚\n心想事成\n一起幸福吧我们！！",
    post_msg_markdown: null,
    post_msg_short:
      "新的一年，祝所有看到这条的朋友们\n学业事业顺顺利利\n爱情桃花全面开花\n家人健康平安\n财源滚滚\n心想事成\n一",
    post_msg_short_is_complete: false,
    post_public: 1,
    post_topic: "随写",
    post_view: 458,
    uni_post_id: 668333,
    user_alias: "洞主",
    user_alias_new: "洞主",
    user_avatar: "hkughost",
    user_is_org: false,
    user_is_real_name: false,
    user_school_label: "HKU",
    user_serial: null,
  },
  user_followed_no_review_post_count: "0",
  user_followed_top10: false,
  user_frequent_emoji: ["😭", "😅", "📚", "😡", "🔍"],
  user_frequent_post_keyword: "啊啊啊",
  user_frequent_search_keyword: "gxr",
  user_frequent_search_keyword_user_count: 230,
  user_frequent_view_keyword: "生活",
  user_frequent_view_topic: "投票",
  user_hour_distribution: [
    0.04806617482673821, 0.04337133914598704, 0.038005812653699976,
    0.03420523138832998, 0.027721886876816454, 0.02682763246143528,
    0.023027051196065282, 0.02157388777107087, 0.035881958417169686,
    0.04381846635367762, 0.04415381175944556, 0.05644980997093673,
    0.057902973395931145, 0.06606304493628437, 0.06997540800357702,
    0.05119606528057232, 0.05365526492287056, 0.04225352112676056,
    0.03085177733065057, 0.02157388777107087, 0.027833668678739102,
    0.03699977643639615, 0.04493628437290409, 0.05365526492287056,
  ],
  user_minute_count: 8946,
  user_minute_count_rank: 102,
  user_most_common_time_period: "下午",
  user_old_achievements: [
    {
      title: "凑凑热度",
      description: "围观了7次自己的树洞",
      importance: 5,
    },
    {
      title: "原神，启动！",
      description: "在树洞讨论原神相关内容",
      importance: 5,
    },
    {
      title: "铁暗恋",
      description: "搜索「dsq」超过14次",
      importance: 5,
    },
    {
      title: "尊嘟假嘟？",
      description: "一天内浏览超过408分钟",
      importance: 4,
    },
    {
      title: "校园小微博",
      description: "浏览超过1819次热榜",
      importance: 4,
    },
    {
      title: "流量掌控者",
      description: "发布的内容浏览量达1256次",
      importance: 4,
    },
    {
      title: "STAT2601",
      description: "在树洞讨论wat相关内容",
      importance: 3,
    },
    {
      title: "树洞挖掘机",
      description: "搜索达到3617次",
      importance: 3,
    },
    {
      title: "骨灰级用户",
      description: "在线天数达到349天",
      importance: 3,
    },
    {
      title: "博览群洞",
      description: "浏览了11609条树洞",
      importance: 2,
    },
    {
      title: "树洞连篇",
      description: "发布了175条树洞",
      importance: 2,
    },
    {
      title: "规律作息",
      description: "熬夜少于43.52%",
      importance: 1,
    },
  ],
  user_pm_count: 92,
  user_pm_user_count: 32,
  user_post_count: 113,
  user_post_count_diff: -62,
  user_post_count_rank_percentage: 98.99,
  user_school_label: "HKU",
  user_search_count: 1592,
  user_serial: "vector",
  user_stayup_percentage: 51.5,
  user_view_post_count: 7950,
  user_view_post_count_percentage: 98.28,
};
