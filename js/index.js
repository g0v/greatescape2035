!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=6)}([function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),s.d(t,"b",(function(){return d}));var i=s(5),n=s.n(i);const o={"0000000001":"MISSION/intro/step-1/done","0000000002":"MISSION/receive-package/step-1/done","0000000003":"RESPONSE/player_occupation/學生","0000000004":"RESPONSE/player_occupation/工程師","0000000005":"RESPONSE/player_occupation/律師","0000000006":"RESPONSE/player_occupation/健身教練","0000000007":"RESPONSE/player_occupation/中年職業婦女","0000000008":"RESPONSE/player_occupation/記者","0000000009":"MISSION/receive-package/step-2/done","0000000010":"MISSION/student-scene-intro/step-1/done","0000000011":"MISSION/student-scene-intro/step-2/done","0000000012":"MISSION/student-scene-intro/step-3/done","0000000013":"RESPONSE/student-intro-choice/passive","0000000014":"RESPONSE/student-intro-choice/proactive","0000000015":"MISSION/student-scene-academic-affairs-office/step-1/done","0000000016":"RESPONSE/student_asked_followup_question/false","0000000017":"RESPONSE/student_asked_followup_question/true","0000000018":"MISSION/student-scene-department-office/step-1/done","0000000019":"MISSION/student-scene-home-2/step-1/done","0000000020":"MISSION/student-scene-home-2/step-2/done","0000000021":"MISSION/student-scene-home-2/step-3/done","0000000022":"RESPONSE/student-gene-interested-in/gene","0000000023":"RESPONSE/student-gene-interested-in/system","0000000024":"MISSION/student-scene-home/step-1/done","0000000025":"MISSION/student-scene-home/step-2/done","0000000026":"MISSION/student-scene-home/step-3/done","0000000027":"MISSION/student-scene-home/workshop-ready/done","0000000028":"MISSION/digit-gene-workshop/step-1/done","0000000029":"MISSION/digit-gene-workshop/step-2/done","0000000030":"MISSION/digit-gene-workshop/step-3/done","0000000031":"MISSION/digit-gene-workshop/step-4/done"},a={};for(const e in o)a[o[e]]=e;function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}!function(e){const t=[];e.fn("setAndNotify",(function(e,t){if(this.set(e,t),this.callbacks){if(r(this.callbacks,e))for(const t of this.callbacks[e])t.call(this,e);if(r(this.callbacks,"*"))for(const t of this.callbacks["*"])t.call(this,e)}})),e.fn("notify",(function(){for(const e in t)if(r(this.callbacks,e))for(const t of this.callbacks[e])t.call(this)})),e.fn("listen",(function(e,t){void 0===this.callbacks&&(this.callbacks={}),void 0===this.callbacks[e]&&(this.callbacks[e]=[]),this.callbacks[e].push(t)}))}(n.a._);const c="https://pingtung-hao-305236.middle2.me",h=n.a.namespace("REMOTE_STORE_CACHE");const l=n.a.namespace("DIALOG_ANSWER"),d=new class{constructor(){this._tokenChecked=!1}get token(){return h.get("token")}async _register(){const e=await fetch(c+"/register",{method:"POST"}),t=await e.json();if(t.token){h.set("token",t.token);const e=(new Date).getTime()+864e5;h.set("expire",e),this._tokenChecked=!0}}async _ensureToken(){if(!h.has("token"))return await this._register();if((new Date).getTime()>h.get("expire",0))return await this._register();if(!this._tokenChecked){const e=this.token,t=await fetch(`${c}/check_token?token=${e}`,{method:"GET"});if(!0!==(await t.json()).ok)return await this._register();this._tokenChecked=!0}}async _inc(e){await this._ensureToken(),console.log("increasing key: "+e);const t=`${c}/inc?token=${this.token}&key=${e}`,s=await fetch(t,{method:"POST"}),i=await s.json();return console.log(`increased key: ${e} -> ${i.value}, data: `,i),i.value}async _getc(e){await this._ensureToken();const t=`${c}/getc?token=${this.token}&key=${e}`,s=await fetch(t,{method:"GET"});return(await s.json()).value}increase(e){return e=a[e],this._inc(e)}getCount(e){return e=a[e],this._getc(e)}async getAllCount(){const e={};for(const t in o){const s=o[t],i=await this.getCount(s);e[s]=i}return e}}},function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return n}));const i=32,n=175},function(e,t,s){"use strict";s.d(t,"a",(function(){return h})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return u})),s.d(t,"d",(function(){return p}));var i=s(1),n=s(4),o=s(0),a=s(3);class r{constructor(e,t,s,i,n,o,a){this.scene=e,Number.isNaN(i)&&(i=0),Number.isNaN(n)&&(n=0),this.id=t,this.x=i,this.y=n,this._name=s,this.texture=o,this.frame=a,this.messages=[],this.messageBox=null,this.makeContainer()}makeContainer(){this.player=this.scene.physics.add.sprite(this.x,this.y,this.texture,this.frame).setSize(32,40).setOffset(0,24),this.player.setDepth(2),this.text=this.scene.add.text(this.x,this.y,this.name,{font:"18px monospace",fill:"#fff",align:"center"}).setOrigin(.5).setStroke("#000",3).setDepth(1)}get WIDTH(){return 32}get HEIGHT(){return 32}get name(){return this._name}set name(e){this._name=e,this.text.setText(this.name)}addMessage(e,t){void 0===t&&(t=1/0),this.messages.push({message:e,expireTime:t})}clearMessage(){this.messages=[]}showMissionMark(e){e?this.addMessage("!"):this.clearMessage()}_removeOutdatedMessage(){const e=(new Date).getTime();let t=0;for(const s in this.messages)this.messages[s].expireTime>e&&(this.messages[t]=this.messages[s],t++);this.messages=this.messages.slice(0,t)}update(e,t){if(this.text.setX(this.player.x),this.text.setY(this.player.y+45),this.messages.length>0&&this._removeOutdatedMessage(),this.messages.length>0){this.messageBox||(this.messageBox=this.scene.add.text(this.player.x,this.player.y-16,"",{font:"24px monospace",fill:"#000",align:"center",backgroundColor:"white"}).setOrigin(.5,1).setDepth(99));let e="";for(const t in this.messages)e+=this.messages[t].message+"\n";this.messageBox.setText(e.slice(0,-1)),this.messageBox.setVisible(!0)}else this.messageBox&&this.messageBox.setVisible(!1);this.messageBox&&(this.messageBox.setX(this.player.x),this.messageBox.setY(this.player.y-16))}destroy(){this.player.destroy(),this.text.destroy()}}class c extends r{constructor(e,t,s,i,n,o,a,r){super(e,t,s,i,n,o,a),this.points=[],this.points.push({x:i,y:n});for(const{dx:e,dy:t}of r){const s=this.points[this.points.length-1].x,i=this.points[this.points.length-1].y;this.points.push({x:s+e,y:i+t})}this.points.length>1&&(this.nextPoint=1)}update(e,t){const s=this.points[this.nextPoint].x,n=this.points[this.nextPoint].y;Math.hypot(s-this.player.x,n-this.player.y)<Math.max(.1*i.b,i.a*t/1e3)?(this.player.setVelocity(0),this.player.setX(s),this.player.setY(n),this.nextPoint=(this.nextPoint+1)%this.points.length):(this.player.setVelocityX(s-this.x),this.player.setVelocityY(n-this.y),this.player.body.velocity.normalize().scale(i.a)),this.x=this.player.x,this.y=this.player.y,super.update(e,t)}}class h extends r{constructor(e,t,s,i,n,o,a){super(e,t,s,i,n,o,a),this.dest={}}setProperty(e,t){switch(e){case"texture":this.texture=t,this.player.setTexture(t);break;case"frame":this.frame=t,this.player.setFrame(t);break;case"name":this.name=t;break;case"x":this.x!==t&&(this.dest.x=t);break;case"y":this.y!==t&&(this.dest.y=t)}}update(e,t){super.update(e,t);const s=1.2*i.a,n=Math.hypot(this.player.x-this.dest.x,this.player.y-this.dest.y),o=Math.max(.1*i.b,.05*s);this.player.setVelocity(0),n<5*i.b&&n>o?(this.player.setVelocityX(2*(this.dest.x-this.x)),this.player.setVelocityY(2*(this.dest.y-this.y))):(this.player.setX(this.dest.x),this.player.setY(this.dest.y)),this.x=this.player.x,this.y=this.player.y}}const l=/\$player/;const d=new class{constructor(){this.scene=null,this.chars={}}setScene(e){this.scene=e}create(e,t,s,i,n,o){if(e in this.chars)return console.error(`Character ID "${e}" is already declared:`),void console.error(this.chars[e]);const a=new r(this.scene,e,t,s,i,n,o);return this.chars[e]=a,a}createMovingNPC(e,t,s,i,n,o,a){if(e in this.chars)return console.error(`Character ID "${e}" is already declared:`),void console.error(this.chars[e]);const r=new c(this.scene,e,t,s,i,n,o,a);return this.chars[e]=r,r}createRemotePlayer(e,t,s,i,n,o){if(e in this.chars)return console.error(`Character ID "${e}" is already declared:`),void console.error(this.chars[e]);const a=new h(this.scene,e,t,s,i,n,o);return this.chars[e]=a,a}deleteChar(e){e in this.chars&&(this.chars[e].destroy(),delete this.chars[e])}getChar(e){return e in this.chars?this.chars[e]:null}update(e,t){for(const s in this.chars){this.chars[s].update(e,t)}}},u=new class{constructor(e){this.charDaemon=e,this.dialogs={},this.hasOnGoingDialog=!1,this.dialogToTrigger=[]}get scene(){return this.charDaemon.scene}showHint(){let e="";for(const t in this.dialogs){const s=this.dialogs[t];console.log(s),e+=`<h3>${s.dialog.missionStep.title}</h3>`,e+=`<p>${s.dialog.missionStep.description}</p>`}e||(e="沒有任務!"),bootbox.alert({title:"任務列表",message:e})}getDialog(e){return e in this.dialogs?this.dialogs[e]:null}showNextDialog(e,t){this.hasOnGoingDialog=!1;e.nextDialogItem(t)?this.showDialog(e):this.doneDialog(e)}showDialog(e){const t=e.getCurrentDialogItem();if(!t)return void this.doneDialog(e);this.hasOnGoingDialog=!0;const s=this.charDaemon.getChar("player"),i=t.name.replace(l,s.name);if(console.log("iterator: ",e),t instanceof n.b){const n=t.line.replace(l,s.name);bootbox.alert({title:i,message:n,callback:()=>{this.showNextDialog(e)}})}else if(t instanceof n.e){const n=t.question.replace(l,s.name),o=[];for(const e in t.choices){const i=t.choices[e].text;o.push({text:i.replace(l,s.name),value:e})}bootbox.prompt({title:i,message:n,inputType:"select",onEscape:!1,backdrop:!0,inputOptions:o,callback:t=>null!==t&&(this.showNextDialog(e,t),!0)}).keypress(e=>{13===e.keyCode&&$("button.bootbox-accept").click()})}else if(t instanceof n.d){const n=t.question.replace(l,s.name);bootbox.prompt({title:i,message:n,inputType:"text",onEscape:!1,backdrop:!0,callback:t=>!!t&&(this.showNextDialog(e,t),!0)})}else if(t instanceof n.c){const i=t.message.replace(l,s.name);bootbox.alert({title:"",message:i,callback:()=>{this.showNextDialog(e)}})}else if(t instanceof n.a){const e=t.style||"",s=`\n      <iframe\n        id='dialog-iframe'\n        class="dialog-iframe"\n        src="${t.url}"\n        style="${e}" ></iframe>`;bootbox.dialog({message:s,size:"large",centerVertical:!0,closeButton:!0,onShown:()=>{const e=document.getElementById("dialog-iframe");console.log(e)},onHidden:()=>{console.log("on hidden")}})}}recordDone(e){o.a.setAndNotify(e,"true"),o.b.increase("MISSION/"+e)}doneDialog(e){this.hasOnGoingDialog=!1;const t=e.dialog.missionStep,s=t.mission;this.remove(`${s.id}/${t.id}`),this.recordDone(`${s.id}/${t.id}/done`);const i=e.nextStep;if(!i)return;console.log("nextStepKey: ",i);const n=s.steps[i];n&&this.add(`${s.id}/${n.id}`,n)}moveTo(e,t){const s=this.charDaemon.getChar("player");if(e in a.b){const i=a.b[e],n=this.scene.cameras.main;n.fadeOut(750,0,0,0,(e,o)=>{o<1||(s.player.x=i.x,s.player.y=i.y,n.fadeIn(750,0,0,0,(e,s)=>{s<1||t()}))})}else t()}startDialog(e){if(this.hasOnGoingDialog)return void console.warn("There is an on-going dialog, cannot start a new one");const t=this.getDialog(e);if(null===t)return void console.error("No such dialog: "+e);console.info("startDialog: "+e,t.dialog);const{dialog:s}=t;if(this.hasOnGoingDialog=!0,s.missionStep.moveTo)this.moveTo(s.missionStep.moveTo,()=>{const e=s.getIterator();this.showDialog(e)});else{const e=s.getIterator();this.showDialog(e)}}checkDialogToTrigger(e){if(this.hasOnGoingDialog)return null;for(const e in this.dialogToTrigger){const{dialogId:t}=this.dialogToTrigger[e];return this.dialogToTrigger.shift(),t}for(const t in this.dialogs){const{locationId:s}=this.dialogs[t];if(s&&s in a.b){const n=a.b[s];if(Math.hypot(n.x-e.x,n.y-e.y)<2*i.b)return console.log("Will trigger dialog",t,"because of location"),t}}return null}findNearbyDialog(e){for(const t in this.dialogs){const{npcId:s}=this.dialogs[t];if(s){const n=this.charDaemon.getChar(s);if(Math.hypot(n.x-e.x,n.y-e.y)<2*i.b)return t}}return null}add(e,t){const s=t.dialog,i=t.npcId,n=t.locationId;if(console.log(`dialogId: ${e}, npcId: ${i}, loc: ${n}`),null===this.getDialog(e)){if(void 0!==t.npcId){const e=this.charDaemon.getChar(i);if(null===e)return void console.error(`NPC ${i} doesn't exist.`);e.showMissionMark(!0)}else if(void 0!==t.locationId){if(!(n in a.b))return void console.error(`Location ${n} doesn't exist.`)}else console.warn(`adding ${e} to dialogToTrigger`),this.dialogToTrigger.push({dialogId:e,dialog:s});return this.dialogs[e]={npcId:i,locationId:n,dialog:s},this.dialogs[e]}console.error(`Dialog ${e} already exists.`)}remove(e){const t=this.getDialog(e);if(null===t)return;const{npcId:s}=t,i=this.charDaemon.getChar(s);null!==i&&i.showMissionMark(!1),delete this.dialogs[e]}}(d),p=new class{constructor(e){this.storyLine=null,this.dialogDaemon=e,this.missionWithDependencies={},o.a.listen("*",()=>{console.log(this);for(const e in this.missionWithDependencies){const t=this.storyLine[e];t.isReady()&&(delete this.missionWithDependencies[e],this._addToDialogDaemon(t))}})}init(e){this.storyLine=e;for(const e in this.storyLine){const t=this.storyLine[e];t.isReady()?this._addToDialogDaemon(t):this.missionWithDependencies[e]=t}console.log("not enabled missions: ",this.missionWithDependencies)}_addToDialogDaemon(e){const t=e.firstStep,s=e.steps[t],i=`${e.id}/${s.id}`;this.dialogDaemon.add(i,s)}}(u);window.charDaemon=d},function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return f}));var i=s(2),n=s(0),o=s(4),a=s(1),r={};let c;var h={};let l={left:{isDown:!1},right:{isDown:!1},up:{isDown:!1},down:{isDown:!1}};const d=window.innerWidth,u=window.innerHeight;class p extends Phaser.Scene{constructor(){super("Intro")}preload(){this.load.setPath("assets/"),this.sys.game.device.os.desktop?this.load.video("intro","media/idystopia.mp4"):this.load.video("intro","media/idystopia_480p.mp4")}create(){const e=this.add.video(d/2,u/2,"intro");e.setMute(!0);const t=e.width,s=e.height,i=Math.min(d/t,u/s);e.setScale(i),console.log("playing video"),e.play(),e.on("complete",e=>{e.play(!0,6,8)}),this.sys.game.device.os.desktop?this.add.text(d/2,.9*u,"press ENTER to continue...",{font:"18px monospace",fill:"#ffffff",padding:{x:20,y:20}}).setDepth(99).setOrigin(.5):this.add.text(d/2,.9*u,"Touch screen to continue...",{font:"18px monospace",fill:"#ffffff",padding:{x:20,y:20}}).setDepth(99).setOrigin(.5),this.input.keyboard.once("keydown_ENTER",()=>{this.startNextScene()}),this.input.on("pointerup",()=>{this.startNextScene()},this)}startNextScene(){this.scene.start("Game"),this.scene.remove("Intro")}}class g extends Phaser.Scene{constructor(){super("Game")}preload(){console.log("Preload Game scene");const{tilemapTiledJSON:e,storylineJSON:t,connection:s,npcList:i}=h;this.load.setPath("assets/"),this.load.image("tiles","tiles/world.png"),this.load.image("vision","symbols/mask.png"),this.load.tilemapTiledJSON("map",e),this.load.atlas("atlas","atlas/atlas.png","atlas/atlas.json")}create(){console.log("Create Game scene");const{tilemapTiledJSON:e,storylineJSON:t,connection:s,npcList:n}=h,o=this.make.tilemap({key:"map"}),a=o.addTilesetImage("world","tiles");if(this.belowLayer=o.createStaticLayer("Below Player",a,0,0),this.worldLayer=o.createStaticLayer("World",a,0,0),this.aboveLayer=o.createStaticLayer("Above Player",a,0,0),this.worldLayer.setCollisionByProperty({collides:!0}),this.belowLayer.setDepth(0),this.worldLayer.setDepth(10),this.aboveLayer.setDepth(20),window.objectLayer=o.getObjectLayer("Objects"),o.getObjectLayer("Objects").objects.forEach(e=>{r[e.name]=e}),this.charDaemon=i.b,this.charDaemon.setScene(this),n)for(const e in n){const{name:t,texture:s,frame:i}=n[e];if(!(e in r))continue;const o=r[e];n[e].movements?this.charDaemon.createMovingNPC(e,t,o.x,o.y,s,i,n[e].movements):this.charDaemon.create(e,t,o.x,o.y,s,i)}const d=r.HOME;c=this.charDaemon.create("player","???",d.x,d.y,"atlas","misa-front"),this.player=c.player,this.vision=this.make.image({x:this.player.x,y:this.player.y,key:"vision",add:!1}),console.log("create texture"),this.mask=this.make.renderTexture({x:this.player.x,y:this.player.y,width:2*this.scale.width,height:2*this.scale.height},!0),this.mask.fill(0,1),this.mask.setTint(665928),this.mask.setDepth(30),this.mask.setOrigin(.5),this.mask.mask=new Phaser.Display.Masks.BitmapMask(this,this.vision),this.mask.mask.invertAlpha=!0,this.scale.on("resize",()=>{console.log("resize",this.scale.width,this.scale.height),this.mask.resize(2*this.scale.width,2*this.scale.height),this.mask.fill(0,1)});const u=this.physics.add.group();for(const e in this.charDaemon.chars)if(this.charDaemon.chars.hasOwnProperty(e)){const t=this.charDaemon.chars[e].player;u.add(t),"player"!==e&&t.setImmovable(!0)}this.physics.add.collider(u,u),this.physics.add.collider(u,this.worldLayer),this.dialogDaemon=i.c;const p=this.anims;p.create({key:"misa-left-walk",frames:p.generateFrameNames("atlas",{prefix:"misa-left-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),p.create({key:"misa-right-walk",frames:p.generateFrameNames("atlas",{prefix:"misa-right-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),p.create({key:"misa-front-walk",frames:p.generateFrameNames("atlas",{prefix:"misa-front-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),p.create({key:"misa-back-walk",frames:p.generateFrameNames("atlas",{prefix:"misa-back-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1});const g=this.cameras.main;g.startFollow(this.player),g.setBounds(0,0,o.widthInPixels,o.heightInPixels);const f=[Phaser.Input.Keyboard.KeyCodes.LEFT,Phaser.Input.Keyboard.KeyCodes.RIGHT,Phaser.Input.Keyboard.KeyCodes.UP,Phaser.Input.Keyboard.KeyCodes.DOWN];for(const e of f){const t=this.input.keyboard.addKey(e,!1);t.on("down",(e,t)=>{if(!this.dialogDaemon.hasOnGoingDialog)switch(t.keyCode){case Phaser.Input.Keyboard.KeyCodes.LEFT:l.left.isDown=!0;break;case Phaser.Input.Keyboard.KeyCodes.RIGHT:l.right.isDown=!0;break;case Phaser.Input.Keyboard.KeyCodes.UP:l.up.isDown=!0;break;case Phaser.Input.Keyboard.KeyCodes.DOWN:l.down.isDown=!0}}),t.on("up",(e,t)=>{switch(t.keyCode){case Phaser.Input.Keyboard.KeyCodes.LEFT:l.left.isDown=!1;break;case Phaser.Input.Keyboard.KeyCodes.RIGHT:l.right.isDown=!1;break;case Phaser.Input.Keyboard.KeyCodes.UP:l.up.isDown=!1;break;case Phaser.Input.Keyboard.KeyCodes.DOWN:l.down.isDown=!1}})}this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER,!1).on("down",()=>{if(this.dialogDaemon.hasOnGoingDialog)return;const e=this.dialogDaemon.findNearbyDialog(this.player);null!==e&&this.dialogDaemon.startDialog(e)}),this.sys.game.device.os.desktop?($("#joystick").hide(),this.add.text(16,16,'Arrow keys to move\nPress "Enter" to interact',{font:"18px monospace",fill:"#000000",padding:{x:20,y:10},backgroundColor:"#ffffff"}).setScrollFactor(0).setDepth(30)):($("#joystick").show(),this.add.text(16,16,"Use joysticks to move\nPress the stick to interact",{font:"18px monospace",fill:"#000000",padding:{x:20,y:10},backgroundColor:"#ffffff"}).setScrollFactor(0).setDepth(30)),this.input.keyboard.once("keydown_D",e=>{this.physics.world.createDebugGraphic();const t=this.add.graphics().setAlpha(.75).setDepth(20);this.worldLayer.renderDebug(t,{tileColor:null,collidingTileColor:new Phaser.Display.Color(243,134,48,255),faceColor:new Phaser.Display.Color(40,39,37,255)})});$("#joystick .touch-stick");var y=$("#joystick").width()/2,m=$("#joystick").position().left+$("#joystick").width()/2,w=$("#joystick").position().top+$("#joystick").height()/2;$(window).on("resize",(function(){m=$("#joystick").position().left+$("#joystick").width()/2,w=$("#joystick").position().top+$("#joystick").height()/2,y=$("#joystick").width()/2}));let x=!1;$("#joystick").on("touchmove",".touch-stick",e=>{if(e.preventDefault(),x=!1,this.dialogDaemon.hasOnGoingDialog)return l.left.isDown=!1,l.right.isDown=!1,l.up.isDown=!1,void(l.down.isDown=!1);const t=e.originalEvent.targetTouches[0];let s=(t.pageX-m)/y,i=(t.pageY-w)/y;s=Math.min(Math.max(s,-1),1),i=Math.min(Math.max(i,-1),1),$(this).css({left:50*s+50+"%",top:50*i+50+"%"}),Math.abs(s)<.3&&(s=0,l.left.isDown=!1,l.right.isDown=!1),Math.abs(i)<.3&&(i=0,l.up.isDown=!1,l.down.isDown=!1),Math.abs(s)>=Math.abs(i)?s>0?(l.right.isDown=!0,l.left.isDown=!1):(l.right.isDown=!1,l.left.isDown=!0):i<0?(l.up.isDown=!0,l.down.isDown=!1):(l.up.isDown=!1,l.down.isDown=!0)}),$("#joystick").on("touchstart",".touch-stick",()=>{x=!0}),$("#joystick").on("touchend",".touch-stick",()=>{if($("#joystick .touch-stick").css({left:"50%",top:"50%"}),l.up.isDown=!1,l.down.isDown=!1,l.left.isDown=!1,l.right.isDown=!1,x){if(this.dialogDaemon.hasOnGoingDialog)return;const e=this.dialogDaemon.findNearbyDialog(this.player);null!==e&&this.dialogDaemon.startDialog(e)}})}update(e,t){this.vision&&this.mask&&(this.vision.x=this.player.x,this.vision.y=this.player.y,this.mask.x=this.player.x,this.mask.y=this.player.y);const s=this.dialogDaemon.checkDialogToTrigger(this.player);if(null!==s)return void this.dialogDaemon.startDialog(s);const i=this.player.body.velocity.clone();this.player.body.setVelocity(0);let n=0,o=0;this.dialogDaemon.hasOnGoingDialog||(l.left.isDown?n=-a.a:l.right.isDown&&(n=a.a),l.up.isDown?o=-a.a:l.down.isDown&&(o=a.a)),this.player.body.setVelocityX(n),this.player.body.setVelocityY(o),(n||o)&&this.player.body.velocity.normalize().scale(a.a),n<0?this.player.anims.play("misa-left-walk",!0):n>0?this.player.anims.play("misa-right-walk",!0):o<0?this.player.anims.play("misa-back-walk",!0):o>0?this.player.anims.play("misa-front-walk",!0):(this.player.anims.stop(),i.x<0?this.player.setTexture("atlas","misa-left"):i.x>0?this.player.setTexture("atlas","misa-right"):i.y<0?this.player.setTexture("atlas","misa-back"):i.y>0&&this.player.setTexture("atlas","misa-front")),h.connection&&h.connection.update(e,t,c),this.charDaemon.update(e,t)}}function f({tilemapTiledJSON:e,storylineJSON:t,connection:s,npcList:a,postBootCallback:r}){h={type:Phaser.AUTO,width:d,height:u,parent:"game-container",physics:{default:"arcade",arcade:{gravity:{y:0}}},scale:{mode:Phaser.Scale.RESIZE,width:"100%",height:"100%"},scene:[p,g],callbacks:{postBoot:()=>{n.a.clearAll(),o.f(t).then(e=>{this.storyLineDaemon=i.d,this.storyLineDaemon.init(e)}),n.a.listen("player_name",()=>{c.name=n.a.get("player_name")}),r&&r()}},tilemapTiledJSON:e,storylineJSON:t,connection:s,npcList:a};return new Phaser.Game(h)}},function(e,t,s){"use strict";s.d(t,"b",(function(){return h})),s.d(t,"e",(function(){return l})),s.d(t,"d",(function(){return d})),s.d(t,"c",(function(){return u})),s.d(t,"a",(function(){return p})),s.d(t,"f",(function(){return g}));var i=s(0);class n{constructor(e,t,s,i,n){this.id=e,this.title=t,this.description=s,this.depend=i,this.firstStep=n,this.steps={}}addStep(e){this.steps[e.id]=e}_checkClause(e){for(const t in e){const s=e[t];let n,o;if(console.log("condition: ",s),"string"==typeof s?n=s:"object"==typeof s&&(n=s.storeKey,o=s.value),!i.a.has(n))return!1;if(!o)continue;if(i.a.get(n)!==o)return!1}return!0}isReady(){if(console.log("checking dependency of "+this.id,this.depend),!this.depend||0===this.depend.length)return!0;for(const e in this.depend){let t=this.depend[e];if(t instanceof Array||(t=[t]),console.log(t),this._checkClause(t))return console.log(this.id+" is ready!"),!0}return!1}static fromDict(e,t){const s=t.title||"Unnamed Mission",i=t.description||"no description",a=t.firstStep||"step-1",r=(t.depend||[]).filter(e=>"string"==typeof e||e instanceof String||("object"==typeof e||(console.warn(e+" is not a string nor an object"),!1))),c=new n(e,s,i,r,a);for(const e in t.steps){const s=o.fromDict(e,t.steps[e],c);c.addStep(s)}return c}}class o{constructor({id:e,title:t,description:s,nextStep:i,npcId:n,locationId:o,dialog:a,mission:r,moveTo:c}){this.id=e,this.title=t||"Unnamed Step",this.description=s||"...",this.nextStep=i,this.npcId=n,this.locationId=o,this.dialog=a,this.mission=r,this.moveTo=c}static fromDict(e,t,s){const i={id:e,mission:s,...t},n=new o(i),r=a.fromDict(t.dialog||[],n);return n.dialog=r,n}}class a{constructor(e){this.missionStep=e,this.dialogItems=[],this.dialogIdMap={}}addDialogItem(e){this.dialogItems.push(e),void 0!==e.id&&(this.dialogIdMap[e.id]=this.dialogItems.length-1)}getIterator(){return new r(this,this.missionStep.nextStep)}static fromDict(e,t){const s=new a(t);for(const t of e){const e=c.fromDict(t);s.addDialogItem(e)}return s}}class r{constructor(e,t){this.dialog=e,this.currentIndex=0,this.nextStep=t}getCurrentDialogItem(){const e=this.dialog.dialogItems[this.currentIndex];return e&&e.nextStep&&(this.nextStep=e.nextStep),e}nextDialogItem(e){const t=this.dialog.dialogItems[this.currentIndex];let s=this.currentIndex+1;if(void 0!==t.nextLine&&(s=this.dialog.dialogIdMap[t.nextLine]),t instanceof l&&(void 0===e&&(console.warn("This is a multiple choice question, but no selected answer. Default to the first answer."),e=0),void 0!==t.choices[e].nextLine)){const i=t.choices[e].nextLine;s=this.dialog.dialogIdMap[i]}if(t instanceof d&&t.storeKey&&i.a.setAndNotify(t.storeKey,e),t instanceof l){const s=t.choices[e].value||e;t.storeKey&&(i.a.setAndNotify(t.storeKey,s),i.b.increase("USER_RESPONSE/"+t.storeKey))}return console.info(`${this.dialog.missionStep.id} The next line is: ${s}`),this.currentIndex=s,this.getCurrentDialogItem()}}class c{constructor(e,{id:t,nextLine:s}){this.name=e,this.id=t,this.nextLine=s}static fromDict(e){const t=e.name||"John Doe",s=e.type||"line";switch(s){case"line":return new h(t,e);case"input.select":return new l(t,e);case"input.text":return new d(t,e);case"message":return new u(t,e);case"iframe":return new p(t,e);default:return console.warn("unkonwn dialog type: %s",s),new h(t,e)}}}class h extends c{constructor(e,{id:t,nextLine:s,line:i}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("One of `line` and `question` should be defined."),i="..."),this.line=i}}class l extends c{constructor(e,{id:t,nextLine:s,question:i,choices:n,storeKey:o}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("set default question"),i="Please select an answer."),this.question=i,void 0!==n&&n||(console.warn("set default choices"),n=[{text:"Ok"}]),this.choices=n,this.storeKey=o}}class d extends c{constructor(e,{id:t,nextLine:s,question:i,storeKey:n}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("set deafult question"),i="What do you want to share?"),this.question=i,this.storeKey=n}}class u extends c{constructor(e,{id:t,nextLine:s,message:i}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("use default message"),i="MESSAGE"),this.message=i}}class p extends c{constructor(e,{id:t,nextLine:s,url:i,callback:n,style:o}){super(e,{id:t,nextLine:s}),this.url=i,this.callback=n,this.style=o}}async function g(e){const t=await fetch("/story-lines/"+e);return function(e){const t=e.missions,s={};if(!t)return s;for(const e in t){const i=t[e];s[e]=n.fromDict(e,i)}return console.debug(s),s}(await t.json())}},function(e,t,s){!function(t,s){var i={version:"2.12.0",areas:{},apis:{},inherit:function(e,t){for(var s in e)t.hasOwnProperty(s)||Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s));return t},stringify:function(e){return void 0===e||"function"==typeof e?e+"":JSON.stringify(e)},parse:function(e,t){try{return JSON.parse(e,t||i.revive)}catch(t){return e}},fn:function(e,t){for(var s in i.storeAPI[e]=t,i.apis)i.apis[s][e]=t},get:function(e,t){return e.getItem(t)},set:function(e,t,s){e.setItem(t,s)},remove:function(e,t){e.removeItem(t)},key:function(e,t){return e.key(t)},length:function(e){return e.length},clear:function(e){e.clear()},Store:function(e,t,s){var n=i.inherit(i.storeAPI,(function(e,t,s){return 0===arguments.length?n.getAll():"function"==typeof t?n.transact(e,t,s):void 0!==t?n.set(e,t,s):"string"==typeof e||"number"==typeof e?n.get(e):"function"==typeof e?n.each(e):e?n.setAll(e,t):n.clear()}));n._id=e;try{t.setItem("__store2_test","ok"),n._area=t,t.removeItem("__store2_test")}catch(e){n._area=i.storage("fake")}return n._ns=s||"",i.areas[e]||(i.areas[e]=n._area),i.apis[n._ns+n._id]||(i.apis[n._ns+n._id]=n),n},storeAPI:{area:function(e,t){var s=this[e];return s&&s.area||(s=i.Store(e,t,this._ns),this[e]||(this[e]=s)),s},namespace:function(e,t){if(!e)return this._ns?this._ns.substring(0,this._ns.length-1):"";var s=e,n=this[s];if(!(n&&n.namespace||(n=i.Store(this._id,this._area,this._ns+s+"."),this[s]||(this[s]=n),t)))for(var o in i.areas)n.area(o,i.areas[o]);return n},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(e){return this._area.has?this._area.has(this._in(e)):!!(this._in(e)in this._area)},size:function(){return this.keys().length},each:function(e,t){for(var s=0,n=i.length(this._area);s<n;s++){var o=this._out(i.key(this._area,s));if(void 0!==o&&!1===e.call(this,o,this.get(o),t))break;n>i.length(this._area)&&(n--,s--)}return t||this},keys:function(e){return this.each((function(e,t,s){s.push(e)}),e||[])},get:function(e,t){var s,n=i.get(this._area,this._in(e));return"function"==typeof t&&(s=t,t=null),null!==n?i.parse(n,s):null!=t?t:n},getAll:function(e){return this.each((function(e,t,s){s[e]=t}),e||{})},transact:function(e,t,s){var i=this.get(e,s),n=t(i);return this.set(e,void 0===n?i:n),this},set:function(e,t,s){var n=this.get(e);return null!=n&&!1===s?t:i.set(this._area,this._in(e),i.stringify(t),s)||n},setAll:function(e,t){var s,i;for(var n in e)i=e[n],this.set(n,i,t)!==i&&(s=!0);return s},add:function(e,t){var s=this.get(e);if(s instanceof Array)t=s.concat(t);else if(null!==s){var n=typeof s;if(n===typeof t&&"object"===n){for(var o in t)s[o]=t[o];t=s}else t=s+t}return i.set(this._area,this._in(e),i.stringify(t)),t},remove:function(e,t){var s=this.get(e,t);return i.remove(this._area,this._in(e)),s},clear:function(){return this._ns?this.each((function(e){i.remove(this._area,this._in(e))}),1):i.clear(this._area),this},clearAll:function(){var e=this._area;for(var t in i.areas)i.areas.hasOwnProperty(t)&&(this._area=i.areas[t],this.clear());return this._area=e,this},_in:function(e){return"string"!=typeof e&&(e=i.stringify(e)),this._ns?this._ns+e:e},_out:function(e){return this._ns?e&&0===e.indexOf(this._ns)?e.substring(this._ns.length):void 0:e}},storage:function(e){return i.inherit(i.storageAPI,{items:{},name:e})},storageAPI:{length:0,has:function(e){return this.items.hasOwnProperty(e)},key:function(e){var t=0;for(var s in this.items)if(this.has(s)&&e===t++)return s},setItem:function(e,t){this.has(e)||this.length++,this.items[e]=t},removeItem:function(e){this.has(e)&&(delete this.items[e],this.length--)},getItem:function(e){return this.has(e)?this.items[e]:null},clear:function(){for(var e in this.items)this.removeItem(e)}}},n=i.Store("local",function(){try{return localStorage}catch(e){}}());n.local=n,n._=i,n.area("session",function(){try{return sessionStorage}catch(e){}}()),n.area("page",i.storage("page")),"function"==typeof s&&void 0!==s.amd?s("store2",[],(function(){return n})):e.exports?e.exports=n:(t.store&&(i.conflict=t.store),t.store=n)}(this,this&&this.define)},function(e,t,s){"use strict";s.r(t);var i=s(3),n=s(2);i.a({tilemapTiledJSON:"maps/idystopia.json",storylineJSON:"regular.json",npcList:{"speaker-npc":{name:"演講者",texture:"atlas",frame:"misa-down"},"shop-clerk-npc":{name:"店員",texture:"atlas",frame:"misa-down"},"classmate-npc":{name:"同學",texture:"atlas",frame:"misa-left"},"academic-affairs-officer-npc":{name:"教務處職員",texture:"atlas",frame:"misa-left",movements:[{dx:175,dy:175}]},"department-officer-npc":{name:"系辦公室職員",texture:"atlas",frame:"misa-right"},"home-robot-npc":{name:"家用機器人",texture:"atlas",frame:"misa-right"}}}),$("#mission-panel").click(()=>{n.c.showHint()})}]);
//# sourceMappingURL=index.js.map