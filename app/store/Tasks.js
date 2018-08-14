Ext.define('TasksApp.store.Tasks', {
    extend: 'Ext.data.Store',

    alias: 'store.tasks',
    autoLoad: true,

    requires : [
        'TasksApp.model.Task'
    ],

    model : 'TasksApp.model.Task',

    fields: [
        'name', 'startDate', 'endDate', 'status'
    ],

    data: {
        items: [
            {
                id: 1,
                name: 'Hello, ExtJs',
                startDate: new Date("2018-04-10T14:48:00"),
                endDate: new Date("2018-05-10T18:48:00"),
                status: 'STOPPED'
            },
            {
                id: 2,
                name: 'Do something',
                startDate: new Date("2018-06-10T14:48:00"),
                endDate: new Date("2018-07-10T18:48:00"),
                status: 'STOPPED'
            },{
                id: 3,
                name: 'Do something else',
                startDate: new Date("2018-07-10T14:48:00"),
                endDate: new Date("2018-08-10T18:48:00"),
                status: 'STOPPED'
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
