import React from 'react';
import { matches } from '../test-utils';
import Button from './Button';

describe('Button', () => {
  it('matches snapshot', () => {
    matches(<Button>Submit</Button>);
  });
});