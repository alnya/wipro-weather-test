import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupby'
})
export class GroupbyPipe implements PipeTransform {

  transform(value: Array<any>, field: any): any {
    if (!value) return [];
    const groupedObj = value.reduce((prev, cur)=> {
      if(!prev[new Date(cur[field] * 1000).toLocaleDateString()]) {
        prev[new Date(cur[field] * 1000).toLocaleDateString()] = [cur];
      } else {
        prev[new Date(cur[field] * 1000).toLocaleDateString()].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
  }

}
