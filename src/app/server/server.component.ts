import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was create!';
  serverName = '';
  serverCreated = false;
  serverList = ['apple','bananaa','elephant'];

  showSecreate = false;
  log = [];

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }

  ngOnInit(){

  }

  getColor(){
    return this.serverStatus == 'online' ? 'green' : 'red';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
    this.serverCreated = true;
    this.serverList.push(this.serverName);
  }

  onUpdateServerName(getVal: any){
    console.log("getVal", getVal.target.value);
    this.serverName = getVal.target.value;
    
  }

  onToggledDetails(){
    this.showSecreate = !this.showSecreate;
    this.log.push(this.log.length + 1);
  }


}
