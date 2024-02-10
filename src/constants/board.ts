export type Grid = Row[];

export type Row = {
  row: string;
  squares: Square[];
};

export type Square = {
  col: string;
  ref: string;
  hex: string;
  x?: number;
  y?: number;
};

export const grid: Grid = [
  {
    row: 'A',
    squares: [
      {
        col: '1',
        ref: 'A1',
        hex: '#612B0F',
      },
      {
        col: '2',
        ref: 'A2',
        hex: '#6B2710',
      },
      {
        col: '3',
        ref: 'A3',
        hex: '#752214',
      },
      {
        col: '4',
        ref: 'A4',
        hex: '#821F19',
      },
      { col: '5', ref: 'A5', hex: '#941E1E' },
      {
        col: '6',
        ref: 'A6',
        hex: '#9E1B20',
      },
      {
        col: '7',
        ref: 'A7',
        hex: '#AF1E23',
      },
      {
        col: '8',
        ref: 'A8',
        hex: '#C62127',
      },
      {
        col: '9',
        ref: 'A9',
        hex: '#DE1F26',
      },
      {
        col: '10',
        ref: 'A10',
        hex: '#EB1C24',
      },
      {
        col: '11',
        ref: 'A11',
        hex: '#EC1D23',
      },
      {
        col: '12',
        ref: 'A12',
        hex: '#EC1D25',
      },
      {
        col: '13',
        ref: 'A13',
        hex: '#EC1B2E',
      },
      {
        col: '14',
        ref: 'A14',
        hex: '#ED1A3B',
      },
      {
        col: '15',
        ref: 'A15',
        hex: '#EC1946',
      },
      {
        col: '16',
        ref: 'A16',
        hex: '#E91754',
      },
      {
        col: '17',
        ref: 'A17',
        hex: '#E51465',
      },
      {
        col: '18',
        ref: 'A18',
        hex: '#E21075',
      },
      {
        col: '19',
        ref: 'A19',
        hex: '#D80F83',
      },
      {
        col: '20',
        ref: 'A20',
        hex: '#D4148D',
      },
      {
        col: '21',
        ref: 'A21',
        hex: '#C82791',
      },
      {
        col: '22',
        ref: 'A22',
        hex: '#BB2D91',
      },
      {
        col: '23',
        ref: 'A23',
        hex: '#B33394',
      },
      {
        col: '24',
        ref: 'A24',
        hex: '#A83594',
      },
      {
        col: '25',
        ref: 'A25',
        hex: '#9F3894',
      },
      {
        col: '26',
        ref: 'A26',
        hex: '#933895',
      },
      {
        col: '27',
        ref: 'A27',
        hex: '#8C3D98',
      },
      {
        col: '28',
        ref: 'A28',
        hex: '#833D96',
      },
      {
        col: '29',
        ref: 'A29',
        hex: '#7D3E99',
      },
      {
        col: '30',
        ref: 'A30',
        hex: '#73419A',
      },
    ],
  },
  {
    row: 'B',
    squares: [
      {
        col: '1',
        ref: 'B1',
        hex: '#884B1F',
      },
      {
        col: '2',
        ref: 'B2',
        hex: '#94441F',
      },
      {
        col: '3',
        ref: 'B3',
        hex: '#9C3F20',
      },
      {
        col: '4',
        ref: 'B4',
        hex: '#AD3F24',
      },
      { col: '5', ref: 'B5', hex: '#B93825' },
      {
        col: '6',
        ref: 'B6',
        hex: '#C62D27',
      },
      {
        col: '7',
        ref: 'B7',
        hex: '#D62827',
      },
      {
        col: '8',
        ref: 'B8',
        hex: '#E42024',
      },
      {
        col: '9',
        ref: 'B9',
        hex: '#EB2325',
      },
      {
        col: '10',
        ref: 'B10',
        hex: '#EC282A',
      },
      {
        col: '11',
        ref: 'B11',
        hex: '#EE2932',
      },
      {
        col: '12',
        ref: 'B12',
        hex: '#EE2932',
      },
      {
        col: '13',
        ref: 'B13',
        hex: '#ED2041',
      },
      {
        col: '14',
        ref: 'B14',
        hex: '#EB204D',
      },
      {
        col: '15',
        ref: 'B15',
        hex: '#ED1C5E',
      },
      {
        col: '16',
        ref: 'B16',
        hex: '#EC166E',
      },
      {
        col: '17',
        ref: 'B17',
        hex: '#ED0F7C',
      },
      {
        col: '18',
        ref: 'B18',
        hex: '#E90C8D',
      },
      {
        col: '19',
        ref: 'B19',
        hex: '#DB2A92',
      },
      {
        col: '20',
        ref: 'B20',
        hex: '#CD3894',
      },
      {
        col: '21',
        ref: 'B21',
        hex: '#BF3E98',
      },
      {
        col: '22',
        ref: 'B22',
        hex: '#B43D97',
      },
      {
        col: '23',
        ref: 'B23',
        hex: '#A93C97',
      },
      {
        col: '24',
        ref: 'B24',
        hex: '#9E3E97',
      },
      {
        col: '25',
        ref: 'B25',
        hex: '#963D97',
      },
      {
        col: '26',
        ref: 'B26',
        hex: '#8D3D96',
      },
      {
        col: '27',
        ref: 'B27',
        hex: '#843E97',
      },
      {
        col: '28',
        ref: 'B28',
        hex: '#7D3E99',
      },
      {
        col: '29',
        ref: 'B29',
        hex: '#723D97',
      },
      {
        col: '30',
        ref: 'B30',
        hex: '#683B96',
      },
    ],
  },
  {
    row: 'C',
    squares: [
      {
        col: '1',
        ref: 'C1',
        hex: '#A66128',
      },
      {
        col: '2',
        ref: 'C2',
        hex: '#AC5B26',
      },
      {
        col: '3',
        ref: 'C3',
        hex: '#BA5A27',
      },
      {
        col: '4',
        ref: 'C4',
        hex: '#C24E27',
      },
      { col: '5', ref: 'C5', hex: '#CD4827' },
      {
        col: '6',
        ref: 'C6',
        hex: '#D64027',
      },
      {
        col: '7',
        ref: 'C7',
        hex: '#E23926',
      },
      {
        col: '8',
        ref: 'C8',
        hex: '#E83024',
      },
      {
        col: '9',
        ref: 'C9',
        hex: '#EE362C',
      },
      {
        col: '10',
        ref: 'C10',
        hex: '#EF3C40',
      },
      {
        col: '11',
        ref: 'C11',
        hex: '#EF3F4C',
      },
      {
        col: '12',
        ref: 'C12',
        hex: '#EE3B51',
      },
      {
        col: '13',
        ref: 'C13',
        hex: '#EE3A5D',
      },
      {
        col: '14',
        ref: 'C14',
        hex: '#EE3167',
      },
      {
        col: '15',
        ref: 'C15',
        hex: '#EE3078',
      },
      {
        col: '16',
        ref: 'C16',
        hex: '#EE2B87',
      },
      {
        col: '17',
        ref: 'C17',
        hex: '#EB3196',
      },
      {
        col: '18',
        ref: 'C18',
        hex: '#DB4398',
      },
      {
        col: '19',
        ref: 'C19',
        hex: '#CA499B',
      },
      {
        col: '20',
        ref: 'C20',
        hex: '#BB4B9D',
      },
      {
        col: '21',
        ref: 'C21',
        hex: '#B4499B',
      },
      {
        col: '22',
        ref: 'C22',
        hex: '#A64799',
      },
      {
        col: '23',
        ref: 'C23',
        hex: '#9E4599',
      },
      {
        col: '24',
        ref: 'C24',
        hex: '#954398',
      },
      {
        col: '25',
        ref: 'C25',
        hex: '#8C4299',
      },
      {
        col: '26',
        ref: 'C26',
        hex: '#843E97',
      },
      {
        col: '27',
        ref: 'C27',
        hex: '#793D97',
      },
      {
        col: '28',
        ref: 'C28',
        hex: '#733C97',
      },
      {
        col: '29',
        ref: 'C29',
        hex: '#663996',
      },
      {
        col: '30',
        ref: 'C30',
        hex: '#5A3191',
      },
    ],
  },
  {
    row: 'D',
    squares: [
      {
        col: '1',
        ref: 'D1',
        hex: '#C9822A',
      },
      {
        col: '2',
        ref: 'D2',
        hex: '#D78228',
      },
      {
        col: '3',
        ref: 'D3',
        hex: '#DD7627',
      },
      {
        col: '4',
        ref: 'D4',
        hex: '#E87824',
      },
      { col: '5', ref: 'D5', hex: '#E66926' },
      {
        col: '6',
        ref: 'D6',
        hex: '#EA5D25',
      },
      {
        col: '7',
        ref: 'D7',
        hex: '#F1602B',
      },
      {
        col: '8',
        ref: 'D8',
        hex: '#EF5533',
      },
      {
        col: '9',
        ref: 'D9',
        hex: '#F04F3D',
      },
      {
        col: '10',
        ref: 'D10',
        hex: '#EF5651',
      },
      {
        col: '11',
        ref: 'D11',
        hex: '#F05D65',
      },
      {
        col: '12',
        ref: 'D12',
        hex: '#F05E6B',
      },
      {
        col: '13',
        ref: 'D13',
        hex: '#EE5871',
      },
      {
        col: '14',
        ref: 'D14',
        hex: '#F0537E',
      },
      {
        col: '15',
        ref: 'D15',
        hex: '#EF4F8B',
      },
      {
        col: '16',
        ref: 'D16',
        hex: '#F04F9D',
      },
      {
        col: '17',
        ref: 'D17',
        hex: '#DF55A0',
      },
      {
        col: '18',
        ref: 'D18',
        hex: '#CD57A1',
      },
      {
        col: '19',
        ref: 'D19',
        hex: '#BE5EA5',
      },
      {
        col: '20',
        ref: 'D20',
        hex: '#B658A2',
      },
      {
        col: '21',
        ref: 'D21',
        hex: '#A554A1',
      },
      {
        col: '22',
        ref: 'D22',
        hex: '#9B4E9E',
      },
      {
        col: '23',
        ref: 'D23',
        hex: '#944C9E',
      },
      {
        col: '24',
        ref: 'D24',
        hex: '#8D499E',
      },
      {
        col: '25',
        ref: 'D25',
        hex: '#82449A',
      },
      {
        col: '26',
        ref: 'D26',
        hex: '#7B4198',
      },
      {
        col: '27',
        ref: 'D27',
        hex: '#6F3E99',
      },
      {
        col: '28',
        ref: 'D28',
        hex: '#663795',
      },
      {
        col: '29',
        ref: 'D29',
        hex: '#583393',
      },
      {
        col: '30',
        ref: 'D30',
        hex: '#472E8A',
      },
    ],
  },
  {
    row: 'E',
    squares: [
      {
        col: '1',
        ref: 'E1',
        hex: '#E69C23',
      },
      {
        col: '2',
        ref: 'E2',
        hex: '#F1991E',
      },
      {
        col: '3',
        ref: 'E3',
        hex: '#F7921C',
      },
      {
        col: '4',
        ref: 'E4',
        hex: '#F68C1E',
      },
      { col: '5', ref: 'E5', hex: '#F68525' },
      {
        col: '6',
        ref: 'E6',
        hex: '#F4782E',
      },
      {
        col: '7',
        ref: 'E7',
        hex: '#F4773D',
      },
      {
        col: '8',
        ref: 'E8',
        hex: '#F36E45',
      },
      {
        col: '9',
        ref: 'E9',
        hex: '#F37052',
      },
      {
        col: '10',
        ref: 'E10',
        hex: '#F27767',
      },
      {
        col: '11',
        ref: 'E11',
        hex: '#F37674',
      },
      {
        col: '12',
        ref: 'E12',
        hex: '#F37781',
      },
      {
        col: '13',
        ref: 'E13',
        hex: '#F27789',
      },
      {
        col: '14',
        ref: 'E14',
        hex: '#F27094',
      },
      {
        col: '15',
        ref: 'E15',
        hex: '#F069A4',
      },
      {
        col: '16',
        ref: 'E16',
        hex: '#E76FAC',
      },
      {
        col: '17',
        ref: 'E17',
        hex: '#D371AC',
      },
      {
        col: '18',
        ref: 'E18',
        hex: '#C771AE',
      },
      {
        col: '19',
        ref: 'E19',
        hex: '#BB71AE',
      },
      {
        col: '20',
        ref: 'E20',
        hex: '#AC67AA',
      },
      {
        col: '21',
        ref: 'E21',
        hex: '#9E5FA6',
      },
      {
        col: '22',
        ref: 'E22',
        hex: '#9359A5',
      },
      {
        col: '23',
        ref: 'E23',
        hex: '#8D54A3',
      },
      {
        col: '24',
        ref: 'E24',
        hex: '#8451A0',
      },
      {
        col: '25',
        ref: 'E25',
        hex: '#7A489D',
      },
      {
        col: '26',
        ref: 'E26',
        hex: '#6F459B',
      },
      {
        col: '27',
        ref: 'E27',
        hex: '#623E98',
      },
      {
        col: '28',
        ref: 'E28',
        hex: '#583393',
      },
      {
        col: '29',
        ref: 'E29',
        hex: '#492E8F',
      },
      {
        col: '30',
        ref: 'E30',
        hex: '#342B84',
      },
    ],
  },
  {
    row: 'F',
    squares: [
      {
        col: '1',
        ref: 'F1',
        hex: '#FEB415',
      },
      {
        col: '2',
        ref: 'F2',
        hex: '#FCB122',
      },
      {
        col: '3',
        ref: 'F3',
        hex: '#FAAB2C',
      },
      {
        col: '4',
        ref: 'F4',
        hex: '#FBAB3A',
      },
      { col: '5', ref: 'F5', hex: '#FAA741' },
      {
        col: '6',
        ref: 'F6',
        hex: '#F9A34C',
      },
      {
        col: '7',
        ref: 'F7',
        hex: '#F69755',
      },
      {
        col: '8',
        ref: 'F8',
        hex: '#F58F5E',
      },
      {
        col: '9',
        ref: 'F9',
        hex: '#F48864',
      },
      {
        col: '10',
        ref: 'F10',
        hex: '#F58873',
      },
      {
        col: '11',
        ref: 'F11',
        hex: '#F58F83',
      },
      {
        col: '12',
        ref: 'F12',
        hex: '#F38F8F',
      },
      {
        col: '13',
        ref: 'F13',
        hex: '#F48E99',
      },
      {
        col: '14',
        ref: 'F14',
        hex: '#F48CA3',
      },
      {
        col: '15',
        ref: 'F15',
        hex: '#F287B5',
      },
      {
        col: '16',
        ref: 'F16',
        hex: '#E08DBB',
      },
      {
        col: '17',
        ref: 'F17',
        hex: '#D18BBD',
      },
      {
        col: '18',
        ref: 'F18',
        hex: '#C68CBE',
      },
      {
        col: '19',
        ref: 'F19',
        hex: '#B982B9',
      },
      {
        col: '20',
        ref: 'F20',
        hex: '#AA7AB6',
      },
      {
        col: '21',
        ref: 'F21',
        hex: '#9C74B3',
      },
      {
        col: '22',
        ref: 'F22',
        hex: '#9067AB',
      },
      {
        col: '23',
        ref: 'F23',
        hex: '#865EA7',
      },
      {
        col: '24',
        ref: 'F24',
        hex: '#7B59A6',
      },
      {
        col: '25',
        ref: 'F25',
        hex: '#7251A2',
      },
      {
        col: '26',
        ref: 'F26',
        hex: '#634A9E',
      },
      {
        col: '27',
        ref: 'F27',
        hex: '#5A429A',
      },
      {
        col: '28',
        ref: 'F28',
        hex: '#4C3293',
      },
      {
        col: '29',
        ref: 'F29',
        hex: '#392F8F',
      },
      {
        col: '30',
        ref: 'F30',
        hex: '#2C2978',
      },
    ],
  },
  {
    row: 'G',
    squares: [
      {
        col: '1',
        ref: 'G1',
        hex: '#FDC113',
      },
      {
        col: '2',
        ref: 'G2',
        hex: '#FDC029',
      },
      {
        col: '3',
        ref: 'G3',
        hex: '#FCB72C',
      },
      {
        col: '4',
        ref: 'G4',
        hex: '#FCB43B',
      },
      { col: '5', ref: 'G5', hex: '#FCB95E' },
      {
        col: '6',
        ref: 'G6',
        hex: '#F8AC56',
      },
      {
        col: '7',
        ref: 'G7',
        hex: '#FAAA63',
      },
      {
        col: '8',
        ref: 'G8',
        hex: '#F9A26D',
      },
      {
        col: '9',
        ref: 'G9',
        hex: '#F7A279',
      },
      {
        col: '10',
        ref: 'G10',
        hex: '#F7A085',
      },
      {
        col: '11',
        ref: 'G11',
        hex: '#F69E94',
      },
      {
        col: '12',
        ref: 'G12',
        hex: '#F69D99',
      },
      {
        col: '13',
        ref: 'G13',
        hex: '#F59EA6',
      },
      {
        col: '14',
        ref: 'G14',
        hex: '#F69BAA',
      },
      {
        col: '15',
        ref: 'G15',
        hex: '#F39DC2',
      },
      {
        col: '16',
        ref: 'G16',
        hex: '#E1A5CB',
      },
      {
        col: '17',
        ref: 'G17',
        hex: '#D0A6CC',
      },
      {
        col: '18',
        ref: 'G18',
        hex: '#CDADD2',
      },
      {
        col: '19',
        ref: 'G19',
        hex: '#B898C7',
      },
      {
        col: '20',
        ref: 'G20',
        hex: '#A88BC1',
      },
      {
        col: '21',
        ref: 'G21',
        hex: '#9A82BC',
      },
      {
        col: '22',
        ref: 'G22',
        hex: '#9A82BC',
      },
      {
        col: '23',
        ref: 'G23',
        hex: '#7F6EB2',
      },
      {
        col: '24',
        ref: 'G24',
        hex: '#7265AD',
      },
      {
        col: '25',
        ref: 'G25',
        hex: '#675CA8',
      },
      {
        col: '26',
        ref: 'G26',
        hex: '#5954A4',
      },
      {
        col: '27',
        ref: 'G27',
        hex: '#4F4BA0',
      },
      {
        col: '28',
        ref: 'G28',
        hex: '#44419A',
      },
      {
        col: '29',
        ref: 'G29',
        hex: '#313694',
      },
      {
        col: '30',
        ref: 'G30',
        hex: '#2B2F86',
      },
    ],
  },
  {
    row: 'H',
    squares: [
      {
        col: '1',
        ref: 'H1',
        hex: '#FCD017',
      },
      {
        col: '2',
        ref: 'H2',
        hex: '#FECD2A',
      },
      {
        col: '3',
        ref: 'H3',
        hex: '#FFC82F',
      },
      {
        col: '4',
        ref: 'H4',
        hex: '#FDC740',
      },
      { col: '5', ref: 'H5', hex: '#FEC64B' },
      {
        col: '6',
        ref: 'H6',
        hex: '#FDBF58',
      },
      {
        col: '7',
        ref: 'H7',
        hex: '#FDBC60',
      },
      {
        col: '8',
        ref: 'H8',
        hex: '#FCB96B',
      },
      {
        col: '9',
        ref: 'H9',
        hex: '#FBB379',
      },
      {
        col: '10',
        ref: 'H10',
        hex: '#FAB083',
      },
      {
        col: '11',
        ref: 'H11',
        hex: '#F9AE8E',
      },
      {
        col: '12',
        ref: 'H12',
        hex: '#F9B29E',
      },
      {
        col: '13',
        ref: 'H13',
        hex: '#F5B6AD',
      },
      {
        col: '14',
        ref: 'H14',
        hex: '#F3B6B5',
      },
      {
        col: '15',
        ref: 'H15',
        hex: '#ECB5C8',
      },
      {
        col: '16',
        ref: 'H16',
        hex: '#D8B7D6',
      },
      {
        col: '17',
        ref: 'H17',
        hex: '#CDB8D9',
      },
      {
        col: '18',
        ref: 'H18',
        hex: '#CCBDDC',
      },
      {
        col: '19',
        ref: 'H19',
        hex: '#B4A9D3',
      },
      {
        col: '20',
        ref: 'H20',
        hex: '#A79FCE',
      },
      {
        col: '21',
        ref: 'H21',
        hex: '#9794C9',
      },
      {
        col: '22',
        ref: 'H22',
        hex: '#8388C2',
      },
      {
        col: '23',
        ref: 'H23',
        hex: '#757DBC',
      },
      {
        col: '24',
        ref: 'H24',
        hex: '#6A75B7',
      },
      {
        col: '25',
        ref: 'H25',
        hex: '#5C6AB1',
      },
      {
        col: '26',
        ref: 'H26',
        hex: '#5161AE',
      },
      {
        col: '27',
        ref: 'H27',
        hex: '#4859A7',
      },
      {
        col: '28',
        ref: 'H28',
        hex: '#3E4FA1',
      },
      {
        col: '29',
        ref: 'H29',
        hex: '#2F449D',
      },
      {
        col: '30',
        ref: 'H30',
        hex: '#253A97',
      },
    ],
  },
  {
    row: 'I',
    squares: [
      {
        col: '1',
        ref: 'I1',
        hex: '#FCE118',
      },
      {
        col: '2',
        ref: 'I2',
        hex: '#FCDC27',
      },
      {
        col: '3',
        ref: 'I3',
        hex: '#FCD933',
      },
      {
        col: '4',
        ref: 'I4',
        hex: '#FCD842',
      },
      { col: '5', ref: 'I5', hex: '#FCDE4C' },
      {
        col: '6',
        ref: 'I6',
        hex: '#FED859',
      },
      {
        col: '7',
        ref: 'I7',
        hex: '#FDDB60',
      },
      {
        col: '8',
        ref: 'I8',
        hex: '#FBD66B',
      },
      {
        col: '9',
        ref: 'I9',
        hex: '#F5DB7C',
      },
      {
        col: '10',
        ref: 'I10',
        hex: '#F1E092',
      },
      {
        col: '11',
        ref: 'I11',
        hex: '#ECDC9E',
      },
      {
        col: '12',
        ref: 'I12',
        hex: '#E8E1B3',
      },
      {
        col: '13',
        ref: 'I13',
        hex: '#E1E0C2',
      },
      {
        col: '14',
        ref: 'I14',
        hex: '#DCE1CB',
      },
      {
        col: '15',
        ref: 'I15',
        hex: '#D2E0D3',
      },
      {
        col: '16',
        ref: 'I16',
        hex: '#C6DDE3',
      },
      {
        col: '17',
        ref: 'I17',
        hex: '#C1D9F1',
      },
      {
        col: '18',
        ref: 'I18',
        hex: '#C0D8F0',
      },
      {
        col: '19',
        ref: 'I19',
        hex: '#A7C8E9',
      },
      {
        col: '20',
        ref: 'I20',
        hex: '#99B9E0',
      },
      {
        col: '21',
        ref: 'I21',
        hex: '#8AAAD9',
      },
      {
        col: '22',
        ref: 'I22',
        hex: '#7AA2D6',
      },
      {
        col: '23',
        ref: 'I23',
        hex: '#7093CB',
      },
      {
        col: '24',
        ref: 'I24',
        hex: '#6686C3',
      },
      {
        col: '25',
        ref: 'I25',
        hex: '#5679BB',
      },
      {
        col: '26',
        ref: 'I26',
        hex: '#4C6CB5',
      },
      {
        col: '27',
        ref: 'I27',
        hex: '#4262AD',
      },
      {
        col: '28',
        ref: 'I28',
        hex: '#3B5BA8',
      },
      {
        col: '29',
        ref: 'I29',
        hex: '#334FA2',
      },
      {
        col: '30',
        ref: 'I30',
        hex: '#27459D',
      },
    ],
  },
  {
    row: 'J',
    squares: [
      {
        col: '1',
        ref: 'J1',
        hex: '#F9EC24',
      },
      {
        col: '2',
        ref: 'J2',
        hex: '#F9EB2A',
      },
      {
        col: '3',
        ref: 'J3',
        hex: '#FAEB36',
      },
      {
        col: '4',
        ref: 'J4',
        hex: '#F9EE46',
      },
      { col: '5', ref: 'J5', hex: '#F9F04D' },
      {
        col: '6',
        ref: 'J6',
        hex: '#F9F25C',
      },
      {
        col: '7',
        ref: 'J7',
        hex: '#F7F06B',
      },
      {
        col: '8',
        ref: 'J8',
        hex: '#EFEE82',
      },
      {
        col: '9',
        ref: 'J9',
        hex: '#E7EB8C',
      },
      {
        col: '10',
        ref: 'J10',
        hex: '#DEE99D',
      },
      {
        col: '11',
        ref: 'J11',
        hex: '#D8E7AC',
      },
      {
        col: '12',
        ref: 'J12',
        hex: '#D3E8BF',
      },
      {
        col: '13',
        ref: 'J13',
        hex: '#D1E8CB',
      },
      {
        col: '14',
        ref: 'J14',
        hex: '#CDE9D3',
      },
      {
        col: '15',
        ref: 'J15',
        hex: '#C7E6D6',
      },
      {
        col: '16',
        ref: 'J16',
        hex: '#BBE5E4',
      },
      {
        col: '17',
        ref: 'J17',
        hex: '#B3E2F2',
      },
      {
        col: '18',
        ref: 'J18',
        hex: '#B2E2F6',
      },
      {
        col: '19',
        ref: 'J19',
        hex: '#9EDCF5',
      },
      {
        col: '20',
        ref: 'J20',
        hex: '#87D6F7',
      },
      {
        col: '21',
        ref: 'J21',
        hex: '#7DC7EE',
      },
      {
        col: '22',
        ref: 'J22',
        hex: '#71B5E4',
      },
      {
        col: '23',
        ref: 'J23',
        hex: '#65A8DC',
      },
      {
        col: '24',
        ref: 'J24',
        hex: '#5C97D1',
      },
      {
        col: '25',
        ref: 'J25',
        hex: '#518BCA',
      },
      {
        col: '26',
        ref: 'J26',
        hex: '#4B7CBF',
      },
      {
        col: '27',
        ref: 'J27',
        hex: '#3F6EB6',
      },
      {
        col: '28',
        ref: 'J28',
        hex: '#3765B0',
      },
      {
        col: '29',
        ref: 'J29',
        hex: '#365BAB',
      },
      {
        col: '30',
        ref: 'J30',
        hex: '#3050A3',
      },
    ],
  },
  {
    row: 'K',
    squares: [
      {
        col: '1',
        ref: 'K1',
        hex: '#F6EF3C',
      },
      {
        col: '2',
        ref: 'K2',
        hex: '#F6EF3F',
      },
      {
        col: '3',
        ref: 'K3',
        hex: '#F5EE46',
      },
      {
        col: '4',
        ref: 'K4',
        hex: '#F4EF4D',
      },
      { col: '5', ref: 'K5', hex: '#F1EC5A' },
      {
        col: '6',
        ref: 'K6',
        hex: '#ECEC68',
      },
      {
        col: '7',
        ref: 'K7',
        hex: '#E6E87A',
      },
      {
        col: '8',
        ref: 'K8',
        hex: '#DFE784',
      },
      {
        col: '9',
        ref: 'K9',
        hex: '#D6E485',
      },
      {
        col: '10',
        ref: 'K10',
        hex: '#C8DF8D',
      },
      {
        col: '11',
        ref: 'K11',
        hex: '#BEDD97',
      },
      {
        col: '12',
        ref: 'K12',
        hex: '#B5DBA2',
      },
      {
        col: '13',
        ref: 'K13',
        hex: '#B4DBAF',
      },
      {
        col: '14',
        ref: 'K14',
        hex: '#B0DAB6',
      },
      {
        col: '15',
        ref: 'K15',
        hex: '#ADDBC1',
      },
      {
        col: '16',
        ref: 'K16',
        hex: '#AEDDD7',
      },
      {
        col: '17',
        ref: 'K17',
        hex: '#AADDDE',
      },
      {
        col: '18',
        ref: 'K18',
        hex: '#A8DDE3',
      },
      {
        col: '19',
        ref: 'K19',
        hex: '#99D8E7',
      },
      {
        col: '20',
        ref: 'K20',
        hex: '#89D7EE',
      },
      {
        col: '21',
        ref: 'K21',
        hex: '#73D1F5',
      },
      {
        col: '22',
        ref: 'K22',
        hex: '#64CBF4',
      },
      {
        col: '23',
        ref: 'K23',
        hex: '#5AAADD',
      },
      {
        col: '24',
        ref: 'K24',
        hex: '#549DD4',
      },
      {
        col: '25',
        ref: 'K25',
        hex: '#4889C9',
      },
      {
        col: '26',
        ref: 'K26',
        hex: '#4889C9',
      },
      {
        col: '27',
        ref: 'K27',
        hex: '#3E7DC0',
      },
      {
        col: '28',
        ref: 'K28',
        hex: '#3B6FB8',
      },
      {
        col: '29',
        ref: 'K29',
        hex: '#3664AF',
      },
      {
        col: '30',
        ref: 'K30',
        hex: '#335CAB',
      },
    ],
  },
  {
    row: 'L',
    squares: [
      {
        col: '1',
        ref: 'L1',
        hex: '#F1EC21',
      },
      {
        col: '2',
        ref: 'L2',
        hex: '#F0EB2D',
      },
      {
        col: '3',
        ref: 'L3',
        hex: '#EBE932',
      },
      {
        col: '4',
        ref: 'L4',
        hex: '#E9E838',
      },
      { col: '5', ref: 'L5', hex: '#E5E643' },
      {
        col: '6',
        ref: 'L6',
        hex: '#DCE453',
      },
      {
        col: '7',
        ref: 'L7',
        hex: '#D0DF60',
      },
      {
        col: '8',
        ref: 'L8',
        hex: '#BFDA67',
      },
      {
        col: '9',
        ref: 'L9',
        hex: '#B1D66D',
      },
      {
        col: '10',
        ref: 'L10',
        hex: '#A8D377',
      },
      {
        col: '11',
        ref: 'L11',
        hex: '#9FD07E',
      },
      {
        col: '12',
        ref: 'L12',
        hex: '#98D089',
      },
      {
        col: '13',
        ref: 'L13',
        hex: '#92CE98',
      },
      {
        col: '14',
        ref: 'L14',
        hex: '#8DCD9B',
      },
      {
        col: '15',
        ref: 'L15',
        hex: '#8ECFA7',
      },
      {
        col: '16',
        ref: 'L16',
        hex: '#8DCFB3',
      },
      {
        col: '17',
        ref: 'L17',
        hex: '#8ED1C0',
      },
      {
        col: '18',
        ref: 'L18',
        hex: '#8BD1C6',
      },
      {
        col: '19',
        ref: 'L19',
        hex: '#84CFCB',
      },
      {
        col: '20',
        ref: 'L20',
        hex: '#7ACDD5',
      },
      {
        col: '21',
        ref: 'L21',
        hex: '#69CADA',
      },
      {
        col: '22',
        ref: 'L22',
        hex: '#56C8E0',
      },
      {
        col: '23',
        ref: 'L23',
        hex: '#3BC6EF',
      },
      {
        col: '24',
        ref: 'L24',
        hex: '#38BAEC',
      },
      {
        col: '25',
        ref: 'L25',
        hex: '#3CA9E1',
      },
      {
        col: '26',
        ref: 'L26',
        hex: '#3B9AD4',
      },
      {
        col: '27',
        ref: 'L27',
        hex: '#4188C8',
      },
      {
        col: '28',
        ref: 'L28',
        hex: '#3879BD',
      },
      {
        col: '29',
        ref: 'L29',
        hex: '#3B6FB8',
      },
      {
        col: '30',
        ref: 'L30',
        hex: '#3465B1',
      },
    ],
  },
  {
    row: 'M',
    squares: [
      {
        col: '1',
        ref: 'M1',
        hex: '#E0E320',
      },
      {
        col: '2',
        ref: 'M2',
        hex: '#DBE127',
      },
      {
        col: '3',
        ref: 'M3',
        hex: '#D6E12F',
      },
      {
        col: '4',
        ref: 'M4',
        hex: '#CFDF37',
      },
      { col: '5', ref: 'M5', hex: '#C8DB43' },
      {
        col: '6',
        ref: 'M6',
        hex: '#BAD645',
      },
      {
        col: '7',
        ref: 'M7',
        hex: '#AED24C',
      },
      {
        col: '8',
        ref: 'M8',
        hex: '#9FCD51',
      },
      {
        col: '9',
        ref: 'M9',
        hex: '#90C958',
      },
      {
        col: '10',
        ref: 'M10',
        hex: '#85C65E',
      },
      {
        col: '11',
        ref: 'M11',
        hex: '#79C469',
      },
      {
        col: '12',
        ref: 'M12',
        hex: '#71C371',
      },
      {
        col: '13',
        ref: 'M13',
        hex: '#70C27A',
      },
      {
        col: '14',
        ref: 'M14',
        hex: '#6DC183',
      },
      {
        col: '15',
        ref: 'M15',
        hex: '#6DC183',
      },
      {
        col: '16',
        ref: 'M16',
        hex: '#70C493',
      },
      {
        col: '17',
        ref: 'M17',
        hex: '#70C59C',
      },
      {
        col: '18',
        ref: 'M18',
        hex: '#73C7A6',
      },
      {
        col: '19',
        ref: 'M19',
        hex: '#75C8AC',
      },
      {
        col: '20',
        ref: 'M20',
        hex: '#6BC6B4',
      },
      {
        col: '21',
        ref: 'M21',
        hex: '#60C6BB',
      },
      {
        col: '22',
        ref: 'M22',
        hex: '#54C4C5',
      },
      {
        col: '23',
        ref: 'M23',
        hex: '#47C3CF',
      },
      {
        col: '24',
        ref: 'M24',
        hex: '#30C2DB',
      },
      {
        col: '25',
        ref: 'M25',
        hex: '#1BBAE4',
      },
      {
        col: '26',
        ref: 'M26',
        hex: '#21AAE1',
      },
      {
        col: '27',
        ref: 'M27',
        hex: '#289CD7',
      },
      {
        col: '28',
        ref: 'M28',
        hex: '#378CCC',
      },
      {
        col: '29',
        ref: 'M29',
        hex: '#317FC1',
      },
      {
        col: '30',
        ref: 'M30',
        hex: '#2C72B8',
      },
    ],
  },
  {
    row: 'N',
    squares: [
      {
        col: '1',
        ref: 'N1',
        hex: '#C2D82D',
      },
      {
        col: '2',
        ref: 'N2',
        hex: '#BDD630',
      },
      {
        col: '3',
        ref: 'N3',
        hex: '#B5D333',
      },
      {
        col: '4',
        ref: 'N4',
        hex: '#ABCF39',
      },
      { col: '5', ref: 'N5', hex: '#A0CC39' },
      {
        col: '6',
        ref: 'N6',
        hex: '#94C93D',
      },
      {
        col: '7',
        ref: 'N7',
        hex: '#81C240',
      },
      {
        col: '8',
        ref: 'N8',
        hex: '#79C143',
      },
      {
        col: '9',
        ref: 'N9',
        hex: '#6DBC45',
      },
      {
        col: '10',
        ref: 'N10',
        hex: '#5DB545',
      },
      {
        col: '11',
        ref: 'N11',
        hex: '#54B34B',
      },
      {
        col: '12',
        ref: 'N12',
        hex: '#4DB254',
      },
      {
        col: '13',
        ref: 'N13',
        hex: '#46B859',
      },
      {
        col: '14',
        ref: 'N14',
        hex: '#49B869',
      },
      {
        col: '15',
        ref: 'N15',
        hex: '#50BB73',
      },
      {
        col: '16',
        ref: 'N16',
        hex: '#57BD7B',
      },
      {
        col: '17',
        ref: 'N17',
        hex: '#59BD7D',
      },
      {
        col: '18',
        ref: 'N18',
        hex: '#5CBF88',
      },
      {
        col: '19',
        ref: 'N19',
        hex: '#5FC08B',
      },
      {
        col: '20',
        ref: 'N20',
        hex: '#60C092',
      },
      {
        col: '21',
        ref: 'N21',
        hex: '#5BC09E',
      },
      {
        col: '22',
        ref: 'N22',
        hex: '#50C2AB',
      },
      {
        col: '23',
        ref: 'N23',
        hex: '#46C0B3',
      },
      {
        col: '24',
        ref: 'N24',
        hex: '#38BFC3',
      },
      {
        col: '25',
        ref: 'N25',
        hex: '#27BFCD',
      },
      {
        col: '26',
        ref: 'N26',
        hex: '#16B9D8',
      },
      {
        col: '27',
        ref: 'N27',
        hex: '#10AEDE',
      },
      {
        col: '28',
        ref: 'N28',
        hex: '#16A5DD',
      },
      {
        col: '29',
        ref: 'N29',
        hex: '#2395D3',
      },
      {
        col: '30',
        ref: 'N30',
        hex: '#2884C7',
      },
    ],
  },
  {
    row: 'O',
    squares: [
      {
        col: '1',
        ref: 'O1',
        hex: '#9EC439',
      },
      {
        col: '2',
        ref: 'O2',
        hex: '#9AC43C',
      },
      {
        col: '3',
        ref: 'O3',
        hex: '#94C23C',
      },
      {
        col: '4',
        ref: 'O4',
        hex: '#88BF40',
      },
      { col: '5', ref: 'O5', hex: '#7EBB42' },
      {
        col: '6',
        ref: 'O6',
        hex: '#6DB343',
      },
      {
        col: '7',
        ref: 'O7',
        hex: '#63B144',
      },
      {
        col: '8',
        ref: 'O8',
        hex: '#54A846',
      },
      {
        col: '9',
        ref: 'O9',
        hex: '#4FA647',
      },
      {
        col: '10',
        ref: 'O10',
        hex: '#409E46',
      },
      {
        col: '11',
        ref: 'O11',
        hex: '#359D48',
      },
      {
        col: '12',
        ref: 'O12',
        hex: '#30A348',
      },
      {
        col: '13',
        ref: 'O13',
        hex: '#2AAA4B',
      },
      {
        col: '14',
        ref: 'O14',
        hex: '#2AB14B',
      },
      {
        col: '15',
        ref: 'O15',
        hex: '#31B454',
      },
      {
        col: '16',
        ref: 'O16',
        hex: '#37B65D',
      },
      {
        col: '17',
        ref: 'O17',
        hex: '#42B864',
      },
      {
        col: '18',
        ref: 'O18',
        hex: '#48B86E',
      },
      {
        col: '19',
        ref: 'O19',
        hex: '#48BA72',
      },
      {
        col: '20',
        ref: 'O20',
        hex: '#51BC76',
      },
      {
        col: '21',
        ref: 'O21',
        hex: '#52BD85',
      },
      {
        col: '22',
        ref: 'O22',
        hex: '#49BD90',
      },
      {
        col: '23',
        ref: 'O23',
        hex: '#45BE9F',
      },
      {
        col: '24',
        ref: 'O24',
        hex: '#39BEA9',
      },
      {
        col: '25',
        ref: 'O25',
        hex: '#2EBDB7',
      },
      {
        col: '26',
        ref: 'O26',
        hex: '#28BFC6',
      },
      {
        col: '27',
        ref: 'O27',
        hex: '#1BBDD2',
      },
      {
        col: '28',
        ref: 'O28',
        hex: '#0EB3D3',
      },
      {
        col: '29',
        ref: 'O29',
        hex: '#0EA8DA',
      },
      {
        col: '30',
        ref: 'O30',
        hex: '#179FDB',
      },
    ],
  },
  {
    row: 'P',
    squares: [
      {
        col: '1',
        ref: 'P1',
        hex: '#7BA541',
      },
      {
        col: '2',
        ref: 'P2',
        hex: '#76A940',
      },
      {
        col: '3',
        ref: 'P3',
        hex: '#6FA744',
      },
      {
        col: '4',
        ref: 'P4',
        hex: '#65A243',
      },
      { col: '5', ref: 'P5', hex: '#59A445' },
      {
        col: '6',
        ref: 'P6',
        hex: '#4C9F45',
      },
      {
        col: '7',
        ref: 'P7',
        hex: '#439845',
      },
      {
        col: '8',
        ref: 'P8',
        hex: '#399645',
      },
      {
        col: '9',
        ref: 'P9',
        hex: '#299144',
      },
      {
        col: '10',
        ref: 'P10',
        hex: '#1E8943',
      },
      {
        col: '11',
        ref: 'P11',
        hex: '#198B43',
      },
      {
        col: '12',
        ref: 'P12',
        hex: '#149145',
      },
      {
        col: '13',
        ref: 'P13',
        hex: '#159A47',
      },
      {
        col: '14',
        ref: 'P14',
        hex: '#18A149',
      },
      {
        col: '15',
        ref: 'P15',
        hex: '#1BAB4A',
      },
      {
        col: '16',
        ref: 'P16',
        hex: '#22B04C',
      },
      {
        col: '17',
        ref: 'P17',
        hex: '#2CB34C',
      },
      {
        col: '18',
        ref: 'P18',
        hex: '#33B555',
      },
      {
        col: '19',
        ref: 'P19',
        hex: '#3AB65E',
      },
      {
        col: '20',
        ref: 'P20',
        hex: '#3EB865',
      },
      {
        col: '21',
        ref: 'P21',
        hex: '#3FB970',
      },
      {
        col: '22',
        ref: 'P22',
        hex: '#39B97C',
      },
      {
        col: '23',
        ref: 'P23',
        hex: '#32BA8A',
      },
      {
        col: '24',
        ref: 'P24',
        hex: '#2CB996',
      },
      {
        col: '25',
        ref: 'P25',
        hex: '#21BBA1',
      },
      {
        col: '26',
        ref: 'P26',
        hex: '#1CBAAC',
      },
      {
        col: '27',
        ref: 'P27',
        hex: '#18BCBD',
      },
      {
        col: '28',
        ref: 'P28',
        hex: '#14BCC7',
      },
      {
        col: '29',
        ref: 'P29',
        hex: '#10B7D7',
      },
      {
        col: '30',
        ref: 'P30',
        hex: '#0FB1E2',
      },
    ],
  },
];
