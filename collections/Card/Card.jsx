import {
    StyledCardContent,
    StyledImageContainer,
    StyledCardInfo,
    StyledCardTitle,
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
                        width={image.width ? image.width : "40px"}
                        height={image.height ? image.height : "40px"}
                    />
                </StyledImageContainer>
            )}
            <StyledCardInfo>
                <StyledCardTitle href={href} className="CardTitle">{heading}</StyledCardTitle>
            </StyledCardInfo>
        </StyledCardContent>
    );
};
