/**
 * SSR safe types
 */
import { hasWindowSupport } from './env';
var w = hasWindowSupport ? window : {};
export var HTMLElement = w.HTMLElement || Object;