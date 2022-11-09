interface ParagraphTitleProps {
  title: string;
}

const ParagraphTitle = ({title}: ParagraphTitleProps) => {
  return (
    <h3 className="Paragraph__title">{title}</h3>
  );
};

export default ParagraphTitle;