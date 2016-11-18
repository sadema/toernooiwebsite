/**
 * Created by sjoerdadema on 10/11/16.
 */

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "poulefilter"
})
export class PouleteamPipe implements PipeTransform {
  transform(teams, poule: string): string {
    console.log("teams: ", teams, "poule", poule);
    return teams.filter((team) => team.poule === poule).map(team => team.name);
  }
}
