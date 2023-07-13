import { styled } from "styled-components";

export const Logo = styled.h1`
  font-size: 2.4rem;
  color: #f5f5f5;
`;

export const DropDownOverlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;

  z-index: 5;

  top: 0;
  left: 0;
`;

export const DropdownPosition = styled.div`
  width: fit-content;
  height: fit-content;

  z-index: 10;

  position: absolute;
  right: 8rem;
  top: 8.5rem;

  ::before {
    content: "";
    position: absolute;
    top: -0.5rem;
    right: 2rem;
    height: 2rem;
    width: 2rem;
    background-color: #242424;
    transform: rotate(45deg);
  }
`;

export const DropDownItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  padding-block: 0.8rem;
  padding-inline: 2.4rem;

  & > p {
    color: #fff;
  }
`;
