!function(e){var t={};function s(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(i,o,function(t){return e[t]}.bind(null,o));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=8)}([function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),s.d(t,"b",(function(){return d}));var i=s(5),o=s.n(i);const n={"0000000001":"MISSION/intro/step-1/done","0000000002":"MISSION/receive-package/step-1/done","0000000003":"RESPONSE/player_occupation/學生","0000000004":"RESPONSE/player_occupation/工程師","0000000005":"RESPONSE/player_occupation/律師","0000000006":"RESPONSE/player_occupation/健身教練","0000000007":"RESPONSE/player_occupation/中年職業婦女","0000000008":"RESPONSE/player_occupation/記者","0000000009":"MISSION/receive-package/step-2/done","0000000010":"MISSION/student-scene-intro/step-1/done","0000000011":"MISSION/student-scene-intro/step-2/done","0000000012":"MISSION/student-scene-intro/step-3/done","0000000013":"RESPONSE/student-intro-choice/passive","0000000014":"RESPONSE/student-intro-choice/proactive","0000000015":"MISSION/student-scene-academic-affairs-office/step-1/done","0000000016":"RESPONSE/student_asked_followup_question/false","0000000017":"RESPONSE/student_asked_followup_question/true","0000000018":"MISSION/student-scene-department-office/step-1/done","0000000019":"MISSION/student-scene-home-2/step-1/done","0000000020":"MISSION/student-scene-home-2/step-2/done","0000000021":"MISSION/student-scene-home-2/step-3/done","0000000022":"RESPONSE/student-gene-interested-in/gene","0000000023":"RESPONSE/student-gene-interested-in/system","0000000024":"MISSION/student-scene-home/step-1/done","0000000025":"MISSION/student-scene-home/step-2/done","0000000026":"MISSION/student-scene-home/step-3/done","0000000027":"MISSION/student-scene-home/workshop-ready/done","0000000028":"MISSION/digit-gene-workshop/step-1/done","0000000029":"MISSION/digit-gene-workshop/step-2/done","0000000030":"MISSION/digit-gene-workshop/step-3/done","0000000031":"MISSION/digit-gene-workshop/step-4/done","0000000032":"MISSION/intro+start/step-1/done","0000000033":"MISSION/doctor-enters-ward/step-1/done","0000000034":"RESPONSE/player_age/15~24","0000000035":"RESPONSE/player_age/25~44","0000000036":"RESPONSE/player_age/45~54","0000000037":"RESPONSE/player_age/65UP","0000000038":"MISSION/15~24/step-1/done","0000000039":"RESPONSE/player_occupation/疫情","0000000040":"RESPONSE/player_occupation/數位身分證","0000000041":"MISSION/street/step-1/done","0000000042":"MISSION/street/last/done","0000000043":"MISSION/wistoria/step-1/done","0000000044":"MISSION/wistoria/last/done","0000000045":"MISSION/ending-vo/step-1/done"},a={};for(const e in n)a[n[e]]=e;function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}!function(e){const t=[];e.fn("setAndNotify",(function(e,t){if(this.set(e,t),this.callbacks){if(r(this.callbacks,e))for(const t of this.callbacks[e])t.call(this,e);if(r(this.callbacks,"*"))for(const t of this.callbacks["*"])t.call(this,e)}})),e.fn("notify",(function(){for(const e in t)if(r(this.callbacks,e))for(const t of this.callbacks[e])t.call(this)})),e.fn("listen",(function(e,t){void 0===this.callbacks&&(this.callbacks={}),void 0===this.callbacks[e]&&(this.callbacks[e]=[]),this.callbacks[e].push(t)}))}(o.a._);const c="https://pingtung-hao-305236.middle2.me",h=o.a.namespace("REMOTE_STORE_CACHE");const l=o.a.namespace("DIALOG_ANSWER"),d=new class{constructor(){this._tokenChecked=!1}get token(){return h.get("token")}async _register(){const e=await fetch(c+"/register",{method:"POST"}),t=await e.json();if(t.token){h.set("token",t.token);const e=(new Date).getTime()+864e5;h.set("expire",e),this._tokenChecked=!0}}async _ensureToken(){if(!h.has("token"))return await this._register();if((new Date).getTime()>h.get("expire",0))return await this._register();if(!this._tokenChecked){const e=this.token,t=await fetch(`${c}/check_token?token=${e}`,{method:"GET"});if(!0!==(await t.json()).ok)return await this._register();this._tokenChecked=!0}}async _inc(e){await this._ensureToken(),console.log("increasing key: "+e);const t=`${c}/inc?token=${this.token}&key=${e}`,s=await fetch(t,{method:"POST"}),i=await s.json();return console.log(`increased key: ${e} -> ${i.value}, data: `,i),i.value}async _getc(e){await this._ensureToken();const t=`${c}/getc?token=${this.token}&key=${e}`,s=await fetch(t,{method:"GET"});return(await s.json()).value}increase(e){return e=a[e],this._inc(e)}getCount(e){return e=a[e],this._getc(e)}async getAllCount(){const e={};for(const t in n){const s=n[t],i=await this.getCount(s);e[s]=i}return e}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return h})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return p})),s.d(t,"d",(function(){return u}));var i=s(2),o=s(4),n=s(0),a=s(3);bootbox.setDefaults({closeButton:!1});class r{constructor(e,t,s,i,o,n,a){this.scene=e,Number.isNaN(i)&&(i=0),Number.isNaN(o)&&(o=0),this.id=t,this.x=i,this.y=o,this._name=s,this.texture=n,this.frame=a,this.messages=[],this.messageBox=null,this.makeContainer()}makeContainer(){this.player=this.scene.physics.add.sprite(this.x,this.y,this.texture,this.frame).setSize(32,40).setOffset(0,24),this.player.setDepth(2),this.text=this.scene.add.text(this.x,this.y,this.name,{font:"18px monospace",fill:"#fff",align:"center"}).setOrigin(.5).setStroke("#000",3).setDepth(1)}get WIDTH(){return 32}get HEIGHT(){return 32}get name(){return this._name}set name(e){this._name=e,this.text.setText(this.name)}addMessage(e,t){void 0===t&&(t=1/0),this.messages.push({message:e,expireTime:t})}clearMessage(){this.messages=[]}showMissionMark(e){e?this.addMessage("!"):this.clearMessage()}_removeOutdatedMessage(){const e=(new Date).getTime();let t=0;for(const s in this.messages)this.messages[s].expireTime>e&&(this.messages[t]=this.messages[s],t++);this.messages=this.messages.slice(0,t)}update(e,t){if(this.text.setX(this.player.x),this.text.setY(this.player.y+45),this.messages.length>0&&this._removeOutdatedMessage(),this.messages.length>0){this.messageBox||(this.messageBox=this.scene.add.text(this.player.x,this.player.y-16,"",{font:"24px monospace",fill:"#000",align:"center",backgroundColor:"white"}).setOrigin(.5,1).setDepth(99));let e="";for(const t in this.messages)e+=this.messages[t].message+"\n";this.messageBox.setText(e.slice(0,-1)),this.messageBox.setVisible(!0)}else this.messageBox&&this.messageBox.setVisible(!1);this.messageBox&&(this.messageBox.setX(this.player.x),this.messageBox.setY(this.player.y-16))}destroy(){this.player.destroy(),this.text.destroy()}}class c extends r{constructor(e,t,s,i,o,n,a,r){super(e,t,s,i,o,n,a),this.points=[],this.points.push({x:i,y:o});for(const{dx:e,dy:t}of r){const s=this.points[this.points.length-1].x,i=this.points[this.points.length-1].y;this.points.push({x:s+e,y:i+t})}this.points.length>1&&(this.nextPoint=1)}update(e,t){const s=this.points[this.nextPoint].x,o=this.points[this.nextPoint].y;Math.hypot(s-this.player.x,o-this.player.y)<Math.max(.1*i.b,i.a*t/1e3)?(this.player.setVelocity(0),this.player.setX(s),this.player.setY(o),this.nextPoint=(this.nextPoint+1)%this.points.length):(this.player.setVelocityX(s-this.x),this.player.setVelocityY(o-this.y),this.player.body.velocity.normalize().scale(i.a)),this.x=this.player.x,this.y=this.player.y,super.update(e,t)}}class h extends r{constructor(e,t,s,i,o,n,a){super(e,t,s,i,o,n,a),this.ps=[{x:i,y:o,t:0},{x:i,y:o,t:0}]}setProperty(e,t){switch(e){case"texture":const{texture:e,frame:s}=t;this.texture||(this.texture=e,this.frame=s,this.player.setTexture(e));break;case"frame":break;case"name":this.name=t;break;case"position":this.ps=[this.ps[1],t]}}update(e,t){super.update(e,t);const s=(new Date).getTime();if(s>this.ps[1].t)return;const i=this.ps[1].x-this.ps[0].x,o=this.ps[1].y-this.ps[0].y,n=this.ps[1].t-this.ps[0].t;if(n<=0)return;const a=s-this.ps[0].t;this.player.setX(this.ps[0].x+i/n*a),this.player.setY(this.ps[0].y+o/n*a);const r=Math.abs(i)>=Math.abs(o);if(r&&i<0)this.player.anims.play("misa-left-walk",!0);else if(r&&i>0)this.player.anims.play("misa-right-walk",!0);else if(o<0)this.player.anims.play("misa-back-walk",!0);else if(o>0)this.player.anims.play("misa-front-walk",!0);else{this.player.anims.stop();const e=this.player.frame.name,t=e.search("walk");if(t>0){const s=e.substr(0,t-1);this.player.setFrame(s)}}}}const l=/\$player/;const d=new class{constructor(){this.scene=null,this.chars={}}setScene(e){this.scene=e}create(e,t,s,i,o,n){if(e in this.chars)return console.error(`Character ID "${e}" is already declared:`),void console.error(this.chars[e]);const a=new r(this.scene,e,t,s,i,o,n);return this.chars[e]=a,a}createMovingNPC(e,t,s,i,o,n,a){if(e in this.chars)return console.error(`Character ID "${e}" is already declared:`),void console.error(this.chars[e]);const r=new c(this.scene,e,t,s,i,o,n,a);return this.chars[e]=r,r}createRemotePlayer(e,t,s,i,o,n){if(e in this.chars)return console.error(`Character ID "${e}" is already declared:`),void console.error(this.chars[e]);const a=new h(this.scene,e,t,s,i,o,n);return this.chars[e]=a,a}deleteChar(e){e in this.chars&&(this.chars[e].destroy(),delete this.chars[e])}getChar(e){return this.chars[e]||null}update(e,t){for(const s in this.chars){this.chars[s].update(e,t)}}},p=new class{constructor(e){this.charDaemon=e,this.dialogs={},this.hasOnGoingDialog=!1,this.dialogToTrigger=[]}get scene(){return this.charDaemon.scene}showHint(){let e="";for(const t in this.dialogs){const s=this.dialogs[t];console.log(s),e+=`<h3>${s.dialog.missionStep.title}</h3>`,e+=`<p>${s.dialog.missionStep.description}</p>`}e||(e="沒有任務!"),bootbox.alert({title:"任務列表",message:e})}getDialog(e){return e in this.dialogs?this.dialogs[e]:null}showNextDialog(e,t){this.hasOnGoingDialog=!1;e.nextDialogItem(t)?this.showDialog(e):this.doneDialog(e)}showDialog(e){const t=e.getCurrentDialogItem();if(!t)return void this.doneDialog(e);this.hasOnGoingDialog=!0;const s=this.charDaemon.getChar("player"),i=t.name.replace(l,s.name);if(console.log("showing iterator: ",e),t instanceof o.b){const o=t.line.replace(l,s.name);bootbox.alert({title:i,message:o,callback:()=>{this.showNextDialog(e)}})}else if(t instanceof o.e){const o=t.question.replace(l,s.name),n=[];for(const e in t.choices){const i=t.choices[e].text;n.push({text:i.replace(l,s.name),value:e})}bootbox.prompt({title:i,message:o,inputType:"select",onEscape:!1,backdrop:!0,inputOptions:n,buttons:{cancel:{label:"Cancel",className:"dialog-prompt-cancel"}},callback:t=>null!==t&&(this.showNextDialog(e,t),!0)}).keypress(e=>{13===e.keyCode&&$("button.bootbox-accept").click()})}else if(t instanceof o.d){const o=t.question.replace(l,s.name);bootbox.prompt({title:i,message:o,inputType:"text",onEscape:!1,backdrop:!0,buttons:{cancel:{label:"Cancel",className:"dialog-prompt-cancel"}},callback:t=>!!t&&(this.showNextDialog(e,t),!0)})}else if(t instanceof o.c){const i=t.message.replace(l,s.name);bootbox.alert({title:"",message:i,callback:()=>{this.showNextDialog(e)}})}else if(t instanceof o.a){const s=t.style||"",i=`\n      <iframe\n        id='dialog-iframe'\n        class="dialog-iframe"\n        src="${t.url}"\n        style="${s}" ></iframe>`;bootbox.dialog({message:i,size:"large",centerVertical:!0,closeButton:!0,onShown:()=>{const e=document.getElementById("dialog-iframe");console.log(e)},onHidden:()=>{console.log("on hidden"),this.showNextDialog(e)}})}}recordDone(e){n.a.setAndNotify(e,"true"),n.b.increase("MISSION/"+e)}isDialogDonePreviously(e){const t=e.dialog.missionStep,s=`${t.mission.id}/${t.id}/done`;return"true"===n.a.get(s)}doneDialog(e){this.hasOnGoingDialog=!1;const t=e.dialog.missionStep,s=t.mission;this.remove(`${s.id}/${t.id}`),this.recordDone(`${s.id}/${t.id}/done`);const i=e.nextStep;if(!i)return;console.log("nextStepKey: ",i);const o=s.steps[i];o&&this.add(`${s.id}/${o.id}`,o)}moveTo(e,t){const s=this.charDaemon.getChar("player");if(e in a.b){const i=a.b[e],o=this.scene.cameras.main;o.fadeOut(750,0,0,0,(e,n)=>{n<1||(s.player.x=i.x,s.player.y=i.y,o.fadeIn(750,0,0,0,(e,s)=>{s<1||t()}))})}else t()}startDialog(e){if(this.hasOnGoingDialog)return void console.warn("There is an on-going dialog, cannot start a new one");const t=this.getDialog(e);if(null===t)return void console.error("No such dialog: "+e);console.info("startDialog: "+e,t.dialog);const{dialog:s}=t;this.hasOnGoingDialog=!0;const i=s.getIterator();if(this.isDialogDonePreviously(i))return console.log("we have been here before"),void this.doneDialog(i);s.missionStep.moveTo?this.moveTo(s.missionStep.moveTo,()=>{this.showDialog(i)}):(console.info(i),this.showDialog(i))}checkDialogToTrigger(e){if(this.hasOnGoingDialog)return null;for(const e in this.dialogToTrigger){const{dialogId:t}=this.dialogToTrigger[e];return this.dialogToTrigger.shift(),console.info("will trigger "+t),t}for(const t in this.dialogs){const{locationId:s}=this.dialogs[t];if(s&&s in a.b){const o=a.b[s];if(Math.hypot(o.x-e.x,o.y-e.y)<2*i.b)return console.log("Will trigger dialog",t,"because of location"),t}}return null}findNearbyDialog(e){for(const t in this.dialogs){const{npcId:s}=this.dialogs[t];if(s){const o=this.charDaemon.getChar(s);if(Math.hypot(o.x-e.x,o.y-e.y)<2*i.b)return t}}return null}add(e,t){const s=t.dialog,i=t.npcId,o=t.locationId;if(console.log(`dialogId: ${e}, npcId: ${i}, loc: ${o}`),null===this.getDialog(e)){if(void 0!==t.npcId){const e=this.charDaemon.getChar(i);if(null===e)return void console.error(`NPC ${i} doesn't exist.`);e.showMissionMark(!0)}else if(void 0!==t.locationId){if(!(o in a.b))return void console.error(`Location ${o} doesn't exist.`)}else console.info(`adding ${e} to dialogToTrigger`),this.dialogToTrigger.push({dialogId:e,dialog:s});return this.dialogs[e]={npcId:i,locationId:o,dialog:s},this.dialogs[e]}console.error(`Dialog ${e} already exists.`)}remove(e){const t=this.getDialog(e);if(null===t)return;const{npcId:s}=t,i=this.charDaemon.getChar(s);null!==i&&i.showMissionMark(!1),delete this.dialogs[e]}}(d),u=new class{constructor(e){this.storyLine=null,this.dialogDaemon=e,this.missionWithDependencies={},n.a.listen("*",()=>{console.log(this);for(const e in this.missionWithDependencies){const t=this.storyLine[e];t.isReady()&&(delete this.missionWithDependencies[e],this._addToDialogDaemon(t))}})}init(e){this.storyLine=e;for(const e in this.storyLine){const t=this.storyLine[e];t.isReady()?this._addToDialogDaemon(t):this.missionWithDependencies[e]=t}console.log("not enabled missions: ",this.missionWithDependencies)}_addToDialogDaemon(e){const t=e.firstStep,s=e.steps[t],i=`${e.id}/${s.id}`;this.dialogDaemon.add(i,s)}}(p);window.charDaemon=d},function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return o}));const i=32,o=175},function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return f}));var i=s(1),o=s(0),n=s(4),a=s(2),r={};let c;var h={};let l={left:{isDown:!1},right:{isDown:!1},up:{isDown:!1},down:{isDown:!1}};const d=window.innerWidth,p=window.innerHeight;class u extends Phaser.Scene{constructor(){super("Intro")}preload(){this.load.setPath("assets/"),this.sys.game.device.os.desktop?this.load.video("intro","media/idystopia.mp4"):this.load.video("intro","media/idystopia_480p.mp4")}create(){const e=this.add.video(d/2,p/2,"intro");e.setMute(!0);const t=e.width,s=e.height,i=Math.min(d/t,p/s);e.setScale(i),console.log("playing video"),e.play(),e.on("complete",e=>{e.play(!0,6,8)}),this.sys.game.device.os.desktop?this.add.text(d/2,.9*p,"press ENTER to continue...",{font:"18px monospace",fill:"#ffffff",padding:{x:20,y:20}}).setDepth(99).setOrigin(.5):this.add.text(d/2,.9*p,"Touch screen to continue...",{font:"18px monospace",fill:"#ffffff",padding:{x:20,y:20}}).setDepth(99).setOrigin(.5),this.input.keyboard.once("keydown_ENTER",()=>{this.startNextScene()}),this.input.on("pointerup",()=>{this.startNextScene()},this)}startNextScene(){this.scene.start("Game"),this.scene.remove("Intro")}}class g extends Phaser.Scene{constructor(){super("Game")}preload(){console.log("Preload Game scene");const{tilemapTiledJSON:e,storylineJSON:t,connection:s,npcList:i}=h;this.load.setPath("assets/"),this.load.image("tiles","tiles/world.png"),this.load.image("vision","symbols/mask.png"),this.load.audio("hospital","audio/hospital.mp3"),this.load.tilemapTiledJSON("map",e+"?v=202012051335"),this.load.atlas("atlas","atlas/atlas.png","atlas/atlas.json")}onDoneCreate(){const{storylineJSON:e}=h,{gameSceneConfig:t}=h,{postBootCallback:s}=t;o.a.clearAll(),n.f(e).then(e=>{this.storyLineDaemon=i.d,this.storyLineDaemon.init(e)}),o.a.listen("player_name",()=>{c.name=o.a.get("player_name")}),s&&s()}create(){this.hospitalBackgroundMusic=this.sound.add("hospital",{loop:!0,volume:.5}),this.sound.locked?this.sound.once(Phaser.Sound.Events.UNLOCKED,()=>{this.hospitalBackgroundMusic.play()}):this.hospitalBackgroundMusic.play(),console.log("Create Game scene");const{npcList:e}=h,t=this.make.tilemap({key:"map"}),s=t.addTilesetImage("world","tiles");if(this.belowLayer=t.createStaticLayer("Below Player",s,0,0),this.worldLayer=t.createStaticLayer("World",s,0,0),this.aboveLayer=t.createStaticLayer("Above Player",s,0,0),this.worldLayer.setCollisionByProperty({collides:!0}),this.belowLayer.setDepth(0),this.worldLayer.setDepth(10),this.aboveLayer.setDepth(20),window.objectLayer=t.getObjectLayer("Objects"),t.getObjectLayer("Objects").objects.forEach(e=>{r[e.name]=e}),this.charDaemon=i.b,this.charDaemon.setScene(this),e)for(const t in e){const{name:s,texture:i,frame:o}=e[t];if(!(t in r))continue;const n=r[t];e[t].movements?this.charDaemon.createMovingNPC(t,s,n.x,n.y,i,o,e[t].movements):this.charDaemon.create(t,s,n.x,n.y,i,o)}const o=r.HOME;c=this.charDaemon.create("player","???",o.x,o.y,"atlas","misa-front"),this.player=c.player,this.vision=this.make.image({x:this.player.x,y:this.player.y,key:"vision",add:!1}),this.vision.setScale(1.5),console.log("create texture");const n=()=>{this.mask&&(this.mask.mask&&this.mask.mask.destroy(),this.mask.destroy()),this.mask=this.make.renderTexture({x:this.player.x,y:this.player.y,width:2*this.scale.width,height:2*this.scale.height},!0),this.mask.fill(0,1),this.mask.setTint(665928),this.mask.setDepth(30),this.mask.setOrigin(.5),this.mask.mask=new Phaser.Display.Masks.BitmapMask(this,this.vision),this.mask.mask.invertAlpha=!0};n(),this.scale.on("resize",()=>{console.log("resize",this.scale.width,this.scale.height),n()});const a=this.physics.add.group();for(const e in this.charDaemon.chars)if(this.charDaemon.chars.hasOwnProperty(e)){const t=this.charDaemon.chars[e].player;a.add(t),"player"!==e&&t.setImmovable(!0)}this.physics.add.collider(a,a),this.physics.add.collider(a,this.worldLayer),this.dialogDaemon=i.c;const d=this.anims;d.create({key:"misa-left-walk",frames:d.generateFrameNames("atlas",{prefix:"misa-left-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),d.create({key:"misa-right-walk",frames:d.generateFrameNames("atlas",{prefix:"misa-right-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),d.create({key:"misa-front-walk",frames:d.generateFrameNames("atlas",{prefix:"misa-front-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),d.create({key:"misa-back-walk",frames:d.generateFrameNames("atlas",{prefix:"misa-back-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1});const p=this.cameras.main;p.startFollow(this.player),p.setBounds(0,0,t.widthInPixels,t.heightInPixels);const u=[Phaser.Input.Keyboard.KeyCodes.LEFT,Phaser.Input.Keyboard.KeyCodes.RIGHT,Phaser.Input.Keyboard.KeyCodes.UP,Phaser.Input.Keyboard.KeyCodes.DOWN];for(const e of u){const t=this.input.keyboard.addKey(e,!1);t.on("down",(e,t)=>{if(!this.dialogDaemon.hasOnGoingDialog)switch(t.keyCode){case Phaser.Input.Keyboard.KeyCodes.LEFT:l.left.isDown=!0;break;case Phaser.Input.Keyboard.KeyCodes.RIGHT:l.right.isDown=!0;break;case Phaser.Input.Keyboard.KeyCodes.UP:l.up.isDown=!0;break;case Phaser.Input.Keyboard.KeyCodes.DOWN:l.down.isDown=!0}}),t.on("up",(e,t)=>{switch(t.keyCode){case Phaser.Input.Keyboard.KeyCodes.LEFT:l.left.isDown=!1;break;case Phaser.Input.Keyboard.KeyCodes.RIGHT:l.right.isDown=!1;break;case Phaser.Input.Keyboard.KeyCodes.UP:l.up.isDown=!1;break;case Phaser.Input.Keyboard.KeyCodes.DOWN:l.down.isDown=!1}})}this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER,!1).on("down",()=>{if(this.dialogDaemon.hasOnGoingDialog)return;const e=this.dialogDaemon.findNearbyDialog(this.player);null!==e&&this.dialogDaemon.startDialog(e)}),this.sys.game.device.os.desktop?($("#joystick").hide(),this.add.text(16,16,'Arrow keys to move\nPress "Enter" to interact',{font:"18px monospace",fill:"#000000",padding:{x:20,y:10},backgroundColor:"#ffffff"}).setScrollFactor(0).setDepth(30)):($("#joystick").show(),this.add.text(16,16,"Use joysticks to move\nPress the stick to interact",{font:"18px monospace",fill:"#000000",padding:{x:20,y:10},backgroundColor:"#ffffff"}).setScrollFactor(0).setDepth(30)),this.input.keyboard.once("keydown_D",e=>{this.physics.world.createDebugGraphic();const t=this.add.graphics().setAlpha(.75).setDepth(20);this.worldLayer.renderDebug(t,{tileColor:null,collidingTileColor:new Phaser.Display.Color(243,134,48,255),faceColor:new Phaser.Display.Color(40,39,37,255)})});const g=$("#joystick .touch-stick");var f=$("#joystick").width()/2,m=$("#joystick").position().left+$("#joystick").width()/2,y=$("#joystick").position().top+$("#joystick").height()/2;$(window).on("resize",(function(){m=$("#joystick").position().left+$("#joystick").width()/2,y=$("#joystick").position().top+$("#joystick").height()/2,f=$("#joystick").width()/2}));let S=!1;$("#joystick").on("touchmove",e=>{if(e.preventDefault(),S=!1,this.dialogDaemon.hasOnGoingDialog)return l.left.isDown=!1,l.right.isDown=!1,l.up.isDown=!1,void(l.down.isDown=!1);const t=e.originalEvent.targetTouches[0];let s=(t.pageX-m)/f,i=(t.pageY-y)/f;s=Math.min(Math.max(s,-1),1),i=Math.min(Math.max(i,-1),1),g.css({left:50*s+50+"%",top:50*i+50+"%"}),Math.abs(s)<.3&&(s=0,l.left.isDown=!1,l.right.isDown=!1),Math.abs(i)<.3&&(i=0,l.up.isDown=!1,l.down.isDown=!1),Math.abs(s)>=Math.abs(i)?s>0?(l.right.isDown=!0,l.left.isDown=!1):(l.right.isDown=!1,l.left.isDown=!0):i<0?(l.up.isDown=!0,l.down.isDown=!1):(l.up.isDown=!1,l.down.isDown=!0)}),$("#joystick").on("touchstart",".touch-stick",()=>{S=!0}),$("#joystick").on("touchend",".touch-stick",()=>{if($("#joystick .touch-stick").css({left:"50%",top:"50%"}),l.up.isDown=!1,l.down.isDown=!1,l.left.isDown=!1,l.right.isDown=!1,S){if(this.dialogDaemon.hasOnGoingDialog)return;const e=this.dialogDaemon.findNearbyDialog(this.player);null!==e&&this.dialogDaemon.startDialog(e)}}),this.onDoneCreate()}update(e,t){this.vision&&this.mask&&(this.vision.x=this.player.x,this.vision.y=this.player.y,this.mask.x=this.player.x,this.mask.y=this.player.y);const s=this.dialogDaemon.checkDialogToTrigger(this.player);if(null!==s)return void this.dialogDaemon.startDialog(s);const i=this.player.body.velocity.clone();this.player.body.setVelocity(0);let o=0,n=0;this.dialogDaemon.hasOnGoingDialog||(l.left.isDown?o=-a.a:l.right.isDown&&(o=a.a),l.up.isDown?n=-a.a:l.down.isDown&&(n=a.a)),this.player.body.setVelocityX(o),this.player.body.setVelocityY(n),(o||n)&&this.player.body.velocity.normalize().scale(a.a),o<0?this.player.anims.play("misa-left-walk",!0):o>0?this.player.anims.play("misa-right-walk",!0):n<0?this.player.anims.play("misa-back-walk",!0):n>0?this.player.anims.play("misa-front-walk",!0):(this.player.anims.stop(),i.x<0?this.player.setTexture("atlas","misa-left"):i.x>0?this.player.setTexture("atlas","misa-right"):i.y<0?this.player.setTexture("atlas","misa-back"):i.y>0&&this.player.setTexture("atlas","misa-front")),h.connection&&h.connection.update(e,t,c),this.charDaemon.update(e,t)}}function f({tilemapTiledJSON:e,storylineJSON:t,connection:s,npcList:i,postBootCallback:o}){h={type:Phaser.AUTO,width:d,height:p,parent:"game-container",physics:{default:"arcade",arcade:{gravity:{y:0}}},scale:{mode:Phaser.Scale.RESIZE,width:"100%",height:"100%"},scene:[u,g],gameSceneConfig:{postBootCallback:o},tilemapTiledJSON:e,storylineJSON:t,connection:s,npcList:i};return new Phaser.Game(h)}},function(e,t,s){"use strict";s.d(t,"b",(function(){return h})),s.d(t,"e",(function(){return l})),s.d(t,"d",(function(){return d})),s.d(t,"c",(function(){return p})),s.d(t,"a",(function(){return u})),s.d(t,"f",(function(){return g}));var i=s(0);class o{constructor(e,t,s,i,o){this.id=e,this.title=t,this.description=s,this.depend=i,this.firstStep=o,this.steps={}}addStep(e){this.steps[e.id]=e}_checkClause(e){for(const t in e){const s=e[t];let o,n;if(console.log("condition: ",s),"string"==typeof s?o=s:"object"==typeof s&&(o=s.storeKey,n=s.value),!i.a.has(o))return!1;if(!n)continue;if(i.a.get(o)!==n)return!1}return!0}isReady(){if(console.log("checking dependency of "+this.id,this.depend),!this.depend||0===this.depend.length)return!0;for(const e in this.depend){let t=this.depend[e];if(t instanceof Array||(t=[t]),console.log(t),this._checkClause(t))return console.log(this.id+" is ready!"),!0}return!1}static fromDict(e,t){const s=t.title||"Unnamed Mission",i=t.description||"no description",a=t.firstStep||"step-1",r=(t.depend||[]).filter(e=>"string"==typeof e||e instanceof String||("object"==typeof e||(console.warn(e+" is not a string nor an object"),!1))),c=new o(e,s,i,r,a);for(const e in t.steps){const s=n.fromDict(e,t.steps[e],c);c.addStep(s)}return c}}class n{constructor({id:e,title:t,description:s,nextStep:i,npcId:o,locationId:n,dialog:a,mission:r,moveTo:c}){this.id=e,this.title=t||"Unnamed Step",this.description=s||"...",this.nextStep=i,this.npcId=o,this.locationId=n,this.dialog=a,this.mission=r,this.moveTo=c}static fromDict(e,t,s){const i={id:e,mission:s,...t},o=new n(i),r=a.fromDict(t.dialog||[],o);return o.dialog=r,o}}class a{constructor(e){this.missionStep=e,this.dialogItems=[],this.dialogIdMap={}}addDialogItem(e){this.dialogItems.push(e),void 0!==e.id&&(this.dialogIdMap[e.id]=this.dialogItems.length-1)}getIterator(){return new r(this,this.missionStep.nextStep)}static fromDict(e,t){const s=new a(t);for(const t of e){const e=c.fromDict(t);s.addDialogItem(e)}return s}}class r{constructor(e,t){this.dialog=e,this.currentIndex=0,this.nextStep=t}getCurrentDialogItem(){const e=this.dialog.dialogItems[this.currentIndex];return e&&e.nextStep&&(this.nextStep=e.nextStep),e}nextDialogItem(e){const t=this.dialog.dialogItems[this.currentIndex];let s=this.currentIndex+1;if(void 0!==t.nextLine&&(s=this.dialog.dialogIdMap[t.nextLine]),t instanceof l&&(void 0===e&&(console.warn("This is a multiple choice question, but no selected answer. Default to the first answer."),e=0),void 0!==t.choices[e].nextLine)){const i=t.choices[e].nextLine;s=this.dialog.dialogIdMap[i]}if(t instanceof d&&t.storeKey&&i.a.setAndNotify(t.storeKey,e),t instanceof l){const s=t.choices[e].value||e;t.storeKey&&(i.a.setAndNotify(t.storeKey,s),i.b.increase("USER_RESPONSE/"+t.storeKey))}return console.info(`${this.dialog.missionStep.id} The next line is: ${s}`),this.currentIndex=s,this.getCurrentDialogItem()}}class c{constructor(e,{id:t,nextLine:s}){this.name=e,this.id=t,this.nextLine=s}static fromDict(e){const t=e.name||"John Doe",s=e.type||"line";switch(s){case"line":return new h(t,e);case"input.select":return new l(t,e);case"input.text":return new d(t,e);case"message":return new p(t,e);case"iframe":return new u(t,e);default:return console.warn("unkonwn dialog type: %s",s),new h(t,e)}}}class h extends c{constructor(e,{id:t,nextLine:s,line:i}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("One of `line` and `question` should be defined."),i="..."),this.line=i}}class l extends c{constructor(e,{id:t,nextLine:s,question:i,choices:o,storeKey:n}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("set default question"),i="Please select an answer."),this.question=i,void 0!==o&&o||(console.warn("set default choices"),o=[{text:"Ok"}]),this.choices=o,this.storeKey=n}}class d extends c{constructor(e,{id:t,nextLine:s,question:i,storeKey:o}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("set deafult question"),i="What do you want to share?"),this.question=i,this.storeKey=o}}class p extends c{constructor(e,{id:t,nextLine:s,message:i}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("use default message"),i="MESSAGE"),this.message=i}}class u extends c{constructor(e,{id:t,nextLine:s,url:i,callback:o,style:n}){super(e,{id:t,nextLine:s}),this.url=i,this.callback=o,this.style=n}}async function g(e){const t=await fetch("/story-lines/"+e);return function(e){const t=e.missions,s={};if(!t)return console.info("no mission defined"),s;for(const e in t){const i=t[e];s[e]=o.fromDict(e,i)}return console.debug(s),s}(await t.json())}},function(e,t,s){!function(t,s){var i={version:"2.12.0",areas:{},apis:{},inherit:function(e,t){for(var s in e)t.hasOwnProperty(s)||Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s));return t},stringify:function(e){return void 0===e||"function"==typeof e?e+"":JSON.stringify(e)},parse:function(e,t){try{return JSON.parse(e,t||i.revive)}catch(t){return e}},fn:function(e,t){for(var s in i.storeAPI[e]=t,i.apis)i.apis[s][e]=t},get:function(e,t){return e.getItem(t)},set:function(e,t,s){e.setItem(t,s)},remove:function(e,t){e.removeItem(t)},key:function(e,t){return e.key(t)},length:function(e){return e.length},clear:function(e){e.clear()},Store:function(e,t,s){var o=i.inherit(i.storeAPI,(function(e,t,s){return 0===arguments.length?o.getAll():"function"==typeof t?o.transact(e,t,s):void 0!==t?o.set(e,t,s):"string"==typeof e||"number"==typeof e?o.get(e):"function"==typeof e?o.each(e):e?o.setAll(e,t):o.clear()}));o._id=e;try{t.setItem("__store2_test","ok"),o._area=t,t.removeItem("__store2_test")}catch(e){o._area=i.storage("fake")}return o._ns=s||"",i.areas[e]||(i.areas[e]=o._area),i.apis[o._ns+o._id]||(i.apis[o._ns+o._id]=o),o},storeAPI:{area:function(e,t){var s=this[e];return s&&s.area||(s=i.Store(e,t,this._ns),this[e]||(this[e]=s)),s},namespace:function(e,t){if(!e)return this._ns?this._ns.substring(0,this._ns.length-1):"";var s=e,o=this[s];if(!(o&&o.namespace||(o=i.Store(this._id,this._area,this._ns+s+"."),this[s]||(this[s]=o),t)))for(var n in i.areas)o.area(n,i.areas[n]);return o},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(e){return this._area.has?this._area.has(this._in(e)):!!(this._in(e)in this._area)},size:function(){return this.keys().length},each:function(e,t){for(var s=0,o=i.length(this._area);s<o;s++){var n=this._out(i.key(this._area,s));if(void 0!==n&&!1===e.call(this,n,this.get(n),t))break;o>i.length(this._area)&&(o--,s--)}return t||this},keys:function(e){return this.each((function(e,t,s){s.push(e)}),e||[])},get:function(e,t){var s,o=i.get(this._area,this._in(e));return"function"==typeof t&&(s=t,t=null),null!==o?i.parse(o,s):null!=t?t:o},getAll:function(e){return this.each((function(e,t,s){s[e]=t}),e||{})},transact:function(e,t,s){var i=this.get(e,s),o=t(i);return this.set(e,void 0===o?i:o),this},set:function(e,t,s){var o=this.get(e);return null!=o&&!1===s?t:i.set(this._area,this._in(e),i.stringify(t),s)||o},setAll:function(e,t){var s,i;for(var o in e)i=e[o],this.set(o,i,t)!==i&&(s=!0);return s},add:function(e,t){var s=this.get(e);if(s instanceof Array)t=s.concat(t);else if(null!==s){var o=typeof s;if(o===typeof t&&"object"===o){for(var n in t)s[n]=t[n];t=s}else t=s+t}return i.set(this._area,this._in(e),i.stringify(t)),t},remove:function(e,t){var s=this.get(e,t);return i.remove(this._area,this._in(e)),s},clear:function(){return this._ns?this.each((function(e){i.remove(this._area,this._in(e))}),1):i.clear(this._area),this},clearAll:function(){var e=this._area;for(var t in i.areas)i.areas.hasOwnProperty(t)&&(this._area=i.areas[t],this.clear());return this._area=e,this},_in:function(e){return"string"!=typeof e&&(e=i.stringify(e)),this._ns?this._ns+e:e},_out:function(e){return this._ns?e&&0===e.indexOf(this._ns)?e.substring(this._ns.length):void 0:e}},storage:function(e){return i.inherit(i.storageAPI,{items:{},name:e})},storageAPI:{length:0,has:function(e){return this.items.hasOwnProperty(e)},key:function(e){var t=0;for(var s in this.items)if(this.has(s)&&e===t++)return s},setItem:function(e,t){this.has(e)||this.length++,this.items[e]=t},removeItem:function(e){this.has(e)&&(delete this.items[e],this.length--)},getItem:function(e){return this.has(e)?this.items[e]:null},clear:function(){for(var e in this.items)this.removeItem(e)}}},o=i.Store("local",function(){try{return localStorage}catch(e){}}());o.local=o,o._=i,o.area("session",function(){try{return sessionStorage}catch(e){}}()),o.area("page",i.storage("page")),"function"==typeof s&&void 0!==s.amd?s("store2",[],(function(){return o})):e.exports?e.exports=o:(t.store&&(i.conflict=t.store),t.store=o)}(this,this&&this.define)},,,function(e,t,s){"use strict";s.r(t),s.d(t,"connection",(function(){return c}));var i=s(3),o=s(1);const n={disableAudioLevels:!1,desktopSharingChromeExtId:"mbocklcggfhnbahlnepmldehdhpjfcjp",desktopSharingChromeDisabled:!1,desktopSharingChromeSources:["screen","window"],desktopSharingChromeMinExtVersion:"0.1",desktopSharingFirefoxDisabled:!0},a=function(){JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);let e=!1;return()=>{e||(JitsiMeetJS.init(n),e=!0)}}();var r=s(0);const c=new class{constructor(){this.connection=null,this.room=null,this._lastSetLocalProperty=0,this._lastBroadcastLocalProperty=0,this._sentLocalProperty={}}init(){if(a(),this.conenction)return;this.connection=new JitsiMeetJS.JitsiConnection(null,null,{hosts:{domain:"jitsi.jothon.online",muc:"conference.jitsi.jothon.online",focus:"focus.jitsi.jothon.online"},externalConnectUrl:"https://jitsi.jothon.online/http-pre-bind",bosh:"https://jitsi.jothon.online/http-bind?room=eid",websocket:"wss://jitsi.jothon.online/xmpp-websocket",clientNode:"http://jitsi.org/jitsimeet"});const e=()=>{this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,()=>this.onConnectionSuccess()),this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED,()=>this.onConnectionFailed()),this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,e)};this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,()=>this.onConnectionSuccess()),this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED,()=>this.onConnectionFailed()),this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,e),this.connection.connect()}disconnect(){this.connection&&(this.connection.disconnect(),this.connection=null)}onConnectionSuccess(){this._initConferenceRoom()}onConnectionFailed(){console.log("Failed to connect to Jitsi...")}_initConferenceRoom(){if(console.log("roomId: ","eid"),this.room)return this.room;const e={openBridgeChannel:"websocket",confID:"jitsi.jothon.online/eid"};return this.room=this.connection.initJitsiConference("eid",e),this.room.setDisplayName("???"),this.room.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED,()=>{this.onConferenceJoined()}),this.room.join(),this.room}setLocalParticipantProperty(e){const t=(new Date).getTime();if(!(t-this._lastSetLocalProperty<=6e4)&&(console.info("call setLocalParticipantProperty",e),this._lastSetLocalProperty=t,this.room))for(const t in e)t in this._sentLocalProperty&&this._sentLocalProperty[t]===e[t]||(this.room.setLocalParticipantProperty(t,e[t]),this._sentLocalProperty[t]=e[t])}setDisplayName(e){this.room&&this.room.setDisplayName(e)}disconnect(){this.room&&(this.room.leave(),this.room=null),this.connection&&(this.connection.disconnect(),this.connection=null)}loadParticipants(){if(!this.room||!this.connection)return;const e=this.room.participants;for(const t in e){const s=e[t];console.log("load user: ",t,s);o.b.getChar(t)?console.log(`user ${t} already created, skip`):o.b.createRemotePlayer(t,s.getDisplayName(),Number(s.getProperty("left")),Number(s.getProperty("top")),s.getProperty("texture"),s.getProperty("frame"))}for(const t in o.b.chars){o.b.chars[t]instanceof o.a&&(t in e||delete o.b.chars[t])}}onConferenceJoined(){this.loadParticipants(),this.room.on(JitsiMeetJS.events.conference.USER_JOINED,(e,t)=>{console.log("user joined",t),o.b.createRemotePlayer(e,t.getDisplayName(),0,0,t.getProperty("texture"),t.getProperty("frame"))}),this.room.on(JitsiMeetJS.events.conference.MESSAGE_RECEIVED,(e,t,s)=>{let i;console.log("message received: ",{id:e,text:t,timestamp:s}),void 0===s?s=(new Date).getTime():("string"==typeof s||s instanceof String)&&(s=new Date(s).getTime()),i=e===this.room.myUserId()?o.b.getChar("player"):o.b.getChar(e),i&&i.addMessage(t,s+6e4)}),this.room.on(JitsiMeetJS.events.conference.USER_LEFT,e=>{o.b.deleteChar(e)}),this.room.on(JitsiMeetJS.events.conference.PARTICIPANT_PROPERTY_CHANGED,(e,t)=>{const s=e.getId(),i=o.b.getChar(s);if(!i)return;if(!this.room||!this.connection)return;const n=parseInt(e.getProperty("left")),a=parseInt(e.getProperty("top"));Number.isNaN(n)||Number.isNaN(a)||(i.setProperty("x",n),i.setProperty("y",a));const r=e.getProperty("texture"),c=e.getProperty("frame");r&&c&&(c!==i.frame||r!==i.texture)&&(i.setProperty("texture",r),i.setProperty("frame",c))}),this.room.on(JitsiMeetJS.events.conference.ENDPOINT_MESSAGE_RECEIVED,(e,t)=>{if("eid-player-property"===t.type){const s=t.property,i=e.getId(),n=o.b.getChar(i);if(!n)return;const a=Number(s.left),r=Number(s.top);if(!1===Number.isNaN(a)&&!1===Number.isNaN(r)){const e=(new Date).getTime()+100;n.setProperty("position",{x:a,y:r,t:e})}n.setProperty("texture",{texture:s.texture,frame:s.frame})}}),this.room.on(JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED,(e,t)=>{const s=o.b.getChar(e);s&&s.setProperty("name",t)})}sendMessage(e){this.room.sendTextMessage(e)}broadcastLocalProperty(e){if(!this.room)return;const t=(new Date).getTime();if(!(t-this._lastBroadcastLocalProperty<=100)){this._lastBroadcastLocalProperty=t;try{this.room.broadcastEndpointMessage({type:"eid-player-property",property:e})}catch(e){}}}update(e,t,s){this.broadcastLocalProperty({left:s.player.x,top:s.player.y,texture:s.player.texture.key,frame:s.player.frame.name})}};window.connection=c;const h=i.a({tilemapTiledJSON:"maps/idystopia.json",storylineJSON:"online_event.json",connection:c,postBootCallback:function(){console.log("initJitsi"),c.init()}});r.a.listen("player_name",()=>{c.setDisplayName(r.a.get("player_name"))}),$("#control-panel").draggable({create:function(){$(this).css({top:$(this).position().top,left:$(this).position().left,bottom:"auto",right:"auto"})}}),$("#button-sound").click(()=>{const e=$("#button-sound");let t=!h.sound.mute;h.sound.setMute(t),e.blur(),t?e.text("🔇"):e.text("🔊")}),$("#emoji-send").click(()=>{const e=document.getElementById("emoji-select");c.sendMessage(e.value)})}]);
//# sourceMappingURL=online_event.js.map