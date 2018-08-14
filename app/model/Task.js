Ext.define('TasksApp.model.Task', {
  extend: 'Ext.data.Model',
  identifier: 'sequential',
  idProperty	: 'id',
  fields: [
    {
      name: 'id',
      type: 'int'
    },
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'startDate',
      type: 'date'
    },
    {
      name: 'endDate',
      type: 'date'
    },
    {
      name: 'status',
      type: 'string',
      defaultValue: 'STOPPED'
    }
  ],

  validators: {
    name: {
      type: 'length',
      min: 1,
      max: 255
    },
    status: {
      type: 'inclusion',
      list: ['RUNNING', 'STOPPED']
    }
  }
});
