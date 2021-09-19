import React from 'react';
import styled from '@emotion/styled';

interface Props {
  id: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
}
const Text = ({ id }: Props) => {
  switch (id) {
    case 'A':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/A.png" />
        </div>
      );
    case 'B':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/B.png" />
        </div>
      );
    case 'C':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/C.png" />
        </div>
      );
    case 'D':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/D.png" />
        </div>
      );
    case 'E':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/E.png" />
        </div>
      );
    case 'F':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/F.png" />
        </div>
      );
    case 'G':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/G.png" />
        </div>
      );
    case 'H':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/H.png" />
        </div>
      );
    case 'I':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/I.png" />
        </div>
      );
    case 'J':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/J.png" />
        </div>
      );
    case 'K':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/K.png" />
        </div>
      );
    case 'L':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/L.png" />
        </div>
      );
    case 'M':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/M.png" />
        </div>
      );
    case 'N':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/N.png" />
        </div>
      );
    case 'O':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/O.png" />
        </div>
      );
    case 'P':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/P.png" />
        </div>
      );
    case 'Q':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/Q.png" />
        </div>
      );
    case 'R':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/R.png" />
        </div>
      );
    case 'S':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/S.png" />
        </div>
      );
    case 'T':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/T.png" />
        </div>
      );
    case 'U':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/U.png" />
        </div>
      );
    case 'V':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/V.png" />
        </div>
      );
    case 'W':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/W.png" />
        </div>
      );
    case 'X':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/X.png" />
        </div>
      );
    case 'Y':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
          <Image src="images/Y.png" />
        </div>
      );
    case 'Z':
      return (
        <div style={{ marginRight: -3, marginLeft: -3 }}>
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
