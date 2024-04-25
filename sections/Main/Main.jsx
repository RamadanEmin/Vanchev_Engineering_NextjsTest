import Image from "next/image";
import { cards } from "../../utils";

import {
    StyledTextContainer,
    StyledContainer,
    StyledTitle,
    StyledDescription,
    StyledImageContainer,
    StyledContent,
    StyledCardsContainer
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

                <StyledCardsContainer>
                    {cards.map((card, i) => {
                        return (
                            <Card
                                key={i}
                                heading={card.heading}
                                text={card.text}
                                image={card.image}
                                marginRight={card.marginRight}
                                href={card.href}
                            />
                        );
                    })}
                </StyledCardsContainer>
            </StyledContent>
        </StyledContainer>
    );
};
