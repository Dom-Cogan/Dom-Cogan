// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/build/*",
    "/assets/*"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/domcogan/Development/Apps/Dom-Cogan/.wrangler/tmp/pages-04JfoK/bundledWorker-0.6644096921916198.mjs";
import { isRoutingRuleMatch } from "/Users/domcogan/Development/Apps/Dom-Cogan/node_modules/wrangler/templates/pages-dev-util.ts";
export * from "/Users/domcogan/Development/Apps/Dom-Cogan/.wrangler/tmp/pages-04JfoK/bundledWorker-0.6644096921916198.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=erlngba44zl.js.map
