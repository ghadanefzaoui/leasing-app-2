import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div<{ color?: string }>`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    m-1
  `}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  ${tw`
    h-6
    md:h-9
    ml-0
  `}
  img {
    width: auto;
    height: 100%;
  }
`;

const LogoLink = styled.a`
  ${tw`
    flex
    items-center
    no-underline
  `}
  text-decoration: none;
  color: inherit;
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;

  return (
    <LogoLink href="/">
      <LogoContainer>
        <Image>
          <img
            src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg}
            alt="Logo"
          />
        </Image>
        <LogoText color={color || "dark"}>RentIt.</LogoText>
      </LogoContainer>
    </LogoLink>
  );
}

