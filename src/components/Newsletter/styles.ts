import { styled } from "styled-components";
import font from "../../styles/font";
import BaseContainer from "../Container";
import breakpoints from "../../styles/breakpoints";

const Wrapper = styled.div`
  background-image: url("/images/newsletter.jpg");
  background-size: cover;
`;

const Container = styled(BaseContainer)`
  display: flex;
  padding: 1.5rem;
  @media (min-width: ${breakpoints.sm}) {
    align-items: center;
    justify-content: center;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  @media (min-width: ${breakpoints.sm}) {
    padding: 5rem 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 35rem;
  @media (min-width: ${breakpoints.sm}) {
    text-align: center;
  }
`;

const Title = styled.h6`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-family: ${font.family.heading};
  font-size: ${font.size["2xl"]};
  font-weight: normal;

  @media (min-width: ${breakpoints.lg}) {
    font-size: ${font.size["3xl"]};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-family: ${font.family.body};
  font-size: ${font.size.sm};

  @media (min-width: ${breakpoints.lg}) {
    font-size: ${font.size.lg};
  }
`;

const Benefits = styled.div`
  color: ${({ theme }) => theme.colors.text.tertiary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: ${font.family.body};

  @media (min-width: ${breakpoints.sm}) {
    align-self: center;
    flex-direction: row;
  }
`;

const BenefitItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export {
  Wrapper,
  Container,
  Section,
  Content,
  Title,
  Description,
  Benefits,
  BenefitItem,
};