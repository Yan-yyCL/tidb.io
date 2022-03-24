import styled from 'styled-components';
import { colors, Styled } from '@tidb-community/ui';

import AsktugSvg from './asktug.svg';
import Anchor from '~/components/Anchor';

const { ModuleTitle, Section, CenterOnSmallScreen } = Styled;

export { ModuleTitle, CenterOnSmallScreen };

export const Container = styled(Section)`
  && {
    background: ${colors.M1};
  }
`;

export const Posts = styled.div`
  margin-bottom: 1rem;
`;

export const Module = styled.div`
  padding: 2rem 0 1.5rem;
  border-bottom: 1px solid ${colors.T2};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const AsktugLogo = styled(AsktugSvg)`
  height: 29.5px;
  margin-right: 1rem;
  position: relative;
  top: 8px;
`;

export const Link = styled(Anchor)`
  font-size: 16px;
  text-decoration: underline;
  &:hover {
    color: ${colors.B1};
    text-decoration: underline;
  }
`;
