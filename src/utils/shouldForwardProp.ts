import { props } from '@styled-system/should-forward-prop';

const GAP_STYLE_PROP_LIST = ['gap', 'rowGap', 'columnGap'];

const toRemoveProps = [...props, ...GAP_STYLE_PROP_LIST]; // You can add whatever prop you like here

const regex = new RegExp(`^(${toRemoveProps.join('|')})$`);

const shouldForwardProp = (prop: string) => {
  return !regex.test(prop);
};

export default shouldForwardProp;
