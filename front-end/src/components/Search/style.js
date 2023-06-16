import styled from 'styled-components';

export const SearchSC = styled.label`
  background-color: ${({ theme }) => theme.colors.dark_900};
  border: none;
  border-radius: 5px;
  padding: 1.2rem 1.4rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  input {
    width: 100%;
    background: none;
    border: none;

    font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
    font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
    font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
    line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
    color: ${({ theme }) => theme.colors.light_300};

    &::placeholder {
      color: ${({ theme }) => theme.colors.light_500};
    }
  }
`;
