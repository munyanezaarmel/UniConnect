"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/notifications/unread-count/route";
exports.ids = ["app/api/notifications/unread-count/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "oslo":
/*!***********************!*\
  !*** external "oslo" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("oslo");;

/***/ }),

/***/ "oslo/cookie":
/*!******************************!*\
  !*** external "oslo/cookie" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("oslo/cookie");;

/***/ }),

/***/ "oslo/crypto":
/*!******************************!*\
  !*** external "oslo/crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("oslo/crypto");;

/***/ }),

/***/ "oslo/encoding":
/*!********************************!*\
  !*** external "oslo/encoding" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("oslo/encoding");;

/***/ }),

/***/ "oslo/jwt":
/*!***************************!*\
  !*** external "oslo/jwt" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("oslo/jwt");;

/***/ }),

/***/ "oslo/oauth2":
/*!******************************!*\
  !*** external "oslo/oauth2" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("oslo/oauth2");;

/***/ }),

/***/ "oslo/request":
/*!*******************************!*\
  !*** external "oslo/request" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("oslo/request");;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnotifications%2Funread-count%2Froute&page=%2Fapi%2Fnotifications%2Funread-count%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotifications%2Funread-count%2Froute.ts&appDir=%2Fhome%2Farmel%2FDocuments%2FUniConnect%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farmel%2FDocuments%2FUniConnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnotifications%2Funread-count%2Froute&page=%2Fapi%2Fnotifications%2Funread-count%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotifications%2Funread-count%2Froute.ts&appDir=%2Fhome%2Farmel%2FDocuments%2FUniConnect%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farmel%2FDocuments%2FUniConnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_armel_Documents_UniConnect_src_app_api_notifications_unread_count_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/notifications/unread-count/route.ts */ \"(rsc)/./src/app/api/notifications/unread-count/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_armel_Documents_UniConnect_src_app_api_notifications_unread_count_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_home_armel_Documents_UniConnect_src_app_api_notifications_unread_count_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/notifications/unread-count/route\",\n        pathname: \"/api/notifications/unread-count\",\n        filename: \"route\",\n        bundlePath: \"app/api/notifications/unread-count/route\"\n    },\n    resolvedPagePath: \"/home/armel/Documents/UniConnect/src/app/api/notifications/unread-count/route.ts\",\n    nextConfigOutput,\n    userland: _home_armel_Documents_UniConnect_src_app_api_notifications_unread_count_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/notifications/unread-count/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZub3RpZmljYXRpb25zJTJGdW5yZWFkLWNvdW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZub3RpZmljYXRpb25zJTJGdW5yZWFkLWNvdW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbm90aWZpY2F0aW9ucyUyRnVucmVhZC1jb3VudCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGYXJtZWwlMkZEb2N1bWVudHMlMkZVbmlDb25uZWN0JTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGYXJtZWwlMkZEb2N1bWVudHMlMkZVbmlDb25uZWN0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy0xNS1zb2NpYWwtbWVkaWEtYXBwLz8zNjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2FybWVsL0RvY3VtZW50cy9VbmlDb25uZWN0L3NyYy9hcHAvYXBpL25vdGlmaWNhdGlvbnMvdW5yZWFkLWNvdW50L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ub3RpZmljYXRpb25zL3VucmVhZC1jb3VudC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL25vdGlmaWNhdGlvbnMvdW5yZWFkLWNvdW50XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ub3RpZmljYXRpb25zL3VucmVhZC1jb3VudC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2FybWVsL0RvY3VtZW50cy9VbmlDb25uZWN0L3NyYy9hcHAvYXBpL25vdGlmaWNhdGlvbnMvdW5yZWFkLWNvdW50L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9ub3RpZmljYXRpb25zL3VucmVhZC1jb3VudC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnotifications%2Funread-count%2Froute&page=%2Fapi%2Fnotifications%2Funread-count%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotifications%2Funread-count%2Froute.ts&appDir=%2Fhome%2Farmel%2FDocuments%2FUniConnect%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farmel%2FDocuments%2FUniConnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/notifications/unread-count/route.ts":
