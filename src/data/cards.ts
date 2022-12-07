import {IprivilegeDatа} from "../interfaces/models";
const data: IprivilegeDatа[] = [
  // идентификатор привилегии
  // Название title
  // Короткое описание description
  // По какое число dateStop
  // категория category
  // Полное описание
  // картинка
  // прикрепленные документы
  // Контакты
  // показывать или нет
  {
    id: "1",
    name: "Rendez-Vous",
    description: "Сеть магазинов обуви, сумок и аксессуаров",
    dateStop: "",
    category: "Rendez-Vous",
    specification: "На кассе сообщить, что вы сотрдник Rendez-Vous, назвать свой бейдж и номер телефона.",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      {nameDoc: "Скачать регламент", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf"},
      {nameDoc: "Скачать регламент", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf"}
    ],
    contacts: [],
    turnOn: true
  },{
    id: "2",
    name: "Автомойка",
    description: "Автомойка для сотрудников офиса",
    dateStop: "",
    category: "Rendez-Vous",
    specification: "Бланк необходимо распечатать, заполнить и отнести на КПП рядом со шлагбаумом до 12:00. Все заявки поданные до 12:00 будут обработаны день в день, позднее - на следующий день. Стоимость автомойки вычитается из заработной платы автоматически",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [],
    contacts: [
      { fio: "Кирдянкина Лилия", number: "1234", email: "L.Kirdyankina@rendez-vous.ru" },
    ],
    turnOn: true
  },{
    id: "3",
    name: "X-Fit",
    description: "Сеть фитнес клубов",
    dateStop: "31.12.2022",
    category: "Спорт",
    specification: "Можно получить скидки при покупке двух и более карт. Обратитесь к персональному менеджеру Компании X-Fit Тимуру Максутову и скажите, что вы сотрудник компании Rendez-vous",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "Ольга Владимировна", number: "89032030699", email: "corpmanager13@xfit.ru" },
      { fio: "Ольга владимировна 2", number: "89032030699", email: "corpmanager13@xfit.ru" },
      { fio: "Ольга Владимировна 3", number: "89032030699", email: "corpmanager13@xfit.ru" },
      { fio: "Ольга Владимировна 4", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  },{
    id: "4",
    name: "тестовая карточка",
    description: "Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание",
    dateStop: "31.12.2023",
    category: "Тестовая категория очень длинная",
    specification: "Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  },{
    id: "5",
    name: "Довольно длинное тестовое название для проверки",
    description: "Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание",
    dateStop: "31.12.2023",
    category: "Rendez-Vous",
    specification: "Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  },{
    id: "6",
    name: "тестовая карточка",
    description: "Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание",
    dateStop: "31.12.2023",
    category: "Rendez-Vous",
    specification: "Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  },{
    id: "7",
    name: "тестовая карточка",
    description: "Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание",
    dateStop: "31.12.2023",
    category: "Rendez-Vous",
    specification: "Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  },{
    id: "8",
    name: "тестовая карточка",
    description: "Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание",
    dateStop: "31.12.2023",
    category: "Rendez-Vous",
    specification: "Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  },{
    id: "9",
    name: "тестовая карточка",
    description: "Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание",
    dateStop: "31.12.2023",
    category: "Rendez-Vous",
    specification: "Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  },{
    id: "10",
    name: "тестовая карточка",
    description: "Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание",
    dateStop: "31.12.2023",
    category: "Rendez-Vous",
    specification: "Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  },{
    id: "11",
    name: "тестовая карточка",
    description: "Здесь например очень много текста чтобы узнать сколько максимум его может быть. Всем спасибо за внимание",
    dateStop: "31.12.2023",
    category: "Rendez-Vous",
    specification: "Можно получить по мордасам, если так себя вести... ты, тупой ублюдок. Шутка)",
    img: "https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg",
    docs: [
      { nameDoc: "Скачать презентацию X-Fit", url: "" },
      { nameDoc: "Скачать предложение", url: "https://www.xeroxscanners.com/downloads/Manuals/XMS/PDF_Converter_Pro_Quick_Reference_Guide.RU.pdf" },
    ],
    contacts: [
      { fio: "", number: "89032030699", email: "corpmanager13@xfit.ru" },
    ],
    turnOn: true
  }
];

export default data;
