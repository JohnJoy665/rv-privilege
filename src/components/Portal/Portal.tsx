import { createPortal } from "react-dom";
const modalRoot = document.getElementById("root") as HTMLElement;

interface PortalProps {
  children: React.ReactNode
}

const Portal = ({children}: PortalProps) => (
  <>
    {createPortal(<div className="portal">{children}</div>, modalRoot)}
  </>
);

export default Portal;