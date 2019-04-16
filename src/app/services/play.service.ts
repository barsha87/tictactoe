import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlayService {
  private arr;
  private n;
  private player:number;
  private moves:number;
  private msg;
  private game_over;

  constructor(){
    this.arr = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
    this.n = 3;
    this.player = 1;
    this.moves = 1;
    this.msg = "Player 1's turn";
    this.game_over = false;
  }

  display() {
    return this.arr;
  }

  populate(x, y, char){
    if (this.arr[x][y] == '-') {
      this.arr[x][y] = char;
      return true
    }
    else {
      return false
    }
  }

  get_player() {
    return this.player
  }

  get_message() {
    return this.msg
  }

  play(x,y) {
    var char;
    if (this.game_over){
      return false;
    }
    if (this.player == 1){
      char = 'X';
    } else {
      char = 'O';
    }
    var populated = false;
    while (populated == false) {
      populated = this.populate(x, y, char)
    }
    if (this.check_win(x,y) == true) {
       this.msg = 'Player '+this.player+' Wins!!';
       this.game_over = true;
       return false;
    }
    if (this.moves == this.n**2) {
      this.msg = "It's a Draw. Oh well!"
      this.game_over = true;
      return false
    }
    if (this.player == 1){
      this.player = 2;
    } else {
      this.player = 1;
    }
    this.msg = "Player "+ this.player + "'s turn";
    this.moves += 1;
    return true;
  }

  check_win(x, y) {
    if (this._all_row(x, y) || this._all_column(x, y) || this._all_diag(x, y)){
      return true;
    } else {
      return false;
    }
  }

  _all_row(x, y){
    var char = this.arr[x][y];
    var flag = 0;
    for (let item in this.arr[x]) {
      if (this.arr[x][item] != char){
        flag += 1;
        break;
      }
    }
    if (flag == 0){
      return true;
    }
    return false;
  }

  _all_column(x, y){
    var char = this.arr[x][y];
    var flag = 0;
    for (let row in this.arr) {
      if (this.arr[row][y] != char){
        flag += 1;
        break;
      }
    }
    if (flag == 0){
      return true;
    }
    return false;
  }
  _all_diag(x, y){
    var char = this.arr[x][y];
    var flag = 0;
    if (x == y) {
      for (let i in this.arr) {
        if (this.arr[i][i] != char) {
          flag += 1;
          break;
        }
      }
    } else if (x == this.n-1-y) {
      var i;
      for (i in this.arr) {
        var j = this.n-1-i;
        if (this.arr[i][j] != char) {
          flag += 1;
          break;
        }
      }
    } else {
      return false;
    }
    if (flag == 0) {
      return true;
    }
    return false;
  }
}
