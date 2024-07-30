"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address-form",
  props: {
    id: null
  },
  setup(__props) {
    const query = __props;
    const form = common_vendor.ref({
      receiver: "",
      // 收货人
      contact: "",
      // 联系方式
      fullLocation: "",
      // 省市区(前端展示)
      provinceCode: "",
      // 省份编码(后端参数)
      cityCode: "",
      // 城市编码(后端参数)
      countyCode: "",
      // 区/县编码(后端参数)
      address: "",
      // 详细地址
      isDefault: 0
      // 默认地址，1为是，0为否
    });
    const getMemberAddressByIdData = async () => {
      if (query.id) {
        const res = await services_address.getMemberAddressByIdAPI(query.id);
        Object.assign(form.value, res.result);
      }
    };
    common_vendor.onLoad(() => {
      getMemberAddressByIdData();
    });
    common_vendor.index.setNavigationBarTitle({
      title: query.id ? "修改地址" : "新建地址"
    });
    const onRegionChange = (ev) => {
      form.value.fullLocation = ev.detail.value.join(" ");
      const [provinceCode, cityCode, countyCode] = ev.detail.code;
      Object.assign(form.value, {
        provinceCode,
        cityCode,
        countyCode
      });
    };
    const onSwitchChange = (ev) => {
      form.value.isDefault = ev.detail.value ? 1 : 0;
    };
    const onSubmit = async () => {
      if (query.id) {
        await services_address.putMemberAddressByIdAPI(query.id, form.value);
      } else {
        await services_address.postMemberAddressAPI(form.value);
      }
      common_vendor.index.showToast({
        icon: "success",
        title: query.id ? "修改成功" : "添加成功"
      });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 400);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: form.value.receiver,
        b: common_vendor.o(($event) => form.value.receiver = $event.detail.value),
        c: form.value.contact,
        d: common_vendor.o(($event) => form.value.contact = $event.detail.value),
        e: form.value.fullLocation
      }, form.value.fullLocation ? {
        f: common_vendor.t(form.value.fullLocation)
      } : {}, {
        g: common_vendor.o(onRegionChange),
        h: form.value.address,
        i: common_vendor.o(($event) => form.value.address = $event.detail.value),
        j: common_vendor.o(onSwitchChange),
        k: form.value.isDefault === 1,
        l: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/erabbit-uni-app-vue3-ts/src/pagesMember/address-form/address-form.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=address-form.js.map
