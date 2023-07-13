import { styled } from "styled-components";

export const RootContainer = styled.div`
  width: 100%;
  height: 7.2rem;
  background-color: #141414;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2.4rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const ButtonContainer = styled.button`
  position: relative;
  padding: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: #242424;
    border-radius: 0.8rem;
  }
`;

export const ButtonMark = styled.div`
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;

  right: 0.6rem;
  top: 0.6rem;

  background-color: red;
  border-radius: 50%;
`;
