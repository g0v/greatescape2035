!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=7)}([function(e,t,s){"use strict";s.d(t,"a",(function(){return h})),s.d(t,"b",(function(){return d}));var i=s(4),n=s.n(i);const o={"0000000001":"MISSION/intro/step-1/done","0000000002":"MISSION/receive-package/step-1/done","0000000003":"RESPONSE/player_occupation/學生","0000000004":"RESPONSE/player_occupation/工程師","0000000005":"RESPONSE/player_occupation/律師","0000000006":"RESPONSE/player_occupation/健身教練","0000000007":"RESPONSE/player_occupation/中年職業婦女","0000000008":"RESPONSE/player_occupation/記者","0000000009":"MISSION/receive-package/step-2/done","0000000010":"MISSION/student-scene-intro/step-1/done","0000000011":"MISSION/student-scene-intro/step-2/done","0000000012":"MISSION/student-scene-intro/step-3/done","0000000013":"RESPONSE/student-intro-choice/passive","0000000014":"RESPONSE/student-intro-choice/proactive","0000000015":"MISSION/student-scene-academic-affairs-office/step-1/done","0000000016":"RESPONSE/student_asked_followup_question/false","0000000017":"RESPONSE/student_asked_followup_question/true","0000000018":"MISSION/student-scene-department-office/step-1/done","0000000019":"MISSION/student-scene-home-2/step-1/done","0000000020":"MISSION/student-scene-home-2/step-2/done","0000000021":"MISSION/student-scene-home-2/step-3/done","0000000022":"RESPONSE/student-gene-interested-in/gene","0000000023":"RESPONSE/student-gene-interested-in/system","0000000024":"MISSION/student-scene-home/step-1/done","0000000025":"MISSION/student-scene-home/step-2/done","0000000026":"MISSION/student-scene-home/step-3/done","0000000027":"MISSION/student-scene-home/workshop-ready/done","0000000028":"MISSION/digit-gene-workshop/step-1/done","0000000029":"MISSION/digit-gene-workshop/step-2/done","0000000030":"MISSION/digit-gene-workshop/step-3/done","0000000031":"MISSION/digit-gene-workshop/step-4/done"},a={};for(const e in o)a[o[e]]=e;function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}!function(e){const t=[];e.fn("setAndNotify",(function(e,t){if(this.set(e,t),this.callbacks){if(r(this.callbacks,e))for(const t of this.callbacks[e])t.call(this,e);if(r(this.callbacks,"*"))for(const t of this.callbacks["*"])t.call(this,e)}})),e.fn("notify",(function(){for(const e in t)if(r(this.callbacks,e))for(const t of this.callbacks[e])t.call(this)})),e.fn("listen",(function(e,t){void 0===this.callbacks&&(this.callbacks={}),void 0===this.callbacks[e]&&(this.callbacks[e]=[]),this.callbacks[e].push(t)}))}(n.a._);const c="https://pingtung-hao-305236.middle2.me",l=n.a.namespace("REMOTE_STORE_CACHE");const h=n.a.namespace("DIALOG_ANSWER"),d=new class{constructor(){this._tokenChecked=!1}get token(){return l.get("token")}async _register(){const e=await fetch(c+"/register",{method:"POST"}),t=await e.json();if(t.token){l.set("token",t.token);const e=(new Date).getTime()+864e5;l.set("expire",e),this._tokenChecked=!0}}async _ensureToken(){if(!l.has("token"))return await this._register();if((new Date).getTime()>l.get("expire",0))return await this._register();if(!this._tokenChecked){const e=this.token,t=await fetch(`${c}/check_token?token=${e}`,{method:"GET"});if(!0!==(await t.json()).ok)return await this._register();this._tokenChecked=!0}}async _inc(e){await this._ensureToken(),console.log("increasing key: "+e);const t=`${c}/inc?token=${this.token}&key=${e}`,s=await fetch(t,{method:"POST"}),i=await s.json();return console.log(`increased key: ${e} -> ${i.value}, data: `,i),i.value}async _getc(e){await this._ensureToken();const t=`${c}/getc?token=${this.token}&key=${e}`,s=await fetch(t,{method:"GET"});return(await s.json()).value}increase(e){return e=a[e],this._inc(e)}getCount(e){return e=a[e],this._getc(e)}async getAllCount(){const e={};for(const t in o){const s=o[t],i=await this.getCount(s);e[s]=i}return e}}},function(e,t,s){"use strict";s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return l})),s.d(t,"c",(function(){return h})),s.d(t,"d",(function(){return d}));var i=s(3),n=s(0),o=s(2);class a{constructor(e,t,s,i,n,o,a){this.phaser=e,Number.isNaN(i)&&(i=0),Number.isNaN(n)&&(n=0),this.id=t,this.x=i,this.y=n,this._name=s,this.texture=o,this.frame=a,this.messages=[],this.messageBox=null,this.makeContainer()}makeContainer(){this.player=this.phaser.physics.add.sprite(this.x,this.y,this.texture,this.frame).setSize(32,40).setOffset(0,24),this.player.setDepth(2),this.text=this.phaser.add.text(this.x,this.y,this.name,{font:"18px monospace",fill:"#fff",align:"center"}).setOrigin(.5).setStroke("#000",3).setDepth(1)}get WIDTH(){return 32}get HEIGHT(){return 32}get SPEED(){return 256}get name(){return this._name}set name(e){this._name=e,this.text.setText(this.name)}addMessage(e,t){void 0===t&&(t=1/0),this.messages.push({message:e,expireTime:t})}clearMessage(){this.messages=[]}showMissionMark(e){e?this.addMessage("!"):this.clearMessage()}_removeOutdatedMessage(){const e=(new Date).getTime();let t=0;for(const s in this.messages)this.messages[s].expireTime>e&&(this.messages[t]=this.messages[s],t++);this.messages=this.messages.slice(0,t)}update(){if(this.text.setX(this.player.x),this.text.setY(this.player.y+45),this.messages.length>0)if(this._removeOutdatedMessage(),this.messages.length>0){this.messageBox||(this.messageBox=this.phaser.add.text(this.player.x,this.player.y-16,"",{font:"24px monospace",fill:"#000",align:"center",backgroundColor:"white"}).setOrigin(.5,1).setDepth(99));let e="";for(const t in this.messages)e+=this.messages[t].message+"\n";this.messageBox.setText(e.slice(0,-1))}else this.messageBox&&this.messageBox.hide();this.messageBox&&(this.messageBox.setX(this.player.x),this.messageBox.setY(this.player.y-16))}destroy(){this.player.destroy(),this.text.destroy()}}class r extends a{constructor(e,t,s,i,n,o,a){super(e,t,s,i,n,o,a),this.jitsiProperty={}}setProperty(e,t){switch(e){case"texture":this.texture=t,this.player.setTexture(t);break;case"frame":this.frame=t,this.player.setFrame(t);break;case"name":this.name=t;break;case"x":this.x=t;break;case"y":this.y=t}}update(){super.update(),this.player.setX(this.x),this.player.setY(this.y)}}const c=/\$player/;const l=new class{constructor(){this.phaser=null,this.chars={}}setPhaser(e){this.phaser=e}create(e,t,s,i,n,o){if(e in this.chars)return console.error(`Character ID "${e}" is already declared:`),void console.error(this.chars[e]);const r=new a(this.phaser,e,t,s,i,n,o);return this.chars[e]=r,r}createRemotePlayer(e,t,s,i,n,o){if(e in this.chars)return console.error(`Character ID "${e}" is already declared:`),void console.error(this.chars[e]);const a=new r(this.phaser,e,t,s,i,n,o);return this.chars[e]=a,a}deleteChar(e){e in this.chars&&(this.chars[e].destroy(),delete this.chars[e])}getChar(e){return e in this.chars?this.chars[e]:null}update(e,t){for(const s in this.chars){this.chars[s].update(e,t)}}},h=new class{constructor(e){this.charDaemon=e,this.dialogs={},this.hasOnGoingDialog=!1,this.dialogToTrigger=[]}showHint(){let e="";for(const t in this.dialogs){const s=this.dialogs[t];console.log(s),e+=`<h3>${s.dialog.missionStep.title}</h3>`,e+=`<p>${s.dialog.missionStep.description}</p>`}e||(e="沒有任務!"),bootbox.alert({title:"任務列表",message:e})}getDialog(e){return e in this.dialogs?this.dialogs[e]:null}showDialog(e){const t=e.getCurrentDialogItem();if(!t)return void this.doneDialog(e);this.hasOnGoingDialog=!0;const s=this.charDaemon.getChar("player"),n=t.name.replace(c,s.name);if(t instanceof i.b){const i=t.line.replace(c,s.name);bootbox.alert({title:n,message:i,callback:()=>{this.hasOnGoingDialog=!1;e.nextDialogItem()?this.showDialog(e):this.doneDialog(e)}})}else if(t instanceof i.e){const i=t.question.replace(c,s.name),o=[];for(const e in t.choices){const i=t.choices[e].text;o.push({text:i.replace(c,s.name),value:e})}bootbox.prompt({title:n,message:i,inputType:"select",onEscape:!1,backdrop:!0,inputOptions:o,callback:t=>{if(null===t)return!1;this.hasOnGoingDialog=!1;return e.nextDialogItem(t)?this.showDialog(e):this.doneDialog(e),!0}})}else if(t instanceof i.d){const i=t.question.replace(c,s.name);bootbox.prompt({title:n,message:i,inputType:"text",onEscape:!1,backdrop:!0,callback:t=>{if(!t)return!1;this.hasOnGoingDialog=!1;return e.nextDialogItem(t)?this.showDialog(e):this.doneDialog(e),!0}})}else if(t instanceof i.c){const i=t.message.replace(c,s.name);bootbox.alert({title:"",message:i,callback:()=>{this.hasOnGoingDialog=!1;e.nextDialogItem()?this.showDialog(e):this.doneDialog(e)}})}else if(t instanceof i.a){const e=t.style||"",s=`\n      <iframe\n        id='dialog-iframe'\n        class="dialog-iframe"\n        src="${t.url}"\n        style="${e}" ></iframe>`;bootbox.dialog({message:s,size:"large",centerVertical:!0,closeButton:!0,onShown:()=>{const e=document.getElementById("dialog-iframe");console.log(e)},onHidden:()=>{console.log("on hidden")}})}}recordDone(e){n.a.setAndNotify(e,"true"),n.b.increase("MISSION/"+e)}doneDialog(e){const t=e.dialog.missionStep,s=t.mission;this.remove(`${s.id}/${t.id}`),this.recordDone(`${s.id}/${t.id}/done`);const i=e.nextStep;if(!i)return;console.log("nextStepKey: ",i);const n=s.steps[i];n&&this.add(`${s.id}/${n.id}`,n)}moveTo(e){const t=this.charDaemon.getChar("player");if(e in o.b){const s=o.b[e];t.player.x=s.x,t.player.y=s.y}}startDialog(e){if(this.hasOnGoingDialog)return void console.warn("There is an on-going dialog, cannot start a new one");const t=this.getDialog(e);if(null===t)return void console.error("No such dialog: "+e);console.info("startDialog: "+e,t.dialog);const{dialog:s}=t;s.missionStep.moveTo&&this.moveTo(s.missionStep.moveTo);const i=s.getIterator();this.showDialog(i)}checkDialogToTrigger(e){if(this.hasOnGoingDialog)return null;for(const e in this.dialogToTrigger){const{dialogId:t}=this.dialogToTrigger[e];return this.dialogToTrigger.shift(),t}for(const t in this.dialogs){const{locationId:s}=this.dialogs[t];if(s&&s in o.b){const i=o.b[s];if(Math.hypot(i.x-e.x,i.y-e.y)<64)return console.log("Will trigger dialog",t,"because of location"),t}}return null}findNearbyDialog(e){for(const t in this.dialogs){const{npcId:s}=this.dialogs[t];if(s){const i=this.charDaemon.getChar(s);if(Math.hypot(i.x-e.x,i.y-e.y)<64)return t}}return null}add(e,t){const s=t.dialog,i=t.npcId,n=t.locationId;if(console.log(`dialogId: ${e}, npcId: ${i}, loc: ${n}`),null===this.getDialog(e)){if(void 0!==t.npcId){const e=this.charDaemon.getChar(i);if(null===e)return void console.error(`NPC ${i} doesn't exist.`);e.showMissionMark(!0)}else if(void 0!==t.locationId){if(!(n in o.b))return void console.error(`Location ${n} doesn't exist.`)}else console.warn(`adding ${e} to dialogToTrigger`),this.dialogToTrigger.push({dialogId:e,dialog:s});return this.dialogs[e]={npcId:i,locationId:n,dialog:s},this.dialogs[e]}console.error(`Dialog ${e} already exists.`)}remove(e){const t=this.getDialog(e);if(null===t)return;const{npcId:s}=t,i=this.charDaemon.getChar(s);null!==i&&i.showMissionMark(!1),delete this.dialogs[e]}}(l),d=new class{constructor(e){this.storyLine=null,this.dialogDaemon=e,this.missionWithDependencies={},n.a.listen("*",()=>{console.log(this);for(const e in this.missionWithDependencies){const t=this.storyLine[e];t.isReady()&&(delete this.missionWithDependencies[e],this._addToDialogDaemon(t))}})}init(e){this.storyLine=e;for(const e in this.storyLine){const t=this.storyLine[e];t.isReady()?this._addToDialogDaemon(t):this.missionWithDependencies[e]=t}console.log("not enabled missions: ",this.missionWithDependencies)}_addToDialogDaemon(e){const t=e.firstStep,s=e.steps[t],i=`${e.id}/${s.id}`;this.dialogDaemon.add(i,s)}}(h);window.charDaemon=l},function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return r}));var i=s(1),n=s(0),o=s(3),a={};function r({tilemapTiledJSON:e,storylineJSON:t,connection:s,npcList:r}){const c=window.innerWidth,l=window.innerHeight;let h,d,u;const p={type:Phaser.AUTO,width:c,height:l,parent:"game-container",pixelArt:!0,physics:{default:"arcade",arcade:{gravity:{y:0}}},scene:{preload:function(){this.load.setPath("assets/"),this.load.image("tiles","tiles/world.png"),this.load.tilemapTiledJSON("map",e),this.load.atlas("atlas","atlas/atlas.png","atlas/atlas.json")},create:function(){const e=this.make.tilemap({key:"map"}),s=e.addTilesetImage("world","tiles"),c=e.createStaticLayer("Below Player",s,0,0),l=e.createStaticLayer("World",s,0,0),p=e.createStaticLayer("Above Player",s,0,0);if(l.setCollisionByProperty({collides:!0}),c.setDepth(0),l.setDepth(10),p.setDepth(20),window.objectLayer=e.getObjectLayer("Objects"),e.getObjectLayer("Objects").objects.forEach(e=>{a[e.name]=e}),this.charDaemon=i.b,this.charDaemon.setPhaser(this),r)for(const e in r){const{name:t,texture:s,frame:i}=r[e];if(e in a){const n=a[e];this.charDaemon.create(e,t,n.x,n.y,s,i)}}const f=a.HOME;u=this.charDaemon.create("player","???",f.x,f.y,"atlas","misa-front"),d=u.player;const g=this.physics.add.group();for(const e in this.charDaemon.chars)if(this.charDaemon.chars.hasOwnProperty(e)){const t=this.charDaemon.chars[e].player;g.add(t),"player"!==e&&t.setImmovable(!0)}this.physics.add.collider(g,g),this.physics.add.collider(g,l),this.dialogDaemon=i.c,n.a.clearAll(),o.f(t).then(e=>{this.storyLineDaemon=i.d,this.storyLineDaemon.init(e)}),n.a.listen("player_name",e=>{u.name=n.a.get("player_name")});const m=this.anims;m.create({key:"misa-left-walk",frames:m.generateFrameNames("atlas",{prefix:"misa-left-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),m.create({key:"misa-right-walk",frames:m.generateFrameNames("atlas",{prefix:"misa-right-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),m.create({key:"misa-front-walk",frames:m.generateFrameNames("atlas",{prefix:"misa-front-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1}),m.create({key:"misa-back-walk",frames:m.generateFrameNames("atlas",{prefix:"misa-back-walk.",start:0,end:3,zeroPad:3}),frameRate:10,repeat:-1});const y=this.cameras.main;y.startFollow(d),y.setBounds(0,0,e.widthInPixels,e.heightInPixels),h=this.input.keyboard.createCursorKeys(),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER).on("down",(e,t)=>{if(this.dialogDaemon.hasOnGoingDialog)return;const s=this.dialogDaemon.findNearbyDialog(d);null!==s&&this.dialogDaemon.startDialog(s)}),"block"==$("#joystick").css("display")?this.add.text(16,16,"Use joysticks to move\nPress the stick to interact",{font:"18px monospace",fill:"#000000",padding:{x:20,y:10},backgroundColor:"#ffffff"}).setScrollFactor(0).setDepth(30):this.add.text(16,16,'Arrow keys to move\nPress "Enter" to interact',{font:"18px monospace",fill:"#000000",padding:{x:20,y:10},backgroundColor:"#ffffff"}).setScrollFactor(0).setDepth(30),this.input.keyboard.once("keydown_D",e=>{this.physics.world.createDebugGraphic();const t=this.add.graphics().setAlpha(.75).setDepth(20);l.renderDebug(t,{tileColor:null,collidingTileColor:new Phaser.Display.Color(243,134,48,255),faceColor:new Phaser.Display.Color(40,39,37,255)})}),$("#joystick .touch-stick");var D=$("#joystick").width()/2,S=$("#joystick").position().left+$("#joystick").width()/2,w=$("#joystick").position().top+$("#joystick").height()/2;$(window).on("resize",(function(){S=$("#joystick").position().left+$("#joystick").width()/2,w=$("#joystick").position().top+$("#joystick").height()/2,D=$("#joystick").width()/2}));var k=!1;$("#joystick").on("touchmove",".touch-stick",(function(e){e.preventDefault(),k=!1;var t=e.originalEvent.targetTouches[0],s=(t.pageX-S)/D,i=(t.pageY-w)/D;s=Math.min(Math.max(s,-1),1),i=Math.min(Math.max(i,-1),1),$(this).css({left:50*s+50+"%",top:50*i+50+"%"}),Math.abs(s)<.3&&(s=0,h.left.isDown=!1,h.right.isDown=!1),Math.abs(i)<.3&&(i=0,h.up.isDown=!1,h.down.isDown=!1),Math.abs(s)>=Math.abs(i)?s>0?(h.right.isDown=!0,h.left.isDown=!1):(h.right.isDown=!1,h.left.isDown=!0):i<0?(h.up.isDown=!0,h.down.isDown=!1):(h.up.isDown=!1,h.down.isDown=!0)})),$("#joystick").on("touchstart",".touch-stick",(function(e){k=!0})),$("#joystick").on("touchend",".touch-stick",()=>{if($("#joystick .touch-stick").css({left:"50%",top:"50%"}),h.up.isDown=!1,h.down.isDown=!1,h.left.isDown=!1,h.right.isDown=!1,k){if(this.dialogDaemon.hasOnGoingDialog)return;const e=this.dialogDaemon.findNearbyDialog(d);null!==e&&this.dialogDaemon.startDialog(e)}})},update:function(e,t){const i=this.dialogDaemon.checkDialogToTrigger(d);if(null!==i)return void this.dialogDaemon.startDialog(i);const n=d.body.velocity.clone();d.body.setVelocity(0),h.left.isDown?d.body.setVelocityX(-175):h.right.isDown&&d.body.setVelocityX(175),h.up.isDown?d.body.setVelocityY(-175):h.down.isDown&&d.body.setVelocityY(175),d.body.velocity.normalize().scale(175),h.left.isDown?d.anims.play("misa-left-walk",!0):h.right.isDown?d.anims.play("misa-right-walk",!0):h.up.isDown?d.anims.play("misa-back-walk",!0):h.down.isDown?d.anims.play("misa-front-walk",!0):(d.anims.stop(),n.x<0?d.setTexture("atlas","misa-left"):n.x>0?d.setTexture("atlas","misa-right"):n.y<0?d.setTexture("atlas","misa-back"):n.y>0&&d.setTexture("atlas","misa-front")),s&&s.update(e,t,u),this.charDaemon.update()}}};return new Phaser.Game(p)}},function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"e",(function(){return h})),s.d(t,"d",(function(){return d})),s.d(t,"c",(function(){return u})),s.d(t,"a",(function(){return p})),s.d(t,"f",(function(){return f}));var i=s(0);class n{constructor(e,t,s,i,n){this.id=e,this.title=t,this.description=s,this.depend=i,this.firstStep=n,this.steps={}}addStep(e){this.steps[e.id]=e}_checkClause(e){for(const t in e){const s=e[t];let n,o;if(console.log("condition: ",s),"string"==typeof s?n=s:"object"==typeof s&&(n=s.storeKey,o=s.value),!i.a.has(n))return!1;if(!o)continue;if(i.a.get(n)!==o)return!1}return!0}isReady(){if(console.log("checking dependency of "+this.id,this.depend),!this.depend||0===this.depend.length)return!0;for(const e in this.depend){let t=this.depend[e];if(t instanceof Array||(t=[t]),console.log(t),this._checkClause(t))return console.log(this.id+" is ready!"),!0}return!1}static fromDict(e,t){const s=t.title||"Unnamed Mission",i=t.description||"no description",a=t.firstStep||"step-1",r=(t.depend||[]).filter(e=>"string"==typeof e||e instanceof String||("object"==typeof e||(console.warn(e+" is not a string nor an object"),!1))),c=new n(e,s,i,r,a);for(const e in t.steps){const s=o.fromDict(e,t.steps[e],c);c.addStep(s)}return c}}class o{constructor({id:e,title:t,description:s,nextStep:i,npcId:n,locationId:o,dialog:a,mission:r,moveTo:c}){this.id=e,this.title=t||"Unnamed Step",this.description=s||"...",this.nextStep=i,this.npcId=n,this.locationId=o,this.dialog=a,this.mission=r,this.moveTo=c}static fromDict(e,t,s){const i={id:e,mission:s,...t},n=new o(i),r=a.fromDict(t.dialog||[],n);return n.dialog=r,n}}class a{constructor(e){this.missionStep=e,this.dialogItems=[],this.dialogIdMap={}}addDialogItem(e){this.dialogItems.push(e),void 0!==e.id&&(this.dialogIdMap[e.id]=this.dialogItems.length-1)}getIterator(){return new r(this,this.missionStep.nextStep)}static fromDict(e,t){const s=new a(t);for(const t of e){const e=c.fromDict(t);s.addDialogItem(e)}return s}}class r{constructor(e,t){this.dialog=e,this.currentIndex=0,this.nextStep=t}getCurrentDialogItem(){const e=this.dialog.dialogItems[this.currentIndex];return e&&e.nextStep&&(this.nextStep=e.nextStep),e}nextDialogItem(e){const t=this.dialog.dialogItems[this.currentIndex];let s=this.currentIndex+1;if(void 0!==t.nextLine&&(s=this.dialog.dialogIdMap[t.nextLine]),t instanceof h&&(void 0===e&&(console.warn("This is a multiple choice question, but no selected answer. Default to the first answer."),e=0),void 0!==t.choices[e].nextLine)){const i=t.choices[e].nextLine;s=this.dialog.dialogIdMap[i]}if(t instanceof d&&t.storeKey&&i.a.setAndNotify(t.storeKey,e),t instanceof h){const s=t.choices[e].value||e;t.storeKey&&(i.a.setAndNotify(t.storeKey,s),i.b.increase("USER_RESPONSE/"+t.storeKey))}return console.info(`${this.dialog.missionStep.id} The next line is: ${s}`),this.currentIndex=s,this.getCurrentDialogItem()}}class c{constructor(e,{id:t,nextLine:s}){this.name=e,this.id=t,this.nextLine=s}static fromDict(e){const t=e.name||"John Doe",s=e.type||"line";switch(s){case"line":return new l(t,e);case"input.select":return new h(t,e);case"input.text":return new d(t,e);case"message":return new u(t,e);case"iframe":return new p(t,e);default:return console.warn("unkonwn dialog type: %s",s),new l(t,e)}}}class l extends c{constructor(e,{id:t,nextLine:s,line:i}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("One of `line` and `question` should be defined."),i="..."),this.line=i}}class h extends c{constructor(e,{id:t,nextLine:s,question:i,choices:n,storeKey:o}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("set default question"),i="Please select an answer."),this.question=i,void 0!==n&&n||(console.warn("set default choices"),n=[{text:"Ok"}]),this.choices=n,this.storeKey=o}}class d extends c{constructor(e,{id:t,nextLine:s,question:i,storeKey:n}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("set deafult question"),i="What do you want to share?"),this.question=i,this.storeKey=n}}class u extends c{constructor(e,{id:t,nextLine:s,message:i}){super(e,{id:t,nextLine:s}),void 0===i&&(console.warn("use default message"),i="MESSAGE"),this.message=i}}class p extends c{constructor(e,{id:t,nextLine:s,url:i,callback:n,style:o}){super(e,{id:t,nextLine:s}),this.url=i,this.callback=n,this.style=o}}async function f(e){const t=await fetch("/story-lines/"+e);return function(e){const t=e.missions,s={};if(!t)return s;for(const e in t){const i=t[e];s[e]=n.fromDict(e,i)}return console.debug(s),s}(await t.json())}},function(e,t,s){!function(t,s){var i={version:"2.12.0",areas:{},apis:{},inherit:function(e,t){for(var s in e)t.hasOwnProperty(s)||Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s));return t},stringify:function(e){return void 0===e||"function"==typeof e?e+"":JSON.stringify(e)},parse:function(e,t){try{return JSON.parse(e,t||i.revive)}catch(t){return e}},fn:function(e,t){for(var s in i.storeAPI[e]=t,i.apis)i.apis[s][e]=t},get:function(e,t){return e.getItem(t)},set:function(e,t,s){e.setItem(t,s)},remove:function(e,t){e.removeItem(t)},key:function(e,t){return e.key(t)},length:function(e){return e.length},clear:function(e){e.clear()},Store:function(e,t,s){var n=i.inherit(i.storeAPI,(function(e,t,s){return 0===arguments.length?n.getAll():"function"==typeof t?n.transact(e,t,s):void 0!==t?n.set(e,t,s):"string"==typeof e||"number"==typeof e?n.get(e):"function"==typeof e?n.each(e):e?n.setAll(e,t):n.clear()}));n._id=e;try{t.setItem("__store2_test","ok"),n._area=t,t.removeItem("__store2_test")}catch(e){n._area=i.storage("fake")}return n._ns=s||"",i.areas[e]||(i.areas[e]=n._area),i.apis[n._ns+n._id]||(i.apis[n._ns+n._id]=n),n},storeAPI:{area:function(e,t){var s=this[e];return s&&s.area||(s=i.Store(e,t,this._ns),this[e]||(this[e]=s)),s},namespace:function(e,t){if(!e)return this._ns?this._ns.substring(0,this._ns.length-1):"";var s=e,n=this[s];if(!(n&&n.namespace||(n=i.Store(this._id,this._area,this._ns+s+"."),this[s]||(this[s]=n),t)))for(var o in i.areas)n.area(o,i.areas[o]);return n},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(e){return this._area.has?this._area.has(this._in(e)):!!(this._in(e)in this._area)},size:function(){return this.keys().length},each:function(e,t){for(var s=0,n=i.length(this._area);s<n;s++){var o=this._out(i.key(this._area,s));if(void 0!==o&&!1===e.call(this,o,this.get(o),t))break;n>i.length(this._area)&&(n--,s--)}return t||this},keys:function(e){return this.each((function(e,t,s){s.push(e)}),e||[])},get:function(e,t){var s,n=i.get(this._area,this._in(e));return"function"==typeof t&&(s=t,t=null),null!==n?i.parse(n,s):null!=t?t:n},getAll:function(e){return this.each((function(e,t,s){s[e]=t}),e||{})},transact:function(e,t,s){var i=this.get(e,s),n=t(i);return this.set(e,void 0===n?i:n),this},set:function(e,t,s){var n=this.get(e);return null!=n&&!1===s?t:i.set(this._area,this._in(e),i.stringify(t),s)||n},setAll:function(e,t){var s,i;for(var n in e)i=e[n],this.set(n,i,t)!==i&&(s=!0);return s},add:function(e,t){var s=this.get(e);if(s instanceof Array)t=s.concat(t);else if(null!==s){var n=typeof s;if(n===typeof t&&"object"===n){for(var o in t)s[o]=t[o];t=s}else t=s+t}return i.set(this._area,this._in(e),i.stringify(t)),t},remove:function(e,t){var s=this.get(e,t);return i.remove(this._area,this._in(e)),s},clear:function(){return this._ns?this.each((function(e){i.remove(this._area,this._in(e))}),1):i.clear(this._area),this},clearAll:function(){var e=this._area;for(var t in i.areas)i.areas.hasOwnProperty(t)&&(this._area=i.areas[t],this.clear());return this._area=e,this},_in:function(e){return"string"!=typeof e&&(e=i.stringify(e)),this._ns?this._ns+e:e},_out:function(e){return this._ns?e&&0===e.indexOf(this._ns)?e.substring(this._ns.length):void 0:e}},storage:function(e){return i.inherit(i.storageAPI,{items:{},name:e})},storageAPI:{length:0,has:function(e){return this.items.hasOwnProperty(e)},key:function(e){var t=0;for(var s in this.items)if(this.has(s)&&e===t++)return s},setItem:function(e,t){this.has(e)||this.length++,this.items[e]=t},removeItem:function(e){this.has(e)&&(delete this.items[e],this.length--)},getItem:function(e){return this.has(e)?this.items[e]:null},clear:function(){for(var e in this.items)this.removeItem(e)}}},n=i.Store("local",function(){try{return localStorage}catch(e){}}());n.local=n,n._=i,n.area("session",function(){try{return sessionStorage}catch(e){}}()),n.area("page",i.storage("page")),"function"==typeof s&&void 0!==s.amd?s("store2",[],(function(){return n})):e.exports?e.exports=n:(t.store&&(i.conflict=t.store),t.store=n)}(this,this&&this.define)},,,function(e,t,s){"use strict";s.r(t),s.d(t,"connection",(function(){return c}));var i=s(2),n=s(1);const o={disableAudioLevels:!1,desktopSharingChromeExtId:"mbocklcggfhnbahlnepmldehdhpjfcjp",desktopSharingChromeDisabled:!1,desktopSharingChromeSources:["screen","window"],desktopSharingChromeMinExtVersion:"0.1",desktopSharingFirefoxDisabled:!0},a=function(){JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);let e=!1;return()=>{e||(JitsiMeetJS.init(o),e=!0)}}();var r=s(0);const c=new class{constructor(){this.connection=null,this.room=null,this._lastSetLocalProperty=0,this._lastBroadcastLocalProperty=0,this._sentLocalProperty={}}init(){if(a(),this.conenction)return;this.connection=new JitsiMeetJS.JitsiConnection(null,null,{hosts:{domain:"jitsi.jothon.online",muc:"conference.jitsi.jothon.online",focus:"focus.jitsi.jothon.online"},bosh:"wss://jitsi.jothon.online/xmpp-websocket",websocket:"wss://jitsi.jothon.online/xmpp-websocket",clientNode:"http://jitsi.org/jitsimeet"});const e=()=>{this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,()=>this.onConnectionSuccess()),this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED,()=>this.onConnectionFailed()),this.connection.removeEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,e)};this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,()=>this.onConnectionSuccess()),this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED,()=>this.onConnectionFailed()),this.connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,e),this.connection.connect()}disconnect(){this.connection&&(this.connection.disconnect(),this.connection=null)}onConnectionSuccess(){this._initConferenceRoom()}onConnectionFailed(){console.log("Failed to connect to Jitsi...")}_initConferenceRoom(){if(console.log("roomId: ","eid"),this.room)return this.room;const e={openBridgeChannel:!0,confID:"jitsi.jothon.online/eid"};return this.room=this.connection.initJitsiConference("eid",e),this.room.setDisplayName("???"),this.room.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED,()=>{this.onConferenceJoined()}),this.room.join(),this.room}setLocalParticipantProperty(e){const t=(new Date).getTime();if(!(t-this._lastSetLocalProperty<=500)&&(console.info("call setLocalParticipantProperty",e),this._lastSetLocalProperty=t,this.room))for(const t in e)t in this._sentLocalProperty&&this._sentLocalProperty[t]===e[t]||this.room.setLocalParticipantProperty(t,e[t])}setDisplayName(e){this.room&&this.room.setDisplayName(e)}disconnect(){this.room&&(this.room.leave(),this.room=null),this.connection&&(this.connection.disconnect(),this.connection=null)}loadParticipants(){if(!this.room||!this.connection)return;const e=this.room.participants;for(const t in e){const s=e[t];console.log(t,s);n.b.getChar(t)||n.b.createRemotePlayer(t,s.getDisplayName(),parseInt(s.getProperty("left")),parseInt(s.getProperty("top")),s.getProperty("texture"),s.getProperty("frame"))}for(const t in n.b.chars){n.b.chars[t]instanceof n.a&&(t in e||delete n.b.chars[t])}}onConferenceJoined(){this.loadParticipants(),this.room.on(JitsiMeetJS.events.conference.USER_JOINED,(e,t)=>{n.b.createRemotePlayer(e,t.getDisplayName())}),this.room.on(JitsiMeetJS.events.conference.MESSAGE_RECEIVED,(e,t,s)=>{let i;console.log({id:e,text:t,timestamp:s}),void 0===s?s=(new Date).getTime():("string"==typeof s||s instanceof String)&&(s=new Date(s).getTime()),i=e===this.room.myUserId()?n.b.getChar("player"):n.b.getChar(e),i&&i.addMessage(t,s+6e4)}),this.room.on(JitsiMeetJS.events.conference.USER_LEFT,e=>{n.b.deleteChar(e)}),this.room.on(JitsiMeetJS.events.conference.PARTICIPANT_PROPERTY_CHANGED,(e,t)=>{}),this.room.on(JitsiMeetJS.events.conference.ENDPOINT_MESSAGE_RECEIVED,(e,t)=>{if("eid-player-property"===t.type){const s=t.property,i=e.getId(),o=n.b.getChar(i);if(!o)return;const a=parseInt(s.left),r=parseInt(s.top);Number.isNaN(a)||Number.isNaN(r)||(o.setProperty("x",a),o.setProperty("y",r));const c=s.texture,l=s.frame;c&&l&&(l!==o.frame||c!==o.texture)&&(o.setProperty("texture",c),o.setProperty("frame",l))}}),this.room.on(JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED,(e,t)=>{const s=n.b.getChar(e);s&&s.setProperty("name",t)})}sendMessage(e){this.room.sendTextMessage(e)}_broadcastLocalProperty(e){if(!this.room)return;const t=(new Date).getTime();if(!(t-this._lastBroadcastLocalProperty<=500)){this._lastBroadcastLocalProperty=t;try{this.room.broadcastEndpointMessage({type:"eid-player-property",property:e})}catch(e){console.error("failed to broadcast new property",e)}}}update(e,t,s){this._broadcastLocalProperty({left:s.player.x,top:s.player.y,texture:s.player.texture.key,frame:s.player.frame.name})}};window.connection=c,i.a({tilemapTiledJSON:"maps/idystopia.json",storylineJSON:"online_event.json",connection:c}),c.init(),r.a.listen("player_name",()=>{c.setDisplayName(r.a.get("player_name"))}),$("#control-panel").draggable({create:function(){$(this).css({top:$(this).position().top,left:$(this).position().left,bottom:"auto",right:"auto"})}}).click(()=>{const e=document.getElementById("emoji-select");c.sendMessage(e.value)})}]);
//# sourceMappingURL=online_event.js.map