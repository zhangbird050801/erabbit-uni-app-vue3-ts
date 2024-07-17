"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
require("../utils/http.js");
require("../stores/index.js");
require("../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxGuess",
  setup(__props, { expose }) {
    const pageParams = {
      page: 1,
      pageSize: 10
    };
    const guessList = common_vendor.ref([]);
    const finish = common_vendor.ref(false);
    const getHomeGoodsGuessLikeData = async () => {
      if (finish.value) {
        return common_vendor.index.showToast({ icon: "none", title: "没有更多数据了" });
      }
      const res = await services_home.getHomeGoodsGuessLikeAPI(pageParams);
      guessList.value.push(...res.result.items);
      if (pageParams.page < res.result.pages) {
        pageParams.page++;
      } else {
        finish.value = true;
      }
    };
    const resetData = () => {
      pageParams.page = 1;
      guessList.value = [];
      finish.value = false;
    };
    common_vendor.onMounted(() => {
      getHomeGoodsGuessLikeData();
    });
    expose({
      resetData,
      getMore: getHomeGoodsGuessLikeData
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(guessList.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        b: `/pages/goods/goods`,
        c: common_vendor.t(finish.value ? "没有更多数据" : "正在加载...")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/erabbit-uni-app-vue3-ts/src/components/XtxGuess.vue"]]);
wx.createComponent(Component);
//# sourceMappingURL=XtxGuess.js.map
