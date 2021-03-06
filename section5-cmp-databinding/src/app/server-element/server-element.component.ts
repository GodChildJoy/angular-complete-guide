import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // need make element acessible from parent component
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagrah") paragraph: ElementRef;

  constructor() {
    console.log("constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    //Note: cannot read properties (this.header) of undefined
    // console.log("Text Content: " + this.header.nativeElement.textContent);
    // console.log("Para Content: ", this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log("ngDoCheck called!");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
    console.log("Para Content: ", this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called!");
    // here the this.header is avaiable
    console.log("Text Content: ", this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestory called!");
  }
}
