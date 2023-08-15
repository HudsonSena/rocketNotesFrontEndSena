import styled from 'styled-components';

export const Container = styled.div`
    min-width: 48%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme, isNew }) => isNew ? `1px solid ${({ theme }) => theme.COLORS.GRAY_300}` : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.COLORS.GRAY_300}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
        display: flex;
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        display: flex;
    }

    input {
        height: 56px;
        width: 100%;

        margin-right: 15px;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;