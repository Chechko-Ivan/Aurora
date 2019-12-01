export default (context) => {
  return new Promise(function(resolve) {
    resolve({
      navbar: {
        links: {
          index: 'Главная страница',
          products: 'Продукция',
          partners: 'Партнерам',
          suppliers: 'Поставщикам',
          contacts: 'Контакты',
          about: 'О компании',
          jobs: 'Работа в Аврорапласт',
          component_parts: 'Комплектующие на заказ'
        },
        burger: {
          close_text: 'Узнать больше о компании',
          open_text: 'Закрыть меню «о компании»'
        },
        locales: {
          ru: 'рус',
          en: 'eng'
        },
        search_bar: {
          input_placeholder: 'Что будем искать?'
        }
      },
      products: [
        {
          link: 'sandwich_panel',
          title: 'Сэндвич панели ПВХ',
          summary: {
            summaryImage: 'PVCSandwichPanel.png',
            summaryText: '',
            summaryList: [
              'Предназначены для устройства оконных откосов.',
              'Заполнения неостекленных фрагментов дверных полотен, алюминиевых перегородок.',
              'Оформление балконных и подсобных помещений.',
              'Возведение небольших помещений, выставочных площадей.'
            ]
          },
          detail: {
            images: ['PVCSandwichPanel.png', 'PVCSandwichPanel2.png'],
            description: [
              'Панели поливинилхлоридные трехслойные с утеплителем (далее сэндвич-панель), выпускаемые по ТУ BY790279469.651-2011, представляют конструкцию из двух жестких листов ПВХ, лицевой слой которого защищен полиэтиленовой пленкой, между которыми находится утеплитель -  экструдированный пенополистирол.'
            ],
            advantages: [
              'Эстетичный внешний вид',
              'Легкость транспортировки',
              'Высокие показатели теплоизоляции',
              'Длительный эксплуатационный срок',
              'Быстрота монтажа'
            ],
            applying: {
              title: 'Область применения',
              items: [
                'Предназначены для устройства оконных откосов.',
                'Оформление балконных и подсобных помещений.',
                'Заполнения неостекленных (глухих) фрагментов дверных полотен, алюминиевых перегородок.',
                'Возведение небольших помещений, выставочных площадей.',
                'Для изготовления термокоробов.',
                'Изготовление рекламных щитов и вывесок.'
              ]
            },
            characteristics: [
              'Толщина листа для лицевой поверхности 0,4-1,4 мм',
              'Толщина сэндвич панелей 16-100 мм',
              'Размер панелей 1500*3000, 2000*3000'
            ]
          }
        },
        {
          link: 'pvc_sheet',
          title: 'Лист ПВХ',
          summary: {
            summaryImage: 'PVCSheet.png',
            summaryText: '',
            summaryList: [
              'Изготовление сэндвич-панелей из ПВХ.',
              'Изготовление рекламных щитов и вывесок.',
              'Внутренняя облицовка стен.'
            ]
          },
          detail: {
            images: ['PVCSandwichPanel.png', 'PVCSandwichPanel2.png'],
            description: [
              'Панели поливинилхлоридные трехслойные с утеплителем (далее сэндвич-панель), выпускаемые по ТУ BY790279469.651-2011, представляют конструкцию из двух жестких листов ПВХ, лицевой слой которого защищен полиэтиленовой пленкой, между которыми находится утеплитель -  экструдированный пенополистирол.'
            ],
            advantages: [
              'Эстетичный внешний вид',
              'Легкость транспортировки',
              'Высокие показатели теплоизоляции',
              'Длительный эксплуатационный срок',
              'Быстрота монтажа'
            ],
            applying: {
              title: 'Область применения',
              items: [
                'Предназначены для устройства оконных откосов.',
                'Оформление балконных и подсобных помещений.',
                'Заполнения неостекленных (глухих) фрагментов дверных полотен, алюминиевых перегородок.',
                'Возведение небольших помещений, выставочных площадей.',
                'Для изготовления термокоробов.',
                'Изготовление рекламных щитов и вывесок.'
              ]
            },
            characteristics: [
              'Толщина листа для лицевой поверхности 0,4-1,4 мм',
              'Толщина сэндвич панелей 16-100 мм',
              'Размер панелей 1500*3000, 2000*3000'
            ]
          }
        },
        {
          link: 'pvc_window_sill',
          title: 'Подоконник ПВХ',
          summary: {
            summaryImage: 'Windowsill.png',
            summaryText:
              'Является неотъемлемой частью окна, помогает создать комфортную атмосферу внутри помещения.',
            summaryList: []
          },
          detail: {
            images: ['PVCSandwichPanel.png', 'PVCSandwichPanel2.png'],
            description: [
              'Панели поливинилхлоридные трехслойные с утеплителем (далее сэндвич-панель), выпускаемые по ТУ BY790279469.651-2011, представляют конструкцию из двух жестких листов ПВХ, лицевой слой которого защищен полиэтиленовой пленкой, между которыми находится утеплитель -  экструдированный пенополистирол.'
            ],
            advantages: [
              'Эстетичный внешний вид',
              'Легкость транспортировки',
              'Высокие показатели теплоизоляции',
              'Длительный эксплуатационный срок',
              'Быстрота монтажа'
            ],
            applying: {
              title: 'Область применения',
              items: [
                'Предназначены для устройства оконных откосов.',
                'Оформление балконных и подсобных помещений.',
                'Заполнения неостекленных (глухих) фрагментов дверных полотен, алюминиевых перегородок.',
                'Возведение небольших помещений, выставочных площадей.',
                'Для изготовления термокоробов.',
                'Изготовление рекламных щитов и вывесок.'
              ]
            },
            characteristics: [
              'Толщина листа для лицевой поверхности 0,4-1,4 мм',
              'Толщина сэндвич панелей 16-100 мм',
              'Размер панелей 1500*3000, 2000*3000'
            ]
          }
        },
        {
          link: 'stand_profile',
          title: 'Подставочный профиль',
          summary: {
            summaryImage: 'StandProfile.png',
            summaryText: 'Используется при установке окон ПВХ и обеспечивает:',
            summaryList: [
              'Ровность и устойчивость конструкции.',
              'Поддержку ПВХ системы.',
              'Долговечность ПВХ конструкции.'
            ]
          },
          detail: {
            images: ['PVCSandwichPanel.png', 'PVCSandwichPanel2.png'],
            description: [
              'Панели поливинилхлоридные трехслойные с утеплителем (далее сэндвич-панель), выпускаемые по ТУ BY790279469.651-2011, представляют конструкцию из двух жестких листов ПВХ, лицевой слой которого защищен полиэтиленовой пленкой, между которыми находится утеплитель -  экструдированный пенополистирол.'
            ],
            advantages: [
              'Эстетичный внешний вид',
              'Легкость транспортировки',
              'Высокие показатели теплоизоляции',
              'Длительный эксплуатационный срок',
              'Быстрота монтажа'
            ],
            applying: {
              title: 'Область применения',
              items: [
                'Предназначены для устройства оконных откосов.',
                'Оформление балконных и подсобных помещений.',
                'Заполнения неостекленных (глухих) фрагментов дверных полотен, алюминиевых перегородок.',
                'Возведение небольших помещений, выставочных площадей.',
                'Для изготовления термокоробов.',
                'Изготовление рекламных щитов и вывесок.'
              ]
            },
            characteristics: [
              'Толщина листа для лицевой поверхности 0,4-1,4 мм',
              'Толщина сэндвич панелей 16-100 мм',
              'Размер панелей 1500*3000, 2000*3000'
            ]
          }
        },
        {
          link: 'start_and_finish_profiles',
          title: 'Стартовый и финишный профили',
          summary: {
            summaryImage: 'StartFinishProfiles.png',
            summaryText:
              'Для монтажа панелей потребуются профили, чтобы результат процесса принес радость.',
            summaryList: []
          },
          detail: {
            images: ['PVCSandwichPanel.png', 'PVCSandwichPanel2.png'],
            description: [
              'Панели поливинилхлоридные трехслойные с утеплителем (далее сэндвич-панель), выпускаемые по ТУ BY790279469.651-2011, представляют конструкцию из двух жестких листов ПВХ, лицевой слой которого защищен полиэтиленовой пленкой, между которыми находится утеплитель -  экструдированный пенополистирол.'
            ],
            advantages: [
              'Эстетичный внешний вид',
              'Легкость транспортировки',
              'Высокие показатели теплоизоляции',
              'Длительный эксплуатационный срок',
              'Быстрота монтажа'
            ],
            applying: {
              title: 'Область применения',
              items: [
                'Предназначены для устройства оконных откосов.',
                'Оформление балконных и подсобных помещений.',
                'Заполнения неостекленных (глухих) фрагментов дверных полотен, алюминиевых перегородок.',
                'Возведение небольших помещений, выставочных площадей.',
                'Для изготовления термокоробов.',
                'Изготовление рекламных щитов и вывесок.'
              ]
            },
            characteristics: [
              'Толщина листа для лицевой поверхности 0,4-1,4 мм',
              'Толщина сэндвич панелей 16-100 мм',
              'Размер панелей 1500*3000, 2000*3000'
            ]
          }
        },
        {
          link: 'pvc_thermal_inserts',
          title: 'Термовставки ПВХ',
          summary: {
            summaryImage: 'PVCThermalInserts.png',
            summaryText:
              'Используются в алюминиевых профильных системах стоечно – ригельного фасада.',
            summaryList: []
          },
          detail: {
            images: ['PVCSandwichPanel.png', 'PVCSandwichPanel2.png'],
            description: [
              'Панели поливинилхлоридные трехслойные с утеплителем (далее сэндвич-панель), выпускаемые по ТУ BY790279469.651-2011, представляют конструкцию из двух жестких листов ПВХ, лицевой слой которого защищен полиэтиленовой пленкой, между которыми находится утеплитель -  экструдированный пенополистирол.'
            ],
            advantages: [
              'Эстетичный внешний вид',
              'Легкость транспортировки',
              'Высокие показатели теплоизоляции',
              'Длительный эксплуатационный срок',
              'Быстрота монтажа'
            ],
            applying: {
              title: 'Область применения',
              items: [
                'Предназначены для устройства оконных откосов.',
                'Оформление балконных и подсобных помещений.',
                'Заполнения неостекленных (глухих) фрагментов дверных полотен, алюминиевых перегородок.',
                'Возведение небольших помещений, выставочных площадей.',
                'Для изготовления термокоробов.',
                'Изготовление рекламных щитов и вывесок.'
              ]
            },
            characteristics: [
              'Толщина листа для лицевой поверхности 0,4-1,4 мм',
              'Толщина сэндвич панелей 16-100 мм',
              'Размер панелей 1500*3000, 2000*3000'
            ]
          }
        }
      ],
      p_home_advantages: [
        {
          title: 'Ламинационная пленка для подоконника',
          content: {
            title: 'Поставщикам',
            subtitle:
              'Чтобы обеспечить бесперебойную работу нашего предприятия, мы заинтересованы в сотрудничестве с поставщиками качественных товаров.',
            text:
              'На постоянной основе ведём закупку: защитной пленки для сэндвич панелей и подоконника, ламинационной пленки для подоконника, ПВХ-С, добавки для переработки ПВХ в широком ассортименте,микрокальциты,однослойный полиуретанновый клей для сэндвич панелей, рециклат.'
          }
        },
        {
          title: 'Защитная пленки для сэндвич панелей и подоконника',
          content: {
            title: 'Поставщикам',
            subtitle:
              'Чтобы обеспечить бесперебойную работу нашего предприятия, мы заинтересованы в сотрудничестве с поставщиками качественных товаров.',
            text:
              'На постоянной основе ведём закупку: защитной пленки для сэндвич панелей и подоконника, ламинационной пленки для подоконника, ПВХ-С, добавки для переработки ПВХ в широком ассортименте,микрокальциты,однослойный полиуретанновый клей для сэндвич панелей, рециклат.'
          }
        },
        {
          title: 'Добавки для переработки ПВХ',
          content: {
            title: 'Поставщикам',
            subtitle:
              'Чтобы обеспечить бесперебойную работу нашего предприятия, мы заинтересованы в сотрудничестве с поставщиками качественных товаров.',
            text:
              'На постоянной основе ведём закупку: защитной пленки для сэндвич панелей и подоконника, ламинационной пленки для подоконника, ПВХ-С, добавки для переработки ПВХ в широком ассортименте,микрокальциты,однослойный полиуретанновый клей для сэндвич панелей, рециклат.'
          }
        },
        {
          title: 'Однослойный полиуретановый клей',
          content: {
            title: 'Поставщикам',
            subtitle:
              'Чтобы обеспечить бесперебойную работу нашего предприятия, мы заинтересованы в сотрудничестве с поставщиками качественных товаров.',
            text:
              'На постоянной основе ведём закупку: защитной пленки для сэндвич панелей и подоконника, ламинационной пленки для подоконника, ПВХ-С, добавки для переработки ПВХ в широком ассортименте,микрокальциты,однослойный полиуретанновый клей для сэндвич панелей, рециклат.'
          }
        },
        {
          title: 'ПВХ-С',
          content: {
            title: 'Поставщикам',
            subtitle:
              'Чтобы обеспечить бесперебойную работу нашего предприятия, мы заинтересованы в сотрудничестве с поставщиками качественных товаров.',
            text:
              'На постоянной основе ведём закупку: защитной пленки для сэндвич панелей и подоконника, ламинационной пленки для подоконника, ПВХ-С, добавки для переработки ПВХ в широком ассортименте,микрокальциты,однослойный полиуретанновый клей для сэндвич панелей, рециклат.'
          }
        },
        {
          title: 'Микрокальциты',
          content: {
            title: 'Поставщикам',
            subtitle:
              'Чтобы обеспечить бесперебойную работу нашего предприятия, мы заинтересованы в сотрудничестве с поставщиками качественных товаров.',
            text:
              'На постоянной основе ведём закупку: защитной пленки для сэндвич панелей и подоконника, ламинационной пленки для подоконника, ПВХ-С, добавки для переработки ПВХ в широком ассортименте,микрокальциты,однослойный полиуретанновый клей для сэндвич панелей, рециклат.'
          }
        },
        {
          title: 'Рециклат',
          content: {
            title: 'Поставщикам',
            subtitle:
              'Чтобы обеспечить бесперебойную работу нашего предприятия, мы заинтересованы в сотрудничестве с поставщиками качественных товаров.',
            text:
              'На постоянной основе ведём закупку: защитной пленки для сэндвич панелей и подоконника, ламинационной пленки для подоконника, ПВХ-С, добавки для переработки ПВХ в широком ассортименте,микрокальциты,однослойный полиуретанновый клей для сэндвич панелей, рециклат.'
          }
        }
      ],
      p_partners: {
        title: 'Партнерам',
        advantages: {
          title: 'Почему Вам выгодно работать с Аврорапласт',
          1: 'Собственное производство изделий из ПВХ',
          2: 'Работаем по индивидуальным заказам любых объемов и сложности',
          3: 'Оперативно выполняем все заказы клиента',
          4: 'Партнерские цены',
          5: 'Выгодное сотрудничество',
          6: 'Программа лояльности клиентов'
        }
      }
    });
  });
};
