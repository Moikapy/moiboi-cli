import addCommand from './add'
import authorsCommand from './authors'
import cloneCommand from './clone';
import homeCommand from './home';
export default {
  add: addCommand,
  authors: authorsCommand,
  clone: cloneCommand,
  home: homeCommand,
  list: require('./list'),
  remove: require('./remove'),
  reset: require('./reset'),
  search: require('./search'),
}

