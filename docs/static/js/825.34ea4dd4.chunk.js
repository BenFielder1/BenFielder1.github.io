"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[825],{8825:(i,e,t)=>{t.r(e),t.d(e,{ion_phaser:()=>n});var a=t(6750);const n=class{constructor(i){var e=this;(0,a.r)(this,i),this.initialize=!0,this.initializeGame=function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.game;if(null!==i&&void 0!==i){if(void 0!==i.instance&&null!==i.instance)throw new Error("A Phaser game already exist");i.parent=i.parent||e.el,i.instance=new Phaser.Game(i)}}}onGameChange(i){this.initialize&&!this.hasInitialized()&&this.initializeGame(i)}onInitialize(i,e){i&&!e&&this.initializeGame()}async getInstance(){const{instance:i}=this.game||{};return Promise.resolve(i)}async destroy(){this.hasInitialized()&&(this.game.instance.destroy(!0),this.game.instance=null)}connectedCallback(){!this.hasInitialized()&&this.initialize&&this.initializeGame()}disconnectedCallback(){this.destroy()}hasInitialized(){return this.game&&void 0!==this.game.instance&&null!==this.game.instance}get el(){return(0,a.g)(this)}static get watchers(){return{game:["onGameChange"],initialize:["onInitialize"]}}};n.style="ion-phaser{display:block}"}}]);
//# sourceMappingURL=825.34ea4dd4.chunk.js.map