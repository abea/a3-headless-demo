module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      description: {
        type: 'string',
        label: 'Description',
        options: {
          textarea: true
        }
      },
      startDate: {
        type: 'date',
        label: 'Starting date'
      },
      endDate: {
        type: 'date',
        label: 'Ending date'
      },
      cost: {
        type: 'float',
        label: 'Cost (in USD)'
      },
      ageGroup: {
        type: 'select',
        choices: [
          {
            label: '6 to 9 year olds',
            value: '6to9'
          },
          {
            label: '10 to 12 year olds',
            value: '10to12'
          },
          {
            label: '13 to 15 year olds',
            value: '13to15'
          },
          {
            label: '16 to 18 year olds',
            value: '16to18'
          }
        ]
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'visibility',
          'startDate',
          'endDate',
          'ageGroup',
          'description'
        ]
      }
    }
  }
};
