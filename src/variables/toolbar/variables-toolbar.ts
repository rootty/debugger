import { Toolbar } from '@jupyterlab/apputils';
import { Widget } from '@phosphor/widgets';
import ScopeSelect from './scope-select';

export default class VariablesToolbar extends Toolbar<Widget> {
  protected readonly scopeSelect = new ScopeSelect();
  protected readonly searchInput = new Widget();
  protected readonly options = new Widget();

  constructor() {
    super();
    this.addItem('scopeSelect', this.scopeSelect);
    this.addItem('search', this.searchInput);
    this.addItem('options', this.options);
  }
}
