<template>
  <div class="about">
    <blockquote class="embedly-card" data-card-controls="0">
      <h4><a href="https://github.com/mengyer34/">GitHub - Mengyer34</a></h4>
      <p>Contribute to mengyer34/mengyer34 development by creating an account on GitHub.</p>
    </blockquote>
  </div>
</template>
<script>
export default {
  mounted() {
    const gitHubEmbedScript = document.createElement("script");
    gitHubEmbedScript.async = true
    gitHubEmbedScript.setAttribute(
      "src",
      "//cdn.embedly.com/widgets/platform.js"
    );    
    gitHubEmbedScript.setAttribute(
      "charset",
      "UTF-8"
    );
    document.head.appendChild(gitHubEmbedScript);
  },
};
</script>
