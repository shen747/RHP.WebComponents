import React from 'react';
import { Dialog, DialogProps } from '../Dialog';
import { ProgressLinear } from '../ProgressLinear';

export interface ProgressDialogProps extends Omit<DialogProps, 'actions'> {
  value?: number;
  indeterminate?: boolean;
}

export const ProgressDialog: React.FC<ProgressDialogProps> = ({ value, indeterminate, children, ...rest }) => {
  return (
    <Dialog {...rest} actions={null}>
      <div style={{ minWidth: 300 }}>
        <ProgressLinear value={value} indeterminate={indeterminate} />
        {children}
      </div>
    </Dialog>
  );
};

export default ProgressDialog;

