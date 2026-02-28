import assert from 'node:assert';
import leibniz from '../../etc/leibniz.mjs';

const EPSILON = 1e-5;

assert.ok(Math.abs(leibniz() * 4 - Math.PI) < EPSILON);