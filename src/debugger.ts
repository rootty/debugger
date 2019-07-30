// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { IDisposable } from '@phosphor/disposable';

import { SplitPanel } from '@phosphor/widgets';

import { IDebugger } from './tokens';
import VariablesWidget from './variables/variables-widget';

export class Debugger extends SplitPanel implements IDebugger {
  readonly variables: VariablesWidget = new VariablesWidget();

  constructor(options: SplitPanel.IOptions = {}) {
    super(options);

    const label = 'Environment';
    this.id = 'jp-debugger';
    this.title.label = label;
    this.addClass('jp-Debugger');

    this.addWidget(this.variables);
  }

  readonly model = new Debugger.Model();

  get session(): IDebugger.ISession | null {
    return this.model.session;
  }
  set session(session: IDebugger.ISession | null) {
    this.model.session = session;
  }
}

/**
 * A namespace for `Debugger` statics.
 */
export namespace Debugger {
  export class Model implements IDisposable {
    isDisposed = false;

    get session(): IDebugger.ISession | null {
      return this._session;
    }
    set session(session: IDebugger.ISession | null) {
      this._session = session;
    }

    dispose = (): void => undefined;

    private _session: IDebugger.ISession | null = null;
  }
}
