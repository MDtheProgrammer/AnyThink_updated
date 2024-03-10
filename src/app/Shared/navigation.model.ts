import { IconProp } from "@fortawesome/fontawesome-svg-core";

export class NavigationLine {
  constructor(public toWhere: string, public icon: IconProp, public toUrl: string) {}
}
