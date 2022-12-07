import IconContainer from "../IconContainer/IconContainer";

interface ParagraphSubTitleProps {
  icon: string;
}


const ParagraphSubTitle = ({icon}: ParagraphSubTitleProps) => {
  return (
    <div className="Paragraph__sub-title">
      <IconContainer icon={icon} sizeWidth={"13"} sizeHeight={"13"}/>
      Елена Викторовна Золотозуб
    </div>
  );
};

export default ParagraphSubTitle;