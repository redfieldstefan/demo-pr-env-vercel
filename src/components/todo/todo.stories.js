import React from 'react';
import Todo from './todo';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Todo',
  component: Todo,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Todo {...args} />;

const mockTodo = {
  id: 1,
  title: "Mock Todo",
  due: {
    "readable": "Wed Apr 27th 5:51 pm",
    "date": 1651107098809
  },
  complete: false
}

export const Basic = () => {
  return (
    <Todo {...mockTodo} />
  );
};