/*!*********************************************************!*\
  !*** ./src/app/api/notifications/unread-count/route.ts ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(rsc)/./src/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth__WEBPACK_IMPORTED_MODULE_0__]);\n_auth__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function GET() {\n    try {\n        const { user } = await (0,_auth__WEBPACK_IMPORTED_MODULE_0__.validateRequest)();\n        if (!user) {\n            return Response.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const unreadCount = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].notification.count({\n            where: {\n                recipientId: user.id,\n                read: false\n            }\n        });\n        const data = {\n            unreadCount\n        };\n        return Response.json(data);\n    } catch (error) {\n        console.error(error);\n        return Response.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ub3RpZmljYXRpb25zL3VucmVhZC1jb3VudC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDUDtBQUczQixlQUFlRTtJQUNwQixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNSCxzREFBZUE7UUFFdEMsSUFBSSxDQUFDRyxNQUFNO1lBQ1QsT0FBT0MsU0FBU0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2hFO1FBRUEsTUFBTUMsY0FBYyxNQUFNUCxtREFBTUEsQ0FBQ1EsWUFBWSxDQUFDQyxLQUFLLENBQUM7WUFDbERDLE9BQU87Z0JBQ0xDLGFBQWFULEtBQUtVLEVBQUU7Z0JBQ3BCQyxNQUFNO1lBQ1I7UUFDRjtRQUVBLE1BQU1DLE9BQThCO1lBQ2xDUDtRQUNGO1FBRUEsT0FBT0osU0FBU0MsSUFBSSxDQUFDVTtJQUN2QixFQUFFLE9BQU9ULE9BQU87UUFDZFUsUUFBUVYsS0FBSyxDQUFDQTtRQUNkLE9BQU9GLFNBQVNDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtMTUtc29jaWFsLW1lZGlhLWFwcC8uL3NyYy9hcHAvYXBpL25vdGlmaWNhdGlvbnMvdW5yZWFkLWNvdW50L3JvdXRlLnRzPzRiYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsaWRhdGVSZXF1ZXN0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db3VudEluZm8gfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IHZhbGlkYXRlUmVxdWVzdCgpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdW5yZWFkQ291bnQgPSBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNvdW50KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHJlY2lwaWVudElkOiB1c2VyLmlkLFxuICAgICAgICByZWFkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhOiBOb3RpZmljYXRpb25Db3VudEluZm8gPSB7XG4gICAgICB1bnJlYWRDb3VudCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oZGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsidmFsaWRhdGVSZXF1ZXN0IiwicHJpc21hIiwiR0VUIiwidXNlciIsIlJlc3BvbnNlIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidW5yZWFkQ291bnQiLCJub3RpZmljYXRpb24iLCJjb3VudCIsIndoZXJlIiwicmVjaXBpZW50SWQiLCJpZCIsInJlYWQiLCJkYXRhIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/notifications/unread-count/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/auth.ts":
/*!*********************!*\
  !*** ./src/auth.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   google: () => (/* binding */ google),\n/* harmony export */   lucia: () => (/* binding */ lucia),\n/* harmony export */   validateRequest: () => (/* binding */ validateRequest)\n/* harmony export */ });\n/* harmony import */ var _lucia_auth_adapter_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lucia-auth/adapter-prisma */ \"(rsc)/./node_modules/@lucia-auth/adapter-prisma/dist/index.js\");\n/* harmony import */ var arctic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! arctic */ \"(rsc)/./node_modules/arctic/dist/index.js\");\n/* harmony import */ var lucia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucia */ \"(rsc)/./node_modules/lucia/dist/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([arctic__WEBPACK_IMPORTED_MODULE_1__, lucia__WEBPACK_IMPORTED_MODULE_2__]);\n([arctic__WEBPACK_IMPORTED_MODULE_1__, lucia__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst adapter = new _lucia_auth_adapter_prisma__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter(_lib_prisma__WEBPACK_IMPORTED_MODULE_5__[\"default\"].session, _lib_prisma__WEBPACK_IMPORTED_MODULE_5__[\"default\"].user);\nconst lucia = new lucia__WEBPACK_IMPORTED_MODULE_2__.Lucia(adapter, {\n    sessionCookie: {\n        expires: false,\n        attributes: {\n            secure: \"development\" === \"production\"\n        }\n    },\n    getUserAttributes (databaseUserAttributes) {\n        return {\n            id: databaseUserAttributes.id,\n            username: databaseUserAttributes.username,\n            displayName: databaseUserAttributes.displayName,\n            avatarUrl: databaseUserAttributes.avatarUrl,\n            googleId: databaseUserAttributes.googleId\n        };\n    }\n});\nconst google = new arctic__WEBPACK_IMPORTED_MODULE_1__.Google(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/google`);\nconst validateRequest = (0,react__WEBPACK_IMPORTED_MODULE_4__.cache)(async ()=>{\n    const sessionId = (0,next_headers__WEBPACK_IMPORTED_MODULE_3__.cookies)().get(lucia.sessionCookieName)?.value ?? null;\n    if (!sessionId) {\n        return {\n            user: null,\n            session: null\n        };\n    }\n    const result = await lucia.validateSession(sessionId);\n    try {\n        if (result.session && result.session.fresh) {\n            const sessionCookie = lucia.createSessionCookie(result.session.id);\n            (0,next_headers__WEBPACK_IMPORTED_MODULE_3__.cookies)().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);\n        }\n        if (!result.session) {\n            const sessionCookie = lucia.createBlankSessionCookie();\n            (0,next_headers__WEBPACK_IMPORTED_MODULE_3__.cookies)().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);\n        }\n    } catch  {}\n    return result;\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQzNCO0FBQ2E7QUFDTjtBQUNUO0FBQ0k7QUFFbEMsTUFBTU0sVUFBVSxJQUFJTixxRUFBYUEsQ0FBQ0ssbURBQU1BLENBQUNFLE9BQU8sRUFBRUYsbURBQU1BLENBQUNHLElBQUk7QUFFdEQsTUFBTUMsUUFBUSxJQUFJUCx3Q0FBS0EsQ0FBQ0ksU0FBUztJQUN0Q0ksZUFBZTtRQUNiQyxTQUFTO1FBQ1RDLFlBQVk7WUFDVkMsUUFBUUMsa0JBQXlCO1FBQ25DO0lBQ0Y7SUFDQUMsbUJBQWtCQyxzQkFBc0I7UUFDdEMsT0FBTztZQUNMQyxJQUFJRCx1QkFBdUJDLEVBQUU7WUFDN0JDLFVBQVVGLHVCQUF1QkUsUUFBUTtZQUN6Q0MsYUFBYUgsdUJBQXVCRyxXQUFXO1lBQy9DQyxXQUFXSix1QkFBdUJJLFNBQVM7WUFDM0NDLFVBQVVMLHVCQUF1QkssUUFBUTtRQUMzQztJQUNGO0FBQ0YsR0FBRztBQWlCSSxNQUFNQyxTQUFTLElBQUlyQiwwQ0FBTUEsQ0FDOUJhLFFBQVFTLEdBQUcsQ0FBQ0MsZ0JBQWdCLEVBQzVCVixRQUFRUyxHQUFHLENBQUNFLG9CQUFvQixFQUNoQyxDQUFDLEVBQUVYLFFBQVFTLEdBQUcsQ0FBQ0csb0JBQW9CLENBQUMseUJBQXlCLENBQUMsRUFDOUQ7QUFFSyxNQUFNQyxrQkFBa0J2Qiw0Q0FBS0EsQ0FDbEM7SUFHRSxNQUFNd0IsWUFBWXpCLHFEQUFPQSxHQUFHMEIsR0FBRyxDQUFDcEIsTUFBTXFCLGlCQUFpQixHQUFHQyxTQUFTO0lBRW5FLElBQUksQ0FBQ0gsV0FBVztRQUNkLE9BQU87WUFDTHBCLE1BQU07WUFDTkQsU0FBUztRQUNYO0lBQ0Y7SUFFQSxNQUFNeUIsU0FBUyxNQUFNdkIsTUFBTXdCLGVBQWUsQ0FBQ0w7SUFFM0MsSUFBSTtRQUNGLElBQUlJLE9BQU96QixPQUFPLElBQUl5QixPQUFPekIsT0FBTyxDQUFDMkIsS0FBSyxFQUFFO1lBQzFDLE1BQU14QixnQkFBZ0JELE1BQU0wQixtQkFBbUIsQ0FBQ0gsT0FBT3pCLE9BQU8sQ0FBQ1UsRUFBRTtZQUNqRWQscURBQU9BLEdBQUdpQyxHQUFHLENBQ1gxQixjQUFjMkIsSUFBSSxFQUNsQjNCLGNBQWNxQixLQUFLLEVBQ25CckIsY0FBY0UsVUFBVTtRQUU1QjtRQUNBLElBQUksQ0FBQ29CLE9BQU96QixPQUFPLEVBQUU7WUFDbkIsTUFBTUcsZ0JBQWdCRCxNQUFNNkIsd0JBQXdCO1lBQ3BEbkMscURBQU9BLEdBQUdpQyxHQUFHLENBQ1gxQixjQUFjMkIsSUFBSSxFQUNsQjNCLGNBQWNxQixLQUFLLEVBQ25CckIsY0FBY0UsVUFBVTtRQUU1QjtJQUNGLEVBQUUsT0FBTSxDQUFDO0lBRVQsT0FBT29CO0FBQ1QsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy0xNS1zb2NpYWwtbWVkaWEtYXBwLy4vc3JjL2F1dGgudHM/NjJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBsdWNpYS1hdXRoL2FkYXB0ZXItcHJpc21hXCI7XG5pbXBvcnQgeyBHb29nbGUgfSBmcm9tIFwiYXJjdGljXCI7XG5pbXBvcnQgeyBMdWNpYSwgU2Vzc2lvbiwgVXNlciB9IGZyb20gXCJsdWNpYVwiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuL2xpYi9wcmlzbWFcIjtcblxuY29uc3QgYWRhcHRlciA9IG5ldyBQcmlzbWFBZGFwdGVyKHByaXNtYS5zZXNzaW9uLCBwcmlzbWEudXNlcik7XG5cbmV4cG9ydCBjb25zdCBsdWNpYSA9IG5ldyBMdWNpYShhZGFwdGVyLCB7XG4gIHNlc3Npb25Db29raWU6IHtcbiAgICBleHBpcmVzOiBmYWxzZSxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICB9LFxuICB9LFxuICBnZXRVc2VyQXR0cmlidXRlcyhkYXRhYmFzZVVzZXJBdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBkYXRhYmFzZVVzZXJBdHRyaWJ1dGVzLmlkLFxuICAgICAgdXNlcm5hbWU6IGRhdGFiYXNlVXNlckF0dHJpYnV0ZXMudXNlcm5hbWUsXG4gICAgICBkaXNwbGF5TmFtZTogZGF0YWJhc2VVc2VyQXR0cmlidXRlcy5kaXNwbGF5TmFtZSxcbiAgICAgIGF2YXRhclVybDogZGF0YWJhc2VVc2VyQXR0cmlidXRlcy5hdmF0YXJVcmwsXG4gICAgICBnb29nbGVJZDogZGF0YWJhc2VVc2VyQXR0cmlidXRlcy5nb29nbGVJZCxcbiAgICB9O1xuICB9LFxufSk7XG5cbmRlY2xhcmUgbW9kdWxlIFwibHVjaWFcIiB7XG4gIGludGVyZmFjZSBSZWdpc3RlciB7XG4gICAgTHVjaWE6IHR5cGVvZiBsdWNpYTtcbiAgICBEYXRhYmFzZVVzZXJBdHRyaWJ1dGVzOiBEYXRhYmFzZVVzZXJBdHRyaWJ1dGVzO1xuICB9XG59XG5cbmludGVyZmFjZSBEYXRhYmFzZVVzZXJBdHRyaWJ1dGVzIHtcbiAgaWQ6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgYXZhdGFyVXJsOiBzdHJpbmcgfCBudWxsO1xuICBnb29nbGVJZDogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGdvb2dsZSA9IG5ldyBHb29nbGUoXG4gIHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxuICBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCEsXG4gIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS9hcGkvYXV0aC9jYWxsYmFjay9nb29nbGVgLFxuKTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUmVxdWVzdCA9IGNhY2hlKFxuICBhc3luYyAoKTogUHJvbWlzZTxcbiAgICB7IHVzZXI6IFVzZXI7IHNlc3Npb246IFNlc3Npb24gfSB8IHsgdXNlcjogbnVsbDsgc2Vzc2lvbjogbnVsbCB9XG4gID4gPT4ge1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IGNvb2tpZXMoKS5nZXQobHVjaWEuc2Vzc2lvbkNvb2tpZU5hbWUpPy52YWx1ZSA/PyBudWxsO1xuXG4gICAgaWYgKCFzZXNzaW9uSWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIHNlc3Npb246IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGx1Y2lhLnZhbGlkYXRlU2Vzc2lvbihzZXNzaW9uSWQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChyZXN1bHQuc2Vzc2lvbiAmJiByZXN1bHQuc2Vzc2lvbi5mcmVzaCkge1xuICAgICAgICBjb25zdCBzZXNzaW9uQ29va2llID0gbHVjaWEuY3JlYXRlU2Vzc2lvbkNvb2tpZShyZXN1bHQuc2Vzc2lvbi5pZCk7XG4gICAgICAgIGNvb2tpZXMoKS5zZXQoXG4gICAgICAgICAgc2Vzc2lvbkNvb2tpZS5uYW1lLFxuICAgICAgICAgIHNlc3Npb25Db29raWUudmFsdWUsXG4gICAgICAgICAgc2Vzc2lvbkNvb2tpZS5hdHRyaWJ1dGVzLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQuc2Vzc2lvbikge1xuICAgICAgICBjb25zdCBzZXNzaW9uQ29va2llID0gbHVjaWEuY3JlYXRlQmxhbmtTZXNzaW9uQ29va2llKCk7XG4gICAgICAgIGNvb2tpZXMoKS5zZXQoXG4gICAgICAgICAgc2Vzc2lvbkNvb2tpZS5uYW1lLFxuICAgICAgICAgIHNlc3Npb25Db29raWUudmFsdWUsXG4gICAgICAgICAgc2Vzc2lvbkNvb2tpZS5hdHRyaWJ1dGVzLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge31cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4pO1xuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJHb29nbGUiLCJMdWNpYSIsImNvb2tpZXMiLCJjYWNoZSIsInByaXNtYSIsImFkYXB0ZXIiLCJzZXNzaW9uIiwidXNlciIsImx1Y2lhIiwic2Vzc2lvbkNvb2tpZSIsImV4cGlyZXMiLCJhdHRyaWJ1dGVzIiwic2VjdXJlIiwicHJvY2VzcyIsImdldFVzZXJBdHRyaWJ1dGVzIiwiZGF0YWJhc2VVc2VyQXR0cmlidXRlcyIsImlkIiwidXNlcm5hbWUiLCJkaXNwbGF5TmFtZSIsImF2YXRhclVybCIsImdvb2dsZUlkIiwiZ29vZ2xlIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiLCJ2YWxpZGF0ZVJlcXVlc3QiLCJzZXNzaW9uSWQiLCJnZXQiLCJzZXNzaW9uQ29va2llTmFtZSIsInZhbHVlIiwicmVzdWx0IiwidmFsaWRhdGVTZXNzaW9uIiwiZnJlc2giLCJjcmVhdGVTZXNzaW9uQ29va2llIiwic2V0IiwibmFtZSIsImNyZWF0ZUJsYW5rU2Vzc2lvbkNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsd0JBQXdCO0lBQzVCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQ3pCO0FBTUEsTUFBTUUsU0FBU0MsV0FBV0MsWUFBWSxJQUFJSDtBQUUxQyxpRUFBZUMsTUFBTUEsRUFBQztBQUV0QixJQUFJRyxJQUFxQyxFQUFFRixXQUFXQyxZQUFZLEdBQUdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLTE1LXNvY2lhbC1tZWRpYS1hcHAvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWFDbGllbnRTaW5nbGV0b24gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KCk7XG59O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBwcmlzbWFHbG9iYWw6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj47XG59XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbFRoaXMucHJpc21hR2xvYmFsID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYUNsaWVudFNpbmdsZXRvbiIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWFHbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/arctic","vendor-chunks/lucia","vendor-chunks/@lucia-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fnotifications%2Funread-count%2Froute&page=%2Fapi%2Fnotifications%2Funread-count%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fnotifications%2Funread-count%2Froute.ts&appDir=%2Fhome%2Farmel%2FDocuments%2FUniConnect%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farmel%2FDocuments%2FUniConnect&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();