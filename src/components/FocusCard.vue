<template>
  <div class="focuscard">
    <img
      :src="item.thumbnail"
      :alt="item.name"
      width="394px" />
    <div class="contents">
      <div class="flag">
        {{ item.flag }}
      </div>
      <div class="title">
        {{ item.name }}
      </div>
      <div class="price">
        <span
          v-if="item.listPrice"
          class="discount">
          {{ calculateDiscount() }}%
        </span>
        <span class="value">{{ addComma(item.price.value) }}</span>
        <span class="unit">
          {{ item.price.unit }}~
        </span>
        <span
          v-if="item.listPrice"
          class="list-price">
          {{ addComma(item.listPrice.value) }}{{ item.listPrice.unit }}
        </span>
      </div>
      <div class="options">
        <div
          v-if="item.options.shipping"
          class="shipping">
          {{ item.options.shipping }}
        </div>
        <div
          v-if="item.options.accumulation"
          class="accumulation">
          <span v-html="item.options.accumulation"></span>
        </div>
        <div class="flex-space"></div>
        <div
          v-if="item.options.count"
          class="count">
          {{ item.options.count }}
        </div>
      </div>
    </div>
    <div class="coupons">
      <div
        v-for="coupon in item.coupons"
        :key="coupon.name"
        class="coupon">
        <div
          v-if="coupon.amount"
          class="coupon__amount">
          {{ coupon.amount.value }}{{ coupon.amount.unit }}
        </div>
        <div class="coupon__name">
          {{ coupon.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    addComma(price) {
      return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    calculateDiscount() {
      if (!this.item.listPrice) return null;
      const price = this.item.price.value;
      const listPrice = this.item.listPrice.value;
      return Math.floor(100 - (price * 100 / listPrice));
    }
  }
}
</script>

<style scoped lang="scss">
.focuscard {
  background-color: #fff;
  width: 394px;
  height: 368px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,.06);
}
.contents {
  position: relative;
  height: 120px;
  padding: 20px 20px 0;
  box-sizing: border-box;
  .flag {
    color: #f43142;
    height: 27px;
    font-size: 12px;
    border: 1px solid #f43142;
    background-color: #fff8f8;
    position: absolute;
    top: -11px;
    padding: 0 4px;
    line-height: 22px;
  }
  .title {
    font-size: 15px;
    white-space: nowrap;
  }
  .price {
    .discount {
      font-size: 24px;
      color: #f43142;
    }
    .value {
      font-size: 24px;
      font-weight: bold;
    }
    .list-price {
      margin-left: 4px;
      text-decoration: line-through;
      color: #999;
    }
  }
  .options {
    display: flex;
    font-size: 13px;
    color: #666;
    //justify-content: space-between;
    .accumulation {
      &::before{
        content: "ㆍ";
      }
    }
    .flex-space {
      flex: 1;
    }
  }
}

.coupons {
  display: flex;
  aligin-items: center;
  height: 50px;
  margin: 0 20px;
  border-top: 1px solid #f4f4f4;
  .coupon {
    display: flex;
    align-items: center;
    margin-right: 12px;
    &__amount {
      border: 1px solid #eee;
      font-size: 11px;
      color: #f43142;
      position: relative;
      margin-right: 6px;
      padding: 3px 12px 3px 6px;
      &::after {
        content: "";
        position: absolute;
        top: -1px;
        right: 0;
        width: 8px;
        height: calc(100% + 2px);
        background-color: #f43242;
      }
    }
    &__name {
      font-size: 13px;
      color: #666;
    }
  }
}


</style>