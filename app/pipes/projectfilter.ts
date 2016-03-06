import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'projectfilter'})
export class ProjectFilterPipe implements PipeTransform {
  transform(items:any[], args:string[]) : any[] {
    return items.filter(item => function(item:any, args:string[]) : boolean {
      if (args[0] != '') { return item.languages.indexOf(args[0]) > -1; }
      if (args[1] != '') { return item.frameworks.indexOf(args[1]) > -1; }
      return true;
    } (item, args));
  }
}