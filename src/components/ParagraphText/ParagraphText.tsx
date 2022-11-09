interface ParagraphTextProps {
  text: string;
}

const ParagraphText = ({text}: ParagraphTextProps) => {
  return (
    <p className="Paragraph__text">
      {text}
    </p>
  );
};

export default ParagraphText;
