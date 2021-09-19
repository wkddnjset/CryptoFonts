import React from 'react';
import styled from '@emotion/styled';
import Text from './Text';

interface Props {
  value: string;
  opacity: number;
}
const Fonts = ({ value, opacity }: Props) => {
  return (
    <TextWrap style={{ opacity: opacity }}>
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
