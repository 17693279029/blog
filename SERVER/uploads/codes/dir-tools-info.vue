<template>
    <section>
        <ZySearchForm
                :formValue="state.query.params"
                @submit="goPage"
                @reset="handleReset"
        >
            
                
                    <a-form-item name="title">
                        <a-input v-model:value="state.query.params.title" allowClear
                                 placeholder="请输入工具名称" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="icon">
                        <a-input v-model:value="state.query.params.icon" allowClear
                                 placeholder="请输入工具图标" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="abstract">
                        <a-input v-model:value="state.query.params.abstract" allowClear
                                 placeholder="请输入工具简介" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="category">
                        <a-input v-model:value="state.query.params.category" allowClear
                                 placeholder="请输入类型" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="tag">
                        <a-input v-model:value="state.query.params.tag" allowClear
                                 placeholder="请输入标签" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="url">
                        <a-input v-model:value="state.query.params.url" allowClear
                                 placeholder="请输入工具地址" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="blank1">
                        <a-input v-model:value="state.query.params.blank1" allowClear
                                 placeholder="请输入预留1" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="blank2">
                        <a-input v-model:value="state.query.params.blank2" allowClear
                                 placeholder="请输入预留2" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="blank3">
                        <a-input v-model:value="state.query.params.blank3" allowClear
                                 placeholder="请输入预留3" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="blank4">
                        <a-input v-model:value="state.query.params.blank4" allowClear
                                 placeholder="请输入预留4" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="blank5">
                        <a-input v-model:value="state.query.params.blank5" allowClear
                                 placeholder="请输入预留5" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
                    <a-form-item name="status">
                        <a-input v-model:value="state.query.params.status" allowClear
                                 placeholder="请输入状态" @pressEnter="goPage"
                                 autocomplete="off"/>
                    </a-form-item>
                
            
                
            
                
            
                
            
        </ZySearchForm>
        <ZyFittleRow @add="goEdit"
                     addAuth="blog:tools:create"
                     :showDelete="false"/>
        <a-table
                bordered
                :resizable="true"
                :loading="state.loading"
                :columns="columns"
                :row-key="record => record._id"
                :pagination="state.query.pagination"
                @change="handleTableChange"
                :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
                :data-source="state.dataList">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'avatar'">
                    <a-image
                            :width="40"
                            :src="record.avatar"
                    />
                </template>
                <template v-else-if="column.key === 'action'">
                    <ZyToolButton
                            viewAuth="blog:tools:list"
                            editAuth="blog:tools:update"
                            deleteAuth="blog:tools:delete"
                            @view="goView(record)"
                            @edit="goEdit(record)"
                            @delete="goDelete(record)"
                    >
                    </ZyToolButton>
                </template>
            </template>

        </a-table>
        <ZyModal :minWidth="650" :show="state.show.edit" :title="state.editTitle" key="GetToolsInfo"
                 @close="close">
            <GetToolsInfo :updateData="state.updateData" @close="close"/>
        </ZyModal>
        <ZyModal :minWidth="650" :show="state.show.view" title="查看工具测试" key="ViewToolsInfo"
                 @close="close">
            <ViewToolsInfo :viewData="state.viewData" @close="close"/>
        </ZyModal>
    </section>

</template>

