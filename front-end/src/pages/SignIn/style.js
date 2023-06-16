import styled from 'styled-components';

export const SignInSC = styled.div`
  width: 100%;
  min-height: 100vh;

  main {
    width: 90%;
    max-width: 31.6rem;
    margin: 15.8rem auto;

    > form {
      margin-top: 7.3rem;

      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      legend {
        display: none;
      }

      a {
        margin: 0 auto;

        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_100};
      }
    }
  }

  .loading {
    position: absolute;
    top: 30%;
    right: 21%;

    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-family: ${({ theme }) => theme.fonts.poppins.medium_400.family};
    font-weight: ${({ theme }) => theme.fonts.poppins.medium_400.weight};
    font-size: ${({ theme }) => theme.fonts.poppins.medium_400.size};
    line-height: ${({ theme }) => theme.fonts.poppins.medium_400.height};
    color: ${({ theme }) => theme.colors.light_400};
  }

  @media screen and (min-width: 1000px) {
    main {
      width: 100%;
      max-width: 110.6rem;
      margin: 14.2rem auto;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      form {
        background-color: ${({ theme }) => theme.colors.dark_700};
        border: none;
        border-radius: 16px;
        margin: 0;
        padding: 6.4rem;

        legend {
          width: 34.8rem;

          display: block;

          font-family: ${({ theme }) => theme.fonts.poppins.medium_400.family};
          font-weight: ${({ theme }) => theme.fonts.poppins.medium_400.weight};
          font-size: ${({ theme }) => theme.fonts.poppins.medium_400.size};
          line-height: ${({ theme }) => theme.fonts.poppins.medium_400.height};
          color: ${({ theme }) => theme.colors.light_100};
          text-align: center;
        }
      }
    }

    .loading {
      top: 40%;
      right: 45%;
    }
  }
`;
