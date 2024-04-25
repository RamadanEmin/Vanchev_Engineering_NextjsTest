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