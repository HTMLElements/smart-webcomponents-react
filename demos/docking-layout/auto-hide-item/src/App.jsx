import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dockinglayout', { static: false }) dockinglayout!: DockingLayoutComponent;
  @ViewChild('dropdownlist', { static: false }) dropdownlist!: DropDownListComponent;

  layout = [
    {
      type: 'LayoutGroup',
      orientation: 'horizontal',
      items: [
        {
          type: 'LayoutPanel',
          label: 'Window A',
          items: [
            {
              id: 'itemA',
              label: '#itemA',
              content: 'Content of item with id "itemA"',
              selected: true
            }
          ]
        },
        {
          type: 'LayoutGroup',
          id: 'verticalGroup',
          orientation: 'vertical',
          items: [
            {
              type: 'LayoutPanel',
              label: 'Window B',
              items: [
                {
                  id: 'itemB',
                  label: '#itemB',
                  content: 'Content of item with id "itemB"'
                }
              ]
            },
            {
              type: 'LayoutPanel',
              label: 'Window C',
              items: [
                {
                  id: 'itemC',
                  label: '#itemC',
                  content: 'Content of item with id "itemC"'
                }
              ]
            }
          ]
        },
        {
          type: 'LayoutPanel',
          label: 'Window D',
          items: [
            {
              id: 'itemD',
              label: '#itemD',
              content: 'Content of item with id "itemD"'
            }
          ]
        }
      ]
    }
  ];

  ngAfterViewInit(): void {
    // Called after view is initialized
  }

  get selectedItem(): string {
    return this.dropdownlist?.selectedValues?.[0] ?? '';
  }

  autoHide(position: 'top' | 'bottom' | 'left' | 'right'): void {
    if (!this.selectedItem) return;

    switch (position) {
      case 'top':
        this.dockinglayout.autoHideTop(this.selectedItem);
        break;
      case 'bottom':
        this.dockinglayout.autoHideBottom(this.selectedItem);
        break;
      case 'left':
        this.dockinglayout.autoHideLeft(this.selectedItem);
        break;
      case 'right':
        this.dockinglayout.autoHideRight(this.selectedItem);
        break;
    }
  }
}
