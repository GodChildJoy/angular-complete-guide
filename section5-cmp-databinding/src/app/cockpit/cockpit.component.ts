import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = "";
  newServerContent = "";
  // 76.access to template and dom with @ViewChild, 
  // ElementRef is angular type 
  @ViewChild('serverNameInput') serverNameInput: ElementRef;



  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  onAddServer(nameInput: HTMLInputElement) { // 74. pass local reference
    // this.serverElements.push({
    //   type: "server",
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
    // emit event
    console.log(nameInput.value); // 74. joyserver
    console.log(this.serverNameInput); // ElementRef {...}
    this.serverCreated.emit({
      // serverName: nameInput.value, // 74. joyserver
      serverName: this.serverNameInput.nativeElement.value, // 75 viewChild way
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(nameInput) {
    // this.serverElements.push({
    //   type: "blueprint",
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }
}
