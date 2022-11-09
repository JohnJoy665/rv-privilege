import { Icon } from "@iconify/react";

interface IconContainerProps {
  icon: string;
}

const IconContainer = ({icon}: IconContainerProps) => {
  return (
    <div className="IconContainer_modalParagraph">
      <Icon icon={icon} width="13" height="13" />
    </div>
  );
};

export default IconContainer;