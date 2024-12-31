<template>
  <div class="post-wrapper">
    <div class="post" v-if="postInfo" @click="showDetail">
      <div class="post-header post-row">
        <div class="post-id">#{{ postInfo.post_id }}</div>
        <img
          class="post-avatar"
          :src="
            'https://i.boatonland.com/avatar/' + ( postInfo.user_avatar || 'ufo') + '.svg'
          "
          alt=""
        />
        <div class="post-type">{{ postInfo.post_topic }}</div>
        <div class="post-data">
          <img class="post-icon" :src="'/imgs/icons/sf-star.svg'" alt="" />
          <span>{{ postInfo.post_follower_num }}</span>
        </div>
        <div class="post-data">
          <img class="post-icon" src="/imgs/icons/sf-comment.svg" alt="" />
          <span>{{ postInfo.post_comment_num }}</span>
        </div>
      </div>
      <div class="post-content post-row">
        <div class="post-text">
          {{ postInfo.post_msg.slice(0, 40) }}
        </div>
      </div>
    </div>
    <div class="dim transit" @click="hideDetail"></div>
    <div class="post-expand transit" v-if="postInfo">
      <div class="post-header post-row">
        <div class="post-id">#{{ postInfo.post_id }}</div>
        <img
          class="post-avatar"
          :src="
            'https://i.boatonland.com/avatar/' + ( postInfo.user_avatar || 'ufo') + '.svg'
          "
          alt=""
        />
        <div class="post-type">{{ postInfo.post_topic }}</div>
        <div class="post-data">
          <img class="post-icon" :src="'/imgs/icons/sf-star.svg'" alt="" />
          <span>{{ postInfo.post_follower_num }}</span>
        </div>
        <div class="post-data">
          <img class="post-icon" src="/imgs/icons/sf-comment.svg" alt="" />
          <span>{{ postInfo.post_comment_num }}</span>
        </div>
      </div>
      <div class="post-content post-row">
        <div class="post-text">
          {{ postInfo.post_msg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["postInfo"]);

function showDetail(e) {
  const parentElement = e.target.closest(".post-wrapper");
  const dim = parentElement.querySelector(".dim");
  const postExpand = parentElement.querySelector(".post-expand");
  dim.style.zIndex = "999";
  postExpand.style.zIndex = "999";
  dim.classList.add("active");
  postExpand.classList.add("active");
}

function hideDetail(e) {
  const parentElement = e.target.closest(".post-wrapper");
  const dim = parentElement.querySelector(".dim");
  const postExpand = parentElement.querySelector(".post-expand");
  dim.classList.remove("active");
  postExpand.classList.remove("active");
  setTimeout(() => {
    dim.style.zIndex = "-1";
    postExpand.style.zIndex = "-1";
  }, 500);
}
</script>

<style scoped>
.post-wrapper {
  font-family: var(--ff-post);
}
.post {
  font-size: 0.8rem;
  color: #101010;
  aspect-ratio: 2.75 / 1;
  background-color: white;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;
  padding: 0.2rem 0.7rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  font-size: 1rem;
  overflow: hidden;
  overflow: clip;
  width: auto;
}
.post:not(.post-expand):hover,
.post:not(.post-expand):focus {
  cursor: pointer;
  filter: brightness(0.9);
}

.transit {
  transition: all 0.5s ease-in-out;
  z-index: -1;
}

.active {
  opacity: 1 !important;
}



.post-expand {
  color: #101010;
  position: fixed;
  transform: translateY(calc(-50% - 5svh));
  inset: 50% calc((100vw - var(--width)) / 2 + 0.5rem) auto
    calc((100vw - var(--width)) / 2 + 0.5rem);
  max-height: 60svh;
  background-color: white;
  border-radius: 0.75rem;
  padding: 0.25rem 0.75rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  opacity: 0;
  font-size: 1rem;
}

.dim {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  -webkit-backdrop-filter: blur(0.5rem);
  backdrop-filter: blur(0.5rem);
}

.post-header {
  text-wrap: nowrap;
}

.post-expand .post-header {
  flex-shrink: 0;
  height: 3.5rem;
}

.post-expand .post-content {
  flex-shrink: 0;
  padding-block: 1rem;
}

.post-expand .post-text {
  display: block;
}

.post-row {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: min(0.5rem, 3%);
  align-items: center;
  padding-inline: 0.75rem;
}

.post-row:first-child::after {
  content: "";
  position: absolute;
  bottom: 0.25rem;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #dcdcdc;
}

.post-id {
  font-weight: 700;
}

.post-avatar {
  object-fit: contain;
  object-position: center;
  width: 1.5rem;
  height: 1.5rem;
}

.post-type {
  background-color: var(--clr-background-muted);
  color: var(--clr-text-muted);
  padding: 0.25rem 0.55rem;
  border-radius: 100rem;
  margin-right: auto;
  font-size: 0.875rem;
}

.post-data {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  margin-left: 0.25rem;
  align-items: center;
  color: var(--clr-text-muted);
  font-size: 0.75rem;
}

.post-icon {
  width: 1rem;
  height: 1rem;
}

.post-text {
  max-width: 100%;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;

  text-overflow: ellipsis;
  overflow: hidden;
  overflow: clip;
  overflow-wrap: break-word;
}
</style>
