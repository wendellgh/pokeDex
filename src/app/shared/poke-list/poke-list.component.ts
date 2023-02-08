import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next:(res:any) => {
         this.setAllPokemons = res.results;
          this.getAllPokemons = this.setAllPokemons;
         
         },
         error:(error:any) =>{
           this.apiError = true;
          }
    });
  }

 

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return res.name.indexOf(value.toLocaleLowerCase()) >= 0;
    });

    this.getAllPokemons = filter;
  }
}
