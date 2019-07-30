import { Widget } from '@phosphor/widgets';

export const SCOPE_SELECT_CLASS = 'ride-environment-scope';
const DEFAULT_SCOPE = '--';

export default class ScopeSelect extends Widget {
  constructor() {
    super({ node: ScopeSelect.createNode() });
  }

  static createNode(): HTMLElement {
    const options = document.createElement('div');

    options.title = 'Scopes';
    options.className = `${SCOPE_SELECT_CLASS}`;

    const label = document.createElement('span');
    label.className = 'ride-environment-scope-label';
    label.textContent = DEFAULT_SCOPE;
    options.appendChild(label);

    const dropDown = document.createElement('span');
    dropDown.className = 'fa fa-caret-down';
    options.appendChild(dropDown);
    return options;
  }
}
