import { props } from '@styled-system/should-forward-prop';

const toRemoveProps = [...props]; // You can add whatever prop you like here

const regex = new RegExp(`^(${toRemoveProps.join('|')})$`);

const shouldForwardProp = (prop: string) => {
  return !regex.test(prop);
};

export default shouldForwardProp;
