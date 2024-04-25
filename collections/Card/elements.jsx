import styled from "styled-components";
import Link from "next/link";

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

    &:hover .CardTitle {
        text-decoration: underline;
        color: #1173fd
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

export const StyledCardInfo = styled(({ ...props }) => <div {...props} />)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    `;

export const StyledCardTitle = ({ href, children, ...props }) => {
    if (href) {
        return (
            <Link href={href} passHref>
                    <CardTitle {...props}>{children}</CardTitle>
            </Link>
        );
    }
};

const CardTitle = styled(({ ...props }) => <h2 {...props} />)`
    font-size: 1.1rem;
    margin: 0;
    font-weight: bold;
    font-family: Poppins;
`;

export const StyledCardText = styled(({ text = "", ...props }) => (
    <p {...props}>
        {text.split(/\*\*(.*?)\*\*/).map((item, index) => {
            return index % 2 === 0 ? <span key={index}>{item}</span> : <strong key={index}>{item}</strong>;
        })}
    </p>
))`
    font-size: 0.9rem;
    margin: 0;
    font-family: "Poppins";
`;