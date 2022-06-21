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
exports.id = "pages/api/analista";
exports.ids = ["pages/api/analista"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Server = process.env.SERVER;\nconst Database = process.env.DATABASE;\nconst User = process.env.USER;\nconst Password = process.env.PASSWORD;\nconst connStr = {\n    server: Server,\n    database: Database,\n    port: 8529,\n    user: User,\n    password: Password,\n    options: {\n        trustedConnection: true,\n        trustServerCertificate: true,\n        cryptoCredentialsDetails: {\n            minVersion: \"TLSv1\"\n        }\n    },\n    debug: true,\n    parseJSON: true\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connStr);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGJDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU07QUFDakMsTUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csUUFBUTtBQUNyQyxNQUFNQyxJQUFJLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxJQUFJO0FBQzdCLE1BQU1DLFFBQVEsR0FBR1AsT0FBTyxDQUFDQyxHQUFHLENBQUNPLFFBQVE7QUFFckMsTUFBTUMsT0FBTyxHQUFHO0lBQ1pDLE1BQU0sRUFBRVgsTUFBTTtJQUNkWSxRQUFRLEVBQUVSLFFBQVE7SUFDbEJTLElBQUksRUFBRSxJQUFJO0lBQ1ZDLElBQUksRUFBRVIsSUFBSTtJQUNWUyxRQUFRLEVBQUVQLFFBQVE7SUFDbEJRLE9BQU8sRUFBRTtRQUNQQyxpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCQyxzQkFBc0IsRUFBRSxJQUFJO1FBQzVCQyx3QkFBd0IsRUFBRTtZQUN2QkMsVUFBVSxFQUFFLE9BQU87U0FDdkI7S0FDRjtJQUNEQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxTQUFTLEVBQUUsSUFBSTtDQUNkO0FBRUQsaUVBQWVaLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcF9hcGkvLi9jb25maWcvZGJDb25maWcuanM/ZjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTZXJ2ZXIgPSBwcm9jZXNzLmVudi5TRVJWRVI7XHJcbmNvbnN0IERhdGFiYXNlID0gcHJvY2Vzcy5lbnYuREFUQUJBU0U7XHJcbmNvbnN0IFVzZXIgPSBwcm9jZXNzLmVudi5VU0VSO1xyXG5jb25zdCBQYXNzd29yZCA9IHByb2Nlc3MuZW52LlBBU1NXT1JEO1xyXG5cclxuY29uc3QgY29ublN0ciA9IHsgICBcclxuICAgIHNlcnZlcjogU2VydmVyLFxyXG4gICAgZGF0YWJhc2U6IERhdGFiYXNlLFxyXG4gICAgcG9ydDogODUyOSxcclxuICAgIHVzZXI6IFVzZXIsXHJcbiAgICBwYXNzd29yZDogUGFzc3dvcmQsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIHRydXN0ZWRDb25uZWN0aW9uOiB0cnVlLFxyXG4gICAgICB0cnVzdFNlcnZlckNlcnRpZmljYXRlOiB0cnVlLFxyXG4gICAgICBjcnlwdG9DcmVkZW50aWFsc0RldGFpbHM6IHtcclxuICAgICAgICAgbWluVmVyc2lvbjogJ1RMU3YxJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGVidWc6IHRydWUsXHJcbiAgcGFyc2VKU09OOiB0cnVlXHJcbiAgfTsgXHJcbiBcclxuICBleHBvcnQgZGVmYXVsdCBjb25uU3RyOyJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJwcm9jZXNzIiwiZW52IiwiU0VSVkVSIiwiRGF0YWJhc2UiLCJEQVRBQkFTRSIsIlVzZXIiLCJVU0VSIiwiUGFzc3dvcmQiLCJQQVNTV09SRCIsImNvbm5TdHIiLCJzZXJ2ZXIiLCJkYXRhYmFzZSIsInBvcnQiLCJ1c2VyIiwicGFzc3dvcmQiLCJvcHRpb25zIiwidHJ1c3RlZENvbm5lY3Rpb24iLCJ0cnVzdFNlcnZlckNlcnRpZmljYXRlIiwiY3J5cHRvQ3JlZGVudGlhbHNEZXRhaWxzIiwibWluVmVyc2lvbiIsImRlYnVnIiwicGFyc2VKU09OIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/dbConfig.js\n");

/***/ }),

/***/ "(api)/./pages/api/analista.js":
/*!*******************************!*\
  !*** ./pages/api/analista.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst connStr = __webpack_require__(/*! ../../config/dbConfig.js */ \"(api)/./config/dbConfig.js\");\nconst sql = __webpack_require__(/*! mssql */ \"mssql\");\nasync function analista(request, response) {\n    if (request.query.SECRET_KEY !== process.env.SECRET_KEY) {\n        response.send(\"sem autorizacao\");\n    }\n    let pool = await sql.connect(connStr);\n    let analistas = await pool.request().query(`Select * from Rede_WAnalistas`);\n    const resultado = analistas.recordsets;\n    response.setHeader(\"Cache-Control\", \"s-maxage=10,stale-while-revalidate\");\n    response.json(resultado[0]);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (analista);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbGlzdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyw0REFBMEIsQ0FBQztBQUNuRCxNQUFNQyxHQUFHLEdBQUdELG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUc1QixlQUFlRSxRQUFRLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLElBQUdELE9BQU8sQ0FBQ0UsS0FBSyxDQUFDQyxVQUFVLEtBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixVQUFVLEVBQUM7UUFDbkRGLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLGlCQUFpQixDQUFDO0tBQ25DO0lBQ0QsSUFBSUMsSUFBSSxHQUFHLE1BQU1ULEdBQUcsQ0FBQ1UsT0FBTyxDQUFDWixPQUFPLENBQUM7SUFDckMsSUFBSWEsU0FBUyxHQUFHLE1BQU1GLElBQUksQ0FBQ1AsT0FBTyxFQUFFLENBQ2pDRSxLQUFLLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ3pDLE1BQU1RLFNBQVMsR0FBR0QsU0FBUyxDQUFDRSxVQUFVO0lBRXRDVixRQUFRLENBQUNXLFNBQVMsQ0FBQyxlQUFlLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztJQUUxRVgsUUFBUSxDQUFDWSxJQUFJLENBQUNILFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBRS9CO0FBRUQsaUVBQWVYLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcF9hcGkvLi9wYWdlcy9hcGkvYW5hbGlzdGEuanM/OWUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25uU3RyID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL2RiQ29uZmlnLmpzJyk7XHJcbmNvbnN0IHNxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYW5hbGlzdGEocmVxdWVzdCwgcmVzcG9uc2UpIHtcclxuICAgIGlmKHJlcXVlc3QucXVlcnkuU0VDUkVUX0tFWSAhPT0gcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSl7XHJcbiAgICAgICAgcmVzcG9uc2Uuc2VuZCgnc2VtIGF1dG9yaXphY2FvJylcclxuICAgIH1cclxuICAgIGxldCBwb29sID0gYXdhaXQgc3FsLmNvbm5lY3QoY29ublN0cilcclxuICAgIGxldCBhbmFsaXN0YXMgPSBhd2FpdCBwb29sLnJlcXVlc3QoKVxyXG4gICAgICAucXVlcnkoYFNlbGVjdCAqIGZyb20gUmVkZV9XQW5hbGlzdGFzYCk7XHJcbiAgICBjb25zdCByZXN1bHRhZG8gPSBhbmFsaXN0YXMucmVjb3Jkc2V0c1xyXG5cclxuICAgIHJlc3BvbnNlLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICdzLW1heGFnZT0xMCxzdGFsZS13aGlsZS1yZXZhbGlkYXRlJyk7XHJcblxyXG4gICAgcmVzcG9uc2UuanNvbihyZXN1bHRhZG9bMF0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5hbGlzdGE7Il0sIm5hbWVzIjpbImNvbm5TdHIiLCJyZXF1aXJlIiwic3FsIiwiYW5hbGlzdGEiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJxdWVyeSIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52Iiwic2VuZCIsInBvb2wiLCJjb25uZWN0IiwiYW5hbGlzdGFzIiwicmVzdWx0YWRvIiwicmVjb3Jkc2V0cyIsInNldEhlYWRlciIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/analista.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analista.js"));
module.exports = __webpack_exports__;

})();