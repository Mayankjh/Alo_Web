import { Component, OnInit, AfterViewInit } from '@angular/core';
//import * as $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-panorama',
  templateUrl: './panorama.component.html',
  styleUrls: ['./panorama.component.css']
})
export class PanoramaComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(){
      lol();
  }

}
function lol() {

    var $panorama = $('.panorama');

    var left = $panorama.offset().left;
    var right = $panorama.offset().right;
    var width = $panorama.width();

    $('.left').click(function(e) {
        var offset = e.pageX - left;
        var percentage = offset / width * 100;

        $panorama.css('background-position', percentage + '% 0');

    });
    $('.right').click(function(e) {
        var offset = e.pageX - left;
        var percentage = offset / width * 100;

        $panorama.css('background-position', percentage + '% 0');

    });
}
