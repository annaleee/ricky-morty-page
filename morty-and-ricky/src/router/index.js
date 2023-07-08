import Character from '../component/Character';
import React from 'react';
import Content from '../component/Content';

const routes = [
  {
    path: "/",
    element: <Content />,
  },
  {
    path: "/character/:id",
    element: <Character />,
  },
    //   {
    //     path: "*",
    //     element: <NotFound />,
    //   },
];

export default routes;