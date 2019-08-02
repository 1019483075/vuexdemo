<template>
  <div class="hello">
    <h1></h1>
    <h2>Essential Links</h2>
    <h1>firstName: {{firstName}} lastName: {{lastName}} fullName: {{fullName}}</h1>
    <ul>
      <li>
        <a href="#">{{a}}*{{b}}={{total}}</a>
        <p>{{total}}</p>
        <button @click="add">点击</button>
        <button @click="changeNumAndPrice">changeNumAndPrice</button>
      </li>
    </ul>
  </div>
</template>

<script>
import * as type from '../store/mutation-types'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      index: 0
    }
  },
  computed: {
    // ...mapState([
    //   'nums'
    // ]),
    // total () {
    //   return this.a * this.b
    // },
    ...mapState({
      // 是指辅助函数
      a: 'nums',
      b: 'price'
    }),
    ...mapState('userinfo', ['firstName', 'lastName']),
    ...mapGetters(['total']),
    ...mapGetters('userinfo', ['fullName'])
  },
  methods: {
    add () {
      let nums = this.a
      nums++
      this.setNums(nums)
    },
    // ...mapMutations({// 三个点的一般放在最后
    //   setNums: 'setNums'
    // }),
    ...mapMutations({
      // ...是指延展操作符
      setNums: type.SET_NUMS,
      setprice: type.SET_PRICE
    }),
    ...mapActions(['changeNumAndPrice']),
    ...mapActions('userinfo', ['getName'])

  },
  created () {
    this.getName()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
