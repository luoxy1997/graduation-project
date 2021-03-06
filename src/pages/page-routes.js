// 此文件是通过脚本生成的，直接编辑无效！！！

// 不需要导航框架的页面路径
export const noFrames = [
    '/1231',
];

// 不需要登录就可以访问的页面路径
export const noAuths = [
    '/1231',
];

// 需要keep alive 页面
export const keepAlives = [
    {
        path: '/iframe_page_/:src',
        keepAlive: true,
    },
    {
        path: '/1231',
        keepAlive: false,
    },
    {
        path: '/users/_/UserEdit/:id',
        keepAlive: true,
    },
];

// 页面路由配置
export default [
    {
        path: '/home2',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/EditableCell.jsx'),
    },
    {
        path: '/home3',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/EditableTable.jsx'),
    },
    {
        path: '/classInfo',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/classIntroduce/Course_info.jsx'),
    },
    {
        path: '/confirmGoods',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/confirmGoods/ConfirmGoods.jsx'),
    },
    {
        path: '/payCarts',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/confirmGoods/PayCarts.jsx'),
    },
    {
        path: '/iframe_page_/:src',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/iframe/index.jsx'),
    },
    {
        path: '/',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/home/Home.jsx'),
    },
    {
        path: '/1231',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/login/index.jsx'),
    },
    {
        path: '/mall',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/mall/mall.jsx'),
    },
    {
        path: '/search',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/mall/search.jsx'),
    },
    {
        path: '/kind',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/mall/searchKind.jsx'),
    },
    {
        path: '/kindType',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/mall/searchKind2.jsx'),
    },
    {
        path: '/menu-permission',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/menu-permission/index.jsx'),
    },
    {
        path: '/Personal',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/personalItem/Personal.jsx'),
    },
    {
        path: '/roles',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/roles/index.jsx'),
    },
    {
        path: '/settings',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/setting/index.jsx'),
    },
    {
        path: '/user-center',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/user-center/UserCenterList.jsx'),
    },
    {
        path: '/users/_/UserEdit/:id',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/users/UserEdit.jsx'),
    },
    {
        path: '/users',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/users/index.jsx'),
    },
    {
        path: '/example/ajax',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/ajax/index.jsx'),
    },
    {
        path: '/admin-crud',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/generator/admin-crud/AdminCrud.jsx'),
    },
    {
        path: '/example/antd/async-select',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/async-select/index.jsx'),
    },
    {
        path: '/example/antd/form-element',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/form-element/index.jsx'),
    },
    {
        path: '/example/antd/pagination',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/pagination/index.jsx'),
    },
    {
        path: '/example/antd/operator',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/operator/index.jsx'),
    },
    {
        path: '/example/antd/query-bar',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/query-bar/index.jsx'),
    },
    {
        path: '/example/antd/query-item',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/query-item/index.jsx'),
    },
    {
        path: '/example/antd/table-editable',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/table-editable/index.jsx'),
    },
    {
        path: '/example/antd/table-row-draggable',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/table-row-draggable/index.jsx'),
    },
    {
        path: '/example/antd/tool-bar',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/tool-bar/index.jsx'),
    },
    {
        path: '/example/antd/user-avatar',
        component: () => import('/Users/luoxy/workSpace/graduation-project/src/pages/examples/antd/user-avatar/index.jsx'),
    },
];
