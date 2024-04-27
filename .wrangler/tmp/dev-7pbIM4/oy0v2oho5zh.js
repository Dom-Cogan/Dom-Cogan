var __require = /* @__PURE__ */ ((x3) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x3)(function(x3) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});

// .wrangler/tmp/bundle-gAyWUI/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-x98Tcq/bundledWorker-0.7336342891095617.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require2 = /* @__PURE__ */ ((x3) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x3, {
  get: (a, b2) => (typeof __require !== "undefined" ? __require : a)[b2]
}) : x3)(function(x3) {
  if (typeof __require !== "undefined")
    return __require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x3 + '" is not supported');
});
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
function checkURL2(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls2.has(url.toString())) {
      urls2.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
var urls2;
var init_checked_fetch = __esm({
  "../.wrangler/tmp/bundle-bDoo7I/checked-fetch.js"() {
    "use strict";
    urls2 = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL2(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});
var init_modules_watch_stub = __esm({
  "../node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});
var require_browser = __commonJS({
  "../node_modules/isomorphic-form-data/lib/browser.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = window.FormData;
  }
});
var require_browser_ponyfill = __commonJS({
  "../node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    var global = typeof self !== "undefined" ? self : exports;
    var __self__ = function() {
      function F4() {
        this.fetch = false;
        this.DOMException = global.DOMException;
      }
      F4.prototype = global;
      return new F4();
    }();
    (function(self2) {
      var irrelevant = function(exports2) {
        var support = {
          searchParams: "URLSearchParams" in self2,
          iterable: "Symbol" in self2 && "iterator" in Symbol,
          blob: "FileReader" in self2 && "Blob" in self2 && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in self2,
          arrayBuffer: "ArrayBuffer" in self2
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError("Invalid character in header field name");
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers2(headers) {
          this.map = {};
          if (headers instanceof Headers2) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers2.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers2.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers2.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers2.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers2.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers2.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers2.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers2.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers2.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers2.prototype[Symbol.iterator] = Headers2.prototype.entries;
        }
        function consumed(body) {
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsText(blob);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this._bodyInit = body;
            if (!body) {
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
              } else {
                return this.blob().then(readBlobAsArrayBuffer);
              }
            };
          }
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request2(input, options) {
          options = options || {};
          var body = options.body;
          if (input instanceof Request2) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers2(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers2(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal;
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
        }
        Request2.prototype.clone = function() {
          return new Request2(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers2();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              headers.append(key, value);
            }
          });
          return headers;
        }
        Body.call(Request2.prototype);
        function Response2(bodyInit, options) {
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = "statusText" in options ? options.statusText : "OK";
          this.headers = new Headers2(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response2.prototype);
        Response2.prototype.clone = function() {
          return new Response2(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers2(this.headers),
            url: this.url
          });
        };
        Response2.error = function() {
          var response = new Response2(null, { status: 0, statusText: "" });
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response2.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response2(null, { status, headers: { location: url } });
        };
        exports2.DOMException = self2.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request2(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              resolve(new Response2(body, options));
            };
            xhr.onerror = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.ontimeout = function() {
              reject(new TypeError("Network request failed"));
            };
            xhr.onabort = function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr && support.blob) {
              xhr.responseType = "blob";
            }
            request.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!self2.fetch) {
          self2.fetch = fetch2;
          self2.Headers = Headers2;
          self2.Request = Request2;
          self2.Response = Response2;
        }
        exports2.Headers = Headers2;
        exports2.Request = Request2;
        exports2.Response = Response2;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__self__);
    __self__.fetch.ponyfill = true;
    delete __self__.fetch.polyfill;
    var ctx = __self__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});
init_checked_fetch();
init_modules_watch_stub();
init_checked_fetch();
init_modules_watch_stub();
init_checked_fetch();
init_modules_watch_stub();
init_checked_fetch();
init_modules_watch_stub();
init_checked_fetch();
init_modules_watch_stub();
var notFounds = [
  [
    "/",
    '<html>\n<head>\n  <meta charset="utf-8">\n  <meta http-equiv="Status" content="404">\n  <title>404 Resource Not Found</title>\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <style>\n    body { color: #006ce9; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }\n    p { max-width: 600px; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px #006ce9; overflow: hidden; }\n    strong { display: inline-block; padding: 15px; background: #006ce9; color: white; }\n    span { display: inline-block; padding: 15px; }\n  </style>\n</head>\n<body><p><strong>404</strong> <span>Resource Not Found</span></p></body>\n</html>'
  ]
];
function getNotFound(p) {
  for (const r of notFounds) {
    if (p.startsWith(r[0])) {
      return r[1];
    }
  }
  return "Resource Not Found";
}
init_checked_fetch();
init_modules_watch_stub();
var staticPaths = /* @__PURE__ */ new Set(["/_headers", "/_redirects", "/favicon.svg", "/manifest.json", "/q-manifest.json", "/qwik-prefetch-service-worker.js", "/robots.txt", "/service-worker.js", "/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== "GET") {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith("/q-data.json")) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, "");
    if (staticPaths.has(pWithoutQdata + "/")) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
init_checked_fetch();
init_modules_watch_stub();
var yt = (t) => t && typeof t.nodeType == "number";
var ps = (t) => t.nodeType === 9;
var St = (t) => t.nodeType === 1;
var vt = (t) => {
  const e = t.nodeType;
  return e === 1 || e === 111;
};
var Lo = (t) => {
  const e = t.nodeType;
  return e === 1 || e === 111 || e === 3;
};
var nt = (t) => t.nodeType === 111;
var cn = (t) => t.nodeType === 3;
var te = (t) => t.nodeType === 8;
var Et = (t, ...e) => ln(false, t, ...e);
var hs = (t, ...e) => {
  throw ln(false, t, ...e);
};
var $n = (t, ...e) => ln(true, t, ...e);
var at = () => {
};
var Oo = (t) => t;
var ln = (t, e, ...n) => {
  const s = e instanceof Error ? e : new Error(e);
  return console.error("%cQWIK ERROR", "", s.message, ...Oo(n), s.stack), t && setTimeout(() => {
    throw s;
  }, 0), s;
};
var Te = (t) => `Code(${t}) https://github.com/BuilderIO/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8 + t}`;
var P = (t, ...e) => {
  const n = Te(t, ...e);
  return $n(n, ...e);
};
var Co = () => ({ isServer: true, importSymbol(t, e, n) {
  var r;
  {
    const i = qo(n), c2 = (r = globalThis.__qwik_reg_symbols) == null ? void 0 : r.get(i);
    if (c2)
      return c2;
  }
  if (!e)
    throw P(31, n);
  if (!t)
    throw P(30, e, n);
  const s = Do(t.ownerDocument, t, e).toString(), o = new URL(s);
  return o.hash = "", o.search = "", import(o.href).then((i) => i[n]);
}, raf: (t) => new Promise((e) => {
  requestAnimationFrame(() => {
    e(t());
  });
}), nextTick: (t) => new Promise((e) => {
  setTimeout(() => {
    e(t());
  });
}), chunkForSymbol: (t, e) => [t, e ?? "_"] });
var Do = (t, e, n) => {
  const s = t.baseURI, o = new URL(e.getAttribute("q:base") ?? s, s);
  return new URL(n, o);
};
var an = Co();
var m$ = (t) => an = t;
var qe = () => an;
var V = () => an.isServer;
var ee = (t) => {
  const e = Object.getPrototypeOf(t);
  return e === Object.prototype || e === null;
};
var ct = (t) => !!t && typeof t == "object";
var A = (t) => Array.isArray(t);
var ut = (t) => typeof t == "string";
var J = (t) => typeof t == "function";
var L = (t) => t && typeof t.then == "function";
var Ie = (t, e, n) => {
  try {
    const s = t();
    return L(s) ? s.then(e, n) : e(s);
  } catch (s) {
    return n(s);
  }
};
var I = (t, e) => L(t) ? t.then(e) : e(t);
var un = (t) => t.some(L) ? Promise.all(t) : t;
var At = (t) => t.length > 0 ? Promise.all(t) : t;
var ms = (t) => t != null;
var Fo = (t) => new Promise((e) => {
  setTimeout(e, t);
});
var tt = [];
var O = {};
var ne = (t) => typeof document < "u" ? document : t.nodeType === 9 ? t : t.ownerDocument;
var G = "q:slot";
var ke = "q:style";
var Ge = Symbol("proxy target");
var Mt = Symbol("proxy flags");
var et = Symbol("proxy manager");
var M = Symbol("IMMUTABLE");
var Re = "_qc_";
var H = (t, e, n) => t.setAttribute(e, n);
var Z = (t, e) => t.getAttribute(e);
var fn = (t) => t.replace(/([A-Z])/g, "-$1").toLowerCase();
var Qo = (t) => t.replace(/-./g, (e) => e[1].toUpperCase());
var Wo = /^(on|window:|document:)/;
var gs = "preventdefault:";
var dn = (t) => t.endsWith("$") && Wo.test(t);
var pn = (t) => {
  if (t.length === 0)
    return tt;
  if (t.length === 1) {
    const n = t[0];
    return [[n[0], [n[1]]]];
  }
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const s = t[n][0];
    e.includes(s) || e.push(s);
  }
  return e.map((n) => [n, t.filter((s) => s[0] === n).map((s) => s[1])]);
};
var hn = (t, e, n, s) => {
  if (e.endsWith("$"), e = Xe(e.slice(0, -1)), n)
    if (A(n)) {
      const o = n.flat(1 / 0).filter((r) => r != null).map((r) => [e, Jn(r, s)]);
      t.push(...o);
    } else
      t.push([e, Jn(n, s)]);
  return e;
};
var Vn = ["on", "window:on", "document:on"];
var Uo = ["on", "on-window", "on-document"];
var Xe = (t) => {
  let e = "on";
  for (let n = 0; n < Vn.length; n++) {
    const s = Vn[n];
    if (t.startsWith(s)) {
      e = Uo[n], t = t.slice(s.length);
      break;
    }
  }
  return e + ":" + (t = t.startsWith("-") ? fn(t.slice(1)) : t.toLowerCase());
};
var Jn = (t, e) => (t.$setContainer$(e), t);
var Bo = (t, e) => {
  const n = t.$element$.attributes, s = [];
  for (let o = 0; o < n.length; o++) {
    const { name: r, value: i } = n.item(o);
    if (r.startsWith("on:") || r.startsWith("on-window:") || r.startsWith("on-document:")) {
      const c2 = i.split(`
`);
      for (const $3 of c2) {
        const l = Ce($3, e);
        l.$capture$ && So(l, t), s.push([r, l]);
      }
    }
  }
  return s;
};
var Ho = (t, e) => {
  Ss(ys(t, void 0), e);
};
var Gn = (t, e) => {
  Ss(ys(t, "document"), e);
};
var ys = (t, e) => {
  const n = e !== void 0 ? e + ":" : "";
  return Array.isArray(t) ? t.map((s) => `${n}on-${s}`) : `${n}on-${t}`;
};
var Ss = (t, e) => {
  if (e) {
    const n = Gs(), s = Q(n.$hostElement$, n.$renderCtx$.$static$.$containerState$);
    typeof t == "string" ? s.li.push([Xe(t), e]) : s.li.push(...t.map((o) => [Xe(o), e])), s.$flags$ |= ht;
  }
};
var Vo = (t, e, n, s) => {
  typeof CustomEvent == "function" && t && t.dispatchEvent(new CustomEvent(e, { detail: n, bubbles: s, composed: s }));
};
var mn = (t, e, n = 0) => e.$proxyMap$.get(t) || (n !== 0 && Me(t, n), se(t, e, void 0));
var se = (t, e, n) => {
  $e(t), e.$proxyMap$.has(t);
  const s = e.$subsManager$.$createManager$(n), o = new Proxy(t, new vs(e, s));
  return e.$proxyMap$.set(t, o), o;
};
var Ae = () => {
  const t = {};
  return Me(t, 2), t;
};
var Me = (t, e) => {
  Object.defineProperty(t, Mt, { value: e, enumerable: false });
};
var vs = class {
  constructor(e, n) {
    this.$containerState$ = e, this.$manager$ = n;
  }
  deleteProperty(e, n) {
    if (2 & e[Mt])
      throw P(17);
    return typeof n == "string" && delete e[n] && (this.$manager$.$notifySubs$(A(e) ? void 0 : n), true);
  }
  get(e, n) {
    var l;
    if (typeof n == "symbol")
      return n === Ge ? e : n === et ? this.$manager$ : e[n];
    const s = e[Mt] ?? 0, o = rt(), r = !!(1 & s), i = e["$$" + n];
    let c2, $3;
    if (o && (c2 = o.$subscriber$), !(2 & s) || n in e && !Jo((l = e[M]) == null ? void 0 : l[n]) || (c2 = null), i ? ($3 = i.value, c2 = null) : $3 = e[n], c2) {
      const a = A(e);
      this.$manager$.$addSub$(c2, a ? void 0 : n);
    }
    return r ? Go($3, this.$containerState$) : $3;
  }
  set(e, n, s) {
    if (typeof n == "symbol")
      return e[n] = s, true;
    const o = e[Mt] ?? 0;
    if (2 & o)
      throw P(17);
    const r = 1 & o ? $e(s) : s;
    if (A(e))
      return e[n] = r, this.$manager$.$notifySubs$(), true;
    const i = e[n];
    return e[n] = r, i !== r && this.$manager$.$notifySubs$(n), true;
  }
  has(e, n) {
    if (n === Ge)
      return true;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(e, n) || !(typeof n != "string" || !s.call(e, "$$" + n));
  }
  ownKeys(e) {
    if (!(2 & (e[Mt] ?? 0))) {
      let s = null;
      const o = rt();
      o && (s = o.$subscriber$), s && this.$manager$.$addSub$(s);
    }
    return A(e) ? Reflect.ownKeys(e) : Reflect.ownKeys(e).map((s) => typeof s == "string" && s.startsWith("$$") ? s.slice(2) : s);
  }
  getOwnPropertyDescriptor(e, n) {
    return A(e) || typeof n == "symbol" ? Object.getOwnPropertyDescriptor(e, n) : { enumerable: true, configurable: true };
  }
};
var Jo = (t) => t === M || C(t);
var Go = (t, e) => {
  if (ct(t)) {
    if (Object.isFrozen(t))
      return t;
    const n = $e(t);
    if (n !== t || Eo(n))
      return t;
    if (ee(n) || A(n))
      return e.$proxyMap$.get(n) || mn(n, e, 1);
  }
  return t;
};
var Tt = () => {
  const t = Gs(), e = Q(t.$hostElement$, t.$renderCtx$.$static$.$containerState$), n = e.$seq$ || (e.$seq$ = []), s = t.$i$++;
  return { val: n[s], set: (o) => n[s] = o, i: s, iCtx: t, elCtx: e };
};
var $t = (t) => Object.freeze({ id: fn(t) });
var lt = (t, e) => {
  const { val: n, set: s, elCtx: o } = Tt();
  if (n !== void 0)
    return;
  (o.$contexts$ || (o.$contexts$ = /* @__PURE__ */ new Map())).set(t.id, e), s(true);
};
var Ne = (t, e) => {
  const { val: n, set: s, iCtx: o, elCtx: r } = Tt();
  if (n !== void 0)
    return n;
  const i = bs(t, r, o.$renderCtx$.$static$.$containerState$);
  if (typeof e == "function")
    return s(W(void 0, e, i));
  if (i !== void 0)
    return s(i);
  if (e !== void 0)
    return s(e);
  throw P(13, t.id);
};
var Xo = (t, e) => {
  var o;
  let n = t, s = 1;
  for (; n && !((o = n.hasAttribute) != null && o.call(n, "q:container")); ) {
    for (; n = n.previousSibling; )
      if (te(n)) {
        const r = n.__virtual;
        if (r) {
          const i = r[Re];
          if (n === r.open)
            return i ?? Q(r, e);
          if (i != null && i.$parentCtx$)
            return i.$parentCtx$;
          n = r;
          continue;
        }
        if (n.data === "/qv")
          s++;
        else if (n.data.startsWith("qv ") && (s--, s === 0))
          return Q(ce(n), e);
      }
    n = t.parentElement, t = n;
  }
  return null;
};
var Ko = (t, e) => (t.$parentCtx$ === void 0 && (t.$parentCtx$ = Xo(t.$element$, e)), t.$parentCtx$);
var bs = (t, e, n) => {
  var r;
  const s = t.id;
  if (!e)
    return;
  let o = e;
  for (; o; ) {
    const i = (r = o.$contexts$) == null ? void 0 : r.get(s);
    if (i)
      return i;
    o = Ko(o, n);
  }
};
var Yo = $t("qk-error");
var gn = (t, e, n) => {
  const s = X(e);
  if (V())
    throw t;
  {
    const o = bs(Yo, s, n.$static$.$containerState$);
    if (o === void 0)
      throw t;
    o.error = t;
  }
};
var Zo = /* @__PURE__ */ new Set(["animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexShrink", "gridArea", "gridRow", "gridRowEnd", "gridRowStart", "gridColumn", "gridColumnEnd", "gridColumnStart", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "scale", "tabSize", "widows", "zIndex", "zoom", "MozAnimationIterationCount", "MozBoxFlex", "msFlex", "msFlexPositive", "WebkitAnimationIterationCount", "WebkitBoxFlex", "WebkitBoxOrdinalGroup", "WebkitColumnCount", "WebkitColumns", "WebkitFlex", "WebkitFlexGrow", "WebkitFlexShrink", "WebkitLineClamp"]);
var jo = (t) => Zo.has(t);
var fe = (t, e, n) => {
  e.$flags$ &= ~Ct, e.$flags$ |= In, e.$slots$ = [], e.li.length = 0;
  const s = e.$element$, o = e.$componentQrl$, r = e.$props$, i = Y(t.$static$.$locale$, s, void 0, "qRender"), c2 = i.$waitOn$ = [], $3 = oe(t);
  $3.$cmpCtx$ = e, $3.$slotCtx$ = void 0, i.$subscriber$ = [0, s], i.$renderCtx$ = t, o.$setContainer$(t.$static$.$containerState$.$containerEl$);
  const l = o.getFn(i);
  return Ie(() => l(r), (a) => I(V() ? I(At(c2), () => I(Dr(t.$static$.$containerState$, t), () => At(c2))) : At(c2), () => {
    var f;
    if (e.$flags$ & Ct) {
      if (!(n && n > 100))
        return fe(t, e, n ? n + 1 : 1);
      at(`Infinite loop detected. Element: ${(f = e.$componentQrl$) == null ? void 0 : f.$symbol$}`);
    }
    return { node: a, rCtx: $3 };
  }), (a) => {
    var f;
    if (a === js) {
      if (!(n && n > 100))
        return I(At(c2), () => fe(t, e, n ? n + 1 : 1));
      at(`Infinite loop detected. Element: ${(f = e.$componentQrl$) == null ? void 0 : f.$symbol$}`);
    }
    return gn(a, s, t), { node: bn, rCtx: $3 };
  });
};
var ws = (t, e) => ({ $static$: { $doc$: t, $locale$: e.$serverData$.locale, $containerState$: e, $hostElements$: /* @__PURE__ */ new Set(), $operations$: [], $postOperations$: [], $roots$: [], $addSlots$: [], $rmSlots$: [], $visited$: [] }, $cmpCtx$: null, $slotCtx$: void 0 });
var oe = (t) => ({ $static$: t.$static$, $cmpCtx$: t.$cmpCtx$, $slotCtx$: t.$slotCtx$ });
var yn = (t, e) => {
  var n;
  return (n = e == null ? void 0 : e.$scopeIds$) != null && n.length ? e.$scopeIds$.join(" ") + " " + de(t) : de(t);
};
var de = (t) => {
  if (!t)
    return "";
  if (ut(t))
    return t.trim();
  const e = [];
  if (A(t))
    for (const n of t) {
      const s = de(n);
      s && e.push(s);
    }
  else
    for (const [n, s] of Object.entries(t))
      s && e.push(n.trim());
  return e.join(" ");
};
var Pe = (t) => {
  if (t == null)
    return "";
  if (typeof t == "object") {
    if (A(t))
      throw P(0, t, "style");
    {
      const e = [];
      for (const n in t)
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          const s = t[n];
          s != null && (n.startsWith("--") ? e.push(n + ":" + s) : e.push(fn(n) + ":" + tr(n, s)));
        }
      return e.join(";");
    }
  }
  return String(t);
};
var tr = (t, e) => typeof e != "number" || e === 0 || jo(t) ? e : e + "px";
var Jt = (t) => mt(t.$static$.$containerState$.$elementIndex$++);
var Es = (t, e) => {
  const n = Jt(t);
  e.$id$ = n;
};
var Gt = (t) => C(t) ? Gt(t.value) : t == null || typeof t == "boolean" ? "" : String(t);
function xs(t) {
  return t.startsWith("aria-");
}
var _s = (t, e) => !!e.key && (!qt(t) || !J(t.type) && t.key != e.key);
var D = "dangerouslySetInnerHTML";
var er = (t, e = 0) => {
  for (let n = 0; n < t.length; n++)
    e = (e << 5) - e + t.charCodeAt(n), e |= 0;
  return Number(Math.abs(e)).toString(36);
};
var nr = (t, e) => `${er(t.$hash$)}-${e}`;
var sr = (t) => "\u2B50\uFE0F" + t;
var Ts = (t) => {
  const e = t.join("|");
  if (e.length > 0)
    return e;
};
var qs;
var ue = "<!--qkssr-f-->";
var Is = class {
  constructor(e) {
    this.nodeType = e, this[qs] = null;
  }
};
qs = Re;
var or = () => new Is(9);
var g$ = async (t, e) => {
  var m, y, b2;
  const n = e.containerTagName, s = pe(1).$element$, o = An(s, e.base ?? "/");
  o.$serverData$.locale = (m = e.serverData) == null ? void 0 : m.locale;
  const r = or(), i = ws(r, o), c2 = e.beforeContent ?? [], $3 = { $static$: { $contexts$: [], $headNodes$: n === "html" ? c2 : [], $locale$: (y = e.serverData) == null ? void 0 : y.locale, $textNodes$: /* @__PURE__ */ new Map() }, $projectedChildren$: void 0, $projectedCtxs$: void 0, $invocationContext$: void 0 };
  let l = "ssr";
  e.containerAttributes["q:render"] && (l = `${e.containerAttributes["q:render"]}-${l}`);
  const a = { ...e.containerAttributes, "q:container": "paused", "q:version": "1.5.2", "q:render": l, "q:base": e.base, "q:locale": (b2 = e.serverData) == null ? void 0 : b2.locale, "q:manifest-hash": e.manifestHash }, f = n === "html" ? [t] : [c2, t];
  n !== "html" && (a.class = "qc\u{1F4E6}" + (a.class ? " " + a.class : "")), e.serverData && (o.$serverData$ = e.serverData);
  const d = xt(n, null, a, f, Ct | ht, null);
  o.$hostsRendering$ = /* @__PURE__ */ new Set(), await Promise.resolve().then(() => rr(d, i, $3, e.stream, o, e));
};
var rr = async (t, e, n, s, o, r) => {
  const i = r.beforeClose;
  return await vn(t, e, n, s, 0, i ? (c2) => {
    const $3 = i(n.$static$.$contexts$, o, false, n.$static$.$textNodes$);
    return K($3, e, n, c2, 0, void 0);
  } : void 0), e;
};
var ir = async (t, e, n, s, o) => {
  s.write(ue);
  const r = t.props.children;
  let i;
  if (J(r)) {
    const c2 = r({ write($3) {
      s.write($3), s.write(ue);
    } });
    if (L(c2))
      return c2;
    i = c2;
  } else
    i = r;
  for await (const c2 of i)
    await K(c2, e, n, s, o, void 0), s.write(ue);
};
var ks = (t, e, n, s, o, r, i, c2) => {
  var b2;
  const $3 = t.props, l = $3["q:renderFn"];
  if (l)
    return e.$componentQrl$ = l, lr(s, o, r, e, t, i, c2);
  let a = "<!--qv" + $r($3);
  const f = "q:s" in $3, d = t.key != null ? String(t.key) : null;
  f && ((b2 = s.$cmpCtx$) == null || b2.$id$, a += " q:sref=" + s.$cmpCtx$.$id$), d != null && (a += " q:key=" + d), a += "-->", r.write(a);
  const m = t.props[D];
  if (m)
    return r.write(m), void r.write(Ue);
  if (n)
    for (const u of n)
      Sn(u.type, u.props, r);
  const y = Rs(t.children, s, o, r, i);
  return I(y, () => {
    var p;
    if (!f && !c2)
      return void r.write(Ue);
    let u;
    if (f) {
      const S2 = (p = o.$projectedChildren$) == null ? void 0 : p[d];
      if (S2) {
        const [g, h2] = o.$projectedCtxs$, w = oe(g);
        w.$slotCtx$ = e, o.$projectedChildren$[d] = void 0, u = K(S2, w, h2, r, i);
      }
    }
    return c2 && (u = I(u, () => c2(r))), I(u, () => {
      r.write(Ue);
    });
  });
};
var Ue = "<!--/qv-->";
var cr = (t) => {
  let e = "";
  for (const n in t) {
    if (n === D)
      continue;
    const s = t[n];
    s != null && (e += " " + (s === "" ? n : n + '="' + s + '"'));
  }
  return e;
};
var $r = (t) => {
  let e = "";
  for (const n in t) {
    if (n === "children" || n === D)
      continue;
    const s = t[n];
    s != null && (e += " " + (s === "" ? n : n + "=" + s));
  }
  return e;
};
var Sn = (t, e, n) => {
  if (n.write("<" + t + cr(e) + ">"), Ns[t])
    return;
  const s = e[D];
  s != null && n.write(s), n.write(`</${t}>`);
};
var lr = (t, e, n, s, o, r, i) => (ur(t, s, o.props.props), I(fe(t, s), (c2) => {
  const $3 = s.$element$, l = c2.rCtx, a = Y(e.$static$.$locale$, $3, void 0);
  a.$subscriber$ = [0, $3], a.$renderCtx$ = l;
  const f = { $static$: e.$static$, $projectedChildren$: ar(o.children, e), $projectedCtxs$: [t, e], $invocationContext$: a }, d = [];
  if (s.$appendStyles$) {
    const u = 4 & r ? e.$static$.$headNodes$ : d;
    for (const p of s.$appendStyles$)
      u.push(xt("style", { [ke]: p.styleId, [D]: p.content, hidden: "" }, null, null, 0, null));
  }
  const m = Jt(t), y = s.$scopeIds$ ? Ts(s.$scopeIds$) : void 0, b2 = ft(o.type, { "q:sstyle": y, "q:id": m, children: c2.node }, 0, o.key);
  return s.$id$ = m, e.$static$.$contexts$.push(s), ks(b2, s, d, l, f, n, r, (u) => {
    if (s.$flags$ & ht) {
      const g = pe(1), h2 = g.li;
      h2.push(...s.li), s.$flags$ &= ~ht, g.$id$ = Jt(t);
      const w = { type: "placeholder", hidden: "", "q:id": g.$id$ };
      e.$static$.$contexts$.push(g);
      const E3 = pn(h2);
      for (const x3 of E3) {
        const v3 = Ps(x3[0]);
        w[v3] = Fn(x3[1], t.$static$.$containerState$, g), Ke(v3, t.$static$.$containerState$);
      }
      Sn("script", w, u);
    }
    const p = f.$projectedChildren$;
    let S2;
    if (p) {
      const g = Object.keys(p).map((x3) => {
        const v3 = p[x3];
        if (v3)
          return xt("q:template", { [G]: x3 || true, hidden: true, "aria-hidden": "true" }, null, v3, 0, null);
      }), [h2, w] = f.$projectedCtxs$, E3 = oe(h2);
      E3.$slotCtx$ = s, S2 = K(g, E3, w, u, 0, void 0);
    }
    return i ? I(S2, () => i(u)) : S2;
  });
}));
var ar = (t, e) => {
  const n = As(t, e);
  if (n === null)
    return;
  const s = {};
  for (const o of n) {
    let r = "";
    qt(o) && (r = o.props[G] || ""), (s[r] || (s[r] = [])).push(o);
  }
  return s;
};
var pe = (t) => {
  const e = new Is(t);
  return Le(e);
};
var vn = (t, e, n, s, o, r) => {
  var l;
  const i = t.type, c2 = e.$cmpCtx$;
  if (typeof i == "string") {
    const a = t.key, f = t.props, d = t.immutableProps || O, m = pe(1), y = m.$element$, b2 = i === "head";
    let u = "<" + i, p = false, S2 = false, g = "", h2 = null;
    const w = (v3, _2, q3) => {
      if (v3 === "ref")
        return void (_2 !== void 0 && (Mn(_2, y), S2 = true));
      if (dn(v3))
        return void hn(m.li, v3, _2, void 0);
      if (C(_2) && (_2 = it(_2, q3 ? [1, y, _2, c2.$element$, v3] : [2, c2.$element$, _2, y, v3]), p = true), v3 === D)
        return void (h2 = _2);
      let R2;
      v3.startsWith(gs) && Ke(v3.slice(15), e.$static$.$containerState$);
      const k2 = v3 === "htmlFor" ? "for" : v3;
      k2 === "class" || k2 === "className" ? g = de(_2) : k2 === "style" ? R2 = Pe(_2) : xs(k2) || k2 === "draggable" || k2 === "spellcheck" ? (R2 = _2 != null ? String(_2) : null, _2 = R2) : R2 = _2 === false || _2 == null ? null : String(_2), R2 != null && (k2 === "value" && i === "textarea" ? h2 = Ye(R2) : gr(k2) || (u += " " + (_2 === true ? k2 : k2 + '="' + Be(R2) + '"')));
    };
    for (const v3 in f) {
      let _2 = false, q3;
      v3 in d ? (_2 = true, q3 = d[v3], q3 === M && (q3 = f[v3])) : q3 = f[v3], w(v3, q3, _2);
    }
    for (const v3 in d) {
      if (v3 in f)
        continue;
      const _2 = d[v3];
      _2 !== M && w(v3, _2, true);
    }
    const E3 = m.li;
    if (c2) {
      if ((l = c2.$scopeIds$) != null && l.length) {
        const v3 = c2.$scopeIds$.join(" ");
        g = g ? `${v3} ${g}` : v3;
      }
      c2.$flags$ & ht && (E3.push(...c2.li), c2.$flags$ &= ~ht);
    }
    if (b2 && (o |= 1), i in fr && (o |= 16), i in dr && (o |= 8), g && (u += ' class="' + Be(g) + '"'), E3.length > 0) {
      const v3 = pn(E3), _2 = !!(16 & o);
      for (const q3 of v3) {
        const R2 = _2 ? Ps(q3[0]) : q3[0];
        u += " " + R2 + '="' + Fn(q3[1], e.$static$.$containerState$, m) + '"', Ke(R2, e.$static$.$containerState$);
      }
    }
    if (a != null && (u += ' q:key="' + Be(a) + '"'), S2 || p || E3.length > 0) {
      if (S2 || p || yr(E3)) {
        const v3 = Jt(e);
        u += ' q:id="' + v3 + '"', m.$id$ = v3;
      }
      n.$static$.$contexts$.push(m);
    }
    if (1 & o && (u += " q:head"), u += ">", s.write(u), i in Ns)
      return;
    if (h2 != null)
      return s.write(String(h2)), void s.write(`</${i}>`);
    i === "html" ? o |= 4 : o &= -5, 2 & t.flags && (o |= 1024);
    const x3 = K(t.children, e, n, s, o);
    return I(x3, () => {
      if (b2) {
        for (const v3 of n.$static$.$headNodes$)
          Sn(v3.type, v3.props, s);
        n.$static$.$headNodes$.length = 0;
      }
      if (r)
        return I(r(s), () => {
          s.write(`</${i}>`);
        });
      s.write(`</${i}>`);
    });
  }
  if (i === dt) {
    const a = pe(111);
    return e.$slotCtx$ ? (a.$parentCtx$ = e.$slotCtx$, a.$realParentCtx$ = e.$cmpCtx$) : a.$parentCtx$ = e.$cmpCtx$, c2 && c2.$flags$ & kn && Sr(c2, a), ks(t, a, void 0, e, n, s, o, r);
  }
  if (i === zs)
    return void s.write(t.props.data);
  if (i === Ls)
    return ir(t, e, n, s, o);
  const $3 = W(n.$invocationContext$, i, t.props, t.key, t.flags, t.dev);
  return _s($3, t) ? vn(ft(dt, { children: $3 }, 0, t.key), e, n, s, o, r) : K($3, e, n, s, o, r);
};
var K = (t, e, n, s, o, r) => {
  var i;
  if (t != null && typeof t != "boolean") {
    if (!ut(t) && typeof t != "number") {
      if (qt(t))
        return vn(t, e, n, s, o, r);
      if (A(t))
        return Rs(t, e, n, s, o);
      if (C(t)) {
        const c2 = 8 & o, $3 = (i = e.$cmpCtx$) == null ? void 0 : i.$element$;
        let l;
        if ($3) {
          if (!c2) {
            const a = Jt(e);
            if (l = it(t, 1024 & o ? [3, "#" + a, t, "#" + a] : [4, $3, t, "#" + a]), ut(l)) {
              const f = Gt(l);
              n.$static$.$textNodes$.set(f, a);
            }
            return s.write(`<!--t=${a}-->`), K(l, e, n, s, o, r), void s.write("<!---->");
          }
          l = W(n.$invocationContext$, () => t.value);
        }
        return void s.write(Ye(Gt(l)));
      }
      return L(t) ? (s.write(ue), t.then((c2) => K(c2, e, n, s, o, r))) : void at();
    }
    s.write(Ye(String(t)));
  }
};
var Rs = (t, e, n, s, o) => {
  if (t == null)
    return;
  if (!A(t))
    return K(t, e, n, s, o);
  const r = t.length;
  if (r === 1)
    return K(t[0], e, n, s, o);
  if (r === 0)
    return;
  let i = 0;
  const c2 = [];
  return t.reduce(($3, l, a) => {
    const f = [];
    c2.push(f);
    const d = K(l, e, n, $3 ? { write(m) {
      i === a ? s.write(m) : f.push(m);
    } } : s, o);
    if ($3 || L(d)) {
      const m = () => {
        i++, c2.length > i && c2[i].forEach((y) => s.write(y));
      };
      return L(d) ? $3 ? Promise.all([d, $3]).then(m) : d.then(m) : $3.then(m);
    }
    i++;
  }, void 0);
};
var As = (t, e) => {
  if (t == null)
    return null;
  const n = Ms(t, e), s = A(n) ? n : [n];
  return s.length === 0 ? null : s;
};
var Ms = (t, e) => {
  if (t == null)
    return null;
  if (A(t))
    return t.flatMap((n) => Ms(n, e));
  if (qt(t) && J(t.type) && t.type !== zs && t.type !== Ls && t.type !== dt) {
    const n = W(e.$invocationContext$, t.type, t.props, t.key, t.flags);
    return As(n, e);
  }
  return t;
};
var ur = (t, e, n) => {
  const s = Object.keys(n), o = Ae();
  if (e.$props$ = se(o, t.$static$.$containerState$), s.length === 0)
    return;
  const r = o[M] = n[M] ?? O;
  for (const i of s)
    i !== "children" && i !== G && (C(r[i]) ? o["$$" + i] = r[i] : o[i] = n[i]);
};
var fr = { head: true, style: true, script: true, link: true, meta: true };
var dr = { title: true, style: true, script: true, noframes: true, textarea: true };
var Ns = { area: true, base: true, basefont: true, bgsound: true, br: true, col: true, embed: true, frame: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
var pr = /[&<>]/g;
var hr = /[&"]/g;
var Ke = (t, e) => {
  e.$events$.add(eo(t));
};
var Ye = (t) => t.replace(pr, (e) => {
  switch (e) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    default:
      return "";
  }
});
var Be = (t) => t.replace(hr, (e) => {
  switch (e) {
    case "&":
      return "&amp;";
    case '"':
      return "&quot;";
    default:
      return "";
  }
});
var mr = /[>/="'\u0009\u000a\u000c\u0020]/;
var gr = (t) => mr.test(t);
var yr = (t) => t.some((e) => e[1].$captureRef$ && e[1].$captureRef$.length > 0);
var Sr = (t, e) => {
  const n = t.$dynamicSlots$ || (t.$dynamicSlots$ = []);
  n.includes(e) || n.push(e);
};
var Ps = (t) => t === "on:qvisible" ? "on-document:qinit" : t;
var y$ = (t, e, n) => new tn(t, e, n);
var vr = (t) => {
  const e = t.$funcStr$;
  let n = "";
  for (let s = 0; s < t.$args$.length; s++)
    n += `p${s},`;
  return `(${n})=>(${e})`;
};
var xt = (t, e, n, s, o, r) => {
  const i = r == null ? null : String(r);
  return new Qt(t, e || O, n, s, o, i);
};
var S$ = (t, e, n, s, o, r) => {
  let i = null;
  return e && "children" in e && (i = e.children, delete e.children), xt(t, e, n, i, s, o);
};
var ft = (t, e, n, s, o) => {
  const r = s == null ? null : String(s), i = e ?? {};
  if (typeof t == "string" && M in i) {
    const $3 = i[M];
    delete i[M];
    const l = i.children;
    delete i.children;
    for (const [a, f] of Object.entries($3))
      f !== M && (delete i[a], i[a] = f);
    return xt(t, null, i, l, n, s);
  }
  const c2 = new Qt(t, i, null, i.children, n, r);
  return typeof t == "string" && e && delete e.children, c2;
};
var v$ = (t, e, n) => {
  const s = n == null ? null : String(n), o = Ks(() => {
    const i = e.children;
    return typeof t == "string" && delete e.children, i;
  });
  return ut(t) && "className" in e && (e.class = e.className, delete e.className), new Qt(t, e, null, o, 0, s);
};
var Qt = class {
  constructor(e, n, s, o, r, i = null) {
    this.type = e, this.props = n, this.immutableProps = s, this.children = o, this.flags = r, this.key = i;
  }
};
var dt = (t) => t.children;
var qt = (t) => t instanceof Qt;
var he = (t) => t.children;
var bn = Symbol("skip render");
var zs = () => null;
var Ls = () => null;
var wn = (t, e, n) => {
  const s = !(e.$flags$ & In), o = e.$element$, r = t.$static$.$containerState$;
  return r.$hostsStaging$.delete(e), r.$subsManager$.$clearSub$(o), I(fe(t, e), (i) => {
    const c2 = t.$static$, $3 = i.rCtx, l = Y(t.$static$.$locale$, o);
    if (c2.$hostElements$.add(o), l.$subscriber$ = [0, o], l.$renderCtx$ = $3, s && e.$appendStyles$)
      for (const f of e.$appendStyles$)
        qi(c2, f);
    const a = pt(i.node, l);
    return I(a, (f) => {
      const d = br(o, f), m = En(e);
      return I(ve($3, m, d, n), () => {
        e.$vdom$ = d;
      });
    });
  });
};
var En = (t) => (t.$vdom$ || (t.$vdom$ = be(t.$element$)), t.$vdom$);
var ot = class {
  constructor(e, n, s, o, r, i) {
    this.$type$ = e, this.$props$ = n, this.$immutableProps$ = s, this.$children$ = o, this.$flags$ = r, this.$key$ = i, this.$elm$ = null, this.$text$ = "", this.$signal$ = null, this.$id$ = e + (i ? ":" + i : "");
  }
};
var Os = (t, e) => {
  const { key: n, type: s, props: o, children: r, flags: i, immutableProps: c2 } = t;
  let $3 = "";
  if (ut(s))
    $3 = s;
  else {
    if (s !== dt) {
      if (J(s)) {
        const a = W(e, s, o, n, i, t.dev);
        return _s(a, t) ? Os(ft(dt, { children: a }, 0, n), e) : pt(a, e);
      }
      throw P(25, s);
    }
    $3 = Dt;
  }
  let l = tt;
  return r != null ? I(pt(r, e), (a) => (a !== void 0 && (l = A(a) ? a : [a]), new ot($3, o, c2, l, i, n))) : new ot($3, o, c2, l, i, n);
};
var br = (t, e) => {
  const n = e === void 0 ? tt : A(e) ? e : [e], s = new ot(":virtual", {}, null, n, 0, null);
  return s.$elm$ = t, s;
};
var pt = (t, e) => {
  if (t != null && typeof t != "boolean") {
    if (Cs(t)) {
      const n = new ot("#text", O, null, tt, 0, null);
      return n.$text$ = String(t), n;
    }
    if (qt(t))
      return Os(t, e);
    if (C(t)) {
      const n = new ot("#signal", O, null, tt, 0, null);
      return n.$signal$ = t, n;
    }
    if (A(t)) {
      const n = un(t.flatMap((s) => pt(s, e)));
      return I(n, (s) => s.flat(100).filter(ms));
    }
    return L(t) ? t.then((n) => pt(n, e)) : t === bn ? new ot(":skipRender", O, null, tt, 0, null) : void at();
  }
};
var Cs = (t) => ut(t) || typeof t == "number";
var Ds = (t) => {
  Z(t, "q:container") === "paused" && (Er(t), kr(t));
};
var wr = (t) => {
  const e = ne(t), n = qr(t === e.documentElement ? e.body : t, "type");
  if (n)
    return JSON.parse(_r(n.firstChild.data) || "{}");
};
var b$ = (t, e) => {
  const n = JSON.parse(t);
  if (typeof n != "object")
    return null;
  const { _objs: s, _entry: o } = n;
  if (s === void 0 || o === void 0)
    return null;
  let r = {}, i = {};
  if (yt(e) && vt(e)) {
    const l = Rn(e);
    l && (i = Wt(l), r = l.ownerDocument);
  }
  const c2 = bo(i, r);
  for (let l = 0; l < s.length; l++) {
    const a = s[l];
    ut(a) && (s[l] = a === De ? void 0 : c2.prepare(a));
  }
  const $3 = (l) => s[j(l)];
  for (const l of s)
    Fs(l, $3, c2);
  return $3(o);
};
var Er = (t) => {
  if (!$i(t))
    return void at();
  const e = t._qwikjson_ ?? wr(t);
  if (t._qwikjson_ = null, !e)
    return void at();
  const n = ne(t), s = Tr(t), o = Wt(t), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let c2 = null, $3 = 0;
  const l = n.createTreeWalker(t, to);
  for (; c2 = l.nextNode(); ) {
    const u = c2.data;
    if ($3 === 0) {
      if (u.startsWith("qv ")) {
        const p = Rr(u);
        p >= 0 && r.set(p, c2);
      } else if (u.startsWith("t=")) {
        const p = u.slice(2), S2 = j(p), g = Ir(c2);
        r.set(S2, g), i.set(S2, g.data);
      }
    }
    u === "cq" ? $3++ : u === "/cq" && $3--;
  }
  const a = t.getElementsByClassName("qc\u{1F4E6}").length !== 0;
  t.querySelectorAll("[q\\:id]").forEach((u) => {
    if (a && u.closest("[q\\:container]") !== t)
      return;
    const p = Z(u, "q:id"), S2 = j(p);
    r.set(S2, u);
  });
  const f = bo(o, n), d = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set(), y = (u) => (typeof u == "string" && u.length > 0, d.has(u) ? d.get(u) : b2(u)), b2 = (u) => {
    if (u.startsWith("#")) {
      const w = u.slice(1), E3 = j(w);
      r.has(E3);
      const x3 = r.get(E3);
      if (te(x3)) {
        if (!x3.isConnected)
          return void d.set(u, void 0);
        const v3 = ce(x3);
        return d.set(u, v3), Q(v3, o), v3;
      }
      return St(x3) ? (d.set(u, x3), Q(x3, o), x3) : (d.set(u, x3), x3);
    }
    if (u.startsWith("@")) {
      const w = u.slice(1), E3 = j(w);
      return s[E3];
    }
    if (u.startsWith("*")) {
      const w = u.slice(1), E3 = j(w);
      r.has(E3);
      const x3 = i.get(E3);
      return d.set(u, x3), x3;
    }
    const p = j(u), S2 = e.objs;
    S2.length > p;
    let g = S2[p];
    ut(g) && (g = g === De ? void 0 : f.prepare(g));
    let h2 = g;
    for (let w = u.length - 1; w >= 0; w--) {
      const E3 = Mc[u[w]];
      if (!E3)
        break;
      h2 = E3(h2, o);
    }
    return d.set(u, h2), Cs(g) || m.has(p) || (m.add(p), xr(g, p, e.subs, y, o, f), Fs(g, y, f)), h2;
  };
  o.$elementIndex$ = 1e5, o.$pauseCtx$ = { getObject: y, meta: e.ctx, refs: e.refs }, H(t, "q:container", "resumed"), Vo(t, "qresume", void 0, true);
};
var xr = (t, e, n, s, o, r) => {
  const i = n[e];
  if (i) {
    const c2 = [];
    let $3 = 0;
    for (const l of i)
      if (l.startsWith("_"))
        $3 = parseInt(l.slice(1), 10);
      else {
        const a = Cc(l, s);
        a && c2.push(a);
      }
    if ($3 > 0 && Me(t, $3), !r.subs(t, c2)) {
      const l = o.$proxyMap$.get(t);
      l ? F(l).$addSubs$(c2) : se(t, o, c2);
    }
  }
};
var Fs = (t, e, n) => {
  if (!n.fill(t, e) && t && typeof t == "object") {
    if (A(t))
      for (let s = 0; s < t.length; s++)
        t[s] = e(t[s]);
    else if (ee(t))
      for (const s in t)
        t[s] = e(t[s]);
  }
};
var _r = (t) => t.replace(/\\x3C(\/?script)/gi, "<$1");
var Tr = (t) => t.qFuncs ?? tt;
var qr = (t, e) => {
  let n = t.lastElementChild;
  for (; n; ) {
    if (n.tagName === "SCRIPT" && Z(n, e) === "qwik/json")
      return n;
    n = n.previousElementSibling;
  }
};
var Ir = (t) => {
  const e = t.nextSibling;
  if (cn(e))
    return e;
  {
    const n = t.ownerDocument.createTextNode("");
    return t.parentElement.insertBefore(n, t), n;
  }
};
var kr = (t) => {
  t.qwik = { pause: () => Ui(t), state: Wt(t) };
};
var Rr = (t) => {
  const e = t.indexOf("q:id=");
  return e > 0 ? j(t.slice(e + 5)) : -1;
};
var xn = () => {
  const t = ti();
  let e = t.$qrl$;
  if (e)
    e.$captureRef$;
  else {
    const n = t.$element$, s = Rn(n);
    e = Ce(decodeURIComponent(String(t.$url$)), s), Ds(s);
    const o = Q(n, Wt(s));
    So(e, o);
  }
  return e.$captureRef$;
};
var Ar = (t, e) => {
  try {
    const n = e[0], s = t.$static$;
    switch (n) {
      case 1:
      case 2: {
        let o, r;
        n === 1 ? (o = e[1], r = e[3]) : (o = e[3], r = e[1]);
        const i = X(o);
        if (i == null)
          return;
        const c2 = e[4], $3 = o.namespaceURI === ie;
        s.$containerState$.$subsManager$.$clearSignal$(e);
        let l = it(e[2], e.slice(0, -1));
        c2 === "class" ? l = yn(l, X(r)) : c2 === "style" && (l = Pe(l));
        const a = En(i);
        return c2 in a.$props$ && a.$props$[c2] === l ? void 0 : (a.$props$[c2] = l, Pn(s, o, c2, l, $3));
      }
      case 3:
      case 4: {
        const o = e[3];
        if (!s.$visited$.includes(o)) {
          s.$containerState$.$subsManager$.$clearSignal$(e);
          const r = void 0;
          let i = it(e[2], e.slice(0, -1));
          const c2 = Qc();
          Array.isArray(i) && (i = new Qt(dt, {}, null, i, 0, null));
          let $3 = pt(i, r);
          if (L($3))
            Et("Rendering promises in JSX signals is not supported");
          else {
            $3 === void 0 && ($3 = pt("", r));
            const l = so(o), a = Mr(e[1]);
            if (t.$cmpCtx$ = Q(a, t.$static$.$containerState$), l.$type$ == $3.$type$ && l.$key$ == $3.$key$ && l.$id$ == $3.$id$)
              Rt(t, l, $3, 0);
            else {
              const f = [], d = l.$elm$, m = bt(t, $3, 0, f);
              f.length && Et("Rendering promises in JSX signals is not supported"), c2[3] = m, Pt(t.$static$, o.parentElement, m, d), d && Ln(s, d);
            }
          }
        }
      }
    }
  } catch {
  }
};
function Mr(t) {
  for (; t; ) {
    if (vt(t))
      return t;
    t = t.parentElement;
  }
  throw new Error("Not found");
}
var Nr = (t, e) => {
  if (t[0] === 0) {
    const n = t[1];
    qn(n) ? _n(n, e) : Pr(n, e);
  } else
    zr(t, e);
};
var Pr = (t, e) => {
  const n = V();
  n || Ds(e.$containerEl$);
  const s = Q(t, e);
  if (s.$componentQrl$, !(s.$flags$ & Ct))
    if (s.$flags$ |= Ct, e.$hostsRendering$ !== void 0)
      e.$hostsStaging$.add(s);
    else {
      if (n)
        return void at();
      e.$hostsNext$.add(s), Tn(e);
    }
};
var zr = (t, e) => {
  const n = e.$hostsRendering$ !== void 0;
  e.$opsNext$.add(t), n || Tn(e);
};
var _n = (t, e) => {
  t.$flags$ & _t || (t.$flags$ |= _t, e.$hostsRendering$ !== void 0 ? e.$taskStaging$.add(t) : (e.$taskNext$.add(t), Tn(e)));
};
var Tn = (t) => (t.$renderPromise$ === void 0 && (t.$renderPromise$ = qe().nextTick(() => Qs(t))), t.$renderPromise$);
var Lr = () => {
  const [t] = xn();
  _n(t, Wt(Rn(t.$el$)));
};
var Qs = async (t) => {
  const e = t.$containerEl$, n = ne(e);
  try {
    const s = ws(n, t), o = s.$static$, r = t.$hostsRendering$ = new Set(t.$hostsNext$);
    t.$hostsNext$.clear(), await Cr(t, s), t.$hostsStaging$.forEach(($3) => {
      r.add($3);
    }), t.$hostsStaging$.clear();
    const i = Array.from(t.$opsNext$);
    t.$opsNext$.clear();
    const c2 = Array.from(r);
    Qr(c2), !t.$styleMoved$ && c2.length > 0 && (t.$styleMoved$ = true, (e === n.documentElement ? n.body : e).querySelectorAll("style[q\\:style]").forEach(($3) => {
      t.$styleIds$.add(Z($3, ke)), uo(o, n.head, $3);
    }));
    for (const $3 of c2) {
      const l = $3.$element$;
      if (!o.$hostElements$.has(l) && $3.$componentQrl$) {
        l.isConnected, o.$roots$.push($3);
        try {
          await wn(s, $3, Or(l.parentElement));
        } catch (a) {
          Et(a);
        }
      }
    }
    return i.forEach(($3) => {
      Ar(s, $3);
    }), o.$operations$.push(...o.$postOperations$), o.$operations$.length === 0 ? (os(o), void await Xn(t, s)) : (await vi(o), os(o), Xn(t, s));
  } catch (s) {
    Et(s);
  }
};
var Or = (t) => {
  let e = 0;
  return t && (t.namespaceURI === ie && (e |= B), t.tagName === "HEAD" && (e |= ye)), e;
};
var Xn = async (t, e) => {
  const n = e.$static$.$hostElements$;
  await Fr(t, e, (s, o) => !!(s.$flags$ & Ws) && (!o || n.has(s.$el$))), t.$hostsStaging$.forEach((s) => {
    t.$hostsNext$.add(s);
  }), t.$hostsStaging$.clear(), t.$hostsRendering$ = void 0, t.$renderPromise$ = void 0, t.$hostsNext$.size + t.$taskNext$.size + t.$opsNext$.size > 0 && (t.$renderPromise$ = Qs(t));
};
var Ze = (t) => !!(t.$flags$ & Us);
var Kn = (t) => !!(t.$flags$ & Bs);
var Cr = async (t, e) => {
  const n = t.$containerEl$, s = [], o = [];
  t.$taskNext$.forEach((r) => {
    Ze(r) && (o.push(I(r.$qrl$.$resolveLazy$(n), () => r)), t.$taskNext$.delete(r)), Kn(r) && (s.push(I(r.$qrl$.$resolveLazy$(n), () => r)), t.$taskNext$.delete(r));
  });
  do
    if (t.$taskStaging$.forEach((r) => {
      Ze(r) ? o.push(I(r.$qrl$.$resolveLazy$(n), () => r)) : Kn(r) ? s.push(I(r.$qrl$.$resolveLazy$(n), () => r)) : t.$taskNext$.add(r);
    }), t.$taskStaging$.clear(), o.length > 0) {
      const r = await Promise.all(o);
      me(r), await Promise.all(r.map((i) => ge(i, t, e))), o.length = 0;
    }
  while (t.$taskStaging$.size > 0);
  if (s.length > 0) {
    const r = await Promise.all(s);
    me(r);
    for (const i of r)
      ge(i, t, e);
  }
};
var Dr = (t, e) => {
  const n = t.$containerEl$, s = t.$taskStaging$;
  if (!s.size)
    return;
  const o = [];
  let r = 20;
  const i = () => {
    if (s.forEach((c2) => {
      console.error("task", c2.$qrl$.$symbol$), Ze(c2) && o.push(I(c2.$qrl$.$resolveLazy$(n), () => c2));
    }), s.clear(), o.length > 0)
      return Promise.all(o).then(async (c2) => {
        if (me(c2), await Promise.all(c2.map(($3) => ge($3, t, e))), o.length = 0, --r && s.size > 0)
          return i();
        r || at(`Infinite task loop detected. Tasks:
${Array.from(s).map(($3) => `  ${$3.$qrl$.$symbol$}`).join(`
`)}`);
      });
  };
  return i();
};
var Fr = async (t, e, n) => {
  const s = [], o = t.$containerEl$;
  t.$taskNext$.forEach((r) => {
    n(r, false) && (r.$el$.isConnected && s.push(I(r.$qrl$.$resolveLazy$(o), () => r)), t.$taskNext$.delete(r));
  });
  do
    if (t.$taskStaging$.forEach((r) => {
      r.$el$.isConnected && (n(r, true) ? s.push(I(r.$qrl$.$resolveLazy$(o), () => r)) : t.$taskNext$.add(r));
    }), t.$taskStaging$.clear(), s.length > 0) {
      const r = await Promise.all(s);
      me(r);
      for (const i of r)
        ge(i, t, e);
      s.length = 0;
    }
  while (t.$taskStaging$.size > 0);
};
var Qr = (t) => {
  t.sort((e, n) => 2 & e.$element$.compareDocumentPosition(Ee(n.$element$)) ? 1 : -1);
};
var me = (t) => {
  const e = V();
  t.sort((n, s) => e || n.$el$ === s.$el$ ? n.$index$ < s.$index$ ? -1 : 1 : 2 & n.$el$.compareDocumentPosition(Ee(s.$el$)) ? 1 : -1);
};
var Ws = 1;
var Us = 2;
var Bs = 4;
var _t = 16;
var Wr = (t, e) => {
  const { val: n, set: s, iCtx: o, i: r, elCtx: i } = Tt();
  if (n)
    return;
  const c2 = o.$renderCtx$.$static$.$containerState$, $3 = new ze(_t | Us, r, i.$element$, t, void 0);
  s(true), t.$resolveLazy$(c2.$containerEl$), i.$tasks$ || (i.$tasks$ = []), i.$tasks$.push($3), ni(o, () => Vs($3, c2, o.$renderCtx$)), V() && je($3, e == null ? void 0 : e.eagerness);
};
var w$ = (t, e) => {
  const { val: n, set: s, i: o, iCtx: r, elCtx: i } = Tt(), c2 = (e == null ? void 0 : e.strategy) ?? "intersection-observer";
  if (n)
    return void (V() && je(n, c2));
  const $3 = new ze(Ws, o, i.$element$, t, void 0), l = r.$renderCtx$.$static$.$containerState$;
  i.$tasks$ || (i.$tasks$ = []), i.$tasks$.push($3), s($3), je($3, c2), V() || (t.$resolveLazy$(l.$containerEl$), _n($3, l));
};
var Hs = (t) => !!(t.$flags$ & Bs);
var Ur = (t) => !!(8 & t.$flags$);
var ge = async (t, e, n) => (t.$flags$ & _t, Hs(t) ? Br(t, e, n) : Ur(t) ? Hr(t, e, n) : Vs(t, e, n));
var Br = (t, e, n, s) => {
  t.$flags$ &= ~_t, Xt(t);
  const o = Y(n.$static$.$locale$, t.$el$, void 0, "qTask"), { $subsManager$: r } = e;
  o.$renderCtx$ = n;
  const i = t.$qrl$.getFn(o, () => {
    r.$clearSub$(t);
  }), c2 = [], $3 = t.$state$, l = $e($3), a = { track: (p, S2) => {
    if (J(p)) {
      const h2 = Y();
      return h2.$renderCtx$ = n, h2.$subscriber$ = [0, t], W(h2, p);
    }
    const g = F(p);
    return g ? g.$addSub$([0, t], S2) : $n(Te(26), p), S2 ? p[S2] : C(p) ? p.value : p;
  }, cleanup(p) {
    c2.push(p);
  }, cache(p) {
    let S2 = 0;
    S2 = p === "immutable" ? 1 / 0 : p, $3._cache = S2;
  }, previous: l._resolved };
  let f, d, m = false;
  const y = (p, S2) => !m && (m = true, p ? (m = true, $3.loading = false, $3._state = "resolved", $3._resolved = S2, $3._error = void 0, f(S2)) : (m = true, $3.loading = false, $3._state = "rejected", $3._error = S2, d(S2)), true);
  W(o, () => {
    $3._state = "pending", $3.loading = !V(), $3.value = new Promise((p, S2) => {
      f = p, d = S2;
    });
  }), t.$destroy$ = Qe(() => {
    m = true, c2.forEach((p) => p());
  });
  const b2 = Ie(() => I(s, () => i(a)), (p) => {
    y(true, p);
  }, (p) => {
    y(false, p);
  }), u = l._timeout;
  return u > 0 ? Promise.race([b2, Fo(u).then(() => {
    y(false, new Error("timeout")) && Xt(t);
  })]) : b2;
};
var Vs = (t, e, n) => {
  t.$flags$ &= ~_t, Xt(t);
  const s = t.$el$, o = Y(n.$static$.$locale$, s, void 0, "qTask");
  o.$renderCtx$ = n;
  const { $subsManager$: r } = e, i = t.$qrl$.getFn(o, () => {
    r.$clearSub$(t);
  }), c2 = [];
  t.$destroy$ = Qe(() => {
    c2.forEach((l) => l());
  });
  const $3 = { track: (l, a) => {
    if (J(l)) {
      const d = Y();
      return d.$subscriber$ = [0, t], W(d, l);
    }
    const f = F(l);
    return f ? f.$addSub$([0, t], a) : $n(Te(26), l), a ? l[a] : C(l) ? l.value : l;
  }, cleanup(l) {
    c2.push(l);
  } };
  return Ie(() => i($3), (l) => {
    J(l) && c2.push(l);
  }, (l) => {
    gn(l, s, n);
  });
};
var Hr = (t, e, n) => {
  t.$state$, t.$flags$ &= ~_t, Xt(t);
  const s = t.$el$, o = Y(n.$static$.$locale$, s, void 0, "qComputed");
  o.$subscriber$ = [0, t], o.$renderCtx$ = n;
  const { $subsManager$: r } = e, i = t.$qrl$.getFn(o, () => {
    r.$clearSub$(t);
  });
  return Ie(i, (c2) => Ks(() => {
    const $3 = t.$state$;
    $3[Kt] &= ~Zs, $3.untrackedValue = c2, $3[et].$notifySubs$();
  }), (c2) => {
    gn(c2, s, n);
  });
};
var Xt = (t) => {
  const e = t.$destroy$;
  if (e) {
    t.$destroy$ = void 0;
    try {
      e();
    } catch (n) {
      Et(n);
    }
  }
};
var Js = (t) => {
  32 & t.$flags$ ? (t.$flags$ &= -33, (0, t.$qrl$)()) : Xt(t);
};
var je = (t, e) => {
  e === "visible" || e === "intersection-observer" ? Ho("qvisible", He(t)) : e === "load" || e === "document-ready" ? Gn("qinit", He(t)) : e !== "idle" && e !== "document-idle" || Gn("qidle", He(t));
};
var He = (t) => {
  const e = t.$qrl$;
  return We(e.$chunk$, "_hW", Lr, null, null, [t], e.$symbol$);
};
var qn = (t) => ct(t) && t instanceof ze;
var Vr = (t, e) => {
  let n = `${mt(t.$flags$)} ${mt(t.$index$)} ${e(t.$qrl$)} ${e(t.$el$)}`;
  return t.$state$ && (n += ` ${e(t.$state$)}`), n;
};
var Jr = (t) => {
  const [e, n, s, o, r] = t.split(" ");
  return new ze(j(e), j(n), o, s, r);
};
var ze = class {
  constructor(e, n, s, o, r) {
    this.$flags$ = e, this.$index$ = n, this.$el$ = s, this.$qrl$ = o, this.$state$ = r;
  }
};
function Gr(t) {
  return Xr(t) && t.nodeType === 1;
}
function Xr(t) {
  return t && typeof t.nodeType == "number";
}
var Ct = 1;
var ht = 2;
var In = 4;
var kn = 8;
var X = (t) => t[Re];
var Q = (t, e) => {
  const n = X(t);
  if (n)
    return n;
  const s = Le(t), o = Z(t, "q:id");
  if (o) {
    const r = e.$pauseCtx$;
    if (s.$id$ = o, r) {
      const { getObject: i, meta: c2, refs: $3 } = r;
      if (Gr(t)) {
        const l = $3[o];
        l && (s.$refMap$ = l.split(" ").map(i), s.li = Bo(s, e.$containerEl$));
      } else {
        const l = t.getAttribute("q:sstyle");
        s.$scopeIds$ = l ? l.split("|") : null;
        const a = c2[o];
        if (a) {
          const f = a.s, d = a.h, m = a.c, y = a.w;
          if (f && (s.$seq$ = f.split(" ").map(i)), y && (s.$tasks$ = y.split(" ").map(i)), m) {
            s.$contexts$ = /* @__PURE__ */ new Map();
            for (const b2 of m.split(" ")) {
              const [u, p] = b2.split("=");
              s.$contexts$.set(u, i(p));
            }
          }
          if (d) {
            const [b2, u] = d.split(" ");
            if (s.$flags$ = In, b2 && (s.$componentQrl$ = i(b2)), u) {
              const p = i(u);
              s.$props$ = p, Me(p, 2), p[M] = Kr(p);
            } else
              s.$props$ = se(Ae(), e);
          }
        }
      }
    }
  }
  return s;
};
var Kr = (t) => {
  const e = {}, n = It(t);
  for (const s in n)
    s.startsWith("$$") && (e[s.slice(2)] = n[s]);
  return e;
};
var Le = (t) => {
  const e = { $flags$: 0, $id$: "", $element$: t, $refMap$: [], li: [], $tasks$: null, $seq$: null, $slots$: null, $scopeIds$: null, $appendStyles$: null, $props$: null, $vdom$: null, $componentQrl$: null, $contexts$: null, $dynamicSlots$: null, $parentCtx$: void 0, $realParentCtx$: void 0 };
  return t[Re] = e, e;
};
var Yr = (t, e) => {
  var n;
  (n = t.$tasks$) == null || n.forEach((s) => {
    e.$clearSub$(s), Js(s);
  }), t.$componentQrl$ = null, t.$seq$ = null, t.$tasks$ = null;
};
var zt;
function Zr(t) {
  if (zt === void 0) {
    const e = rt();
    if (e && e.$locale$)
      return e.$locale$;
    if (t !== void 0)
      return t;
    throw new Error("Reading `locale` outside of context.");
  }
  return zt;
}
function Yn(t, e) {
  const n = zt;
  try {
    return zt = t, e();
  } finally {
    zt = n;
  }
}
function jr(t) {
  zt = t;
}
var Ht;
var rt = () => {
  if (!Ht) {
    const t = typeof document < "u" && document && document.__q_context__;
    return t ? A(t) ? document.__q_context__ = Xs(t) : t : void 0;
  }
  return Ht;
};
var ti = () => {
  const t = rt();
  if (!t)
    throw P(14);
  return t;
};
var Gs = () => {
  const t = rt();
  if (!t || t.$event$ !== "qRender")
    throw P(20);
  return t.$hostElement$, t.$waitOn$, t.$renderCtx$, t.$subscriber$, t;
};
function W(t, e, ...n) {
  return ei.call(this, t, e, n);
}
function ei(t, e, n) {
  const s = Ht;
  let o;
  try {
    Ht = t, o = e.apply(this, n);
  } finally {
    Ht = s;
  }
  return o;
}
var ni = (t, e) => {
  const n = t.$waitOn$;
  if (n.length === 0) {
    const s = e();
    L(s) && n.push(s);
  } else
    n.push(Promise.all(n).then(e));
};
var Xs = ([t, e, n]) => {
  const s = t.closest("[q\\:container]"), o = (s == null ? void 0 : s.getAttribute("q:locale")) || void 0;
  return o && jr(o), Y(o, void 0, t, e, n);
};
var Y = (t, e, n, s, o) => ({ $url$: o, $i$: 0, $hostElement$: e, $element$: n, $event$: s, $qrl$: void 0, $waitOn$: void 0, $subscriber$: void 0, $renderCtx$: void 0, $locale$: t || (typeof s == "object" && s && "locale" in s ? s.locale : void 0) });
var Rn = (t) => t.closest("[q\\:container]");
var Ks = (t) => W(void 0, t);
var Zn = Y(void 0, void 0, void 0, "qRender");
var it = (t, e) => (Zn.$subscriber$ = e, W(Zn, () => t.value));
var si = (t) => {
  const e = rt();
  return e && e.$hostElement$ && e.$renderCtx$ && (Q(e.$hostElement$, e.$renderCtx$.$static$.$containerState$).$flags$ |= kn), t;
};
var Ys;
var oi = (t, e, n, s) => {
  const o = e.$subsManager$.$createManager$(s);
  return new Yt(t, o, n);
};
var Kt = Symbol("proxy manager");
var ri = 1;
var Zs = 2;
var js = Symbol("unassigned signal");
var re = class {
};
var Yt = class extends re {
  constructor(e, n, s) {
    super(), this[Ys] = 0, this.untrackedValue = e, this[et] = n, this[Kt] = s;
  }
  valueOf() {
  }
  toString() {
    return `[Signal ${String(this.value)}]`;
  }
  toJSON() {
    return { value: this.value };
  }
  get value() {
    var n;
    if (this[Kt] & Zs)
      throw js;
    const e = (n = rt()) == null ? void 0 : n.$subscriber$;
    return e && this[et].$addSub$(e), this.untrackedValue;
  }
  set value(e) {
    const n = this[et];
    n && this.untrackedValue !== e && (this.untrackedValue = e, n.$notifySubs$());
  }
};
Ys = Kt;
var tn = class extends re {
  constructor(e, n, s) {
    super(), this.$func$ = e, this.$args$ = n, this.$funcStr$ = s;
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
};
var en = class extends re {
  constructor(e, n) {
    super(), this.ref = e, this.prop = n;
  }
  get [et]() {
    return F(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(e) {
    this.ref[this.prop] = e;
  }
};
var C = (t) => t instanceof re;
var ii = (t, e) => {
  var o, r;
  if (!ct(t))
    return t[e];
  if (t instanceof re)
    return t;
  const n = It(t);
  if (n) {
    const i = n["$$" + e];
    if (i)
      return i;
    if (((o = n[M]) == null ? void 0 : o[e]) !== true)
      return new en(t, e);
  }
  const s = (r = t[M]) == null ? void 0 : r[e];
  return C(s) ? s : M;
};
var ci = (t, e) => {
  const n = ii(t, e);
  return n === M ? t[e] : n;
};
var jn = Symbol("ContainerState");
var Wt = (t) => {
  let e = t[jn];
  return e || (t[jn] = e = An(t, Z(t, "q:base") ?? "/")), e;
};
var An = (t, e) => {
  const n = { $containerEl$: t, $elementIndex$: 0, $styleMoved$: false, $proxyMap$: /* @__PURE__ */ new WeakMap(), $opsNext$: /* @__PURE__ */ new Set(), $taskNext$: /* @__PURE__ */ new Set(), $taskStaging$: /* @__PURE__ */ new Set(), $hostsNext$: /* @__PURE__ */ new Set(), $hostsStaging$: /* @__PURE__ */ new Set(), $styleIds$: /* @__PURE__ */ new Set(), $events$: /* @__PURE__ */ new Set(), $serverData$: {}, $base$: e, $renderPromise$: void 0, $hostsRendering$: void 0, $pauseCtx$: void 0, $subsManager$: null, $inlineFns$: /* @__PURE__ */ new Map() };
  return n.$subsManager$ = Dc(n), n;
};
var Mn = (t, e) => {
  if (J(t))
    return t(e);
  if (C(t))
    return V() ? t.untrackedValue = e : t.value = e;
  throw P(32, t);
};
var to = 128;
var $i = (t) => St(t) && t.hasAttribute("q:container");
var mt = (t) => t.toString(36);
var j = (t) => parseInt(t, 36);
var eo = (t) => {
  const e = t.indexOf(":");
  return t && Qo(t.slice(e + 1));
};
var ie = "http://www.w3.org/2000/svg";
var B = 1;
var ye = 2;
var Se = [];
var ve = (t, e, n, s) => {
  e.$elm$;
  const o = n.$children$;
  if (o.length === 1 && o[0].$type$ === ":skipRender")
    return void (n.$children$ = e.$children$);
  const r = e.$elm$;
  let i = we;
  e.$children$ === Se && r.nodeName === "HEAD" && (i = ui, s |= ye);
  const c2 = li(e, i);
  return c2.length > 0 && o.length > 0 ? ai(t, r, c2, o, s) : c2.length > 0 && o.length === 0 ? Nn(t.$static$, c2, 0, c2.length - 1) : o.length > 0 ? ro(t, r, null, o, 0, o.length - 1, s) : void 0;
};
var li = (t, e) => {
  const n = t.$children$;
  return n === Se ? t.$children$ = no(t.$elm$, e) : n;
};
var ai = (t, e, n, s, o) => {
  let r = 0, i = 0, c2 = n.length - 1, $3 = n[0], l = n[c2], a = s.length - 1, f = s[0], d = s[a], m, y, b2;
  const u = [], p = t.$static$;
  for (; r <= c2 && i <= a; )
    if ($3 == null)
      $3 = n[++r];
    else if (l == null)
      l = n[--c2];
    else if (f == null)
      f = s[++i];
    else if (d == null)
      d = s[--a];
    else if ($3.$id$ === f.$id$)
      u.push(Rt(t, $3, f, o)), $3 = n[++r], f = s[++i];
    else if (l.$id$ === d.$id$)
      u.push(Rt(t, l, d, o)), l = n[--c2], d = s[--a];
    else if ($3.$key$ && $3.$id$ === d.$id$)
      $3.$elm$, l.$elm$, u.push(Rt(t, $3, d, o)), Ti(p, e, $3.$elm$, l.$elm$), $3 = n[++r], d = s[--a];
    else if (l.$key$ && l.$id$ === f.$id$)
      $3.$elm$, l.$elm$, u.push(Rt(t, l, f, o)), Pt(p, e, l.$elm$, $3.$elm$), l = n[--c2], f = s[++i];
    else {
      if (m === void 0 && (m = Ei(n, r, c2)), y = m[f.$key$], y === void 0) {
        const g = bt(t, f, o, u);
        Pt(p, e, g, $3 == null ? void 0 : $3.$elm$);
      } else if (b2 = n[y], b2.$type$ !== f.$type$) {
        const g = bt(t, f, o, u);
        I(g, (h2) => {
          Pt(p, e, h2, $3 == null ? void 0 : $3.$elm$);
        });
      } else
        u.push(Rt(t, b2, f, o)), n[y] = void 0, b2.$elm$, Pt(p, e, b2.$elm$, $3.$elm$);
      f = s[++i];
    }
  i <= a && u.push(ro(t, e, s[a + 1] == null ? null : s[a + 1].$elm$, s, i, a, o));
  let S2 = un(u);
  return r <= c2 && (S2 = I(S2, () => {
    Nn(p, n, r, c2);
  })), S2;
};
var Nt = (t, e) => {
  const n = nt(t) ? t.close : null, s = [];
  let o = t.firstChild;
  for (; (o = On(o)) && (e(o) && s.push(o), o = o.nextSibling, o !== n); )
    ;
  return s;
};
var no = (t, e) => Nt(t, e).map(so);
var so = (t) => {
  var e;
  return St(t) ? ((e = X(t)) == null ? void 0 : e.$vdom$) ?? be(t) : be(t);
};
var be = (t) => {
  if (vt(t)) {
    const e = new ot(t.localName, {}, null, Se, 0, sn(t));
    return e.$elm$ = t, e;
  }
  if (cn(t)) {
    const e = new ot(t.nodeName, O, null, Se, 0, null);
    return e.$text$ = t.data, e.$elm$ = t, e;
  }
};
var ui = (t) => {
  const e = t.nodeType;
  return e === 1 ? t.hasAttribute("q:head") : e === 111;
};
var nn = (t) => t.nodeName === "Q:TEMPLATE";
var we = (t) => {
  const e = t.nodeType;
  if (e === 3 || e === 111)
    return true;
  if (e !== 1)
    return false;
  const n = t.nodeName;
  return n !== "Q:TEMPLATE" && (n === "HEAD" ? t.hasAttribute("q:head") : n !== "STYLE" || !t.hasAttribute(ke));
};
var oo = (t) => {
  const e = {};
  for (const n of t) {
    const s = fi(n);
    (e[s] ?? (e[s] = new ot(Dt, { "q:s": "" }, null, [], 0, s))).$children$.push(n);
  }
  return e;
};
var Rt = (t, e, n, s) => {
  e.$type$, n.$type$, e.$key$, n.$key$, e.$id$, n.$id$;
  const o = e.$elm$, r = n.$type$, i = t.$static$, c2 = i.$containerState$, $3 = t.$cmpCtx$;
  if (n.$elm$ = o, r === "#text") {
    i.$visited$.push(o);
    const d = n.$signal$;
    return d && (n.$text$ = Gt(it(d, [4, $3.$element$, d, o]))), void gt(i, o, "data", n.$text$);
  }
  if (r === "#signal")
    return;
  const l = n.$props$, a = n.$flags$, f = Q(o, c2);
  if (r !== Dt) {
    let d = !!(s & B);
    if (d || r !== "svg" || (s |= B, d = true), l !== O) {
      1 & a || (f.li.length = 0);
      const m = e.$props$;
      n.$props$ = m;
      for (const y in l) {
        let b2 = l[y];
        if (y !== "ref")
          if (dn(y)) {
            const u = hn(f.li, y, b2, c2.$containerEl$);
            $o(i, o, u);
          } else
            C(b2) && (b2 = it(b2, [1, $3.$element$, b2, o, y])), y === "class" ? b2 = yn(b2, $3) : y === "style" && (b2 = Pe(b2)), m[y] !== b2 && (m[y] = b2, Pn(i, o, y, b2, d));
        else
          b2 !== void 0 && Mn(b2, o);
      }
    }
    return 2 & a || (d && r === "foreignObject" && (s &= ~B), l[D] !== void 0) || r === "textarea" ? void 0 : ve(t, e, n, s);
  }
  if ("q:renderFn" in l) {
    const d = l.props;
    Si(c2, f, d);
    let m = !!(f.$flags$ & Ct);
    return m || f.$componentQrl$ || f.$element$.hasAttribute("q:id") || (Es(t, f), f.$componentQrl$ = d["q:renderFn"], f.$componentQrl$, m = true), m ? I(wn(t, f, s), () => ts(t, f, n, s)) : ts(t, f, n, s);
  }
  if ("q:s" in l)
    return $3.$slots$, void $3.$slots$.push(n);
  if (D in l)
    gt(i, o, "innerHTML", l[D]);
  else if (!(2 & a))
    return ve(t, e, n, s);
};
var ts = (t, e, n, s) => {
  if (2 & n.$flags$)
    return;
  const o = t.$static$, r = oo(n.$children$), i = co(e);
  for (const c2 in i.slots)
    if (!r[c2]) {
      const $3 = i.slots[c2], l = no($3, we);
      if (l.length > 0) {
        const a = X($3);
        a && a.$vdom$ && (a.$vdom$.$children$ = []), Nn(o, l, 0, l.length - 1);
      }
    }
  for (const c2 in i.templates) {
    const $3 = i.templates[c2];
    $3 && !r[c2] && (i.templates[c2] = void 0, Ln(o, $3));
  }
  return un(Object.keys(r).map((c2) => {
    const $3 = r[c2], l = io(o, i, e, c2, t.$static$.$containerState$), a = En(l), f = oe(t), d = l.$element$;
    f.$slotCtx$ = l, l.$vdom$ = $3, $3.$elm$ = d;
    let m = s & ~B;
    d.isSvg && (m |= B);
    const y = o.$addSlots$.findIndex((b2) => b2[0] === d);
    return y >= 0 && o.$addSlots$.splice(y, 1), ve(f, a, $3, m);
  }));
};
var ro = (t, e, n, s, o, r, i) => {
  const c2 = [];
  for (; o <= r; ++o) {
    const $3 = s[o], l = bt(t, $3, i, c2);
    Pt(t.$static$, e, l, n);
  }
  return At(c2);
};
var Nn = (t, e, n, s) => {
  for (; n <= s; ++n) {
    const o = e[n];
    o && (o.$elm$, Ln(t, o.$elm$));
  }
};
var io = (t, e, n, s, o) => {
  const r = e.slots[s];
  if (r)
    return Q(r, o);
  const i = e.templates[s];
  if (i)
    return Q(i, o);
  const c2 = fo(t.$doc$, s), $3 = Le(c2);
  return $3.$parentCtx$ = n, ki(t, n.$element$, c2), e.templates[s] = c2, $3;
};
var fi = (t) => t.$props$[G] ?? "";
var bt = (t, e, n, s) => {
  const o = e.$type$, r = t.$static$.$doc$, i = t.$cmpCtx$;
  if (o === "#text")
    return e.$elm$ = r.createTextNode(e.$text$);
  if (o === "#signal") {
    const u = e.$signal$, p = u.value;
    if (qt(p)) {
      const S2 = pt(p);
      if (C(S2))
        throw new Error("NOT IMPLEMENTED: Promise");
      if (Array.isArray(S2))
        throw new Error("NOT IMPLEMENTED: Array");
      {
        const g = bt(t, S2, n, s);
        return it(u, 4 & n ? [3, g, u, g] : [4, i.$element$, u, g]), e.$elm$ = g;
      }
    }
    {
      const S2 = r.createTextNode(e.$text$);
      return S2.data = e.$text$ = Gt(p), it(u, 4 & n ? [3, S2, u, S2] : [4, i.$element$, u, S2]), e.$elm$ = S2;
    }
  }
  let c2, $3 = !!(n & B);
  $3 || o !== "svg" || (n |= B, $3 = true);
  const l = o === Dt, a = e.$props$, f = t.$static$, d = f.$containerState$;
  l ? c2 = zi(r, $3) : o === "head" ? (c2 = r.head, n |= ye) : (c2 = zn(r, o, $3), n &= ~ye), 2 & e.$flags$ && (n |= 4), e.$elm$ = c2;
  const m = Le(c2);
  if (t.$slotCtx$ ? (m.$parentCtx$ = t.$slotCtx$, m.$realParentCtx$ = t.$cmpCtx$) : m.$parentCtx$ = t.$cmpCtx$, l) {
    if ("q:renderFn" in a) {
      const u = a["q:renderFn"], p = Ae(), S2 = d.$subsManager$.$createManager$(), g = new Proxy(p, new vs(d, S2)), h2 = a.props;
      if (d.$proxyMap$.set(p, g), m.$props$ = g, h2 !== O) {
        const E3 = p[M] = h2[M] ?? O;
        for (const x3 in h2)
          if (x3 !== "children" && x3 !== G) {
            const v3 = E3[x3];
            C(v3) ? p["$$" + x3] = v3 : p[x3] = h2[x3];
          }
      }
      Es(t, m), m.$componentQrl$ = u;
      const w = I(wn(t, m, n), () => {
        let E3 = e.$children$;
        if (E3.length === 0)
          return;
        E3.length === 1 && E3[0].$type$ === ":skipRender" && (E3 = E3[0].$children$);
        const x3 = co(m), v3 = [], _2 = oo(E3);
        for (const q3 in _2) {
          const R2 = _2[q3], k2 = io(f, x3, m, q3, f.$containerState$), st2 = oe(t), kt = k2.$element$;
          st2.$slotCtx$ = k2, k2.$vdom$ = R2, R2.$elm$ = kt;
          let U2 = n & ~B;
          kt.isSvg && (U2 |= B);
          for (const z3 of R2.$children$) {
            const Ut = bt(st2, z3, U2, v3);
            z3.$elm$, z3.$elm$, uo(f, kt, Ut);
          }
        }
        return At(v3);
      });
      return L(w) && s.push(w), c2;
    }
    if ("q:s" in a)
      i.$slots$, Ni(c2, e.$key$), H(c2, "q:sref", i.$id$), H(c2, "q:s", ""), i.$slots$.push(e), f.$addSlots$.push([c2, i.$element$]);
    else if (D in a)
      return gt(f, c2, "innerHTML", a[D]), c2;
  } else {
    if (e.$immutableProps$) {
      const u = a !== O ? Object.fromEntries(Object.entries(e.$immutableProps$).map(([p, S2]) => [p, S2 === M ? a[p] : S2])) : e.$immutableProps$;
      ss(f, m, i, u, $3, true);
    }
    if (a !== O) {
      m.$vdom$ = e;
      const u = e.$immutableProps$ ? Object.fromEntries(Object.entries(a).filter(([p]) => !(p in e.$immutableProps$))) : a;
      e.$props$ = ss(f, m, i, u, $3, false);
    }
    if ($3 && o === "foreignObject" && ($3 = false, n &= ~B), i) {
      const u = i.$scopeIds$;
      u && u.forEach((p) => {
        c2.classList.add(p);
      }), i.$flags$ & ht && (m.li.push(...i.li), i.$flags$ &= ~ht);
    }
    for (const u of m.li)
      $o(f, c2, u[0]);
    if (a[D] !== void 0)
      return c2;
    $3 && o === "foreignObject" && ($3 = false, n &= ~B);
  }
  let y = e.$children$;
  if (y.length === 0)
    return c2;
  y.length === 1 && y[0].$type$ === ":skipRender" && (y = y[0].$children$);
  const b2 = y.map((u) => bt(t, u, n, s));
  for (const u of b2)
    Zt(c2, u);
  return c2;
};
var di = (t) => {
  const e = t.$slots$;
  return e || (t.$element$.parentElement, t.$slots$ = pi(t));
};
var co = (t) => {
  const e = di(t), n = {}, s = {}, o = Array.from(t.$element$.childNodes).filter(nn);
  for (const r of e)
    r.$elm$, n[r.$key$ ?? ""] = r.$elm$;
  for (const r of o)
    s[Z(r, G) ?? ""] = r;
  return { slots: n, templates: s };
};
var pi = (t) => {
  const e = t.$element$.parentElement;
  return Di(e, "q:sref", t.$id$).map(be);
};
var hi = (t, e, n) => (gt(t, e.style, "cssText", n), true);
var es = (t, e, n) => (e.namespaceURI === ie ? jt(t, e, "class", n) : gt(t, e, "className", n), true);
var ns = (t, e, n, s) => s in e && ((e[s] !== n || s === "value" && !e.hasAttribute(s)) && (s === "value" && e.tagName !== "OPTION" ? _i(t, e, s, n) : gt(t, e, s, n)), true);
var Bt = (t, e, n, s) => (jt(t, e, s.toLowerCase(), n), true);
var mi = (t, e, n) => (gt(t, e, "innerHTML", n), true);
var gi = () => true;
var yi = { style: hi, class: es, className: es, value: ns, checked: ns, href: Bt, list: Bt, form: Bt, tabIndex: Bt, download: Bt, innerHTML: gi, [D]: mi };
var Pn = (t, e, n, s, o) => {
  if (xs(n))
    return void jt(t, e, n, s != null ? String(s) : s);
  const r = yi[n];
  r && r(t, e, s, n) || (o || !(n in e) ? (n.startsWith(gs) && lo(n.slice(15)), jt(t, e, n, s)) : gt(t, e, n, s));
};
var ss = (t, e, n, s, o, r) => {
  const i = {}, c2 = e.$element$;
  for (const $3 in s) {
    let l = s[$3];
    if ($3 !== "ref")
      if (dn($3))
        hn(e.li, $3, l, t.$containerState$.$containerEl$);
      else {
        if (C(l) && (l = it(l, r ? [1, c2, l, n.$element$, $3] : [2, n.$element$, l, c2, $3])), $3 === "class") {
          if (l = yn(l, n), !l)
            continue;
        } else
          $3 === "style" && (l = Pe(l));
        i[$3] = l, Pn(t, c2, $3, l, o);
      }
    else
      l !== void 0 && Mn(l, c2);
  }
  return i;
};
var Si = (t, e, n) => {
  let s = e.$props$;
  if (s || (e.$props$ = s = se(Ae(), t)), n === O)
    return;
  const o = F(s), r = It(s), i = r[M] = n[M] ?? O;
  for (const c2 in n)
    if (c2 !== "children" && c2 !== G && !i[c2]) {
      const $3 = n[c2];
      r[c2] !== $3 && (r[c2] = $3, o.$notifySubs$(c2));
    }
};
var Vt = (t, e, n, s) => {
  if (n.$clearSub$(t), vt(t)) {
    if (s && t.hasAttribute("q:s"))
      return void e.$rmSlots$.push(t);
    const o = X(t);
    o && Yr(o, n);
    const r = nt(t) ? t.close : null;
    let i = t.firstChild;
    for (; (i = On(i)) && (Vt(i, e, n, true), i = i.nextSibling, i !== r); )
      ;
  }
};
var vi = async (t) => {
  Mi(t);
};
var Zt = (t, e) => {
  nt(e) ? e.appendTo(t) : t.appendChild(e);
};
var bi = (t, e) => {
  nt(e) ? e.remove() : t.removeChild(e);
};
var wi = (t, e, n) => {
  nt(e) ? e.insertBeforeTo(t, (n == null ? void 0 : n.nextSibling) ?? null) : t.insertBefore(e, (n == null ? void 0 : n.nextSibling) ?? null);
};
var Oe = (t, e, n) => {
  nt(e) ? e.insertBeforeTo(t, Ee(n)) : t.insertBefore(e, Ee(n));
};
var Ei = (t, e, n) => {
  const s = {};
  for (let o = e; o <= n; ++o) {
    const r = t[o].$key$;
    r != null && (s[r] = o);
  }
  return s;
};
var $o = (t, e, n) => {
  n.startsWith("on:") || jt(t, e, n, ""), lo(n);
};
var lo = (t) => {
  var e;
  {
    const n = eo(t);
    try {
      ((e = globalThis).qwikevents || (e.qwikevents = [])).push(n);
    } catch {
    }
  }
};
var jt = (t, e, n, s) => {
  t.$operations$.push({ $operation$: xi, $args$: [e, n, s] });
};
var xi = (t, e, n) => {
  if (n == null || n === false)
    t.removeAttribute(e);
  else {
    const s = n === true ? "" : String(n);
    H(t, e, s);
  }
};
var gt = (t, e, n, s) => {
  t.$operations$.push({ $operation$: ao, $args$: [e, n, s] });
};
var _i = (t, e, n, s) => {
  t.$postOperations$.push({ $operation$: ao, $args$: [e, n, s] });
};
var ao = (t, e, n) => {
  try {
    t[e] = n ?? "", n == null && yt(t) && St(t) && t.removeAttribute(e);
  } catch (s) {
    Et(Te(6), e, { node: t, value: n }, s);
  }
};
var zn = (t, e, n) => n ? t.createElementNS(ie, e) : t.createElement(e);
var Pt = (t, e, n, s) => (t.$operations$.push({ $operation$: Oe, $args$: [e, n, s || null] }), n);
var Ti = (t, e, n, s) => (t.$operations$.push({ $operation$: wi, $args$: [e, n, s || null] }), n);
var uo = (t, e, n) => (t.$operations$.push({ $operation$: Zt, $args$: [e, n] }), n);
var qi = (t, e) => {
  t.$containerState$.$styleIds$.add(e.styleId), t.$postOperations$.push({ $operation$: Ii, $args$: [t.$containerState$, e] });
};
var Ii = (t, e) => {
  const n = t.$containerEl$, s = ne(n), o = s.documentElement === n, r = s.head, i = s.createElement("style");
  H(i, ke, e.styleId), H(i, "hidden", ""), i.textContent = e.content, o && r ? Zt(r, i) : Oe(n, i, n.firstChild);
};
var ki = (t, e, n) => {
  t.$operations$.push({ $operation$: Ri, $args$: [e, n] });
};
var Ri = (t, e) => {
  Oe(t, e, t.firstChild);
};
var Ln = (t, e) => {
  vt(e) && Vt(e, t, t.$containerState$.$subsManager$, true), t.$operations$.push({ $operation$: Ai, $args$: [e, t] });
};
var Ai = (t) => {
  const e = t.parentElement;
  e && bi(e, t);
};
var fo = (t, e) => {
  const n = zn(t, "q:template", false);
  return H(n, G, e), H(n, "hidden", ""), H(n, "aria-hidden", "true"), n;
};
var Mi = (t) => {
  for (const e of t.$operations$)
    e.$operation$.apply(void 0, e.$args$);
  Pi(t);
};
var sn = (t) => Z(t, "q:key");
var Ni = (t, e) => {
  e !== null && H(t, "q:key", e);
};
var Pi = (t) => {
  const e = t.$containerState$.$subsManager$;
  for (const n of t.$rmSlots$) {
    const s = sn(n), o = Nt(n, we);
    if (o.length > 0) {
      const r = n.getAttribute("q:sref"), i = t.$roots$.find((c2) => c2.$id$ === r);
      if (i) {
        const c2 = i.$element$;
        if (c2.isConnected)
          if (Nt(c2, nn).some(($3) => Z($3, G) === s))
            Vt(n, t, e, false);
          else {
            const $3 = fo(t.$doc$, s);
            for (const l of o)
              Zt($3, l);
            Oe(c2, $3, c2.firstChild);
          }
        else
          Vt(n, t, e, false);
      } else
        Vt(n, t, e, false);
    }
  }
  for (const [n, s] of t.$addSlots$) {
    const o = sn(n), r = Nt(s, nn).find((i) => i.getAttribute(G) === o);
    r && (Nt(r, we).forEach((i) => {
      Zt(n, i);
    }), r.remove());
  }
};
var os = () => {
};
var zi = (t, e) => {
  const n = t.createComment("qv "), s = t.createComment("/qv");
  return new po(n, s, e);
};
var Li = (t) => {
  if (!t)
    return {};
  const e = t.split(" ");
  return Object.fromEntries(e.map((n) => {
    const s = n.indexOf("=");
    return s >= 0 ? [n.slice(0, s), Qi(n.slice(s + 1))] : [n, ""];
  }));
};
var Oi = (t) => {
  const e = [];
  return Object.entries(t).forEach(([n, s]) => {
    e.push(s ? `${n}=${Fi(s)}` : `${n}`);
  }), e.join(" ");
};
var Ci = (t, e, n) => t.ownerDocument.createTreeWalker(t, 128, { acceptNode(s) {
  const o = ce(s);
  return o && Z(o, e) === n ? 1 : 2;
} });
var Di = (t, e, n) => {
  const s = Ci(t, e, n), o = [];
  let r = null;
  for (; r = s.nextNode(); )
    o.push(ce(r));
  return o;
};
var Fi = (t) => t.replace(/ /g, "+");
var Qi = (t) => t.replace(/\+/g, " ");
var Dt = ":virtual";
var po = class {
  constructor(e, n, s) {
    this.open = e, this.close = n, this.isSvg = s, this._qc_ = null, this.nodeType = 111, this.localName = Dt, this.nodeName = Dt;
    const o = this.ownerDocument = e.ownerDocument;
    this.$template$ = zn(o, "template", false), this.$attributes$ = Li(e.data.slice(3)), e.data.startsWith("qv "), e.__virtual = this, n.__virtual = this;
  }
  insertBefore(e, n) {
    const s = this.parentElement;
    return s ? s.insertBefore(e, n || this.close) : this.$template$.insertBefore(e, n), e;
  }
  remove() {
    const e = this.parentElement;
    if (e) {
      const n = this.childNodes;
      this.$template$.childElementCount, e.removeChild(this.open);
      for (let s = 0; s < n.length; s++)
        this.$template$.appendChild(n[s]);
      e.removeChild(this.close);
    }
  }
  appendChild(e) {
    return this.insertBefore(e, null);
  }
  insertBeforeTo(e, n) {
    const s = this.childNodes;
    e.insertBefore(this.open, n);
    for (const o of s)
      e.insertBefore(o, n);
    e.insertBefore(this.close, n), this.$template$.childElementCount;
  }
  appendTo(e) {
    this.insertBeforeTo(e, null);
  }
  get namespaceURI() {
    var e;
    return ((e = this.parentElement) == null ? void 0 : e.namespaceURI) ?? "";
  }
  removeChild(e) {
    this.parentElement ? this.parentElement.removeChild(e) : this.$template$.removeChild(e);
  }
  getAttribute(e) {
    return this.$attributes$[e] ?? null;
  }
  hasAttribute(e) {
    return e in this.$attributes$;
  }
  setAttribute(e, n) {
    this.$attributes$[e] = n, this.open.data = rs(this.$attributes$);
  }
  removeAttribute(e) {
    delete this.$attributes$[e], this.open.data = rs(this.$attributes$);
  }
  matches(e) {
    return false;
  }
  compareDocumentPosition(e) {
    return this.open.compareDocumentPosition(e);
  }
  closest(e) {
    const n = this.parentElement;
    return n ? n.closest(e) : null;
  }
  querySelectorAll(e) {
    const n = [];
    return Nt(this, Lo).forEach((s) => {
      vt(s) && (s.matches(e) && n.push(s), n.concat(Array.from(s.querySelectorAll(e))));
    }), n;
  }
  querySelector(e) {
    for (const n of this.childNodes)
      if (St(n)) {
        if (n.matches(e))
          return n;
        const s = n.querySelector(e);
        if (s !== null)
          return s;
      }
    return null;
  }
  get innerHTML() {
    return "";
  }
  set innerHTML(e) {
    const n = this.parentElement;
    n ? (this.childNodes.forEach((s) => this.removeChild(s)), this.$template$.innerHTML = e, n.insertBefore(this.$template$.content, this.close)) : this.$template$.innerHTML = e;
  }
  get firstChild() {
    if (this.parentElement) {
      const e = this.open.nextSibling;
      return e === this.close ? null : e;
    }
    return this.$template$.firstChild;
  }
  get nextSibling() {
    return this.close.nextSibling;
  }
  get previousSibling() {
    return this.open.previousSibling;
  }
  get childNodes() {
    if (!this.parentElement)
      return Array.from(this.$template$.childNodes);
    const e = [];
    let n = this.open;
    for (; (n = n.nextSibling) && n !== this.close; )
      e.push(n);
    return e;
  }
  get isConnected() {
    return this.open.isConnected;
  }
  get parentElement() {
    return this.open.parentElement;
  }
};
var rs = (t) => `qv ${Oi(t)}`;
var On = (t) => {
  if (t == null)
    return null;
  if (te(t)) {
    const e = ce(t);
    if (e)
      return e;
  }
  return t;
};
var Wi = (t) => {
  let e = t, n = 1;
  for (; e = e.nextSibling; )
    if (te(e)) {
      const s = e.__virtual;
      if (s)
        e = s;
      else if (e.data.startsWith("qv "))
        n++;
      else if (e.data === "/qv" && (n--, n === 0))
        return e;
    }
};
var ce = (t) => {
  var n;
  const e = t.__virtual;
  if (e)
    return e;
  if (t.data.startsWith("qv ")) {
    const s = Wi(t);
    return new po(t, s, ((n = t.parentElement) == null ? void 0 : n.namespaceURI) === ie);
  }
  return null;
};
var Ee = (t) => t == null ? null : nt(t) ? t.open : t;
var E$ = async (t) => {
  const e = An(null, null), n = ho(e);
  let s;
  for (T(t, n, false); (s = n.$promises$).length > 0; )
    n.$promises$ = [], await Promise.all(s);
  const o = Array.from(n.$objSet$.keys());
  let r = 0;
  const i = /* @__PURE__ */ new Map();
  for (const l of o)
    i.set(l, mt(r)), r++;
  if (n.$noSerialize$.length > 0) {
    const l = i.get(void 0);
    for (const a of n.$noSerialize$)
      i.set(a, l);
  }
  const c2 = (l) => {
    let a = "";
    if (L(l)) {
      const d = mo(l);
      if (!d)
        throw P(27, l);
      l = d.value, a += d.resolved ? "~" : "_";
    }
    if (ct(l)) {
      const d = It(l);
      d && (a += "!", l = d);
    }
    const f = i.get(l);
    if (f === void 0)
      throw P(27, l);
    return f + a;
  }, $3 = yo(o, c2, null, n, e);
  return JSON.stringify({ _entry: c2(t), _objs: $3 });
};
var Ui = async (t, e) => {
  const n = ne(t), s = n.documentElement, o = ps(t) ? s : t;
  if (Z(o, "q:container") === "paused")
    throw P(21);
  const r = e ?? (o === n.documentElement ? n.body : o), i = Wt(o), c2 = Hi(o, Zi);
  H(o, "q:container", "paused");
  for (const d of c2) {
    const m = d.$element$, y = d.li;
    if (d.$scopeIds$) {
      const b2 = Ts(d.$scopeIds$);
      b2 && m.setAttribute("q:sstyle", b2);
    }
    if (d.$id$ && m.setAttribute("q:id", d.$id$), St(m) && y.length > 0) {
      const b2 = pn(y);
      for (const u of b2)
        m.setAttribute(u[0], Fn(u[1], i, d));
    }
  }
  const $3 = await Bi(c2, i, (d) => yt(d) && cn(d) ? ec(d, i) : null), l = n.createElement("script");
  H(l, "type", "qwik/json"), l.textContent = Xi(JSON.stringify($3.state, void 0, void 0)), r.appendChild(l);
  const a = Array.from(i.$events$, (d) => JSON.stringify(d)), f = n.createElement("script");
  return f.textContent = `(window.qwikevents||=[]).push(${a.join(", ")})`, r.appendChild(f), $3;
};
var Bi = async (t, e, n, s) => {
  var g;
  const o = ho(e);
  s == null || s.forEach((h2, w) => {
    o.$seen$.add(w);
  });
  let r = false;
  for (const h2 of t)
    if (h2.$tasks$)
      for (const w of h2.$tasks$)
        Hs(w) && o.$resources$.push(w.$state$), Js(w);
  for (const h2 of t) {
    const w = h2.$element$, E3 = h2.li;
    for (const x3 of E3)
      if (St(w)) {
        const v3 = x3[1], _2 = v3.$captureRef$;
        if (_2)
          for (const q3 of _2)
            T(q3, o, true);
        o.$qrls$.push(v3), r = true;
      }
  }
  if (!r)
    return { state: { refs: {}, ctx: {}, objs: [], subs: [] }, objs: [], funcs: [], qrls: [], resources: o.$resources$, mode: "static" };
  let i;
  for (; (i = o.$promises$).length > 0; )
    o.$promises$ = [], await Promise.all(i);
  const c2 = o.$elements$.length > 0;
  if (c2) {
    for (const h2 of o.$deferElements$)
      Cn(h2, o, h2.$element$);
    for (const h2 of t)
      Vi(h2, o);
  }
  for (; (i = o.$promises$).length > 0; )
    o.$promises$ = [], await Promise.all(i);
  const $3 = /* @__PURE__ */ new Map(), l = Array.from(o.$objSet$.keys()), a = /* @__PURE__ */ new Map(), f = (h2) => {
    let w = "";
    if (L(h2)) {
      const v3 = mo(h2);
      if (!v3)
        return null;
      h2 = v3.value, w += v3.resolved ? "~" : "_";
    }
    if (ct(h2)) {
      const v3 = It(h2);
      if (v3)
        w += "!", h2 = v3;
      else if (vt(h2)) {
        const _2 = ((q3) => {
          let R2 = $3.get(q3);
          return R2 === void 0 && (R2 = tc(q3), R2 || console.warn("Missing ID", q3), $3.set(q3, R2)), R2;
        })(h2);
        return _2 ? "#" + _2 + w : null;
      }
    }
    const E3 = a.get(h2);
    if (E3)
      return E3 + w;
    const x3 = s == null ? void 0 : s.get(h2);
    return x3 ? "*" + x3 : n ? n(h2) : null;
  }, d = (h2) => {
    const w = f(h2);
    if (w === null) {
      if (Wn(h2)) {
        const E3 = mt(a.size);
        return a.set(h2, E3), E3;
      }
      throw P(27, h2);
    }
    return w;
  }, m = /* @__PURE__ */ new Map();
  for (const h2 of l) {
    const w = (g = ji(h2, e)) == null ? void 0 : g.$subs$;
    if (!w)
      continue;
    const E3 = _o(h2) ?? 0, x3 = [];
    1 & E3 && x3.push(E3);
    for (const v3 of w) {
      const _2 = v3[1];
      v3[0] === 0 && yt(_2) && nt(_2) && !o.$elements$.includes(X(_2)) || x3.push(v3);
    }
    x3.length > 0 && m.set(h2, x3);
  }
  l.sort((h2, w) => (m.has(h2) ? 0 : 1) - (m.has(w) ? 0 : 1));
  let y = 0;
  for (const h2 of l)
    a.set(h2, mt(y)), y++;
  if (o.$noSerialize$.length > 0) {
    const h2 = a.get(void 0);
    for (const w of o.$noSerialize$)
      a.set(w, h2);
  }
  const b2 = [];
  for (const h2 of l) {
    const w = m.get(h2);
    if (w == null)
      break;
    b2.push(w.map((E3) => typeof E3 == "number" ? `_${E3}` : Oc(E3, f)).filter(ms));
  }
  b2.length, m.size;
  const u = yo(l, d, f, o, e), p = {}, S2 = {};
  for (const h2 of t) {
    const w = h2.$element$, E3 = h2.$id$, x3 = h2.$refMap$, v3 = h2.$props$, _2 = h2.$contexts$, q3 = h2.$tasks$, R2 = h2.$componentQrl$, k2 = h2.$seq$, st2 = {}, kt = nt(w) && o.$elements$.includes(h2);
    if (x3.length > 0) {
      const U2 = wt(x3, d, " ");
      U2 && (S2[E3] = U2);
    } else if (c2) {
      let U2 = false;
      if (kt) {
        const z3 = f(v3);
        st2.h = d(R2) + (z3 ? " " + z3 : ""), U2 = true;
      } else {
        const z3 = f(v3);
        z3 && (st2.h = " " + z3, U2 = true);
      }
      if (q3 && q3.length > 0) {
        const z3 = wt(q3, f, " ");
        z3 && (st2.w = z3, U2 = true);
      }
      if (kt && k2 && k2.length > 0) {
        const z3 = wt(k2, d, " ");
        st2.s = z3, U2 = true;
      }
      if (_2) {
        const z3 = [];
        _2.forEach((Po, zo) => {
          const Hn = f(Po);
          Hn && z3.push(`${zo}=${Hn}`);
        });
        const Ut = z3.join(" ");
        Ut && (st2.c = Ut, U2 = true);
      }
      U2 && (p[E3] = st2);
    }
  }
  return { state: { refs: S2, ctx: p, objs: u, subs: b2 }, objs: l, funcs: o.$inlinedFunctions$, resources: o.$resources$, qrls: o.$qrls$, mode: c2 ? "render" : "listeners" };
};
var wt = (t, e, n) => {
  let s = "";
  for (const o of t) {
    const r = e(o);
    r !== null && (s !== "" && (s += n), s += r);
  }
  return s;
};
var Hi = (t, e) => {
  const n = [], s = e(t);
  s !== void 0 && n.push(s);
  const o = t.ownerDocument.createTreeWalker(t, 1 | to, { acceptNode(r) {
    if (Yi(r))
      return 2;
    const i = e(r);
    return i !== void 0 && n.push(i), 3;
  } });
  for (; o.nextNode(); )
    ;
  return n;
};
var Vi = (t, e) => {
  var o;
  const n = t.$realParentCtx$ || t.$parentCtx$, s = t.$props$;
  if (n && s && !go(s) && e.$elements$.includes(n)) {
    const r = (o = F(s)) == null ? void 0 : o.$subs$, i = t.$element$;
    if (r)
      for (const [c2, $3] of r)
        c2 === 0 ? ($3 !== i && Ft(F(s), e, false), yt($3) ? Gi($3, e) : T($3, e, true)) : (T(s, e, false), Ft(F(s), e, false));
  }
};
var ho = (t) => {
  const e = [];
  return t.$inlineFns$.forEach((n, s) => {
    for (; e.length <= n; )
      e.push("");
    e[n] = s;
  }), { $containerState$: t, $seen$: /* @__PURE__ */ new Set(), $objSet$: /* @__PURE__ */ new Set(), $prefetch$: 0, $noSerialize$: [], $inlinedFunctions$: e, $resources$: [], $elements$: [], $qrls$: [], $deferElements$: [], $promises$: [] };
};
var Ji = (t, e) => {
  const n = X(t);
  e.$elements$.includes(n) || (e.$elements$.push(n), n.$flags$ & kn ? (e.$prefetch$++, Cn(n, e, true), e.$prefetch$--) : e.$deferElements$.push(n));
};
var Gi = (t, e) => {
  const n = X(t);
  if (n) {
    if (e.$elements$.includes(n))
      return;
    e.$elements$.push(n), Cn(n, e, t);
  }
};
var Cn = (t, e, n) => {
  if (t.$props$ && !go(t.$props$) && (T(t.$props$, e, n), Ft(F(t.$props$), e, n)), t.$componentQrl$ && T(t.$componentQrl$, e, n), t.$seq$)
    for (const s of t.$seq$)
      T(s, e, n);
  if (t.$tasks$) {
    const s = e.$containerState$.$subsManager$.$groupToManagers$;
    for (const o of t.$tasks$)
      s.has(o) && T(o, e, n);
  }
  if (n === true && (is(t, e), t.$dynamicSlots$))
    for (const s of t.$dynamicSlots$)
      is(s, e);
};
var is = (t, e) => {
  for (; t; ) {
    if (t.$contexts$)
      for (const n of t.$contexts$.values())
        T(n, e, true);
    t = t.$parentCtx$;
  }
};
var Xi = (t) => t.replace(/<(\/?script)/gi, "\\x3C$1");
var Ft = (t, e, n) => {
  if (e.$seen$.has(t))
    return;
  e.$seen$.add(t);
  const s = t.$subs$;
  for (const o of s)
    if (o[0] > 0 && T(o[2], e, n), n === true) {
      const r = o[1];
      yt(r) && nt(r) ? o[0] === 0 && Ji(r, e) : T(r, e, true);
    }
};
var on = Symbol();
var Ki = (t) => t.then((e) => (t[on] = { resolved: true, value: e }, e), (e) => (t[on] = { resolved: false, value: e }, e));
var mo = (t) => t[on];
var T = (t, e, n) => {
  if (t != null) {
    const s = typeof t;
    switch (s) {
      case "function":
      case "object": {
        if (e.$seen$.has(t))
          return;
        if (e.$seen$.add(t), Eo(t))
          return e.$objSet$.add(void 0), void e.$noSerialize$.push(t);
        const o = t, r = It(t);
        if (r) {
          const i = !(2 & _o(t = r));
          if (n && i && Ft(F(o), e, n), xo(o))
            return void e.$objSet$.add(t);
        }
        if (Rc(t, e, n))
          return void e.$objSet$.add(t);
        if (L(t))
          return void e.$promises$.push(Ki(t).then((i) => {
            T(i, e, n);
          }));
        if (s === "object") {
          if (yt(t))
            return;
          if (A(t))
            for (let i = 0; i < t.length; i++)
              T(o[i], e, n);
          else if (ee(t))
            for (const i in t)
              T(o[i], e, n);
        }
        break;
      }
    }
  }
  e.$objSet$.add(t);
};
var Yi = (t) => St(t) && t.hasAttribute("q:container");
var Zi = (t) => {
  const e = On(t);
  if (vt(e)) {
    const n = X(e);
    if (n && n.$id$)
      return n;
  }
};
var ji = (t, e) => {
  if (!ct(t))
    return;
  if (t instanceof Yt)
    return F(t);
  const n = e.$proxyMap$.get(t);
  return n ? F(n) : void 0;
};
var tc = (t) => {
  const e = X(t);
  return e ? e.$id$ : null;
};
var ec = (t, e) => {
  const n = t.previousSibling;
  if (n && te(n) && n.data.startsWith("t="))
    return "#" + n.data.slice(2);
  const s = t.ownerDocument, o = mt(e.$elementIndex$++), r = s.createComment(`t=${o}`), i = s.createComment(""), c2 = t.parentElement;
  return c2.insertBefore(r, t), c2.insertBefore(i, t.nextSibling), "#" + o;
};
var go = (t) => Object.keys(t).length === 0;
function yo(t, e, n, s, o) {
  return t.map((r) => {
    if (r === null)
      return null;
    const i = typeof r;
    switch (i) {
      case "undefined":
        return De;
      case "number":
        if (!Number.isFinite(r))
          break;
        return r;
      case "string":
        if (r.charCodeAt(0) < 32)
          break;
        return r;
      case "boolean":
        return r;
    }
    const c2 = Ac(r, e, s, o);
    if (c2 !== void 0)
      return c2;
    if (i === "object") {
      if (A(r))
        return r.map(e);
      if (ee(r)) {
        const $3 = {};
        for (const l in r)
          if (n) {
            const a = n(r[l]);
            a !== null && ($3[l] = a);
          } else
            $3[l] = e(r[l]);
        return $3;
      }
    }
    throw P(3, r);
  });
}
var Lt = (t, e, n = tt) => We(null, e, t, null, null, n, null);
var x$ = (t, e = tt) => We(null, t, null, null, null, e, null);
var Dn = (t, e = {}) => {
  let n = t.$symbol$, s = t.$chunk$;
  const o = t.$refSymbol$ ?? n, r = qe();
  if (r) {
    const l = r.chunkForSymbol(o, s);
    l && (s = l[1], t.$refSymbol$ || (n = l[0]));
  }
  if (s == null)
    throw P(31, t.$symbol$);
  if (s.startsWith("./") && (s = s.slice(2)), Wc(t))
    if (e.$containerState$) {
      const l = e.$containerState$, a = t.resolved.toString();
      let f = l.$inlineFns$.get(a);
      f === void 0 && (f = l.$inlineFns$.size, l.$inlineFns$.set(a, f)), n = String(f);
    } else
      hs("Sync QRL without containerState");
  let i = `${s}#${n}`;
  const c2 = t.$capture$, $3 = t.$captureRef$;
  return $3 && $3.length ? e.$getObjId$ ? i += `[${wt($3, e.$getObjId$, " ")}]` : e.$addRefMap$ && (i += `[${wt($3, e.$addRefMap$, " ")}]`) : c2 && c2.length > 0 && (i += `[${c2.join(" ")}]`), i;
};
var Fn = (t, e, n) => {
  n.$element$;
  const s = { $containerState$: e, $addRefMap$: (o) => nc(n.$refMap$, o) };
  return wt(t, (o) => Dn(o, s), `
`);
};
var Ce = (t, e) => {
  const n = t.length, s = cs(t, 0, "#"), o = cs(t, s, "["), r = Math.min(s, o), i = t.substring(0, r), c2 = s == n ? s : s + 1, $3 = c2 == o ? "default" : t.substring(c2, o), l = o === n ? tt : t.substring(o + 1, n - 1).split(" "), a = We(i, $3, null, null, l, null, null);
  return e && a.$setContainer$(e), a;
};
var cs = (t, e, n) => {
  const s = t.length, o = t.indexOf(n, e == s ? 0 : e);
  return o == -1 ? s : o;
};
var nc = (t, e) => {
  const n = t.indexOf(e);
  return n === -1 ? (t.push(e), String(t.length - 1)) : String(n);
};
var So = (t, e) => (t.$capture$, t.$captureRef$ = t.$capture$.map((n) => {
  const s = parseInt(n, 10), o = e.$refMap$[s];
  return e.$refMap$.length > s, o;
}));
var sc = (t) => ({ __brand: "resource", value: void 0, loading: !V(), _resolved: void 0, _error: void 0, _state: "pending", _timeout: (t == null ? void 0 : t.timeout) ?? -1, _cache: 0 });
var oc = (t) => ct(t) && t.__brand === "resource";
var rc = (t, e) => {
  const n = t._state;
  return n === "resolved" ? `0 ${e(t._resolved)}` : n === "pending" ? "1" : `2 ${e(t._error)}`;
};
var ic = (t) => {
  const [e, n] = t.split(" "), s = sc(void 0);
  return s.value = Promise.resolve(), e === "0" ? (s._state = "resolved", s._resolved = n, s.loading = false) : e === "1" ? (s._state = "pending", s.value = new Promise(() => {
  }), s.loading = true) : e === "2" && (s._state = "rejected", s._error = n, s.loading = false), s;
};
var xe = (t) => ft(dt, { "q:s": "" }, 0, t.name ?? "");
var De = "";
function N(t) {
  return { $prefixCode$: t.$prefix$.charCodeAt(0), $prefixChar$: t.$prefix$, $test$: t.$test$, $serialize$: t.$serialize$, $prepare$: t.$prepare$, $fill$: t.$fill$, $collect$: t.$collect$, $subs$: t.$subs$ };
}
var cc = N({ $prefix$: "", $test$: (t) => Wn(t), $collect$: (t, e, n) => {
  if (t.$captureRef$)
    for (const s of t.$captureRef$)
      T(s, e, n);
  e.$prefetch$ === 0 && e.$qrls$.push(t);
}, $serialize$: (t, e) => Dn(t, { $getObjId$: e }), $prepare$: (t, e) => Ce(t, e.$containerEl$), $fill$: (t, e) => {
  t.$capture$ && t.$capture$.length > 0 && (t.$captureRef$ = t.$capture$.map(e), t.$capture$ = null);
} });
var $c = N({ $prefix$: "", $test$: (t) => qn(t), $collect$: (t, e, n) => {
  T(t.$qrl$, e, n), t.$state$ && (T(t.$state$, e, n), n === true && t.$state$ instanceof Yt && Ft(t.$state$[et], e, true));
}, $serialize$: (t, e) => Vr(t, e), $prepare$: (t) => Jr(t), $fill$: (t, e) => {
  t.$el$ = e(t.$el$), t.$qrl$ = e(t.$qrl$), t.$state$ && (t.$state$ = e(t.$state$));
} });
var lc = N({ $prefix$: "", $test$: (t) => oc(t), $collect$: (t, e, n) => {
  T(t.value, e, n), T(t._resolved, e, n);
}, $serialize$: (t, e) => rc(t, e), $prepare$: (t) => ic(t), $fill$: (t, e) => {
  if (t._state === "resolved")
    t._resolved = e(t._resolved), t.value = Promise.resolve(t._resolved);
  else if (t._state === "rejected") {
    const n = Promise.reject(t._error);
    n.catch(() => null), t._error = e(t._error), t.value = n;
  }
} });
var ac = N({ $prefix$: "", $test$: (t) => t instanceof URL, $serialize$: (t) => t.href, $prepare$: (t) => new URL(t) });
var uc = N({ $prefix$: "", $test$: (t) => t instanceof Date, $serialize$: (t) => t.toISOString(), $prepare$: (t) => new Date(t) });
var fc = N({ $prefix$: "\x07", $test$: (t) => t instanceof RegExp, $serialize$: (t) => `${t.flags} ${t.source}`, $prepare$: (t) => {
  const e = t.indexOf(" "), n = t.slice(e + 1), s = t.slice(0, e);
  return new RegExp(n, s);
} });
var dc = N({ $prefix$: "", $test$: (t) => t instanceof Error, $serialize$: (t) => t.message, $prepare$: (t) => {
  const e = new Error(t);
  return e.stack = void 0, e;
} });
var pc = N({ $prefix$: "", $test$: (t) => !!t && typeof t == "object" && ps(t), $prepare$: (t, e, n) => n });
var _e = Symbol("serializable-data");
var hc = N({ $prefix$: "", $test$: (t) => Io(t), $serialize$: (t, e) => {
  const [n] = t[_e];
  return Dn(n, { $getObjId$: e });
}, $prepare$: (t, e) => {
  const n = Ce(t, e.$containerEl$);
  return Un(n);
}, $fill$: (t, e) => {
  var s;
  const [n] = t[_e];
  (s = n.$capture$) != null && s.length && (n.$captureRef$ = n.$capture$.map(e), n.$capture$ = null);
} });
var mc = N({ $prefix$: "", $test$: (t) => t instanceof tn, $collect$: (t, e, n) => {
  if (t.$args$)
    for (const s of t.$args$)
      T(s, e, n);
}, $serialize$: (t, e, n) => {
  const s = vr(t);
  let o = n.$inlinedFunctions$.indexOf(s);
  return o < 0 && (o = n.$inlinedFunctions$.length, n.$inlinedFunctions$.push(s)), wt(t.$args$, e, " ") + " @" + mt(o);
}, $prepare$: (t) => {
  const e = t.split(" "), n = e.slice(0, -1), s = e[e.length - 1];
  return new tn(s, n, s);
}, $fill$: (t, e) => {
  t.$func$, t.$func$ = e(t.$func$), t.$args$ = t.$args$.map(e);
} });
var gc = N({ $prefix$: "", $test$: (t) => t instanceof Yt, $collect$: (t, e, n) => (T(t.untrackedValue, e, n), n === true && !(t[Kt] & ri) && Ft(t[et], e, true), t), $serialize$: (t, e) => e(t.untrackedValue), $prepare$: (t, e) => {
  var n;
  return new Yt(t, (n = e == null ? void 0 : e.$subsManager$) == null ? void 0 : n.$createManager$(), 0);
}, $subs$: (t, e) => {
  t[et].$addSubs$(e);
}, $fill$: (t, e) => {
  t.untrackedValue = e(t.untrackedValue);
} });
var yc = N({ $prefix$: "", $test$: (t) => t instanceof en, $collect$(t, e, n) {
  if (T(t.ref, e, n), xo(t.ref)) {
    const s = F(t.ref);
    Nc(e.$containerState$.$subsManager$, s, n) && T(t.ref[t.prop], e, n);
  }
  return t;
}, $serialize$: (t, e) => `${e(t.ref)} ${t.prop}`, $prepare$: (t) => {
  const [e, n] = t.split(" ");
  return new en(e, n);
}, $fill$: (t, e) => {
  t.ref = e(t.ref);
} });
var Sc = N({ $prefix$: "", $test$: (t) => typeof t == "number", $serialize$: (t) => String(t), $prepare$: (t) => Number(t) });
var vc = N({ $prefix$: "", $test$: (t) => t instanceof URLSearchParams, $serialize$: (t) => t.toString(), $prepare$: (t) => new URLSearchParams(t) });
var bc = N({ $prefix$: "", $test$: (t) => typeof FormData < "u" && t instanceof globalThis.FormData, $serialize$: (t) => {
  const e = [];
  return t.forEach((n, s) => {
    e.push(typeof n == "string" ? [s, n] : [s, n.name]);
  }), JSON.stringify(e);
}, $prepare$: (t) => {
  const e = JSON.parse(t), n = new FormData();
  for (const [s, o] of e)
    n.append(s, o);
  return n;
} });
var wc = N({ $prefix$: "", $test$: (t) => qt(t), $collect$: (t, e, n) => {
  T(t.children, e, n), T(t.props, e, n), T(t.immutableProps, e, n), T(t.key, e, n);
  let s = t.type;
  s === xe ? s = ":slot" : s === he && (s = ":fragment"), T(s, e, n);
}, $serialize$: (t, e) => {
  let n = t.type;
  return n === xe ? n = ":slot" : n === he && (n = ":fragment"), `${e(n)} ${e(t.props)} ${e(t.immutableProps)} ${e(t.key)} ${e(t.children)} ${t.flags}`;
}, $prepare$: (t) => {
  const [e, n, s, o, r, i] = t.split(" ");
  return new Qt(e, n, s, r, parseInt(i, 10), o);
}, $fill$: (t, e) => {
  t.type = Pc(e(t.type)), t.props = e(t.props), t.immutableProps = e(t.immutableProps), t.key = e(t.key), t.children = e(t.children);
} });
var Ec = N({ $prefix$: "", $test$: (t) => typeof t == "bigint", $serialize$: (t) => t.toString(), $prepare$: (t) => BigInt(t) });
var xc = N({ $prefix$: "", $test$: (t) => t instanceof Uint8Array, $serialize$: (t) => {
  let e = "";
  for (const n of t)
    e += String.fromCharCode(n);
  return btoa(e).replace(/=+$/, "");
}, $prepare$: (t) => {
  const e = atob(t), n = new Uint8Array(e.length);
  let s = 0;
  for (const o of e)
    n[s++] = o.charCodeAt(0);
  return n;
}, $fill$: void 0 });
var Ot = Symbol();
var _c = N({ $prefix$: "", $test$: (t) => t instanceof Set, $collect$: (t, e, n) => {
  t.forEach((s) => T(s, e, n));
}, $serialize$: (t, e) => Array.from(t).map(e).join(" "), $prepare$: (t) => {
  const e = /* @__PURE__ */ new Set();
  return e[Ot] = t, e;
}, $fill$: (t, e) => {
  const n = t[Ot];
  t[Ot] = void 0;
  const s = n.length === 0 ? [] : n.split(" ");
  for (const o of s)
    t.add(e(o));
} });
var Tc = N({ $prefix$: "", $test$: (t) => t instanceof Map, $collect$: (t, e, n) => {
  t.forEach((s, o) => {
    T(s, e, n), T(o, e, n);
  });
}, $serialize$: (t, e) => {
  const n = [];
  return t.forEach((s, o) => {
    n.push(e(o) + " " + e(s));
  }), n.join(" ");
}, $prepare$: (t) => {
  const e = /* @__PURE__ */ new Map();
  return e[Ot] = t, e;
}, $fill$: (t, e) => {
  const n = t[Ot];
  t[Ot] = void 0;
  const s = n.length === 0 ? [] : n.split(" ");
  s.length % 2;
  for (let o = 0; o < s.length; o += 2)
    t.set(e(s[o]), e(s[o + 1]));
} });
var qc = N({ $prefix$: "\x1B", $test$: (t) => !!vo(t) || t === De, $serialize$: (t) => t, $prepare$: (t) => t });
var Fe = [cc, $c, lc, ac, uc, fc, dc, pc, hc, mc, gc, yc, Sc, vc, bc, wc, Ec, _c, Tc, qc, xc];
var $s = (() => {
  const t = [];
  return Fe.forEach((e) => {
    const n = e.$prefixCode$;
    for (; t.length < n; )
      t.push(void 0);
    t.push(e);
  }), t;
})();
function vo(t) {
  if (typeof t == "string") {
    const e = t.charCodeAt(0);
    if (e < $s.length)
      return $s[e];
  }
}
var Ic = Fe.filter((t) => t.$collect$);
var kc = (t) => {
  for (const e of Fe)
    if (e.$test$(t))
      return true;
  return false;
};
var Rc = (t, e, n) => {
  for (const s of Ic)
    if (s.$test$(t))
      return s.$collect$(t, e, n), true;
  return false;
};
var Ac = (t, e, n, s) => {
  for (const o of Fe)
    if (o.$test$(t)) {
      let r = o.$prefixChar$;
      return o.$serialize$ && (r += o.$serialize$(t, e, n, s)), r;
    }
  if (typeof t == "string")
    return t;
};
var bo = (t, e) => {
  const n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  return { prepare(o) {
    const r = vo(o);
    if (r) {
      const i = r.$prepare$(o.slice(1), t, e);
      return r.$fill$ && n.set(i, r), r.$subs$ && s.set(i, r), i;
    }
    return o;
  }, subs(o, r) {
    const i = s.get(o);
    return !!i && (i.$subs$(o, r, t), true);
  }, fill(o, r) {
    const i = n.get(o);
    return !!i && (i.$fill$(o, r, t), true);
  } };
};
var Mc = { "!": (t, e) => e.$proxyMap$.get(t) ?? mn(t, e), "~": (t) => Promise.resolve(t), _: (t) => Promise.reject(t) };
var Nc = (t, e, n) => {
  if (typeof n == "boolean")
    return n;
  const s = t.$groupToManagers$.get(n);
  return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== e);
};
var Pc = (t) => t === ":slot" ? xe : t === ":fragment" ? he : t;
var _$ = (t, e) => rn(t, /* @__PURE__ */ new Set(), "_", e);
var rn = (t, e, n, s) => {
  const o = $e(t);
  if (o == null)
    return t;
  if (zc(o)) {
    if (e.has(o) || (e.add(o), kc(o)))
      return t;
    const r = typeof o;
    switch (r) {
      case "object":
        if (L(o) || yt(o))
          return t;
        if (A(o)) {
          let c2 = 0;
          return o.forEach(($3, l) => {
            if (l !== c2)
              throw P(3, o);
            rn($3, e, n + "[" + l + "]"), c2 = l + 1;
          }), t;
        }
        if (ee(o)) {
          for (const [c2, $3] of Object.entries(o))
            rn($3, e, n + "." + c2);
          return t;
        }
        break;
      case "boolean":
      case "string":
      case "number":
        return t;
    }
    let i = "";
    if (i = s || "Value cannot be serialized", n !== "_" && (i += ` in ${n},`), r === "object")
      i += ` because it's an instance of "${t == null ? void 0 : t.constructor.name}". You might need to use 'noSerialize()' or use an object literal instead. Check out https://qwik.dev/docs/advanced/dollar/`;
    else if (r === "function") {
      const c2 = t.name;
      i += ` because it's a function named "${c2}". You might need to convert it to a QRL using $(fn):

const ${c2} = $(${String(t)});

Please check out https://qwik.dev/docs/advanced/qrl/ for more information.`;
    }
    console.error("Trying to serialize", t), hs(i);
  }
  return t;
};
var Qn = /* @__PURE__ */ new WeakSet();
var wo = /* @__PURE__ */ new WeakSet();
var zc = (t) => !ct(t) && !J(t) || !Qn.has(t);
var Eo = (t) => Qn.has(t);
var xo = (t) => wo.has(t);
var Qe = (t) => (t != null && Qn.add(t), t);
var Lc = (t) => (wo.add(t), t);
var $e = (t) => ct(t) ? It(t) ?? t : t;
var It = (t) => t[Ge];
var F = (t) => t[et];
var _o = (t) => t[Mt];
var Oc = (t, e) => {
  const n = t[0], s = typeof t[1] == "string" ? t[1] : e(t[1]);
  if (!s)
    return;
  let o = n + " " + s, r;
  if (n === 0)
    r = t[2];
  else {
    const i = e(t[2]);
    if (!i)
      return;
    n <= 2 ? (r = t[5], o += ` ${i} ${ls(e(t[3]))} ${t[4]}`) : n <= 4 && (r = t[4], o += ` ${i} ${typeof t[3] == "string" ? t[3] : ls(e(t[3]))}`);
  }
  return r && (o += ` ${encodeURI(r)}`), o;
};
var Cc = (t, e) => {
  const n = t.split(" "), s = parseInt(n[0], 10);
  n.length >= 2;
  const o = e(n[1]);
  if (!o || qn(o) && !o.$el$)
    return;
  const r = [s, o];
  return s === 0 ? (n.length <= 3, r.push(Ve(n[2]))) : s <= 2 ? (n.length === 5 || n.length, r.push(e(n[2]), e(n[3]), n[4], Ve(n[5]))) : s <= 4 && (n.length === 4 || n.length, r.push(e(n[2]), e(n[3]), Ve(n[4]))), r;
};
var Ve = (t) => {
  if (t !== void 0)
    return decodeURI(t);
};
var Dc = (t) => {
  const e = /* @__PURE__ */ new Map();
  return { $groupToManagers$: e, $createManager$: (s) => new Fc(e, t, s), $clearSub$: (s) => {
    const o = e.get(s);
    if (o) {
      for (const r of o)
        r.$unsubGroup$(s);
      e.delete(s), o.length = 0;
    }
  }, $clearSignal$: (s) => {
    const o = e.get(s[1]);
    if (o)
      for (const r of o)
        r.$unsubEntry$(s);
  } };
};
var Fc = class {
  constructor(e, n, s) {
    this.$groupToManagers$ = e, this.$containerState$ = n, this.$subs$ = [], s && this.$addSubs$(s);
  }
  $addSubs$(e) {
    this.$subs$.push(...e);
    for (const n of this.$subs$)
      this.$addToGroup$(n[1], this);
  }
  $addToGroup$(e, n) {
    let s = this.$groupToManagers$.get(e);
    s || this.$groupToManagers$.set(e, s = []), s.includes(n) || s.push(n);
  }
  $unsubGroup$(e) {
    const n = this.$subs$;
    for (let s = 0; s < n.length; s++)
      n[s][1] === e && (n.splice(s, 1), s--);
  }
  $unsubEntry$(e) {
    const [n, s, o, r] = e, i = this.$subs$;
    if (n === 1 || n === 2) {
      const c2 = e[4];
      for (let $3 = 0; $3 < i.length; $3++) {
        const l = i[$3];
        l[0] === n && l[1] === s && l[2] === o && l[3] === r && l[4] === c2 && (i.splice($3, 1), $3--);
      }
    } else if (n === 3 || n === 4)
      for (let c2 = 0; c2 < i.length; c2++) {
        const $3 = i[c2];
        $3[0] === n && $3[1] === s && $3[2] === o && $3[3] === r && (i.splice(c2, 1), c2--);
      }
  }
  $addSub$(e, n) {
    const s = this.$subs$, o = e[1];
    e[0] === 0 && s.some(([r, i, c2]) => r === 0 && i === o && c2 === n) || (s.push(To = [...e, n]), this.$addToGroup$(o, this));
  }
  $notifySubs$(e) {
    const n = this.$subs$;
    for (const s of n) {
      const o = s[s.length - 1];
      e && o && o !== e || Nr(s, this.$containerState$);
    }
  }
};
var To;
function Qc() {
  return To;
}
var ls = (t) => {
  if (t == null)
    throw Et("must be non null", t);
  return t;
};
var Wn = (t) => typeof t == "function" && typeof t.getSymbol == "function";
var Wc = (t) => Wn(t) && t.$symbol$ == "<sync>";
var We = (t, e, n, s, o, r, i) => {
  let c2;
  const $3 = async function(...u) {
    return await d.call(this, rt())(...u);
  }, l = (u) => (c2 || (c2 = u), c2), a = async (u) => {
    if (u && l(u), t == "" && (n = (c2.qFuncs || [])[Number(e)]), n !== null)
      return n;
    if (s !== null)
      return n = s().then((p) => $3.resolved = n = p[e]);
    {
      const p = qe().importSymbol(c2, t, e);
      return n = I(p, (S2) => $3.resolved = n = S2);
    }
  }, f = (u) => n !== null ? n : a(u);
  function d(u, p) {
    return (...S2) => {
      const g = Hc(), h2 = f();
      return I(h2, (w) => {
        if (J(w)) {
          if (p && p() === false)
            return;
          const E3 = { ...m(u), $qrl$: $3 };
          return E3.$event$ === void 0 && (E3.$event$ = this), Uc(e, E3.$element$, g), W.call(this, E3, w, ...S2);
        }
        throw P(10);
      });
    };
  }
  const m = (u) => u == null ? Y() : A(u) ? Xs(u) : u, y = i ?? e, b2 = qo(y);
  return Object.assign($3, { getSymbol: () => y, getHash: () => b2, getCaptured: () => r, resolve: a, $resolveLazy$: f, $setContainer$: l, $chunk$: t, $symbol$: e, $refSymbol$: i, $hash$: b2, getFn: d, $capture$: o, $captureRef$: r, dev: null, resolved: e == "<sync>" ? n : void 0 }), $3;
};
var qo = (t) => {
  const e = t.lastIndexOf("_");
  return e > -1 ? t.slice(e + 1) : t;
};
var as = /* @__PURE__ */ new Set();
var Uc = (t, e, n) => {
  as.has(t) || (as.add(t), Bc("qsymbol", { symbol: t, element: e, reqTime: n }));
};
var Bc = (t, e) => {
  V() || typeof document != "object" || document.dispatchEvent(new CustomEvent(t, { bubbles: false, detail: e }));
};
var Hc = () => V() ? 0 : typeof performance == "object" ? performance.now() : 0;
var Un = (t) => {
  function e(n, s, o) {
    const r = t.$hash$.slice(0, 4);
    return ft(dt, { "q:renderFn": t, [G]: n[G], [M]: n[M], children: n.children, props: n }, o, r + ":" + (s || ""));
  }
  return e[_e] = [t], e;
};
var Io = (t) => typeof t == "function" && t[_e] !== void 0;
var le = (t, e) => {
  const { val: n, set: s, iCtx: o } = Tt();
  if (n != null)
    return n;
  const r = J(t) ? W(void 0, t) : t;
  if ((e == null ? void 0 : e.reactive) === false)
    return s(r), r;
  {
    const i = mn(r, o.$renderCtx$.$static$.$containerState$, (e == null ? void 0 : e.deep) ?? true ? 1 : 0);
    return s(i), i;
  }
};
function Bn(t, e) {
  var s;
  const n = rt();
  return ((s = n == null ? void 0 : n.$renderCtx$) == null ? void 0 : s.$static$.$containerState$.$serverData$[t]) ?? e;
}
var Vc = (t) => {
  Jc(t, (e) => e, false);
};
var Jc = (t, e, n) => {
  const { val: s, set: o, iCtx: r, i, elCtx: c2 } = Tt();
  if (s)
    return s;
  const $3 = nr(t, i), l = r.$renderCtx$.$static$.$containerState$;
  if (o($3), c2.$appendStyles$ || (c2.$appendStyles$ = []), c2.$scopeIds$ || (c2.$scopeIds$ = []), n && c2.$scopeIds$.push(sr($3)), l.$styleIds$.has($3))
    return $3;
  l.$styleIds$.add($3);
  const a = t.$resolveLazy$(l.$containerEl$), f = (d) => {
    c2.$appendStyles$, c2.$appendStyles$.push({ styleId: $3, content: e(d, $3) });
  };
  return L(a) ? r.$waitOn$.push(a.then(f)) : f(a), $3;
};
var Je = (t) => {
  const { val: e, set: n, iCtx: s } = Tt();
  if (e != null)
    return e;
  const o = s.$renderCtx$.$static$.$containerState$, r = J(t) && !Io(t) ? W(void 0, t) : t;
  return n(oi(r, o, 0, void 0));
};
var Gc = '((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])';
var Xc = $t("qc-s");
var Kc = $t("qc-c");
var ko = $t("qc-ic");
var Ro = $t("qc-h");
var Ao = $t("qc-l");
var Mo = $t("qc-n");
var Yc = $t("qc-a");
var Zc = $t("qc-ir");
var jc = (t) => {
  const e = window, n = location.pathname + location.search, s = "_qCitySPA", o = "_qCityHistoryPatch", r = "_qCityBootstrap", i = "_qCityInitPopstate", c2 = "_qCityInitAnchors", $3 = "_qCityInitVisibility", l = "_qCityInitScroll", a = "_qCityScrollEnabled", f = "_qCityScrollDebounce", d = "_qCityScroll", m = (u) => {
    u && e.scrollTo(u.x, u.y);
  }, y = () => {
    const u = document.documentElement;
    return { x: u.scrollLeft, y: u.scrollTop, w: Math.max(u.scrollWidth, u.clientWidth), h: Math.max(u.scrollHeight, u.clientHeight) };
  }, b2 = (u) => {
    const p = history.state || {};
    p[d] = u || y(), history.replaceState(p, "");
  };
  if (!e[s] && !e[i] && !e[c2] && !e[$3] && !e[l]) {
    if (b2(), e[i] = () => {
      var u;
      if (!e[s]) {
        if (e[a] = false, clearTimeout(e[f]), n !== location.pathname + location.search) {
          const S2 = t.closest("[q\\:container]").querySelector("a[q\\:link]");
          if (S2) {
            const g = S2.closest("[q\\:container]"), h2 = S2.cloneNode();
            h2.setAttribute("q:nbs", ""), h2.style.display = "none", g.appendChild(h2), e[r] = h2, h2.click();
          } else
            location.reload();
        } else if (history.scrollRestoration === "manual") {
          const p = (u = history.state) == null ? void 0 : u[d];
          m(p), e[a] = true;
        }
      }
    }, !e[o]) {
      e[o] = true;
      const u = history.pushState, p = history.replaceState, S2 = (g) => (g === null || typeof g > "u" ? g = {} : (g == null ? void 0 : g.constructor) !== Object && (g = { _data: g }), g._qCityScroll = g._qCityScroll || y(), g);
      history.pushState = (g, h2, w) => (g = S2(g), u.call(history, g, h2, w)), history.replaceState = (g, h2, w) => (g = S2(g), p.call(history, g, h2, w));
    }
    e[c2] = (u) => {
      if (e[s] || u.defaultPrevented)
        return;
      const p = u.target.closest("a[href]");
      if (p && !p.hasAttribute("preventdefault:click")) {
        const S2 = p.getAttribute("href"), g = new URL(location.href), h2 = new URL(S2, g), w = h2.origin === g.origin, E3 = h2.pathname + h2.search === g.pathname + g.search;
        if (w && E3)
          if (u.preventDefault(), h2.href !== g.href && history.pushState(null, "", h2), !h2.hash)
            h2.href.endsWith("#") ? window.scrollTo(0, 0) : (e[a] = false, clearTimeout(e[f]), b2({ ...y(), x: 0, y: 0 }), location.reload());
          else {
            const x3 = h2.hash.slice(1), v3 = document.getElementById(x3);
            v3 && v3.scrollIntoView();
          }
      }
    }, e[$3] = () => {
      !e[s] && e[a] && document.visibilityState === "hidden" && b2();
    }, e[l] = () => {
      e[s] || !e[a] || (clearTimeout(e[f]), e[f] = setTimeout(() => {
        b2(), e[f] = void 0;
      }, 200));
    }, e[a] = true, setTimeout(() => {
      addEventListener("popstate", e[i]), addEventListener("scroll", e[l], { passive: true }), document.body.addEventListener("click", e[c2]), e.navigation || document.addEventListener("visibilitychange", e[$3], { passive: true });
    }, 0);
  }
};
var t$ = Lt(jc, "s_DyVc0YBIqQU");
var e$ = () => {
  {
    const [t, e] = qe().chunkForSymbol(t$.getSymbol(), null);
    return `(${n$.toString()})('${e}','${t}');`;
  }
};
var n$ = async (t, e) => {
  var n;
  if (!window._qcs && history.scrollRestoration === "manual") {
    window._qcs = true;
    const s = (n = history.state) == null ? void 0 : n._qCityScroll;
    s && window.scrollTo(s.x, s.y);
    const o = document.currentScript, r = o.closest("[q\\:container]"), i = new URL(r.getAttribute("q:base"), document.baseURI);
    (await import(new URL(t, i).href))[e](o);
  }
};
var s$ = () => {
  const t = e$();
  si();
  const e = Bn("nonce"), n = Ne(ko);
  if (n.value && n.value.length > 0) {
    const s = n.value.length;
    let o = null;
    for (let r = s - 1; r >= 0; r--)
      n.value[r].default && (o = ft(n.value[r].default, { children: o }, 1, "zl_0"));
    return ft(he, { children: [o, xt("script", { dangerouslySetInnerHTML: t }, { nonce: e }, null, 3, null)] }, 1, "zl_1");
  }
  return bn;
};
var T$ = Un(Lt(s$, "s_e0ssiDXoeAM"));
var o$ = (t, e) => new URL(t, e.href);
var r$ = (t, e) => t.origin === e.origin;
var us = (t) => t.endsWith("/") ? t : t + "/";
var i$ = ({ pathname: t }, { pathname: e }) => {
  const n = Math.abs(t.length - e.length);
  return n === 0 ? t === e : n === 1 && us(t) === us(e);
};
var c$ = (t, e) => t.search === e.search;
var $$ = (t, e) => c$(t, e) && i$(t, e);
var l$ = (t) => t && typeof t.then == "function";
var a$ = (t, e, n, s) => {
  const o = No(), i = { head: o, withLocale: (c2) => Yn(s, c2), resolveValue: (c2) => {
    const $3 = c2.__id;
    if (c2.__brand === "server_loader" && !($3 in t.loaders))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    const l = t.loaders[$3];
    if (l$(l))
      throw new Error("Loaders returning a promise can not be resolved for the head function.");
    return l;
  }, ...e };
  for (let c2 = n.length - 1; c2 >= 0; c2--) {
    const $3 = n[c2] && n[c2].head;
    $3 && (typeof $3 == "function" ? fs(o, Yn(s, () => $3(i))) : typeof $3 == "object" && fs(o, $3));
  }
  return i.head;
};
var fs = (t, e) => {
  typeof e.title == "string" && (t.title = e.title), ae(t.meta, e.meta), ae(t.links, e.links), ae(t.styles, e.styles), ae(t.scripts, e.scripts), Object.assign(t.frontmatter, e.frontmatter);
};
var ae = (t, e) => {
  if (Array.isArray(e))
    for (const n of e) {
      if (typeof n.key == "string") {
        const s = t.findIndex((o) => o.key === n.key);
        if (s > -1) {
          t[s] = n;
          continue;
        }
      }
      t.push(n);
    }
};
var No = () => ({ title: "", meta: [], links: [], styles: [], scripts: [], frontmatter: {} });
var ds;
(function(t) {
  t[t.EOL = 0] = "EOL", t[t.OPEN_BRACKET = 91] = "OPEN_BRACKET", t[t.CLOSE_BRACKET = 93] = "CLOSE_BRACKET", t[t.DOT = 46] = "DOT", t[t.SLASH = 47] = "SLASH";
})(ds || (ds = {}));
var q$ = () => Ne(Ro);
var I$ = () => Ne(Ao);
var k$ = () => Ne(Mo);
var u$ = () => Qe(Bn("qwikcity"));
var f$ = ":root{view-transition-name:none}";
var d$ = async (t, e) => {
  const [n, s, o, r] = xn(), { type: i = "link", forceReload: c2 = t === void 0, replaceState: $3 = false, scroll: l = true } = typeof e == "object" ? e : { forceReload: e }, a = o.value.dest, f = t === void 0 ? a : o$(t, r.url);
  if (r$(f, a) && !(!c2 && $$(f, a)))
    return o.value = { type: i, dest: f, forceReload: c2, replaceState: $3, scroll: l }, n.value = void 0, r.isNavigating = true, new Promise((d) => {
      s.r = d;
    });
};
var p$ = ({ track: t }) => {
  const [e, n, s, o, r, i, c2, $3, l, a, f] = xn();
  async function d() {
    const [y, b2] = t(() => [a.value, e.value]), u = Zr(""), p = f.url, S2 = b2 ? "form" : y.type;
    y.replaceState;
    let g, h2, w = null;
    if (g = new URL(y.dest, f.url), w = r.loadedRoute, h2 = r.response, w) {
      const [E3, x3, v3, _2] = w, q3 = v3, R2 = q3[q3.length - 1];
      f.prevUrl = p, f.url = g, f.params = { ...x3 }, a.untrackedValue = { type: S2, dest: g };
      const k2 = a$(h2, f, q3, u);
      n.headings = R2.headings, n.menu = _2, s.value = Qe(q3), o.links = k2.links, o.meta = k2.meta, o.styles = k2.styles, o.scripts = k2.scripts, o.title = k2.title, o.frontmatter = k2.frontmatter;
    }
  }
  return d();
};
var h$ = (t) => {
  Vc(Lt(f$, "s_RPDJAz33WLA"));
  const e = u$();
  if (!(e != null && e.params))
    throw new Error("Missing Qwik City Env Data");
  const n = Bn("url");
  if (!n)
    throw new Error("Missing Qwik URL Env Data");
  const s = new URL(n), o = le({ url: s, params: e.params, isNavigating: false, prevUrl: void 0 }, { deep: false }), r = {}, i = Lc(le(e.response.loaders, { deep: false })), c2 = Je({ type: "initial", dest: s, forceReload: false, replaceState: false, scroll: true }), $3 = le(No), l = le({ headings: void 0, menu: void 0 }), a = Je(), f = e.response.action, d = f ? e.response.loaders[f] : void 0, m = Je(d ? { id: f, data: e.response.formData, output: { result: d, status: e.response.status } } : void 0), y = Lt(d$, "s_fX0bDjeJa0E", [m, r, c2, o]);
  return lt(Kc, l), lt(ko, a), lt(Ro, $3), lt(Ao, o), lt(Mo, y), lt(Xc, i), lt(Yc, m), lt(Zc, c2), Wr(Lt(p$, "s_02wMImzEAbk", [m, l, a, $3, e, y, i, r, t, c2, o])), ft(xe, null, 3, "qY_0");
};
var R$ = Un(Lt(h$, "s_TxCFOy819ag"));
var A$ = (t) => xt("script", { nonce: ci(t, "nonce") }, { dangerouslySetInnerHTML: Gc }, null, 3, "1Z_0");
init_checked_fetch();
init_modules_watch_stub();
var be2 = ((t) => typeof __require2 < "u" ? __require2 : typeof Proxy < "u" ? new Proxy(t, { get: (e, n) => (typeof __require2 < "u" ? __require2 : e)[n] }) : t)(function(t) {
  if (typeof __require2 < "u")
    return __require2.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var ge2 = "<sync>";
function G2(t, e) {
  const n = e == null ? void 0 : e.mapper, s = t.symbolMapper ? t.symbolMapper : (i) => {
    var a;
    if (n) {
      const o = z(i), c2 = n[o];
      if (!c2) {
        if (o === ge2)
          return [o, ""];
        if ((a = globalThis.__qwik_reg_symbols) == null ? void 0 : a.has(o))
          return [i, "_"];
        console.error("Cannot resolve symbol", i, "in", n);
      }
      return c2;
    }
  };
  return { isServer: true, async importSymbol(i, a, o) {
    var _2;
    const c2 = z(o), d = (_2 = globalThis.__qwik_reg_symbols) == null ? void 0 : _2.get(c2);
    if (d)
      return d;
    let u = String(a);
    u.endsWith(".js") || (u += ".js");
    const q3 = be2(u);
    if (!(o in q3))
      throw new Error(`Q-ERROR: missing symbol '${o}' in module '${u}'.`);
    return q3[o];
  }, raf: () => (console.error("server can not rerender"), Promise.resolve()), nextTick: (i) => new Promise((a) => {
    setTimeout(() => {
      a(i());
    });
  }), chunkForSymbol(i) {
    return s(i, n);
  } };
}
async function _e2(t, e) {
  const n = G2(t, e);
  m$(n);
}
var z = (t) => {
  const e = t.lastIndexOf("_");
  return e > -1 ? t.slice(e + 1) : t;
};
function S() {
  if (typeof performance > "u")
    return () => 0;
  const t = performance.now();
  return () => (performance.now() - t) / 1e6;
}
function ee2(t) {
  let e = t.base;
  return typeof t.base == "function" && (e = t.base(t)), typeof e == "string" ? (e.endsWith("/") || (e += "/"), e) : "/build/";
}
var qe2 = '((e,t)=>{const n="__q_context__",s=window,o=new Set,i="replace",a="forEach",r="target",l="getAttribute",c="isConnected",f="qvisible",u="_qwikjson_",d=t=>e.querySelectorAll(t),p=(e,t,n=t.type)=>{d("[on"+e+"\\\\:"+n+"]")[a]((s=>m(s,e,t,n)))},b=t=>{if(void 0===t[u]){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n[l]("type")){t[u]=JSON.parse(n.textContent[i](/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},w=(e,t)=>new CustomEvent(e,{detail:t}),m=async(t,s,o,a=o.type)=>{const r="on"+s+":"+a;t.hasAttribute("preventdefault:"+a)&&o.preventDefault();const f=t._qc_,u=f&&f.li.filter((e=>e[0]===r));if(u&&u.length>0){for(const e of u)await e[1].getFn([t,o],(()=>t[c]))(o,t);return}const d=t[l](r);if(d){const s=t.closest("[q\\\\:container]"),a=new URL(s[l]("q:base"),e.baseURI);for(const r of d.split("\\n")){const l=new URL(r,a),f=l.hash[i](/^#?([^?[|]*).*$/,"$1")||"default",u=performance.now();let d;const p=r.startsWith("#");if(p)d=(s.qFuncs||[])[Number.parseInt(f)];else{const e=import(l.href.split("#")[0]);b(s),d=(await e)[f]}const w=e[n];if(t[c])try{e[n]=[t,o,l],p||y("qsymbol",{symbol:f,element:t,reqTime:u}),await d(o,t)}finally{e[n]=w}}}},y=(t,n)=>{e.dispatchEvent(w(t,n))},q=e=>e[i](/([A-Z])/g,(e=>"-"+e.toLowerCase())),v=async e=>{let t=q(e.type),n=e[r];for(p("-document",e,t);n&&n[l];)await m(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},h=e=>{p("-window",e,q(e.type))},g=()=>{var n;const i=e.readyState;if(!t&&("interactive"==i||"complete"==i)&&(t=1,y("qinit"),(null!=(n=s.requestIdleCallback)?n:s.setTimeout).bind(s)((()=>y("qidle"))),o.has(f))){const e=d("[on\\\\:"+f+"]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n[r]),m(n[r],"",w(f,n)))}));e[a]((e=>t.observe(e)))}},_=(e,t,n,s=!1)=>e.addEventListener(t,n,{capture:s,passive:!1}),C=t=>{for(const n of t)o.has(n)||(_(e,n,v,!0),_(s,n,h,!0),o.add(n))};if(!(n in e)){e[n]=0;const t=s.qwikevents;Array.isArray(t)&&C(t),s.qwikevents={push:(...e)=>C(e)},_(e,"readystatechange",g),g()}})(document)';
var xe2 = `(() => {
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    await listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(container.getAttribute("q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    const isSync = qrl.startsWith("#");
                    if (isSync) {
                        handler = (container.qFuncs || [])[Number.parseInt(symbolName)];
                    } else {
                        const module = import(
                                                url.href.split("#")[0]);
                        resolveContainer(container);
                        handler = (await module)[symbolName];
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent, !0);
                    events.add(eventName);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`;
function J2(t = {}) {
  return t.debug ? xe2 : qe2;
}
function je2(t, e, n) {
  if (!n)
    return [];
  const s = e.prefetchStrategy, r = ee2(e);
  if (s !== null) {
    if (!s || !s.symbolsToPrefetch || s.symbolsToPrefetch === "auto")
      return ve2(t, n, r);
    if (typeof s.symbolsToPrefetch == "function")
      try {
        return s.symbolsToPrefetch({ manifest: n.manifest });
      } catch (i) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", i);
      }
  }
  return [];
}
function ve2(t, e, n) {
  const s = [], r = t == null ? void 0 : t.qrls, { mapper: i, manifest: a } = e, o = /* @__PURE__ */ new Map();
  if (Array.isArray(r))
    for (const c2 of r) {
      const d = c2.getHash(), u = i[d];
      u && te2(a, o, s, n, u[1]);
    }
  return s;
}
function te2(t, e, n, s, r) {
  const i = s + r;
  let a = e.get(i);
  if (!a) {
    a = { url: i, imports: [] }, e.set(i, a);
    const o = t.bundles[r];
    if (o && Array.isArray(o.imports))
      for (const c2 of o.imports)
        te2(t, e, a.imports, s, c2);
  }
  n.push(a);
}
function ke2(t) {
  if (t != null && t.mapping != null && typeof t.mapping == "object" && t.symbols != null && typeof t.symbols == "object" && t.bundles != null && typeof t.bundles == "object")
    return t;
}
function C2() {
  let r = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return r += "w.postMessage(u.map(u=>new URL(u,origin)+''));", r += "w.onmessage=()=>{w.terminate()};", r;
}
function Ne2(t) {
  const e = { bundles: x(t).map((n) => n.split("/").pop()) };
  return `document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`;
}
function x(t) {
  const e = [], n = (s) => {
    if (Array.isArray(s))
      for (const r of s)
        e.includes(r.url) || (e.push(r.url), n(r.imports));
  };
  return n(t), e;
}
function Se2(t) {
  const e = /* @__PURE__ */ new Map();
  let n = 0;
  const s = (o, c2) => {
    if (Array.isArray(o))
      for (const d of o) {
        const u = e.get(d.url) || 0;
        e.set(d.url, u + 1), n++, c2.has(d.url) || (c2.add(d.url), s(d.imports, c2));
      }
  }, r = /* @__PURE__ */ new Set();
  for (const o of t)
    r.clear(), s(o.imports, r);
  const i = n / e.size * 2, a = Array.from(e.entries());
  return a.sort((o, c2) => c2[1] - o[1]), a.slice(0, 5).filter((o) => o[1] > i).map((o) => o[0]);
}
function ze2(t, e, n) {
  const s = Ee2(t == null ? void 0 : t.implementation), r = [];
  return s.prefetchEvent === "always" && Ce2(r, e, n), s.linkInsert === "html-append" && De2(r, e, s), s.linkInsert === "js-append" ? Ie2(r, e, s, n) : s.workerFetchInsert === "always" && Oe2(r, e, n), r.length > 0 ? v$(he, { children: r }) : null;
}
function Ce2(t, e, n) {
  const s = Se2(e);
  for (const r of s)
    t.push(v$("link", { rel: "modulepreload", href: r, nonce: n }));
  t.push(v$("script", { "q:type": "prefetch-bundles", dangerouslySetInnerHTML: Ne2(e) + ";document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))", nonce: n }));
}
function De2(t, e, n) {
  const s = x(e), r = n.linkRel || "prefetch";
  for (const i of s) {
    const a = {};
    a.href = i, a.rel = r, (r === "prefetch" || r === "preload") && i.endsWith(".js") && (a.as = "script"), t.push(v$("link", a, void 0));
  }
}
function Ie2(t, e, n, s) {
  const r = n.linkRel || "prefetch";
  let i = "";
  n.workerFetchInsert === "no-link-support" && (i += "let supportsLinkRel = true;"), i += `const u=${JSON.stringify(x(e))};`, i += "u.map((u,i)=>{", i += "const l=document.createElement('link');", i += 'l.setAttribute("href",u);', i += `l.setAttribute("rel","${r}");`, n.workerFetchInsert === "no-link-support" && (i += "if(i===0){", i += "try{", i += `supportsLinkRel=l.relList.supports("${r}");`, i += "}catch(e){}", i += "}"), i += "document.body.appendChild(l);", i += "});", n.workerFetchInsert === "no-link-support" && (i += "if(!supportsLinkRel){", i += C2(), i += "}"), n.workerFetchInsert === "always" && (i += C2()), t.push(v$("script", { type: "module", "q:type": "link-js", dangerouslySetInnerHTML: i, nonce: s }));
}
function Oe2(t, e, n) {
  let s = `const u=${JSON.stringify(x(e))};`;
  s += C2(), t.push(v$("script", { type: "module", "q:type": "prefetch-worker", dangerouslySetInnerHTML: s, nonce: n }));
}
function Ee2(t) {
  return { ...Fe2, ...t };
}
var Fe2 = { linkInsert: null, linkRel: null, workerFetchInsert: null, prefetchEvent: "always" };
var Te2 = "<!DOCTYPE html>";
async function Be2(t, e) {
  var A3, L4, P4;
  let n = e.stream, s = 0, r = 0, i = 0, a = 0, o = "", c2;
  const d = ((A3 = e.streaming) == null ? void 0 : A3.inOrder) ?? { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 }, u = e.containerTagName ?? "html", q3 = e.containerAttributes ?? {}, _2 = n, se4 = S(), ie4 = ee2(e), p = ne2(e.manifest);
  function I4() {
    o && (_2.write(o), o = "", s = 0, i++, i === 1 && (a = se4()));
  }
  function O4(l) {
    const f = l.length;
    s += f, r += f, o += l;
  }
  switch (d.strategy) {
    case "disabled":
      n = { write: O4 };
      break;
    case "direct":
      n = _2;
      break;
    case "auto":
      let l = 0, f = false;
      const M3 = d.maximunChunk ?? 0, k2 = d.maximunInitialChunk ?? 0;
      n = { write(b2) {
        b2 === "<!--qkssr-f-->" ? f || (f = true) : b2 === "<!--qkssr-pu-->" ? l++ : b2 === "<!--qkssr-po-->" ? l-- : O4(b2), l === 0 && (f || s >= (i === 0 ? k2 : M3)) && (f = false, I4());
      } };
      break;
  }
  u === "html" ? n.write(Te2) : (n.write("<!--cq-->"), e.qwikLoader ? (e.qwikLoader.include === void 0 && (e.qwikLoader.include = "never"), e.qwikLoader.position === void 0 && (e.qwikLoader.position = "bottom")) : e.qwikLoader = { include: "never" }, e.qwikPrefetchServiceWorker || (e.qwikPrefetchServiceWorker = {}), e.qwikPrefetchServiceWorker.include || (e.qwikPrefetchServiceWorker.include = false), e.qwikPrefetchServiceWorker.position || (e.qwikPrefetchServiceWorker.position = "top")), e.manifest || console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."), await _e2(e, p);
  const E3 = p == null ? void 0 : p.manifest.injections, j3 = E3 ? E3.map((l) => v$(l.tag, l.attributes ?? {})) : [], v3 = ((L4 = e.qwikLoader) == null ? void 0 : L4.include) ?? "auto";
  if ((((P4 = e.qwikLoader) == null ? void 0 : P4.position) ?? "bottom") === "top" && v3 !== "never") {
    const l = J2({ debug: e.debug });
    j3.push(v$("script", { id: "qwikloader", dangerouslySetInnerHTML: l })), j3.push(v$("script", { dangerouslySetInnerHTML: "window.qwikevents.push('click')" }));
  }
  const re3 = S(), F4 = [];
  let T3 = 0, B4 = 0;
  await g$(t, { stream: n, containerTagName: u, containerAttributes: q3, serverData: e.serverData, base: ie4, beforeContent: j3, beforeClose: async (l, f, M3, k2) => {
    var H4, R2, W4, K4, U2;
    T3 = re3();
    const b2 = S();
    c2 = await Bi(l, f, void 0, k2);
    const y = [];
    if (e.prefetchStrategy !== null) {
      const w = je2(c2, e, p);
      if (w.length > 0) {
        const Y4 = ze2(e.prefetchStrategy, w, (H4 = e.serverData) == null ? void 0 : H4.nonce);
        Y4 && y.push(Y4);
      }
    }
    const ae4 = JSON.stringify(c2.state, void 0, void 0);
    y.push(v$("script", { type: "qwik/json", dangerouslySetInnerHTML: Ae2(ae4), nonce: (R2 = e.serverData) == null ? void 0 : R2.nonce })), c2.funcs.length > 0 && y.push(v$("script", { "q:func": "qwik/json", dangerouslySetInnerHTML: Me2(c2.funcs), nonce: (W4 = e.serverData) == null ? void 0 : W4.nonce }));
    const ce3 = !c2 || c2.mode !== "static", Q4 = v3 === "always" || v3 === "auto" && ce3;
    if (Q4) {
      const w = J2({ debug: e.debug });
      y.push(v$("script", { id: "qwikloader", dangerouslySetInnerHTML: w, nonce: (K4 = e.serverData) == null ? void 0 : K4.nonce }));
    }
    const V4 = Array.from(f.$events$, (w) => JSON.stringify(w));
    if (V4.length > 0) {
      const w = (Q4 ? "window.qwikevents" : "(window.qwikevents||=[])") + `.push(${V4.join(", ")})`;
      y.push(v$("script", { dangerouslySetInnerHTML: w, nonce: (U2 = e.serverData) == null ? void 0 : U2.nonce }));
    }
    return Le2(F4, l), B4 = b2(), v$(he, { children: y });
  }, manifestHash: (p == null ? void 0 : p.manifest.manifestHash) || "dev" }), u !== "html" && n.write("<!--/cq-->"), I4();
  const oe4 = c2.resources.some((l) => l._cache !== 1 / 0);
  return { prefetchResources: void 0, snapshotResult: c2, flushes: i, manifest: p == null ? void 0 : p.manifest, size: r, isStatic: !oe4, timing: { render: T3, snapshot: B4, firstFlush: a }, _symbols: F4 };
}
function ne2(t) {
  if (t) {
    if ("mapper" in t)
      return t;
    if (t = ke2(t), t) {
      const e = {};
      return Object.entries(t.mapping).forEach(([n, s]) => {
        e[z(n)] = [n, s];
      }), { mapper: e, manifest: t };
    }
  }
}
var Ae2 = (t) => t.replace(/<(\/?script)/gi, "\\x3C$1");
function Le2(t, e) {
  var n;
  for (const s of e) {
    const r = (n = s.$componentQrl$) == null ? void 0 : n.getSymbol();
    r && !t.includes(r) && t.push(r);
  }
}
var Pe2 = 'document.currentScript.closest("[q\\\\:container]").qFuncs=';
function Me2(t) {
  return Pe2 + `[${t.join(`,
`)}]`;
}
async function Je2(t) {
  const e = G2({ manifest: t }, ne2(t));
  m$(e);
}
var Qe2 = { manifestHash: "bpolot", symbols: { s_02wMImzEAbk: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_useTask", canonicalFilename: "s_02wmimzeabk", hash: "02wMImzEAbk", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_TxCFOy819ag", loc: [26977, 36148] }, s_9bX79PSaULI: { origin: "routes/blog/index.tsx", displayName: "blog_component_useVisibleTask", canonicalFilename: "s_9bx79psauli", hash: "9bX79PSaULI", ctxKind: "function", ctxName: "useVisibleTask$", captures: true, parent: "s_GBQBGBjVVwU", loc: [442, 769] }, s_0vphQYqOdZI: { origin: "components/router-head/router-head.tsx", displayName: "RouterHead_component", canonicalFilename: "s_0vphqyqodzi", hash: "0vphQYqOdZI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [243, 854] }, s_8gdLBszqbaM: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component", canonicalFilename: "s_8gdlbszqbam", hash: "8gdLBszqbaM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [38132, 40792] }, s_Ckljc1FxMOo: { origin: "components/page/overview.tsx", displayName: "overview_component", canonicalFilename: "s_ckljc1fxmoo", hash: "Ckljc1FxMOo", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [292, 1195] }, s_GBQBGBjVVwU: { origin: "routes/blog/index.tsx", displayName: "blog_component", canonicalFilename: "s_gbqbgbjvvwu", hash: "GBQBGBjVVwU", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [327, 1012] }, s_NCzEU0RO00k: { origin: "components/buttons/navButton.tsx", displayName: "navButton_component", canonicalFilename: "s_nczeu0ro00k", hash: "NCzEU0RO00k", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [198, 666] }, s_Nk9PlpjQm9Y: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component", canonicalFilename: "s_nk9plpjqm9y", hash: "Nk9PlpjQm9Y", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [51180, 52717] }, s_PX8yQoK5ags: { origin: "components/columns/sidemenu.tsx", displayName: "sidemenu_component", canonicalFilename: "s_px8yqok5ags", hash: "PX8yQoK5ags", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [187, 518] }, s_Te3w2ykiWWU: { origin: "icons/blog.tsx", displayName: "blog_component", canonicalFilename: "s_te3w2ykiwwu", hash: "Te3w2ykiWWU", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [75, 653] }, s_TxCFOy819ag: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component", canonicalFilename: "s_txcfoy819ag", hash: "TxCFOy819ag", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [23707, 36435] }, s_VKFlAWJuVm8: { origin: "routes/layout.tsx", displayName: "layout_component", canonicalFilename: "s_vkflawjuvm8", hash: "VKFlAWJuVm8", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [680, 1188] }, s_WmYC5H00wtI: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityMockProvider_component", canonicalFilename: "s_wmyc5h00wti", hash: "WmYC5H00wtI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [36719, 38013] }, s_abp1tubNbSA: { origin: "icons/home.tsx", displayName: "home_component", canonicalFilename: "s_abp1tubnbsa", hash: "abp1tubNbSA", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [75, 605] }, s_ati7nisKH2g: { origin: "routes/[...home]/layout.tsx", displayName: "layout_component", canonicalFilename: "s_ati7niskh2g", hash: "ati7nisKH2g", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [589, 617] }, s_e0ssiDXoeAM: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "RouterOutlet_component", canonicalFilename: "s_e0ssidxoeam", hash: "e0ssiDXoeAM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [7817, 8531] }, s_rkuYV2qXCqk: { origin: "icons/website.tsx", displayName: "website_component", canonicalFilename: "s_rkuyv2qxcqk", hash: "rkuYV2qXCqk", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [75, 846] }, s_tntnak2DhJ8: { origin: "root.tsx", displayName: "root_component", canonicalFilename: "s_tntnak2dhj8", hash: "tntnak2DhJ8", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [268, 793] }, s_uJ8rhQ0Ae0E: { origin: "routes/[...home]/index!.tsx", displayName: "index__component", canonicalFilename: "s_uj8rhq0ae0e", hash: "uJ8rhQ0Ae0E", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [174, 283] }, s_wCieFdpQfC4: { origin: "routes/blog/[id]/index.tsx", displayName: "_id__component", canonicalFilename: "s_wciefdpqfc4", hash: "wCieFdpQfC4", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [189, 441] }, s_RPDJAz33WLA: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_useStyles", canonicalFilename: "s_rpdjaz33wla", hash: "RPDJAz33WLA", ctxKind: "function", ctxName: "useStyles$", captures: false, parent: "s_TxCFOy819ag", loc: [23762, 23796] }, s_A5bZC7WO00A: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "routeActionQrl_action_submit", canonicalFilename: "s_a5bzc7wo00a", hash: "A5bZC7WO00A", ctxKind: "function", ctxName: "submit", captures: true, parent: null, loc: [41838, 43472] }, s_DyVc0YBIqQU: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "spa_init", canonicalFilename: "s_dyvc0ybiqqu", hash: "DyVc0YBIqQU", ctxKind: "function", ctxName: "spaInit", captures: false, parent: null, loc: [1355, 6830] }, s_wOIPfiQ04l4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "serverQrl_stuff", canonicalFilename: "s_woipfiq04l4", hash: "wOIPfiQ04l4", ctxKind: "function", ctxName: "stuff", captures: true, parent: null, loc: [46780, 48976] }, s_BUbtvTyvVRE: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityMockProvider_component_goto", canonicalFilename: "s_bubtvtyvvre", hash: "BUbtvTyvVRE", ctxKind: "function", ctxName: "goto", captures: false, parent: "s_WmYC5H00wtI", loc: [37134, 37212] }, s_Osdg8FnYTw4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component_handlePrefetch", canonicalFilename: "s_osdg8fnytw4", hash: "Osdg8FnYTw4", ctxKind: "function", ctxName: "handlePrefetch", captures: false, parent: "s_8gdLBszqbaM", loc: [38832, 39163] }, s_fX0bDjeJa0E: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_goto", canonicalFilename: "s_fx0bdjeja0e", hash: "fX0bDjeJa0E", ctxKind: "function", ctxName: "goto", captures: true, parent: "s_TxCFOy819ag", loc: [25046, 26365] }, s_kxX7fiVjwOg: { origin: "components/page/overview.tsx", displayName: "overview_component_div_onClick", canonicalFilename: "s_kxx7fivjwog", hash: "kxX7fiVjwOg", ctxKind: "eventHandler", ctxName: "onClick$", captures: true, parent: "s_Ckljc1FxMOo", loc: [967, 997] }, s_lNnfZJK390A: { origin: "components/buttons/navButton.tsx", displayName: "navButton_component_div_onClick", canonicalFilename: "s_lnnfzjk390a", hash: "lNnfZJK390A", ctxKind: "eventHandler", ctxName: "onClick$", captures: true, parent: "s_NCzEU0RO00k", loc: [530, 622] }, s_p9MSze0ojs4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component_form_onSubmit", canonicalFilename: "s_p9msze0ojs4", hash: "p9MSze0ojs4", ctxKind: "function", ctxName: "_jsxS", captures: true, parent: "s_Nk9PlpjQm9Y", loc: [51668, 52365] }, s_pIf0khHUxfY: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component_handleClick", canonicalFilename: "s_pif0khhuxfy", hash: "pIf0khHUxfY", ctxKind: "function", ctxName: "handleClick", captures: true, parent: "s_8gdLBszqbaM", loc: [39590, 40110] } }, mapping: { s_02wMImzEAbk: "q-BVMVSM49.js", s_9bX79PSaULI: "q-DM8PdXtv.js", s_0vphQYqOdZI: "q-0xEZB-in.js", s_8gdLBszqbaM: "q-OmV9EgfB.js", s_Ckljc1FxMOo: "q-BHUSe0ZH.js", s_GBQBGBjVVwU: "q-DM8PdXtv.js", s_NCzEU0RO00k: "q-bo_Pfw6y.js", s_Nk9PlpjQm9Y: "q-CdJnSv6_.js", s_PX8yQoK5ags: "q-DXyZTEeM.js", s_Te3w2ykiWWU: "q-DM8PdXtv.js", s_TxCFOy819ag: "q-BVMVSM49.js", s_VKFlAWJuVm8: "q-D9hJzw74.js", s_WmYC5H00wtI: "q-DIbG6mjV.js", s_abp1tubNbSA: "q-DH7jv7ey.js", s_ati7nisKH2g: "q-D9hJzw74.js", s_e0ssiDXoeAM: "q-BuWL9JSi.js", s_rkuYV2qXCqk: "q-BO9amz__.js", s_tntnak2DhJ8: "q-DBdcHGx_.js", s_uJ8rhQ0Ae0E: "q-B4F6opA9.js", s_wCieFdpQfC4: "q-dVQCYFVc.js", s_RPDJAz33WLA: "q-BVMVSM49.js", s_A5bZC7WO00A: "q-Szi5y3oT.js", s_DyVc0YBIqQU: "q-D3WBTSLL.js", s_wOIPfiQ04l4: "q-Bl_WNqiJ.js", s_BUbtvTyvVRE: "q-DIbG6mjV.js", s_Osdg8FnYTw4: "q-OmV9EgfB.js", s_fX0bDjeJa0E: "q-BVMVSM49.js", s_kxX7fiVjwOg: "q-BHUSe0ZH.js", s_lNnfZJK390A: "q-bo_Pfw6y.js", s_p9MSze0ojs4: "q-CdJnSv6_.js", s_pIf0khHUxfY: "q-OmV9EgfB.js" }, bundles: { "q-0xEZB-in.js": { size: 717, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], origins: ["src/entry_RouterHead.js", "src/s_0vphqyqodzi.js"], symbols: ["s_0vphQYqOdZI"] }, "q-B4F6opA9.js": { size: 208, imports: ["q-BKrlWzc8.js", "q-DicO215r.js"], origins: ["src/entry_index_.js", "src/s_uj8rhq0ae0e.js"], symbols: ["s_uJ8rhQ0Ae0E"] }, "q-BAYCHZyC.js": { size: 240, imports: ["q-DicO215r.js"], dynamicImports: ["q-dVQCYFVc.js"], origins: ["src/routes/blog/[id]/index.tsx"] }, "q-Be2jxJzO.js": { size: 279, imports: ["q-DicO215r.js"], dynamicImports: ["q-B4F6opA9.js"], origins: ["src/routes/[...home]/index!.tsx"] }, "q-BHUSe0ZH.js": { size: 995, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], origins: ["src/entry_overview.js", "src/s_ckljc1fxmoo.js", "src/s_kxx7fivjwog.js"], symbols: ["s_Ckljc1FxMOo", "s_kxX7fiVjwOg"] }, "q-BKrlWzc8.js": { size: 332, origins: ["src/styleY.tsx"] }, "q-Bl_WNqiJ.js": { size: 895, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], origins: ["src/entry_serverQrl.js", "src/s_woipfiq04l4.js"], symbols: ["s_wOIPfiQ04l4"] }, "q-BO9amz__.js": { size: 781, imports: ["q-DicO215r.js"], origins: ["src/entry_website.js", "src/s_rkuyv2qxcqk.js"], symbols: ["s_rkuYV2qXCqk"] }, "q-bo_Pfw6y.js": { size: 593, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], origins: ["src/entry_navButton.js", "src/s_lnnfzjk390a.js", "src/s_nczeu0ro00k.js"], symbols: ["s_lNnfZJK390A", "s_NCzEU0RO00k"] }, "q-Bq36Wx9q.js": { size: 2539, origins: ["node_modules/@builder.io/qwik-city/service-worker.mjs", "src/routes/service-worker.ts"] }, "q-BRjbW9a2.js": { size: 142, imports: ["q-DicO215r.js"], dynamicImports: ["q-DBdcHGx_.js"], origins: ["src/global.css", "src/root.tsx"] }, "q-BuWL9JSi.js": { size: 457, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], origins: ["src/entry_RouterOutlet.js", "src/s_e0ssidxoeam.js"], symbols: ["s_e0ssiDXoeAM"] }, "q-BVMVSM49.js": { size: 5716, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], dynamicImports: ["q-BAYCHZyC.js", "q-Be2jxJzO.js", "q-C7wIlXB_.js", "q-C8U2fkLG.js", "q-D-hzz8cH.js", "q-DD1l-L2D.js"], origins: ["@qwik-city-plan", "src/entry_QwikCityProvider.js", "src/s_02wmimzeabk.js", "src/s_fx0bdjeja0e.js", "src/s_rpdjaz33wla.js", "src/s_txcfoy819ag.js"], symbols: ["s_02wMImzEAbk", "s_fX0bDjeJa0E", "s_RPDJAz33WLA", "s_TxCFOy819ag"] }, "q-C7wIlXB_.js": { size: 245, imports: ["q-DicO215r.js"], dynamicImports: ["q-D9hJzw74.js"], origins: ["src/routes/[...home]/layout.tsx"] }, "q-C8U2fkLG.js": { size: 125, imports: ["q-DicO215r.js"], dynamicImports: ["q-Bq36Wx9q.js"], origins: ["@qwik-city-entries"] }, "q-CdJnSv6_.js": { size: 1162, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], origins: ["src/entry_GetForm.js", "src/s_nk9plpjqm9y.js", "src/s_p9msze0ojs4.js"], symbols: ["s_Nk9PlpjQm9Y", "s_p9MSze0ojs4"] }, "q-D-hzz8cH.js": { size: 245, imports: ["q-DicO215r.js"], dynamicImports: ["q-D9hJzw74.js"], origins: ["src/routes/layout.tsx"] }, "q-D3WBTSLL.js": { size: 2280, origins: ["src/entry_spaInit.js", "src/s_dyvc0ybiqqu.js"], symbols: ["s_DyVc0YBIqQU"] }, "q-D9hJzw74.js": { size: 549, imports: ["q-BKrlWzc8.js", "q-DicO215r.js"], dynamicImports: ["q-DXyZTEeM.js"], origins: ["src/components/columns/sidemenu.tsx", "src/entry_layout.js", "src/s_ati7niskh2g.js", "src/s_vkflawjuvm8.js"], symbols: ["s_ati7nisKH2g", "s_VKFlAWJuVm8"] }, "q-D9qc4NrY.js": { size: 7713, imports: ["q-DicO215r.js"], dynamicImports: ["q-BuWL9JSi.js", "q-BVMVSM49.js", "q-D3WBTSLL.js"], origins: ["@qwik-city-sw-register", "node_modules/@builder.io/qwik-city/index.qwik.mjs"] }, "q-DBdcHGx_.js": { size: 478, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], dynamicImports: ["q-0xEZB-in.js"], origins: ["src/components/router-head/router-head.tsx", "src/entry_root.js", "src/s_tntnak2dhj8.js"], symbols: ["s_tntnak2DhJ8"] }, "q-DD1l-L2D.js": { size: 228, imports: ["q-DicO215r.js"], dynamicImports: ["q-DM8PdXtv.js"], origins: ["src/routes/blog/index.tsx"] }, "q-DH7jv7ey.js": { size: 540, imports: ["q-DicO215r.js"], origins: ["src/entry_home.js", "src/s_abp1tubnbsa.js"], symbols: ["s_abp1tubNbSA"] }, "q-DIbG6mjV.js": { size: 816, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], origins: ["src/entry_QwikCityMockProvider.js", "src/s_bubtvtyvvre.js", "src/s_wmyc5h00wti.js"], symbols: ["s_BUbtvTyvVRE", "s_WmYC5H00wtI"] }, "q-DicO215r.js": { size: 50627, origins: ["node_modules/@builder.io/qwik/core.min.mjs"] }, "q-DM8PdXtv.js": { size: 1454, imports: ["q-DicO215r.js", "q-MH5OHxxe.js"], dynamicImports: ["q-BHUSe0ZH.js"], origins: ["src/components/page/overview.tsx", "src/entry_blog.js", "src/s_9bx79psauli.js", "src/s_gbqbgbjvvwu.js", "src/s_te3w2ykiwwu.js"], symbols: ["s_9bX79PSaULI", "s_GBQBGBjVVwU", "s_Te3w2ykiWWU"] }, "q-dVQCYFVc.js": { size: 372, imports: ["q-D9qc4NrY.js", "q-DicO215r.js", "q-MH5OHxxe.js"], origins: ["src/entry__id_.js", "src/s_wciefdpqfc4.js"], symbols: ["s_wCieFdpQfC4"] }, "q-DXyZTEeM.js": { size: 534, imports: ["q-DicO215r.js"], dynamicImports: ["q-bo_Pfw6y.js", "q-DH7jv7ey.js", "q-DM8PdXtv.js"], origins: ["src/components/buttons/navButton.tsx", "src/entry_sidemenu.js", "src/icons/blog.tsx", "src/icons/home.tsx", "src/s_px8yqok5ags.js"], symbols: ["s_PX8yQoK5ags"] }, "q-MH5OHxxe.js": { size: 23236, origins: ["node_modules/appwrite/dist/esm/sdk.js", "node_modules/cross-fetch/dist/browser-ponyfill.js", "src/config.tsx"] }, "q-OmV9EgfB.js": { size: 1601, imports: ["q-D9qc4NrY.js", "q-DicO215r.js"], origins: ["src/entry_Link.js", "src/s_8gdlbszqbam.js", "src/s_osdg8fnytw4.js", "src/s_pif0khhuxfy.js"], symbols: ["s_8gdLBszqbaM", "s_Osdg8FnYTw4", "s_pIf0khHUxfY"] }, "q-Szi5y3oT.js": { size: 751, imports: ["q-DicO215r.js"], origins: ["src/entry_routeActionQrl.js", "src/s_a5bzc7wo00a.js"], symbols: ["s_A5bZC7WO00A"] } }, injections: [{ tag: "style", location: "head", attributes: { "data-src": "/build/q-3JzfhcPX.css", dangerouslySetInnerHTML: `/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com
 */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.m-1{margin:.25rem}.m-3{margin:.75rem}.m-4{margin:1rem}.m-8{margin:2rem}.mx-12{margin-left:3rem;margin-right:3rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.box-border{box-sizing:border-box}.flex{display:flex}.h-1{height:.25rem}.h-9{height:2.25rem}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[100vh\\]{max-height:100vh}.w-1\\/5{width:20%}.w-4\\/5{width:80%}.w-9{width:2.25rem}.w-full{width:100%}.w-screen{width:100vw}.max-w-2xl{max-width:42rem}.max-w-\\[70px\\]{max-width:70px}.max-w-sm{max-width:24rem}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-x-hidden{overflow-x:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-md{border-radius:.375rem}.border-4{border-width:4px}.border-txtPrimary{border-color:var(--primary)}.bg-transparent{background-color:transparent}.bg-txtSecondary{background-color:var(--txt-secondary)}.stroke-txtPrimary{stroke:var(--primary)}.p-2{padding:.5rem}.p-4{padding:1rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-6xl{font-size:3.75rem;line-height:1}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-semibold{font-weight:600}.italic{font-style:italic}.shadow-border{--tw-shadow: 4px 4px var(--primary), -4px -4px var(--primary);--tw-shadow-colored: 4px 4px var(--tw-shadow-color), -4px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:root{--background: #dcdcdc;--bg-secondary: #adacac;--primary: #00000a;--txt-secondary: #000025;--warning: "bg-red-600";background-color:var(--background);color:var(--primary)}.hover\\:bg-bgSecondary:hover{background-color:var(--bg-secondary)}@media (min-width: 640px){.sm\\:hidden{display:none}.sm\\:max-w-\\[70px\\]{max-width:70px}}@media (min-width: 768px){.md\\:flex{display:flex}}
` } }], version: "1", options: { target: "client", buildMode: "production", entryStrategy: { type: "smart" } }, platform: { qwik: "1.5.2", vite: "", rollup: "4.16.4", env: "node", os: "darwin", node: "20.11.1" } };
var Ve2 = () => {
  const t = q$(), e = I$();
  return ft(he, { children: [xt("title", null, null, t.title, 1, null), xt("link", null, { rel: "canonical", href: y$((n) => n.url.href, [e], "p0.url.href") }, null, 3, null), xt("meta", null, { name: "viewport", content: "width=device-width, initial-scale=1.0" }, null, 3, null), xt("link", null, { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }, null, 3, null), t.meta.map((n) => S$("meta", { ...n }, null, 0, n.key)), t.links.map((n) => S$("link", { ...n }, null, 0, n.key)), t.styles.map((n) => S$("style", { ...n.props, get dangerouslySetInnerHTML() {
    return n.style;
  }, dangerouslySetInnerHTML: ci(n, "style") }, null, 0, n.key))] }, 1, "0D_0");
};
var He2 = Un(Lt(Ve2, "s_0vphQYqOdZI"));
var Re2 = () => ft(R$, { children: [xt("head", null, null, [xt("meta", null, { charSet: "utf-8" }, null, 3, null), xt("link", null, { rel: "manifest", href: "/manifest.json" }, null, 3, null), ft(He2, null, 3, "vp_0")], 1, null), xt("body", null, { lang: "en" }, [ft(T$, null, 3, "vp_1"), ft(A$, null, 3, "vp_2")], 1, null)] }, 1, "vp_3");
var We2 = Un(Lt(Re2, "s_tntnak2DhJ8"));
function $e2(t) {
  return Be2(ft(We2, null, 3, "Qb_0"), { manifest: Qe2, ...t, containerAttributes: { lang: "en-us", ...t.containerAttributes } });
}
init_checked_fetch();
init_modules_watch_stub();
init_checked_fetch();
init_modules_watch_stub();
var import_isomorphic_form_data = __toESM(require_browser(), 1);
var import_cross_fetch = __toESM(require_browser_ponyfill(), 1);
function __awaiter(thisArg, _arguments, P4, generator) {
  function adopt(value) {
    return value instanceof P4 ? value : new P4(function(resolve) {
      resolve(value);
    });
  }
  return new (P4 || (P4 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var Service = class {
  constructor(client) {
    this.client = client;
  }
  static flatten(data, prefix = "") {
    let output = {};
    for (const [key, value] of Object.entries(data)) {
      let finalKey = prefix ? prefix + "[" + key + "]" : key;
      if (Array.isArray(value)) {
        output = Object.assign(Object.assign({}, output), Service.flatten(value, finalKey));
      } else {
        output[finalKey] = value;
      }
    }
    return output;
  }
};
Service.CHUNK_SIZE = 5 * 1024 * 1024;
var Query = class {
  constructor(method, attribute, values) {
    this.method = method;
    this.attribute = attribute;
    if (values !== void 0) {
      if (Array.isArray(values)) {
        this.values = values;
      } else {
        this.values = [values];
      }
    }
  }
  toString() {
    return JSON.stringify({
      method: this.method,
      attribute: this.attribute,
      values: this.values
    });
  }
};
Query.equal = (attribute, value) => new Query("equal", attribute, value).toString();
Query.notEqual = (attribute, value) => new Query("notEqual", attribute, value).toString();
Query.lessThan = (attribute, value) => new Query("lessThan", attribute, value).toString();
Query.lessThanEqual = (attribute, value) => new Query("lessThanEqual", attribute, value).toString();
Query.greaterThan = (attribute, value) => new Query("greaterThan", attribute, value).toString();
Query.greaterThanEqual = (attribute, value) => new Query("greaterThanEqual", attribute, value).toString();
Query.isNull = (attribute) => new Query("isNull", attribute).toString();
Query.isNotNull = (attribute) => new Query("isNotNull", attribute).toString();
Query.between = (attribute, start, end) => new Query("between", attribute, [start, end]).toString();
Query.startsWith = (attribute, value) => new Query("startsWith", attribute, value).toString();
Query.endsWith = (attribute, value) => new Query("endsWith", attribute, value).toString();
Query.select = (attributes) => new Query("select", void 0, attributes).toString();
Query.search = (attribute, value) => new Query("search", attribute, value).toString();
Query.orderDesc = (attribute) => new Query("orderDesc", attribute).toString();
Query.orderAsc = (attribute) => new Query("orderAsc", attribute).toString();
Query.cursorAfter = (documentId) => new Query("cursorAfter", void 0, documentId).toString();
Query.cursorBefore = (documentId) => new Query("cursorBefore", void 0, documentId).toString();
Query.limit = (limit) => new Query("limit", void 0, limit).toString();
Query.offset = (offset) => new Query("offset", void 0, offset).toString();
Query.contains = (attribute, value) => new Query("contains", attribute, value).toString();
Query.or = (queries) => new Query("or", void 0, queries.map((query) => JSON.parse(query))).toString();
Query.and = (queries) => new Query("and", void 0, queries.map((query) => JSON.parse(query))).toString();
var AppwriteException = class extends Error {
  constructor(message, code = 0, type = "", response = "") {
    super(message);
    this.name = "AppwriteException";
    this.message = message;
    this.code = code;
    this.type = type;
    this.response = response;
  }
};
var Client = class {
  constructor() {
    this.config = {
      endpoint: "https://cloud.appwrite.io/v1",
      endpointRealtime: "",
      project: "",
      jwt: "",
      locale: "",
      session: ""
    };
    this.headers = {
      "x-sdk-name": "Web",
      "x-sdk-platform": "client",
      "x-sdk-language": "web",
      "x-sdk-version": "14.0.1",
      "X-Appwrite-Response-Format": "1.5.0"
    };
    this.realtime = {
      socket: void 0,
      timeout: void 0,
      url: "",
      channels: /* @__PURE__ */ new Set(),
      subscriptions: /* @__PURE__ */ new Map(),
      subscriptionsCounter: 0,
      reconnect: true,
      reconnectAttempts: 0,
      lastMessage: void 0,
      connect: () => {
        clearTimeout(this.realtime.timeout);
        this.realtime.timeout = window === null || window === void 0 ? void 0 : window.setTimeout(() => {
          this.realtime.createSocket();
        }, 50);
      },
      getTimeout: () => {
        switch (true) {
          case this.realtime.reconnectAttempts < 5:
            return 1e3;
          case this.realtime.reconnectAttempts < 15:
            return 5e3;
          case this.realtime.reconnectAttempts < 100:
            return 1e4;
          default:
            return 6e4;
        }
      },
      createSocket: () => {
        var _a2, _b, _c2;
        if (this.realtime.channels.size < 1) {
          this.realtime.reconnect = false;
          (_a2 = this.realtime.socket) === null || _a2 === void 0 ? void 0 : _a2.close();
          return;
        }
        const channels = new URLSearchParams();
        channels.set("project", this.config.project);
        this.realtime.channels.forEach((channel) => {
          channels.append("channels[]", channel);
        });
        const url = this.config.endpointRealtime + "/realtime?" + channels.toString();
        if (url !== this.realtime.url || // Check if URL is present
        !this.realtime.socket || // Check if WebSocket has not been created
        ((_b = this.realtime.socket) === null || _b === void 0 ? void 0 : _b.readyState) > WebSocket.OPEN) {
          if (this.realtime.socket && ((_c2 = this.realtime.socket) === null || _c2 === void 0 ? void 0 : _c2.readyState) < WebSocket.CLOSING) {
            this.realtime.reconnect = false;
            this.realtime.socket.close();
          }
          this.realtime.url = url;
          this.realtime.socket = new WebSocket(url);
          this.realtime.socket.addEventListener("message", this.realtime.onMessage);
          this.realtime.socket.addEventListener("open", (_event) => {
            this.realtime.reconnectAttempts = 0;
          });
          this.realtime.socket.addEventListener("close", (event) => {
            var _a3, _b2, _c3;
            if (!this.realtime.reconnect || ((_b2 = (_a3 = this.realtime) === null || _a3 === void 0 ? void 0 : _a3.lastMessage) === null || _b2 === void 0 ? void 0 : _b2.type) === "error" && // Check if last message was of type error
            ((_c3 = this.realtime) === null || _c3 === void 0 ? void 0 : _c3.lastMessage.data).code === 1008) {
              this.realtime.reconnect = true;
              return;
            }
            const timeout = this.realtime.getTimeout();
            console.error(`Realtime got disconnected. Reconnect will be attempted in ${timeout / 1e3} seconds.`, event.reason);
            setTimeout(() => {
              this.realtime.reconnectAttempts++;
              this.realtime.createSocket();
            }, timeout);
          });
        }
      },
      onMessage: (event) => {
        var _a2, _b;
        try {
          const message = JSON.parse(event.data);
          this.realtime.lastMessage = message;
          switch (message.type) {
            case "connected":
              const cookie = JSON.parse((_a2 = window.localStorage.getItem("cookieFallback")) !== null && _a2 !== void 0 ? _a2 : "{}");
              const session = cookie === null || cookie === void 0 ? void 0 : cookie[`a_session_${this.config.project}`];
              const messageData = message.data;
              if (session && !messageData.user) {
                (_b = this.realtime.socket) === null || _b === void 0 ? void 0 : _b.send(JSON.stringify({
                  type: "authentication",
                  data: {
                    session
                  }
                }));
              }
              break;
            case "event":
              let data = message.data;
              if (data === null || data === void 0 ? void 0 : data.channels) {
                const isSubscribed = data.channels.some((channel) => this.realtime.channels.has(channel));
                if (!isSubscribed)
                  return;
                this.realtime.subscriptions.forEach((subscription) => {
                  if (data.channels.some((channel) => subscription.channels.includes(channel))) {
                    setTimeout(() => subscription.callback(data));
                  }
                });
              }
              break;
            case "error":
              throw message.data;
            default:
              break;
          }
        } catch (e) {
          console.error(e);
        }
      },
      cleanUp: (channels) => {
        this.realtime.channels.forEach((channel) => {
          if (channels.includes(channel)) {
            let found = Array.from(this.realtime.subscriptions).some(([_key, subscription]) => {
              return subscription.channels.includes(channel);
            });
            if (!found) {
              this.realtime.channels.delete(channel);
            }
          }
        });
      }
    };
  }
  /**
   * Set Endpoint
   *
   * Your project endpoint
   *
   * @param {string} endpoint
   *
   * @returns {this}
   */
  setEndpoint(endpoint) {
    this.config.endpoint = endpoint;
    this.config.endpointRealtime = this.config.endpointRealtime || this.config.endpoint.replace("https://", "wss://").replace("http://", "ws://");
    return this;
  }
  /**
   * Set Realtime Endpoint
   *
   * @param {string} endpointRealtime
   *
   * @returns {this}
   */
  setEndpointRealtime(endpointRealtime) {
    this.config.endpointRealtime = endpointRealtime;
    return this;
  }
  /**
   * Set Project
   *
   * Your project ID
   *
   * @param value string
   *
   * @return {this}
   */
  setProject(value) {
    this.headers["X-Appwrite-Project"] = value;
    this.config.project = value;
    return this;
  }
  /**
   * Set JWT
   *
   * Your secret JSON Web Token
   *
   * @param value string
   *
   * @return {this}
   */
  setJWT(value) {
    this.headers["X-Appwrite-JWT"] = value;
    this.config.jwt = value;
    return this;
  }
  /**
   * Set Locale
   *
   * @param value string
   *
   * @return {this}
   */
  setLocale(value) {
    this.headers["X-Appwrite-Locale"] = value;
    this.config.locale = value;
    return this;
  }
  /**
   * Set Session
   *
   * The user session to authenticate with
   *
   * @param value string
   *
   * @return {this}
   */
  setSession(value) {
    this.headers["X-Appwrite-Session"] = value;
    this.config.session = value;
    return this;
  }
  /**
   * Subscribes to Appwrite events and passes you the payload in realtime.
   *
   * @param {string|string[]} channels
   * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
   *
   * Possible channels are:
   * - account
   * - collections
   * - collections.[ID]
   * - collections.[ID].documents
   * - documents
   * - documents.[ID]
   * - files
   * - files.[ID]
   * - executions
   * - executions.[ID]
   * - functions.[ID]
   * - teams
   * - teams.[ID]
   * - memberships
   * - memberships.[ID]
   * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
   * @returns {() => void} Unsubscribes from events.
   */
  subscribe(channels, callback) {
    let channelArray = typeof channels === "string" ? [channels] : channels;
    channelArray.forEach((channel) => this.realtime.channels.add(channel));
    const counter = this.realtime.subscriptionsCounter++;
    this.realtime.subscriptions.set(counter, {
      channels: channelArray,
      callback
    });
    this.realtime.connect();
    return () => {
      this.realtime.subscriptions.delete(counter);
      this.realtime.cleanUp(channelArray);
      this.realtime.connect();
    };
  }
  call(method, url, headers = {}, params = {}) {
    var _a2, _b;
    return __awaiter(this, void 0, void 0, function* () {
      method = method.toUpperCase();
      headers = Object.assign({}, this.headers, headers);
      let options = {
        method,
        headers,
        credentials: "include"
      };
      if (typeof window !== "undefined" && window.localStorage) {
        headers["X-Fallback-Cookies"] = (_a2 = window.localStorage.getItem("cookieFallback")) !== null && _a2 !== void 0 ? _a2 : "";
      }
      if (method === "GET") {
        for (const [key, value] of Object.entries(Service.flatten(params))) {
          url.searchParams.append(key, value);
        }
      } else {
        switch (headers["content-type"]) {
          case "application/json":
            options.body = JSON.stringify(params);
            break;
          case "multipart/form-data":
            let formData = new FormData();
            for (const key in params) {
              if (Array.isArray(params[key])) {
                params[key].forEach((value) => {
                  formData.append(key + "[]", value);
                });
              } else {
                formData.append(key, params[key]);
              }
            }
            options.body = formData;
            delete headers["content-type"];
            break;
        }
      }
      try {
        let data = null;
        const response = yield (0, import_cross_fetch.fetch)(url.toString(), options);
        if ((_b = response.headers.get("content-type")) === null || _b === void 0 ? void 0 : _b.includes("application/json")) {
          data = yield response.json();
        } else {
          data = {
            message: yield response.text()
          };
        }
        if (400 <= response.status) {
          throw new AppwriteException(data === null || data === void 0 ? void 0 : data.message, response.status, data === null || data === void 0 ? void 0 : data.type, data);
        }
        const cookieFallback = response.headers.get("X-Fallback-Cookies");
        if (typeof window !== "undefined" && window.localStorage && cookieFallback) {
          window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.");
          window.localStorage.setItem("cookieFallback", cookieFallback);
        }
        return data;
      } catch (e) {
        if (e instanceof AppwriteException) {
          throw e;
        }
        throw new AppwriteException(e.message);
      }
    });
  }
};
var Databases = class extends Service {
  constructor(client) {
    super(client);
  }
  /**
   * List documents
   *
   * Get a list of all the user's documents in a given collection. You can use
   * the query params to filter your results.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string[]} queries
   * @throws {AppwriteException}
   * @returns {Promise}
  */
  listDocuments(databaseId, collectionId, queries) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof databaseId === "undefined") {
        throw new AppwriteException('Missing required parameter: "databaseId"');
      }
      if (typeof collectionId === "undefined") {
        throw new AppwriteException('Missing required parameter: "collectionId"');
      }
      const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId);
      const payload = {};
      if (typeof queries !== "undefined") {
        payload["queries"] = queries;
      }
      const uri = new URL(this.client.config.endpoint + apiPath);
      return yield this.client.call("get", uri, {
        "content-type": "application/json"
      }, payload);
    });
  }
  /**
   * Create document
   *
   * Create a new Document. Before using this route, you should create a new
   * collection resource using either a [server
   * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
   * API or directly from your database console.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {Omit<Document, keyof Models.Document>} data
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns {Promise}
  */
  createDocument(databaseId, collectionId, documentId, data, permissions) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof databaseId === "undefined") {
        throw new AppwriteException('Missing required parameter: "databaseId"');
      }
      if (typeof collectionId === "undefined") {
        throw new AppwriteException('Missing required parameter: "collectionId"');
      }
      if (typeof documentId === "undefined") {
        throw new AppwriteException('Missing required parameter: "documentId"');
      }
      if (typeof data === "undefined") {
        throw new AppwriteException('Missing required parameter: "data"');
      }
      const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId);
      const payload = {};
      if (typeof documentId !== "undefined") {
        payload["documentId"] = documentId;
      }
      if (typeof data !== "undefined") {
        payload["data"] = data;
      }
      if (typeof permissions !== "undefined") {
        payload["permissions"] = permissions;
      }
      const uri = new URL(this.client.config.endpoint + apiPath);
      return yield this.client.call("post", uri, {
        "content-type": "application/json"
      }, payload);
    });
  }
  /**
   * Get document
   *
   * Get a document by its unique ID. This endpoint response returns a JSON
   * object with the document data.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {string[]} queries
   * @throws {AppwriteException}
   * @returns {Promise}
  */
  getDocument(databaseId, collectionId, documentId, queries) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof databaseId === "undefined") {
        throw new AppwriteException('Missing required parameter: "databaseId"');
      }
      if (typeof collectionId === "undefined") {
        throw new AppwriteException('Missing required parameter: "collectionId"');
      }
      if (typeof documentId === "undefined") {
        throw new AppwriteException('Missing required parameter: "documentId"');
      }
      const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
      const payload = {};
      if (typeof queries !== "undefined") {
        payload["queries"] = queries;
      }
      const uri = new URL(this.client.config.endpoint + apiPath);
      return yield this.client.call("get", uri, {
        "content-type": "application/json"
      }, payload);
    });
  }
  /**
   * Update document
   *
   * Update a document by its unique ID. Using the patch method you can pass
   * only specific fields that will get updated.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {Partial<Omit<Document, keyof Models.Document>>} data
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns {Promise}
  */
  updateDocument(databaseId, collectionId, documentId, data, permissions) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof databaseId === "undefined") {
        throw new AppwriteException('Missing required parameter: "databaseId"');
      }
      if (typeof collectionId === "undefined") {
        throw new AppwriteException('Missing required parameter: "collectionId"');
      }
      if (typeof documentId === "undefined") {
        throw new AppwriteException('Missing required parameter: "documentId"');
      }
      const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
      const payload = {};
      if (typeof data !== "undefined") {
        payload["data"] = data;
      }
      if (typeof permissions !== "undefined") {
        payload["permissions"] = permissions;
      }
      const uri = new URL(this.client.config.endpoint + apiPath);
      return yield this.client.call("patch", uri, {
        "content-type": "application/json"
      }, payload);
    });
  }
  /**
   * Delete document
   *
   * Delete a document by its unique ID.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @throws {AppwriteException}
   * @returns {Promise}
  */
  deleteDocument(databaseId, collectionId, documentId) {
    return __awaiter(this, void 0, void 0, function* () {
      if (typeof databaseId === "undefined") {
        throw new AppwriteException('Missing required parameter: "databaseId"');
      }
      if (typeof collectionId === "undefined") {
        throw new AppwriteException('Missing required parameter: "collectionId"');
      }
      if (typeof documentId === "undefined") {
        throw new AppwriteException('Missing required parameter: "documentId"');
      }
      const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
      const payload = {};
      const uri = new URL(this.client.config.endpoint + apiPath);
      return yield this.client.call("delete", uri, {
        "content-type": "application/json"
      }, payload);
    });
  }
};
var Permission = class {
};
Permission.read = (role) => {
  return `read("${role}")`;
};
Permission.write = (role) => {
  return `write("${role}")`;
};
Permission.create = (role) => {
  return `create("${role}")`;
};
Permission.update = (role) => {
  return `update("${role}")`;
};
Permission.delete = (role) => {
  return `delete("${role}")`;
};
var _a;
var _ID_hexTimestamp;
var ID = class {
  static custom(id) {
    return id;
  }
  static unique(padding = 7) {
    const baseId = __classPrivateFieldGet(ID, _a, "m", _ID_hexTimestamp).call(ID);
    let randomPadding = "";
    for (let i = 0; i < padding; i++) {
      const randomHexDigit = Math.floor(Math.random() * 16).toString(16);
      randomPadding += randomHexDigit;
    }
    return baseId + randomPadding;
  }
};
_a = ID, _ID_hexTimestamp = function _ID_hexTimestamp2() {
  const now = /* @__PURE__ */ new Date();
  const sec = Math.floor(now.getTime() / 1e3);
  const msec = now.getMilliseconds();
  const hexTimestamp = sec.toString(16) + msec.toString(16).padStart(5, "0");
  return hexTimestamp;
};
var AuthenticatorType;
(function(AuthenticatorType2) {
  AuthenticatorType2["Totp"] = "totp";
})(AuthenticatorType || (AuthenticatorType = {}));
var AuthenticationFactor;
(function(AuthenticationFactor2) {
  AuthenticationFactor2["Email"] = "email";
  AuthenticationFactor2["Phone"] = "phone";
  AuthenticationFactor2["Totp"] = "totp";
  AuthenticationFactor2["Recoverycode"] = "recoverycode";
})(AuthenticationFactor || (AuthenticationFactor = {}));
var OAuthProvider;
(function(OAuthProvider2) {
  OAuthProvider2["Amazon"] = "amazon";
  OAuthProvider2["Apple"] = "apple";
  OAuthProvider2["Auth0"] = "auth0";
  OAuthProvider2["Authentik"] = "authentik";
  OAuthProvider2["Autodesk"] = "autodesk";
  OAuthProvider2["Bitbucket"] = "bitbucket";
  OAuthProvider2["Bitly"] = "bitly";
  OAuthProvider2["Box"] = "box";
  OAuthProvider2["Dailymotion"] = "dailymotion";
  OAuthProvider2["Discord"] = "discord";
  OAuthProvider2["Disqus"] = "disqus";
  OAuthProvider2["Dropbox"] = "dropbox";
  OAuthProvider2["Etsy"] = "etsy";
  OAuthProvider2["Facebook"] = "facebook";
  OAuthProvider2["Github"] = "github";
  OAuthProvider2["Gitlab"] = "gitlab";
  OAuthProvider2["Google"] = "google";
  OAuthProvider2["Linkedin"] = "linkedin";
  OAuthProvider2["Microsoft"] = "microsoft";
  OAuthProvider2["Notion"] = "notion";
  OAuthProvider2["Oidc"] = "oidc";
  OAuthProvider2["Okta"] = "okta";
  OAuthProvider2["Paypal"] = "paypal";
  OAuthProvider2["PaypalSandbox"] = "paypalSandbox";
  OAuthProvider2["Podio"] = "podio";
  OAuthProvider2["Salesforce"] = "salesforce";
  OAuthProvider2["Slack"] = "slack";
  OAuthProvider2["Spotify"] = "spotify";
  OAuthProvider2["Stripe"] = "stripe";
  OAuthProvider2["Tradeshift"] = "tradeshift";
  OAuthProvider2["TradeshiftBox"] = "tradeshiftBox";
  OAuthProvider2["Twitch"] = "twitch";
  OAuthProvider2["Wordpress"] = "wordpress";
  OAuthProvider2["Yahoo"] = "yahoo";
  OAuthProvider2["Yammer"] = "yammer";
  OAuthProvider2["Yandex"] = "yandex";
  OAuthProvider2["Zoho"] = "zoho";
  OAuthProvider2["Zoom"] = "zoom";
  OAuthProvider2["Mock"] = "mock";
})(OAuthProvider || (OAuthProvider = {}));
var Browser;
(function(Browser2) {
  Browser2["AvantBrowser"] = "aa";
  Browser2["AndroidWebViewBeta"] = "an";
  Browser2["GoogleChrome"] = "ch";
  Browser2["GoogleChromeIOS"] = "ci";
  Browser2["GoogleChromeMobile"] = "cm";
  Browser2["Chromium"] = "cr";
  Browser2["MozillaFirefox"] = "ff";
  Browser2["Safari"] = "sf";
  Browser2["MobileSafari"] = "mf";
  Browser2["MicrosoftEdge"] = "ps";
  Browser2["MicrosoftEdgeIOS"] = "oi";
  Browser2["OperaMini"] = "om";
  Browser2["Opera"] = "op";
  Browser2["OperaNext"] = "on";
})(Browser || (Browser = {}));
var CreditCard;
(function(CreditCard2) {
  CreditCard2["AmericanExpress"] = "amex";
  CreditCard2["Argencard"] = "argencard";
  CreditCard2["Cabal"] = "cabal";
  CreditCard2["Consosud"] = "censosud";
  CreditCard2["DinersClub"] = "diners";
  CreditCard2["Discover"] = "discover";
  CreditCard2["Elo"] = "elo";
  CreditCard2["Hipercard"] = "hipercard";
  CreditCard2["JCB"] = "jcb";
  CreditCard2["Mastercard"] = "mastercard";
  CreditCard2["Naranja"] = "naranja";
  CreditCard2["TarjetaShopping"] = "targeta-shopping";
  CreditCard2["UnionChinaPay"] = "union-china-pay";
  CreditCard2["Visa"] = "visa";
  CreditCard2["MIR"] = "mir";
  CreditCard2["Maestro"] = "maestro";
})(CreditCard || (CreditCard = {}));
var Flag;
(function(Flag2) {
  Flag2["Afghanistan"] = "af";
  Flag2["Angola"] = "ao";
  Flag2["Albania"] = "al";
  Flag2["Andorra"] = "ad";
  Flag2["UnitedArabEmirates"] = "ae";
  Flag2["Argentina"] = "ar";
  Flag2["Armenia"] = "am";
  Flag2["AntiguaAndBarbuda"] = "ag";
  Flag2["Australia"] = "au";
  Flag2["Austria"] = "at";
  Flag2["Azerbaijan"] = "az";
  Flag2["Burundi"] = "bi";
  Flag2["Belgium"] = "be";
  Flag2["Benin"] = "bj";
  Flag2["BurkinaFaso"] = "bf";
  Flag2["Bangladesh"] = "bd";
  Flag2["Bulgaria"] = "bg";
  Flag2["Bahrain"] = "bh";
  Flag2["Bahamas"] = "bs";
  Flag2["BosniaAndHerzegovina"] = "ba";
  Flag2["Belarus"] = "by";
  Flag2["Belize"] = "bz";
  Flag2["Bolivia"] = "bo";
  Flag2["Brazil"] = "br";
  Flag2["Barbados"] = "bb";
  Flag2["BruneiDarussalam"] = "bn";
  Flag2["Bhutan"] = "bt";
  Flag2["Botswana"] = "bw";
  Flag2["CentralAfricanRepublic"] = "cf";
  Flag2["Canada"] = "ca";
  Flag2["Switzerland"] = "ch";
  Flag2["Chile"] = "cl";
  Flag2["China"] = "cn";
  Flag2["CoteDIvoire"] = "ci";
  Flag2["Cameroon"] = "cm";
  Flag2["DemocraticRepublicOfTheCongo"] = "cd";
  Flag2["RepublicOfTheCongo"] = "cg";
  Flag2["Colombia"] = "co";
  Flag2["Comoros"] = "km";
  Flag2["CapeVerde"] = "cv";
  Flag2["CostaRica"] = "cr";
  Flag2["Cuba"] = "cu";
  Flag2["Cyprus"] = "cy";
  Flag2["CzechRepublic"] = "cz";
  Flag2["Germany"] = "de";
  Flag2["Djibouti"] = "dj";
  Flag2["Dominica"] = "dm";
  Flag2["Denmark"] = "dk";
  Flag2["DominicanRepublic"] = "do";
  Flag2["Algeria"] = "dz";
  Flag2["Ecuador"] = "ec";
  Flag2["Egypt"] = "eg";
  Flag2["Eritrea"] = "er";
  Flag2["Spain"] = "es";
  Flag2["Estonia"] = "ee";
  Flag2["Ethiopia"] = "et";
  Flag2["Finland"] = "fi";
  Flag2["Fiji"] = "fj";
  Flag2["France"] = "fr";
  Flag2["MicronesiaFederatedStatesOf"] = "fm";
  Flag2["Gabon"] = "ga";
  Flag2["UnitedKingdom"] = "gb";
  Flag2["Georgia"] = "ge";
  Flag2["Ghana"] = "gh";
  Flag2["Guinea"] = "gn";
  Flag2["Gambia"] = "gm";
  Flag2["GuineaBissau"] = "gw";
  Flag2["EquatorialGuinea"] = "gq";
  Flag2["Greece"] = "gr";
  Flag2["Grenada"] = "gd";
  Flag2["Guatemala"] = "gt";
  Flag2["Guyana"] = "gy";
  Flag2["Honduras"] = "hn";
  Flag2["Croatia"] = "hr";
  Flag2["Haiti"] = "ht";
  Flag2["Hungary"] = "hu";
  Flag2["Indonesia"] = "id";
  Flag2["India"] = "in";
  Flag2["Ireland"] = "ie";
  Flag2["IranIslamicRepublicOf"] = "ir";
  Flag2["Iraq"] = "iq";
  Flag2["Iceland"] = "is";
  Flag2["Israel"] = "il";
  Flag2["Italy"] = "it";
  Flag2["Jamaica"] = "jm";
  Flag2["Jordan"] = "jo";
  Flag2["Japan"] = "jp";
  Flag2["Kazakhstan"] = "kz";
  Flag2["Kenya"] = "ke";
  Flag2["Kyrgyzstan"] = "kg";
  Flag2["Cambodia"] = "kh";
  Flag2["Kiribati"] = "ki";
  Flag2["SaintKittsAndNevis"] = "kn";
  Flag2["SouthKorea"] = "kr";
  Flag2["Kuwait"] = "kw";
  Flag2["LaoPeopleSDemocraticRepublic"] = "la";
  Flag2["Lebanon"] = "lb";
  Flag2["Liberia"] = "lr";
  Flag2["Libya"] = "ly";
  Flag2["SaintLucia"] = "lc";
  Flag2["Liechtenstein"] = "li";
  Flag2["SriLanka"] = "lk";
  Flag2["Lesotho"] = "ls";
  Flag2["Lithuania"] = "lt";
  Flag2["Luxembourg"] = "lu";
  Flag2["Latvia"] = "lv";
  Flag2["Morocco"] = "ma";
  Flag2["Monaco"] = "mc";
  Flag2["Moldova"] = "md";
  Flag2["Madagascar"] = "mg";
  Flag2["Maldives"] = "mv";
  Flag2["Mexico"] = "mx";
  Flag2["MarshallIslands"] = "mh";
  Flag2["NorthMacedonia"] = "mk";
  Flag2["Mali"] = "ml";
  Flag2["Malta"] = "mt";
  Flag2["Myanmar"] = "mm";
  Flag2["Montenegro"] = "me";
  Flag2["Mongolia"] = "mn";
  Flag2["Mozambique"] = "mz";
  Flag2["Mauritania"] = "mr";
  Flag2["Mauritius"] = "mu";
  Flag2["Malawi"] = "mw";
  Flag2["Malaysia"] = "my";
  Flag2["Namibia"] = "na";
  Flag2["Niger"] = "ne";
  Flag2["Nigeria"] = "ng";
  Flag2["Nicaragua"] = "ni";
  Flag2["Netherlands"] = "nl";
  Flag2["Norway"] = "no";
  Flag2["Nepal"] = "np";
  Flag2["Nauru"] = "nr";
  Flag2["NewZealand"] = "nz";
  Flag2["Oman"] = "om";
  Flag2["Pakistan"] = "pk";
  Flag2["Panama"] = "pa";
  Flag2["Peru"] = "pe";
  Flag2["Philippines"] = "ph";
  Flag2["Palau"] = "pw";
  Flag2["PapuaNewGuinea"] = "pg";
  Flag2["Poland"] = "pl";
  Flag2["NorthKorea"] = "kp";
  Flag2["Portugal"] = "pt";
  Flag2["Paraguay"] = "py";
  Flag2["Qatar"] = "qa";
  Flag2["Romania"] = "ro";
  Flag2["Russia"] = "ru";
  Flag2["Rwanda"] = "rw";
  Flag2["SaudiArabia"] = "sa";
  Flag2["Sudan"] = "sd";
  Flag2["Senegal"] = "sn";
  Flag2["Singapore"] = "sg";
  Flag2["SolomonIslands"] = "sb";
  Flag2["SierraLeone"] = "sl";
  Flag2["ElSalvador"] = "sv";
  Flag2["SanMarino"] = "sm";
  Flag2["Somalia"] = "so";
  Flag2["Serbia"] = "rs";
  Flag2["SouthSudan"] = "ss";
  Flag2["SaoTomeAndPrincipe"] = "st";
  Flag2["Suriname"] = "sr";
  Flag2["Slovakia"] = "sk";
  Flag2["Slovenia"] = "si";
  Flag2["Sweden"] = "se";
  Flag2["Eswatini"] = "sz";
  Flag2["Seychelles"] = "sc";
  Flag2["Syria"] = "sy";
  Flag2["Chad"] = "td";
  Flag2["Togo"] = "tg";
  Flag2["Thailand"] = "th";
  Flag2["Tajikistan"] = "tj";
  Flag2["Turkmenistan"] = "tm";
  Flag2["TimorLeste"] = "tl";
  Flag2["Tonga"] = "to";
  Flag2["TrinidadAndTobago"] = "tt";
  Flag2["Tunisia"] = "tn";
  Flag2["Turkey"] = "tr";
  Flag2["Tuvalu"] = "tv";
  Flag2["Tanzania"] = "tz";
  Flag2["Uganda"] = "ug";
  Flag2["Ukraine"] = "ua";
  Flag2["Uruguay"] = "uy";
  Flag2["UnitedStates"] = "us";
  Flag2["Uzbekistan"] = "uz";
  Flag2["VaticanCity"] = "va";
  Flag2["SaintVincentAndTheGrenadines"] = "vc";
  Flag2["Venezuela"] = "ve";
  Flag2["Vietnam"] = "vn";
  Flag2["Vanuatu"] = "vu";
  Flag2["Samoa"] = "ws";
  Flag2["Yemen"] = "ye";
  Flag2["SouthAfrica"] = "za";
  Flag2["Zambia"] = "zm";
  Flag2["Zimbabwe"] = "zw";
})(Flag || (Flag = {}));
var ExecutionMethod;
(function(ExecutionMethod2) {
  ExecutionMethod2["GET"] = "GET";
  ExecutionMethod2["POST"] = "POST";
  ExecutionMethod2["PUT"] = "PUT";
  ExecutionMethod2["PATCH"] = "PATCH";
  ExecutionMethod2["DELETE"] = "DELETE";
  ExecutionMethod2["OPTIONS"] = "OPTIONS";
})(ExecutionMethod || (ExecutionMethod = {}));
var ImageGravity;
(function(ImageGravity2) {
  ImageGravity2["Center"] = "center";
  ImageGravity2["Topleft"] = "top-left";
  ImageGravity2["Top"] = "top";
  ImageGravity2["Topright"] = "top-right";
  ImageGravity2["Left"] = "left";
  ImageGravity2["Right"] = "right";
  ImageGravity2["Bottomleft"] = "bottom-left";
  ImageGravity2["Bottom"] = "bottom";
  ImageGravity2["Bottomright"] = "bottom-right";
})(ImageGravity || (ImageGravity = {}));
var ImageFormat;
(function(ImageFormat2) {
  ImageFormat2["Jpg"] = "jpg";
  ImageFormat2["Jpeg"] = "jpeg";
  ImageFormat2["Gif"] = "gif";
  ImageFormat2["Png"] = "png";
  ImageFormat2["Webp"] = "webp";
})(ImageFormat || (ImageFormat = {}));
var B2 = ["flex", "w-screen", "h-screen", "text-6xl", "justify-center", "items-center", "font-extrabold"];
var P2 = ["flex", "w-full", "max-h-[100vh]", "justify-center", "overflow-hidden", "scrollbar-hidden"];
var Q2 = ["p-4", "flex", "mt-4", "w-full", "flex-col", "h-screen", "rounded-md", "items-center", "shadow-border", "scrollbar-hidden"];
var O2 = (t) => {
  const n = k$();
  return xt("div", { class: ["m-3", "flex", "rounded", "border-4", "items-center", "border-txtPrimary", "justify-center", "hover:bg-bgSecondary"] }, { onClick$: x$("s_lNnfZJK390A", [n, t]) }, y$((a) => a.icon, [t], "p0.icon"), 3, "tW_0");
};
var h = Un(Lt(O2, "s_NCzEU0RO00k"));
var M2 = () => xt("svg", null, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", class: "stroke-txtPrimary h-9 w-9" }, xt("path", null, { "stroke-linecap": "round", "stroke-linejoin": "round", d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" }, null, 3, null), 3, "Z5_0");
var T2 = Un(Lt(M2, "s_abp1tubNbSA"));
var V2 = () => xt("svg", null, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", class: "stroke-txtPrimary h-9 w-9" }, xt("path", null, { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" }, null, 3, null), 3, "1K_0");
var I2 = Un(Lt(V2, "s_Te3w2ykiWWU"));
var z2 = () => xt("div", { class: ["w-1/5", "flex", "flex-col", "justify-center", "max-w-[70px]"] }, null, [ft(h, { get icon() {
  return v$(T2, {});
}, [M]: { icon: M } }, 3, "Tj_0"), ft(h, { get icon() {
  return v$(I2, {});
}, link: "blog", [M]: { icon: M, link: M } }, 3, "Tj_1")], 1, "Tj_2");
var A2 = Un(Lt(z2, "s_PX8yQoK5ags"));
var W2 = async ({ cacheControl: t }) => {
  t({ staleWhileRevalidate: 604800, maxAge: 5 });
};
var H2 = () => xt("div", null, { class: P2 }, [xt("div", { class: [["w-1/5", "flex", "justify-end", "items-center", "sm:max-w-[70px]"], ["sm:hidden md:flex"]] }, null, null, 3, null), xt("div", { class: ["flex", "w-4/5", "h-full", "m-4"] }, null, xt("div", null, { class: Q2 }, ft(xe, null, 3, "yB_0"), 1, null), 1, null), ft(A2, null, 3, "yB_1")], 1, "yB_2");
var L2 = Un(Lt(H2, "s_VKFlAWJuVm8"));
var N2 = Object.freeze(Object.defineProperty({ __proto__: null, default: L2, onGet: W2 }, Symbol.toStringTag, { value: "Module" }));
var U = (t) => {
  const n = k$(), r = ["p-2", "m-1", "flex", "flex-col", "max-w-sm", "rounded-2xl", "cursor-pointer", t.bgColor ? t.bgColor : "bg-transparent", "hover:bg-hover", "box-border", "shadow-border"], a = ["flex", "italic", "w-full", "text-2xl", "font-bold", "text-center", "select-none", "justify-center", t.txColor ? t.txColor : "text-txPrimary"], w = ["text-base", "mt-6", "select-none"];
  return xt("div", { class: r }, { onClick$: x$("s_kxX7fiVjwOg", [n, t]) }, [t.image ? xt("div", null, null, null, 3, "BN_0") : ft(he, null, 3, "BN_1"), xt("div", null, null, [xt("div", { class: a }, null, y$((u) => u.title, [t], "p0.title"), 3, null), xt("div", { class: w }, null, y$((u) => u.description, [t], "p0.description"), 3, null)], 1, null)], 1, t.key);
};
var D2 = Un(Lt(U, "s_Ckljc1FxMOo"));
var F2 = () => {
  const t = le({ blogPosts: [] });
  return w$(x$("s_9bX79PSaULI", [t])), xt("div", null, null, t.blogPosts.map((n) => ft(D2, { get title() {
    return n.title;
  }, get id() {
    return n.id;
  }, get description() {
    return n.overview;
  }, [M]: { title: ii(n, "title"), id: ii(n, "id"), description: ii(n, "overview") } }, 3, n.id)), 1, "B0_0");
};
var K2 = Un(Lt(F2, "s_GBQBGBjVVwU"));
var G3 = { meta: [{ name: "Blog", content: "These are the blogs that I have uploaded" }] };
var R = Object.freeze(Object.defineProperty({ __proto__: null, default: K2, head: G3 }, Symbol.toStringTag, { value: "Module" }));
var c = { url: "https://appwrite.domcogan.app/v1", projectId: "6621bd6a00282722c88e", databasesId: "6621bdfa001d92f8fa33", blogCollectionId: "6622e812003c292dedb5", itemCollectionId: "662444e20028c21a42fd", sectionCollectionId: "662451cc003b8feca015" };
var b = new Client();
b.setProject(c.projectId);
b.setEndpoint(c.url);
new Databases(b);
var $ = () => {
  const n = I$().params.id;
  return ft(he, { children: [xt("div", null, null, "Single blog post ", 3, null), xt("div", null, null, n, 1, null), xt("div", null, null, c.projectId, 3, null), xt("div", null, null, c.databasesId, 3, null)] }, 1, "4y_0");
};
var q = Un(Lt($, "s_wCieFdpQfC4"));
var E = { title: "Welcome to Qwik", meta: [{ name: "description", content: "Qwik site description" }] };
var J3 = Object.freeze(Object.defineProperty({ __proto__: null, default: q, head: E }, Symbol.toStringTag, { value: "Module" }));
var X2 = () => ft(he, { children: xt("div", null, { class: B2 }, "Site Under Construction", 3, null) }, 3, "Vi_0");
var Z2 = Un(Lt(X2, "s_uJ8rhQ0Ae0E"));
var Y2 = { title: "Dom Cogan Portfolio", meta: [{ name: "description", content: "This is the portfolio website made in Qwik for Dom-Cogan" }] };
var ee3 = Object.freeze(Object.defineProperty({ __proto__: null, default: Z2, head: Y2 }, Symbol.toStringTag, { value: "Module" }));
var te3 = [];
var v = () => N2;
var ne3 = [["blog/", [v, () => R], "/blog/", ["q-D-hzz8cH.js", "q-DD1l-L2D.js"]], ["blog/[id]/", [v, () => J3], "/blog/[id]/", ["q-D-hzz8cH.js", "q-BAYCHZyC.js"]], ["[...home]", [() => ee3], "/[...home]", ["q-Be2jxJzO.js"]]];
var le2 = [];
var oe2 = true;
var se2 = "/";
var ie2 = true;
var ae2 = { routes: ne3, serverPlugins: te3, menus: le2, trailingSlash: oe2, basePathname: se2, cacheModules: ie2 };
var ie3 = class extends Error {
  constructor(e, t) {
    super(t), this.status = e;
  }
};
function Me3(e, t) {
  let n = "Server Error";
  return t != null && (typeof t.message == "string" ? n = t.message : n = String(t)), "<html>" + se3(e, n) + "</html>";
}
function se3(e, t) {
  typeof e != "number" && (e = 500), typeof t == "string" ? t = We3(t) : t = "";
  const n = typeof t == "string" ? "600px" : "300px", r = e >= 500 ? Ne3 : Oe3;
  return `
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`;
}
var De3 = /[&<>]/g;
var We3 = (e) => e.replace(De3, (t) => {
  switch (t) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    default:
      return "";
  }
});
var Oe3 = "#006ce9";
var Ne3 = "#713fc2";
var ve3 = { lax: "Lax", Lax: "Lax", None: "None", none: "None", strict: "Strict", Strict: "Strict" };
var $e3 = { seconds: 1, minutes: 1 * 60, hours: 1 * 60 * 60, days: 1 * 60 * 60 * 24, weeks: 1 * 60 * 60 * 24 * 7 };
var Le3 = (e, t, n) => {
  const r = [`${e}=${t}`];
  typeof n.domain == "string" && r.push(`Domain=${n.domain}`), typeof n.maxAge == "number" ? r.push(`Max-Age=${n.maxAge}`) : Array.isArray(n.maxAge) ? r.push(`Max-Age=${n.maxAge[0] * $e3[n.maxAge[1]]}`) : typeof n.expires == "number" || typeof n.expires == "string" ? r.push(`Expires=${n.expires}`) : n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.httpOnly && r.push("HttpOnly"), typeof n.path == "string" && r.push(`Path=${n.path}`);
  const a = Ie3(n.sameSite);
  return a && r.push(`SameSite=${a}`), n.secure && r.push("Secure"), r.join("; ");
};
function X3(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
var He3 = (e) => {
  const t = {};
  if (typeof e == "string" && e !== "") {
    const n = e.split(";");
    for (const r of n) {
      const a = r.indexOf("=");
      a !== -1 && (t[X3(r.slice(0, a).trim())] = X3(r.slice(a + 1).trim()));
    }
  }
  return t;
};
function Ie3(e) {
  if (e === true)
    return "Strict";
  if (e === false)
    return "None";
  if (e)
    return ve3[e];
}
var k = Symbol("request-cookies");
var j2 = Symbol("response-cookies");
var _ = Symbol("live-cookies");
var oe3;
var ce2;
var Qe3 = class {
  constructor(e) {
    this[oe3] = {}, this[ce2] = {}, this[k] = He3(e), this[_] = { ...this[k] };
  }
  get(e, t = true) {
    const n = this[t ? _ : k][e];
    return n ? { value: n, json() {
      return JSON.parse(n);
    }, number() {
      return Number(n);
    } } : null;
  }
  getAll(e = true) {
    return Object.keys(this[e ? _ : k]).reduce((t, n) => (t[n] = this.get(n), t), {});
  }
  has(e, t = true) {
    return !!this[t ? _ : k][e];
  }
  set(e, t, n = {}) {
    this[_][e] = typeof t == "string" ? t : JSON.stringify(t);
    const r = typeof t == "string" ? t : encodeURIComponent(JSON.stringify(t));
    this[j2][e] = Le3(e, r, n);
  }
  delete(e, t) {
    this.set(e, "deleted", { ...t, maxAge: 0 }), this[_][e] = null;
  }
  headers() {
    return Object.values(this[j2]);
  }
};
oe3 = j2, ce2 = _;
var Ue2 = (e, t) => {
  const n = t.headers();
  if (n.length > 0) {
    const r = new Headers(e);
    for (const a of n)
      r.append("Set-Cookie", a);
    return r;
  }
  return e;
};
var B3 = class {
};
var W3 = class extends B3 {
};
var G4 = /* @__PURE__ */ new WeakMap();
var J4 = "qaction";
var ze3 = "qfunc";
function Fe3(e) {
  const { url: t, params: n, request: r, status: a, locale: i } = e, s = {};
  r.headers.forEach((w, y) => s[y] = w);
  const o = e.sharedMap.get(H3), l = e.sharedMap.get(me2), c2 = e.sharedMap.get(pe2), d = e.sharedMap.get(at2), h2 = e.request.headers, m = new URL(t.pathname + t.search, t), u = h2.get("X-Forwarded-Host"), g = h2.get("X-Forwarded-Proto");
  return u && (m.port = "", m.host = u), g && (m.protocol = g), { url: m.href, requestHeaders: s, locale: i(), nonce: d, containerAttributes: { "q:route": c2 }, qwikcity: { routeName: c2, ev: e, params: { ...n }, loadedRoute: st(e), response: { status: a(), loaders: I3(e), action: o, formData: l } } };
}
var je3 = (e, t, n, r, a) => {
  const i = [], s = [], o = [], l = !!(t && Ve3(t[2]));
  if (e && V3(i, s, o, e, l, n), t) {
    const c2 = t[0];
    r && (n === "POST" || n === "PUT" || n === "PATCH" || n === "DELETE") && o.unshift(Ye2), l && (n === "POST" && o.push(Xe2), o.push(Ge2), o.push(Ee3)), o.push(qe3), V3(i, s, o, t[2], l, n), l && (o.push((d) => {
      d.sharedMap.set(pe2, c2);
    }), o.push(Be3(i, s)), o.push(a));
  }
  return o;
};
var V3 = (e, t, n, r, a, i) => {
  for (const s of r) {
    typeof s.onRequest == "function" ? n.push(s.onRequest) : Array.isArray(s.onRequest) && n.push(...s.onRequest);
    let o;
    switch (i) {
      case "GET": {
        o = s.onGet;
        break;
      }
      case "POST": {
        o = s.onPost;
        break;
      }
      case "PUT": {
        o = s.onPut;
        break;
      }
      case "PATCH": {
        o = s.onPatch;
        break;
      }
      case "DELETE": {
        o = s.onDelete;
        break;
      }
      case "OPTIONS": {
        o = s.onOptions;
        break;
      }
      case "HEAD": {
        o = s.onHead;
        break;
      }
    }
    if (typeof o == "function" ? n.push(o) : Array.isArray(o) && n.push(...o), a) {
      const l = Object.values(s).filter((d) => Y3(d, "server_loader"));
      e.push(...l);
      const c2 = Object.values(s).filter((d) => Y3(d, "server_action"));
      t.push(...c2);
    }
  }
};
var Y3 = (e, t) => e && typeof e == "function" && e.__brand === t;
function Be3(e, t) {
  return async (n) => {
    if (n.headersSent) {
      n.exit();
      return;
    }
    const { method: r } = n, a = I3(n), i = Q3(n) === "dev", s = n[L3];
    if (i && r === "GET" && n.query.has(J4) && console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`), r === "POST") {
      const o = n.query.get(J4);
      if (o) {
        const l = globalThis._qwikActionsMap, c2 = t.find((d) => d.__id === o) ?? (l == null ? void 0 : l.get(o));
        if (c2) {
          n.sharedMap.set(H3, o);
          const d = await n.parseBody();
          if (!d || typeof d != "object")
            throw new Error("Expected request data to be an object");
          const h2 = await Z3(n, c2.__validators, d, i);
          if (!h2.success)
            a[o] = n.fail(h2.status ?? 500, h2.error);
          else {
            const m = i ? await N3(n, c2.__qrl.getSymbol().split("_", 1)[0], () => c2.__qrl.call(n, h2.data, n)) : await c2.__qrl.call(n, h2.data, n);
            i && O3(s, m, c2.__qrl), a[o] = m;
          }
        }
      }
    }
    e.length > 0 && await Promise.all(e.map((o) => {
      const l = o.__id;
      return a[l] = Z3(n, o.__validators, void 0, i).then((c2) => c2.success ? i ? N3(n, o.__qrl.getSymbol().split("_", 1)[0], () => o.__qrl.call(n, n)) : o.__qrl.call(n, n) : n.fail(c2.status ?? 500, c2.error)).then((c2) => (typeof c2 == "function" ? a[l] = c2() : (i && O3(s, c2, o.__qrl), a[l] = c2), c2));
    }));
  };
}
async function Z3(e, t, n, r) {
  let a = { success: true, data: n };
  if (t)
    for (const i of t)
      if (r ? a = await N3(e, "validator$", () => i.validate(e, n)) : a = await i.validate(e, n), a.success)
        n = a.data;
      else
        return a;
  return a;
}
function Ke2(e) {
  return e ? typeof e == "object" && Symbol.asyncIterator in e : false;
}
async function Xe2(e) {
  const t = e.query.get(ze3);
  if (t && e.request.headers.get("X-QRL") === t && e.request.headers.get("Content-Type") === "application/qwik-json") {
    e.exit();
    const n = Q3(e) === "dev", r = e[L3], a = await e.parseBody();
    if (Array.isArray(a)) {
      const [i, ...s] = a;
      if (Je3(i) && i.getHash() === t) {
        let o;
        try {
          n ? o = await N3(e, `server_${i.getSymbol()}`, () => i.apply(e, s)) : o = await i.apply(e, s);
        } catch (l) {
          e.headers.set("Content-Type", "application/qwik-json"), e.send(500, await r._serializeData(l, true));
          return;
        }
        if (Ke2(o)) {
          e.headers.set("Content-Type", "text/qwik-json-stream");
          const c2 = e.getWritableStream().getWriter();
          for await (const d of o) {
            n && O3(r, d, i);
            const h2 = await r._serializeData(d, true);
            if (e.signal.aborted)
              break;
            await c2.write($2.encode(`${h2}
`));
          }
          c2.close();
        } else {
          O3(r, o, i), e.headers.set("Content-Type", "application/qwik-json");
          const l = await r._serializeData(o, true);
          e.send(200, l);
        }
        return;
      }
    }
    throw e.error(500, "Invalid request");
  }
}
function Ge2(e) {
  const t = K3(e), { basePathname: n, pathname: r, url: a, sharedMap: i } = e;
  if (!i.has(P3) && r !== n && !r.endsWith(".html")) {
    if (t) {
      if (!r.endsWith("/"))
        throw e.redirect(302, r + "/" + a.search);
    } else if (r.endsWith("/"))
      throw e.redirect(302, r.slice(0, r.length - 1) + a.search);
  }
}
function O3(e, t, n) {
  try {
    e._verifySerializable(t, void 0);
  } catch (r) {
    throw r instanceof Error && n.dev && (r.loc = n.dev), r;
  }
}
var Je3 = (e) => typeof e == "function" && typeof e.getSymbol == "function";
function Ve3(e) {
  const t = e[e.length - 1];
  return t && typeof t.default == "function";
}
function le3(e, t) {
  return e = new URL(e), e.pathname.endsWith(x2) && (e.pathname = e.pathname.slice(0, -x2.length)), t ? e.pathname.endsWith("/") || (e.pathname += "/") : e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1)), e.toString().substring(e.origin.length);
}
var $2 = new TextEncoder();
function Ye2(e) {
  if (tt2(e.request.headers, "application/x-www-form-urlencoded", "multipart/form-data", "text/plain")) {
    const n = e.request.headers.get("origin"), r = e.url.origin;
    if (n !== r)
      throw e.error(403, `CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${r}".`);
  }
}
function Ze2(e) {
  return async (t) => {
    if (t.headersSent || t.sharedMap.has(P3))
      return;
    t.request.headers.forEach((h2, m) => h2);
    const r = t.headers;
    r.has("Content-Type") || r.set("Content-Type", "text/html; charset=utf-8");
    const a = K3(t), { readable: i, writable: s } = new TextEncoderStream(), o = t.getWritableStream(), l = i.pipeTo(o, { preventClose: true }), c2 = s.getWriter(), d = t.status();
    try {
      const h2 = Q3(t) === "static", m = Fe3(t), u = await e({ base: t.basePathname + "build/", stream: c2, serverData: m, containerAttributes: { "q:render": h2 ? "static" : "", ...m.containerAttributes } }), g = { loaders: I3(t), action: t.sharedMap.get(H3), status: d !== 200 ? d : 200, href: le3(t.url, a) };
      typeof u.html == "string" && await c2.write(u.html), t.sharedMap.set("qData", g);
    } finally {
      await c2.ready, await c2.close(), await l;
    }
    await o.close();
  };
}
async function qe3(e) {
  if (e.sharedMap.has(P3)) {
    try {
      await e.next();
    } catch (i) {
      if (!(i instanceof W3))
        throw i;
    }
    if (e.headersSent)
      return;
    const n = e.status(), r = e.headers.get("Location");
    if (n >= 301 && n <= 308 && r) {
      const i = et2(r);
      if (i) {
        e.headers.set("Location", i), e.getWritableStream().close();
        return;
      } else
        e.status(200), e.headers.delete("Location");
    }
  }
}
async function Ee3(e) {
  if (e.sharedMap.has(P3)) {
    if (await e.next(), e.headersSent || e.exited)
      return;
    const n = e.status(), r = e.headers.get("Location"), a = K3(e);
    e.request.headers.forEach((c2, d) => c2), e.headers.set("Content-Type", "application/json; charset=utf-8");
    const i = { loaders: I3(e), action: e.sharedMap.get(H3), status: n !== 200 ? n : 200, href: le3(e.url, a), redirect: r ?? void 0 }, s = e.getWritableStream().getWriter(), l = await e[L3]._serializeData(i, true);
    s.write($2.encode(l)), e.sharedMap.set("qData", i), s.close();
  }
}
function et2(e) {
  if (e.startsWith("/")) {
    const t = x2, n = new URL(e, "http://localhost");
    return (n.pathname.endsWith("/") ? n.pathname.slice(0, -1) : n.pathname) + (t.startsWith("/") ? "" : "/") + t + n.search;
  } else
    return;
}
function q2() {
  return typeof performance < "u" ? performance.now() : 0;
}
async function N3(e, t, n) {
  const r = q2();
  try {
    return await n();
  } finally {
    const a = q2() - r;
    let i = e.sharedMap.get("@serverTiming");
    i || e.sharedMap.set("@serverTiming", i = []), i.push([t, a]);
  }
}
function tt2(e, ...t) {
  var n;
  const r = ((n = e.get("content-type")) == null ? void 0 : n.split(/;,/, 1)[0].trim()) ?? "";
  return t.includes(r);
}
function nt2(e) {
  const t = [];
  return e === "day" ? e = 60 * 60 * 24 : e === "week" ? e = 60 * 60 * 24 * 7 : e === "month" ? e = 60 * 60 * 24 * 30 : e === "year" ? e = 60 * 60 * 24 * 365 : e === "private" ? e = { private: true, noCache: true } : e === "immutable" ? e = { public: true, immutable: true, maxAge: 60 * 60 * 24 * 365, staleWhileRevalidate: 60 * 60 * 24 * 365 } : e === "no-cache" && (e = { noCache: true }), typeof e == "number" && (e = { maxAge: e, sMaxAge: e, staleWhileRevalidate: e }), e.immutable && t.push("immutable"), e.maxAge && t.push(`max-age=${e.maxAge}`), e.sMaxAge && t.push(`s-maxage=${e.sMaxAge}`), e.noStore && t.push("no-store"), e.noCache && t.push("no-cache"), e.private && t.push("private"), e.public && t.push("public"), e.staleWhileRevalidate && t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`), e.staleIfError && t.push(`stale-if-error=${e.staleIfError}`), t.join(", ");
}
var rt2 = (e) => e && typeof e.then == "function";
var fe2 = Symbol("RequestEvLoaders");
var ue2 = Symbol("RequestEvMode");
var de2 = Symbol("RequestEvRoute");
var L3 = Symbol("RequestEvQwikSerializer");
var he2 = Symbol("RequestEvTrailingSlash");
var pe2 = "@routeName";
var H3 = "@actionId";
var me2 = "@actionFormData";
var at2 = "@nonce";
function it2(e, t, n, r, a, i, s, o) {
  const { request: l, platform: c2, env: d } = e, h2 = /* @__PURE__ */ new Map(), m = new Qe3(l.headers.get("cookie")), u = new Headers(), g = new URL(l.url);
  g.pathname.endsWith(x2) && (g.pathname = g.pathname.slice(0, -ge3), a && !g.pathname.endsWith("/") && (g.pathname += "/"), h2.set(P3, true)), h2.set("@manifest", r);
  let w = -1, y = null, A3, T3 = e.locale, S2 = 200;
  const Se3 = async () => {
    for (w++; w < n.length; ) {
      const f = n[w], p = globalThis.qcAsyncRequestStore, b2 = p != null && p.run ? p.run(R2, f, R2) : f(R2);
      rt2(b2) && await b2, w++;
    }
  }, C3 = () => {
    if (y !== null)
      throw new Error("Response already sent");
  }, M3 = (f, p) => {
    if (C3(), typeof f == "number") {
      S2 = f;
      const D3 = R2.getWritableStream().getWriter();
      D3.write(typeof p == "string" ? $2.encode(p) : p), D3.close();
    } else if (S2 = f.status, f.headers.forEach((b2, D3) => {
      u.append(D3, b2);
    }), f.body) {
      const b2 = R2.getWritableStream();
      f.body.pipeTo(b2);
    } else {
      if (S2 >= 300 && S2 < 400)
        return new W3();
      R2.getWritableStream().getWriter().close();
    }
    return U2();
  }, U2 = () => (w = E2, new B3()), z3 = {}, R2 = { [fe2]: z3, [ue2]: e.mode, [he2]: a, [de2]: t, [L3]: s, cookie: m, headers: u, env: d, method: l.method, signal: l.signal, params: (t == null ? void 0 : t[1]) ?? {}, pathname: g.pathname, platform: c2, query: g.searchParams, request: l, url: g, basePathname: i, sharedMap: h2, get headersSent() {
    return y !== null;
  }, get exited() {
    return w >= E2;
  }, get clientConn() {
    return e.getClientConn();
  }, next: Se3, exit: U2, cacheControl: (f, p = "Cache-Control") => {
    C3(), u.set(p, nt2(f));
  }, resolveValue: async (f) => {
    const p = f.__id;
    if (f.__brand === "server_loader" && !(p in z3))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    return z3[p];
  }, status: (f) => typeof f == "number" ? (C3(), S2 = f, f) : S2, locale: (f) => (typeof f == "string" && (T3 = f), T3 || ""), error: (f, p) => (S2 = f, u.delete("Cache-Control"), new ie3(f, p)), redirect: (f, p) => {
    if (C3(), S2 = f, p) {
      const b2 = p.replace(/([^:])\/{2,}/g, "$1/");
      p !== b2 && console.warn(`Redirect URL ${p} is invalid, fixing to ${b2}`), u.set("Location", b2);
    }
    return u.delete("Cache-Control"), f > 301 && u.set("Cache-Control", "no-store"), U2(), new W3();
  }, defer: (f) => typeof f == "function" ? f : () => f, fail: (f, p) => (C3(), S2 = f, u.delete("Cache-Control"), { failed: true, ...p }), text: (f, p) => (u.set("Content-Type", "text/plain; charset=utf-8"), M3(f, p)), html: (f, p) => (u.set("Content-Type", "text/html; charset=utf-8"), M3(f, p)), parseBody: async () => A3 !== void 0 ? A3 : A3 = ot2(R2.request, h2, s), json: (f, p) => (u.set("Content-Type", "application/json; charset=utf-8"), M3(f, JSON.stringify(p))), send: M3, isDirty: () => y !== null, getWritableStream: () => {
    if (y === null) {
      if (e.mode === "dev") {
        const f = h2.get("@serverTiming");
        f && u.set("Server-Timing", f.map((p) => `${p[0]};dur=${p[1]}`).join(","));
      }
      y = e.getWritableStream(S2, u, m, o, R2);
    }
    return y;
  } };
  return Object.freeze(R2);
}
function I3(e) {
  return e[fe2];
}
function K3(e) {
  return e[he2];
}
function st(e) {
  return e[de2];
}
function Q3(e) {
  return e[ue2];
}
var E2 = Number.MAX_SAFE_INTEGER;
var ot2 = async (e, t, n) => {
  var r;
  const a = ((r = e.headers.get("content-type")) == null ? void 0 : r.split(/[;,]/, 1)[0].trim()) ?? "";
  if (a === "application/x-www-form-urlencoded" || a === "multipart/form-data") {
    const i = await e.formData();
    return t.set(me2, i), ct2(i);
  } else {
    if (a === "application/json")
      return await e.json();
    if (a === "application/qwik-json")
      return n._deserializeData(await e.text());
  }
};
var ct2 = (e) => [...e.entries()].reduce((n, [r, a]) => (r.split(".").reduce((i, s, o, l) => {
  if (s.endsWith("[]")) {
    const c2 = s.slice(0, -2);
    return i[c2] = i[c2] || [], i[c2] = [...i[c2], a];
  }
  return o < l.length - 1 ? i[s] = i[s] || (Number.isNaN(+l[o + 1]) ? {} : []) : i[s] = a;
}, n), n), {});
var v2;
import("node:async_hooks").then((e) => {
  const t = e.AsyncLocalStorage;
  v2 = new t(), globalThis.qcAsyncRequestStore = v2;
}).catch((e) => {
  console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.", e);
});
function lt2(e, t, n, r, a = true, i = "/", s) {
  let o;
  const l = new Promise((d) => o = d), c2 = it2(e, t, n, r, a, i, s, o);
  return { response: l, requestEv: c2, completion: v2 ? v2.run(c2, ee4, c2, o) : ee4(c2, o) };
}
async function ee4(e, t) {
  try {
    await e.next();
  } catch (n) {
    if (n instanceof W3)
      await e.getWritableStream().close();
    else if (n instanceof ie3) {
      if (console.error(n), !e.headersSent) {
        const r = Me3(n.status, n), a = n.status;
        e.html(a, r);
      }
    } else if (!(n instanceof B3)) {
      if (Q3(e) !== "dev")
        try {
          e.headersSent || (e.headers.set("content-type", "text/html; charset=utf-8"), e.cacheControl({ noCache: true }), e.status(500));
          const r = e.getWritableStream();
          if (!r.locked) {
            const a = r.getWriter();
            await a.write($2.encode(se3(500, "Internal Server Error"))), await a.close();
          }
        } catch {
          console.error("Unable to render error page");
        }
      return n;
    }
  } finally {
    e.isDirty() || t(null);
  }
}
function ft2(e, t) {
  if (e.endsWith(x2)) {
    const n = e.length - ge3 + (t ? 1 : 0);
    e = e.slice(0, n), e === "" && (e = "/");
  }
  return e;
}
var P3 = "@isQData";
var x2 = "/q-data.json";
var ge3 = x2.length;
function ut2(e, t) {
  const n = re2(e), r = te4(e), a = re2(t), i = te4(t);
  return we2(e, n, r, t, a, i);
}
function we2(e, t, n, r, a, i) {
  let s = null;
  for (; t < n; ) {
    const o = e.charCodeAt(t++), l = r.charCodeAt(a++);
    if (o === 91) {
      const c2 = ye2(e, t), d = t + (c2 ? 3 : 0), h2 = F3(e, d, n, 93), m = e.substring(d, h2), u = F3(e, h2 + 1, n, 47), g = e.substring(h2 + 1, u);
      t = h2 + 1;
      const w = a - 1;
      if (c2) {
        const T3 = ht2(m, g, r, w, i, e, t + g.length + 1, n);
        if (T3)
          return Object.assign(s || (s = {}), T3);
      }
      const y = F3(r, w, i, 47, g);
      if (y == -1)
        return null;
      const A3 = r.substring(w, y);
      if (!c2 && !g && !A3)
        return null;
      a = y, (s || (s = {}))[m] = decodeURIComponent(A3);
    } else if (o !== l && !(isNaN(l) && dt2(e, t)))
      return null;
  }
  return ne4(e, t) && ne4(r, a) ? s || {} : null;
}
function dt2(e, t) {
  return e.charCodeAt(t) === 91 && ye2(e, t + 1);
}
function te4(e) {
  const t = e.length;
  return t > 1 && e.charCodeAt(t - 1) === 47 ? t - 1 : t;
}
function ne4(e, t) {
  const n = e.length;
  return t >= n || t == n - 1 && e.charCodeAt(t) === 47;
}
function re2(e) {
  return e.charCodeAt(0) === 47 ? 1 : 0;
}
function ye2(e, t) {
  return e.charCodeAt(t) === 46 && e.charCodeAt(t + 1) === 46 && e.charCodeAt(t + 2) === 46;
}
function F3(e, t, n, r, a = "") {
  for (; t < n && e.charCodeAt(t) !== r; )
    t++;
  const i = a.length;
  for (let s = 0; s < i; s++)
    if (e.charCodeAt(t - i + s) !== a.charCodeAt(s))
      return -1;
  return t - i;
}
function ht2(e, t, n, r, a, i, s, o) {
  n.charCodeAt(r) === 47 && r++;
  let l = a;
  const c2 = t + "/";
  let d = 5;
  for (; l >= r && d--; ) {
    const h2 = we2(i, s, o, n, l, a);
    if (h2) {
      let m = n.substring(r, Math.min(l, a));
      return m.endsWith(c2) && (m = m.substring(0, m.length - c2.length)), h2[e] = decodeURIComponent(m), h2;
    }
    l = pt2(n, r, c2, l, r - 1) + c2.length;
  }
  return null;
}
function pt2(e, t, n, r, a) {
  let i = e.lastIndexOf(n, r);
  return i == r - n.length && (i = e.lastIndexOf(n, r - n.length - 1)), i > t ? i : a;
}
var mt2 = async (e, t, n, r) => {
  if (Array.isArray(e))
    for (const a of e) {
      const i = a[0], s = ut2(i, r);
      if (s) {
        const o = a[1], l = a[3], c2 = new Array(o.length), d = [], h2 = gt2(t, r);
        let m;
        return o.forEach((u, g) => {
          ae3(u, d, (w) => c2[g] = w, n);
        }), ae3(h2, d, (u) => m = u == null ? void 0 : u.default, n), d.length > 0 && await Promise.all(d), [i, s, c2, m, l];
      }
    }
  return null;
};
var ae3 = (e, t, n, r) => {
  if (typeof e == "function") {
    const a = G4.get(e);
    if (a)
      n(a);
    else {
      const i = e();
      typeof i.then == "function" ? t.push(i.then((s) => {
        r !== false && G4.set(e, s), n(s);
      })) : i && n(i);
    }
  }
};
var gt2 = (e, t) => {
  if (e) {
    t = t.endsWith("/") ? t : t + "/";
    const n = e.find((r) => r[0] === t || t.startsWith(r[0] + (t.endsWith("/") ? "" : "/")));
    if (n)
      return n[1];
  }
};
async function wt2(e, t, n) {
  const { render: r, qwikCityPlan: a, manifest: i, checkOrigin: s } = t, o = e.url.pathname, l = ft2(o, a.trailingSlash), c2 = await yt2(a, l, e.request.method, s ?? true, r);
  return c2 ? lt2(e, c2[0], c2[1], i, a.trailingSlash, a.basePathname, n) : null;
}
async function yt2(e, t, n, r, a) {
  const { routes: i, serverPlugins: s, menus: o, cacheModules: l } = e, c2 = await mt2(i, o, l, t), d = je3(s, c2, n, r, Ze2(a));
  return d.length > 0 ? [c2, d] : null;
}
function St2(e) {
  try {
    new globalThis.TextEncoderStream();
  } catch {
    globalThis.TextEncoderStream = Rt2;
  }
  const t = { _deserializeData: b$, _serializeData: E$, _verifySerializable: _$ };
  e.manifest && Je2(e.manifest);
  async function n(r, a, i) {
    try {
      const s = new URL(r.url);
      if (isStaticPath(r.method, s))
        return a.ASSETS.fetch(r);
      const o = s.hostname !== "127.0.0.1" && s.hostname !== "localhost" && s.port === "" && r.method === "GET", l = new Request(s.href, r), c2 = o ? await caches.open("custom:qwikcity") : null;
      if (c2) {
        const u = await c2.match(l);
        if (u)
          return u;
      }
      const h2 = await wt2({ mode: "server", locale: void 0, url: s, request: r, env: { get(u) {
        return a[u];
      } }, getWritableStream: (u, g, w, y) => {
        const { readable: A3, writable: T3 } = new TransformStream(), S2 = new Response(A3, { status: u, headers: Ue2(g, w) });
        return y(S2), T3;
      }, getClientConn: () => ({ ip: r.headers.get("CF-connecting-ip") || "", country: r.headers.get("CF-IPCountry") || "" }), platform: { request: r, env: a, ctx: i } }, e, t);
      if (h2) {
        h2.completion.then((g) => {
          g && console.error(g);
        });
        const u = await h2.response;
        if (u)
          return u.ok && c2 && u.headers.has("Cache-Control") && i.waitUntil(c2.put(l, u.clone())), u;
      }
      const m = getNotFound(s.pathname);
      return new Response(m, { status: 404, headers: { "Content-Type": "text/html; charset=utf-8", "X-Not-Found": s.pathname } });
    } catch (s) {
      return console.error(s), new Response(String(s || "Error"), { status: 500, headers: { "Content-Type": "text/plain; charset=utf-8", "X-Error": "cloudflare-pages" } });
    }
  }
  return n;
}
var bt2 = Promise.resolve();
var Rt2 = class {
  constructor() {
    this._writer = null, this.readable = { pipeTo: (t) => {
      this._writer = t.getWriter();
    } }, this.writable = { getWriter: () => {
      if (!this._writer)
        throw new Error("No writable stream");
      const t = new TextEncoder();
      return { write: async (n) => {
        n != null && await this._writer.write(t.encode(n));
      }, close: () => this._writer.close(), ready: bt2 };
    } };
  }
};
var Pt2 = St2({ render: $e2, qwikCityPlan: ae2, manifest: Qe2 });
var worker_default = { fetch: Pt2 };
init_checked_fetch();
init_modules_watch_stub();
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;
init_checked_fetch();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
worker_default.middleware = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
  ...worker_default.middleware ?? []
].filter(Boolean);
var middleware_insertion_facade_default = worker_default;
init_checked_fetch();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (worker.middleware === void 0 || worker.middleware.length === 0) {
    return worker;
  }
  for (const middleware of worker.middleware) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (klass.middleware === void 0 || klass.middleware.length === 0) {
    return klass;
  }
  for (const middleware of klass.middleware) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-x98Tcq/oy0v2oho5zh.js
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
        if (middleware_loader_entry_default.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return middleware_loader_entry_default.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
var jsonError2 = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-gAyWUI/middleware-insertion-facade.js
pages_dev_pipeline_default.middleware = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2,
  ...pages_dev_pipeline_default.middleware ?? []
].filter(Boolean);
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-gAyWUI/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (worker.middleware === void 0 || worker.middleware.length === 0) {
    return worker;
  }
  for (const middleware of worker.middleware) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint2(klass) {
  if (klass.middleware === void 0 || klass.middleware.length === 0) {
    return klass;
  }
  for (const middleware of klass.middleware) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  middleware_loader_entry_default2 as default
};
/**
 * @license
 * @builder.io/qwik 1.5.2
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
/**
* @license
* @builder.io/qwik/server 1.5.2
* Copyright Builder.io, Inc. All Rights Reserved.
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
*/
//# sourceMappingURL=oy0v2oho5zh.js.map
