<template>
    <section class="zy-view">
        
            
                <ZyViewRow>
                    <ZyViewItem label="工具名称">{{viewData.title}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="工具图标">{{viewData.icon}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="工具简介">{{viewData.abstract}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="类型">{{viewData.category}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="标签">{{viewData.tag}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="工具地址">{{viewData.url}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="预留1">{{viewData.blank1}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="预留2">{{viewData.blank2}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="预留3">{{viewData.blank3}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="预留4">{{viewData.blank4}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="预留5">{{viewData.blank5}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="状态">{{viewData.status}}</ZyViewItem>
                </ZyViewRow>
            
            
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="createdAt">{{viewData.createdAt}}</ZyViewItem>
                </ZyViewRow>
            
            
            
                <ZyViewRow>
                    <ZyViewItem label="updatedAt">{{viewData.updatedAt}}</ZyViewItem>
                </ZyViewRow>
            
            
    </section>
</template>

<script setup>
    import ZyViewRow from "comps/common/ZyViewRow.vue";
    import ZyViewItem from "comps/common/ZyViewItem.vue";

    const props = defineProps({
        viewData: {
            type: Object,
            default: () => {
            }
        }
    })
    const emit = defineEmits(['close'])

</script>

<style lang="scss" scoped>

</style>
