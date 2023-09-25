// YourComponent.stories.ts
import Button from '@/components/Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

/* Шаблон кнопки с помощью render функции */
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />', /* args - это те параметры, которые будем передвать в компонент кнопки, например цвет */
  }),
  args: {
    //👇 The args you need here will depend on your component
    label: 'Сохранить',
    filled: true,
    icon: 'heart'
  },
};
