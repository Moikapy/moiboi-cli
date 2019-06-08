import addCommand from './add'
import authorsCommand from './authors'
import cloneCommand from './clone';
import homeCommand from './home';
import listCommand from './list'
import removeCommand from './remove'
export default {
  add: addCommand,
  authors: authorsCommand,
  clone: cloneCommand,
  home: homeCommand,
  list: listCommand,
  remove: removeCommand,
  reset: require('./reset'),
  search: require('./search'),
}

