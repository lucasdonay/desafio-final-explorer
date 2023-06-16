import styled from 'styled-components';

export const EditDishSC = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  main {
    width: 36.4rem;
    margin: 1rem auto 5.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    a {
      width: fit-content;

      display: flex;
      align-items: center;
      gap: 0.758rem;

      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.655rem;
      line-height: 1.4%;
      color: ${({ theme }) => theme.colors.light_300};
    }

    h1 {
      font-family: ${({ theme }) => theme.fonts.poppins.medium_400.family};
      font-weight: ${({ theme }) => theme.fonts.poppins.medium_400.weight};
      font-size: ${({ theme }) => theme.fonts.poppins.medium_400.size};
      line-height: ${({ theme }) => theme.fonts.poppins.medium_400.height};
      color: ${({ theme }) => theme.colors.light_300};
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      label:first-child,
      p {
        font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
        font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
        line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
        color: ${({ theme }) => theme.colors.light_400};
      }

      select {
        background-image: url('/src/assets/ArrowDown.svg');
        background-repeat: no-repeat;
        background-position: center right 1.6rem;
        background-color: ${({ theme }) => theme.colors.dark_900};
        border: none;
        border-radius: 5px;
        padding: 1.6rem;

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        font-family: ${({ theme }) =>
          theme.fonts.roboto.smaller_regular.family};
        font-weight: ${({ theme }) =>
          theme.fonts.roboto.smaller_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.smaller_regular.size};
        line-height: ${({ theme }) =>
          theme.fonts.roboto.smaller_regular.height};
        color: ${({ theme }) => theme.colors.light_400};
      }

      textarea {
        width: 100%;
        height: 17.2rem;
        background-color: ${({ theme }) => theme.colors.dark_800};
        border: none;
        border-radius: 8px;
        padding: 1.4rem;

        resize: none;

        font-family: ${({ theme }) => theme.fonts.roboto.small_regular.family};
        font-weight: ${({ theme }) => theme.fonts.roboto.small_regular.weight};
        font-size: ${({ theme }) => theme.fonts.roboto.small_regular.size};
        line-height: ${({ theme }) => theme.fonts.roboto.small_regular.height};
        color: ${({ theme }) => theme.colors.light_300};

        &::placeholder {
          color: ${({ theme }) => theme.colors.light_500};
        }
      }
    }

    .image {
      label {
        background-color: ${({ theme }) => theme.colors.dark_800};
        border: none;
        border-radius: 8px;
        padding: 1.2rem 3.2rem;

        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 0.8rem;

        font-family: ${({ theme }) => theme.fonts.poppins.medium_100.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.medium_100.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.medium_100.size};
        line-height: ${({ theme }) => theme.fonts.poppins.medium_100.height};
        color: ${({ theme }) => theme.colors.light_100};
      }

      input[type='file'] {
        display: none;
      }
    }

    .ingredients {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.dark_800};
      border: none;
      border-radius: 8px;
      padding: 0.8rem;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
    }

    > div:last-child {
      display: flex;
      gap: 3.2rem;

      button {
        padding: 1.2rem 0;

        &:first-child {
          background-color: ${({ theme }) => theme.colors.dark_800};
        }

        &:last-child {
          background-color: ${({ theme }) => theme.colors.tomato_400};
        }
      }
    }
  }

  @media screen and (min-width: 1000px) {
    main {
      width: 112rem;
      margin: 4rem auto 11.6rem;

      a {
        gap: 1.1rem;

        font-family: ${({ theme }) => theme.fonts.poppins.bold_300.family};
        font-weight: ${({ theme }) => theme.fonts.poppins.bold_300.weight};
        font-size: ${({ theme }) => theme.fonts.poppins.bold_300.size};
        line-height: ${({ theme }) => theme.fonts.poppins.bold_300.height};

        svg {
          width: 1.2rem;
          height: 2.2rem;
        }
      }

      h1 {
        margin-bottom: 0.8rem;
      }

      .row {
        flex-direction: row;
        gap: 3.2rem;

        > div {
          gap: 1.6rem;
        }
      }

      .image label {
        width: 22.9rem;
      }

      .dish-category {
        width: 36.4rem;

        select {
          height: 4.8rem;
        }
      }

      .ingredients {
        width: 83.7rem;

        grid-template-columns: repeat(5, 1fr);

        > div {
          width: fit-content;
        }
      }

      > div:last-child {
        align-self: end;

        button {
          width: fit-content;
          padding: 1.2rem 2.4rem;
        }
      }
    }
  }
`;
