"use strict";
const utils_http = require("../utils/http.js");
const postLoginWxMin = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin",
    data
  });
};
const postLoginWxMinSimpleAPI = (phoneNumber) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber
    }
  });
};
exports.postLoginWxMin = postLoginWxMin;
exports.postLoginWxMinSimpleAPI = postLoginWxMinSimpleAPI;
//# sourceMappingURL=login.js.map
