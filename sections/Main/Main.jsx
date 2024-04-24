import Image from "next/image";

import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    StyledImageContainer,
    StyledContent
} from "./elements";

export const Main = ({ image, title, description, backgroundUrl, ...props }) => {
    return (
        <StyledContainer {...props} topMargin={4} bottomMargin={4}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
            <StyledContent backgroundUrl={backgroundUrl}>
                <StyledImageContainer>
                    <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={true} />
                </StyledImageContainer>
            </StyledContent>
        </StyledContainer>
    );
};
