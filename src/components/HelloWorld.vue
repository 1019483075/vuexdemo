<template>
  <div class="hello">
    <div>state获取nums：{{a}} price：{{b}}</div>
    <!-- <div>{{nums}}和{{price}}</div> -->
    <div>**--------------------------------------------------------------------**</div>
    <button @click="increments">1）mutation----提交按钮</button>
    <div>mutation改变state的状态：{{count}}</div>
    <button @click="incrementsTwo">2）mutation----提交载荷按钮</button>
    <div>mutation提交载荷的状态：{{count}}</div>嗯
    <button @click="incrementsThree">3）mutation----对象方式提交载荷按钮</button>
    <div>mutation对象方式提交载荷的状态：{{count}}</div>
    <button @click="incrementsFour">4）mutation----对象风格传参按钮</button>
    <div>mutation对象风格传参状态：{{count}}</div>
    <button @click="changeName">对象新增属性按钮</button>
    <div>对象新增属性测试：{{name}}</div>
    <button @click="add">add事件</button>
    <div href="#">add事件操作后的nums值：{{a}}</div>
    <div>**--------------------------------------------------------------------**</div>
    <button @click="useAction">action调用</button>
    <div>被action调用后的值：{{count}}</div>
    <div>**--------------------------------------------------------------------**</div>
    <button @click="add">add事件</button>
    <div>getters获取的值:{{total}}</div>
    <button @click="changePrice">改变价格</button>
    <div>{{total}}</div>
    <div>**--------------------------------------------------------------------**</div>
    <h1>获取userinfo模块的状态：firstName: {{firstName}} lastName: {{lastName}}</h1>
  </div>
</template>

<script>
import * as type from "../store/mutation-types";
// import store from '../store/index.js'; // 1. 对象字面量方法虚引入store
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      index: 0,
      name: {
        // 定义name对象
        a: "aaaa"
      }
    };
  },
  computed: {
    // 1. 对象字面量方法
    // price () {
    //   return store.state.price
    // },
    // 2.通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。
    // price () {
    //   return this.$store.state.price
    // },
    // 3.辅助函数
    // ...mapState(['nums', 'price']),
    ...mapState({
      a: state => state.nums,
      b: "price",
      count: "count"
    }),
    ...mapState("userinfo", ["firstName", "lastName"]),
    // 1.获取getters
    // total () {
    //   return this.$store.getters.total
    // }
    // 2.mapGetters辅助函数
    ...mapGetters(["total"])
    // ...mapGetters('userinfo', ['fullName'])
  },
  methods: {
    // 1.提交mutation
    increments() {
      this.$store.commit("increments");
    },
    // 2.提交载荷
    incrementsTwo() {
      this.$store.commit("incrementsTwo", 10);
    },
    // 3.对象方式提交载荷
    incrementsThree() {
      this.$store.commit("incrementsThree", { num1: 30 });
    },
    // 4.对象风格的传参方式
    incrementsFour() {
      this.$store.commit({
        type: "incrementsFour", // 事件名
        num1: 30, // 参数1
        num2: 20 // 参数2
      });
    },
    // 5.以新对象替换老对象
    changeName() {
      // this.name.b = 'bbbb' // 这样新增属性是错误的
      this.$set(this.name, "b", "bbbb"); // 当需要在对象上添加新属性时，你应该 Vue.set(obj, 'xxx', xx)
      // this.name = { ...this.name, b: 'bbbb' } // 以新对象替换老对象。例如，利用 stage-3 的对象展开运算符我们可以这样写
    },
    // add 事件
    add() {
      let nums = 1;
      nums++;
      this.setNums(nums);
    },
    // changePrice
    changePrice() {
      let nums = 3;
      nums++;
      this.setprice(nums);
    },
    // 6. mapMutations辅助函数
    ...mapMutations({
      setNums: type.SET_NUMS, // 将 `this.setNums()` 映射为 `this.$store.commit('setNums')`
      setprice: type.SET_PRICE // 将 `this.setprice()` 映射为 `this.$store.setprice('setNums')`
    }),
    useAction() {
      // this.changeIncrement({ num1: 40, num2: 30 })
      // 1.action的dispatch分发  action支持以载荷形式分发
      // this.$store.dispatch('increment', { num1: 40, num2: 30 })
      // 2.action的dispatch分发  action支持以对象形式分发
      // this.$store.dispatch({ type: 'increment', num1: 40, num2: 30 })
      // this.changeIncrement()
      this.changeIncrement({ num1: 20, num2: 30 });
    },
    // mapAction辅助函数
    ...mapActions({
      // changeIncrement: 'increment', // 将 `this.changeIncrement()` 映射为 `this.$store.dispatch('increment')`
      changeIncrement: "actionA"
    }),
    ...mapActions("userinfo", ["changeName"])
  },
  created() {
    // 调用userinfo的changeName方法
    this.changeName();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='css'>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  width: 800px;
  margin: 0 auto;
  text-align: left;
}
</style>
