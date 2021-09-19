import React from 'react';
import styled from '@emotion/styled';

interface Props {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
}
const Text = ({ id }: Props) => {
  switch (id) {
    case 'A':
      return (
        <div>
          <Image src="images/A.png" />
        </div>
      );
    case 'B':
      return (
        <div>
          <Image src="images/B.png" />
        </div>
      );
    case 'C':
      return (
        <div>
          <Image src="images/C.png" />
        </div>
      );
    case 'D':
      return (
        <div>
          <Image src="images/D.png" />
        </div>
      );
    case 'E':
      return (
        <div>
          <Image src="images/E.png" />
        </div>
      );
    case 'F':
      return (
        <div>
          <Image src="images/F.png" />
        </div>
      );
    case 'G':
      return (
        <div>
          <Image src="images/G.png" />
        </div>
      );
    case 'H':
      return (
        <div>
          <Image src="images/H.png" />
        </div>
      );
    case 'I':
      return (
        <div>
          <Image src="images/I.png" />
        </div>
      );
    case 'J':
      return (
        <div>
          <Image src="images/J.png" />
        </div>
      );
    case 'K':
      return (
        <div>
          <Image src="images/K.png" />
        </div>
      );
    case 'L':
      return (
        <div>
          <Image src="images/L.png" />
        </div>
      );
    case 'M':
      return (
        <div>
          <Image src="images/M.png" />
        </div>
      );
    case 'N':
      return (
        <div>
          <Image src="images/N.png" />
        </div>
      );
    case 'O':
      return (
        <div>
          <Image src="images/O.png" />
        </div>
      );
    case 'P':
      return (
        <div>
          <Image src="images/P.png" />
        </div>
      );
    case 'Q':
      return (
        <div>
          <Image src="images/Q.png" />
        </div>
      );
    case 'R':
      return (
        <div>
          <Image src="images/R.png" />
        </div>
      );
    case 'S':
      return (
        <div>
          <Image src="images/S.png" />
        </div>
      );
    case 'T':
      return (
        <div>
          <Image src="images/T.png" />
        </div>
      );
    case 'U':
      return (
        <div>
          <Image src="images/U.png" />
        </div>
      );
    case 'V':
      return (
        <div>
          <Image src="images/V.png" />
        </div>
      );
    case 'W':
      return (
        <div>
          <Image src="images/W.png" />
        </div>
      );
    case 'X':
      return (
        <div>
          <Image src="images/X.png" />
        </div>
      );
    case 'Y':
      return (
        <div>
          <Image src="images/Y.png" />
        </div>
      );
    case 'Z':
      return (
        <div>
          <Image src="images/Z.png" />
        </div>
      );
    default:
      return <div style={{ marginRight: 10, marginLeft: 10 }} />;
  }
};

export default Text;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;
