
Ext.define('TasksApp.view.main.FieldSet',{
    extend: 'Ext.form.FieldSet',

    xtype: 'tasksfieldset',
    reference: 'tasksfields',
    title:'Edit task:',

    columnWidth: 0.3,
    margin: '20 20',
    defaultType: 'textfield',
    defaults: {anchor: '100%'},
    layout: 'anchor',
    modelValidation: true,

    items: [{
        fieldLabel: 'ID',
        disabled: true,
        bind: '{theTask.id}'
    },{
        fieldLabel: 'Name',
        bind: '{theTask.name}'
    },{
        xtype: 'datefield',
        fieldLabel: 'Start Date',
        bind: '{theTask.startDate}',
        listeners: {
            select: 'checkDateInterval'
        }
    }, {
        xtype: 'datefield',
        fieldLabel: 'End Date',
        reference: 'endDate',
        bind: {
            value: '{theTask.endDate}',
            minValue: '{theTask.startDate}'
        }
    },
    {
        xtype: 'container',
        layout: 'hbox',
        margin: '0 0 10 0',
        defaultType: 'button',
        items: [{
            text: 'Submit',
            handler: 'onSubmit'
        }, {
            text: 'Cancel',
            margin: '0 0 0 10',
            style:'background-color:red',
            handler: 'onCancel'
        }]
    },
]
});
