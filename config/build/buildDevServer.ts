import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfuguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfuguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
}
