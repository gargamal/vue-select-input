window.onload = function () {
    new Vue({
        data() {
            return {
                readOnly: true,
                items: [
                    {id: 1, label: 'choucroute'}, {id: 2, label: 'cassoulet'}, {id: 3, label: 'hachis parmentier'}, {id: 4, label: 'potaufeux'},
                ],
                itemSelected: null,
            }
        },
    }).$mount('#appFormVueSelectInput');
};