var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a2, b) => (typeof require !== "undefined" ? require : a2)[b]
}) : x2)(function(x2) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
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

// ../.wrangler/tmp/bundle-rBNcfZ/checked-fetch.js
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
var urls;
var init_checked_fetch = __esm({
  "../.wrangler/tmp/bundle-rBNcfZ/checked-fetch.js"() {
    "use strict";
    urls = /* @__PURE__ */ new Set();
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        const [request, init] = argArray;
        checkURL(request, init);
        return Reflect.apply(target, thisArg, argArray);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_checked_fetch();
    init_modules_watch_stub();
  }
});

// ../node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../node_modules/isomorphic-form-data/lib/browser.js
var require_browser = __commonJS({
  "../node_modules/isomorphic-form-data/lib/browser.js"(exports, module) {
    init_checked_fetch();
    init_modules_watch_stub();
    module.exports = window.FormData;
  }
});

// ../node_modules/cross-fetch/dist/browser-ponyfill.js
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

// ../.wrangler/tmp/bundle-rBNcfZ/middleware-loader.entry.ts
init_checked_fetch();
init_modules_watch_stub();

// ../.wrangler/tmp/bundle-rBNcfZ/middleware-insertion-facade.js
init_checked_fetch();
init_modules_watch_stub();

// _worker.js
init_checked_fetch();
init_modules_watch_stub();

// ../server/entry.cloudflare-pages.js
init_checked_fetch();
init_modules_watch_stub();

// ../server/@qwik-city-not-found-paths.js
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

// ../server/@qwik-city-static-paths.js
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

// ../server/q-DA23I5bV.js
init_checked_fetch();
init_modules_watch_stub();
var yt = (t) => t && typeof t.nodeType == "number";
var fs = (t) => t.nodeType === 9;
var St = (t) => t.nodeType === 1;
var vt = (t) => {
  const e = t.nodeType;
  return e === 1 || e === 111;
};
var Po = (t) => {
  const e = t.nodeType;
  return e === 1 || e === 111 || e === 3;
};
var et = (t) => t.nodeType === 111;
var on = (t) => t.nodeType === 3;
var te = (t) => t.nodeType === 8;
var Et = (t, ...e) => cn(false, t, ...e);
var ds = (t, ...e) => {
  throw cn(false, t, ...e);
};
var rn = (t, ...e) => cn(true, t, ...e);
var at = () => {
};
var zo = (t) => t;
var cn = (t, e, ...n) => {
  const s = e instanceof Error ? e : new Error(e);
  return console.error("%cQWIK ERROR", "", s.message, ...zo(n), s.stack), t && setTimeout(() => {
    throw s;
  }, 0), s;
};
var Te = (t) => `Code(${t}) https://github.com/BuilderIO/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8 + t}`;
var P = (t, ...e) => {
  const n = Te(t, ...e);
  return rn(n, ...e);
};
var Lo = () => ({ isServer: true, importSymbol(t, e, n) {
  var r;
  {
    const i = _o(n), c = (r = globalThis.__qwik_reg_symbols) == null ? void 0 : r.get(i);
    if (c)
      return c;
  }
  if (!e)
    throw P(31, n);
  if (!t)
    throw P(30, e, n);
  const s = Oo(t.ownerDocument, t, e).toString(), o = new URL(s);
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
var Oo = (t, e, n) => {
  const s = t.baseURI, o = new URL(e.getAttribute("q:base") ?? s, s);
  return new URL(n, o);
};
var $n = Lo();
var m$ = (t) => $n = t;
var qe = () => $n;
var nt = () => $n.isServer;
var ee = (t) => {
  const e = Object.getPrototypeOf(t);
  return e === Object.prototype || e === null;
};
var ct = (t) => !!t && typeof t == "object";
var A = (t) => Array.isArray(t);
var ut = (t) => typeof t == "string";
var V = (t) => typeof t == "function";
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
var ln = (t) => t.some(L) ? Promise.all(t) : t;
var kt = (t) => t.length > 0 ? Promise.all(t) : t;
var ps = (t) => t != null;
var Co = (t) => new Promise((e) => {
  setTimeout(e, t);
});
var j = [];
var O = {};
var ne = (t) => typeof document < "u" ? document : t.nodeType === 9 ? t : t.ownerDocument;
var J = "q:slot";
var Re = "q:style";
var Je = Symbol("proxy target");
var At = Symbol("proxy flags");
var tt = Symbol("proxy manager");
var M = Symbol("IMMUTABLE");
var ke = "_qc_";
var H = (t, e, n) => t.setAttribute(e, n);
var Y = (t, e) => t.getAttribute(e);
var an = (t) => t.replace(/([A-Z])/g, "-$1").toLowerCase();
var Do = (t) => t.replace(/-./g, (e) => e[1].toUpperCase());
var Fo = /^(on|window:|document:)/;
var hs = "preventdefault:";
var un = (t) => t.endsWith("$") && Fo.test(t);
var fn = (t) => {
  if (t.length === 0)
    return j;
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
var dn = (t, e, n, s) => {
  if (e.endsWith("$"), e = Ge(e.slice(0, -1)), n)
    if (A(n)) {
      const o = n.flat(1 / 0).filter((r) => r != null).map((r) => [e, Hn(r, s)]);
      t.push(...o);
    } else
      t.push([e, Hn(n, s)]);
  return e;
};
var Bn = ["on", "window:on", "document:on"];
var Qo = ["on", "on-window", "on-document"];
var Ge = (t) => {
  let e = "on";
  for (let n = 0; n < Bn.length; n++) {
    const s = Bn[n];
    if (t.startsWith(s)) {
      e = Qo[n], t = t.slice(s.length);
      break;
    }
  }
  return e + ":" + (t = t.startsWith("-") ? an(t.slice(1)) : t.toLowerCase());
};
var Hn = (t, e) => (t.$setContainer$(e), t);
var Wo = (t, e) => {
  const n = t.$element$.attributes, s = [];
  for (let o = 0; o < n.length; o++) {
    const { name: r, value: i } = n.item(o);
    if (r.startsWith("on:") || r.startsWith("on-window:") || r.startsWith("on-document:")) {
      const c = i.split(`
`);
      for (const $3 of c) {
        const l = Oe($3, e);
        l.$capture$ && go(l, t), s.push([r, l]);
      }
    }
  }
  return s;
};
var Uo = (t, e) => {
  gs(ms(t, void 0), e);
};
var Vn = (t, e) => {
  gs(ms(t, "document"), e);
};
var ms = (t, e) => {
  const n = e !== void 0 ? e + ":" : "";
  return Array.isArray(t) ? t.map((s) => `${n}on-${s}`) : `${n}on-${t}`;
};
var gs = (t, e) => {
  if (e) {
    const n = Vs(), s = Q(n.$hostElement$, n.$renderCtx$.$static$.$containerState$);
    typeof t == "string" ? s.li.push([Ge(t), e]) : s.li.push(...t.map((o) => [Ge(o), e])), s.$flags$ |= ht;
  }
};
var Bo = (t, e, n, s) => {
  typeof CustomEvent == "function" && t && t.dispatchEvent(new CustomEvent(e, { detail: n, bubbles: s, composed: s }));
};
var pn = (t, e, n = 0) => e.$proxyMap$.get(t) || (n !== 0 && Me(t, n), se(t, e, void 0));
var se = (t, e, n) => {
  $e(t), e.$proxyMap$.has(t);
  const s = e.$subsManager$.$createManager$(n), o = new Proxy(t, new ys(e, s));
  return e.$proxyMap$.set(t, o), o;
};
var Ae = () => {
  const t = {};
  return Me(t, 2), t;
};
var Me = (t, e) => {
  Object.defineProperty(t, At, { value: e, enumerable: false });
};
var ys = class {
  constructor(e, n) {
    this.$containerState$ = e, this.$manager$ = n;
  }
  deleteProperty(e, n) {
    if (2 & e[At])
      throw P(17);
    return typeof n == "string" && delete e[n] && (this.$manager$.$notifySubs$(A(e) ? void 0 : n), true);
  }
  get(e, n) {
    var l;
    if (typeof n == "symbol")
      return n === Je ? e : n === tt ? this.$manager$ : e[n];
    const s = e[At] ?? 0, o = rt(), r = !!(1 & s), i = e["$$" + n];
    let c, $3;
    if (o && (c = o.$subscriber$), !(2 & s) || n in e && !Ho((l = e[M]) == null ? void 0 : l[n]) || (c = null), i ? ($3 = i.value, c = null) : $3 = e[n], c) {
      const a2 = A(e);
      this.$manager$.$addSub$(c, a2 ? void 0 : n);
    }
    return r ? Vo($3, this.$containerState$) : $3;
  }
  set(e, n, s) {
    if (typeof n == "symbol")
      return e[n] = s, true;
    const o = e[At] ?? 0;
    if (2 & o)
      throw P(17);
    const r = 1 & o ? $e(s) : s;
    if (A(e))
      return e[n] = r, this.$manager$.$notifySubs$(), true;
    const i = e[n];
    return e[n] = r, i !== r && this.$manager$.$notifySubs$(n), true;
  }
  has(e, n) {
    if (n === Je)
      return true;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(e, n) || !(typeof n != "string" || !s.call(e, "$$" + n));
  }
  ownKeys(e) {
    if (!(2 & (e[At] ?? 0))) {
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
var Ho = (t) => t === M || C(t);
var Vo = (t, e) => {
  if (ct(t)) {
    if (Object.isFrozen(t))
      return t;
    const n = $e(t);
    if (n !== t || bo(n))
      return t;
    if (ee(n) || A(n))
      return e.$proxyMap$.get(n) || pn(n, e, 1);
  }
  return t;
};
var Ft = () => {
  const t = Vs(), e = Q(t.$hostElement$, t.$renderCtx$.$static$.$containerState$), n = e.$seq$ || (e.$seq$ = []), s = t.$i$++;
  return { val: n[s], set: (o) => n[s] = o, i: s, iCtx: t, elCtx: e };
};
var $t = (t) => Object.freeze({ id: an(t) });
var lt = (t, e) => {
  const { val: n, set: s, elCtx: o } = Ft();
  if (n !== void 0)
    return;
  (o.$contexts$ || (o.$contexts$ = /* @__PURE__ */ new Map())).set(t.id, e), s(true);
};
var Ne = (t, e) => {
  const { val: n, set: s, iCtx: o, elCtx: r } = Ft();
  if (n !== void 0)
    return n;
  const i = Ss(t, r, o.$renderCtx$.$static$.$containerState$);
  if (typeof e == "function")
    return s(W(void 0, e, i));
  if (i !== void 0)
    return s(i);
  if (e !== void 0)
    return s(e);
  throw P(13, t.id);
};
var Jo = (t, e) => {
  var o;
  let n = t, s = 1;
  for (; n && !((o = n.hasAttribute) != null && o.call(n, "q:container")); ) {
    for (; n = n.previousSibling; )
      if (te(n)) {
        const r = n.__virtual;
        if (r) {
          const i = r[ke];
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
var Go = (t, e) => (t.$parentCtx$ === void 0 && (t.$parentCtx$ = Jo(t.$element$, e)), t.$parentCtx$);
var Ss = (t, e, n) => {
  var r;
  const s = t.id;
  if (!e)
    return;
  let o = e;
  for (; o; ) {
    const i = (r = o.$contexts$) == null ? void 0 : r.get(s);
    if (i)
      return i;
    o = Go(o, n);
  }
};
var Xo = $t("qk-error");
var hn = (t, e, n) => {
  const s = G(e);
  if (nt())
    throw t;
  {
    const o = Ss(Xo, s, n.$static$.$containerState$);
    if (o === void 0)
      throw t;
    o.error = t;
  }
};
var Ko = /* @__PURE__ */ new Set(["animationIterationCount", "aspectRatio", "borderImageOutset", "borderImageSlice", "borderImageWidth", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "columns", "flex", "flexGrow", "flexShrink", "gridArea", "gridRow", "gridRowEnd", "gridRowStart", "gridColumn", "gridColumnEnd", "gridColumnStart", "fontWeight", "lineClamp", "lineHeight", "opacity", "order", "orphans", "scale", "tabSize", "widows", "zIndex", "zoom", "MozAnimationIterationCount", "MozBoxFlex", "msFlex", "msFlexPositive", "WebkitAnimationIterationCount", "WebkitBoxFlex", "WebkitBoxOrdinalGroup", "WebkitColumnCount", "WebkitColumns", "WebkitFlex", "WebkitFlexGrow", "WebkitFlexShrink", "WebkitLineClamp"]);
var Yo = (t) => Ko.has(t);
var fe = (t, e, n) => {
  e.$flags$ &= ~Ot, e.$flags$ |= Tn, e.$slots$ = [], e.li.length = 0;
  const s = e.$element$, o = e.$componentQrl$, r = e.$props$, i = K(t.$static$.$locale$, s, void 0, "qRender"), c = i.$waitOn$ = [], $3 = oe(t);
  $3.$cmpCtx$ = e, $3.$slotCtx$ = void 0, i.$subscriber$ = [0, s], i.$renderCtx$ = t, o.$setContainer$(t.$static$.$containerState$.$containerEl$);
  const l = o.getFn(i);
  return Ie(() => l(r), (a2) => I(nt() ? I(kt(c), () => I(Or(t.$static$.$containerState$, t), () => kt(c))) : kt(c), () => {
    var f2;
    if (e.$flags$ & Ot) {
      if (!(n && n > 100))
        return fe(t, e, n ? n + 1 : 1);
      at(`Infinite loop detected. Element: ${(f2 = e.$componentQrl$) == null ? void 0 : f2.$symbol$}`);
    }
    return { node: a2, rCtx: $3 };
  }), (a2) => {
    var f2;
    if (a2 === Ys) {
      if (!(n && n > 100))
        return I(kt(c), () => fe(t, e, n ? n + 1 : 1));
      at(`Infinite loop detected. Element: ${(f2 = e.$componentQrl$) == null ? void 0 : f2.$symbol$}`);
    }
    return hn(a2, s, t), { node: Sn, rCtx: $3 };
  });
};
var vs = (t, e) => ({ $static$: { $doc$: t, $locale$: e.$serverData$.locale, $containerState$: e, $hostElements$: /* @__PURE__ */ new Set(), $operations$: [], $postOperations$: [], $roots$: [], $addSlots$: [], $rmSlots$: [], $visited$: [] }, $cmpCtx$: null, $slotCtx$: void 0 });
var oe = (t) => ({ $static$: t.$static$, $cmpCtx$: t.$cmpCtx$, $slotCtx$: t.$slotCtx$ });
var mn = (t, e) => {
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
          s != null && (n.startsWith("--") ? e.push(n + ":" + s) : e.push(an(n) + ":" + Zo(n, s)));
        }
      return e.join(";");
    }
  }
  return String(t);
};
var Zo = (t, e) => typeof e != "number" || e === 0 || Yo(t) ? e : e + "px";
var Jt = (t) => mt(t.$static$.$containerState$.$elementIndex$++);
var bs = (t, e) => {
  const n = Jt(t);
  e.$id$ = n;
};
var Gt = (t) => C(t) ? Gt(t.value) : t == null || typeof t == "boolean" ? "" : String(t);
function ws(t) {
  return t.startsWith("aria-");
}
var Es = (t, e) => !!e.key && (!Tt(t) || !V(t.type) && t.key != e.key);
var D = "dangerouslySetInnerHTML";
var jo = (t, e = 0) => {
  for (let n = 0; n < t.length; n++)
    e = (e << 5) - e + t.charCodeAt(n), e |= 0;
  return Number(Math.abs(e)).toString(36);
};
var tr = (t, e) => `${jo(t.$hash$)}-${e}`;
var er = (t) => "\u2B50\uFE0F" + t;
var xs = (t) => {
  const e = t.join("|");
  if (e.length > 0)
    return e;
};
var _s;
var ue = "<!--qkssr-f-->";
var Ts = class {
  constructor(e) {
    this.nodeType = e, this[_s] = null;
  }
};
_s = ke;
var nr = () => new Ts(9);
var g$ = async (t, e) => {
  var m, y, b;
  const n = e.containerTagName, s = pe(1).$element$, o = Rn(s, e.base ?? "/");
  o.$serverData$.locale = (m = e.serverData) == null ? void 0 : m.locale;
  const r = nr(), i = vs(r, o), c = e.beforeContent ?? [], $3 = { $static$: { $contexts$: [], $headNodes$: n === "html" ? c : [], $locale$: (y = e.serverData) == null ? void 0 : y.locale, $textNodes$: /* @__PURE__ */ new Map() }, $projectedChildren$: void 0, $projectedCtxs$: void 0, $invocationContext$: void 0 };
  let l = "ssr";
  e.containerAttributes["q:render"] && (l = `${e.containerAttributes["q:render"]}-${l}`);
  const a2 = { ...e.containerAttributes, "q:container": "paused", "q:version": "1.5.2", "q:render": l, "q:base": e.base, "q:locale": (b = e.serverData) == null ? void 0 : b.locale, "q:manifest-hash": e.manifestHash }, f2 = n === "html" ? [t] : [c, t];
  n !== "html" && (a2.class = "qc\u{1F4E6}" + (a2.class ? " " + a2.class : "")), e.serverData && (o.$serverData$ = e.serverData);
  const d = xt(n, null, a2, f2, Ot | ht, null);
  o.$hostsRendering$ = /* @__PURE__ */ new Set(), await Promise.resolve().then(() => sr(d, i, $3, e.stream, o, e));
};
var sr = async (t, e, n, s, o, r) => {
  const i = r.beforeClose;
  return await yn(t, e, n, s, 0, i ? (c) => {
    const $3 = i(n.$static$.$contexts$, o, false, n.$static$.$textNodes$);
    return X($3, e, n, c, 0, void 0);
  } : void 0), e;
};
var or = async (t, e, n, s, o) => {
  s.write(ue);
  const r = t.props.children;
  let i;
  if (V(r)) {
    const c = r({ write($3) {
      s.write($3), s.write(ue);
    } });
    if (L(c))
      return c;
    i = c;
  } else
    i = r;
  for await (const c of i)
    await X(c, e, n, s, o, void 0), s.write(ue);
};
var qs = (t, e, n, s, o, r, i, c) => {
  var b;
  const $3 = t.props, l = $3["q:renderFn"];
  if (l)
    return e.$componentQrl$ = l, cr(s, o, r, e, t, i, c);
  let a2 = "<!--qv" + ir($3);
  const f2 = "q:s" in $3, d = t.key != null ? String(t.key) : null;
  f2 && ((b = s.$cmpCtx$) == null || b.$id$, a2 += " q:sref=" + s.$cmpCtx$.$id$), d != null && (a2 += " q:key=" + d), a2 += "-->", r.write(a2);
  const m = t.props[D];
  if (m)
    return r.write(m), void r.write(We);
  if (n)
    for (const u of n)
      gn(u.type, u.props, r);
  const y = Is(t.children, s, o, r, i);
  return I(y, () => {
    var p;
    if (!f2 && !c)
      return void r.write(We);
    let u;
    if (f2) {
      const S2 = (p = o.$projectedChildren$) == null ? void 0 : p[d];
      if (S2) {
        const [g, h] = o.$projectedCtxs$, w = oe(g);
        w.$slotCtx$ = e, o.$projectedChildren$[d] = void 0, u = X(S2, w, h, r, i);
      }
    }
    return c && (u = I(u, () => c(r))), I(u, () => {
      r.write(We);
    });
  });
};
var We = "<!--/qv-->";
var rr = (t) => {
  let e = "";
  for (const n in t) {
    if (n === D)
      continue;
    const s = t[n];
    s != null && (e += " " + (s === "" ? n : n + '="' + s + '"'));
  }
  return e;
};
var ir = (t) => {
  let e = "";
  for (const n in t) {
    if (n === "children" || n === D)
      continue;
    const s = t[n];
    s != null && (e += " " + (s === "" ? n : n + "=" + s));
  }
  return e;
};
var gn = (t, e, n) => {
  if (n.write("<" + t + rr(e) + ">"), As[t])
    return;
  const s = e[D];
  s != null && n.write(s), n.write(`</${t}>`);
};
var cr = (t, e, n, s, o, r, i) => (lr(t, s, o.props.props), I(fe(t, s), (c) => {
  const $3 = s.$element$, l = c.rCtx, a2 = K(e.$static$.$locale$, $3, void 0);
  a2.$subscriber$ = [0, $3], a2.$renderCtx$ = l;
  const f2 = { $static$: e.$static$, $projectedChildren$: $r(o.children, e), $projectedCtxs$: [t, e], $invocationContext$: a2 }, d = [];
  if (s.$appendStyles$) {
    const u = 4 & r ? e.$static$.$headNodes$ : d;
    for (const p of s.$appendStyles$)
      u.push(xt("style", { [Re]: p.styleId, [D]: p.content, hidden: "" }, null, null, 0, null));
  }
  const m = Jt(t), y = s.$scopeIds$ ? xs(s.$scopeIds$) : void 0, b = ft(o.type, { "q:sstyle": y, "q:id": m, children: c.node }, 0, o.key);
  return s.$id$ = m, e.$static$.$contexts$.push(s), qs(b, s, d, l, f2, n, r, (u) => {
    if (s.$flags$ & ht) {
      const g = pe(1), h = g.li;
      h.push(...s.li), s.$flags$ &= ~ht, g.$id$ = Jt(t);
      const w = { type: "placeholder", hidden: "", "q:id": g.$id$ };
      e.$static$.$contexts$.push(g);
      const E3 = fn(h);
      for (const x2 of E3) {
        const v3 = Ms(x2[0]);
        w[v3] = Cn(x2[1], t.$static$.$containerState$, g), Xe(v3, t.$static$.$containerState$);
      }
      gn("script", w, u);
    }
    const p = f2.$projectedChildren$;
    let S2;
    if (p) {
      const g = Object.keys(p).map((x2) => {
        const v3 = p[x2];
        if (v3)
          return xt("q:template", { [J]: x2 || true, hidden: true, "aria-hidden": "true" }, null, v3, 0, null);
      }), [h, w] = f2.$projectedCtxs$, E3 = oe(h);
      E3.$slotCtx$ = s, S2 = X(g, E3, w, u, 0, void 0);
    }
    return i ? I(S2, () => i(u)) : S2;
  });
}));
var $r = (t, e) => {
  const n = Rs(t, e);
  if (n === null)
    return;
  const s = {};
  for (const o of n) {
    let r = "";
    Tt(o) && (r = o.props[J] || ""), (s[r] || (s[r] = [])).push(o);
  }
  return s;
};
var pe = (t) => {
  const e = new Ts(t);
  return ze(e);
};
var yn = (t, e, n, s, o, r) => {
  var l;
  const i = t.type, c = e.$cmpCtx$;
  if (typeof i == "string") {
    const a2 = t.key, f2 = t.props, d = t.immutableProps || O, m = pe(1), y = m.$element$, b = i === "head";
    let u = "<" + i, p = false, S2 = false, g = "", h = null;
    const w = (v3, _3, q3) => {
      if (v3 === "ref")
        return void (_3 !== void 0 && (kn(_3, y), S2 = true));
      if (un(v3))
        return void dn(m.li, v3, _3, void 0);
      if (C(_3) && (_3 = it(_3, q3 ? [1, y, _3, c.$element$, v3] : [2, c.$element$, _3, y, v3]), p = true), v3 === D)
        return void (h = _3);
      let k2;
      v3.startsWith(hs) && Xe(v3.slice(15), e.$static$.$containerState$);
      const R2 = v3 === "htmlFor" ? "for" : v3;
      R2 === "class" || R2 === "className" ? g = de(_3) : R2 === "style" ? k2 = Pe(_3) : ws(R2) || R2 === "draggable" || R2 === "spellcheck" ? (k2 = _3 != null ? String(_3) : null, _3 = k2) : k2 = _3 === false || _3 == null ? null : String(_3), k2 != null && (R2 === "value" && i === "textarea" ? h = Ke(k2) : hr(R2) || (u += " " + (_3 === true ? R2 : R2 + '="' + Ue(k2) + '"')));
    };
    for (const v3 in f2) {
      let _3 = false, q3;
      v3 in d ? (_3 = true, q3 = d[v3], q3 === M && (q3 = f2[v3])) : q3 = f2[v3], w(v3, q3, _3);
    }
    for (const v3 in d) {
      if (v3 in f2)
        continue;
      const _3 = d[v3];
      _3 !== M && w(v3, _3, true);
    }
    const E3 = m.li;
    if (c) {
      if ((l = c.$scopeIds$) != null && l.length) {
        const v3 = c.$scopeIds$.join(" ");
        g = g ? `${v3} ${g}` : v3;
      }
      c.$flags$ & ht && (E3.push(...c.li), c.$flags$ &= ~ht);
    }
    if (b && (o |= 1), i in ar && (o |= 16), i in ur && (o |= 8), g && (u += ' class="' + Ue(g) + '"'), E3.length > 0) {
      const v3 = fn(E3), _3 = !!(16 & o);
      for (const q3 of v3) {
        const k2 = _3 ? Ms(q3[0]) : q3[0];
        u += " " + k2 + '="' + Cn(q3[1], e.$static$.$containerState$, m) + '"', Xe(k2, e.$static$.$containerState$);
      }
    }
    if (a2 != null && (u += ' q:key="' + Ue(a2) + '"'), S2 || p || E3.length > 0) {
      if (S2 || p || mr(E3)) {
        const v3 = Jt(e);
        u += ' q:id="' + v3 + '"', m.$id$ = v3;
      }
      n.$static$.$contexts$.push(m);
    }
    if (1 & o && (u += " q:head"), u += ">", s.write(u), i in As)
      return;
    if (h != null)
      return s.write(String(h)), void s.write(`</${i}>`);
    i === "html" ? o |= 4 : o &= -5, 2 & t.flags && (o |= 1024);
    const x2 = X(t.children, e, n, s, o);
    return I(x2, () => {
      if (b) {
        for (const v3 of n.$static$.$headNodes$)
          gn(v3.type, v3.props, s);
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
    const a2 = pe(111);
    return e.$slotCtx$ ? (a2.$parentCtx$ = e.$slotCtx$, a2.$realParentCtx$ = e.$cmpCtx$) : a2.$parentCtx$ = e.$cmpCtx$, c && c.$flags$ & qn && gr(c, a2), qs(t, a2, void 0, e, n, s, o, r);
  }
  if (i === Ns)
    return void s.write(t.props.data);
  if (i === Ps)
    return or(t, e, n, s, o);
  const $3 = W(n.$invocationContext$, i, t.props, t.key, t.flags, t.dev);
  return Es($3, t) ? yn(ft(dt, { children: $3 }, 0, t.key), e, n, s, o, r) : X($3, e, n, s, o, r);
};
var X = (t, e, n, s, o, r) => {
  var i;
  if (t != null && typeof t != "boolean") {
    if (!ut(t) && typeof t != "number") {
      if (Tt(t))
        return yn(t, e, n, s, o, r);
      if (A(t))
        return Is(t, e, n, s, o);
      if (C(t)) {
        const c = 8 & o, $3 = (i = e.$cmpCtx$) == null ? void 0 : i.$element$;
        let l;
        if ($3) {
          if (!c) {
            const a2 = Jt(e);
            if (l = it(t, 1024 & o ? [3, "#" + a2, t, "#" + a2] : [4, $3, t, "#" + a2]), ut(l)) {
              const f2 = Gt(l);
              n.$static$.$textNodes$.set(f2, a2);
            }
            return s.write(`<!--t=${a2}-->`), X(l, e, n, s, o, r), void s.write("<!---->");
          }
          l = W(n.$invocationContext$, () => t.value);
        }
        return void s.write(Ke(Gt(l)));
      }
      return L(t) ? (s.write(ue), t.then((c) => X(c, e, n, s, o, r))) : void at();
    }
    s.write(Ke(String(t)));
  }
};
var Is = (t, e, n, s, o) => {
  if (t == null)
    return;
  if (!A(t))
    return X(t, e, n, s, o);
  const r = t.length;
  if (r === 1)
    return X(t[0], e, n, s, o);
  if (r === 0)
    return;
  let i = 0;
  const c = [];
  return t.reduce(($3, l, a2) => {
    const f2 = [];
    c.push(f2);
    const d = X(l, e, n, $3 ? { write(m) {
      i === a2 ? s.write(m) : f2.push(m);
    } } : s, o);
    if ($3 || L(d)) {
      const m = () => {
        i++, c.length > i && c[i].forEach((y) => s.write(y));
      };
      return L(d) ? $3 ? Promise.all([d, $3]).then(m) : d.then(m) : $3.then(m);
    }
    i++;
  }, void 0);
};
var Rs = (t, e) => {
  if (t == null)
    return null;
  const n = ks(t, e), s = A(n) ? n : [n];
  return s.length === 0 ? null : s;
};
var ks = (t, e) => {
  if (t == null)
    return null;
  if (A(t))
    return t.flatMap((n) => ks(n, e));
  if (Tt(t) && V(t.type) && t.type !== Ns && t.type !== Ps && t.type !== dt) {
    const n = W(e.$invocationContext$, t.type, t.props, t.key, t.flags);
    return Rs(n, e);
  }
  return t;
};
var lr = (t, e, n) => {
  const s = Object.keys(n), o = Ae();
  if (e.$props$ = se(o, t.$static$.$containerState$), s.length === 0)
    return;
  const r = o[M] = n[M] ?? O;
  for (const i of s)
    i !== "children" && i !== J && (C(r[i]) ? o["$$" + i] = r[i] : o[i] = n[i]);
};
var ar = { head: true, style: true, script: true, link: true, meta: true };
var ur = { title: true, style: true, script: true, noframes: true, textarea: true };
var As = { area: true, base: true, basefont: true, bgsound: true, br: true, col: true, embed: true, frame: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
var fr = /[&<>]/g;
var dr = /[&"]/g;
var Xe = (t, e) => {
  e.$events$.add(js(t));
};
var Ke = (t) => t.replace(fr, (e) => {
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
var Ue = (t) => t.replace(dr, (e) => {
  switch (e) {
    case "&":
      return "&amp;";
    case '"':
      return "&quot;";
    default:
      return "";
  }
});
var pr = /[>/="'\u0009\u000a\u000c\u0020]/;
var hr = (t) => pr.test(t);
var mr = (t) => t.some((e) => e[1].$captureRef$ && e[1].$captureRef$.length > 0);
var gr = (t, e) => {
  const n = t.$dynamicSlots$ || (t.$dynamicSlots$ = []);
  n.includes(e) || n.push(e);
};
var Ms = (t) => t === "on:qvisible" ? "on-document:qinit" : t;
var y$ = (t, e, n) => new Ze(t, e, n);
var yr = (t) => {
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
    for (const [a2, f2] of Object.entries($3))
      f2 !== M && (delete i[a2], i[a2] = f2);
    return xt(t, null, i, l, n, s);
  }
  const c = new Qt(t, i, null, i.children, n, r);
  return typeof t == "string" && e && delete e.children, c;
};
var v$ = (t, e, n) => {
  const s = n == null ? null : String(n), o = Gs(() => {
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
var Tt = (t) => t instanceof Qt;
var he = (t) => t.children;
var Sn = Symbol("skip render");
var Ns = () => null;
var Ps = () => null;
var vn = (t, e, n) => {
  const s = !(e.$flags$ & Tn), o = e.$element$, r = t.$static$.$containerState$;
  return r.$hostsStaging$.delete(e), r.$subsManager$.$clearSub$(o), I(fe(t, e), (i) => {
    const c = t.$static$, $3 = i.rCtx, l = K(t.$static$.$locale$, o);
    if (c.$hostElements$.add(o), l.$subscriber$ = [0, o], l.$renderCtx$ = $3, s && e.$appendStyles$)
      for (const f2 of e.$appendStyles$)
        qi(c, f2);
    const a2 = pt(i.node, l);
    return I(a2, (f2) => {
      const d = Sr(o, f2), m = bn(e);
      return I(ve($3, m, d, n), () => {
        e.$vdom$ = d;
      });
    });
  });
};
var bn = (t) => (t.$vdom$ || (t.$vdom$ = be(t.$element$)), t.$vdom$);
var ot = class {
  constructor(e, n, s, o, r, i) {
    this.$type$ = e, this.$props$ = n, this.$immutableProps$ = s, this.$children$ = o, this.$flags$ = r, this.$key$ = i, this.$elm$ = null, this.$text$ = "", this.$signal$ = null, this.$id$ = e + (i ? ":" + i : "");
  }
};
var zs = (t, e) => {
  const { key: n, type: s, props: o, children: r, flags: i, immutableProps: c } = t;
  let $3 = "";
  if (ut(s))
    $3 = s;
  else {
    if (s !== dt) {
      if (V(s)) {
        const a2 = W(e, s, o, n, i, t.dev);
        return Es(a2, t) ? zs(ft(dt, { children: a2 }, 0, n), e) : pt(a2, e);
      }
      throw P(25, s);
    }
    $3 = Ct;
  }
  let l = j;
  return r != null ? I(pt(r, e), (a2) => (a2 !== void 0 && (l = A(a2) ? a2 : [a2]), new ot($3, o, c, l, i, n))) : new ot($3, o, c, l, i, n);
};
var Sr = (t, e) => {
  const n = e === void 0 ? j : A(e) ? e : [e], s = new ot(":virtual", {}, null, n, 0, null);
  return s.$elm$ = t, s;
};
var pt = (t, e) => {
  if (t != null && typeof t != "boolean") {
    if (Ls(t)) {
      const n = new ot("#text", O, null, j, 0, null);
      return n.$text$ = String(t), n;
    }
    if (Tt(t))
      return zs(t, e);
    if (C(t)) {
      const n = new ot("#signal", O, null, j, 0, null);
      return n.$signal$ = t, n;
    }
    if (A(t)) {
      const n = ln(t.flatMap((s) => pt(s, e)));
      return I(n, (s) => s.flat(100).filter(ps));
    }
    return L(t) ? t.then((n) => pt(n, e)) : t === Sn ? new ot(":skipRender", O, null, j, 0, null) : void at();
  }
};
var Ls = (t) => ut(t) || typeof t == "number";
var Os = (t) => {
  Y(t, "q:container") === "paused" && (br(t), qr(t));
};
var vr = (t) => {
  const e = ne(t), n = _r(t === e.documentElement ? e.body : t, "type");
  if (n)
    return JSON.parse(Er(n.firstChild.data) || "{}");
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
    const l = In(e);
    l && (i = Wt(l), r = l.ownerDocument);
  }
  const c = So(i, r);
  for (let l = 0; l < s.length; l++) {
    const a2 = s[l];
    ut(a2) && (s[l] = a2 === Ce ? void 0 : c.prepare(a2));
  }
  const $3 = (l) => s[Z(l)];
  for (const l of s)
    Cs(l, $3, c);
  return $3(o);
};
var br = (t) => {
  if (!$i(t))
    return void at();
  const e = t._qwikjson_ ?? vr(t);
  if (t._qwikjson_ = null, !e)
    return void at();
  const n = ne(t), s = xr(t), o = Wt(t), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  let c = null, $3 = 0;
  const l = n.createTreeWalker(t, Zs);
  for (; c = l.nextNode(); ) {
    const u = c.data;
    if ($3 === 0) {
      if (u.startsWith("qv ")) {
        const p = Ir(u);
        p >= 0 && r.set(p, c);
      } else if (u.startsWith("t=")) {
        const p = u.slice(2), S2 = Z(p), g = Tr(c);
        r.set(S2, g), i.set(S2, g.data);
      }
    }
    u === "cq" ? $3++ : u === "/cq" && $3--;
  }
  const a2 = t.getElementsByClassName("qc\u{1F4E6}").length !== 0;
  t.querySelectorAll("[q\\:id]").forEach((u) => {
    if (a2 && u.closest("[q\\:container]") !== t)
      return;
    const p = Y(u, "q:id"), S2 = Z(p);
    r.set(S2, u);
  });
  const f2 = So(o, n), d = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Set(), y = (u) => (typeof u == "string" && u.length > 0, d.has(u) ? d.get(u) : b(u)), b = (u) => {
    if (u.startsWith("#")) {
      const w = u.slice(1), E3 = Z(w);
      r.has(E3);
      const x2 = r.get(E3);
      if (te(x2)) {
        if (!x2.isConnected)
          return void d.set(u, void 0);
        const v3 = ce(x2);
        return d.set(u, v3), Q(v3, o), v3;
      }
      return St(x2) ? (d.set(u, x2), Q(x2, o), x2) : (d.set(u, x2), x2);
    }
    if (u.startsWith("@")) {
      const w = u.slice(1), E3 = Z(w);
      return s[E3];
    }
    if (u.startsWith("*")) {
      const w = u.slice(1), E3 = Z(w);
      r.has(E3);
      const x2 = i.get(E3);
      return d.set(u, x2), x2;
    }
    const p = Z(u), S2 = e.objs;
    S2.length > p;
    let g = S2[p];
    ut(g) && (g = g === Ce ? void 0 : f2.prepare(g));
    let h = g;
    for (let w = u.length - 1; w >= 0; w--) {
      const E3 = Mc[u[w]];
      if (!E3)
        break;
      h = E3(h, o);
    }
    return d.set(u, h), Ls(g) || m.has(p) || (m.add(p), wr(g, p, e.subs, y, o, f2), Cs(g, y, f2)), h;
  };
  o.$elementIndex$ = 1e5, o.$pauseCtx$ = { getObject: y, meta: e.ctx, refs: e.refs }, H(t, "q:container", "resumed"), Bo(t, "qresume", void 0, true);
};
var wr = (t, e, n, s, o, r) => {
  const i = n[e];
  if (i) {
    const c = [];
    let $3 = 0;
    for (const l of i)
      if (l.startsWith("_"))
        $3 = parseInt(l.slice(1), 10);
      else {
        const a2 = Cc(l, s);
        a2 && c.push(a2);
      }
    if ($3 > 0 && Me(t, $3), !r.subs(t, c)) {
      const l = o.$proxyMap$.get(t);
      l ? F(l).$addSubs$(c) : se(t, o, c);
    }
  }
};
var Cs = (t, e, n) => {
  if (!n.fill(t, e) && t && typeof t == "object") {
    if (A(t))
      for (let s = 0; s < t.length; s++)
        t[s] = e(t[s]);
    else if (ee(t))
      for (const s in t)
        t[s] = e(t[s]);
  }
};
var Er = (t) => t.replace(/\\x3C(\/?script)/gi, "<$1");
var xr = (t) => t.qFuncs ?? j;
var _r = (t, e) => {
  let n = t.lastElementChild;
  for (; n; ) {
    if (n.tagName === "SCRIPT" && Y(n, e) === "qwik/json")
      return n;
    n = n.previousElementSibling;
  }
};
var Tr = (t) => {
  const e = t.nextSibling;
  if (on(e))
    return e;
  {
    const n = t.ownerDocument.createTextNode("");
    return t.parentElement.insertBefore(n, t), n;
  }
};
var qr = (t) => {
  t.qwik = { pause: () => Ui(t), state: Wt(t) };
};
var Ir = (t) => {
  const e = t.indexOf("q:id=");
  return e > 0 ? Z(t.slice(e + 5)) : -1;
};
var wn = () => {
  const t = ti();
  let e = t.$qrl$;
  if (e)
    e.$captureRef$;
  else {
    const n = t.$element$, s = In(n);
    e = Oe(decodeURIComponent(String(t.$url$)), s), Os(s);
    const o = Q(n, Wt(s));
    go(e, o);
  }
  return e.$captureRef$;
};
var Rr = (t, e) => {
  try {
    const n = e[0], s = t.$static$;
    switch (n) {
      case 1:
      case 2: {
        let o, r;
        n === 1 ? (o = e[1], r = e[3]) : (o = e[3], r = e[1]);
        const i = G(o);
        if (i == null)
          return;
        const c = e[4], $3 = o.namespaceURI === ie;
        s.$containerState$.$subsManager$.$clearSignal$(e);
        let l = it(e[2], e.slice(0, -1));
        c === "class" ? l = mn(l, G(r)) : c === "style" && (l = Pe(l));
        const a2 = bn(i);
        return c in a2.$props$ && a2.$props$[c] === l ? void 0 : (a2.$props$[c] = l, Mn(s, o, c, l, $3));
      }
      case 3:
      case 4: {
        const o = e[3];
        if (!s.$visited$.includes(o)) {
          s.$containerState$.$subsManager$.$clearSignal$(e);
          const r = void 0;
          let i = it(e[2], e.slice(0, -1));
          const c = Qc();
          Array.isArray(i) && (i = new Qt(dt, {}, null, i, 0, null));
          let $3 = pt(i, r);
          if (L($3))
            Et("Rendering promises in JSX signals is not supported");
          else {
            $3 === void 0 && ($3 = pt("", r));
            const l = eo(o), a2 = kr(e[1]);
            if (t.$cmpCtx$ = Q(a2, t.$static$.$containerState$), l.$type$ == $3.$type$ && l.$key$ == $3.$key$ && l.$id$ == $3.$id$)
              Rt(t, l, $3, 0);
            else {
              const f2 = [], d = l.$elm$, m = bt(t, $3, 0, f2);
              f2.length && Et("Rendering promises in JSX signals is not supported"), c[3] = m, Nt(t.$static$, o.parentElement, m, d), d && Pn(s, d);
            }
          }
        }
      }
    }
  } catch {
  }
};
function kr(t) {
  for (; t; ) {
    if (vt(t))
      return t;
    t = t.parentElement;
  }
  throw new Error("Not found");
}
var Ar = (t, e) => {
  if (t[0] === 0) {
    const n = t[1];
    xn(n) ? Ds(n, e) : Mr(n, e);
  } else
    Nr(t, e);
};
var Mr = (t, e) => {
  const n = nt();
  n || Os(e.$containerEl$);
  const s = Q(t, e);
  if (s.$componentQrl$, !(s.$flags$ & Ot))
    if (s.$flags$ |= Ot, e.$hostsRendering$ !== void 0)
      e.$hostsStaging$.add(s);
    else {
      if (n)
        return void at();
      e.$hostsNext$.add(s), En(e);
    }
};
var Nr = (t, e) => {
  const n = e.$hostsRendering$ !== void 0;
  e.$opsNext$.add(t), n || En(e);
};
var Ds = (t, e) => {
  t.$flags$ & _t || (t.$flags$ |= _t, e.$hostsRendering$ !== void 0 ? e.$taskStaging$.add(t) : (e.$taskNext$.add(t), En(e)));
};
var En = (t) => (t.$renderPromise$ === void 0 && (t.$renderPromise$ = qe().nextTick(() => Fs(t))), t.$renderPromise$);
var Pr = () => {
  const [t] = wn();
  Ds(t, Wt(In(t.$el$)));
};
var Fs = async (t) => {
  const e = t.$containerEl$, n = ne(e);
  try {
    const s = vs(n, t), o = s.$static$, r = t.$hostsRendering$ = new Set(t.$hostsNext$);
    t.$hostsNext$.clear(), await Lr(t, s), t.$hostsStaging$.forEach(($3) => {
      r.add($3);
    }), t.$hostsStaging$.clear();
    const i = Array.from(t.$opsNext$);
    t.$opsNext$.clear();
    const c = Array.from(r);
    Dr(c), !t.$styleMoved$ && c.length > 0 && (t.$styleMoved$ = true, (e === n.documentElement ? n.body : e).querySelectorAll("style[q\\:style]").forEach(($3) => {
      t.$styleIds$.add(Y($3, Re)), lo(o, n.head, $3);
    }));
    for (const $3 of c) {
      const l = $3.$element$;
      if (!o.$hostElements$.has(l) && $3.$componentQrl$) {
        l.isConnected, o.$roots$.push($3);
        try {
          await vn(s, $3, zr(l.parentElement));
        } catch (a2) {
          Et(a2);
        }
      }
    }
    return i.forEach(($3) => {
      Rr(s, $3);
    }), o.$operations$.push(...o.$postOperations$), o.$operations$.length === 0 ? (ns(o), void await Jn(t, s)) : (await vi(o), ns(o), Jn(t, s));
  } catch (s) {
    Et(s);
  }
};
var zr = (t) => {
  let e = 0;
  return t && (t.namespaceURI === ie && (e |= B), t.tagName === "HEAD" && (e |= ye)), e;
};
var Jn = async (t, e) => {
  const n = e.$static$.$hostElements$;
  await Cr(t, e, (s, o) => !!(s.$flags$ & Fr) && (!o || n.has(s.$el$))), t.$hostsStaging$.forEach((s) => {
    t.$hostsNext$.add(s);
  }), t.$hostsStaging$.clear(), t.$hostsRendering$ = void 0, t.$renderPromise$ = void 0, t.$hostsNext$.size + t.$taskNext$.size + t.$opsNext$.size > 0 && (t.$renderPromise$ = Fs(t));
};
var Ye = (t) => !!(t.$flags$ & Qs);
var Gn = (t) => !!(t.$flags$ & Ws);
var Lr = async (t, e) => {
  const n = t.$containerEl$, s = [], o = [];
  t.$taskNext$.forEach((r) => {
    Ye(r) && (o.push(I(r.$qrl$.$resolveLazy$(n), () => r)), t.$taskNext$.delete(r)), Gn(r) && (s.push(I(r.$qrl$.$resolveLazy$(n), () => r)), t.$taskNext$.delete(r));
  });
  do
    if (t.$taskStaging$.forEach((r) => {
      Ye(r) ? o.push(I(r.$qrl$.$resolveLazy$(n), () => r)) : Gn(r) ? s.push(I(r.$qrl$.$resolveLazy$(n), () => r)) : t.$taskNext$.add(r);
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
var Or = (t, e) => {
  const n = t.$containerEl$, s = t.$taskStaging$;
  if (!s.size)
    return;
  const o = [];
  let r = 20;
  const i = () => {
    if (s.forEach((c) => {
      console.error("task", c.$qrl$.$symbol$), Ye(c) && o.push(I(c.$qrl$.$resolveLazy$(n), () => c));
    }), s.clear(), o.length > 0)
      return Promise.all(o).then(async (c) => {
        if (me(c), await Promise.all(c.map(($3) => ge($3, t, e))), o.length = 0, --r && s.size > 0)
          return i();
        r || at(`Infinite task loop detected. Tasks:
${Array.from(s).map(($3) => `  ${$3.$qrl$.$symbol$}`).join(`
`)}`);
      });
  };
  return i();
};
var Cr = async (t, e, n) => {
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
var Dr = (t) => {
  t.sort((e, n) => 2 & e.$element$.compareDocumentPosition(Ee(n.$element$)) ? 1 : -1);
};
var me = (t) => {
  const e = nt();
  t.sort((n, s) => e || n.$el$ === s.$el$ ? n.$index$ < s.$index$ ? -1 : 1 : 2 & n.$el$.compareDocumentPosition(Ee(s.$el$)) ? 1 : -1);
};
var Fr = 1;
var Qs = 2;
var Ws = 4;
var _t = 16;
var Qr = (t, e) => {
  const { val: n, set: s, iCtx: o, i: r, elCtx: i } = Ft();
  if (n)
    return;
  const c = o.$renderCtx$.$static$.$containerState$, $3 = new _n(_t | Qs, r, i.$element$, t, void 0);
  s(true), t.$resolveLazy$(c.$containerEl$), i.$tasks$ || (i.$tasks$ = []), i.$tasks$.push($3), ni(o, () => Bs($3, c, o.$renderCtx$)), nt() && Hr($3, e == null ? void 0 : e.eagerness);
};
var Us = (t) => !!(t.$flags$ & Ws);
var Wr = (t) => !!(8 & t.$flags$);
var ge = async (t, e, n) => (t.$flags$ & _t, Us(t) ? Ur(t, e, n) : Wr(t) ? Br(t, e, n) : Bs(t, e, n));
var Ur = (t, e, n, s) => {
  t.$flags$ &= ~_t, Xt(t);
  const o = K(n.$static$.$locale$, t.$el$, void 0, "qTask"), { $subsManager$: r } = e;
  o.$renderCtx$ = n;
  const i = t.$qrl$.getFn(o, () => {
    r.$clearSub$(t);
  }), c = [], $3 = t.$state$, l = $e($3), a2 = { track: (p, S2) => {
    if (V(p)) {
      const h = K();
      return h.$renderCtx$ = n, h.$subscriber$ = [0, t], W(h, p);
    }
    const g = F(p);
    return g ? g.$addSub$([0, t], S2) : rn(Te(26), p), S2 ? p[S2] : C(p) ? p.value : p;
  }, cleanup(p) {
    c.push(p);
  }, cache(p) {
    let S2 = 0;
    S2 = p === "immutable" ? 1 / 0 : p, $3._cache = S2;
  }, previous: l._resolved };
  let f2, d, m = false;
  const y = (p, S2) => !m && (m = true, p ? (m = true, $3.loading = false, $3._state = "resolved", $3._resolved = S2, $3._error = void 0, f2(S2)) : (m = true, $3.loading = false, $3._state = "rejected", $3._error = S2, d(S2)), true);
  W(o, () => {
    $3._state = "pending", $3.loading = !nt(), $3.value = new Promise((p, S2) => {
      f2 = p, d = S2;
    });
  }), t.$destroy$ = Fe(() => {
    m = true, c.forEach((p) => p());
  });
  const b = Ie(() => I(s, () => i(a2)), (p) => {
    y(true, p);
  }, (p) => {
    y(false, p);
  }), u = l._timeout;
  return u > 0 ? Promise.race([b, Co(u).then(() => {
    y(false, new Error("timeout")) && Xt(t);
  })]) : b;
};
var Bs = (t, e, n) => {
  t.$flags$ &= ~_t, Xt(t);
  const s = t.$el$, o = K(n.$static$.$locale$, s, void 0, "qTask");
  o.$renderCtx$ = n;
  const { $subsManager$: r } = e, i = t.$qrl$.getFn(o, () => {
    r.$clearSub$(t);
  }), c = [];
  t.$destroy$ = Fe(() => {
    c.forEach((l) => l());
  });
  const $3 = { track: (l, a2) => {
    if (V(l)) {
      const d = K();
      return d.$subscriber$ = [0, t], W(d, l);
    }
    const f2 = F(l);
    return f2 ? f2.$addSub$([0, t], a2) : rn(Te(26), l), a2 ? l[a2] : C(l) ? l.value : l;
  }, cleanup(l) {
    c.push(l);
  } };
  return Ie(() => i($3), (l) => {
    V(l) && c.push(l);
  }, (l) => {
    hn(l, s, n);
  });
};
var Br = (t, e, n) => {
  t.$state$, t.$flags$ &= ~_t, Xt(t);
  const s = t.$el$, o = K(n.$static$.$locale$, s, void 0, "qComputed");
  o.$subscriber$ = [0, t], o.$renderCtx$ = n;
  const { $subsManager$: r } = e, i = t.$qrl$.getFn(o, () => {
    r.$clearSub$(t);
  });
  return Ie(i, (c) => Gs(() => {
    const $3 = t.$state$;
    $3[Kt] &= ~Ks, $3.untrackedValue = c, $3[tt].$notifySubs$();
  }), (c) => {
    hn(c, s, n);
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
var Hs = (t) => {
  32 & t.$flags$ ? (t.$flags$ &= -33, (0, t.$qrl$)()) : Xt(t);
};
var Hr = (t, e) => {
  e === "visible" || e === "intersection-observer" ? Uo("qvisible", Be(t)) : e === "load" || e === "document-ready" ? Vn("qinit", Be(t)) : e !== "idle" && e !== "document-idle" || Vn("qidle", Be(t));
};
var Be = (t) => {
  const e = t.$qrl$;
  return Qe(e.$chunk$, "_hW", Pr, null, null, [t], e.$symbol$);
};
var xn = (t) => ct(t) && t instanceof _n;
var Vr = (t, e) => {
  let n = `${mt(t.$flags$)} ${mt(t.$index$)} ${e(t.$qrl$)} ${e(t.$el$)}`;
  return t.$state$ && (n += ` ${e(t.$state$)}`), n;
};
var Jr = (t) => {
  const [e, n, s, o, r] = t.split(" ");
  return new _n(Z(e), Z(n), o, s, r);
};
var _n = class {
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
var Ot = 1;
var ht = 2;
var Tn = 4;
var qn = 8;
var G = (t) => t[ke];
var Q = (t, e) => {
  const n = G(t);
  if (n)
    return n;
  const s = ze(t), o = Y(t, "q:id");
  if (o) {
    const r = e.$pauseCtx$;
    if (s.$id$ = o, r) {
      const { getObject: i, meta: c, refs: $3 } = r;
      if (Gr(t)) {
        const l = $3[o];
        l && (s.$refMap$ = l.split(" ").map(i), s.li = Wo(s, e.$containerEl$));
      } else {
        const l = t.getAttribute("q:sstyle");
        s.$scopeIds$ = l ? l.split("|") : null;
        const a2 = c[o];
        if (a2) {
          const f2 = a2.s, d = a2.h, m = a2.c, y = a2.w;
          if (f2 && (s.$seq$ = f2.split(" ").map(i)), y && (s.$tasks$ = y.split(" ").map(i)), m) {
            s.$contexts$ = /* @__PURE__ */ new Map();
            for (const b of m.split(" ")) {
              const [u, p] = b.split("=");
              s.$contexts$.set(u, i(p));
            }
          }
          if (d) {
            const [b, u] = d.split(" ");
            if (s.$flags$ = Tn, b && (s.$componentQrl$ = i(b)), u) {
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
  const e = {}, n = qt(t);
  for (const s in n)
    s.startsWith("$$") && (e[s.slice(2)] = n[s]);
  return e;
};
var ze = (t) => {
  const e = { $flags$: 0, $id$: "", $element$: t, $refMap$: [], li: [], $tasks$: null, $seq$: null, $slots$: null, $scopeIds$: null, $appendStyles$: null, $props$: null, $vdom$: null, $componentQrl$: null, $contexts$: null, $dynamicSlots$: null, $parentCtx$: void 0, $realParentCtx$: void 0 };
  return t[ke] = e, e;
};
var Yr = (t, e) => {
  var n;
  (n = t.$tasks$) == null || n.forEach((s) => {
    e.$clearSub$(s), Hs(s);
  }), t.$componentQrl$ = null, t.$seq$ = null, t.$tasks$ = null;
};
var Pt;
function Zr(t) {
  if (Pt === void 0) {
    const e = rt();
    if (e && e.$locale$)
      return e.$locale$;
    if (t !== void 0)
      return t;
    throw new Error("Reading `locale` outside of context.");
  }
  return Pt;
}
function Xn(t, e) {
  const n = Pt;
  try {
    return Pt = t, e();
  } finally {
    Pt = n;
  }
}
function jr(t) {
  Pt = t;
}
var Ht;
var rt = () => {
  if (!Ht) {
    const t = typeof document < "u" && document && document.__q_context__;
    return t ? A(t) ? document.__q_context__ = Js(t) : t : void 0;
  }
  return Ht;
};
var ti = () => {
  const t = rt();
  if (!t)
    throw P(14);
  return t;
};
var Vs = () => {
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
var Js = ([t, e, n]) => {
  const s = t.closest("[q\\:container]"), o = (s == null ? void 0 : s.getAttribute("q:locale")) || void 0;
  return o && jr(o), K(o, void 0, t, e, n);
};
var K = (t, e, n, s, o) => ({ $url$: o, $i$: 0, $hostElement$: e, $element$: n, $event$: s, $qrl$: void 0, $waitOn$: void 0, $subscriber$: void 0, $renderCtx$: void 0, $locale$: t || (typeof s == "object" && s && "locale" in s ? s.locale : void 0) });
var In = (t) => t.closest("[q\\:container]");
var Gs = (t) => W(void 0, t);
var Kn = K(void 0, void 0, void 0, "qRender");
var it = (t, e) => (Kn.$subscriber$ = e, W(Kn, () => t.value));
var si = (t) => {
  const e = rt();
  return e && e.$hostElement$ && e.$renderCtx$ && (Q(e.$hostElement$, e.$renderCtx$.$static$.$containerState$).$flags$ |= qn), t;
};
var Xs;
var oi = (t, e, n, s) => {
  const o = e.$subsManager$.$createManager$(s);
  return new Yt(t, o, n);
};
var Kt = Symbol("proxy manager");
var ri = 1;
var Ks = 2;
var Ys = Symbol("unassigned signal");
var re = class {
};
var Yt = class extends re {
  constructor(e, n, s) {
    super(), this[Xs] = 0, this.untrackedValue = e, this[tt] = n, this[Kt] = s;
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
    if (this[Kt] & Ks)
      throw Ys;
    const e = (n = rt()) == null ? void 0 : n.$subscriber$;
    return e && this[tt].$addSub$(e), this.untrackedValue;
  }
  set value(e) {
    const n = this[tt];
    n && this.untrackedValue !== e && (this.untrackedValue = e, n.$notifySubs$());
  }
};
Xs = Kt;
var Ze = class extends re {
  constructor(e, n, s) {
    super(), this.$func$ = e, this.$args$ = n, this.$funcStr$ = s;
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
};
var je = class extends re {
  constructor(e, n) {
    super(), this.ref = e, this.prop = n;
  }
  get [tt]() {
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
  const n = qt(t);
  if (n) {
    const i = n["$$" + e];
    if (i)
      return i;
    if (((o = n[M]) == null ? void 0 : o[e]) !== true)
      return new je(t, e);
  }
  const s = (r = t[M]) == null ? void 0 : r[e];
  return C(s) ? s : M;
};
var ci = (t, e) => {
  const n = ii(t, e);
  return n === M ? t[e] : n;
};
var Yn = Symbol("ContainerState");
var Wt = (t) => {
  let e = t[Yn];
  return e || (t[Yn] = e = Rn(t, Y(t, "q:base") ?? "/")), e;
};
var Rn = (t, e) => {
  const n = { $containerEl$: t, $elementIndex$: 0, $styleMoved$: false, $proxyMap$: /* @__PURE__ */ new WeakMap(), $opsNext$: /* @__PURE__ */ new Set(), $taskNext$: /* @__PURE__ */ new Set(), $taskStaging$: /* @__PURE__ */ new Set(), $hostsNext$: /* @__PURE__ */ new Set(), $hostsStaging$: /* @__PURE__ */ new Set(), $styleIds$: /* @__PURE__ */ new Set(), $events$: /* @__PURE__ */ new Set(), $serverData$: {}, $base$: e, $renderPromise$: void 0, $hostsRendering$: void 0, $pauseCtx$: void 0, $subsManager$: null, $inlineFns$: /* @__PURE__ */ new Map() };
  return n.$subsManager$ = Dc(n), n;
};
var kn = (t, e) => {
  if (V(t))
    return t(e);
  if (C(t))
    return nt() ? t.untrackedValue = e : t.value = e;
  throw P(32, t);
};
var Zs = 128;
var $i = (t) => St(t) && t.hasAttribute("q:container");
var mt = (t) => t.toString(36);
var Z = (t) => parseInt(t, 36);
var js = (t) => {
  const e = t.indexOf(":");
  return t && Do(t.slice(e + 1));
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
  const c = li(e, i);
  return c.length > 0 && o.length > 0 ? ai(t, r, c, o, s) : c.length > 0 && o.length === 0 ? An(t.$static$, c, 0, c.length - 1) : o.length > 0 ? so(t, r, null, o, 0, o.length - 1, s) : void 0;
};
var li = (t, e) => {
  const n = t.$children$;
  return n === Se ? t.$children$ = to(t.$elm$, e) : n;
};
var ai = (t, e, n, s, o) => {
  let r = 0, i = 0, c = n.length - 1, $3 = n[0], l = n[c], a2 = s.length - 1, f2 = s[0], d = s[a2], m, y, b;
  const u = [], p = t.$static$;
  for (; r <= c && i <= a2; )
    if ($3 == null)
      $3 = n[++r];
    else if (l == null)
      l = n[--c];
    else if (f2 == null)
      f2 = s[++i];
    else if (d == null)
      d = s[--a2];
    else if ($3.$id$ === f2.$id$)
      u.push(Rt(t, $3, f2, o)), $3 = n[++r], f2 = s[++i];
    else if (l.$id$ === d.$id$)
      u.push(Rt(t, l, d, o)), l = n[--c], d = s[--a2];
    else if ($3.$key$ && $3.$id$ === d.$id$)
      $3.$elm$, l.$elm$, u.push(Rt(t, $3, d, o)), Ti(p, e, $3.$elm$, l.$elm$), $3 = n[++r], d = s[--a2];
    else if (l.$key$ && l.$id$ === f2.$id$)
      $3.$elm$, l.$elm$, u.push(Rt(t, l, f2, o)), Nt(p, e, l.$elm$, $3.$elm$), l = n[--c], f2 = s[++i];
    else {
      if (m === void 0 && (m = Ei(n, r, c)), y = m[f2.$key$], y === void 0) {
        const g = bt(t, f2, o, u);
        Nt(p, e, g, $3 == null ? void 0 : $3.$elm$);
      } else if (b = n[y], b.$type$ !== f2.$type$) {
        const g = bt(t, f2, o, u);
        I(g, (h) => {
          Nt(p, e, h, $3 == null ? void 0 : $3.$elm$);
        });
      } else
        u.push(Rt(t, b, f2, o)), n[y] = void 0, b.$elm$, Nt(p, e, b.$elm$, $3.$elm$);
      f2 = s[++i];
    }
  i <= a2 && u.push(so(t, e, s[a2 + 1] == null ? null : s[a2 + 1].$elm$, s, i, a2, o));
  let S2 = ln(u);
  return r <= c && (S2 = I(S2, () => {
    An(p, n, r, c);
  })), S2;
};
var Mt = (t, e) => {
  const n = et(t) ? t.close : null, s = [];
  let o = t.firstChild;
  for (; (o = zn(o)) && (e(o) && s.push(o), o = o.nextSibling, o !== n); )
    ;
  return s;
};
var to = (t, e) => Mt(t, e).map(eo);
var eo = (t) => {
  var e;
  return St(t) ? ((e = G(t)) == null ? void 0 : e.$vdom$) ?? be(t) : be(t);
};
var be = (t) => {
  if (vt(t)) {
    const e = new ot(t.localName, {}, null, Se, 0, en(t));
    return e.$elm$ = t, e;
  }
  if (on(t)) {
    const e = new ot(t.nodeName, O, null, Se, 0, null);
    return e.$text$ = t.data, e.$elm$ = t, e;
  }
};
var ui = (t) => {
  const e = t.nodeType;
  return e === 1 ? t.hasAttribute("q:head") : e === 111;
};
var tn = (t) => t.nodeName === "Q:TEMPLATE";
var we = (t) => {
  const e = t.nodeType;
  if (e === 3 || e === 111)
    return true;
  if (e !== 1)
    return false;
  const n = t.nodeName;
  return n !== "Q:TEMPLATE" && (n === "HEAD" ? t.hasAttribute("q:head") : n !== "STYLE" || !t.hasAttribute(Re));
};
var no = (t) => {
  const e = {};
  for (const n of t) {
    const s = fi(n);
    (e[s] ?? (e[s] = new ot(Ct, { "q:s": "" }, null, [], 0, s))).$children$.push(n);
  }
  return e;
};
var Rt = (t, e, n, s) => {
  e.$type$, n.$type$, e.$key$, n.$key$, e.$id$, n.$id$;
  const o = e.$elm$, r = n.$type$, i = t.$static$, c = i.$containerState$, $3 = t.$cmpCtx$;
  if (n.$elm$ = o, r === "#text") {
    i.$visited$.push(o);
    const d = n.$signal$;
    return d && (n.$text$ = Gt(it(d, [4, $3.$element$, d, o]))), void gt(i, o, "data", n.$text$);
  }
  if (r === "#signal")
    return;
  const l = n.$props$, a2 = n.$flags$, f2 = Q(o, c);
  if (r !== Ct) {
    let d = !!(s & B);
    if (d || r !== "svg" || (s |= B, d = true), l !== O) {
      1 & a2 || (f2.li.length = 0);
      const m = e.$props$;
      n.$props$ = m;
      for (const y in l) {
        let b = l[y];
        if (y !== "ref")
          if (un(y)) {
            const u = dn(f2.li, y, b, c.$containerEl$);
            io(i, o, u);
          } else
            C(b) && (b = it(b, [1, $3.$element$, b, o, y])), y === "class" ? b = mn(b, $3) : y === "style" && (b = Pe(b)), m[y] !== b && (m[y] = b, Mn(i, o, y, b, d));
        else
          b !== void 0 && kn(b, o);
      }
    }
    return 2 & a2 || (d && r === "foreignObject" && (s &= ~B), l[D] !== void 0) || r === "textarea" ? void 0 : ve(t, e, n, s);
  }
  if ("q:renderFn" in l) {
    const d = l.props;
    Si(c, f2, d);
    let m = !!(f2.$flags$ & Ot);
    return m || f2.$componentQrl$ || f2.$element$.hasAttribute("q:id") || (bs(t, f2), f2.$componentQrl$ = d["q:renderFn"], f2.$componentQrl$, m = true), m ? I(vn(t, f2, s), () => Zn(t, f2, n, s)) : Zn(t, f2, n, s);
  }
  if ("q:s" in l)
    return $3.$slots$, void $3.$slots$.push(n);
  if (D in l)
    gt(i, o, "innerHTML", l[D]);
  else if (!(2 & a2))
    return ve(t, e, n, s);
};
var Zn = (t, e, n, s) => {
  if (2 & n.$flags$)
    return;
  const o = t.$static$, r = no(n.$children$), i = ro(e);
  for (const c in i.slots)
    if (!r[c]) {
      const $3 = i.slots[c], l = to($3, we);
      if (l.length > 0) {
        const a2 = G($3);
        a2 && a2.$vdom$ && (a2.$vdom$.$children$ = []), An(o, l, 0, l.length - 1);
      }
    }
  for (const c in i.templates) {
    const $3 = i.templates[c];
    $3 && !r[c] && (i.templates[c] = void 0, Pn(o, $3));
  }
  return ln(Object.keys(r).map((c) => {
    const $3 = r[c], l = oo(o, i, e, c, t.$static$.$containerState$), a2 = bn(l), f2 = oe(t), d = l.$element$;
    f2.$slotCtx$ = l, l.$vdom$ = $3, $3.$elm$ = d;
    let m = s & ~B;
    d.isSvg && (m |= B);
    const y = o.$addSlots$.findIndex((b) => b[0] === d);
    return y >= 0 && o.$addSlots$.splice(y, 1), ve(f2, a2, $3, m);
  }));
};
var so = (t, e, n, s, o, r, i) => {
  const c = [];
  for (; o <= r; ++o) {
    const $3 = s[o], l = bt(t, $3, i, c);
    Nt(t.$static$, e, l, n);
  }
  return kt(c);
};
var An = (t, e, n, s) => {
  for (; n <= s; ++n) {
    const o = e[n];
    o && (o.$elm$, Pn(t, o.$elm$));
  }
};
var oo = (t, e, n, s, o) => {
  const r = e.slots[s];
  if (r)
    return Q(r, o);
  const i = e.templates[s];
  if (i)
    return Q(i, o);
  const c = ao(t.$doc$, s), $3 = ze(c);
  return $3.$parentCtx$ = n, Ri(t, n.$element$, c), e.templates[s] = c, $3;
};
var fi = (t) => t.$props$[J] ?? "";
var bt = (t, e, n, s) => {
  const o = e.$type$, r = t.$static$.$doc$, i = t.$cmpCtx$;
  if (o === "#text")
    return e.$elm$ = r.createTextNode(e.$text$);
  if (o === "#signal") {
    const u = e.$signal$, p = u.value;
    if (Tt(p)) {
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
  let c, $3 = !!(n & B);
  $3 || o !== "svg" || (n |= B, $3 = true);
  const l = o === Ct, a2 = e.$props$, f2 = t.$static$, d = f2.$containerState$;
  l ? c = zi(r, $3) : o === "head" ? (c = r.head, n |= ye) : (c = Nn(r, o, $3), n &= ~ye), 2 & e.$flags$ && (n |= 4), e.$elm$ = c;
  const m = ze(c);
  if (t.$slotCtx$ ? (m.$parentCtx$ = t.$slotCtx$, m.$realParentCtx$ = t.$cmpCtx$) : m.$parentCtx$ = t.$cmpCtx$, l) {
    if ("q:renderFn" in a2) {
      const u = a2["q:renderFn"], p = Ae(), S2 = d.$subsManager$.$createManager$(), g = new Proxy(p, new ys(d, S2)), h = a2.props;
      if (d.$proxyMap$.set(p, g), m.$props$ = g, h !== O) {
        const E3 = p[M] = h[M] ?? O;
        for (const x2 in h)
          if (x2 !== "children" && x2 !== J) {
            const v3 = E3[x2];
            C(v3) ? p["$$" + x2] = v3 : p[x2] = h[x2];
          }
      }
      bs(t, m), m.$componentQrl$ = u;
      const w = I(vn(t, m, n), () => {
        let E3 = e.$children$;
        if (E3.length === 0)
          return;
        E3.length === 1 && E3[0].$type$ === ":skipRender" && (E3 = E3[0].$children$);
        const x2 = ro(m), v3 = [], _3 = no(E3);
        for (const q3 in _3) {
          const k2 = _3[q3], R2 = oo(f2, x2, m, q3, f2.$containerState$), st2 = oe(t), It = R2.$element$;
          st2.$slotCtx$ = R2, R2.$vdom$ = k2, k2.$elm$ = It;
          let U2 = n & ~B;
          It.isSvg && (U2 |= B);
          for (const z3 of k2.$children$) {
            const Ut = bt(st2, z3, U2, v3);
            z3.$elm$, z3.$elm$, lo(f2, It, Ut);
          }
        }
        return kt(v3);
      });
      return L(w) && s.push(w), c;
    }
    if ("q:s" in a2)
      i.$slots$, Ni(c, e.$key$), H(c, "q:sref", i.$id$), H(c, "q:s", ""), i.$slots$.push(e), f2.$addSlots$.push([c, i.$element$]);
    else if (D in a2)
      return gt(f2, c, "innerHTML", a2[D]), c;
  } else {
    if (e.$immutableProps$) {
      const u = a2 !== O ? Object.fromEntries(Object.entries(e.$immutableProps$).map(([p, S2]) => [p, S2 === M ? a2[p] : S2])) : e.$immutableProps$;
      es(f2, m, i, u, $3, true);
    }
    if (a2 !== O) {
      m.$vdom$ = e;
      const u = e.$immutableProps$ ? Object.fromEntries(Object.entries(a2).filter(([p]) => !(p in e.$immutableProps$))) : a2;
      e.$props$ = es(f2, m, i, u, $3, false);
    }
    if ($3 && o === "foreignObject" && ($3 = false, n &= ~B), i) {
      const u = i.$scopeIds$;
      u && u.forEach((p) => {
        c.classList.add(p);
      }), i.$flags$ & ht && (m.li.push(...i.li), i.$flags$ &= ~ht);
    }
    for (const u of m.li)
      io(f2, c, u[0]);
    if (a2[D] !== void 0)
      return c;
    $3 && o === "foreignObject" && ($3 = false, n &= ~B);
  }
  let y = e.$children$;
  if (y.length === 0)
    return c;
  y.length === 1 && y[0].$type$ === ":skipRender" && (y = y[0].$children$);
  const b = y.map((u) => bt(t, u, n, s));
  for (const u of b)
    Zt(c, u);
  return c;
};
var di = (t) => {
  const e = t.$slots$;
  return e || (t.$element$.parentElement, t.$slots$ = pi(t));
};
var ro = (t) => {
  const e = di(t), n = {}, s = {}, o = Array.from(t.$element$.childNodes).filter(tn);
  for (const r of e)
    r.$elm$, n[r.$key$ ?? ""] = r.$elm$;
  for (const r of o)
    s[Y(r, J) ?? ""] = r;
  return { slots: n, templates: s };
};
var pi = (t) => {
  const e = t.$element$.parentElement;
  return Di(e, "q:sref", t.$id$).map(be);
};
var hi = (t, e, n) => (gt(t, e.style, "cssText", n), true);
var jn = (t, e, n) => (e.namespaceURI === ie ? jt(t, e, "class", n) : gt(t, e, "className", n), true);
var ts = (t, e, n, s) => s in e && ((e[s] !== n || s === "value" && !e.hasAttribute(s)) && (s === "value" && e.tagName !== "OPTION" ? _i(t, e, s, n) : gt(t, e, s, n)), true);
var Bt = (t, e, n, s) => (jt(t, e, s.toLowerCase(), n), true);
var mi = (t, e, n) => (gt(t, e, "innerHTML", n), true);
var gi = () => true;
var yi = { style: hi, class: jn, className: jn, value: ts, checked: ts, href: Bt, list: Bt, form: Bt, tabIndex: Bt, download: Bt, innerHTML: gi, [D]: mi };
var Mn = (t, e, n, s, o) => {
  if (ws(n))
    return void jt(t, e, n, s != null ? String(s) : s);
  const r = yi[n];
  r && r(t, e, s, n) || (o || !(n in e) ? (n.startsWith(hs) && co(n.slice(15)), jt(t, e, n, s)) : gt(t, e, n, s));
};
var es = (t, e, n, s, o, r) => {
  const i = {}, c = e.$element$;
  for (const $3 in s) {
    let l = s[$3];
    if ($3 !== "ref")
      if (un($3))
        dn(e.li, $3, l, t.$containerState$.$containerEl$);
      else {
        if (C(l) && (l = it(l, r ? [1, c, l, n.$element$, $3] : [2, n.$element$, l, c, $3])), $3 === "class") {
          if (l = mn(l, n), !l)
            continue;
        } else
          $3 === "style" && (l = Pe(l));
        i[$3] = l, Mn(t, c, $3, l, o);
      }
    else
      l !== void 0 && kn(l, c);
  }
  return i;
};
var Si = (t, e, n) => {
  let s = e.$props$;
  if (s || (e.$props$ = s = se(Ae(), t)), n === O)
    return;
  const o = F(s), r = qt(s), i = r[M] = n[M] ?? O;
  for (const c in n)
    if (c !== "children" && c !== J && !i[c]) {
      const $3 = n[c];
      r[c] !== $3 && (r[c] = $3, o.$notifySubs$(c));
    }
};
var Vt = (t, e, n, s) => {
  if (n.$clearSub$(t), vt(t)) {
    if (s && t.hasAttribute("q:s"))
      return void e.$rmSlots$.push(t);
    const o = G(t);
    o && Yr(o, n);
    const r = et(t) ? t.close : null;
    let i = t.firstChild;
    for (; (i = zn(i)) && (Vt(i, e, n, true), i = i.nextSibling, i !== r); )
      ;
  }
};
var vi = async (t) => {
  Mi(t);
};
var Zt = (t, e) => {
  et(e) ? e.appendTo(t) : t.appendChild(e);
};
var bi = (t, e) => {
  et(e) ? e.remove() : t.removeChild(e);
};
var wi = (t, e, n) => {
  et(e) ? e.insertBeforeTo(t, (n == null ? void 0 : n.nextSibling) ?? null) : t.insertBefore(e, (n == null ? void 0 : n.nextSibling) ?? null);
};
var Le = (t, e, n) => {
  et(e) ? e.insertBeforeTo(t, Ee(n)) : t.insertBefore(e, Ee(n));
};
var Ei = (t, e, n) => {
  const s = {};
  for (let o = e; o <= n; ++o) {
    const r = t[o].$key$;
    r != null && (s[r] = o);
  }
  return s;
};
var io = (t, e, n) => {
  n.startsWith("on:") || jt(t, e, n, ""), co(n);
};
var co = (t) => {
  var e;
  {
    const n = js(t);
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
  t.$operations$.push({ $operation$: $o, $args$: [e, n, s] });
};
var _i = (t, e, n, s) => {
  t.$postOperations$.push({ $operation$: $o, $args$: [e, n, s] });
};
var $o = (t, e, n) => {
  try {
    t[e] = n ?? "", n == null && yt(t) && St(t) && t.removeAttribute(e);
  } catch (s) {
    Et(Te(6), e, { node: t, value: n }, s);
  }
};
var Nn = (t, e, n) => n ? t.createElementNS(ie, e) : t.createElement(e);
var Nt = (t, e, n, s) => (t.$operations$.push({ $operation$: Le, $args$: [e, n, s || null] }), n);
var Ti = (t, e, n, s) => (t.$operations$.push({ $operation$: wi, $args$: [e, n, s || null] }), n);
var lo = (t, e, n) => (t.$operations$.push({ $operation$: Zt, $args$: [e, n] }), n);
var qi = (t, e) => {
  t.$containerState$.$styleIds$.add(e.styleId), t.$postOperations$.push({ $operation$: Ii, $args$: [t.$containerState$, e] });
};
var Ii = (t, e) => {
  const n = t.$containerEl$, s = ne(n), o = s.documentElement === n, r = s.head, i = s.createElement("style");
  H(i, Re, e.styleId), H(i, "hidden", ""), i.textContent = e.content, o && r ? Zt(r, i) : Le(n, i, n.firstChild);
};
var Ri = (t, e, n) => {
  t.$operations$.push({ $operation$: ki, $args$: [e, n] });
};
var ki = (t, e) => {
  Le(t, e, t.firstChild);
};
var Pn = (t, e) => {
  vt(e) && Vt(e, t, t.$containerState$.$subsManager$, true), t.$operations$.push({ $operation$: Ai, $args$: [e, t] });
};
var Ai = (t) => {
  const e = t.parentElement;
  e && bi(e, t);
};
var ao = (t, e) => {
  const n = Nn(t, "q:template", false);
  return H(n, J, e), H(n, "hidden", ""), H(n, "aria-hidden", "true"), n;
};
var Mi = (t) => {
  for (const e of t.$operations$)
    e.$operation$.apply(void 0, e.$args$);
  Pi(t);
};
var en = (t) => Y(t, "q:key");
var Ni = (t, e) => {
  e !== null && H(t, "q:key", e);
};
var Pi = (t) => {
  const e = t.$containerState$.$subsManager$;
  for (const n of t.$rmSlots$) {
    const s = en(n), o = Mt(n, we);
    if (o.length > 0) {
      const r = n.getAttribute("q:sref"), i = t.$roots$.find((c) => c.$id$ === r);
      if (i) {
        const c = i.$element$;
        if (c.isConnected)
          if (Mt(c, tn).some(($3) => Y($3, J) === s))
            Vt(n, t, e, false);
          else {
            const $3 = ao(t.$doc$, s);
            for (const l of o)
              Zt($3, l);
            Le(c, $3, c.firstChild);
          }
        else
          Vt(n, t, e, false);
      } else
        Vt(n, t, e, false);
    }
  }
  for (const [n, s] of t.$addSlots$) {
    const o = en(n), r = Mt(s, tn).find((i) => i.getAttribute(J) === o);
    r && (Mt(r, we).forEach((i) => {
      Zt(n, i);
    }), r.remove());
  }
};
var ns = () => {
};
var zi = (t, e) => {
  const n = t.createComment("qv "), s = t.createComment("/qv");
  return new uo(n, s, e);
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
  return o && Y(o, e) === n ? 1 : 2;
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
var Ct = ":virtual";
var uo = class {
  constructor(e, n, s) {
    this.open = e, this.close = n, this.isSvg = s, this._qc_ = null, this.nodeType = 111, this.localName = Ct, this.nodeName = Ct;
    const o = this.ownerDocument = e.ownerDocument;
    this.$template$ = Nn(o, "template", false), this.$attributes$ = Li(e.data.slice(3)), e.data.startsWith("qv "), e.__virtual = this, n.__virtual = this;
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
    this.$attributes$[e] = n, this.open.data = ss(this.$attributes$);
  }
  removeAttribute(e) {
    delete this.$attributes$[e], this.open.data = ss(this.$attributes$);
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
    return Mt(this, Po).forEach((s) => {
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
var ss = (t) => `qv ${Oi(t)}`;
var zn = (t) => {
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
    return new uo(t, s, ((n = t.parentElement) == null ? void 0 : n.namespaceURI) === ie);
  }
  return null;
};
var Ee = (t) => t == null ? null : et(t) ? t.open : t;
var w$ = async (t) => {
  const e = Rn(null, null), n = fo(e);
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
    for (const a2 of n.$noSerialize$)
      i.set(a2, l);
  }
  const c = (l) => {
    let a2 = "";
    if (L(l)) {
      const d = po(l);
      if (!d)
        throw P(27, l);
      l = d.value, a2 += d.resolved ? "~" : "_";
    }
    if (ct(l)) {
      const d = qt(l);
      d && (a2 += "!", l = d);
    }
    const f2 = i.get(l);
    if (f2 === void 0)
      throw P(27, l);
    return f2 + a2;
  }, $3 = mo(o, c, null, n, e);
  return JSON.stringify({ _entry: c(t), _objs: $3 });
};
var Ui = async (t, e) => {
  const n = ne(t), s = n.documentElement, o = fs(t) ? s : t;
  if (Y(o, "q:container") === "paused")
    throw P(21);
  const r = e ?? (o === n.documentElement ? n.body : o), i = Wt(o), c = Hi(o, Zi);
  H(o, "q:container", "paused");
  for (const d of c) {
    const m = d.$element$, y = d.li;
    if (d.$scopeIds$) {
      const b = xs(d.$scopeIds$);
      b && m.setAttribute("q:sstyle", b);
    }
    if (d.$id$ && m.setAttribute("q:id", d.$id$), St(m) && y.length > 0) {
      const b = fn(y);
      for (const u of b)
        m.setAttribute(u[0], Cn(u[1], i, d));
    }
  }
  const $3 = await Bi(c, i, (d) => yt(d) && on(d) ? ec(d, i) : null), l = n.createElement("script");
  H(l, "type", "qwik/json"), l.textContent = Xi(JSON.stringify($3.state, void 0, void 0)), r.appendChild(l);
  const a2 = Array.from(i.$events$, (d) => JSON.stringify(d)), f2 = n.createElement("script");
  return f2.textContent = `(window.qwikevents||=[]).push(${a2.join(", ")})`, r.appendChild(f2), $3;
};
var Bi = async (t, e, n, s) => {
  var g;
  const o = fo(e);
  s == null || s.forEach((h, w) => {
    o.$seen$.add(w);
  });
  let r = false;
  for (const h of t)
    if (h.$tasks$)
      for (const w of h.$tasks$)
        Us(w) && o.$resources$.push(w.$state$), Hs(w);
  for (const h of t) {
    const w = h.$element$, E3 = h.li;
    for (const x2 of E3)
      if (St(w)) {
        const v3 = x2[1], _3 = v3.$captureRef$;
        if (_3)
          for (const q3 of _3)
            T(q3, o, true);
        o.$qrls$.push(v3), r = true;
      }
  }
  if (!r)
    return { state: { refs: {}, ctx: {}, objs: [], subs: [] }, objs: [], funcs: [], qrls: [], resources: o.$resources$, mode: "static" };
  let i;
  for (; (i = o.$promises$).length > 0; )
    o.$promises$ = [], await Promise.all(i);
  const c = o.$elements$.length > 0;
  if (c) {
    for (const h of o.$deferElements$)
      Ln(h, o, h.$element$);
    for (const h of t)
      Vi(h, o);
  }
  for (; (i = o.$promises$).length > 0; )
    o.$promises$ = [], await Promise.all(i);
  const $3 = /* @__PURE__ */ new Map(), l = Array.from(o.$objSet$.keys()), a2 = /* @__PURE__ */ new Map(), f2 = (h) => {
    let w = "";
    if (L(h)) {
      const v3 = po(h);
      if (!v3)
        return null;
      h = v3.value, w += v3.resolved ? "~" : "_";
    }
    if (ct(h)) {
      const v3 = qt(h);
      if (v3)
        w += "!", h = v3;
      else if (vt(h)) {
        const _3 = ((q3) => {
          let k2 = $3.get(q3);
          return k2 === void 0 && (k2 = tc(q3), k2 || console.warn("Missing ID", q3), $3.set(q3, k2)), k2;
        })(h);
        return _3 ? "#" + _3 + w : null;
      }
    }
    const E3 = a2.get(h);
    if (E3)
      return E3 + w;
    const x2 = s == null ? void 0 : s.get(h);
    return x2 ? "*" + x2 : n ? n(h) : null;
  }, d = (h) => {
    const w = f2(h);
    if (w === null) {
      if (Fn(h)) {
        const E3 = mt(a2.size);
        return a2.set(h, E3), E3;
      }
      throw P(27, h);
    }
    return w;
  }, m = /* @__PURE__ */ new Map();
  for (const h of l) {
    const w = (g = ji(h, e)) == null ? void 0 : g.$subs$;
    if (!w)
      continue;
    const E3 = Eo(h) ?? 0, x2 = [];
    1 & E3 && x2.push(E3);
    for (const v3 of w) {
      const _3 = v3[1];
      v3[0] === 0 && yt(_3) && et(_3) && !o.$elements$.includes(G(_3)) || x2.push(v3);
    }
    x2.length > 0 && m.set(h, x2);
  }
  l.sort((h, w) => (m.has(h) ? 0 : 1) - (m.has(w) ? 0 : 1));
  let y = 0;
  for (const h of l)
    a2.set(h, mt(y)), y++;
  if (o.$noSerialize$.length > 0) {
    const h = a2.get(void 0);
    for (const w of o.$noSerialize$)
      a2.set(w, h);
  }
  const b = [];
  for (const h of l) {
    const w = m.get(h);
    if (w == null)
      break;
    b.push(w.map((E3) => typeof E3 == "number" ? `_${E3}` : Oc(E3, f2)).filter(ps));
  }
  b.length, m.size;
  const u = mo(l, d, f2, o, e), p = {}, S2 = {};
  for (const h of t) {
    const w = h.$element$, E3 = h.$id$, x2 = h.$refMap$, v3 = h.$props$, _3 = h.$contexts$, q3 = h.$tasks$, k2 = h.$componentQrl$, R2 = h.$seq$, st2 = {}, It = et(w) && o.$elements$.includes(h);
    if (x2.length > 0) {
      const U2 = wt(x2, d, " ");
      U2 && (S2[E3] = U2);
    } else if (c) {
      let U2 = false;
      if (It) {
        const z3 = f2(v3);
        st2.h = d(k2) + (z3 ? " " + z3 : ""), U2 = true;
      } else {
        const z3 = f2(v3);
        z3 && (st2.h = " " + z3, U2 = true);
      }
      if (q3 && q3.length > 0) {
        const z3 = wt(q3, f2, " ");
        z3 && (st2.w = z3, U2 = true);
      }
      if (It && R2 && R2.length > 0) {
        const z3 = wt(R2, d, " ");
        st2.s = z3, U2 = true;
      }
      if (_3) {
        const z3 = [];
        _3.forEach((Mo, No) => {
          const Un = f2(Mo);
          Un && z3.push(`${No}=${Un}`);
        });
        const Ut = z3.join(" ");
        Ut && (st2.c = Ut, U2 = true);
      }
      U2 && (p[E3] = st2);
    }
  }
  return { state: { refs: S2, ctx: p, objs: u, subs: b }, objs: l, funcs: o.$inlinedFunctions$, resources: o.$resources$, qrls: o.$qrls$, mode: c ? "render" : "listeners" };
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
  const o = t.ownerDocument.createTreeWalker(t, 1 | Zs, { acceptNode(r) {
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
  if (n && s && !ho(s) && e.$elements$.includes(n)) {
    const r = (o = F(s)) == null ? void 0 : o.$subs$, i = t.$element$;
    if (r)
      for (const [c, $3] of r)
        c === 0 ? ($3 !== i && Dt(F(s), e, false), yt($3) ? Gi($3, e) : T($3, e, true)) : (T(s, e, false), Dt(F(s), e, false));
  }
};
var fo = (t) => {
  const e = [];
  return t.$inlineFns$.forEach((n, s) => {
    for (; e.length <= n; )
      e.push("");
    e[n] = s;
  }), { $containerState$: t, $seen$: /* @__PURE__ */ new Set(), $objSet$: /* @__PURE__ */ new Set(), $prefetch$: 0, $noSerialize$: [], $inlinedFunctions$: e, $resources$: [], $elements$: [], $qrls$: [], $deferElements$: [], $promises$: [] };
};
var Ji = (t, e) => {
  const n = G(t);
  e.$elements$.includes(n) || (e.$elements$.push(n), n.$flags$ & qn ? (e.$prefetch$++, Ln(n, e, true), e.$prefetch$--) : e.$deferElements$.push(n));
};
var Gi = (t, e) => {
  const n = G(t);
  if (n) {
    if (e.$elements$.includes(n))
      return;
    e.$elements$.push(n), Ln(n, e, t);
  }
};
var Ln = (t, e, n) => {
  if (t.$props$ && !ho(t.$props$) && (T(t.$props$, e, n), Dt(F(t.$props$), e, n)), t.$componentQrl$ && T(t.$componentQrl$, e, n), t.$seq$)
    for (const s of t.$seq$)
      T(s, e, n);
  if (t.$tasks$) {
    const s = e.$containerState$.$subsManager$.$groupToManagers$;
    for (const o of t.$tasks$)
      s.has(o) && T(o, e, n);
  }
  if (n === true && (os(t, e), t.$dynamicSlots$))
    for (const s of t.$dynamicSlots$)
      os(s, e);
};
var os = (t, e) => {
  for (; t; ) {
    if (t.$contexts$)
      for (const n of t.$contexts$.values())
        T(n, e, true);
    t = t.$parentCtx$;
  }
};
var Xi = (t) => t.replace(/<(\/?script)/gi, "\\x3C$1");
var Dt = (t, e, n) => {
  if (e.$seen$.has(t))
    return;
  e.$seen$.add(t);
  const s = t.$subs$;
  for (const o of s)
    if (o[0] > 0 && T(o[2], e, n), n === true) {
      const r = o[1];
      yt(r) && et(r) ? o[0] === 0 && Ji(r, e) : T(r, e, true);
    }
};
var nn = Symbol();
var Ki = (t) => t.then((e) => (t[nn] = { resolved: true, value: e }, e), (e) => (t[nn] = { resolved: false, value: e }, e));
var po = (t) => t[nn];
var T = (t, e, n) => {
  if (t != null) {
    const s = typeof t;
    switch (s) {
      case "function":
      case "object": {
        if (e.$seen$.has(t))
          return;
        if (e.$seen$.add(t), bo(t))
          return e.$objSet$.add(void 0), void e.$noSerialize$.push(t);
        const o = t, r = qt(t);
        if (r) {
          const i = !(2 & Eo(t = r));
          if (n && i && Dt(F(o), e, n), wo(o))
            return void e.$objSet$.add(t);
        }
        if (kc(t, e, n))
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
  const e = zn(t);
  if (vt(e)) {
    const n = G(e);
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
  const e = G(t);
  return e ? e.$id$ : null;
};
var ec = (t, e) => {
  const n = t.previousSibling;
  if (n && te(n) && n.data.startsWith("t="))
    return "#" + n.data.slice(2);
  const s = t.ownerDocument, o = mt(e.$elementIndex$++), r = s.createComment(`t=${o}`), i = s.createComment(""), c = t.parentElement;
  return c.insertBefore(r, t), c.insertBefore(i, t.nextSibling), "#" + o;
};
var ho = (t) => Object.keys(t).length === 0;
function mo(t, e, n, s, o) {
  return t.map((r) => {
    if (r === null)
      return null;
    const i = typeof r;
    switch (i) {
      case "undefined":
        return Ce;
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
    const c = Ac(r, e, s, o);
    if (c !== void 0)
      return c;
    if (i === "object") {
      if (A(r))
        return r.map(e);
      if (ee(r)) {
        const $3 = {};
        for (const l in r)
          if (n) {
            const a2 = n(r[l]);
            a2 !== null && ($3[l] = a2);
          } else
            $3[l] = e(r[l]);
        return $3;
      }
    }
    throw P(3, r);
  });
}
var zt = (t, e, n = j) => Qe(null, e, t, null, null, n, null);
var E$ = (t, e = j) => Qe(null, t, null, null, null, e, null);
var On = (t, e = {}) => {
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
      const l = e.$containerState$, a2 = t.resolved.toString();
      let f2 = l.$inlineFns$.get(a2);
      f2 === void 0 && (f2 = l.$inlineFns$.size, l.$inlineFns$.set(a2, f2)), n = String(f2);
    } else
      ds("Sync QRL without containerState");
  let i = `${s}#${n}`;
  const c = t.$capture$, $3 = t.$captureRef$;
  return $3 && $3.length ? e.$getObjId$ ? i += `[${wt($3, e.$getObjId$, " ")}]` : e.$addRefMap$ && (i += `[${wt($3, e.$addRefMap$, " ")}]`) : c && c.length > 0 && (i += `[${c.join(" ")}]`), i;
};
var Cn = (t, e, n) => {
  n.$element$;
  const s = { $containerState$: e, $addRefMap$: (o) => nc(n.$refMap$, o) };
  return wt(t, (o) => On(o, s), `
`);
};
var Oe = (t, e) => {
  const n = t.length, s = rs(t, 0, "#"), o = rs(t, s, "["), r = Math.min(s, o), i = t.substring(0, r), c = s == n ? s : s + 1, $3 = c == o ? "default" : t.substring(c, o), l = o === n ? j : t.substring(o + 1, n - 1).split(" "), a2 = Qe(i, $3, null, null, l, null, null);
  return e && a2.$setContainer$(e), a2;
};
var rs = (t, e, n) => {
  const s = t.length, o = t.indexOf(n, e == s ? 0 : e);
  return o == -1 ? s : o;
};
var nc = (t, e) => {
  const n = t.indexOf(e);
  return n === -1 ? (t.push(e), String(t.length - 1)) : String(n);
};
var go = (t, e) => (t.$capture$, t.$captureRef$ = t.$capture$.map((n) => {
  const s = parseInt(n, 10), o = e.$refMap$[s];
  return e.$refMap$.length > s, o;
}));
var sc = (t) => ({ __brand: "resource", value: void 0, loading: !nt(), _resolved: void 0, _error: void 0, _state: "pending", _timeout: (t == null ? void 0 : t.timeout) ?? -1, _cache: 0 });
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
var Ce = "";
function N(t) {
  return { $prefixCode$: t.$prefix$.charCodeAt(0), $prefixChar$: t.$prefix$, $test$: t.$test$, $serialize$: t.$serialize$, $prepare$: t.$prepare$, $fill$: t.$fill$, $collect$: t.$collect$, $subs$: t.$subs$ };
}
var cc = N({ $prefix$: "", $test$: (t) => Fn(t), $collect$: (t, e, n) => {
  if (t.$captureRef$)
    for (const s of t.$captureRef$)
      T(s, e, n);
  e.$prefetch$ === 0 && e.$qrls$.push(t);
}, $serialize$: (t, e) => On(t, { $getObjId$: e }), $prepare$: (t, e) => Oe(t, e.$containerEl$), $fill$: (t, e) => {
  t.$capture$ && t.$capture$.length > 0 && (t.$captureRef$ = t.$capture$.map(e), t.$capture$ = null);
} });
var $c = N({ $prefix$: "", $test$: (t) => xn(t), $collect$: (t, e, n) => {
  T(t.$qrl$, e, n), t.$state$ && (T(t.$state$, e, n), n === true && t.$state$ instanceof Yt && Dt(t.$state$[tt], e, true));
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
var pc = N({ $prefix$: "", $test$: (t) => !!t && typeof t == "object" && fs(t), $prepare$: (t, e, n) => n });
var _e = Symbol("serializable-data");
var hc = N({ $prefix$: "", $test$: (t) => To(t), $serialize$: (t, e) => {
  const [n] = t[_e];
  return On(n, { $getObjId$: e });
}, $prepare$: (t, e) => {
  const n = Oe(t, e.$containerEl$);
  return Qn(n);
}, $fill$: (t, e) => {
  var s;
  const [n] = t[_e];
  (s = n.$capture$) != null && s.length && (n.$captureRef$ = n.$capture$.map(e), n.$capture$ = null);
} });
var mc = N({ $prefix$: "", $test$: (t) => t instanceof Ze, $collect$: (t, e, n) => {
  if (t.$args$)
    for (const s of t.$args$)
      T(s, e, n);
}, $serialize$: (t, e, n) => {
  const s = yr(t);
  let o = n.$inlinedFunctions$.indexOf(s);
  return o < 0 && (o = n.$inlinedFunctions$.length, n.$inlinedFunctions$.push(s)), wt(t.$args$, e, " ") + " @" + mt(o);
}, $prepare$: (t) => {
  const e = t.split(" "), n = e.slice(0, -1), s = e[e.length - 1];
  return new Ze(s, n, s);
}, $fill$: (t, e) => {
  t.$func$, t.$func$ = e(t.$func$), t.$args$ = t.$args$.map(e);
} });
var gc = N({ $prefix$: "", $test$: (t) => t instanceof Yt, $collect$: (t, e, n) => (T(t.untrackedValue, e, n), n === true && !(t[Kt] & ri) && Dt(t[tt], e, true), t), $serialize$: (t, e) => e(t.untrackedValue), $prepare$: (t, e) => {
  var n;
  return new Yt(t, (n = e == null ? void 0 : e.$subsManager$) == null ? void 0 : n.$createManager$(), 0);
}, $subs$: (t, e) => {
  t[tt].$addSubs$(e);
}, $fill$: (t, e) => {
  t.untrackedValue = e(t.untrackedValue);
} });
var yc = N({ $prefix$: "", $test$: (t) => t instanceof je, $collect$(t, e, n) {
  if (T(t.ref, e, n), wo(t.ref)) {
    const s = F(t.ref);
    Nc(e.$containerState$.$subsManager$, s, n) && T(t.ref[t.prop], e, n);
  }
  return t;
}, $serialize$: (t, e) => `${e(t.ref)} ${t.prop}`, $prepare$: (t) => {
  const [e, n] = t.split(" ");
  return new je(e, n);
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
var wc = N({ $prefix$: "", $test$: (t) => Tt(t), $collect$: (t, e, n) => {
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
var Lt = Symbol();
var _c = N({ $prefix$: "", $test$: (t) => t instanceof Set, $collect$: (t, e, n) => {
  t.forEach((s) => T(s, e, n));
}, $serialize$: (t, e) => Array.from(t).map(e).join(" "), $prepare$: (t) => {
  const e = /* @__PURE__ */ new Set();
  return e[Lt] = t, e;
}, $fill$: (t, e) => {
  const n = t[Lt];
  t[Lt] = void 0;
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
  return e[Lt] = t, e;
}, $fill$: (t, e) => {
  const n = t[Lt];
  t[Lt] = void 0;
  const s = n.length === 0 ? [] : n.split(" ");
  s.length % 2;
  for (let o = 0; o < s.length; o += 2)
    t.set(e(s[o]), e(s[o + 1]));
} });
var qc = N({ $prefix$: "\x1B", $test$: (t) => !!yo(t) || t === Ce, $serialize$: (t) => t, $prepare$: (t) => t });
var De = [cc, $c, lc, ac, uc, fc, dc, pc, hc, mc, gc, yc, Sc, vc, bc, wc, Ec, _c, Tc, qc, xc];
var is = (() => {
  const t = [];
  return De.forEach((e) => {
    const n = e.$prefixCode$;
    for (; t.length < n; )
      t.push(void 0);
    t.push(e);
  }), t;
})();
function yo(t) {
  if (typeof t == "string") {
    const e = t.charCodeAt(0);
    if (e < is.length)
      return is[e];
  }
}
var Ic = De.filter((t) => t.$collect$);
var Rc = (t) => {
  for (const e of De)
    if (e.$test$(t))
      return true;
  return false;
};
var kc = (t, e, n) => {
  for (const s of Ic)
    if (s.$test$(t))
      return s.$collect$(t, e, n), true;
  return false;
};
var Ac = (t, e, n, s) => {
  for (const o of De)
    if (o.$test$(t)) {
      let r = o.$prefixChar$;
      return o.$serialize$ && (r += o.$serialize$(t, e, n, s)), r;
    }
  if (typeof t == "string")
    return t;
};
var So = (t, e) => {
  const n = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  return { prepare(o) {
    const r = yo(o);
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
var Mc = { "!": (t, e) => e.$proxyMap$.get(t) ?? pn(t, e), "~": (t) => Promise.resolve(t), _: (t) => Promise.reject(t) };
var Nc = (t, e, n) => {
  if (typeof n == "boolean")
    return n;
  const s = t.$groupToManagers$.get(n);
  return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== e);
};
var Pc = (t) => t === ":slot" ? xe : t === ":fragment" ? he : t;
var x$ = (t, e) => sn(t, /* @__PURE__ */ new Set(), "_", e);
var sn = (t, e, n, s) => {
  const o = $e(t);
  if (o == null)
    return t;
  if (zc(o)) {
    if (e.has(o) || (e.add(o), Rc(o)))
      return t;
    const r = typeof o;
    switch (r) {
      case "object":
        if (L(o) || yt(o))
          return t;
        if (A(o)) {
          let c = 0;
          return o.forEach(($3, l) => {
            if (l !== c)
              throw P(3, o);
            sn($3, e, n + "[" + l + "]"), c = l + 1;
          }), t;
        }
        if (ee(o)) {
          for (const [c, $3] of Object.entries(o))
            sn($3, e, n + "." + c);
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
      const c = t.name;
      i += ` because it's a function named "${c}". You might need to convert it to a QRL using $(fn):

const ${c} = $(${String(t)});

Please check out https://qwik.dev/docs/advanced/qrl/ for more information.`;
    }
    console.error("Trying to serialize", t), ds(i);
  }
  return t;
};
var Dn = /* @__PURE__ */ new WeakSet();
var vo = /* @__PURE__ */ new WeakSet();
var zc = (t) => !ct(t) && !V(t) || !Dn.has(t);
var bo = (t) => Dn.has(t);
var wo = (t) => vo.has(t);
var Fe = (t) => (t != null && Dn.add(t), t);
var Lc = (t) => (vo.add(t), t);
var $e = (t) => ct(t) ? qt(t) ?? t : t;
var qt = (t) => t[Je];
var F = (t) => t[tt];
var Eo = (t) => t[At];
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
    n <= 2 ? (r = t[5], o += ` ${i} ${cs(e(t[3]))} ${t[4]}`) : n <= 4 && (r = t[4], o += ` ${i} ${typeof t[3] == "string" ? t[3] : cs(e(t[3]))}`);
  }
  return r && (o += ` ${encodeURI(r)}`), o;
};
var Cc = (t, e) => {
  const n = t.split(" "), s = parseInt(n[0], 10);
  n.length >= 2;
  const o = e(n[1]);
  if (!o || xn(o) && !o.$el$)
    return;
  const r = [s, o];
  return s === 0 ? (n.length <= 3, r.push(He(n[2]))) : s <= 2 ? (n.length === 5 || n.length, r.push(e(n[2]), e(n[3]), n[4], He(n[5]))) : s <= 4 && (n.length === 4 || n.length, r.push(e(n[2]), e(n[3]), He(n[4]))), r;
};
var He = (t) => {
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
      const c = e[4];
      for (let $3 = 0; $3 < i.length; $3++) {
        const l = i[$3];
        l[0] === n && l[1] === s && l[2] === o && l[3] === r && l[4] === c && (i.splice($3, 1), $3--);
      }
    } else if (n === 3 || n === 4)
      for (let c = 0; c < i.length; c++) {
        const $3 = i[c];
        $3[0] === n && $3[1] === s && $3[2] === o && $3[3] === r && (i.splice(c, 1), c--);
      }
  }
  $addSub$(e, n) {
    const s = this.$subs$, o = e[1];
    e[0] === 0 && s.some(([r, i, c]) => r === 0 && i === o && c === n) || (s.push(xo = [...e, n]), this.$addToGroup$(o, this));
  }
  $notifySubs$(e) {
    const n = this.$subs$;
    for (const s of n) {
      const o = s[s.length - 1];
      e && o && o !== e || Ar(s, this.$containerState$);
    }
  }
};
var xo;
function Qc() {
  return xo;
}
var cs = (t) => {
  if (t == null)
    throw Et("must be non null", t);
  return t;
};
var Fn = (t) => typeof t == "function" && typeof t.getSymbol == "function";
var Wc = (t) => Fn(t) && t.$symbol$ == "<sync>";
var Qe = (t, e, n, s, o, r, i) => {
  let c;
  const $3 = async function(...u) {
    return await d.call(this, rt())(...u);
  }, l = (u) => (c || (c = u), c), a2 = async (u) => {
    if (u && l(u), t == "" && (n = (c.qFuncs || [])[Number(e)]), n !== null)
      return n;
    if (s !== null)
      return n = s().then((p) => $3.resolved = n = p[e]);
    {
      const p = qe().importSymbol(c, t, e);
      return n = I(p, (S2) => $3.resolved = n = S2);
    }
  }, f2 = (u) => n !== null ? n : a2(u);
  function d(u, p) {
    return (...S2) => {
      const g = Hc(), h = f2();
      return I(h, (w) => {
        if (V(w)) {
          if (p && p() === false)
            return;
          const E3 = { ...m(u), $qrl$: $3 };
          return E3.$event$ === void 0 && (E3.$event$ = this), Uc(e, E3.$element$, g), W.call(this, E3, w, ...S2);
        }
        throw P(10);
      });
    };
  }
  const m = (u) => u == null ? K() : A(u) ? Js(u) : u, y = i ?? e, b = _o(y);
  return Object.assign($3, { getSymbol: () => y, getHash: () => b, getCaptured: () => r, resolve: a2, $resolveLazy$: f2, $setContainer$: l, $chunk$: t, $symbol$: e, $refSymbol$: i, $hash$: b, getFn: d, $capture$: o, $captureRef$: r, dev: null, resolved: e == "<sync>" ? n : void 0 }), $3;
};
var _o = (t) => {
  const e = t.lastIndexOf("_");
  return e > -1 ? t.slice(e + 1) : t;
};
var $s = /* @__PURE__ */ new Set();
var Uc = (t, e, n) => {
  $s.has(t) || ($s.add(t), Bc("qsymbol", { symbol: t, element: e, reqTime: n }));
};
var Bc = (t, e) => {
  nt() || typeof document != "object" || document.dispatchEvent(new CustomEvent(t, { bubbles: false, detail: e }));
};
var Hc = () => nt() ? 0 : typeof performance == "object" ? performance.now() : 0;
var Qn = (t) => {
  function e(n, s, o) {
    const r = t.$hash$.slice(0, 4);
    return ft(dt, { "q:renderFn": t, [J]: n[J], [M]: n[M], children: n.children, props: n }, o, r + ":" + (s || ""));
  }
  return e[_e] = [t], e;
};
var To = (t) => typeof t == "function" && t[_e] !== void 0;
var le = (t, e) => {
  const { val: n, set: s, iCtx: o } = Ft();
  if (n != null)
    return n;
  const r = V(t) ? W(void 0, t) : t;
  if ((e == null ? void 0 : e.reactive) === false)
    return s(r), r;
  {
    const i = pn(r, o.$renderCtx$.$static$.$containerState$, (e == null ? void 0 : e.deep) ?? true ? 1 : 0);
    return s(i), i;
  }
};
function Wn(t, e) {
  var s;
  const n = rt();
  return ((s = n == null ? void 0 : n.$renderCtx$) == null ? void 0 : s.$static$.$containerState$.$serverData$[t]) ?? e;
}
var Vc = (t) => {
  Jc(t, (e) => e, false);
};
var Jc = (t, e, n) => {
  const { val: s, set: o, iCtx: r, i, elCtx: c } = Ft();
  if (s)
    return s;
  const $3 = tr(t, i), l = r.$renderCtx$.$static$.$containerState$;
  if (o($3), c.$appendStyles$ || (c.$appendStyles$ = []), c.$scopeIds$ || (c.$scopeIds$ = []), n && c.$scopeIds$.push(er($3)), l.$styleIds$.has($3))
    return $3;
  l.$styleIds$.add($3);
  const a2 = t.$resolveLazy$(l.$containerEl$), f2 = (d) => {
    c.$appendStyles$, c.$appendStyles$.push({ styleId: $3, content: e(d, $3) });
  };
  return L(a2) ? r.$waitOn$.push(a2.then(f2)) : f2(a2), $3;
};
var Ve = (t) => {
  const { val: e, set: n, iCtx: s } = Ft();
  if (e != null)
    return e;
  const o = s.$renderCtx$.$static$.$containerState$, r = V(t) && !To(t) ? W(void 0, t) : t;
  return n(oi(r, o, 0, void 0));
};
var Gc = '((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])';
var Xc = $t("qc-s");
var Kc = $t("qc-c");
var qo = $t("qc-ic");
var Io = $t("qc-h");
var Ro = $t("qc-l");
var ko = $t("qc-n");
var Yc = $t("qc-a");
var Zc = $t("qc-ir");
var jc = (t) => {
  const e = window, n = location.pathname + location.search, s = "_qCitySPA", o = "_qCityHistoryPatch", r = "_qCityBootstrap", i = "_qCityInitPopstate", c = "_qCityInitAnchors", $3 = "_qCityInitVisibility", l = "_qCityInitScroll", a2 = "_qCityScrollEnabled", f2 = "_qCityScrollDebounce", d = "_qCityScroll", m = (u) => {
    u && e.scrollTo(u.x, u.y);
  }, y = () => {
    const u = document.documentElement;
    return { x: u.scrollLeft, y: u.scrollTop, w: Math.max(u.scrollWidth, u.clientWidth), h: Math.max(u.scrollHeight, u.clientHeight) };
  }, b = (u) => {
    const p = history.state || {};
    p[d] = u || y(), history.replaceState(p, "");
  };
  if (!e[s] && !e[i] && !e[c] && !e[$3] && !e[l]) {
    if (b(), e[i] = () => {
      var u;
      if (!e[s]) {
        if (e[a2] = false, clearTimeout(e[f2]), n !== location.pathname + location.search) {
          const S2 = t.closest("[q\\:container]").querySelector("a[q\\:link]");
          if (S2) {
            const g = S2.closest("[q\\:container]"), h = S2.cloneNode();
            h.setAttribute("q:nbs", ""), h.style.display = "none", g.appendChild(h), e[r] = h, h.click();
          } else
            location.reload();
        } else if (history.scrollRestoration === "manual") {
          const p = (u = history.state) == null ? void 0 : u[d];
          m(p), e[a2] = true;
        }
      }
    }, !e[o]) {
      e[o] = true;
      const u = history.pushState, p = history.replaceState, S2 = (g) => (g === null || typeof g > "u" ? g = {} : (g == null ? void 0 : g.constructor) !== Object && (g = { _data: g }), g._qCityScroll = g._qCityScroll || y(), g);
      history.pushState = (g, h, w) => (g = S2(g), u.call(history, g, h, w)), history.replaceState = (g, h, w) => (g = S2(g), p.call(history, g, h, w));
    }
    e[c] = (u) => {
      if (e[s] || u.defaultPrevented)
        return;
      const p = u.target.closest("a[href]");
      if (p && !p.hasAttribute("preventdefault:click")) {
        const S2 = p.getAttribute("href"), g = new URL(location.href), h = new URL(S2, g), w = h.origin === g.origin, E3 = h.pathname + h.search === g.pathname + g.search;
        if (w && E3)
          if (u.preventDefault(), h.href !== g.href && history.pushState(null, "", h), !h.hash)
            h.href.endsWith("#") ? window.scrollTo(0, 0) : (e[a2] = false, clearTimeout(e[f2]), b({ ...y(), x: 0, y: 0 }), location.reload());
          else {
            const x2 = h.hash.slice(1), v3 = document.getElementById(x2);
            v3 && v3.scrollIntoView();
          }
      }
    }, e[$3] = () => {
      !e[s] && e[a2] && document.visibilityState === "hidden" && b();
    }, e[l] = () => {
      e[s] || !e[a2] || (clearTimeout(e[f2]), e[f2] = setTimeout(() => {
        b(), e[f2] = void 0;
      }, 200));
    }, e[a2] = true, setTimeout(() => {
      addEventListener("popstate", e[i]), addEventListener("scroll", e[l], { passive: true }), document.body.addEventListener("click", e[c]), e.navigation || document.addEventListener("visibilitychange", e[$3], { passive: true });
    }, 0);
  }
};
var t$ = zt(jc, "s_DyVc0YBIqQU");
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
  const e = Wn("nonce"), n = Ne(qo);
  if (n.value && n.value.length > 0) {
    const s = n.value.length;
    let o = null;
    for (let r = s - 1; r >= 0; r--)
      n.value[r].default && (o = ft(n.value[r].default, { children: o }, 1, "zl_0"));
    return ft(he, { children: [o, xt("script", { dangerouslySetInnerHTML: t }, { nonce: e }, null, 3, null)] }, 1, "zl_1");
  }
  return Sn;
};
var _$ = Qn(zt(s$, "s_e0ssiDXoeAM"));
var o$ = (t, e) => new URL(t, e.href);
var r$ = (t, e) => t.origin === e.origin;
var ls = (t) => t.endsWith("/") ? t : t + "/";
var i$ = ({ pathname: t }, { pathname: e }) => {
  const n = Math.abs(t.length - e.length);
  return n === 0 ? t === e : n === 1 && ls(t) === ls(e);
};
var c$ = (t, e) => t.search === e.search;
var $$ = (t, e) => c$(t, e) && i$(t, e);
var l$ = (t) => t && typeof t.then == "function";
var a$ = (t, e, n, s) => {
  const o = Ao(), i = { head: o, withLocale: (c) => Xn(s, c), resolveValue: (c) => {
    const $3 = c.__id;
    if (c.__brand === "server_loader" && !($3 in t.loaders))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    const l = t.loaders[$3];
    if (l$(l))
      throw new Error("Loaders returning a promise can not be resolved for the head function.");
    return l;
  }, ...e };
  for (let c = n.length - 1; c >= 0; c--) {
    const $3 = n[c] && n[c].head;
    $3 && (typeof $3 == "function" ? as(o, Xn(s, () => $3(i))) : typeof $3 == "object" && as(o, $3));
  }
  return i.head;
};
var as = (t, e) => {
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
var Ao = () => ({ title: "", meta: [], links: [], styles: [], scripts: [], frontmatter: {} });
var us;
(function(t) {
  t[t.EOL = 0] = "EOL", t[t.OPEN_BRACKET = 91] = "OPEN_BRACKET", t[t.CLOSE_BRACKET = 93] = "CLOSE_BRACKET", t[t.DOT = 46] = "DOT", t[t.SLASH = 47] = "SLASH";
})(us || (us = {}));
var T$ = () => Ne(Io);
var q$ = () => Ne(Ro);
var I$ = () => Ne(ko);
var u$ = () => Fe(Wn("qwikcity"));
var f$ = ":root{view-transition-name:none}";
var d$ = async (t, e) => {
  const [n, s, o, r] = wn(), { type: i = "link", forceReload: c = t === void 0, replaceState: $3 = false, scroll: l = true } = typeof e == "object" ? e : { forceReload: e }, a2 = o.value.dest, f2 = t === void 0 ? a2 : o$(t, r.url);
  if (r$(f2, a2) && !(!c && $$(f2, a2)))
    return o.value = { type: i, dest: f2, forceReload: c, replaceState: $3, scroll: l }, n.value = void 0, r.isNavigating = true, new Promise((d) => {
      s.r = d;
    });
};
var p$ = ({ track: t }) => {
  const [e, n, s, o, r, i, c, $3, l, a2, f2] = wn();
  async function d() {
    const [y, b] = t(() => [a2.value, e.value]), u = Zr(""), p = f2.url, S2 = b ? "form" : y.type;
    y.replaceState;
    let g, h, w = null;
    if (g = new URL(y.dest, f2.url), w = r.loadedRoute, h = r.response, w) {
      const [E3, x2, v3, _3] = w, q3 = v3, k2 = q3[q3.length - 1];
      f2.prevUrl = p, f2.url = g, f2.params = { ...x2 }, a2.untrackedValue = { type: S2, dest: g };
      const R2 = a$(h, f2, q3, u);
      n.headings = k2.headings, n.menu = _3, s.value = Fe(q3), o.links = R2.links, o.meta = R2.meta, o.styles = R2.styles, o.scripts = R2.scripts, o.title = R2.title, o.frontmatter = R2.frontmatter;
    }
  }
  return d();
};
var h$ = (t) => {
  Vc(zt(f$, "s_RPDJAz33WLA"));
  const e = u$();
  if (!(e != null && e.params))
    throw new Error("Missing Qwik City Env Data");
  const n = Wn("url");
  if (!n)
    throw new Error("Missing Qwik URL Env Data");
  const s = new URL(n), o = le({ url: s, params: e.params, isNavigating: false, prevUrl: void 0 }, { deep: false }), r = {}, i = Lc(le(e.response.loaders, { deep: false })), c = Ve({ type: "initial", dest: s, forceReload: false, replaceState: false, scroll: true }), $3 = le(Ao), l = le({ headings: void 0, menu: void 0 }), a2 = Ve(), f2 = e.response.action, d = f2 ? e.response.loaders[f2] : void 0, m = Ve(d ? { id: f2, data: e.response.formData, output: { result: d, status: e.response.status } } : void 0), y = zt(d$, "s_fX0bDjeJa0E", [m, r, c, o]);
  return lt(Kc, l), lt(qo, a2), lt(Io, $3), lt(Ro, o), lt(ko, y), lt(Xc, i), lt(Yc, m), lt(Zc, c), Qr(zt(p$, "s_02wMImzEAbk", [m, l, a2, $3, e, y, i, r, t, c, o])), ft(xe, null, 3, "qY_0");
};
var R$ = Qn(zt(h$, "s_TxCFOy819ag"));
var k$ = (t) => xt("script", { nonce: ci(t, "nonce") }, { dangerouslySetInnerHTML: Gc }, null, 3, "1Z_0");

// ../server/q-BAlY6AWG.js
init_checked_fetch();
init_modules_watch_stub();
var ye2 = ((t) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(t, { get: (e, n) => (typeof __require < "u" ? __require : e)[n] }) : t)(function(t) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var be2 = "<sync>";
function Z2(t, e) {
  const n = e == null ? void 0 : e.mapper, s = t.symbolMapper ? t.symbolMapper : (i) => {
    var a2;
    if (n) {
      const o = N2(i), c = n[o];
      if (!c) {
        if (o === be2)
          return [o, ""];
        if ((a2 = globalThis.__qwik_reg_symbols) == null ? void 0 : a2.has(o))
          return [i, "_"];
        console.error("Cannot resolve symbol", i, "in", n);
      }
      return c;
    }
  };
  return { isServer: true, async importSymbol(i, a2, o) {
    var _3;
    const c = N2(o), d = (_3 = globalThis.__qwik_reg_symbols) == null ? void 0 : _3.get(c);
    if (d)
      return d;
    let u = String(a2);
    u.endsWith(".js") || (u += ".js");
    const q3 = ye2(u);
    if (!(o in q3))
      throw new Error(`Q-ERROR: missing symbol '${o}' in module '${u}'.`);
    return q3[o];
  }, raf: () => (console.error("server can not rerender"), Promise.resolve()), nextTick: (i) => new Promise((a2) => {
    setTimeout(() => {
      a2(i());
    });
  }), chunkForSymbol(i) {
    return s(i, n);
  } };
}
async function _e2(t, e) {
  const n = Z2(t, e);
  m$(n);
}
var N2 = (t) => {
  const e = t.lastIndexOf("_");
  return e > -1 ? t.slice(e + 1) : t;
};
function z() {
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
var je2 = `(() => {
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
  return t.debug ? je2 : qe2;
}
function ke2(t, e, n) {
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
  const s = [], r = t == null ? void 0 : t.qrls, { mapper: i, manifest: a2 } = e, o = /* @__PURE__ */ new Map();
  if (Array.isArray(r))
    for (const c of r) {
      const d = c.getHash(), u = i[d];
      u && te2(a2, o, s, n, u[1]);
    }
  return s;
}
function te2(t, e, n, s, r) {
  const i = s + r;
  let a2 = e.get(i);
  if (!a2) {
    a2 = { url: i, imports: [] }, e.set(i, a2);
    const o = t.bundles[r];
    if (o && Array.isArray(o.imports))
      for (const c of o.imports)
        te2(t, e, a2.imports, s, c);
  }
  n.push(a2);
}
function xe2(t) {
  if (t != null && t.mapping != null && typeof t.mapping == "object" && t.symbols != null && typeof t.symbols == "object" && t.bundles != null && typeof t.bundles == "object")
    return t;
}
function I2() {
  let r = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return r += "w.postMessage(u.map(u=>new URL(u,origin)+''));", r += "w.onmessage=()=>{w.terminate()};", r;
}
function Ce2(t) {
  const e = { bundles: j2(t).map((n) => n.split("/").pop()) };
  return `document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`;
}
function j2(t) {
  const e = [], n = (s) => {
    if (Array.isArray(s))
      for (const r of s)
        e.includes(r.url) || (e.push(r.url), n(r.imports));
  };
  return n(t), e;
}
function ze2(t) {
  const e = /* @__PURE__ */ new Map();
  let n = 0;
  const s = (o, c) => {
    if (Array.isArray(o))
      for (const d of o) {
        const u = e.get(d.url) || 0;
        e.set(d.url, u + 1), n++, c.has(d.url) || (c.add(d.url), s(d.imports, c));
      }
  }, r = /* @__PURE__ */ new Set();
  for (const o of t)
    r.clear(), s(o.imports, r);
  const i = n / e.size * 2, a2 = Array.from(e.entries());
  return a2.sort((o, c) => c[1] - o[1]), a2.slice(0, 5).filter((o) => o[1] > i).map((o) => o[0]);
}
function Ne2(t, e, n) {
  const s = Fe2(t == null ? void 0 : t.implementation), r = [];
  return s.prefetchEvent === "always" && Ie2(r, e, n), s.linkInsert === "html-append" && De2(r, e, s), s.linkInsert === "js-append" ? Se2(r, e, s, n) : s.workerFetchInsert === "always" && Ee2(r, e, n), r.length > 0 ? v$(he, { children: r }) : null;
}
function Ie2(t, e, n) {
  const s = ze2(e);
  for (const r of s)
    t.push(v$("link", { rel: "modulepreload", href: r, nonce: n }));
  t.push(v$("script", { "q:type": "prefetch-bundles", dangerouslySetInnerHTML: Ce2(e) + ";document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))", nonce: n }));
}
function De2(t, e, n) {
  const s = j2(e), r = n.linkRel || "prefetch";
  for (const i of s) {
    const a2 = {};
    a2.href = i, a2.rel = r, (r === "prefetch" || r === "preload") && i.endsWith(".js") && (a2.as = "script"), t.push(v$("link", a2, void 0));
  }
}
function Se2(t, e, n, s) {
  const r = n.linkRel || "prefetch";
  let i = "";
  n.workerFetchInsert === "no-link-support" && (i += "let supportsLinkRel = true;"), i += `const u=${JSON.stringify(j2(e))};`, i += "u.map((u,i)=>{", i += "const l=document.createElement('link');", i += 'l.setAttribute("href",u);', i += `l.setAttribute("rel","${r}");`, n.workerFetchInsert === "no-link-support" && (i += "if(i===0){", i += "try{", i += `supportsLinkRel=l.relList.supports("${r}");`, i += "}catch(e){}", i += "}"), i += "document.body.appendChild(l);", i += "});", n.workerFetchInsert === "no-link-support" && (i += "if(!supportsLinkRel){", i += I2(), i += "}"), n.workerFetchInsert === "always" && (i += I2()), t.push(v$("script", { type: "module", "q:type": "link-js", dangerouslySetInnerHTML: i, nonce: s }));
}
function Ee2(t, e, n) {
  let s = `const u=${JSON.stringify(j2(e))};`;
  s += I2(), t.push(v$("script", { type: "module", "q:type": "prefetch-worker", dangerouslySetInnerHTML: s, nonce: n }));
}
function Fe2(t) {
  return { ...Te2, ...t };
}
var Te2 = { linkInsert: null, linkRel: null, workerFetchInsert: null, prefetchEvent: "always" };
var Oe2 = "<!DOCTYPE html>";
async function Ue2(t, e) {
  var L4, A3, R2;
  let n = e.stream, s = 0, r = 0, i = 0, a2 = 0, o = "", c;
  const d = ((L4 = e.streaming) == null ? void 0 : L4.inOrder) ?? { strategy: "auto", maximunInitialChunk: 5e4, maximunChunk: 3e4 }, u = e.containerTagName ?? "html", q3 = e.containerAttributes ?? {}, _3 = n, se4 = z(), ie4 = ee2(e), p = ne2(e.manifest);
  function S2() {
    o && (_3.write(o), o = "", s = 0, i++, i === 1 && (a2 = se4()));
  }
  function E3(l) {
    const f2 = l.length;
    s += f2, r += f2, o += l;
  }
  switch (d.strategy) {
    case "disabled":
      n = { write: E3 };
      break;
    case "direct":
      n = _3;
      break;
    case "auto":
      let l = 0, f2 = false;
      const B3 = d.maximunChunk ?? 0, x2 = d.maximunInitialChunk ?? 0;
      n = { write(y) {
        y === "<!--qkssr-f-->" ? f2 || (f2 = true) : y === "<!--qkssr-pu-->" ? l++ : y === "<!--qkssr-po-->" ? l-- : E3(y), l === 0 && (f2 || s >= (i === 0 ? x2 : B3)) && (f2 = false, S2());
      } };
      break;
  }
  u === "html" ? n.write(Oe2) : (n.write("<!--cq-->"), e.qwikLoader ? (e.qwikLoader.include === void 0 && (e.qwikLoader.include = "never"), e.qwikLoader.position === void 0 && (e.qwikLoader.position = "bottom")) : e.qwikLoader = { include: "never" }, e.qwikPrefetchServiceWorker || (e.qwikPrefetchServiceWorker = {}), e.qwikPrefetchServiceWorker.include || (e.qwikPrefetchServiceWorker.include = false), e.qwikPrefetchServiceWorker.position || (e.qwikPrefetchServiceWorker.position = "top")), e.manifest || console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."), await _e2(e, p);
  const F4 = p == null ? void 0 : p.manifest.injections, k2 = F4 ? F4.map((l) => v$(l.tag, l.attributes ?? {})) : [], v3 = ((A3 = e.qwikLoader) == null ? void 0 : A3.include) ?? "auto";
  if ((((R2 = e.qwikLoader) == null ? void 0 : R2.position) ?? "bottom") === "top" && v3 !== "never") {
    const l = J2({ debug: e.debug });
    k2.push(v$("script", { id: "qwikloader", dangerouslySetInnerHTML: l })), k2.push(v$("script", { dangerouslySetInnerHTML: "window.qwikevents.push('click')" }));
  }
  const re4 = z(), T3 = [];
  let O4 = 0, U2 = 0;
  await g$(t, { stream: n, containerTagName: u, containerAttributes: q3, serverData: e.serverData, base: ie4, beforeContent: k2, beforeClose: async (l, f2, B3, x2) => {
    var P3, H4, K4, W4, V4;
    O4 = re4();
    const y = z();
    c = await Bi(l, f2, void 0, x2);
    const g = [];
    if (e.prefetchStrategy !== null) {
      const w = ke2(c, e, p);
      if (w.length > 0) {
        const Y4 = Ne2(e.prefetchStrategy, w, (P3 = e.serverData) == null ? void 0 : P3.nonce);
        Y4 && g.push(Y4);
      }
    }
    const ae4 = JSON.stringify(c.state, void 0, void 0);
    g.push(v$("script", { type: "qwik/json", dangerouslySetInnerHTML: Le2(ae4), nonce: (H4 = e.serverData) == null ? void 0 : H4.nonce })), c.funcs.length > 0 && g.push(v$("script", { "q:func": "qwik/json", dangerouslySetInnerHTML: Be2(c.funcs), nonce: (K4 = e.serverData) == null ? void 0 : K4.nonce }));
    const ce4 = !c || c.mode !== "static", M3 = v3 === "always" || v3 === "auto" && ce4;
    if (M3) {
      const w = J2({ debug: e.debug });
      g.push(v$("script", { id: "qwikloader", dangerouslySetInnerHTML: w, nonce: (W4 = e.serverData) == null ? void 0 : W4.nonce }));
    }
    const Q4 = Array.from(f2.$events$, (w) => JSON.stringify(w));
    if (Q4.length > 0) {
      const w = (M3 ? "window.qwikevents" : "(window.qwikevents||=[])") + `.push(${Q4.join(", ")})`;
      g.push(v$("script", { dangerouslySetInnerHTML: w, nonce: (V4 = e.serverData) == null ? void 0 : V4.nonce }));
    }
    return Ae2(T3, l), U2 = y(), v$(he, { children: g });
  }, manifestHash: (p == null ? void 0 : p.manifest.manifestHash) || "dev" }), u !== "html" && n.write("<!--/cq-->"), S2();
  const oe4 = c.resources.some((l) => l._cache !== 1 / 0);
  return { prefetchResources: void 0, snapshotResult: c, flushes: i, manifest: p == null ? void 0 : p.manifest, size: r, isStatic: !oe4, timing: { render: O4, snapshot: U2, firstFlush: a2 }, _symbols: T3 };
}
function ne2(t) {
  if (t) {
    if ("mapper" in t)
      return t;
    if (t = xe2(t), t) {
      const e = {};
      return Object.entries(t.mapping).forEach(([n, s]) => {
        e[N2(n)] = [n, s];
      }), { mapper: e, manifest: t };
    }
  }
}
var Le2 = (t) => t.replace(/<(\/?script)/gi, "\\x3C$1");
function Ae2(t, e) {
  var n;
  for (const s of e) {
    const r = (n = s.$componentQrl$) == null ? void 0 : n.getSymbol();
    r && !t.includes(r) && t.push(r);
  }
}
var Re2 = 'document.currentScript.closest("[q\\\\:container]").qFuncs=';
function Be2(t) {
  return Re2 + `[${t.join(`,
`)}]`;
}
async function Je2(t) {
  const e = Z2({ manifest: t }, ne2(t));
  m$(e);
}
var Me2 = { manifestHash: "cjoc1p", symbols: { s_02wMImzEAbk: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_useTask", canonicalFilename: "s_02wmimzeabk", hash: "02wMImzEAbk", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_TxCFOy819ag", loc: [26977, 36148] }, s_RJzQRezNotE: { origin: "routes/blog/index.tsx", displayName: "blog_component_useTask", canonicalFilename: "s_rjzqreznote", hash: "RJzQRezNotE", ctxKind: "function", ctxName: "useTask$", captures: true, parent: "s_GBQBGBjVVwU", loc: [468, 842] }, s_0vphQYqOdZI: { origin: "components/router-head/router-head.tsx", displayName: "RouterHead_component", canonicalFilename: "s_0vphqyqodzi", hash: "0vphQYqOdZI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [243, 854] }, s_8gdLBszqbaM: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component", canonicalFilename: "s_8gdlbszqbam", hash: "8gdLBszqbaM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [38132, 40792] }, s_Ckljc1FxMOo: { origin: "components/page/overview.tsx", displayName: "overview_component", canonicalFilename: "s_ckljc1fxmoo", hash: "Ckljc1FxMOo", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [292, 1195] }, s_GBQBGBjVVwU: { origin: "routes/blog/index.tsx", displayName: "blog_component", canonicalFilename: "s_gbqbgbjvvwu", hash: "GBQBGBjVVwU", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [360, 1204] }, s_NCzEU0RO00k: { origin: "components/buttons/navButton.tsx", displayName: "navButton_component", canonicalFilename: "s_nczeu0ro00k", hash: "NCzEU0RO00k", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [198, 666] }, s_Nk9PlpjQm9Y: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component", canonicalFilename: "s_nk9plpjqm9y", hash: "Nk9PlpjQm9Y", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [51180, 52717] }, s_PX8yQoK5ags: { origin: "components/columns/sidemenu.tsx", displayName: "sidemenu_component", canonicalFilename: "s_px8yqok5ags", hash: "PX8yQoK5ags", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [187, 518] }, s_Te3w2ykiWWU: { origin: "icons/blog.tsx", displayName: "blog_component", canonicalFilename: "s_te3w2ykiwwu", hash: "Te3w2ykiWWU", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [75, 653] }, s_TxCFOy819ag: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component", canonicalFilename: "s_txcfoy819ag", hash: "TxCFOy819ag", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [23707, 36435] }, s_VKFlAWJuVm8: { origin: "routes/layout.tsx", displayName: "layout_component", canonicalFilename: "s_vkflawjuvm8", hash: "VKFlAWJuVm8", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [680, 1188] }, s_WmYC5H00wtI: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityMockProvider_component", canonicalFilename: "s_wmyc5h00wti", hash: "WmYC5H00wtI", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [36719, 38013] }, s_abp1tubNbSA: { origin: "icons/home.tsx", displayName: "home_component", canonicalFilename: "s_abp1tubnbsa", hash: "abp1tubNbSA", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [75, 605] }, s_ati7nisKH2g: { origin: "routes/[...home]/layout.tsx", displayName: "layout_component", canonicalFilename: "s_ati7niskh2g", hash: "ati7nisKH2g", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [589, 617] }, s_e0ssiDXoeAM: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "RouterOutlet_component", canonicalFilename: "s_e0ssidxoeam", hash: "e0ssiDXoeAM", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [7817, 8531] }, s_rkuYV2qXCqk: { origin: "icons/website.tsx", displayName: "website_component", canonicalFilename: "s_rkuyv2qxcqk", hash: "rkuYV2qXCqk", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [75, 846] }, s_tntnak2DhJ8: { origin: "root.tsx", displayName: "root_component", canonicalFilename: "s_tntnak2dhj8", hash: "tntnak2DhJ8", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [268, 793] }, s_uJ8rhQ0Ae0E: { origin: "routes/[...home]/index!.tsx", displayName: "index__component", canonicalFilename: "s_uj8rhq0ae0e", hash: "uJ8rhQ0Ae0E", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [174, 283] }, s_wCieFdpQfC4: { origin: "routes/blog/[id]/index.tsx", displayName: "_id__component", canonicalFilename: "s_wciefdpqfc4", hash: "wCieFdpQfC4", ctxKind: "function", ctxName: "component$", captures: false, parent: null, loc: [146, 308] }, s_RPDJAz33WLA: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_useStyles", canonicalFilename: "s_rpdjaz33wla", hash: "RPDJAz33WLA", ctxKind: "function", ctxName: "useStyles$", captures: false, parent: "s_TxCFOy819ag", loc: [23762, 23796] }, s_A5bZC7WO00A: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "routeActionQrl_action_submit", canonicalFilename: "s_a5bzc7wo00a", hash: "A5bZC7WO00A", ctxKind: "function", ctxName: "submit", captures: true, parent: null, loc: [41838, 43472] }, s_DyVc0YBIqQU: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "spa_init", canonicalFilename: "s_dyvc0ybiqqu", hash: "DyVc0YBIqQU", ctxKind: "function", ctxName: "spaInit", captures: false, parent: null, loc: [1355, 6830] }, s_wOIPfiQ04l4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "serverQrl_stuff", canonicalFilename: "s_woipfiq04l4", hash: "wOIPfiQ04l4", ctxKind: "function", ctxName: "stuff", captures: true, parent: null, loc: [46780, 48976] }, s_BUbtvTyvVRE: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityMockProvider_component_goto", canonicalFilename: "s_bubtvtyvvre", hash: "BUbtvTyvVRE", ctxKind: "function", ctxName: "goto", captures: false, parent: "s_WmYC5H00wtI", loc: [37134, 37212] }, s_Osdg8FnYTw4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component_handlePrefetch", canonicalFilename: "s_osdg8fnytw4", hash: "Osdg8FnYTw4", ctxKind: "function", ctxName: "handlePrefetch", captures: false, parent: "s_8gdLBszqbaM", loc: [38832, 39163] }, s_fX0bDjeJa0E: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "QwikCityProvider_component_goto", canonicalFilename: "s_fx0bdjeja0e", hash: "fX0bDjeJa0E", ctxKind: "function", ctxName: "goto", captures: true, parent: "s_TxCFOy819ag", loc: [25046, 26365] }, s_kxX7fiVjwOg: { origin: "components/page/overview.tsx", displayName: "overview_component_div_onClick", canonicalFilename: "s_kxx7fivjwog", hash: "kxX7fiVjwOg", ctxKind: "eventHandler", ctxName: "onClick$", captures: true, parent: "s_Ckljc1FxMOo", loc: [967, 997] }, s_lNnfZJK390A: { origin: "components/buttons/navButton.tsx", displayName: "navButton_component_div_onClick", canonicalFilename: "s_lnnfzjk390a", hash: "lNnfZJK390A", ctxKind: "eventHandler", ctxName: "onClick$", captures: true, parent: "s_NCzEU0RO00k", loc: [530, 622] }, s_p9MSze0ojs4: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "GetForm_component_form_onSubmit", canonicalFilename: "s_p9msze0ojs4", hash: "p9MSze0ojs4", ctxKind: "function", ctxName: "_jsxS", captures: true, parent: "s_Nk9PlpjQm9Y", loc: [51668, 52365] }, s_pIf0khHUxfY: { origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs", displayName: "Link_component_handleClick", canonicalFilename: "s_pif0khhuxfy", hash: "pIf0khHUxfY", ctxKind: "function", ctxName: "handleClick", captures: true, parent: "s_8gdLBszqbaM", loc: [39590, 40110] } }, mapping: { s_02wMImzEAbk: "q-iOYT_O-U.js", s_RJzQRezNotE: "q-CU-c9mO9.js", s_0vphQYqOdZI: "q-Cw3HWz4B.js", s_8gdLBszqbaM: "q-BHfHhQED.js", s_Ckljc1FxMOo: "q-B9t6C0VI.js", s_GBQBGBjVVwU: "q-CU-c9mO9.js", s_NCzEU0RO00k: "q-CyllwzCH.js", s_Nk9PlpjQm9Y: "q-BFf8M61s.js", s_PX8yQoK5ags: "q-n7bVZlJJ.js", s_Te3w2ykiWWU: "q-CU-c9mO9.js", s_TxCFOy819ag: "q-iOYT_O-U.js", s_VKFlAWJuVm8: "q-BRX6CAaR.js", s_WmYC5H00wtI: "q-DRta8W3d.js", s_abp1tubNbSA: "q-DUjUOCfh.js", s_ati7nisKH2g: "q-BRX6CAaR.js", s_e0ssiDXoeAM: "q-D6Nhgb7v.js", s_rkuYV2qXCqk: "q-riO9RDYx.js", s_tntnak2DhJ8: "q-CoI-CSc9.js", s_uJ8rhQ0Ae0E: "q-8g2DlRfV.js", s_wCieFdpQfC4: "q-CfIofEXj.js", s_RPDJAz33WLA: "q-iOYT_O-U.js", s_A5bZC7WO00A: "q-0r1y4-f6.js", s_DyVc0YBIqQU: "q-D3WBTSLL.js", s_wOIPfiQ04l4: "q-BrcPqlHg.js", s_BUbtvTyvVRE: "q-DRta8W3d.js", s_Osdg8FnYTw4: "q-BHfHhQED.js", s_fX0bDjeJa0E: "q-iOYT_O-U.js", s_kxX7fiVjwOg: "q-B9t6C0VI.js", s_lNnfZJK390A: "q-CyllwzCH.js", s_p9MSze0ojs4: "q-BFf8M61s.js", s_pIf0khHUxfY: "q-BHfHhQED.js" }, bundles: { "q-0r1y4-f6.js": { size: 751, imports: ["q-D3MggUs2.js"], origins: ["src/entry_routeActionQrl.js", "src/s_a5bzc7wo00a.js"], symbols: ["s_A5bZC7WO00A"] }, "q-48XDcKw-.js": { size: 142, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-CoI-CSc9.js"], origins: ["src/global.css", "src/root.tsx"] }, "q-6HKfFpaa.js": { size: 125, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-Bq36Wx9q.js"], origins: ["@qwik-city-entries"] }, "q-8g2DlRfV.js": { size: 208, imports: ["q-BKrlWzc8.js", "q-D3MggUs2.js"], origins: ["src/entry_index_.js", "src/s_uj8rhq0ae0e.js"], symbols: ["s_uJ8rhQ0Ae0E"] }, "q-B0CYnNM0.js": { size: 228, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-CU-c9mO9.js"], origins: ["src/routes/blog/index.tsx"] }, "q-B5D7H8at.js": { size: 240, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-8g2DlRfV.js"], origins: ["src/routes/[...home]/index!.tsx"] }, "q-B9t6C0VI.js": { size: 995, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry_overview.js", "src/s_ckljc1fxmoo.js", "src/s_kxx7fivjwog.js"], symbols: ["s_Ckljc1FxMOo", "s_kxX7fiVjwOg"] }, "q-BFf8M61s.js": { size: 1162, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry_GetForm.js", "src/s_nk9plpjqm9y.js", "src/s_p9msze0ojs4.js"], symbols: ["s_Nk9PlpjQm9Y", "s_p9MSze0ojs4"] }, "q-BHfHhQED.js": { size: 1601, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry_Link.js", "src/s_8gdlbszqbam.js", "src/s_osdg8fnytw4.js", "src/s_pif0khhuxfy.js"], symbols: ["s_8gdLBszqbaM", "s_Osdg8FnYTw4", "s_pIf0khHUxfY"] }, "q-BKrlWzc8.js": { size: 332, origins: ["src/styleY.tsx"] }, "q-Bq36Wx9q.js": { size: 2539, origins: ["node_modules/@builder.io/qwik-city/service-worker.mjs", "src/routes/service-worker.ts"] }, "q-BrcPqlHg.js": { size: 895, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry_serverQrl.js", "src/s_woipfiq04l4.js"], symbols: ["s_wOIPfiQ04l4"] }, "q-BRX6CAaR.js": { size: 549, imports: ["q-BKrlWzc8.js", "q-D3MggUs2.js"], dynamicImports: ["q-n7bVZlJJ.js"], origins: ["src/components/columns/sidemenu.tsx", "src/entry_layout.js", "src/s_ati7niskh2g.js", "src/s_vkflawjuvm8.js"], symbols: ["s_ati7nisKH2g", "s_VKFlAWJuVm8"] }, "q-CfIofEXj.js": { size: 258, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry__id_.js", "src/s_wciefdpqfc4.js"], symbols: ["s_wCieFdpQfC4"] }, "q-CoI-CSc9.js": { size: 478, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], dynamicImports: ["q-Cw3HWz4B.js"], origins: ["src/components/router-head/router-head.tsx", "src/entry_root.js", "src/s_tntnak2dhj8.js"], symbols: ["s_tntnak2DhJ8"] }, "q-Cp7mlBGu.js": { size: 240, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-CfIofEXj.js"], origins: ["src/routes/blog/[id]/index.tsx"] }, "q-CU-c9mO9.js": { size: 24697, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-B9t6C0VI.js"], origins: ["node_modules/appwrite/dist/esm/sdk.js", "node_modules/cross-fetch/dist/browser-ponyfill.js", "src/components/page/overview.tsx", "src/config.tsx", "src/entry_blog.js", "src/s_gbqbgbjvvwu.js", "src/s_rjzqreznote.js", "src/s_te3w2ykiwwu.js"], symbols: ["s_GBQBGBjVVwU", "s_RJzQRezNotE", "s_Te3w2ykiWWU"] }, "q-Cw3HWz4B.js": { size: 717, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry_RouterHead.js", "src/s_0vphqyqodzi.js"], symbols: ["s_0vphQYqOdZI"] }, "q-CyllwzCH.js": { size: 593, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry_navButton.js", "src/s_lnnfzjk390a.js", "src/s_nczeu0ro00k.js"], symbols: ["s_lNnfZJK390A", "s_NCzEU0RO00k"] }, "q-D3MggUs2.js": { size: 49851, origins: ["node_modules/@builder.io/qwik/core.min.mjs"] }, "q-D3WBTSLL.js": { size: 2280, origins: ["src/entry_spaInit.js", "src/s_dyvc0ybiqqu.js"], symbols: ["s_DyVc0YBIqQU"] }, "q-D6Nhgb7v.js": { size: 457, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry_RouterOutlet.js", "src/s_e0ssidxoeam.js"], symbols: ["s_e0ssiDXoeAM"] }, "q-Djzszs5J.js": { size: 245, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-BRX6CAaR.js"], origins: ["src/routes/[...home]/layout.tsx"] }, "q-DOqYG6p-.js": { size: 245, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-BRX6CAaR.js"], origins: ["src/routes/layout.tsx"] }, "q-DRta8W3d.js": { size: 816, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], origins: ["src/entry_QwikCityMockProvider.js", "src/s_bubtvtyvvre.js", "src/s_wmyc5h00wti.js"], symbols: ["s_BUbtvTyvVRE", "s_WmYC5H00wtI"] }, "q-DUjUOCfh.js": { size: 540, imports: ["q-D3MggUs2.js"], origins: ["src/entry_home.js", "src/s_abp1tubnbsa.js"], symbols: ["s_abp1tubNbSA"] }, "q-DwvGIjLk.js": { size: 7713, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-D3WBTSLL.js", "q-D6Nhgb7v.js", "q-iOYT_O-U.js"], origins: ["@qwik-city-sw-register", "node_modules/@builder.io/qwik-city/index.qwik.mjs"] }, "q-iOYT_O-U.js": { size: 5716, imports: ["q-D3MggUs2.js", "q-DwvGIjLk.js"], dynamicImports: ["q-6HKfFpaa.js", "q-B0CYnNM0.js", "q-B5D7H8at.js", "q-Cp7mlBGu.js", "q-Djzszs5J.js", "q-DOqYG6p-.js"], origins: ["@qwik-city-plan", "src/entry_QwikCityProvider.js", "src/s_02wmimzeabk.js", "src/s_fx0bdjeja0e.js", "src/s_rpdjaz33wla.js", "src/s_txcfoy819ag.js"], symbols: ["s_02wMImzEAbk", "s_fX0bDjeJa0E", "s_RPDJAz33WLA", "s_TxCFOy819ag"] }, "q-n7bVZlJJ.js": { size: 534, imports: ["q-D3MggUs2.js"], dynamicImports: ["q-CU-c9mO9.js", "q-CyllwzCH.js", "q-DUjUOCfh.js"], origins: ["src/components/buttons/navButton.tsx", "src/entry_sidemenu.js", "src/icons/blog.tsx", "src/icons/home.tsx", "src/s_px8yqok5ags.js"], symbols: ["s_PX8yQoK5ags"] }, "q-riO9RDYx.js": { size: 781, imports: ["q-D3MggUs2.js"], origins: ["src/entry_website.js", "src/s_rkuyv2qxcqk.js"], symbols: ["s_rkuYV2qXCqk"] } }, injections: [{ tag: "style", location: "head", attributes: { "data-src": "/build/q-3JzfhcPX.css", dangerouslySetInnerHTML: `/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com
 */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.m-1{margin:.25rem}.m-3{margin:.75rem}.m-4{margin:1rem}.m-8{margin:2rem}.mx-12{margin-left:3rem;margin-right:3rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.box-border{box-sizing:border-box}.flex{display:flex}.h-1{height:.25rem}.h-9{height:2.25rem}.h-full{height:100%}.h-screen{height:100vh}.max-h-\\[100vh\\]{max-height:100vh}.w-1\\/5{width:20%}.w-4\\/5{width:80%}.w-9{width:2.25rem}.w-full{width:100%}.w-screen{width:100vw}.max-w-2xl{max-width:42rem}.max-w-\\[70px\\]{max-width:70px}.max-w-sm{max-width:24rem}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-x-hidden{overflow-x:hidden}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-md{border-radius:.375rem}.border-4{border-width:4px}.border-txtPrimary{border-color:var(--primary)}.bg-transparent{background-color:transparent}.bg-txtSecondary{background-color:var(--txt-secondary)}.stroke-txtPrimary{stroke:var(--primary)}.p-2{padding:.5rem}.p-4{padding:1rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-6xl{font-size:3.75rem;line-height:1}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-semibold{font-weight:600}.italic{font-style:italic}.shadow-border{--tw-shadow: 4px 4px var(--primary), -4px -4px var(--primary);--tw-shadow-colored: 4px 4px var(--tw-shadow-color), -4px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:root{--background: #dcdcdc;--bg-secondary: #adacac;--primary: #00000a;--txt-secondary: #000025;--warning: "bg-red-600";background-color:var(--background);color:var(--primary)}.hover\\:bg-bgSecondary:hover{background-color:var(--bg-secondary)}@media (min-width: 640px){.sm\\:hidden{display:none}.sm\\:max-w-\\[70px\\]{max-width:70px}}@media (min-width: 768px){.md\\:flex{display:flex}}
` } }], version: "1", options: { target: "client", buildMode: "production", entryStrategy: { type: "smart" } }, platform: { qwik: "1.5.2", vite: "", rollup: "4.16.4", env: "node", os: "darwin", node: "20.11.1" } };
var Qe2 = () => {
  const t = T$(), e = q$();
  return ft(he, { children: [xt("title", null, null, t.title, 1, null), xt("link", null, { rel: "canonical", href: y$((n) => n.url.href, [e], "p0.url.href") }, null, 3, null), xt("meta", null, { name: "viewport", content: "width=device-width, initial-scale=1.0" }, null, 3, null), xt("link", null, { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }, null, 3, null), t.meta.map((n) => S$("meta", { ...n }, null, 0, n.key)), t.links.map((n) => S$("link", { ...n }, null, 0, n.key)), t.styles.map((n) => S$("style", { ...n.props, get dangerouslySetInnerHTML() {
    return n.style;
  }, dangerouslySetInnerHTML: ci(n, "style") }, null, 0, n.key))] }, 1, "0D_0");
};
var Pe2 = Qn(zt(Qe2, "s_0vphQYqOdZI"));
var He2 = () => ft(R$, { children: [xt("head", null, null, [xt("meta", null, { charSet: "utf-8" }, null, 3, null), xt("link", null, { rel: "manifest", href: "/manifest.json" }, null, 3, null), ft(Pe2, null, 3, "vp_0")], 1, null), xt("body", null, { lang: "en" }, [ft(_$, null, 3, "vp_1"), ft(k$, null, 3, "vp_2")], 1, null)] }, 1, "vp_3");
var Ke2 = Qn(zt(He2, "s_tntnak2DhJ8"));
function $e2(t) {
  return Ue2(ft(Ke2, null, 3, "Qb_0"), { manifest: Me2, ...t, containerAttributes: { lang: "en-us", ...t.containerAttributes } });
}

// ../server/@qwik-city-plan.js
init_checked_fetch();
init_modules_watch_stub();

// ../node_modules/appwrite/dist/esm/sdk.js
init_checked_fetch();
init_modules_watch_stub();
var import_isomorphic_form_data = __toESM(require_browser(), 1);
var import_cross_fetch = __toESM(require_browser_ponyfill(), 1);
function __awaiter(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
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
function __classPrivateFieldGet(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
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

// ../server/@qwik-city-plan.js
var S = ["flex", "w-screen", "h-screen", "text-6xl", "justify-center", "items-center", "font-extrabold"];
var Q2 = ["flex", "w-full", "max-h-[100vh]", "justify-center", "overflow-hidden", "scrollbar-hidden"];
var O2 = ["p-4", "flex", "mt-4", "w-full", "flex-col", "h-screen", "rounded-md", "items-center", "shadow-border", "scrollbar-hidden"];
var M2 = (e) => {
  const n = I$();
  return xt("div", { class: ["m-3", "flex", "rounded", "border-4", "items-center", "border-txtPrimary", "justify-center", "hover:bg-bgSecondary"] }, { onClick$: E$("s_lNnfZJK390A", [n, e]) }, y$((c) => c.icon, [e], "p0.icon"), 3, "tW_0");
};
var f = Qn(zt(M2, "s_NCzEU0RO00k"));
var T2 = () => xt("svg", null, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", class: "stroke-txtPrimary h-9 w-9" }, xt("path", null, { "stroke-linecap": "round", "stroke-linejoin": "round", d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" }, null, 3, null), 3, "Z5_0");
var V2 = Qn(zt(T2, "s_abp1tubNbSA"));
var A2 = () => xt("svg", null, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "stroke-width": "2", class: "stroke-txtPrimary h-9 w-9" }, xt("path", null, { "stroke-linecap": "round", "stroke-linejoin": "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" }, null, 3, null), 3, "1K_0");
var I3 = Qn(zt(A2, "s_Te3w2ykiWWU"));
var N3 = () => xt("div", { class: ["w-1/5", "flex", "flex-col", "justify-center", "max-w-[70px]"] }, null, [ft(f, { get icon() {
  return v$(V2, {});
}, [M]: { icon: M } }, 3, "Tj_0"), ft(f, { get icon() {
  return v$(I3, {});
}, link: "blog", [M]: { icon: M, link: M } }, 3, "Tj_1")], 1, "Tj_2");
var W2 = Qn(zt(N3, "s_PX8yQoK5ags"));
var z2 = async ({ cacheControl: e }) => {
  e({ staleWhileRevalidate: 604800, maxAge: 5 });
};
var R = () => xt("div", null, { class: Q2 }, [xt("div", { class: [["w-1/5", "flex", "justify-end", "items-center", "sm:max-w-[70px]"], ["sm:hidden md:flex"]] }, null, null, 3, null), xt("div", { class: ["flex", "w-4/5", "h-full", "m-4"] }, null, xt("div", null, { class: O2 }, ft(xe, null, 3, "yB_0"), 1, null), 1, null), ft(W2, null, 3, "yB_1")], 1, "yB_2");
var G2 = Qn(zt(R, "s_VKFlAWJuVm8"));
var L2 = Object.freeze(Object.defineProperty({ __proto__: null, default: G2, onGet: z2 }, Symbol.toStringTag, { value: "Module" }));
var a = { url: "https://appwrite.domcogan.app/v1", projectId: "6621bd6a00282722c88e", databasesId: "6621bdfa001d92f8fa33", blogCollectionId: "6622e812003c292dedb5", itemCollectionId: "662444e20028c21a42fd", sectionCollectionId: "662451cc003b8feca015" };
var _ = new Client();
_.setProject(a.projectId);
_.setEndpoint(a.url);
var q = new Databases(_);
async function E() {
  const e = await q.listDocuments(a.databasesId, a.blogCollectionId);
  return console.log(e), e;
}
var F2 = (e) => {
  const n = I$(), r = ["p-2", "m-1", "flex", "flex-col", "max-w-sm", "rounded-2xl", "cursor-pointer", e.bgColor ? e.bgColor : "bg-transparent", "hover:bg-hover", "box-border", "shadow-border"], c = ["flex", "italic", "w-full", "text-2xl", "font-bold", "text-center", "select-none", "justify-center", e.txColor ? e.txColor : "text-txPrimary"], w = ["text-base", "mt-6", "select-none"];
  return xt("div", { class: r }, { onClick$: E$("s_kxX7fiVjwOg", [n, e]) }, [e.image ? xt("div", null, null, null, 3, "BN_0") : ft(he, null, 3, "BN_1"), xt("div", null, null, [xt("div", { class: c }, null, y$((u) => u.title, [e], "p0.title"), 3, null), xt("div", { class: w }, null, y$((u) => u.description, [e], "p0.description"), 3, null)], 1, null)], 1, e.key);
};
var H2 = Qn(zt(F2, "s_Ckljc1FxMOo"));
var K2 = async () => {
  const [e] = wn();
  try {
    const r = (await E()).documents.map((c) => ({ id: c.$id, title: c.title, overview: c.overview }));
    e.blogPosts = r;
  } catch (n) {
    console.error(n);
  }
};
var U = () => {
  const e = le({ blogPosts: [] });
  return Qr(zt(K2, "s_RJzQRezNotE", [e])), xt("div", null, null, e.blogPosts.length > 0 ? e.blogPosts.map((n) => ft(H2, { get title() {
    return n.title;
  }, get id() {
    return n.id;
  }, get description() {
    return n.overview;
  }, [M]: { title: ii(n, "title"), id: ii(n, "id"), description: ii(n, "overview") } }, 3, n.id)) : xt("p", null, null, "Loading blog posts...", 3, "B0_0"), 1, "B0_1");
};
var $ = Qn(zt(U, "s_GBQBGBjVVwU"));
var J3 = { meta: [{ name: "Blog", content: "These are the blogs that I have uploaded" }] };
var D2 = Object.freeze(Object.defineProperty({ __proto__: null, default: $, head: J3 }, Symbol.toStringTag, { value: "Module" }));
var X2 = () => {
  const n = q$().params.id;
  return ft(he, { children: [xt("div", null, null, "Single blog post ", 3, null), xt("div", null, null, n, 1, null)] }, 1, "4y_0");
};
var Y2 = Qn(zt(X2, "s_wCieFdpQfC4"));
var Z3 = { title: "Welcome to Qwik", meta: [{ name: "description", content: "Qwik site description" }] };
var ee3 = Object.freeze(Object.defineProperty({ __proto__: null, default: Y2, head: Z3 }, Symbol.toStringTag, { value: "Module" }));
var te3 = () => ft(he, { children: xt("div", null, { class: S }, "Site Under Construction", 3, null) }, 3, "Vi_0");
var ne3 = Qn(zt(te3, "s_uJ8rhQ0Ae0E"));
var oe2 = { title: "Welcome to Qwik", meta: [{ name: "description", content: "Qwik site description" }] };
var le2 = Object.freeze(Object.defineProperty({ __proto__: null, default: ne3, head: oe2 }, Symbol.toStringTag, { value: "Module" }));
var se2 = [];
var v = () => L2;
var ce2 = [["blog/", [v, () => D2], "/blog/", ["q-DOqYG6p-.js", "q-B0CYnNM0.js"]], ["blog/[id]/", [v, () => ee3], "/blog/[id]/", ["q-DOqYG6p-.js", "q-Cp7mlBGu.js"]], ["[...home]", [() => le2], "/[...home]", ["q-B5D7H8at.js"]]];
var ie2 = [];
var re2 = true;
var ae2 = "/";
var ue2 = true;
var me2 = { routes: ce2, serverPlugins: se2, menus: ie2, trailingSlash: re2, basePathname: ae2, cacheModules: ue2 };

// ../server/entry.cloudflare-pages.js
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
  typeof e != "number" && (e = 500), typeof t == "string" ? t = We2(t) : t = "";
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
var We2 = (e) => e.replace(De3, (t) => {
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
  const a2 = Ie3(n.sameSite);
  return a2 && r.push(`SameSite=${a2}`), n.secure && r.push("Secure"), r.join("; ");
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
      const a2 = r.indexOf("=");
      a2 !== -1 && (t[X3(r.slice(0, a2).trim())] = X3(r.slice(a2 + 1).trim()));
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
var j3 = Symbol("response-cookies");
var _2 = Symbol("live-cookies");
var oe3;
var ce3;
var Qe3 = class {
  constructor(e) {
    this[oe3] = {}, this[ce3] = {}, this[k] = He3(e), this[_2] = { ...this[k] };
  }
  get(e, t = true) {
    const n = this[t ? _2 : k][e];
    return n ? { value: n, json() {
      return JSON.parse(n);
    }, number() {
      return Number(n);
    } } : null;
  }
  getAll(e = true) {
    return Object.keys(this[e ? _2 : k]).reduce((t, n) => (t[n] = this.get(n), t), {});
  }
  has(e, t = true) {
    return !!this[t ? _2 : k][e];
  }
  set(e, t, n = {}) {
    this[_2][e] = typeof t == "string" ? t : JSON.stringify(t);
    const r = typeof t == "string" ? t : encodeURIComponent(JSON.stringify(t));
    this[j3][e] = Le3(e, r, n);
  }
  delete(e, t) {
    this.set(e, "deleted", { ...t, maxAge: 0 }), this[_2][e] = null;
  }
  headers() {
    return Object.values(this[j3]);
  }
};
oe3 = j3, ce3 = _2;
var Ue3 = (e, t) => {
  const n = t.headers();
  if (n.length > 0) {
    const r = new Headers(e);
    for (const a2 of n)
      r.append("Set-Cookie", a2);
    return r;
  }
  return e;
};
var B2 = class {
};
var W3 = class extends B2 {
};
var G3 = /* @__PURE__ */ new WeakMap();
var J4 = "qaction";
var ze3 = "qfunc";
function Fe3(e) {
  const { url: t, params: n, request: r, status: a2, locale: i } = e, s = {};
  r.headers.forEach((w, y) => s[y] = w);
  const o = e.sharedMap.get(H3), l = e.sharedMap.get(me3), c = e.sharedMap.get(pe2), d = e.sharedMap.get(at2), h = e.request.headers, m = new URL(t.pathname + t.search, t), u = h.get("X-Forwarded-Host"), g = h.get("X-Forwarded-Proto");
  return u && (m.port = "", m.host = u), g && (m.protocol = g), { url: m.href, requestHeaders: s, locale: i(), nonce: d, containerAttributes: { "q:route": c }, qwikcity: { routeName: c, ev: e, params: { ...n }, loadedRoute: st(e), response: { status: a2(), loaders: I4(e), action: o, formData: l } } };
}
var je3 = (e, t, n, r, a2) => {
  const i = [], s = [], o = [], l = !!(t && Ve2(t[2]));
  if (e && V3(i, s, o, e, l, n), t) {
    const c = t[0];
    r && (n === "POST" || n === "PUT" || n === "PATCH" || n === "DELETE") && o.unshift(Ye2), l && (n === "POST" && o.push(Xe2), o.push(Ge2), o.push(Ee3)), o.push(qe3), V3(i, s, o, t[2], l, n), l && (o.push((d) => {
      d.sharedMap.set(pe2, c);
    }), o.push(Be3(i, s)), o.push(a2));
  }
  return o;
};
var V3 = (e, t, n, r, a2, i) => {
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
    if (typeof o == "function" ? n.push(o) : Array.isArray(o) && n.push(...o), a2) {
      const l = Object.values(s).filter((d) => Y3(d, "server_loader"));
      e.push(...l);
      const c = Object.values(s).filter((d) => Y3(d, "server_action"));
      t.push(...c);
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
    const { method: r } = n, a2 = I4(n), i = Q3(n) === "dev", s = n[L3];
    if (i && r === "GET" && n.query.has(J4) && console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`), r === "POST") {
      const o = n.query.get(J4);
      if (o) {
        const l = globalThis._qwikActionsMap, c = t.find((d) => d.__id === o) ?? (l == null ? void 0 : l.get(o));
        if (c) {
          n.sharedMap.set(H3, o);
          const d = await n.parseBody();
          if (!d || typeof d != "object")
            throw new Error("Expected request data to be an object");
          const h = await Z4(n, c.__validators, d, i);
          if (!h.success)
            a2[o] = n.fail(h.status ?? 500, h.error);
          else {
            const m = i ? await N4(n, c.__qrl.getSymbol().split("_", 1)[0], () => c.__qrl.call(n, h.data, n)) : await c.__qrl.call(n, h.data, n);
            i && O3(s, m, c.__qrl), a2[o] = m;
          }
        }
      }
    }
    e.length > 0 && await Promise.all(e.map((o) => {
      const l = o.__id;
      return a2[l] = Z4(n, o.__validators, void 0, i).then((c) => c.success ? i ? N4(n, o.__qrl.getSymbol().split("_", 1)[0], () => o.__qrl.call(n, n)) : o.__qrl.call(n, n) : n.fail(c.status ?? 500, c.error)).then((c) => (typeof c == "function" ? a2[l] = c() : (i && O3(s, c, o.__qrl), a2[l] = c), c));
    }));
  };
}
async function Z4(e, t, n, r) {
  let a2 = { success: true, data: n };
  if (t)
    for (const i of t)
      if (r ? a2 = await N4(e, "validator$", () => i.validate(e, n)) : a2 = await i.validate(e, n), a2.success)
        n = a2.data;
      else
        return a2;
  return a2;
}
function Ke3(e) {
  return e ? typeof e == "object" && Symbol.asyncIterator in e : false;
}
async function Xe2(e) {
  const t = e.query.get(ze3);
  if (t && e.request.headers.get("X-QRL") === t && e.request.headers.get("Content-Type") === "application/qwik-json") {
    e.exit();
    const n = Q3(e) === "dev", r = e[L3], a2 = await e.parseBody();
    if (Array.isArray(a2)) {
      const [i, ...s] = a2;
      if (Je3(i) && i.getHash() === t) {
        let o;
        try {
          n ? o = await N4(e, `server_${i.getSymbol()}`, () => i.apply(e, s)) : o = await i.apply(e, s);
        } catch (l) {
          e.headers.set("Content-Type", "application/qwik-json"), e.send(500, await r._serializeData(l, true));
          return;
        }
        if (Ke3(o)) {
          e.headers.set("Content-Type", "text/qwik-json-stream");
          const c = e.getWritableStream().getWriter();
          for await (const d of o) {
            n && O3(r, d, i);
            const h = await r._serializeData(d, true);
            if (e.signal.aborted)
              break;
            await c.write($2.encode(`${h}
`));
          }
          c.close();
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
  const t = K3(e), { basePathname: n, pathname: r, url: a2, sharedMap: i } = e;
  if (!i.has(P2) && r !== n && !r.endsWith(".html")) {
    if (t) {
      if (!r.endsWith("/"))
        throw e.redirect(302, r + "/" + a2.search);
    } else if (r.endsWith("/"))
      throw e.redirect(302, r.slice(0, r.length - 1) + a2.search);
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
function Ve2(e) {
  const t = e[e.length - 1];
  return t && typeof t.default == "function";
}
function le3(e, t) {
  return e = new URL(e), e.pathname.endsWith(x) && (e.pathname = e.pathname.slice(0, -x.length)), t ? e.pathname.endsWith("/") || (e.pathname += "/") : e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1)), e.toString().substring(e.origin.length);
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
    if (t.headersSent || t.sharedMap.has(P2))
      return;
    t.request.headers.forEach((h, m) => h);
    const r = t.headers;
    r.has("Content-Type") || r.set("Content-Type", "text/html; charset=utf-8");
    const a2 = K3(t), { readable: i, writable: s } = new TextEncoderStream(), o = t.getWritableStream(), l = i.pipeTo(o, { preventClose: true }), c = s.getWriter(), d = t.status();
    try {
      const h = Q3(t) === "static", m = Fe3(t), u = await e({ base: t.basePathname + "build/", stream: c, serverData: m, containerAttributes: { "q:render": h ? "static" : "", ...m.containerAttributes } }), g = { loaders: I4(t), action: t.sharedMap.get(H3), status: d !== 200 ? d : 200, href: le3(t.url, a2) };
      typeof u.html == "string" && await c.write(u.html), t.sharedMap.set("qData", g);
    } finally {
      await c.ready, await c.close(), await l;
    }
    await o.close();
  };
}
async function qe3(e) {
  if (e.sharedMap.has(P2)) {
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
  if (e.sharedMap.has(P2)) {
    if (await e.next(), e.headersSent || e.exited)
      return;
    const n = e.status(), r = e.headers.get("Location"), a2 = K3(e);
    e.request.headers.forEach((c, d) => c), e.headers.set("Content-Type", "application/json; charset=utf-8");
    const i = { loaders: I4(e), action: e.sharedMap.get(H3), status: n !== 200 ? n : 200, href: le3(e.url, a2), redirect: r ?? void 0 }, s = e.getWritableStream().getWriter(), l = await e[L3]._serializeData(i, true);
    s.write($2.encode(l)), e.sharedMap.set("qData", i), s.close();
  }
}
function et2(e) {
  if (e.startsWith("/")) {
    const t = x, n = new URL(e, "http://localhost");
    return (n.pathname.endsWith("/") ? n.pathname.slice(0, -1) : n.pathname) + (t.startsWith("/") ? "" : "/") + t + n.search;
  } else
    return;
}
function q2() {
  return typeof performance < "u" ? performance.now() : 0;
}
async function N4(e, t, n) {
  const r = q2();
  try {
    return await n();
  } finally {
    const a2 = q2() - r;
    let i = e.sharedMap.get("@serverTiming");
    i || e.sharedMap.set("@serverTiming", i = []), i.push([t, a2]);
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
var ue3 = Symbol("RequestEvMode");
var de2 = Symbol("RequestEvRoute");
var L3 = Symbol("RequestEvQwikSerializer");
var he2 = Symbol("RequestEvTrailingSlash");
var pe2 = "@routeName";
var H3 = "@actionId";
var me3 = "@actionFormData";
var at2 = "@nonce";
function it2(e, t, n, r, a2, i, s, o) {
  const { request: l, platform: c, env: d } = e, h = /* @__PURE__ */ new Map(), m = new Qe3(l.headers.get("cookie")), u = new Headers(), g = new URL(l.url);
  g.pathname.endsWith(x) && (g.pathname = g.pathname.slice(0, -ge2), a2 && !g.pathname.endsWith("/") && (g.pathname += "/"), h.set(P2, true)), h.set("@manifest", r);
  let w = -1, y = null, A3, T3 = e.locale, S2 = 200;
  const Se3 = async () => {
    for (w++; w < n.length; ) {
      const f2 = n[w], p = globalThis.qcAsyncRequestStore, b = p != null && p.run ? p.run(R2, f2, R2) : f2(R2);
      rt2(b) && await b, w++;
    }
  }, C2 = () => {
    if (y !== null)
      throw new Error("Response already sent");
  }, M3 = (f2, p) => {
    if (C2(), typeof f2 == "number") {
      S2 = f2;
      const D3 = R2.getWritableStream().getWriter();
      D3.write(typeof p == "string" ? $2.encode(p) : p), D3.close();
    } else if (S2 = f2.status, f2.headers.forEach((b, D3) => {
      u.append(D3, b);
    }), f2.body) {
      const b = R2.getWritableStream();
      f2.body.pipeTo(b);
    } else {
      if (S2 >= 300 && S2 < 400)
        return new W3();
      R2.getWritableStream().getWriter().close();
    }
    return U2();
  }, U2 = () => (w = E2, new B2()), z3 = {}, R2 = { [fe2]: z3, [ue3]: e.mode, [he2]: a2, [de2]: t, [L3]: s, cookie: m, headers: u, env: d, method: l.method, signal: l.signal, params: (t == null ? void 0 : t[1]) ?? {}, pathname: g.pathname, platform: c, query: g.searchParams, request: l, url: g, basePathname: i, sharedMap: h, get headersSent() {
    return y !== null;
  }, get exited() {
    return w >= E2;
  }, get clientConn() {
    return e.getClientConn();
  }, next: Se3, exit: U2, cacheControl: (f2, p = "Cache-Control") => {
    C2(), u.set(p, nt2(f2));
  }, resolveValue: async (f2) => {
    const p = f2.__id;
    if (f2.__brand === "server_loader" && !(p in z3))
      throw new Error("You can not get the returned data of a loader that has not been executed for this request.");
    return z3[p];
  }, status: (f2) => typeof f2 == "number" ? (C2(), S2 = f2, f2) : S2, locale: (f2) => (typeof f2 == "string" && (T3 = f2), T3 || ""), error: (f2, p) => (S2 = f2, u.delete("Cache-Control"), new ie3(f2, p)), redirect: (f2, p) => {
    if (C2(), S2 = f2, p) {
      const b = p.replace(/([^:])\/{2,}/g, "$1/");
      p !== b && console.warn(`Redirect URL ${p} is invalid, fixing to ${b}`), u.set("Location", b);
    }
    return u.delete("Cache-Control"), f2 > 301 && u.set("Cache-Control", "no-store"), U2(), new W3();
  }, defer: (f2) => typeof f2 == "function" ? f2 : () => f2, fail: (f2, p) => (C2(), S2 = f2, u.delete("Cache-Control"), { failed: true, ...p }), text: (f2, p) => (u.set("Content-Type", "text/plain; charset=utf-8"), M3(f2, p)), html: (f2, p) => (u.set("Content-Type", "text/html; charset=utf-8"), M3(f2, p)), parseBody: async () => A3 !== void 0 ? A3 : A3 = ot2(R2.request, h, s), json: (f2, p) => (u.set("Content-Type", "application/json; charset=utf-8"), M3(f2, JSON.stringify(p))), send: M3, isDirty: () => y !== null, getWritableStream: () => {
    if (y === null) {
      if (e.mode === "dev") {
        const f2 = h.get("@serverTiming");
        f2 && u.set("Server-Timing", f2.map((p) => `${p[0]};dur=${p[1]}`).join(","));
      }
      y = e.getWritableStream(S2, u, m, o, R2);
    }
    return y;
  } };
  return Object.freeze(R2);
}
function I4(e) {
  return e[fe2];
}
function K3(e) {
  return e[he2];
}
function st(e) {
  return e[de2];
}
function Q3(e) {
  return e[ue3];
}
var E2 = Number.MAX_SAFE_INTEGER;
var ot2 = async (e, t, n) => {
  var r;
  const a2 = ((r = e.headers.get("content-type")) == null ? void 0 : r.split(/[;,]/, 1)[0].trim()) ?? "";
  if (a2 === "application/x-www-form-urlencoded" || a2 === "multipart/form-data") {
    const i = await e.formData();
    return t.set(me3, i), ct2(i);
  } else {
    if (a2 === "application/json")
      return await e.json();
    if (a2 === "application/qwik-json")
      return n._deserializeData(await e.text());
  }
};
var ct2 = (e) => [...e.entries()].reduce((n, [r, a2]) => (r.split(".").reduce((i, s, o, l) => {
  if (s.endsWith("[]")) {
    const c = s.slice(0, -2);
    return i[c] = i[c] || [], i[c] = [...i[c], a2];
  }
  return o < l.length - 1 ? i[s] = i[s] || (Number.isNaN(+l[o + 1]) ? {} : []) : i[s] = a2;
}, n), n), {});
var v2;
import("node:async_hooks").then((e) => {
  const t = e.AsyncLocalStorage;
  v2 = new t(), globalThis.qcAsyncRequestStore = v2;
}).catch((e) => {
  console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.", e);
});
function lt2(e, t, n, r, a2 = true, i = "/", s) {
  let o;
  const l = new Promise((d) => o = d), c = it2(e, t, n, r, a2, i, s, o);
  return { response: l, requestEv: c, completion: v2 ? v2.run(c, ee4, c, o) : ee4(c, o) };
}
async function ee4(e, t) {
  try {
    await e.next();
  } catch (n) {
    if (n instanceof W3)
      await e.getWritableStream().close();
    else if (n instanceof ie3) {
      if (console.error(n), !e.headersSent) {
        const r = Me3(n.status, n), a2 = n.status;
        e.html(a2, r);
      }
    } else if (!(n instanceof B2)) {
      if (Q3(e) !== "dev")
        try {
          e.headersSent || (e.headers.set("content-type", "text/html; charset=utf-8"), e.cacheControl({ noCache: true }), e.status(500));
          const r = e.getWritableStream();
          if (!r.locked) {
            const a2 = r.getWriter();
            await a2.write($2.encode(se3(500, "Internal Server Error"))), await a2.close();
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
  if (e.endsWith(x)) {
    const n = e.length - ge2 + (t ? 1 : 0);
    e = e.slice(0, n), e === "" && (e = "/");
  }
  return e;
}
var P2 = "@isQData";
var x = "/q-data.json";
var ge2 = x.length;
function ut2(e, t) {
  const n = re3(e), r = te4(e), a2 = re3(t), i = te4(t);
  return we2(e, n, r, t, a2, i);
}
function we2(e, t, n, r, a2, i) {
  let s = null;
  for (; t < n; ) {
    const o = e.charCodeAt(t++), l = r.charCodeAt(a2++);
    if (o === 91) {
      const c = ye3(e, t), d = t + (c ? 3 : 0), h = F3(e, d, n, 93), m = e.substring(d, h), u = F3(e, h + 1, n, 47), g = e.substring(h + 1, u);
      t = h + 1;
      const w = a2 - 1;
      if (c) {
        const T3 = ht2(m, g, r, w, i, e, t + g.length + 1, n);
        if (T3)
          return Object.assign(s || (s = {}), T3);
      }
      const y = F3(r, w, i, 47, g);
      if (y == -1)
        return null;
      const A3 = r.substring(w, y);
      if (!c && !g && !A3)
        return null;
      a2 = y, (s || (s = {}))[m] = decodeURIComponent(A3);
    } else if (o !== l && !(isNaN(l) && dt2(e, t)))
      return null;
  }
  return ne4(e, t) && ne4(r, a2) ? s || {} : null;
}
function dt2(e, t) {
  return e.charCodeAt(t) === 91 && ye3(e, t + 1);
}
function te4(e) {
  const t = e.length;
  return t > 1 && e.charCodeAt(t - 1) === 47 ? t - 1 : t;
}
function ne4(e, t) {
  const n = e.length;
  return t >= n || t == n - 1 && e.charCodeAt(t) === 47;
}
function re3(e) {
  return e.charCodeAt(0) === 47 ? 1 : 0;
}
function ye3(e, t) {
  return e.charCodeAt(t) === 46 && e.charCodeAt(t + 1) === 46 && e.charCodeAt(t + 2) === 46;
}
function F3(e, t, n, r, a2 = "") {
  for (; t < n && e.charCodeAt(t) !== r; )
    t++;
  const i = a2.length;
  for (let s = 0; s < i; s++)
    if (e.charCodeAt(t - i + s) !== a2.charCodeAt(s))
      return -1;
  return t - i;
}
function ht2(e, t, n, r, a2, i, s, o) {
  n.charCodeAt(r) === 47 && r++;
  let l = a2;
  const c = t + "/";
  let d = 5;
  for (; l >= r && d--; ) {
    const h = we2(i, s, o, n, l, a2);
    if (h) {
      let m = n.substring(r, Math.min(l, a2));
      return m.endsWith(c) && (m = m.substring(0, m.length - c.length)), h[e] = decodeURIComponent(m), h;
    }
    l = pt2(n, r, c, l, r - 1) + c.length;
  }
  return null;
}
function pt2(e, t, n, r, a2) {
  let i = e.lastIndexOf(n, r);
  return i == r - n.length && (i = e.lastIndexOf(n, r - n.length - 1)), i > t ? i : a2;
}
var mt2 = async (e, t, n, r) => {
  if (Array.isArray(e))
    for (const a2 of e) {
      const i = a2[0], s = ut2(i, r);
      if (s) {
        const o = a2[1], l = a2[3], c = new Array(o.length), d = [], h = gt2(t, r);
        let m;
        return o.forEach((u, g) => {
          ae3(u, d, (w) => c[g] = w, n);
        }), ae3(h, d, (u) => m = u == null ? void 0 : u.default, n), d.length > 0 && await Promise.all(d), [i, s, c, m, l];
      }
    }
  return null;
};
var ae3 = (e, t, n, r) => {
  if (typeof e == "function") {
    const a2 = G3.get(e);
    if (a2)
      n(a2);
    else {
      const i = e();
      typeof i.then == "function" ? t.push(i.then((s) => {
        r !== false && G3.set(e, s), n(s);
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
  const { render: r, qwikCityPlan: a2, manifest: i, checkOrigin: s } = t, o = e.url.pathname, l = ft2(o, a2.trailingSlash), c = await yt2(a2, l, e.request.method, s ?? true, r);
  return c ? lt2(e, c[0], c[1], i, a2.trailingSlash, a2.basePathname, n) : null;
}
async function yt2(e, t, n, r, a2) {
  const { routes: i, serverPlugins: s, menus: o, cacheModules: l } = e, c = await mt2(i, o, l, t), d = je3(s, c, n, r, Ze2(a2));
  return d.length > 0 ? [c, d] : null;
}
function St2(e) {
  try {
    new globalThis.TextEncoderStream();
  } catch {
    globalThis.TextEncoderStream = Rt2;
  }
  const t = { _deserializeData: b$, _serializeData: w$, _verifySerializable: x$ };
  e.manifest && Je2(e.manifest);
  async function n(r, a2, i) {
    try {
      const s = new URL(r.url);
      if (isStaticPath(r.method, s))
        return a2.ASSETS.fetch(r);
      const o = s.hostname !== "127.0.0.1" && s.hostname !== "localhost" && s.port === "" && r.method === "GET", l = new Request(s.href, r), c = o ? await caches.open("custom:qwikcity") : null;
      if (c) {
        const u = await c.match(l);
        if (u)
          return u;
      }
      const h = await wt2({ mode: "server", locale: void 0, url: s, request: r, env: { get(u) {
        return a2[u];
      } }, getWritableStream: (u, g, w, y) => {
        const { readable: A3, writable: T3 } = new TransformStream(), S2 = new Response(A3, { status: u, headers: Ue3(g, w) });
        return y(S2), T3;
      }, getClientConn: () => ({ ip: r.headers.get("CF-connecting-ip") || "", country: r.headers.get("CF-IPCountry") || "" }), platform: { request: r, env: a2, ctx: i } }, e, t);
      if (h) {
        h.completion.then((g) => {
          g && console.error(g);
        });
        const u = await h.response;
        if (u)
          return u.ok && c && u.headers.has("Cache-Control") && i.waitUntil(c.put(l, u.clone())), u;
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
var Pt2 = St2({ render: $e2, qwikCityPlan: me2, manifest: Me2 });

// _worker.js
var worker_default = { fetch: Pt2 };

// ../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
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

// ../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
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

// ../.wrangler/tmp/bundle-rBNcfZ/middleware-insertion-facade.js
worker_default.middleware = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
  ...worker_default.middleware ?? []
].filter(Boolean);
var middleware_insertion_facade_default = worker_default;

// ../node_modules/wrangler/templates/middleware/common.ts
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

// ../.wrangler/tmp/bundle-rBNcfZ/middleware-loader.entry.ts
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
export {
  middleware_loader_entry_default as default
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
//# sourceMappingURL=bundledWorker-0.6644096921916198.mjs.map
