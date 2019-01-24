import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
	cursor: pointer;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;