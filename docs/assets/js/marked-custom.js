// marked.js のリンク描画をカスタマイズして、すべてのリンクを新しいタブで開く
const renderer = new marked.Renderer();

renderer.link = function ({ href, title, tokens }) {
  // リンクテキストをレンダリング
  const text = this.parser.parseInline(tokens);

  // title 属性（存在する場合のみ）
  const titleAttr = title ? ` title="${title}"` : "";

  // rel 属性も付けておくと安全
  return `<a href="${href}" target="_blank" rel="noopener noreferrer"${titleAttr}>${text}</a>`;
};

// marked にレンダラーを設定
marked.setOptions({
  renderer: renderer,
});
