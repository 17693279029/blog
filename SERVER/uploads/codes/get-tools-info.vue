<template>
    <section class="zy-get">
        <a-form :model="state.form"
                class="zy-form"
                :label-col="labelCol"
                ref="formRef"
                :wrapper-col="wrapperCol">
            
                
                    <a-form-item label="工具名称"
                                 name="title"
                                 :rules="[{ required: true, message: '请输入工具名称!' }]">
                        <a-input v-model:value="state.form.title" allowClear placeholder="请输入工具名称"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="工具图标"
                                 name="icon"
                                 :rules="[{ required: true, message: '请输入工具图标!' }]">
                        <a-input v-model:value="state.form.icon" allowClear placeholder="请输入工具图标"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="工具简介"
                                 name="abstract"
                                 :rules="[{ required: true, message: '请输入工具简介!' }]">
                        <a-input v-model:value="state.form.abstract" allowClear placeholder="请输入工具简介"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="类型"
                                 name="category"
                                 :rules="[{ required: true, message: '请输入类型!' }]">
                        <a-input v-model:value="state.form.category" allowClear placeholder="请输入类型"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="标签"
                                 name="tag"
                                 :rules="[{ required: true, message: '请输入标签!' }]">
                        <a-input v-model:value="state.form.tag" allowClear placeholder="请输入标签"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="工具地址"
                                 name="url"
                                 :rules="[{ required: true, message: '请输入工具地址!' }]">
                        <a-input v-model:value="state.form.url" allowClear placeholder="请输入工具地址"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="预留1"
                                 name="blank1"
                                 :rules="[{ required: true, message: '请输入预留1!' }]">
                        <a-input v-model:value="state.form.blank1" allowClear placeholder="请输入预留1"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="预留2"
                                 name="blank2"
                                 :rules="[{ required: true, message: '请输入预留2!' }]">
                        <a-input v-model:value="state.form.blank2" allowClear placeholder="请输入预留2"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="预留3"
                                 name="blank3"
                                 :rules="[{ required: true, message: '请输入预留3!' }]">
                        <a-input v-model:value="state.form.blank3" allowClear placeholder="请输入预留3"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="预留4"
                                 name="blank4"
                                 :rules="[{ required: true, message: '请输入预留4!' }]">
                        <a-input v-model:value="state.form.blank4" allowClear placeholder="请输入预留4"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="预留5"
                                 name="blank5"
                                 :rules="[{ required: true, message: '请输入预留5!' }]">
                        <a-input v-model:value="state.form.blank5" allowClear placeholder="请输入预留5"/>
                    </a-form-item>
                
            
                
                    <a-form-item label="状态"
                                 name="status"
                                 :rules="[{ required: true, message: '请输入状态!' }]">
                        <a-input v-model:value="state.form.status" allowClear placeholder="请输入状态"/>
                    </a-form-item>
                
            
                
            
                
            
                
            
        </a-form>
        <ZyFormButton @save="onSubmit" @close="close"/>
    </section>
</template>

<script setup>
    import {reactive, toRaw, ref} from 'vue';
    import ZyFormButton from "comps/common/ZyFormButton.vue";
    import {ZyConfirm, ZyNotification} from "libs/util.toast";
    import {toolsCreate, toolsUpdate} from "api/modules/api.tools";

    const labelCol = {
        style: {
            width: '100px',
        },
    }
    const wrapperCol = {
        span: 14,
    }

    const state = reactive({
        form: {}
    });

    const props = defineProps({
        updateData: {
            type: Object,
            default: () => {
            }
        }
    })
    const emit = defineEmits(['close'])
    const formRef = ref();
    const isAdd = ref(!props.updateData) // 是否是添加
    if (!isAdd.value) {
        state.form = props.updateData || {}
    }


    const onSubmit = async () => {
        try {
            const values = await formRef.value.validateFields();
            if (!isAdd.value) {
                delete state.form.password
            }
            let FUC = isAdd.value ? toolsCreate : toolsUpdate
            FUC(toRaw(state.form)).then(res => {
                ZyNotification.success('操作成功')
                emit('close', true)
            }).catch(err => {
                ZyNotification.error(err || '操作失败')
            })
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }

    };

    const close = () => {
        ZyConfirm('还没保存数据，确认退出?').then(ok => {
            if (!ok) return
            emit('close')
        })
    }
</script>

<style scoped>

</style>
