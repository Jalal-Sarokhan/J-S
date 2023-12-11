import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-servers',
 // template: '<abc-server></abc-server>',
 templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreated= false;
  createNewServer='Noch kein Server erstellt...';
  serverName='';
  servers =['test1','myTest2', 'test3']
constructor(){
  // nach 2 Sekunden allowNewServer auf true setzten
  setTimeout(() => {
    this.allowNewServer= true;
  },2000)
}

onCreateNewServer(){
  this.serverCreated=true;
  this.servers.push(this.serverName);
 this.createNewServer +=this.serverName+' wurde erstellt!';
}
onUpdateServerName(event: Event){
  this.serverName = (event.target as HTMLInputElement).value;
}

ngOnInit(): void {
  

}
}
