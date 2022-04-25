<template>
    <div class="box">

        <div class="box-user">
            <h2>电商后台管理</h2>
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" type="password"></el-input>
                </el-form-item>
            </el-form>
            <el-form class="btn">
                <el-button type="primary" @click="dl">登录</el-button>
                <el-button>重置</el-button>
            </el-form>

        </div>
    </div>
</template>
<script>
import { LoginApi } from '@/http/api'
export default {
    name: 'login',
    data() {
        return {
            ruleForm: {
                username: 'admin',
                password: '123456'
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
                ]
            },
        }

    },
    methods: {

        dl() {
            console.log('login')
            this.$refs.ruleForm.validate(async (valid) => {
                if (!valid) return false
                const res = await LoginApi(this.ruleForm)
                this.$router.push('/home')
            });

        }
    },


}
</script>
<style lang="scss">
.box {
    background-color: #2a4c6b;
    width: 100%;
    height: 100%;
    position: relative;


    .box-user {
        text-align: center;
        padding: 0 50px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 500px;
        height: 300px;
        background-color: #fff;

        .btn {
            display: flex;
            justify-content: flex-end
        }
    }
}
</style>