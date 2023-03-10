import { IAnchorProps } from "../../interfaces/components.interface";
import { StyledAnchor } from "./styles";

const CustomAnchor = ({
  children, Icon, gap, fontSize, color, hoverEffect, hasProfile, profileName,
}: IAnchorProps) => {
  return (
    <StyledAnchor
      flexGap={gap || "11px"}
      fontSize={fontSize || "12px"}
      color={color || "var(--grey-1)"}
      hover={hoverEffect}
      stack={3}
    >
      {Icon}
      <div className="interactive-data">
        {hasProfile && (
          <h6 className="data__greetings">Olá {profileName || "Visitante"},</h6>
        )}
        <a className="interactive-data__content" href="#void">
          {children}
        </a>
      </div>
    </StyledAnchor>
  );
};

export default CustomAnchor;
