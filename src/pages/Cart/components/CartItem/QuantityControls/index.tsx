import React from 'react';
import { Button } from '@chakra-ui/core';
import styles from './QuantityControls.module.css';

type QuantityControlProps = {
  onIncrement: (e: React.MouseEvent<HTMLElement>) => void;
  onDecrement: (e: React.MouseEvent<HTMLElement>) => void;
  value: number;
  isDisabled: boolean;
};

const buttonStyle = {
  width: '1.5em',
  height: '1.5em',
  fontSize: '1.2em',
};

const QuantityControl: React.FC<QuantityControlProps> = ({
  onIncrement,
  onDecrement,
  value,
  isDisabled,
}) => {
  return (
    <div className={styles.quantity_control_container}>
      <Button onClick={onIncrement} style={buttonStyle} isDisabled={isDisabled}>
        +
      </Button>
      <div>{value}</div>
      <Button onClick={onDecrement} style={buttonStyle} isDisabled={isDisabled}>
        -
      </Button>
    </div>
  );
};

export default QuantityControl;
