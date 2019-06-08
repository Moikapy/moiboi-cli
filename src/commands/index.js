import addCommand from './add'
import authorsCommand from './authors'
import cloneCommand from './clone';
import homeCommand from './home';
import listCommand from './list'
export default {
  add: addCommand,
  authors: authorsCommand,
  clone: cloneCommand,
  home: homeCommand,
  list: listCommand,
  remove: require('./remove'),
  reset: require('./reset'),
  search: require('./search'),
}

