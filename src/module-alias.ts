import 'module-alias/register';
import path from 'path';

require('module-alias').addAliases({
  '@models': path.join(__dirname, 'models'),
  '@config': path.join(__dirname, 'config'),
  '@modules': path.join(__dirname, 'modules')
});