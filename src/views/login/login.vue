<template>
    <div class="login">
        <h1 @click="login">登陆页1</h1>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const login = () => {
    const params = {
        name: 'jin',
        password: '1111'
    }
    axios.post('http://47.103.67.54/api/login', params).then(res => {
        console.log(res);
    })
}
</script>

<style lang="less" scoped>
</style>
