import { BTooltip } from './tooltip';
import { VBTooltip } from '../../directives/tooltip/tooltip';
import { pluginFactory } from '../../utils/plugins';
var TooltipPlugin =
/*#__PURE__*/
pluginFactory({
  components: {
    BTooltip: BTooltip
  },
  directives: {
    VBTooltip: VBTooltip
  }
});
export { TooltipPlugin, BTooltip };
export default TooltipPlugin;