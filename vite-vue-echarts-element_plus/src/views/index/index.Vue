


<script setup lang="jsx">


import { Vue, Component } from 'vue-property-decorator';

@Component
export default class index extends Vue {
  const id = ref(1)
  const name = ref("hello") // 实际为:ref({value:1})
  const order = reactive({value:2})
  const test = 555 // 非响应

function change(){
  id.value ++ ; // 后面需要加.value
}
}

import {reactive,ref} from 'vue'
// reactive,ref里的数据为双向绑定



</script>

<template>
  <div>
    {{ id }} -- 首页
    <!-- {{ order.value }} -->
  </div>
</template>