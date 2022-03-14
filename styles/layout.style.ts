import styled from "styled-components";
import { variant } from "styled-system";

interface ContainerProps {
  height?: number;
  width?: number;
  flexWrap?: boolean;
  justifyContent?: string;
  marginTop?: number;
  marginBottom?: number;
  flexDirection?: string
  alignItems?: string
  flex?: number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex: ${(props) => props.flex};
  width: ${(props) => (!!props.width ? `${props.width}%` : "100%")};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => `${props.marginTop}%`};
  margin-bottom: ${(props) => `${props.marginBottom}%`};
  flex-wrap: ${(props) => (props.flexWrap ? "wrap" : "nowrap")};
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.mainColor};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
`;

interface ImageContainerProps {
  height: string;
  width: string;
  imageUrl: StaticImageData;
  margin?: number
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin:${(props) => `${props.margin}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  z-index: -1;
  &:after {
    opacity: 0.6;
    background-image: ${(props) => `url(${props.imageUrl.src})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    content: "";
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    z-index: 1;
    position: absolute;
  }
`;

interface TextProps {
  textAlign?: string;
  padding?: number;
  variant: string;
}

export const Text = styled.p<TextProps>`
  color: ${(props) => props.theme.secondary};
  margin: 0px;
  width: 100%;
  z-index: 2;
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  ${variant({
    variants: {
      standard: {
        fontSize: "12px",
        fontWeight: "regular",
      },
      subheading: {
        fontSize: "20px",
        fontWeight: "regular",
      },
      heading: {
        fontSize: "25px",
        fontWeight: "bold",
      },
    },
  })}
`;
