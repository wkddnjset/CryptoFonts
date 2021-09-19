import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';

import CryptoFonts from 'components/CryptoFonts';

export default function Home() {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Wrap>
      <ImageBox>
        <Input ref={inputRef} />
        <CryptoFonts value="I Love BTS" />
      </ImageBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  .slick-next {
    right: 25px !important;
  }
  .slick-prev {
    left: 25px !important;
    z-index: 1;
  }
  height: 100vh;
  overflow: hidden;
`;

const ImageBox = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Input = styled.input`
  /* display: none; */
`;
