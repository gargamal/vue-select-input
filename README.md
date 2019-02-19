# vue-select-input
Compasant vue pour avoir un text-edit si il est en readonly et un select/option sinon

Vue.component('vue-select-input', {
    inheritAttrs: false,
    props: ['label', 'value', 'itemReadonly', 'className', 'items', 'readonly'],
    template: `
        <div v-bind:class="className">
            <label>{{ label }}</label>
            <select v-if="!readonly" class="form-control" v-bind="$attrs" v-model="selected">
                <option :value="null" disabled>– {{ $t("labels.common_select") }} –</option>
                <option :value="item" v-for="item in items"  @click="onChange(item)">{{ item.label }}</option>
            </select>
            <input v-else class="form-control" readonly v-bind:value="itemReadonly">
        </div>
    `,
    computed: {
        selected() {
            return this.value
        }
    },
    methods: {
        onChange(value) {
            this.$emit('input', value);
        },
    },
});
