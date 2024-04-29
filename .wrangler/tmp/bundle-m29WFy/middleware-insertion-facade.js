				import worker, * as OTHER_EXPORTS from "/Users/domcogan/Development/Apps/Dom-Cogan/.wrangler/tmp/pages-KWvfC1/5ahm6ab3l1c.js";
				import * as __MIDDLEWARE_0__ from "/Users/domcogan/Development/Apps/Dom-Cogan/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/Users/domcogan/Development/Apps/Dom-Cogan/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/Users/domcogan/Development/Apps/Dom-Cogan/.wrangler/tmp/pages-KWvfC1/5ahm6ab3l1c.js";
				export default worker;