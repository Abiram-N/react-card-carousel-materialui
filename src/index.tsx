import * as React from 'react';
import { ReactCardCarousel } from './ReactCardCarousel';

export const CardCarousel = ({ open = false, onClose = () => { }, items = [] }) => {
  return <ReactCardCarousel open={open} onClose={onClose} items={items} />;
};