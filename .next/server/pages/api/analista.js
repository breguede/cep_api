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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sql = __webpack_require__(/*! mssql */ \"mssql\");\nconst Server = process.env.SERVER;\nconst Database = process.env.DATABASE;\nconst User = process.env.USER;\nconst Password = process.env.PASSWORD;\nconst connStr = {\n    server: Server,\n    database: Database,\n    port: 8529,\n    user: User,\n    password: Password,\n    options: {\n        trustedConnection: true,\n        trustServerCertificate: true,\n        cryptoCredentialsDetails: {\n            minVersion: \"TLSv1\"\n        }\n    },\n    debug: true,\n    parseJSON: true\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connStr);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGJDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBQzVCLE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE1BQU07QUFFakMsTUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csUUFBUTtBQUNyQyxNQUFNQyxJQUFJLEdBQUdMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxJQUFJO0FBQzdCLE1BQU1DLFFBQVEsR0FBR1AsT0FBTyxDQUFDQyxHQUFHLENBQUNPLFFBQVE7QUFFckMsTUFBTUMsT0FBTyxHQUFHO0lBQ1pDLE1BQU0sRUFBRVgsTUFBTTtJQUNkWSxRQUFRLEVBQUVSLFFBQVE7SUFDbEJTLElBQUksRUFBRSxJQUFJO0lBQ1ZDLElBQUksRUFBRVIsSUFBSTtJQUNWUyxRQUFRLEVBQUVQLFFBQVE7SUFDbEJRLE9BQU8sRUFBRTtRQUNQQyxpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCQyxzQkFBc0IsRUFBRSxJQUFJO1FBQzVCQyx3QkFBd0IsRUFBRTtZQUN2QkMsVUFBVSxFQUFFLE9BQU87U0FDdkI7S0FDRjtJQUNEQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxTQUFTLEVBQUUsSUFBSTtDQUNkO0FBRUQsaUVBQWVaLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcF9hcGkvLi9jb25maWcvZGJDb25maWcuanM/ZjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5jb25zdCBTZXJ2ZXIgPSBwcm9jZXNzLmVudi5TRVJWRVI7XHJcblxyXG5jb25zdCBEYXRhYmFzZSA9IHByb2Nlc3MuZW52LkRBVEFCQVNFO1xyXG5jb25zdCBVc2VyID0gcHJvY2Vzcy5lbnYuVVNFUjtcclxuY29uc3QgUGFzc3dvcmQgPSBwcm9jZXNzLmVudi5QQVNTV09SRDtcclxuXHJcbmNvbnN0IGNvbm5TdHIgPSB7ICAgXHJcbiAgICBzZXJ2ZXI6IFNlcnZlcixcclxuICAgIGRhdGFiYXNlOiBEYXRhYmFzZSxcclxuICAgIHBvcnQ6IDg1MjksXHJcbiAgICB1c2VyOiBVc2VyLFxyXG4gICAgcGFzc3dvcmQ6IFBhc3N3b3JkLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICB0cnVzdGVkQ29ubmVjdGlvbjogdHJ1ZSxcclxuICAgICAgdHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZTogdHJ1ZSxcclxuICAgICAgY3J5cHRvQ3JlZGVudGlhbHNEZXRhaWxzOiB7XHJcbiAgICAgICAgIG1pblZlcnNpb246ICdUTFN2MSdcclxuICAgIH1cclxuICB9LFxyXG4gIGRlYnVnOiB0cnVlLFxyXG4gIHBhcnNlSlNPTjogdHJ1ZVxyXG4gIH07IFxyXG4gXHJcbiAgZXhwb3J0IGRlZmF1bHQgY29ublN0cjsiXSwibmFtZXMiOlsic3FsIiwicmVxdWlyZSIsIlNlcnZlciIsInByb2Nlc3MiLCJlbnYiLCJTRVJWRVIiLCJEYXRhYmFzZSIsIkRBVEFCQVNFIiwiVXNlciIsIlVTRVIiLCJQYXNzd29yZCIsIlBBU1NXT1JEIiwiY29ublN0ciIsInNlcnZlciIsImRhdGFiYXNlIiwicG9ydCIsInVzZXIiLCJwYXNzd29yZCIsIm9wdGlvbnMiLCJ0cnVzdGVkQ29ubmVjdGlvbiIsInRydXN0U2VydmVyQ2VydGlmaWNhdGUiLCJjcnlwdG9DcmVkZW50aWFsc0RldGFpbHMiLCJtaW5WZXJzaW9uIiwiZGVidWciLCJwYXJzZUpTT04iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/dbConfig.js\n");

/***/ }),

