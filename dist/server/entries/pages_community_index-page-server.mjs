import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-7d23cd09.js";
async function onBeforeRender() {
  try {
    const res = await fetch(`${API_URL}/posts/`);
    const postProps = await res.json();
    const pageProps = { postProps };
    return {
      pageContext: { pageProps }
    };
  } catch (err) {
    console.error(err);
  }
}
export {
  onBeforeRender
};
