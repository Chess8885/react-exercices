import styled from "styled-components";
import Icon from '@mdi/react'
import {mdiMagnify } from '@mdi/js'

export const IconSpaced = styled(Icon)`
margin-left: 3%;
`

export const HeaderDiv = styled.div`
  color: beige;
  padding: 4em;
`
export const Column = styled.h1`
  width:33%;
  float: left;
  font-size: 1.2em;
  text-align: left;
  color: black;
`;

export const ColumnCentered = styled(Column)`
  text-align: center !important;
`;

export const FirstButton = styled.button`
    color: black;
  font-size: 1em;
  border:none;
  margin-right: 10%;
`;
export const SecondButton = styled.button`
    color: black;
  font-size: 1em;
  border:none;
  margin-left: 10%;
`;