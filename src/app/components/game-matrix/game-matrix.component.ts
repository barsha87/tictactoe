import { Component, OnInit } from '@angular/core';
import { PlayService } from './../../services/play.service';

@Component({
  selector: 'app-game-matrix',
  templateUrl: './game-matrix.component.html',
  styleUrls: ['./game-matrix.component.css']
})
export class GameMatrixComponent implements OnInit {
  arr;
  msg;
  constructor(private playService: PlayService) {
  }

  change(x, y) {
    var res = this.playService.play(x,y);
    this.msg = this.playService.get_message();
    if (res == true) {
      this.arr = this.playService.display()
    }
  }

  on_click_restart(){
    this.playService.constructor()
    this.msg = this.playService.get_message()
    this.arr = this.playService.display()
  }


  ngOnInit() {
    this.msg = this.playService.get_message()
    this.arr = this.playService.display()
  }
}
