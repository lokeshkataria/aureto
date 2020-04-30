import { css } from 'styled-components';

const WIDTH = 480;
export default css`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  @media (min-width: ${({ theme }) => WIDTH + theme.spacing(2) * 2}px) {
    width: ${WIDTH}px;
    margin-left: auto;
    margin-right: auto;
    padding: ${({ theme }) => theme.spacing(3)}px;
  }

  .new-project-field {
    margin-top: ${({ theme }) => theme.spacing(3)}px;
  }

  .submit-button {
    margin-top: ${({ theme }) => theme.spacing(3)}px;
  }
`;
