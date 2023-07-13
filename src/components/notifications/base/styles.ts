import { styled } from "styled-components";

export const NotificationRootContainer = styled.div`
  width: 50rem;

  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;

  background-color: #1f1f1f;

  padding: 0.8rem 2.4rem;
`;

export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.8rem;

  & > p {
    color: #f5f5f5;
  }

  & > span {
    color: #ccc;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

type ActionButtonProps = {
  basicColor: string;
  hoverColor: string;
};

export const ActionButton = styled.button<ActionButtonProps>`
  padding: 0.8rem;

  background-color: ${(props) => props.basicColor};
  border-radius: 0.2rem;

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.basicColor};
  }
`;
