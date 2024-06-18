import axios from 'axios';
export default (await import('vue')).defineComponent({
    name: 'ProductList',
    data() {
        return {
            products: []
        };
    },
    mounted() {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
            this.products = response.data;
        })
            .catch(error => {
            console.error('Erro ao fazer requisição:', error);
        });
    }
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((product.id)), });
        (product.name);
        (product.price);
        // @ts-ignore
        [products,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'ProductList';
    let __VLS_internalComponent;
}
//# sourceMappingURL=ProductList.vue.js.map