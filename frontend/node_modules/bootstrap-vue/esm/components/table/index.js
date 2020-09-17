import { BTable } from './table';
import { BTableLite } from './table-lite';
import { pluginFactory } from '../../utils/plugins';
var TablePlugin =
/*#__PURE__*/
pluginFactory({
  components: {
    BTable: BTable,
    BTableLite: BTableLite
  }
});
export { TablePlugin, BTable, BTableLite };
export default TablePlugin;