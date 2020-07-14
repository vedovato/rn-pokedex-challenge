import { Text } from 'react-native';
import styled from 'styled-components';

import { fonts, colors } from '../utils/theme';

const CustomText = styled(Text)`
  color: ${({ color }) => color ?? colors.dark};
  font-size: ${({ fs }) => fs ?? 20}px;
  font-family: ${fonts.SFRegular};

  ${({ center }) => center && 'text-align:center'};
  ${({ capitalize }) => capitalize && 'text-transform: capitalize'};
  ${({ uppercase }) => uppercase && 'text-transform: uppercase '};
  ${({ bold }) => bold && 'font-family:' + fonts.SFBold};

  margin-top: ${({ mt }) => mt ?? 0}px;
  margin-right: ${({ mr }) => mr ?? 0}px;
  margin-bottom: ${({ mb }) => mb ?? 0}px;
  margin-left: ${({ ml }) => ml ?? 0}px;

  ${({ pokeId }) => pokeId && POKE_ID};
  ${({ stat }) => stat && STAT};
  ${({ badge }) => badge && BADGE};

  ${({ style }) => style};
`;

const POKE_ID = `
	color: ${colors.dark};
	font-family: ${fonts.SFBold};
	font-size: 16px;
	opacity: 0.6
`;

const STAT = `
	font-size: 16px;
	font-weight: bold;
`;

const BADGE = `
	color: white;
	font-size: 12px;
	font-weight: 500;
	text-transform: capitalize;
	margin-left: 5px;
`;

export default CustomText;
