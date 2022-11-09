import IconContainer from "../IconContainer/IconContainer";

interface ParagraphLink {
  docName?: string;
  docHref?: string;
  number?: string;
  email?: string;
  icon?: string;
}

const ParagraphLink = ({docName, docHref, icon}: ParagraphLink) => {
  return (
    <a href="" className="Paragraph__link">
      {icon && <IconContainer icon={icon} />}
      {docName}
    </a>
  );
};

export default ParagraphLink;