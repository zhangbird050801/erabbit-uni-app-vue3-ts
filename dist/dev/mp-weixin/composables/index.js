"use strict";
const common_vendor = require("../common/vendor.js");
const userGuessList = () => {
  const guessRef = common_vendor.ref();
  const onScrolltolower = () => {
    var _a;
    (_a = guessRef.value) == null ? void 0 : _a.getMore();
  };
  return {
    guessRef,
    onScrolltolower
  };
};
exports.userGuessList = userGuessList;
//# sourceMappingURL=index.js.map
