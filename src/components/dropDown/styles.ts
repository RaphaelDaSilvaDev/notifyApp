import { styled } from "styled-components";

export const DropDownContainer = styled.div`
  width: fit-content;

  background-color: #141414;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  overflow-y: auto;
`;

export const NotificationRootHeader = styled.div`
  width: 100%;
  height: 4.8rem;
  background-color: #242424;

  padding-inline: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    color: #fff;
    font-weight: bold;
  }

  & > span {
    color: #29a215;
    cursor: pointer;
  }
`;
