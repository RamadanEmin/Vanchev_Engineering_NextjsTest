import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription
} from "./elements";

export const Main = ({ image, title, description, backgroundUrl, ...props }) => {
    return (
        <StyledContainer {...props} topMargin={4} bottomMargin={4}>
            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledTextContainer>
        </StyledContainer>
    );
};
