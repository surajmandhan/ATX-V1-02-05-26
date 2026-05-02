"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    // Add any custom middleware logic here if needed\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files\n        '/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\n        // Always run for API routes\n        '/(api|trpc)(.*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFFdEQsU0FBU0MsV0FBV0MsT0FBb0I7SUFDN0MsaURBQWlEO0lBQ2pELE9BQU9GLHFEQUFZQSxDQUFDRyxJQUFJO0FBQzFCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUNQLDhDQUE4QztRQUM5QztRQUNBLDRCQUE0QjtRQUM1QjtLQUNEO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21hY3NvbHV0aW9ucy9Eb3dubG9hZHMvYmFjayBuZXcgLSBhdHgvYmFja2t1cHBwIDQ0NDQvYXR4LXJlc2VhcmNoLXBlcHRpZGVzICgxKS9taWRkbGV3YXJlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSwgdHlwZSBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgLy8gQWRkIGFueSBjdXN0b20gbWlkZGxld2FyZSBsb2dpYyBoZXJlIGlmIG5lZWRlZFxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogW1xuICAgIC8vIFNraXAgTmV4dC5qcyBpbnRlcm5hbHMgYW5kIGFsbCBzdGF0aWMgZmlsZXNcbiAgICAnLygoPyFfbmV4dHxbXj9dKlxcXFwuKD86aHRtbD98Y3NzfGpzKD8hb24pfGpwZT9nfHdlYnB8cG5nfGdpZnxzdmd8dHRmfHdvZmYyP3xpY298Y3N2fGRvY3g/fHhsc3g/fHppcHx3ZWJtYW5pZmVzdCkpLiopJyxcbiAgICAvLyBBbHdheXMgcnVuIGZvciBBUEkgcm91dGVzXG4gICAgJy8oYXBpfHRycGMpKC4qKScsXG4gIF0sXG59OyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsIm5leHQiLCJjb25maWciLCJtYXRjaGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});