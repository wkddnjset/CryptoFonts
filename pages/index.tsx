import { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import CryptoFonts from 'components/CryptoFonts';

export default function Home() {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<any>(null);

  const handleText = (e: any) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Wrap>
      <Input ref={inputRef} onChange={handleText} />
      <CryptoFonts value={value ? value : 'input text...'} opacity={value ? 1 : 0.6} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.textarea`
  background-color: #eee;
  height: 50px;
  font-size: 50px;
  position: absolute;
  z-index: 10;
  opacity: 0.1;
  text-align: center;
`;
