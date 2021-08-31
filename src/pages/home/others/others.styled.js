import styled from 'styled-components';
import { Row } from 'antd';
import { colors, mixins } from '@tidb-community/ui';

import { Section, Text } from '~/pages/home/index.styled';

export { Text };

export const Container = styled(Section)`
  && {
    ${mixins.responsive()};
  }
`;

export const Subtitle = styled.span`
  font-size: 20px;
`;

export const LogoWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  max-height: 40px;
`;

export const LogosBox = styled(Row).attrs({ justify: 'space-between' })`
  margin-top: 2rem;
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid ${colors.T2};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;