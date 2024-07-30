"use strict";
const common_vendor = require("../../common/vendor.js");
const services_profile = require("../../services/profile.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../utils/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "profile",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const profile = common_vendor.ref({});
    const getMemberProfileData = async () => {
      const res = await services_profile.getMemberProfileAPI();
      profile.value = res.result;
    };
    common_vendor.onLoad(() => {
      getMemberProfileData();
    });
    const memberStore = stores_modules_member.useMemberStore();
    const onAvatarChange = () => {
      common_vendor.index.chooseMedia({
        // 文件个数
        count: 1,
        // 文件类型
        mediaType: ["image"],
        success: (res) => {
          const { tempFilePath } = res.tempFiles[0];
          common_vendor.index.uploadFile({
            url: "/member/profile/avator",
            name: "file",
            filePath: tempFilePath,
            success: (res2) => {
              if (res2.statusCode === 200) {
                const avatar = JSON.parse(res2.data).result.avator;
                profile.value.avatar = avatar;
                memberStore.profile.avatar = avatar;
              }
            }
          });
        }
      });
    };
    const ongenderChange = (ev) => {
      profile.value.gender = ev.detail.value;
    };
    const onBirthdayChange = (ev) => {
      profile.value.birthday = ev.detail.value;
    };
    let fullLocationCode = ["", "", ""];
    const onFullLocationChange = (ev) => {
      profile.value.fullLocation = ev.detail.value.join(" ");
      fullLocationCode = ev.detail.code;
    };
    const onSubmit = async () => {
      const { nickname, gender, birthday, profession } = profile.value;
      const res = await services_profile.putMemberProfileAPI({
        nickname,
        gender,
        birthday,
        provinceCode: fullLocationCode[0],
        cityCode: fullLocationCode[1],
        countyCode: fullLocationCode[2],
        profession
      });
      memberStore.profile.nickname = res.result.nickname;
      common_vendor.index.showToast({ icon: "success", title: "保存成功" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 400);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: (_b = profile.value) == null ? void 0 : _b.avatar,
        c: common_vendor.o(onAvatarChange),
        d: common_vendor.t((_c = profile.value) == null ? void 0 : _c.account),
        e: profile.value.nickname,
        f: common_vendor.o(($event) => profile.value.nickname = $event.detail.value),
        g: ((_d = profile.value) == null ? void 0 : _d.gender) === "男",
        h: ((_e = profile.value) == null ? void 0 : _e.gender) === "女",
        i: common_vendor.o(ongenderChange),
        j: (_f = profile.value) == null ? void 0 : _f.birthday
      }, ((_g = profile.value) == null ? void 0 : _g.birthday) ? {
        k: common_vendor.t(profile.value.birthday)
      } : {}, {
        l: common_vendor.o(onBirthdayChange),
        m: /* @__PURE__ */ new Date(),
        n: (_h = profile.value) == null ? void 0 : _h.birthday,
        o: (_i = profile.value) == null ? void 0 : _i.fullLocation
      }, ((_j = profile.value) == null ? void 0 : _j.fullLocation) ? {
        p: common_vendor.t(profile.value.fullLocation)
      } : {}, {
        q: common_vendor.o(onFullLocationChange),
        r: (_l = (_k = profile.value) == null ? void 0 : _k.fullLocation) == null ? void 0 : _l.split(" "),
        s: profile.value.profession,
        t: common_vendor.o(($event) => profile.value.profession = $event.detail.value),
        v: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/erabbit-uni-app-vue3-ts/src/pagesMember/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=profile.js.map
