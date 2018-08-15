/**
 * This view is an example list of people.
 */
Ext.define('TasksApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    selType: 'checkboxmodel',

    publishes: 'selModel',
    reference: 'tasksGrid',

    requires: [
        'TasksApp.store.Tasks'
    ],

    bind: {
        selection: '{theTask}'
    },

    title: 'Tasks dashboard',

    store: {
        type: 'tasks'
    },
    session: true,
    columnWidth: 0.7,
    margin: '40 20',
    layout: 'anchor',

    tbar:{
        items:[{
            xtype: 'textfield',
            fieldLabel: 'New task name:',
            margin: '0 0 0 0',
            allowBlank: false,
            minLength: 1,
            maxLength: 255,
            name: 'name'
        },{
            xtype:'button',
            text:'Add',
            iconCls: 'x-fa fa-plus-square greenIcon',
            listeners:{
                click:'onAddNewTask'
            }
        },{
            xtype:'button',
            text:'Remove',
            width: 100,
            iconCls: 'x-fa fa-minus-circle redIcon',
            bind: {
                disabled: '{!isSelectedFewTasks}'
            },
            listeners:{
                click:'onRemoveTask'
            }
        },{
            xtype:'button',
            text:'Run',
            margin: '0 0 0 15',
            width: 100,
            iconCls: 'x-fa fa-play-circle blueIcon',
            bind: {
                disabled: '{!isExistStoppedTasks}'
            },
            listeners:{
                click:'onStartTasks'
            }
        }, {
            xtype:'button',
            text:'Stop',
            width: 100,
            iconCls: 'x-fa fa-stop',
            bind: {
                disabled: '{!isExistStartedTasks}'
            },
            listeners:{
                click:'onStopTasks'
            }
        }]
    },

    columns: [
        {
            text: 'id',
            dataIndex: 'id',

            width: 30,
            sortabl: true
        },
        {
            text: 'Name',
            dataIndex: 'name',

            flex: 1,
            sortabl: true
        }, {
            text: 'Start date',
            dataIndex: 'startDate',
            formatter: 'date("m-d-Y g:i A")',

            flex: 2,
            sortable: true
        }, {
            text: 'End Date',
            dataIndex: 'endDate',
            formatter: 'date("m-d-Y g:i A")',

            flex: 2,
            sortable: true,
            // renderer: 'renderChange'
        },
        {
            text: 'Status',
            dataIndex: 'status',

            flex: 2,
            sortable: true,
            // renderer: 'renderChange'
        }
    ],
});
