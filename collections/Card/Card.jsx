import {
    StyledCardContent,
} from "./elements";

export const Card = ({
    heading,
    text,
    image,
    marginRight,
    href,
    borderOnHover,
    hoverStyles,
    ...props
}) => {
    return (
        <StyledCardContent
            {...props}
            hoverStyles={hoverStyles}
            marginRight={marginRight}
            position={image ? image.position : null}
        >
        </StyledCardContent>
    );
};
