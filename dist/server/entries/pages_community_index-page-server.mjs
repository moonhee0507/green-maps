import fetch from "node-fetch";
import { A as API_URL } from "../chunks/chunk-8c755a0c.js";
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
