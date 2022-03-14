import type { NextPage } from "next";
import jamesTurrell from "../public/images/jamesturrell.jpeg";
import writing from "../public/images/writing.jpg";
import portfolio from "../public/images/portfolio.jpg";
import github from "../public/images/github.png";
import about from "../public/images/about.jpg";

import {
  ImageContainer,
  Wrapper,
  Text,
  Container,
} from "../styles/layout.style";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <ImageContainer height={"60vh"} width={"100%"} imageUrl={jamesTurrell}>
        <Text variant="heading" textAlign="center" padding={30}>
          Full-stack software engineer at the intersection of technology and
          art.
        </Text>
      </ImageContainer>
      <Container {...bottomNavContainerProps}>
        <Container {...rowProps}>
          <SquareImage imageUrl={about} text="About" />
          <SquareImage imageUrl={portfolio} text="Portfolio" />
        </Container>
        <Container {...rowProps}>
          <SquareImage imageUrl={github} text="Github" />
          <SquareImage imageUrl={writing} text="Writing" />
        </Container>
      </Container>
    </Wrapper>
  );
};

export default Home;

interface SquareImageProps {
  imageUrl: StaticImageData;
  text: String;
}

const SquareImage: React.FC<SquareImageProps> = ({ imageUrl, text }) => {
  return (
    <ImageContainer height="25vw" width="25vw" imageUrl={imageUrl} margin={10}>
      <Text variant="subheading" textAlign="center">
        {text}
      </Text>
    </ImageContainer>
  );
};

const rowProps = {
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: true,
  width: 70,
};

const bottomNavContainerProps = {
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 3,
  marginBottom: 1.5,
  flexWrap: true,
};
