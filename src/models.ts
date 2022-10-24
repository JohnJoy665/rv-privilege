interface document {
  name_doc?: string,
  url?: string
};
interface contacts {
  fio?: string,
  number?: string,
  email?: string
}

interface privilegeDate {
  id: string,
  name: string,
  description: string,
  date_stop: string,
  category: string,
  term: string,
  img: string,
  docs: Array<document>,
  contacts?: Array<contacts>,
  turn_on: boolean
}

export default privilegeDate;
