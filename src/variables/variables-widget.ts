import { Panel, SplitPanel } from '@phosphor/widgets';
import VariablesHeader from './header';
import VariablesToolbar from './toolbar/variables-toolbar';

export default class VariablesWidget extends SplitPanel {
  readonly variablesHeader: Panel = VariablesWidget.getHeader();
  readonly variablesBody: Panel = VariablesWidget.getBody();

  constructor() {
    super({ orientation: 'vertical' });
    this.addWidget(this.variablesHeader);
    this.addWidget(this.variablesBody);
  }

  static getHeader() {
    return new VariablesHeader();
  }

  static getBody() {
    const body = new Panel();
    body.id = 'variables-body';
    body.addClass('debugger-variables__body');
    body.addWidget(new VariablesToolbar());
    return body;
  }
}
