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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title , image , description , address  } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://kedharnadh555:Kedhar.555@cluster0.llzoxit.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(\"result\", result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFDdkIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUMxQyxJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBRyxNQUFNLEVBQUM7UUFDbkIsTUFBTUMsSUFBSSxHQUFDSCxHQUFHLENBQUNJLElBQUk7UUFDbkIsTUFBTSxFQUFDQyxLQUFLLEdBQUNDLEtBQUssR0FBQ0MsV0FBVyxHQUFFQyxPQUFPLEdBQUMsR0FBQ0wsSUFBSTtRQUM3QyxNQUFNTSxNQUFNLEdBQUMsTUFBTVgsd0RBQW1CLENBQUMseUhBQXlILENBQUM7UUFDakssTUFBTWEsRUFBRSxHQUFDRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUNwQixNQUFNQyxpQkFBaUIsR0FBQ0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQ2hELE1BQU1DLE1BQU0sR0FBQyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBUyxDQUFDWixJQUFJLENBQUM7UUFDcERhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBQ0gsTUFBTSxDQUFDLENBQUM7UUFDN0JMLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFO1FBQ2RqQixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsa0JBQWtCO1NBQUMsQ0FBQztJQUN0RCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuICAgIGlmKHJlcS5tZXRob2Q9PT0nUE9TVCcpe1xyXG4gICAgICAgIGNvbnN0IGRhdGE9cmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3Qge3RpdGxlLGltYWdlLGRlc2NyaXB0aW9uLCBhZGRyZXNzfT1kYXRhO1xyXG4gICAgICAgIGNvbnN0IGNsaWVudD1hd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9rZWRoYXJuYWRoNTU1OktlZGhhci41NTVAY2x1c3RlcjAubGx6b3hpdC5tb25nb2RiLm5ldC9tZWV0dXA/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9Q2x1c3RlcjBcIilcclxuICAgICAgICBjb25zdCBkYj1jbGllbnQuZGIoKVxyXG4gICAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uPWRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdD1hd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIixyZXN1bHQpO1xyXG4gICAgICAgIGNsaWVudC5jbG9zZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6J01lZXR1cCBpbnNlcnRlZCEnfSlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();