import React from 'react';
import { Dialog, DialogProps } from '../Dialog';

export interface ModalProps extends Omit<DialogProps, 'role'> {}

export const Modal: React.FC<ModalProps> = (props) => {
  return <Dialog {...props} />;
};

export default Modal;

