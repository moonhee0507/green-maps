// vite.config.ts
import basicSsl from "file:///C:/Users/pc/Desktop/%EB%A9%8B%EC%9F%81%EC%9D%B4%20%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC%20FE%202%EA%B8%B0/green-maps/node_modules/@vitejs/plugin-basic-ssl/dist/index.mjs";
import react from "file:///C:/Users/pc/Desktop/%EB%A9%8B%EC%9F%81%EC%9D%B4%20%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC%20FE%202%EA%B8%B0/green-maps/node_modules/@vitejs/plugin-react/dist/index.mjs";
import ssr from "file:///C:/Users/pc/Desktop/%EB%A9%8B%EC%9F%81%EC%9D%B4%20%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC%20FE%202%EA%B8%B0/green-maps/node_modules/vite-plugin-ssr/dist/cjs/node/plugin/index.js";
import vercel from "file:///C:/Users/pc/Desktop/%EB%A9%8B%EC%9F%81%EC%9D%B4%20%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC%20FE%202%EA%B8%B0/green-maps/node_modules/vite-plugin-vercel/dist/index.js";
import vercelSsr from "file:///C:/Users/pc/Desktop/%EB%A9%8B%EC%9F%81%EC%9D%B4%20%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC%20FE%202%EA%B8%B0/green-maps/node_modules/@magne4000/vite-plugin-vercel-ssr/dist/vite-plugin-ssr.js";
import { defineConfig } from "file:///C:/Users/pc/Desktop/%EB%A9%8B%EC%9F%81%EC%9D%B4%20%EC%82%AC%EC%9E%90%EC%B2%98%EB%9F%BC%20FE%202%EA%B8%B0/green-maps/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(async ({ command, mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [basicSsl(), react(), ssr({ prerender: { partial: true } }), vercel(), vercelSsr()],
    build: {
      manifest: true
    },
    server: {
      https: true,
      middlewareMode: true,
      port: 5e3
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwY1xcXFxEZXNrdG9wXFxcXFx1QkE0Qlx1QzdDMVx1Qzc3NCBcdUMwQUNcdUM3OTBcdUNDOThcdUI3RkMgRkUgMlx1QUUzMFxcXFxncmVlbi1tYXBzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwY1xcXFxEZXNrdG9wXFxcXFx1QkE0Qlx1QzdDMVx1Qzc3NCBcdUMwQUNcdUM3OTBcdUNDOThcdUI3RkMgRkUgMlx1QUUzMFxcXFxncmVlbi1tYXBzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9wYy9EZXNrdG9wLyVFQiVBOSU4QiVFQyU5RiU4MSVFQyU5RCVCNCUyMCVFQyU4MiVBQyVFQyU5RSU5MCVFQyVCMiU5OCVFQiU5RiVCQyUyMEZFJTIwMiVFQSVCOCVCMC9ncmVlbi1tYXBzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IGJhc2ljU3NsIGZyb20gJ0B2aXRlanMvcGx1Z2luLWJhc2ljLXNzbCc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBzc3IgZnJvbSAndml0ZS1wbHVnaW4tc3NyL3BsdWdpbic7XHJcbmltcG9ydCB2ZXJjZWwgZnJvbSAndml0ZS1wbHVnaW4tdmVyY2VsJztcclxuaW1wb3J0IHZlcmNlbFNzciBmcm9tICdAbWFnbmU0MDAwL3ZpdGUtcGx1Z2luLXZlcmNlbC1zc3InO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIFVzZXJDb25maWcgfSBmcm9tICd2aXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhhc3luYyAoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcclxuICAgIGNvbnN0IGlzUHJvZHVjdGlvbiA9IG1vZGUgPT09ICdwcm9kdWN0aW9uJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBsdWdpbnM6IFtiYXNpY1NzbCgpLCByZWFjdCgpLCBzc3IoeyBwcmVyZW5kZXI6IHsgcGFydGlhbDogdHJ1ZSB9IH0pLCB2ZXJjZWwoKSwgdmVyY2VsU3NyKCldLFxyXG4gICAgICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgICAgIG1hbmlmZXN0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VydmVyOiB7XHJcbiAgICAgICAgICAgIGh0dHBzOiB0cnVlLFxyXG4gICAgICAgICAgICBtaWRkbGV3YXJlTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgcG9ydDogNTAwMCxcclxuICAgICAgICB9LFxyXG4gICAgfSBhcyBVc2VyQ29uZmlnO1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyWSxPQUFPLGNBQWM7QUFDaGEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsb0JBQWdDO0FBRXpDLElBQU8sc0JBQVEsYUFBYSxPQUFPLEVBQUUsU0FBUyxLQUFLLE1BQU07QUFDckQsUUFBTSxlQUFlLFNBQVM7QUFFOUIsU0FBTztBQUFBLElBQ0gsU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEtBQUssRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLFVBQVUsQ0FBQztBQUFBLElBQzNGLE9BQU87QUFBQSxNQUNILFVBQVU7QUFBQSxJQUNkO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixNQUFNO0FBQUEsSUFDVjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
