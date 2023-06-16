import styled from 'styled-components';

export const ButtonSC = styled.button`
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.colors.tomato_100};
  border: none;
  border-radius: 5px;
  padding: 1.2rem auto;

  font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
  font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
  font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
  line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
  color: ${({ theme }) => theme.colors.light_100};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tomato_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.tomato_400};
  }
`;
