import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdCardModule, MdToolbarModule, MdDialogModule, MdButtonModule,
        MdCheckboxModule,MdProgressSpinnerModule,MdProgressBarModule,MdInputModule,
        MdIconModule,MdDatepickerModule,MdSidenavModule,MdListModule,
        MdTooltipModule,MdSelectModule,MdAutocompleteModule,MdNativeDateModule,
        MdTabsModule,MdTableModule,MdPaginatorModule,MdRadioModule,MdSortModule,
        DateAdapter,NativeDateAdapter,MD_DATE_FORMATS
      }  from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  providers: [],
  imports: [FlexLayoutModule,MdSortModule,CdkTableModule,MdRadioModule,MdPaginatorModule,MdTableModule,MdTabsModule,MdNativeDateModule,MdCardModule,MdAutocompleteModule,MdButtonModule,MdSelectModule,MdProgressBarModule,MdTooltipModule,MdListModule,MdSidenavModule,MdDatepickerModule,MdIconModule,MdToolbarModule,MdDialogModule,MdInputModule,MdProgressSpinnerModule,MdButtonModule, MdCheckboxModule,CommonModule],
  exports: [FlexLayoutModule,MdSortModule,CdkTableModule,MdRadioModule,MdPaginatorModule,MdTableModule,MdTabsModule,MdNativeDateModule,MdCardModule,MdAutocompleteModule,MdButtonModule,MdSelectModule,MdProgressBarModule,MdTooltipModule,MdListModule,MdSidenavModule,MdDatepickerModule,MdIconModule,MdToolbarModule,MdDialogModule,MdInputModule,MdProgressSpinnerModule,MdButtonModule, MdCheckboxModule],
  declarations: []
})
export class ngMaterialModule {}