import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Switch,
  Tooltip
} from 'element-ui'
import { MessageBox } from 'element-ui'
import { Message } from 'element-ui'
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}

Vue.use(Message)
Vue.prototype.$confirm = MessageBox.confirm

Vue.use(Button)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Container)
  .use(Aside)
  .use(Header)
  .use(Main)
  .use(Menu)
  .use(MenuItemGroup)
  .use(Submenu)
  .use(MenuItem)
  .use(Col)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Table)
  .use(TableColumn)
  .use(Switch)
  .use(Tooltip)
