import styled from 'styled-components';

export const DishCategoriesSC = styled.div`
  width: fit-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.light_300};
  }

  .carousel {
    max-width: 37.2rem;

    cursor: grab;

    overflow-x: hidden;
  }

  .slider {
    display: flex;
    gap: 1.6rem;
  }

  @media screen and (min-width: 1000px) {
    h2 {
      font-family: ${({ theme }) => theme.fonts.poppins.medium_400};
      font-weight: ${({ theme }) => theme.fonts.poppins.medium_400};
      font-size: ${({ theme }) => theme.fonts.poppins.medium_400};
      line-height: ${({ theme }) => theme.fonts.poppins.medium_400};
    }

    .carousel {
      max-width: 112.2rem;
    }

    .slider {
      gap: 2.7rem;
    }
  }
`;
