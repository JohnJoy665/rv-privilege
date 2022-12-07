export interface Idocument {
  nameDoc?: string,
  url?: string
}
export interface Icontacts {
  fio?: string,
  number?: string,
  email?: string
}

export interface IprivilegeDatа {
  key?: string
  id: string,
  name: string,
  description: string,
  dateStop: string,
  category: string,
  specification: string,
  img: string,
  docs: Idocument[],
  contacts: Icontacts[],
  turnOn: boolean
}

// export default IprivilegeDatа;
