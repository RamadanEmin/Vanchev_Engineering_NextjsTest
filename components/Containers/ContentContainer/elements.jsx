import styled from 'styled-components';

export const StyledContentContainer = styled(({ backgroundUrl = '', ...props }) => <div {...props} />)`
    display: flex;
    max-width: 1200px;
    width: 100%;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;