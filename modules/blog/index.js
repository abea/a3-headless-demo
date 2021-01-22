module.exports = {
  extend: '@apostrophecms/piece-type',
  fields: {
    add: {
      summary: {
        type: 'area',
        label: 'Summary',
        help: 'A short summary.',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [ 'Bold', 'Italic' ]
            }
          }
        }
      },
      main: {
        label: 'Content',
        type: 'area',
        options: {
          widgets: require('../../lib/area').basicConfig
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'visibility',
          'summary'
        ]
      },
      main: {
        label: 'Content',
        fields: [
          'main'
        ]
      }
    }
  }
};
