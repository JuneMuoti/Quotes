export class Quote {
  public showMeaning:boolean;
  constructor(public id:number,public name:string, public meaning:string,public dateCreated:Date){
    this.showMeaning=false
  }
}
