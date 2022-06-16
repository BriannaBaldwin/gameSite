import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter(game => keys.split(',').some(key => game.hasOwnProperty(key) && new RegExp(term, 'gi').test(game[key])));

  }
}
