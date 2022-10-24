interface Idocument {
  nameDoc?: string,
  url?: string
};
interface Icontacts {
  fio?: string,
  number?: string,
  email?: string
}

interface IprivilegeDatа {
  id: string,
  name: string,
  description: string,
  dateStop: string,
  category: string,
  term: string,
  img: string,
  docs: Idocument[],
  contacts?: Icontacts[],
  turnOn: boolean
}

export default IprivilegeDatа;
