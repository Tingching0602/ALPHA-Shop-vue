<template>
  <div class="shopping-lists-wrapper">
    <div class="shopping-content">
      <p class="shopping-lists-title">購物籃</p>
      <ul class="shopping-lists">
        <li class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" alt="" />
          <div class="product-content d-flex flex-column">
            <span class="title">{{ product.name }}</span>
            <div class="amount-control">
              <div class="minus" @click.stop.prevent="minusAmount(product.id)">
                －
              </div>
              <span class="amount">{{ product.amount }}</span>
              <div class="plus" @click.stop.prevent="plusAmount(product.id)">
                ＋
              </div>
            </div>
            <div class="price">{{ product.price }}</div>
          </div>
        </li>
      </ul>
      <div
        class="price-outline d-flex justify-content-between align-items-center"
      >
        運費
        <div class="delivery-fee">{{ deliveryFee | presentDeliveryFee }}</div>
      </div>
      <div
        class="price-outline d-flex justify-content-between align-items-center"
      >
        小計
        <div class="total-amount">${{ renewTotalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/image/jeans-slim@2x.png";
import image2 from "../assets/image/jeans-straight@2x.png";

const dummyData = {
  products: [
    {
      id: 123,
      name: "破壞補丁修身牛仔褲",
      image: image1,
      price: "$3,999",
      priceNumber: 3999,
      amount: 1,
    },
    {
      id: 126,
      name: "刷色直筒牛仔褲",
      image: image2,
      price: "$1,299",
      priceNumber: 1299,
      amount: 1,
    },
  ],
};

export default {
  props: {
    deliveryFee: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      products: [],
      totalPrice: 0,
    };
  },
  created() {
    this.fetchProducts();
    // this.fetchTotalPrice()
  },
  methods: {
    fetchProducts() {
      this.products = dummyData.products;
    },
    fetchTotalPrice() {
      this.products.forEach((product) => {
        this.totalPrice += product.priceNumber * product.amount;
      });
      this.totalPrice += this.deliveryFee;
    },
    minusAmount(productId) {
      this.products = this.products.map((product) => {
        if (product.id === productId && product.amount !== 0) {
          return {
            ...product,
            amount: product.amount - 1,
          };
        }
        return product;
      });
    },
    plusAmount(productId) {
      this.products = this.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            amount: product.amount + 1,
          };
        }
        return product;
      });
    },
  },
  computed: {
    renewTotalPrice() {
      this.totalPrice = 0;
      this.products.forEach((product) => {
        this.totalPrice += product.amount * product.priceNumber;
      });
      this.totalPrice += this.deliveryFee;
      return this.totalPrice;
    },
  },
  filters: {
    presentDeliveryFee(fee) {
      if (fee === 0) {
        return "免費";
      }
      return "$" + fee;
    },
  },
};
</script>