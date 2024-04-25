import { Pipe, PipeTransform } from '@angular/core';
import { Group } from 'src/app/models/Group'; // Grup modelinin yolunu güncelleyin

@Pipe({
  name: 'groupFilter'
})
export class GroupFilterPipe implements PipeTransform {
  transform(groups: Group[], searchTerm: string): Group[] {
    if (!groups || !searchTerm) {
      return groups;
    }
    searchTerm = searchTerm.toLowerCase();
    return groups.filter(group =>
      group.groupName.toLowerCase().includes(searchTerm) ||
      group.description.toLowerCase().includes(searchTerm)
    );
  }
}
