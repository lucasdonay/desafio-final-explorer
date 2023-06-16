import styled from 'styled-components';

export const MenuSC = styled.div`
  width: 42.8rem;
  min-height: 100vh;
  margin: 0 auto;

  header {
    height: 11.4rem;
    background-color: ${({ theme }) => theme.colors.dark_700};
    padding: 5.6rem 0 2.4rem 2.8rem;

    > a {
      background: none;
      border: none;

      display: flex;
      align-items: center;
      gap: 1.6rem;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 2.11rem;
      line-height: 1;
      color: ${({ theme }) => theme.colors.light_100};
    }
  }

  nav {
    height: 67.7rem;
    width: 37.2rem;
    margin: 3.6rem auto 1.357rem;

    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    ul {
      display: flex;
      flex-direction: column;

      li {
        border-bottom: solid 1px ${({ theme }) => theme.colors.dark_1000};
        padding: 1rem;

        list-style: none;

        a {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 2.4rem;
          line-height: 1.4;
          color: ${({ theme }) => theme.colors.light_300};
        }
      }
    }
  }
`;
