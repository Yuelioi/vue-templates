


<script setup lang="jsx">

import {reactive,ref} from 'vue'
// reactive,ref里的数据为双向绑定

const id = ref(1)
const name = ref("hello")
const order = reactive({value:2})
const test = 555 // 非响应

function change(){
  id.value ++ ; // 后面需要加.value
}

</script>

<template>
  <div>
    {{ id }} -- 其他
  </div>
</template>