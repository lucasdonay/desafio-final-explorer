import styled from 'styled-components';

export const DishCardSC = styled.div`
  > div {
    width: 21rem;
    height: 29.4rem;

    background-color: ${({ theme }) => theme.colors.dark_200};
    border: solid 1px ${({ theme }) => theme.colors.dark_300};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    position: relative;

    .icon {
      background: none;
      border: none;

      position: absolute;
      top: 1.6rem;
      right: 1.6rem;

      z-index: 2;
    }

    .favorite {
      svg path {
        fill: ${({ theme }) => theme.colors.light_300};
      }
    }

    > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      img {
        width: 8.8rem;
        height: 8.8rem;
        border-radius: 100%;
      }

      p {
        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_300};
      }

      .description {
        display: none;
      }
    }

    span {
      font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
      font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
      font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
      line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
      color: ${({ theme }) => theme.colors.cake_200};
    }

    > div {
      width: 16.2rem;

      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > button {
        width: 100%;
        height: 3.2rem;
        background-color: ${({ theme }) => theme.colors.tomato_100};
        border: none;
        border-radius: 5px;

        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_100};
      }

      .quantity {
        width: fit-content;
        height: 3.2rem;
        margin: 0 auto;

        display: flex;
        align-items: center;
        gap: 1.7rem;

        button {
          background: none;
          border: none;

          img {
            width: 1.8rem;
            height: 1.8rem;
          }
        }

        input[type='number'] {
          width: 2.4rem;
          background: none;
          border: none;

          appearance: number;
          -moz-appearance: textfield;

          font-family: ${({ theme }) =>
            theme.fonts.roboto.small_regular.family};
          font-weight: ${({ theme }) =>
            theme.fonts.roboto.small_regular.weight};
          font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
          line-height: ${({ theme }) =>
            theme.fonts.roboto.small_regular.height};
          color: ${({ theme }) => theme.colors.light_300};

          text-align: center;
        }

        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    > div {
      width: 30.4rem;
      height: 46.2rem;

      gap: 1.5rem;

      position: relative;

      .icon {
        right: 1.8rem;
      }

      > a {
        img {
          width: 17.6rem;
          height: 17.6rem;
        }

        p {
          font-family: ${({ theme }) => theme.fonts.poppins.bold_300.family};
          font-weight: ${({ theme }) => theme.fonts.poppins.bold_300.weight};
          font-size: ${({ theme }) => theme.fonts.poppins.bold_300.size};
          line-height: ${({ theme }) => theme.fonts.poppins.bold_300.height};
        }

        .description {
          padding: 0 2.4rem;

          display: block;

          font-family: ${({ theme }) =>
            theme.fonts.roboto.smaller_regular.family};
          font-weight: ${({ theme }) =>
            theme.fonts.roboto.smaller_regular.weight};
          font-size: ${({ theme }) => theme.fonts.roboto.smaller_regular.size};
          line-height: ${({ theme }) =>
            theme.fonts.roboto.smaller_regular.height};
          color: ${({ theme }) => theme.colors.light_400};
          text-align: center;
        }
      }

      span {
        font-family: ${({ theme }) =>
          theme.fonts.roboto.biggest_regular.family};
        font-weight: ${({ theme }) =>
          theme.fonts.roboto.biggest_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.biggest_regular.size};
        line-height: ${({ theme }) =>
          theme.fonts.roboto.biggest_regular.height};
      }

      > div {
        width: 20.8rem;

        flex-direction: row;
        align-items: center;
        gap: 1.6rem;

        > button {
          width: 100%;
          height: 4.8rem;
        }

        .quantity {
          gap: 1.4rem;

          align-items: center;

          button {
            width: 2.4rem;
            height: 2.4rem;
          }

          input[type='number'] {
            width: 2.4rem;

            font-family: ${({ theme }) => theme.fonts.roboto.big_bold.family};
            font-weight: ${({ theme }) => theme.fonts.roboto.big_bold.weight};
            font-size: ${({ theme }) => theme.fonts.roboto.big_bold.size};
            line-height: ${({ theme }) => theme.fonts.roboto.big_bold.height};
          }
        }
      }
    }
  }
`;
