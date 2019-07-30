import { Panel, Widget } from '@phosphor/widgets';

export default class VariablesHeader extends Panel {
  constructor() {
    super();
    this.addClass('debugger-variables__header');
    const headerLabel = new Widget();
    headerLabel.addClass('debugger-variables__header-label');
    headerLabel.node.textContent = 'Variables';
    this.addWidget(headerLabel);
  }
}