<script setup>
    /***工具测试管理 生成：2024/11/16 16:16:14***/
    /**
     * 操作权限：
      'blog:tools:list'
      'blog:tools:create'
      'blog:tools:update'
      'blog:tools:delete'
     */

    import {reactive, toRaw} from 'vue'
    import GetToolsInfo from "./get-tools-info.vue";
    import ViewToolsInfo from "./view-tools-info.vue";

    import ZyModal from "comps/common/ZyModal.vue";
    import ZyToolButton from "comps/common/ZyToolButton.vue";
    import ZyFittleRow from "comps/common/ZyFittleRow.vue";
    import ZySearchForm from "comps/common/ZySearchForm.vue";

    import {ZyConfirm, ZyNotification} from "libs/util.toast";
    import {isEmptyObject} from "libs/util.common";
    import {TimeUtils} from "libs/util.time";
    import {hasPerms} from 'libs/util.common';

    import {toolsDelete, toolsList} from "api/modules/api.tools";

    const columns = [
        
        
        {title: "工具名称", dataIndex: "title", key: "title", align: 'center'},
        
        
        
        {title: "工具图标", dataIndex: "icon", key: "icon", align: 'center'},
        
        
        
        {title: "工具简介", dataIndex: "abstract", key: "abstract", align: 'center'},
        
        
        
        {title: "类型", dataIndex: "category", key: "category", align: 'center'},
        
        
        
        {title: "标签", dataIndex: "tag", key: "tag", align: 'center'},
        
        
        
        {title: "工具地址", dataIndex: "url", key: "url", align: 'center'},
        
        
        
        {title: "预留1", dataIndex: "blank1", key: "blank1", align: 'center'},
        
        
        
        {title: "预留2", dataIndex: "blank2", key: "blank2", align: 'center'},
        
        
        
        {title: "预留3", dataIndex: "blank3", key: "blank3", align: 'center'},
        
        
        
        {title: "预留4", dataIndex: "blank4", key: "blank4", align: 'center'},
        
        
        
        {title: "预留5", dataIndex: "blank5", key: "blank5", align: 'center'},
        
        
        
        {title: "状态", dataIndex: "status", key: "status", align: 'center'},
        
        
        
        
        
        
        
        
        {title: '操作', width: 225, key: 'action', align: 'center', fixed: 'right'}
    ];

    const state = reactive({
        show: {
            add: false,
            edit: false,
            view: false
        },
        editTitle: '编辑',
        activeComponent: null,
        // 暂存更新数据
        updateData: {},
        resetData: {},
        // 暂存查看数据
        viewData: {},
        // 请求参数
        query: {
            params: {},
            pagination: {
                current: 1,
                pageSize: 10,
                total: 0,
                hideOnSinglePage: true,
            },
            sort: {
                columnKey: "createdAt",
                order: "descend" //降序（新的在前面）
            }
        },
        dataList: [],
        // loading
        loading: {
            spinning: false,
            tip: '加载中'
        }
    })

    // 查询
    const goPage = (num = 1) => {
        state.query.pagination.current = num;
        getDataList()
    }
    // 重置查询条件
    const handleReset = () => {
        goPage()
    }
    // 分页
    const pageChange = ({current, pageSize}) => {
        // 更新当前页码和每页条数
        state.query.pagination = reactive({
            current: current,
            pageSize: pageSize,
        });
        getDataList()
    }
    // 排序
    const sorterChange = ({columnKey, order}) => {
        // 更新排序
        state.query.sort = reactive({
            current: columnKey,
            order: order,
        });
        getDataList()
    }

    // 加载数据
    const getDataList = () => {
        state.loading.spinning = true
        // 将响应式query返回起原始对象
        let p = toRaw(state.query)
        toolsList(p).then(res => {
            state.loading.spinning = false
            let datas = res.data.result
            for (const data of datas) {
                data.createdAt = TimeUtils.formatTime(data.createdAt)
                data.updatedAt = TimeUtils.formatTime(data.updatedAt)
            }
            state.dataList = datas
            state.query.pagination.total = res.data.total
            state.query.pagination.current = res.data.current
            state.query.pagination.pageSize = res.data.pageSize
        }).catch(err => {
            state.loading.spinning = false
            console.log(err)
        })

    }

    // 处理表格变化事件
    const handleTableChange = (paginationValue, filters, sorter) => {
        if (!isEmptyObject(paginationValue)) {
            pageChange(paginationValue)
        }
        if (!isEmptyObject(sorter)) {
            sorterChange(sorter)
        }
    };




    const goView = (row) => {
        state.show.view = true
        state.viewData = row
    }


    const goEdit = (row) => {
        state.show.edit = true
        row && row._id ? state.editTitle = '修改工具测试' : state.editTitle = '添加工具测试'
        state.updateData = row
    }

    const goDelete = (row) => {
        ZyConfirm('确认删除该条数据?').then(ok => {
            ok && toolsDelete(row).then(res => {
                ZyNotification.success('删除成功')
                goPage()
            })
        })
    }
    // 重置密码
    const resetPassword = (data) => {
        state.resetData = data || {}
        state.show.reset = true
    }
    const close = (isSave) => {
        state.show.reset = false
        state.show.view = false
        state.show.edit = false
        isSave && goPage()
    }

    goPage()

</script>

<style scoped>

</style>
