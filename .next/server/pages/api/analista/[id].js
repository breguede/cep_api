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
exports.id = "pages/api/analista/[id]";
exports.ids = ["pages/api/analista/[id]"];
exports.modules = {

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mssql");

/***/ }),

/***/ "(api)/./config/dbConfig.js":
/*!****************************!*\
  !*** ./config/dbConfig.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sql = __webpack_require__(/*! mssql */ \"mssql\");\nconst Server = process.env.SERVER;\nconst Database = process.env.DATABASE;\nconst User = process.env.USER;\nconst Password = process.env.PASSWORD;\nconst connStr = {\n    server: Server,\n    database: Database,\n    port: 8529,\n    user: User,\n    password: Password,\n    options: {\n        trustedConnection: true,\n        trustServerCertificate: true,\n        cryptoCredentialsDetails: {\n            minVersion: \"TLSv1\"\n        }\n    },\n    debug: true,\n    parseJSON: true\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connStr);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGJDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU07QUFFakMsTUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csUUFBUTtBQUNyQyxNQUFNQyxJQUFJLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxJQUFJO0FBQzdCLE1BQU1DLFFBQVEsR0FBR1AsT0FBTyxDQUFDQyxHQUFHLENBQUNPLFFBQVE7QUFFckMsTUFBTUMsT0FBTyxHQUFHO0lBQ1pDLE1BQU0sRUFBRVgsTUFBTTtJQUNkWSxRQUFRLEVBQUVSLFFBQVE7SUFDbEJTLElBQUksRUFBRSxJQUFJO0lBQ1ZDLElBQUksRUFBRVIsSUFBSTtJQUNWUyxRQUFRLEVBQUVQLFFBQVE7SUFDbEJRLE9BQU8sRUFBRTtRQUNQQyxpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCQyxzQkFBc0IsRUFBRSxJQUFJO1FBQzVCQyx3QkFBd0IsRUFBRTtZQUN2QkMsVUFBVSxFQUFFLE9BQU87U0FDdkI7S0FDRjtJQUNEQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxTQUFTLEVBQUUsSUFBSTtDQUNkO0FBRUQsaUVBQWVaLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcF9hcGkvLi9jb25maWcvZGJDb25maWcuanM/ZjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5jb25zdCBTZXJ2ZXIgPSBwcm9jZXNzLmVudi5TRVJWRVI7XHJcblxyXG5jb25zdCBEYXRhYmFzZSA9IHByb2Nlc3MuZW52LkRBVEFCQVNFO1xyXG5jb25zdCBVc2VyID0gcHJvY2Vzcy5lbnYuVVNFUjtcclxuY29uc3QgUGFzc3dvcmQgPSBwcm9jZXNzLmVudi5QQVNTV09SRDtcclxuXHJcbmNvbnN0IGNvbm5TdHIgPSB7ICAgXHJcbiAgICBzZXJ2ZXI6IFNlcnZlcixcclxuICAgIGRhdGFiYXNlOiBEYXRhYmFzZSxcclxuICAgIHBvcnQ6IDg1MjksXHJcbiAgICB1c2VyOiBVc2VyLFxyXG4gICAgcGFzc3dvcmQ6IFBhc3N3b3JkLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICB0cnVzdGVkQ29ubmVjdGlvbjogdHJ1ZSxcclxuICAgICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSxcclxuICAgICAgY3J5cHRvQ3JlZGVudGlhbHNEZXRhaWxzOiB7XHJcbiAgICAgICAgIG1pblZlcnNpb246ICdUTFN2MSdcclxuICAgIH1cclxuICB9LFxyXG4gIGRlYnVnOiB0cnVlLFxyXG4gIHBhcnNlSlNPTjogdHJ1ZVxyXG4gIH07IFxyXG4gXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ublN0cjsiXSwibmFtZXMiOlsic3FsIiwicmVxdWlyZSIsIlNlcnZlciIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVIiLCJEYXRhYmFzZSIsIkRBVEFCQVNFIiwiVXNlciIsIlVTRVIiLCJQYXNzd29yZCIsIlBBU1NXT1JEIiwiY29ublN0ciIsInNlcnZlciIsImRhdGFiYXNlIiwicG9ydCIsInVzZXIiLCJwYXNzd29yZCIsIm9wdGlvbnMiLCJ0cnVzdGVkQ29ubmVjdGlvbiIsInRydXN0U2VydmVyQ2VydGlmaWNhdGUiLCJjcnlwdG9DcmVkZW50aWFsc0RldGFpbHMiLCJtaW5WZXJzaW9uIiwiZGVidWciLCJwYXJzZUpTT04iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/dbConfig.js\n");

