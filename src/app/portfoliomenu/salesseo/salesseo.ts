import { Component } from '@angular/core';



// SEO - SEARCH ENGINE OPTIMIZATION
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data-service';
import { ChangeDetectorRef } from '@angular/core'; // Manually trigger change detection. Fresh web page to push data loading
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-salesseo',
  // imports: [],
  imports: [FormsModule, MatFormFieldModule, MatInputModule ],
  templateUrl: './salesseo.html',
  styleUrl: './salesseo.css',
})
export class Salesseo {


  gUsername = '';
  gCountry ='';
  postsANY: any[] = []; 



  // Search #2
  // strPage =  '' ; 
  strNoOfRecords = '';
  rowData: any[] = [];


  
  constructor(
      private apiData: DataService,
      private cdr: ChangeDetectorRef,
  )
  {}


  
  onSearch(value: string) {
      console.log("Searching for:", value);
      // call API or filter list here
      this.loadUsersFltrChk();
  }

  loadUsersFltrChk () {
      console.log('USERNAME: ' + this.gUsername + ', COUNTRY:'+ this.gCountry)
      if (this.gUsername.length === 0 && this.gCountry.length === 0 ) {
           this.postsANY = []; 
      }
      else 
      {
          console.log('LIST REC: loadUsersFltr() ')
          this.loadUsersFltr();
      }
  }


  loadUsersFltr(){
        this.apiData.getPortfolioSalemanFltr(this.gUsername, this.gCountry).subscribe(data => {
            if (!Array.isArray(data)) {
                console.error('Expected array but got:', data);
                // this.rowData = [];
                this.postsANY = [];
                return;
            }
            console.log('API RESPONSE:', data);
            console.log('Is array?', Array.isArray(data));
            console.log('Length:', data?.length);

            this.postsANY = data;
            // this.rowData = data;
            // this.strNoOfRecords = this.rowData.length.toString();

            this.strNoOfRecords = this.postsANY.length.toString();

            this.cdr.detectChanges();
        });
  }


}
