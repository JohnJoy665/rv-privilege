export interface UserSubmitForm {
  title: string;
  category: string;
  description: string;
  specification: string;
  uploadFile: File[];
  contactsArray: [{fio: string, number: string, email: string}]
}