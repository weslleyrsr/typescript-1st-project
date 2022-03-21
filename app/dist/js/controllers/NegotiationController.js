var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Negotiation } from "../models/Negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { NegotiationsView } from "../views/Negotiations-view.js";
import { MessageView } from "../views/Message-view.js";
import { ExecutionTimeLogger } from "../decorators/execution-time-logger.js";
import { Detective } from "../decorators/detective.js";
import { DomInjector } from "../decorators/dom-injector.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations;
        this.negotiationsView = new NegotiationsView("#negotiations");
        this.messageView = new MessageView("#mensagemView");
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        try {
            this.negotiations.add(this.createNegotiation());
            this.resetForm();
            this.updateViews();
        }
        catch (error) {
            this.messageView.update(error, "error");
        }
    }
    importData() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Import data");
            const res = yield fetch("http://localhost:8080/dados").then(res => res.json());
            res.map(item => {
                this.negotiations.add(new Negotiation(new Date(), item.vezes, item.montante));
            });
            this.updateViews();
        });
    }
    resetForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "1";
        this.inputValue.value = "0.0";
        this.inputDate.focus();
    }
    createNegotiation() {
        return Negotiation.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
    }
    updateViews() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Negotiation successfully created!");
    }
}
__decorate([
    DomInjector("#date")
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    DomInjector("#quantity")
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    DomInjector("#value")
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    ExecutionTimeLogger(),
    Detective
], NegotiationController.prototype, "add", null);
