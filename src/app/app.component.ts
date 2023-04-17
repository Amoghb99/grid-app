import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cells: any = new Array(64).fill(0);
  selectedCell: number | null = null;

  onCellClick(index: number): void {
    this.selectedCell = index;
  }

  isBlackCell(index: number): boolean {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 === 0;
  }

  isWhiteCell(index: number): boolean {
    return !this.isBlackCell(index);
  }

}
