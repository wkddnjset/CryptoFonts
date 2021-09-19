import React from 'react';
import styled from '@emotion/styled';
import Text from './Text';

interface Props {
  value: string;
}
const Fonts = ({ value }: Props) => {
  return (
    <TextWrap>
      {value.split('').map((id: any, idx: number) => {
        return <Text key={idx} id={id.toUpperCase()} />;
      })}
    </TextWrap>
  );
};

export default Fonts;

const TextWrap = styled.div`
  display: flex;
`;
