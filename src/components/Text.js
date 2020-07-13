import { Text } from 'react-native';
import styled from 'styled-components';

const colors = {
  dark: '#17171B',
};

const CustomText = styled(Text)`
  color: ${({ color }) => color ?? colors.dark};
  font-family: SF-Pro-Display-Regular;
  font-size: ${({ fs }) => fs ?? 20}px;
  font-weight: 500;

  ${({ capitalize }) => capitalize && 'text-transform: capitalize'};
  ${({ uppercase }) => uppercase && 'text-transform: uppercase '};
  ${({ bold }) => bold && 'font-family: SF-Pro-Display-Bold'};

  margin-top: ${({ mt }) => mt ?? 0}px;
  margin-right: ${({ mr }) => mr ?? 0}px;
  margin-bottom: ${({ mb }) => mb ?? 0}px;
  margin-left: ${({ ml }) => ml ?? 0}px;

  ${({ pokeId }) => pokeId && POKE_ID};
  ${({ badge }) => badge && BADGE};

  ${({ shabblas }) => shabblas && SHAB};
`;

const SHAB = `
	font-size: 120px;
flex-shrink: 0
`;

const POKE_ID = `
	font-size: 12px;
	font-weight: 700;
	color: ${colors.dark};
`;

const BADGE = `
	color: white;
	font-size: 12px;
	font-weight: 500;
	text-transform: capitalize;
	margin-left: 5px;
`;

export default CustomText;
