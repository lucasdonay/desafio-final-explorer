import styled from 'styled-components';

export const HeaderSC = styled.header`
  width: 42.8rem;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  margin: 0 auto;
  padding: 5.6rem 2.8rem 2.4rem;

  nav {
    display: flex;
    align-items: center;

    button:first-child {
      width: 2.4rem;
      height: 1.8rem;
      background: none;
      border: none;
    }

    a div {
      gap: 0.8rem;

      svg {
        width: 2.461rem;
        height: 2.461rem;
      }

      h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 2.116rem;
        line-height: 1;
        color: ${({ theme }) => theme.colors.light_100};
      }
    }

    > label {
      display: none;
    }

    .logout {
      display: none;
    }
  }

  .user {
    justify-content: space-between;

    .receipt {
      background-color: ${({ theme }) => theme.colors.tomato_100};
      border: none;

      &:hover {
        background-color: ${({ theme }) => theme.colors.tomato_200};
      }

      &:disabled {
        background-color: ${({ theme }) => theme.colors.tomato_400};
      }

      position: relative;

      .mobile {
        width: 2rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.colors.tomato_100};
        border: none;
        border-radius: 99px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -0.9rem;
        right: -1.2rem;

        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_100};
      }

      .desktop {
        display: none;
      }
    }
  }

  .admin {
    a {
      width: fit-content;
      margin: 0 auto;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      p {
        align-self: flex-end;

        font-family: ${({ theme }) =>
          theme.fonts.roboto.smallest_regular.family};
        font-weight: ${({ theme }) =>
          theme.fonts.roboto.smallest_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.smallest_regular.size};
        line-height: ${({ theme }) =>
          theme.fonts.roboto.smallest_regular.height};
        color: ${({ theme }) => theme.colors.cake_200};
      }
    }

    label + button {
      display: none;
    }
  }

  @media screen and (min-width: 1000px) {
    width: 100%;
    height: 10.4rem;
    padding: 2.4rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    nav {
      gap: 3.2rem;

      .menu {
        display: none;
      }

      a div {
        gap: 1rem;

        svg {
          width: 3rem;
          height: 3rem;
        }

        h1 {
          font-family: ${({ theme }) => theme.fonts.roboto.bigger_bold.family};
          font-weight: ${({ theme }) => theme.fonts.roboto.bigger_bold.weight};
          font-size: ${({ theme }) => theme.fonts.roboto.bigger_bold.size};
          line-height: ${({ theme }) => theme.fonts.roboto.bigger_bold.height};
        }
      }

      > label {
        width: 58.1rem;
        padding: 1.2rem 9.9rem;

        display: flex;
      }

      .logout {
        background: none;
        border: none;

        display: block;
      }
    }

    .user {
      align-items: center;
      justify-content: center;

      .receipt {
        width: 21.6rem;
        height: 5.6rem;
        background-color: ${({ theme }) => theme.colors.tomato_100};
        border: none;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        .mobile {
          display: none;
        }

        .desktop {
          display: block;

          font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
          font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
          font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
          line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
          color: ${({ theme }) => theme.colors.light_100};
        }
      }
    }

    .admin {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      a {
        width: fit-content;
        margin: 0;

        display: flex;
        flex-direction: column;
        gap: 0;

        > div {
          width: fit-content;
        }

        p {
          margin-top: -0.7rem;

          justify-self: flex-end;
        }
      }

      label + button {
        width: 21.6rem;
        height: 5.6rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
