"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const goods = common_vendor.ref();
    const getGoodsByIdData = async () => {
      const res = await services_goods.getGoodsByIdAPI(query.id);
      goods.value = res.result;
    };
    common_vendor.onLoad(() => {
      getGoodsByIdData();
    });
    const currentIndex = common_vendor.ref(0);
    const onChange = (ev) => {
      currentIndex.value = ev.detail.current;
    };
    const onTapImage = (url) => {
      common_vendor.index.previewImage({
        current: url,
        urls: goods.value.mainPictures
      });
    };
    const popup = common_vendor.ref();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return {
        a: common_vendor.f((_a = goods.value) == null ? void 0 : _a.mainPictures, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onTapImage(item), item),
            b: item,
            c: item
          };
        }),
        b: common_vendor.o(onChange),
        c: common_vendor.t(currentIndex.value + 1),
        d: common_vendor.t((_b = goods.value) == null ? void 0 : _b.mainPictures.length),
        e: common_vendor.t((_c = goods.value) == null ? void 0 : _c.price),
        f: common_vendor.t((_d = goods.value) == null ? void 0 : _d.name),
        g: common_vendor.t((_e = goods.value) == null ? void 0 : _e.desc),
        h: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.open("bottom");
        }),
        i: common_vendor.f((_f = goods.value) == null ? void 0 : _f.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        j: common_vendor.f((_g = goods.value) == null ? void 0 : _g.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        k: common_vendor.f((_h = goods.value) == null ? void 0 : _h.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        l: ((_i = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _i.bottom) + "px",
        m: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        }),
        n: common_vendor.sr(popup, "76ab1f1d-0", {
          "k": "popup"
        }),
        o: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/erabbit-uni-app-vue3-ts/src/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=goods.js.map
