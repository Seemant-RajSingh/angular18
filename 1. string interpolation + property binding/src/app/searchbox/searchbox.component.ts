import { Component } from "@angular/core";

@Component ({
    selector: 'app-searchbox',
    standalone: true,
    template: `<input type=text placeholder=search-component> 
    <button>search</button>`,
    // '' for single line, `` for multiline html code
})

export class AppSearchbox {}
