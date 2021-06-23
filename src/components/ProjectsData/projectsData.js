const projects = [
      {
        id: 1,
        name: 'Main stuff',
        description: 'Here are a few tasks that should be completed this month',
        tasks: [
          {
            id: 1,
            name: 'Домашние задания',
            desc: 'Доделать все задания по учебе до дедлайнов',
            status: false,
          },
          {
            id: 2,
            name: 'Бот',
            desc: 'Закончить модуль создания аккаунтов в боте',
            status: false,
          },
          {
            id: 3,
            name: 'Магазин',
            desc: 'Зайти в магазин за продуктами',
            status: true,
          },
          {
            id: 4,
            name: 'Экзамен',
            desc: 'Сдать экзамен по стратегическому менеджменту',
            status: false,
          },
          {
            id: 5,
            name: 'Практика',
            desc: 'Подать заявление на практику',
            status: true,
          }
        ]
      },
      { 
        id: 2,
        name: 'Work',
        description: 'Here are the university tasks must be done immediately',
        tasks: [
          {
            id: 6,
            name: 'Write documentation',
            description: '',
            completed: false
          },
          {
            id: 7,
            name: 'Set up dedlines',
            description: '',
            completed: false
          },
          {
            id: 8,
            name: 'Get an accistant',
            description: "",
            completed: true
          }
        ]
      }
  ]

  export default projects