"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var directives_1 = require("@angular/core/src/metadata/directives");
var card_data_1 = require("../card.data");
var rxjs_1 = require("rxjs");
var CardcontainerComponent = (function () {
    function CardcontainerComponent(cardService) {
        this.cardService = cardService;
        this.card = new rxjs_1.BehaviorSubject(new card_data_1.Card());
    }
    CardcontainerComponent.prototype.ngOnInit = function () {
        // this.changeNotifier.subscribe(pagedata => {
        //   if (pagedata.cardrefs) {
        //     for (let index in pagedata.cardrefs) {
        //       this.cardService.getContent(pagedata.cardrefs[index].contentid)
        //         .subscribe((resp: Response) => {
        //           let data = resp.json();
        //           let card: Card = new Card(data);
        //           this.cards.push(card);
        //         });
        //     }
        //   }
        // });
    };
    CardcontainerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.cardService.getContent(this.cardref.contentid)
            .subscribe(function (card) {
            _this.card.next(new card_data_1.Card(card));
        });
    };
    __decorate([
        directives_1.Input()
    ], CardcontainerComponent.prototype, "cardref", void 0);
    CardcontainerComponent = __decorate([
        core_1.Component({
            selector: 'app-cardcontainer',
            templateUrl: './cardref.component.html',
            styleUrls: ['./cardref.component.css']
        })
    ], CardcontainerComponent);
    return CardcontainerComponent;
}());
exports.CardcontainerComponent = CardcontainerComponent;
