import ParagraphLink from "../ParagraphLink/ParagraphLink";
import ParagraphText from "../ParagraphText/ParagraphText";
import ParagraphTitle from "../ParagraphTitle/ParagraphTitle";
import { Idocument, Icontacts } from "../../interfaces/models";
import ParagraphSubTitle from "../ParagraphSubTitle/ParagraphSubTitle";

interface ParagraphProps {
  title: string; // Заголовок параграфа
  text?: string; // есть ли текст у параграфа
  docs?: Idocument[]; // есть ли список документов - пдф, ворд, и тд
  contacts?: Icontacts; // есть ли контакты
}

const Paragraph = ({ title, text = undefined, docs = undefined, contacts = undefined }: ParagraphProps) => {
  return (
    <div className="Paragraph">
      <ParagraphTitle title={title} />
      {text && <ParagraphText text={text} />}
      {docs && docs.map((item: Idocument, i: number) => (<ParagraphLink key={i} icon={"material-symbols:download-rounded"} docName={item.nameDoc} docHref={item.url} />))}
      {contacts && contacts.fio && <ParagraphSubTitle icon={"bi:person"}/>}
      {contacts && contacts.email && <ParagraphLink docName={contacts.email} icon={"ic:outline-alternate-email"}/>}
      {contacts && contacts.number && <ParagraphLink docName={contacts.number} icon={"bi:telephone"}/>}
    </div>
  );
};

export default Paragraph;


// fio?: string,
//   number?: string,
//   email?: string