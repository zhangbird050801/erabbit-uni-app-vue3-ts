"use strict";
const utils_http = require("../utils/http.js");
const postMemberCartAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/cart",
    data
  });
};
exports.postMemberCartAPI = postMemberCartAPI;
//# sourceMappingURL=cart.js.map
