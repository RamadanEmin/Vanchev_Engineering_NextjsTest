import {
    StyledCardContent,
    StyledImageContainer,
    StyledCardInfo,
    StyledCardTitle,
    StyledCardText
} from "./elements";
import Image from "next/image";

export const Card = ({
    heading,
    text,
    image,
    marginRight,
    href,
    borderOnHover,
    hoverstyles,
    ...props
}) => {
    return (
        <StyledCardContent
            {...props}
            hoverstyles={hoverstyles}
            marginRight={marginRight}
            position={image ? image.position : null}
        >
            {image && (
                <StyledImageContainer position={image.position}>
                    <Image
                        layout='responsive'
                        src={image.src}
                        alt={image.alt ? image.alt : "Icon"}
                        width={image.width ? image.width : "40"}
                        height={image.height ? image.height : "40"}
                    />
                </StyledImageContainer>
            )}
            <StyledCardInfo>
                <StyledCardTitle href={href} className="CardTitle">{heading}</StyledCardTitle>
                <StyledCardText text={text} />
            </StyledCardInfo>
        </StyledCardContent>
    );
};
