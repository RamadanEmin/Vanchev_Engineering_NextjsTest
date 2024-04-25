import styled from "styled-components";

export const StyledCardContent = styled(({marginRight = 0,...props}) => <div {...props} />)`
    display: flex;
    flex-direction: ${(props) => (props.position === "right" ? "row-reverse" : "row")};
    align-items: center;
    border-radius: 5px;
    background: #f4f4f4;
    max-width: 100%;
    padding: 20px 40px;
    margin-right: ${({ marginRight }) => marginRight}px;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
        outline: 2px solid #1173fd;
    }
`;

export const StyledImageContainer = styled(({ position = "right", ...props }) => <div {...props} />)`
    max-width: 3rem;
    max-height: 3rem;
    width: 100%;
    height: 100%;
    margin-left: ${({ position }) => (position === "right" ? "40px" : 0)};
    margin-right: ${({ position }) => (position === "left" ? "40px" : 0)};
`;