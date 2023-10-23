export enum CmdKey {
  Enter = 'Enter',
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
}

export interface KeyEvent {
  code: string;
  inputValue: string;
}
