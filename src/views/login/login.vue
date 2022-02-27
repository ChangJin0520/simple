<template>
    <div class="login">
        <h1 @click="login">登陆页</h1>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const login = () => {
    axios.post('http://47.103.67.54:3000/api/login', (res) => {
        console.log(res);
    })
}
</script>

<style lang="less" scoped>
</style>
