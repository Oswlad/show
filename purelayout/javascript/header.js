window.onload = function() {
  if (!window.applicationCache) {
    alert('你的瀏覽器不支援HTML5！');
  }
};

const header = `<h1 class="brand-title">
  <a href="index.html"
    ><i class="fab fa-digital-ocean" style="margin-right: 2px;"></i>s<i
      class="fab fa-weebly"
      style="font-size:24px;margin:0 1px;"
    ></i
    >ald</a
  >
</h1>
<h2 class="brand-tagline">
  <span>前端攻城獅。</span
  ><span>學習✖筆記✖旅行</span><span>✖筆記小角落✖</span>
</h2>
<nav class="nav">
  <ul class="nav-list">
    <li>
      <a href="about.html">關於我</a>
    </li>
    <li>
      <a href="article-list.html">文章列表</a>
    </li>
    <li>
      <a href="https://hackmd.io/@Oswald1428">摘要筆記</a>
    </li>
    <li>
      <a href="pratice-list.html">Try something...</a>
    </li>
  </ul>
</nav>`;
document.write(header);
