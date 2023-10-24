import { Component, OnInit, Renderer2 } from '@angular/core';

const DARK_MODE_KEY = 'aws-links-dark-mode';
const DARK_MODE_CLASS = 'dark';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setDarkMode();
  }

  public onThemeBtnClick(): void {
    const currentMode = this.isDarkMode();
    this.saveDarkMode(!currentMode);
    this.setDarkMode();
  }

  private setDarkMode(): void {
    if (this.isDarkMode()) {
      this.renderer.addClass(document.body, DARK_MODE_CLASS);
    } else {
      this.renderer.removeClass(document.body, DARK_MODE_CLASS);
    }
  }

  private isDarkMode(): boolean {
    return localStorage.getItem(DARK_MODE_KEY) === 'true';
  }

  private saveDarkMode(darkMode: boolean): void {
    localStorage.setItem(DARK_MODE_KEY, darkMode.toString());
  }
}
