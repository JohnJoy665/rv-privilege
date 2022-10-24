import privilegeDate from './../models';
const data: privilegeDate[] = [
  // {
  //   id: '',
  //   name: '',
  //   description: '',
  //   date_stop: '',
  //   category: '',
  //   term: '',
  //   img: '',
  //   docs: [
  //     { name: '', url: '' },
  //     { name: '', url: '' },
  //     { name: '', url: '' },
  //   ],
  //   contacts: [
  //     { fio: '', number: '', email: '' },
  //     { fio: '', number: '', email: '' },
  //     { fio: '', number: '', email: '' },
  //   ],
  //   turn_on: true
  // },
  {
    id: '1',
    name: 'Rendez-Vous',
    description: 'Сеть магазинов обуви, сумок и аксессуаров',
    date_stop: '',
    category: 'Rendez-Vous',
    term: 'На кассе сообщить, что вы сотрдник Rendez-Vous, назвать свой бейдж и номер телефона.',
    img: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    docs: [
      {name_doc: 'Скачать регламент', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf'},
      {name_doc: 'Скачать регламент', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf'}
    ],
    contacts: [],
    turn_on: true
  },{
    id: '2',
    name: 'Автомойка',
    description: 'Автомойка для сотрудников офиса',
    date_stop: '',
    category: 'Rendez-Vous',
    term: 'Бланк необходимо распечатать, заполнить и отнести на КПП рядом со шлагбаумом до 12:00. Все заявки поданные до 12:00 будут обработаны день в день, позднее - на следующий день. Стоимость автомойки вычитается из заработной платы автоматически',
    img: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    docs: [
      { name_doc: 'Скачать бланк', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf' },
    ],
    contacts: [
      { fio: 'Кирдянкина Лилия', number: '1234', email: 'L.Kirdyankina@rendez-vous.ru' },
    ],
    turn_on: true
  },{
    id: '3',
    name: 'X-Fit',
    description: 'Сеть фитнес клубов',
    date_stop: '31.12.2022',
    category: 'Спорт',
    term: 'Можно получить скидки при покупке двух и более карт. Обратитесь к персональному менеджеру Компании X-Fit Тимуру Максутову и скажите, что вы сотрудник компании Rendez-vous',
    img: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    docs: [
      { name_doc: 'Скачать презентацию X-Fit', url: '' },
      { name_doc: 'Скачать предложение', url: 'https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf' },
    ],
    contacts: [
      { fio: '', number: '89032030699', email: 'corpmanager13@xfit.ru' },
    ],
    turn_on: true
  },
]

export default data;
