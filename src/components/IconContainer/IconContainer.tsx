import { Icon } from "@iconify/react";

interface IconContainerProps {
  icon: string;
  sizeWidth: string;
  sizeHeight: string;
  color?: string;
}

const IconContainer = ({icon, sizeWidth, sizeHeight, color}: IconContainerProps) => {
  return (
    <div className="IconContainer">
      <Icon icon={icon} color={color} width={sizeWidth} height={sizeHeight} />
    </div>
  );
};

export default IconContainer;