/***/ }),

/***/ "(api)/./pages/api/analista/[id].js":
/*!************************************!*\
  !*** ./pages/api/analista/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst sql = __webpack_require__(/*! mssql */ \"mssql\");\nconst connStr = __webpack_require__(/*! ../../../config/dbConfig */ \"(api)/./config/dbConfig.js\");\nasync function handler(request, response) {\n    if (request.query.SECRET_KEY !== process.env.SECRET_KEY) {\n        return response.send(\"sem autorizacao\");\n    }\n    const { id  } = request.query;\n    let pool = await sql.connect(connStr.default);\n    let analistas = await pool.request().query(`Select * from Rede_WAnalistas WHERE cod_analista = ${id}`);\n    const resultado = analistas.recordsets;\n    response.setHeader(\"Cache-Control\", \"s-maxage=10,stale-while-revalidate\");\n    return response.json(resultado[0]);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbGlzdGEvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFPLENBQUM7QUFDNUIsTUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLDREQUEwQixDQUFDO0FBR3BDLGVBQWVFLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDckQsSUFBR0QsT0FBTyxDQUFDRSxLQUFLLENBQUNDLFVBQVUsS0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVUsRUFBQztRQUNuRCxPQUFPRixRQUFRLENBQUNLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMxQztJQUNELE1BQU0sRUFBRUMsRUFBRSxHQUFFLEdBQUdQLE9BQU8sQ0FBQ0UsS0FBSztJQUM1QixJQUFJTSxJQUFJLEdBQUcsTUFBTVosR0FBRyxDQUFDYSxPQUFPLENBQUNYLE9BQU8sQ0FBQ1ksT0FBTyxDQUFDO0lBRTNDLElBQUlDLFNBQVMsR0FBRyxNQUFNSCxJQUFJLENBQUNSLE9BQU8sRUFBRSxDQUMvQkUsS0FBSyxDQUFDLENBQUMsbURBQW1ELEVBQUVLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEUsTUFBTUssU0FBUyxHQUFHRCxTQUFTLENBQUNFLFVBQVU7SUFFMUNaLFFBQVEsQ0FBQ2EsU0FBUyxDQUFDLGVBQWUsRUFBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBRXpFLE9BQU9iLFFBQVEsQ0FBQ2MsSUFBSSxDQUFDSCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUVwQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcF9hcGkvLi9wYWdlcy9hcGkvYW5hbGlzdGEvW2lkXS5qcz9jNjU5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmNvbnN0IGNvbm5TdHIgPSByZXF1aXJlKCcuLi8uLi8uLi9jb25maWcvZGJDb25maWcnKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgIGlmKHJlcXVlc3QucXVlcnkuU0VDUkVUX0tFWSAhPT0gcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSl7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnNlbmQoJ3NlbSBhdXRvcml6YWNhbycpXHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXF1ZXN0LnF1ZXJ5XHJcbiAgICBsZXQgcG9vbCA9IGF3YWl0IHNxbC5jb25uZWN0KGNvbm5TdHIuZGVmYXVsdClcclxuICAgICAgICBcclxuICAgICAgbGV0IGFuYWxpc3RhcyA9IGF3YWl0IHBvb2wucmVxdWVzdCgpXHJcbiAgICAgICAgICAucXVlcnkoYFNlbGVjdCAqIGZyb20gUmVkZV9XQW5hbGlzdGFzIFdIRVJFIGNvZF9hbmFsaXN0YSA9ICR7aWR9YCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYW5hbGlzdGFzLnJlY29yZHNldHNcclxuICAgIFxyXG4gICAgcmVzcG9uc2Uuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywncy1tYXhhZ2U9MTAsc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZScpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbihyZXN1bHRhZG9bMF0pO1xyXG4gICAgXHJcbiAgfSJdLCJuYW1lcyI6WyJzcWwiLCJyZXF1aXJlIiwiY29ublN0ciIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJxdWVyeSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52Iiwic2VuZCIsImlkIiwicG9vbCIsImNvbm5lY3QiLCJkZWZhdWx0IiwiYW5hbGlzdGFzIiwicmVzdWx0YWRvIiwicmVjb3Jkc2V0cyIsInNldEhlYWRlciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/analista/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analista/[id].js"));
module.exports = __webpack_exports__;

})();