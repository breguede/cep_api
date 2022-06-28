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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst sql = __webpack_require__(/*! mssql */ \"mssql\");\nconst connStr = __webpack_require__(/*! ../../../config/dbConfig */ \"(api)/./config/dbConfig.js\");\nasync function handler(request, response) {\n    if (request.query.SECRET_KEY !== process.env.SECRET_KEY) {\n        return response.send(\"sem autorizacao\");\n    }\n    const { id  } = request.query;\n    let pool = await sql.connect(connStr.default);\n    let analistas = await pool.request().query(`Select * from Rede_WAnalistas WHERE cod_analista = ${id}`);\n    const resultado = await analistas.recordsets;\n    var normalResults = resultado.map((mysqlObj, index)=>{\n        return Object.assign({}, mysqlObj);\n    });\n    response.setHeader(\"Cache-Control\", \"s-maxage=10,stale-while-revalidate\");\n    return response.json(normalResults);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbGlzdGEvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLG9CQUFPLENBQUM7QUFDNUIsTUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLDREQUEwQixDQUFDO0FBR3BDLGVBQWVFLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDckQsSUFBR0QsT0FBTyxDQUFDRSxLQUFLLENBQUNDLFVBQVUsS0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVUsRUFBQztRQUNuRCxPQUFPRixRQUFRLENBQUNLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUMxQztJQUNELE1BQU0sRUFBRUMsRUFBRSxHQUFFLEdBQUdQLE9BQU8sQ0FBQ0UsS0FBSztJQUM1QixJQUFJTSxJQUFJLEdBQUcsTUFBTVosR0FBRyxDQUFDYSxPQUFPLENBQUNYLE9BQU8sQ0FBQ1ksT0FBTyxDQUFDO0lBRTNDLElBQUlDLFNBQVMsR0FBRyxNQUFNSCxJQUFJLENBQUNSLE9BQU8sRUFBRSxDQUMvQkUsS0FBSyxDQUFDLENBQUMsbURBQW1ELEVBQUVLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEUsTUFBTUssU0FBUyxHQUFHLE1BQU1ELFNBQVMsQ0FBQ0UsVUFBVTtJQUU1QyxJQUFJQyxhQUFhLEdBQUdGLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLENBQUNDLFFBQVEsRUFBRUMsS0FBSyxHQUFLO1FBQ3JELE9BQU9DLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRUgsUUFBUSxDQUFDLENBQUM7S0FDdEMsQ0FBQztJQUtMZixRQUFRLENBQUNtQixTQUFTLENBQUMsZUFBZSxFQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFFdkUsT0FBT25CLFFBQVEsQ0FBQ29CLElBQUksQ0FBQ1AsYUFBYSxDQUFDLENBQUM7Q0FFdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZXBfYXBpLy4vcGFnZXMvYXBpL2FuYWxpc3RhL1tpZF0uanM/YzY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5jb25zdCBjb25uU3RyID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uZmlnL2RiQ29uZmlnJylcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgICBpZihyZXF1ZXN0LnF1ZXJ5LlNFQ1JFVF9LRVkgIT09IHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkpe1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5zZW5kKCdzZW0gYXV0b3JpemFjYW8nKVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxdWVzdC5xdWVyeVxyXG4gICAgbGV0IHBvb2wgPSBhd2FpdCBzcWwuY29ubmVjdChjb25uU3RyLmRlZmF1bHQpXHJcbiAgICAgICAgXHJcbiAgICAgIGxldCBhbmFsaXN0YXMgPSBhd2FpdCBwb29sLnJlcXVlc3QoKVxyXG4gICAgICAgICAgLnF1ZXJ5KGBTZWxlY3QgKiBmcm9tIFJlZGVfV0FuYWxpc3RhcyBXSEVSRSBjb2RfYW5hbGlzdGEgPSAke2lkfWApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGF3YWl0IGFuYWxpc3Rhcy5yZWNvcmRzZXRzXHJcblxyXG4gICAgICAgIHZhciBub3JtYWxSZXN1bHRzID0gcmVzdWx0YWRvLm1hcCgobXlzcWxPYmosIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbXlzcWxPYmopO1xyXG4gICAgICB9KTtcclxuICAgICBcclxuXHJcblxyXG4gICAgXHJcbiAgIHJlc3BvbnNlLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsJ3MtbWF4YWdlPTEwLHN0YWxlLXdoaWxlLXJldmFsaWRhdGUnKTtcclxuICAgIFxyXG4gICAgIHJldHVybiByZXNwb25zZS5qc29uKG5vcm1hbFJlc3VsdHMpO1xyXG4gICAgXHJcbiAgfSJdLCJuYW1lcyI6WyJzcWwiLCJyZXF1aXJlIiwiY29ublN0ciIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJxdWVyeSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52Iiwic2VuZCIsImlkIiwicG9vbCIsImNvbm5lY3QiLCJkZWZhdWx0IiwiYW5hbGlzdGFzIiwicmVzdWx0YWRvIiwicmVjb3Jkc2V0cyIsIm5vcm1hbFJlc3VsdHMiLCJtYXAiLCJteXNxbE9iaiIsImluZGV4IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0SGVhZGVyIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/analista/[id].js\n");

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