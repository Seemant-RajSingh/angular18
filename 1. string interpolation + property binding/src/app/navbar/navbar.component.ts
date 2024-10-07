import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: '<h1>Navbar</h1>',
    // styles: `h1 {
    //          color: green;
    //          background: black;
    //          }`,
    templateUrl: './navbar.component.html',
    // templateUrl overrides template
    styleUrl: './navbar.component.css'
})

export class AppNavbar {
    
}