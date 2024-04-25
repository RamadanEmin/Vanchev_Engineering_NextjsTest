import styled from 'styled-components';
import {
    SectionContainer,
    SectionHeading,
    SectionSubheading,
    ContentContainer
} from '~/components';

export const StyledContainer = styled(({ height, ...props }) => (<SectionContainer {...props} />))`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: auto;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
    color: black;
    width: 100%;
    margin: auto;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
    color: black;
    text-align: center;
    margin-bottom: 0px;
    line-height: 3rem;
`;

export const StyledDescription = styled((props) => (<SectionSubheading {...props} />))`
    text-align: center;
    margin-top: 0px;
`;

export const StyledContent = styled(({ backgroundUrl = '', ...props }) => <ContentContainer {...props} />)`
    background: url(${({ backgroundUrl }) => backgroundUrl}) no-repeat;
    background-size: contain;
`;

export const StyledImageContainer = styled(({ ...props }) => (<div {...props} />))`
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const StyledCardsContainer = styled(({ ...props }) => (<div {...props} />))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    gap: 2rem;
`;