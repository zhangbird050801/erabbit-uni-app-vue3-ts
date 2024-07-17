<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text class="icon-search sk-transparent sk-text-14-2857-403 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories categories">
        <scroll-view scroll-y="true" class="primary primary">
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-265 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-239 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-467 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-656 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-659 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-31 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-237 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-973 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-273 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view scroll-y="true" class="secondary secondary">
          <view is="components/XtxSwiper" class="banner banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-27-2727-100 sk-text">居家生活用品</text>
              <navigator class="more sk-transparent sk-text-30-3030-902 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部</navigator>
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-828 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-835 sk-text">149.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-415 sk-text">极光限定 珠光蓝珐琅锅</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-695 sk-text">199.00</text>
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-27-2727-183 sk-text">收纳</text>
              <navigator class="more sk-transparent sk-text-30-3030-369 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部</navigator>
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-687 sk-text">给衣柜减减肥，真空防潮压缩袋</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-333 sk-text">79.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-619 sk-text">爆款明星好物，抽屉式透明储物柜</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-223 sk-text">129.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-182 sk-text">衣柜省空间神器，棉麻涤·收纳挂袋</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-318 sk-text">55.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-579 sk-text">换季好帮手，大容量防尘衣物收纳袋</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-281 sk-text">69.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-378 sk-text">可水洗的布艺收纳盒</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-301 sk-text">29.90</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-264 sk-text">开发员自留款，带滚轮双层脏衣篓</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-46 sk-text">125.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
  .sk-transparent {
      color: transparent !important;
    }
  .sk-text-14-2857-403 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 38.0435rpx;
      position: relative !important;
    }
  .sk-text {
      background-origin: content-box !important;
      background-clip: content-box !important;
      background-color: transparent !important;
      color: transparent !important;
      background-repeat: repeat-y !important;
    }
  .sk-text-14-2857-265 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-14-2857-239 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-14-2857-467 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-14-2857-656 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-14-2857-659 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-14-2857-31 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-14-2857-237 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-14-2857-973 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-14-2857-273 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 35.5072rpx;
      position: relative !important;
    }
  .sk-text-27-2727-100 {
      background-image: linear-gradient(transparent 27.2727%, #EEEEEE 0%, #EEEEEE 72.7273%, transparent 0%) !important;
      background-size: 100% 59.7826rpx;
      position: relative !important;
    }
  .sk-text-30-3030-902 {
      background-image: linear-gradient(transparent 30.3030%, #EEEEEE 0%, #EEEEEE 69.6970%, transparent 0%) !important;
      background-size: 100% 59.7826rpx;
      position: relative !important;
    }
  .sk-text-14-2857-828 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 30.4348rpx;
      position: relative !important;
    }
  .sk-opacity {
      opacity: 0 !important;
    }
  .sk-text-14-2857-835 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 32.9710rpx;
      position: relative !important;
    }
  .sk-text-14-2857-415 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 30.4348rpx;
      position: relative !important;
    }
  .sk-text-14-2857-695 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 32.9710rpx;
      position: relative !important;
    }
  .sk-text-27-2727-183 {
      background-image: linear-gradient(transparent 27.2727%, #EEEEEE 0%, #EEEEEE 72.7273%, transparent 0%) !important;
      background-size: 100% 59.7826rpx;
      position: relative !important;
    }
  .sk-text-30-3030-369 {
      background-image: linear-gradient(transparent 30.3030%, #EEEEEE 0%, #EEEEEE 69.6970%, transparent 0%) !important;
      background-size: 100% 59.7826rpx;
      position: relative !important;
    }
  .sk-text-14-2857-687 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 30.4348rpx;
      position: relative !important;
    }
  .sk-text-14-2857-333 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 32.9710rpx;
      position: relative !important;
    }
  .sk-text-14-2857-619 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 30.4348rpx;
      position: relative !important;
    }
  .sk-text-14-2857-223 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 32.9710rpx;
      position: relative !important;
    }
  .sk-text-14-2857-182 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 30.4348rpx;
      position: relative !important;
    }
  .sk-text-14-2857-318 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 32.9710rpx;
      position: relative !important;
    }
  .sk-text-14-2857-579 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 30.4348rpx;
      position: relative !important;
    }
  .sk-text-14-2857-281 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 32.9710rpx;
      position: relative !important;
    }
  .sk-text-14-2857-378 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 30.4348rpx;
      position: relative !important;
    }
  .sk-text-14-2857-301 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 32.9710rpx;
      position: relative !important;
    }
  .sk-text-14-2857-264 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 30.4348rpx;
      position: relative !important;
    }
  .sk-text-14-2857-46 {
      background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
      background-size: 100% 32.9710rpx;
      position: relative !important;
    }
  .sk-image {
      background: #EFEFEF !important;
    }
  .sk-pseudo::before, .sk-pseudo::after {
        background: #EFEFEF !important;
        background-image: none !important;
        color: transparent !important;
        border-color: transparent !important;
      }
  .sk-pseudo-rect::before, .sk-pseudo-rect::after {
        border-radius: 0 !important;
      }
  .sk-pseudo-circle::before, .sk-pseudo-circle::after {
        border-radius: 50% !important;
      }
  .sk-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: transparent;
    }

</style>