/***/ "(api)/./pages/api/analista/index.js":
/*!*************************************!*\
  !*** ./pages/api/analista/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sql = __webpack_require__(/*! mssql */ \"mssql\");\nconst connStr = __webpack_require__(/*! ../../../config/dbConfig */ \"(api)/./config/dbConfig.js\");\nasync function analista(request, response) {\n    if (request.query.SECRET_KEY !== process.env.SECRET_KEY) {\n        return response.send(\"sem autorizacao\");\n    }\n    const { method  } = request;\n    switch(method){\n        case \"GET\":\n            try {\n                let pool = await sql.connect(connStr.default);\n                let analistas = await pool.request().query(`Select * from Rede_WAnalistas`);\n                const resultado = analistas.recordsets;\n                response.setHeader(\"Cache-Control\", \"s-maxage=10,stale-while-revalidate\");\n                return response.json(resultado[0]);\n            } catch (error) {\n                console.log(error);\n            }\n        case \"POST\":\n            try {\n                response.status(200).send(\"POST REALIZADO COM SUCESSO!!!\");\n            } catch (error1) {\n                console.log(error1);\n            }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (analista);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hbGlzdGEvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztNQUFNQSxHQUFHLEdBQUdDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQztBQUM1QixNQUFNQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsNERBQTBCLENBQUM7QUFFbkQsZUFBZUUsUUFBUSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxJQUFJRCxPQUFPLENBQUNFLEtBQUssQ0FBQ0MsVUFBVSxLQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsVUFBVSxFQUFFO1FBQ3ZELE9BQU9GLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLGlCQUFpQixDQUFDO0tBQ3hDO0lBQ0QsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR1AsT0FBTztJQUUxQixPQUFRTyxNQUFNO1FBQ1osS0FBSyxLQUFLO1lBQ1IsSUFBSTtnQkFDRixJQUFJQyxJQUFJLEdBQUcsTUFBTVosR0FBRyxDQUFDYSxPQUFPLENBQUNYLE9BQU8sQ0FBQ1ksT0FBTyxDQUFDO2dCQUM3QyxJQUFJQyxTQUFTLEdBQUcsTUFBTUgsSUFBSSxDQUFDUixPQUFPLEVBQUUsQ0FDakNFLEtBQUssQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBQ3pDLE1BQU1VLFNBQVMsR0FBR0QsU0FBUyxDQUFDRSxVQUFVO2dCQUV0Q1osUUFBUSxDQUFDYSxTQUFTLENBQUMsZUFBZSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7Z0JBRTFFLE9BQU9iLFFBQVEsQ0FBQ2MsSUFBSSxDQUFDSCxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQyxDQUFDLE9BQU9JLEtBQUssRUFBRTtnQkFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO2FBQ3BCO1FBQ0QsS0FBSyxNQUFNO1lBQ1gsSUFBSTtnQkFDRmYsUUFBUSxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDYixJQUFJLENBQUMsK0JBQStCLENBQUM7YUFDM0QsQ0FBQyxPQUFPVSxNQUFLLEVBQUU7Z0JBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFLLENBQUMsQ0FBQzthQUNwQjtLQUNKO0NBRUY7QUFFRCxpRUFBZWpCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NlcF9hcGkvLi9wYWdlcy9hcGkvYW5hbGlzdGEvaW5kZXguanM/YjU4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5jb25zdCBjb25uU3RyID0gcmVxdWlyZSgnLi4vLi4vLi4vY29uZmlnL2RiQ29uZmlnJylcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFuYWxpc3RhKHJlcXVlc3QsIHJlc3BvbnNlKSB7XHJcbiAgaWYgKHJlcXVlc3QucXVlcnkuU0VDUkVUX0tFWSAhPT0gcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLnNlbmQoJ3NlbSBhdXRvcml6YWNhbycpXHJcbiAgfVxyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXF1ZXN0O1xyXG5cclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBwb29sID0gYXdhaXQgc3FsLmNvbm5lY3QoY29ublN0ci5kZWZhdWx0KVxyXG4gICAgICAgIGxldCBhbmFsaXN0YXMgPSBhd2FpdCBwb29sLnJlcXVlc3QoKVxyXG4gICAgICAgICAgLnF1ZXJ5KGBTZWxlY3QgKiBmcm9tIFJlZGVfV0FuYWxpc3Rhc2ApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdGFkbyA9IGFuYWxpc3Rhcy5yZWNvcmRzZXRzXHJcblxyXG4gICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICdzLW1heGFnZT0xMCxzdGFsZS13aGlsZS1yZXZhbGlkYXRlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKHJlc3VsdGFkb1swXSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuc2VuZCgnUE9TVCBSRUFMSVpBRE8gQ09NIFNVQ0VTU08hISEnKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuYWxpc3RhOyJdLCJuYW1lcyI6WyJzcWwiLCJyZXF1aXJlIiwiY29ublN0ciIsImFuYWxpc3RhIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicXVlcnkiLCJTRUNSRVRfS0VZIiwicHJvY2VzcyIsImVudiIsInNlbmQiLCJtZXRob2QiLCJwb29sIiwiY29ubmVjdCIsImRlZmF1bHQiLCJhbmFsaXN0YXMiLCJyZXN1bHRhZG8iLCJyZWNvcmRzZXRzIiwic2V0SGVhZGVyIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/analista/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/analista/index.js"));
module.exports = __webpack_exports__;

})();