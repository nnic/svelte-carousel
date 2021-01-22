import Arrow from './Arrow.svelte';

export default {
  title: 'Arrow',
  component: Arrow,
  argTypes: {
    onClick: { action: 'onClick' }
  }
};

const Template = ({ onClick, ...args }) => ({
  Component: Arrow,
  props: args,
  on: {
    click: onClick,
  },
});

export const Primary = Template.bind({});
