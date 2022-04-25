<template>
  <div class="users">
    <div>
      <el-input
        placeholder="请输入内容"
        v-model="input5"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" class="bttn" @click="adduser">添加用户</el-button>
    </div>
    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column property="username" label="姓名" width="120">
      </el-table-column>
      <el-table-column property="email" label="邮箱" width="120">
      </el-table-column>
      <el-table-column property="create_time" label="电话" width="120">
      </el-table-column>
      <el-table-column property="role_name" label="角色" width="120">
      </el-table-column>
      <el-table-column property="mg_state" label="状态" width="120">
        <template slot-scope="scope">
          <div>
            <el-switch
              @change="status(scope.row.id, scope.row.mg_state)"
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </div>
        </template>
      </el-table-column>


      <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <div>
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
                @click="update(scope.row)"
              ></el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
                @click="del(scope.row.id)"
              ></el-button>
              <el-tooltip
                class="item"
                effect="dark"
                content="分配权限"
                placement="top"
              >
                <el-button
                  type="warning"
                  icon="el-icon-setting"
                  size="mini"
                  @click="allot(scope.row)"
                ></el-button>
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { aaaa } from '@/http/api'
export default {
  name: 'users',
  data() {
    return {
      input5: '',
      obj: {
        query: '',
        pagenum: 1,
        pagesize: 5
      },
      tableData: [],
      currentRow: null
    }
  },
  created() {
    this.aaaa()
  },
  methods: {
    async aaaa() {
      const res = await aaaa(this.obj)
      this.tableData = res.users
      console.log(res)
    },
    // 添加
    adduser(){

    }
  }
}
</script>
<style lang="scss">
.el-input-group {
  line-height: normal;
  display: inline-table;
  width: 55%;
  float: left;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 10px;
}

.bttn {
  margin-top: 10px;
  margin-right: 140px;
}
</style>
