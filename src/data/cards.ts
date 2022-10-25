import privilegeDate from '../interfaces/models';
const data: privilegeDate[] = [
  {
    id: '1',
    name: 'Rendez-Vous',
    description: 'Сеть магазинов обуви, сумок и аксессуаров',
    dateStop: '',
    category: 'Rendez-Vous',
    term: 'На кассе сообщить, что вы сотрдник Rendez-Vous, назвать свой бейдж и номер телефона.',
    img: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    docs: [
      {nameDoc: 'Скачать регламент', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf'},
      {nameDoc: 'Скачать регламент', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf'}
    ],
    contacts: [],
    turnOn: true
  },{
    id: '2',
    name: 'Автомойка',
    description: 'Автомойка для сотрудников офиса',
    dateStop: '',
    category: 'Rendez-Vous',
    term: 'Бланк необходимо распечатать, заполнить и отнести на КПП рядом со шлагбаумом до 12:00. Все заявки поданные до 12:00 будут обработаны день в день, позднее - на следующий день. Стоимость автомойки вычитается из заработной платы автоматически',
    img: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    docs: [
      { nameDoc: 'Скачать бланк', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf' },
    ],
    contacts: [
      { fio: 'Кирдянкина Лилия', number: '1234', email: 'L.Kirdyankina@rendez-vous.ru' },
    ],
    turnOn: true
  },{
    id: '3',
    name: 'X-Fit',
    description: 'Сеть фитнес клубов',
    dateStop: '31.12.2022',
    category: 'Спорт',
    term: 'Можно получить скидки при покупке двух и более карт. Обратитесь к персональному менеджеру Компании X-Fit Тимуру Максутову и скажите, что вы сотрудник компании Rendez-vous',
    img: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    docs: [
      { nameDoc: 'Скачать презентацию X-Fit', url: '' },
      { nameDoc: 'Скачать предложение', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf' },
    ],
    contacts: [
      { fio: '', number: '89032030699', email: 'corpmanager13@xfit.ru' },
    ],
    turnOn: true
  },{
    id: '4',
    name: 'тестовая карточка',
    description: 'Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание',
    dateStop: '31.12.2023',
    category: 'Тестовая категория очень длинная',
    term: 'Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)',
    img: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    docs: [
      { nameDoc: 'Скачать презентацию X-Fit', url: '' },
      { nameDoc: 'Скачать предложение', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf' },
    ],
    contacts: [
      { fio: '', number: '89032030699', email: 'corpmanager13@xfit.ru' },
    ],
    turnOn: true
  },{
    id: '5',
    name: 'тестовая карточка',
    description: 'Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание',
    dateStop: '31.12.2023',
    category: 'Rendez-Vous',
    term: 'Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)',
    img: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    docs: [
      { nameDoc: 'Скачать презентацию X-Fit', url: '' },
      { nameDoc: 'Скачать предложение', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf' },
    ],
    contacts: [
      { fio: '', number: '89032030699', email: 'corpmanager13@xfit.ru' },
    ],
    turnOn: true
  }
]

export default data;
