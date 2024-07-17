"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
const utils_http = require("../../utils/http.js");
const stores_modules_member = require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "my",
  setup(__props) {
    const memberStore = stores_modules_member.useMemberStore();
    const getData = async () => {
      const res = await utils_http.http({
        method: "GET",
        url: "",
        header: {}
      });
      console.log("请求成功", res.result);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(memberStore).profile),
        b: common_vendor.o(($event) => common_vendor.unref(memberStore).setProfile({
          nickname: "黑马先锋",
          token: "12345"
        })),
        c: common_vendor.o(($event) => common_vendor.unref(memberStore).clearProfile()),
        d: common_vendor.o(getData)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/erabbit-uni-app-vue3-ts/src/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=my.js.map
