import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomEtPrenomUser'
})
export class UtilisateurPipe implements PipeTransform {

  transform(value: string, args?: any) {
    if (!value) return null;

    let names = value.split(' ');
    return names;
  }

}
