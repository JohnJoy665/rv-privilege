import { Icon } from "@iconify/react";

interface IconContainerProps {
  icon: string;
  sizeWidth: string;
  sizeHeight: string;
}

const IconContainer = ({icon, sizeWidth, sizeHeight}: IconContainerProps) => {
  return (
    <div className="IconContainer">
      <Icon icon={icon} width={sizeWidth} height={sizeHeight} />
    </div>
  );
};

export default IconContainer;