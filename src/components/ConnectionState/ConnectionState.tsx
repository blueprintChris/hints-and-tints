import React from 'react';

const ConnectionState = ({ isConnected }: Props) => {
  console.log(isConnected);
  return <p>State: {` ${isConnected}`}</p>;
};

type Props = {
  isConnected: boolean;
};
export default ConnectionState;
