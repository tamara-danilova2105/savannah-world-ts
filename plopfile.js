module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Создать React-компонент (FSD)',
    prompts: [
      {
        type: 'list',
        name: 'layer',
        message: 'Слой:',
        choices: [
          { name: 'entities', value: 'entities' },
          { name: 'features', value: 'features'  },
          { name: 'widgets',  value: 'widgets'   },
          { name: 'shared',   value: 'shared'    },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Имя компонента (PascalCase):',
        validate: (v) => (v && v.trim() ? true : 'Нужно имя'),
      },
    ],
    actions: () => [
      {
        type: 'addMany',
        base: 'plop-templates/component',
        templateFiles: 'plop-templates/component/**/*',
        destination: 'src/{{layer}}/{{pascalCase name}}',
        force: true,
      },
    ],
  });
};





