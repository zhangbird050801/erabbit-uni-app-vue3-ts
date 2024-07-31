"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 是否打开SKU弹窗
      skuKey: false,
      // SKU弹窗模式
      skuMode: 1,
      // 后端返回的商品信息
      goodsInfo: {}
    };
  },
  // 监听 - 页面每次【加载时】执行(如：前进)
  onLoad(options) {
    this.init(options);
  },
  methods: {
    // 初始化
    init(options = {}) {
    },
    // 获取商品信息，并打开sku弹出
    openSkuPopup() {
      this.goodsInfo = {
        "_id": "001",
        "name": "iphone11",
        "goods_thumb": "https://img14.360buyimg.com/n0/jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg",
        "sku_list": [
          {
            "_id": "001",
            "goods_id": "001",
            "goods_name": "iphone11",
            "image": "https://img14.360buyimg.com/n0/jfs/t1/79668/22/9987/159271/5d780915Ebf9bf3f4/6a1b2703a9ed8737.jpg",
            "price": 19800,
            "sku_name_arr": ["红色", "128G", "公开版"],
            "stock": 1e3
          },
          {
            "_id": "002",
            "goods_id": "001",
            "goods_name": "iphone11",
            "image": "https://img14.360buyimg.com/n0/jfs/t1/52252/35/10516/124064/5d7808e0E46202391/7100f3733a1c1f00.jpg",
            "price": 9800,
            "sku_name_arr": ["白色", "256G", "公开版"],
            "stock": 100
          },
          {
            "_id": "003",
            "goods_id": "001",
            "goods_name": "iphone11",
            "image": "https://img14.360buyimg.com/n0/jfs/t1/79668/22/9987/159271/5d780915Ebf9bf3f4/6a1b2703a9ed8737.jpg",
            "price": 19800,
            "sku_name_arr": ["红色", "256G", "公开版"],
            "stock": 1
          }
        ],
        "spec_list": [
          {
            "name": "颜色",
            "list": [
              { "name": "红色" },
              { "name": "黑色" },
              { "name": "白色" }
            ]
          },
          {
            "name": "内存",
            "list": [
              { "name": "128G" },
              { "name": "256G" }
            ]
          },
          {
            "name": "版本",
            "list": [
              { "name": "公开版" },
              { "name": "非公开版" }
            ]
          }
        ]
      };
      this.skuKey = true;
    },
    // sku组件 开始-----------------------------------------------------------
    onOpenSkuPopup() {
      console.log("监听 - 打开sku组件");
    },
    onCloseSkuPopup() {
      console.log("监听 - 关闭sku组件");
    },
    // 加入购物车前的判断
    addCartFn(obj) {
      let { selectShop } = obj;
      let res = {};
      let name = selectShop.goods_name;
      if (selectShop.sku_name != "默认") {
        name += "-" + selectShop.sku_name_arr;
      }
      res.msg = `${name} 已添加到购物车`;
      if (typeof obj.success == "function")
        obj.success(res);
    },
    // 加入购物车按钮
    addCart(selectShop) {
      console.log("监听 - 加入购物车");
      this.addCartFn({
        selectShop,
        success: (res) => {
          this.toast(res.msg);
          setTimeout(() => {
            this.skuKey = false;
          }, 300);
        }
      });
    },
    // 立即购买
    buyNow(selectShop) {
      console.log("监听 - 立即购买");
      this.addCartFn({
        selectShop,
        success: (res) => {
          this.toast("立即购买");
        }
      });
    },
    toast(msg) {
      common_vendor.index.showToast({
        title: msg,
        icon: "none"
      });
    }
  }
};
if (!Array) {
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  _easycom_vk_data_goods_sku_popup2();
}
const _easycom_vk_data_goods_sku_popup = () => "../../components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
if (!Math) {
  _easycom_vk_data_goods_sku_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.openSkuPopup()),
    b: common_vendor.sr("skuPopup", "fb6ea9e5-0"),
    c: common_vendor.o($options.onOpenSkuPopup),
    d: common_vendor.o($options.onCloseSkuPopup),
    e: common_vendor.o($options.addCart),
    f: common_vendor.o($options.buyNow),
    g: common_vendor.o(($event) => $data.skuKey = $event),
    h: common_vendor.p({
      ["border-radius"]: "20",
      ["z-index"]: 990,
      localdata: $data.goodsInfo,
      mode: $data.skuMode,
      modelValue: $data.skuKey
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb6ea9e5"], ["__file", "D:/uniapp/erabbit-uni-app-vue3-ts/src/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=cart.js.map
