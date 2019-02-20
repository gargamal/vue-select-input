Vue.component('vue-select-input', {
    inheritAttrs: false,
    props: ['label', 'value', 'className', 'items', 'readonly'],
    template: `
        <div v-bind:class="className">
            <label>{{ label }}</label>
            <select v-if="!readonly" class="form-control" v-bind="$attrs" v-model="selected">
                <option :value="null" disabled>– select one –</option>
                <option :value="item" v-for="item in items"  @click="onChange(item)">{{ item.label }}</option>
            </select>
            <input v-else-if="value == null" class="form-control" readonly value="">
            <input v-else class="form-control" readonly v-bind:value="value.label">
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
