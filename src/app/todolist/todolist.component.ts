import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls:['./todolist.component.css']
})

export class TodolistComponent {
    title = "Lista rzeczy do kupienia:";
    newToBuy: string = "";

    toBuyArr: Array<toBuy> = [
        {
            title: "marchewka",
            complete: false
        },
        {
            title: "buraki",
            complete: false
        },
        {
            title: "ziemniaki",
            complete: true
        }
    ];

    addToBuy() {
        if (!this.newToBuy) {
            return;
        }


        alert('dodoano');
    
       
      

        const newBuyT: toBuy = {
            title: this.newToBuy,
            complete: false
        };
           
              
            this.toBuyArr.push(newBuyT);
            this.newToBuy = '';
    }

    deleteToBuy(index) {
        this.toBuyArr.splice(index, 1);
    }

interface toBuy {
    title: string;
    complete: boolean;
}