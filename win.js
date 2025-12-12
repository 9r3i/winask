let comx=[
    'shela-acrologic-tonnishly.ngrok-free.app',
    'uninnocently-unprovoking-marcelina.ngrok-free.app',
    'gyrally-vaned-meggan.ngrok-free.app',
    'merlene-zincous-unmercurially.ngrok-free.app',
    'hypothetically-prehexameral-khadijah.ngrok-free.app',
    'loyal-prime-falcon.ngrok-free.app',
    '127.0.0.1',
],
servers={
  aisyah01:{
    name:'lab-aisyah01',
    username:'aisyah01',
    host:[
      //'192.168.1.18',
      'shela-acrologic-tonnishly.ngrok-free.app',
      //'odontological-devyn-chorioallantoic.ngrok-free.app',
    ],
  },
  aisyah02:{
    name:'lab-aisyah02',
    username:'aisyah02',
    host:[
      //'192.168.1.17',
      // -- 'uninnocently-unprovoking-marcelina.ngrok-free.app',
      //'myrl-applausive-semisuccessfully.ngrok-free.app',
      'postumbilical-clavately-arlinda.ngrok-free.dev',
    ],
  },
  aisyah03:{
    name:'lab-aisyah03',
    username:'aisyah03',
    host:[
      //'192.168.1.19',
      'gyrally-vaned-meggan.ngrok-free.app',
      //'elane-heteromorphic-maximina.ngrok-free.app',
    ],
  },
  aisyah04:{
    name:'lab-aisyah04',
    username:'aisyah04',
    host:[
      //'192.168.1.20',
      'merlene-zincous-unmercurially.ngrok-free.app',
      //'unpatent-isabela-pneumatically.ngrok-free.app',
    ],
  },
  aisyah05:{
    name:'lab-aisyah05',
    username:'aisyah05',
    host:[
      //'192.168.1.21',
      'hypothetically-prehexameral-khadijah.ngrok-free.app',
      //'waniest-botchily-pamella.ngrok-free.app',
    ],
  },
  aakasep:{
    name:'aakasep',
    username:'niner',
    host:[
      //'192.168.1.12',
      'loyal-prime-falcon.ngrok-free.app',
      //'127.0.0.1',
    ],
  },
  hciblaster:{
    name:'ak007',
    username:'ak007',
    host:[
      //'192.168.11.1',
      'careful-urchin-curiously.ngrok-free.app',
      //'127.0.0.1',
    ],
  },
},
commands={
  shutdown:{
    method:'pass',
    cmd:'shutdown /s /f /t 0',
  },
  reboot:{
    method:'pass',
    cmd:'shutdown /r /f /t 0',
  },
  taskkill:{
    method:'pass',
    cmd:'taskkill /f /im firefox.exe',
  },
  ip:{
    method:'shell',
    cmd:'ipconfig',
  },
  mute:{
    method:'pass',
    cmd:'C:\\xampp\\htdocs\\SoundVolumeView.exe /Mute "DefaultRenderDevice" ',
  },
  unmute:{
    method:'pass',
    cmd:'C:\\xampp\\htdocs\\SoundVolumeView.exe /Unmute "DefaultRenderDevice" ',
  },
  vol10:{
    method:'pass',
    cmd:'C:\\xampp\\htdocs\\SoundVolumeView.exe /SetVolume "DefaultRenderDevice" 10 ',
  },
  vol100:{
    method:'pass',
    cmd:'C:\\xampp\\htdocs\\SoundVolumeView.exe /SetVolume "DefaultRenderDevice" 100 ',
  },
  volsave:{
    method:'pass',
    cmd:'C:\\xampp\\htdocs\\SoundVolumeView.exe /stext C:\\xampp\\htdocs\\volume.txt ',
  },
  volvalue:{
    method:'shell',
    cmd:'C:\\xampp\\htdocs\\SoundVolumeView.exe /Stdout /GetPercent "DefaultRenderDevice" & echo %errorlevel%',
  },
  battery:{
    method:'shell',
    cmd:'powercfg /batteryreport',
  },
  message:{
    method:'pass',
    cmd:'msg * /server:<server_name> "hey, kamu lagi apa?"',
  },
  on:{
    method:'on',
    cmd:'',
  },
  test:{
    method:'test',
    cmd:'dir',
  },
  whoami:{
    method:'shell',
    cmd:'whoami',
  },
  pwd:{
    method:'shell',
    cmd:'pwd',
  },
  tkeys:{
    method:'shell',
    cmd:'type keys.txt',
  },
  npswd:{
    method:'shell',
    cmd:'net user ',
    /* net user <username> <password> */
  },
  pswd:{
    method:'shell',
    cmd:'type pswd.txt ',
  },
  gpswd:{
    method:'get',
    cmd:'',
  },
  echo:{
    method:'shell',
    cmd:'echo testing aja ini mah \> pswd.txt ',
  },
},
nircmd='C:\\xampp\\htdocs\\nircmd.exe',
remotes={
  up:{
    method:'pass',
    cmd:'C:\\xampp\\htdocs\\nircmd.exe sendkeypress up ',
  },
  down:{
    method:'pass',
    cmd:'C:\\xampp\\htdocs\\nircmd.exe sendkeypress down ',
  },
  space:{
    method:'pass',
    cmd:'C:\\xampp\\htdocs\\nircmd.exe sendkeypress space ',
  },
  
},
allb=[
  'shutdown',
  'reboot',
  'mute',
  'taskkill',
  'vol10',
  'vol100',
];


function parseDom(str){
  let dp=new DOMParser;
  return dp.parseFromString(str,'text/html');
}
function pre(){
  let el=document.createElement('pre');
  el.innerText='testing';
  return el.outerHTML;
}
function rent(text){
  this.request.send(url,text);
  return text;
}



init(servers,commands);
//initRemote('192.168.11.224',remotes);



/* initialize */
async function init(servers={},commands={}){
  let WE=new WinElement,
  olOne=WE.element('ol',null,{
    type:'i',
  },[
    WE.element('h1','WinAsk Servers')
  ]).appendTo(document.body),
  statuses=[];
  for(let name in servers){
    let server=servers[name],
    username=server.username,
    pre=WE.element('pre'),
    status=WE.element('span','...',{'class':'status'}),
    liOne=WE.element('li',server.name,{
      id:name,
    },[status]).appendTo(olOne),
    olTwo=WE.element('ol',null,{
      type:'a',
    }).appendTo(liOne);
    for(let host of server.host){
      let liTwo=WE.element('li',host), // .appendTo(olTwo)
      olThree=WE.element('ol',null,{
        type:'1',
      }).appendTo(liOne); // .appendTo(litwo);
      for(let cname in commands){
        let command=commands[cname],
        btn=WE.button(':'+cname,async function(){
          let wc=new WinClient(host);
          if(!wc.hasOwnProperty(this.dataset.method)){
            this.innerText=':error';
          }
          if(this.dataset.name=='message'){
            let msg=prompt('Message:','1 menit lagi');
            if(!msg){return;}
            this.innerText='Loading...';
            this.pre.innerText='Loading...';
            let cmd='msg * /server:'+this.dataset.server+' "'+msg+'"',
            res=await wc[this.dataset.method](cmd);
            this.innerText=':'+cname;
            this.pre.innerText=res;
            return;
          }else if(this.dataset.name=='gpswd'){
            this.innerText='Loading...';
            this.pre.innerText='Loading...';
            let res=await wc.fetch('win.pswd.php',{
              method:'get',
              args:JSON.stringify([
                this.dataset.server,
                this.dataset.username,
              ]),
            });
            this.innerText=':'+cname;
            this.pre.innerText=res;
            return;
          }else if(this.dataset.name=='npswd'){
            let newToken=Math.random().toString().slice(2,8),
            npswd=prompt('Token for '+this.dataset.username,newToken);
            if(!npswd){return;}
            let cmd=this.dataset.cmd+this.dataset.username+' '+npswd,
            cmd2='echo '+npswd+' > pswd.txt';
            this.innerText='Loading...';
            this.pre.innerText='Loading...';
            let res=await wc[this.dataset.method](cmd);
            this.pre.innerText='Saving...';
            let res2=await wc.write('pswd.txt',npswd);
            this.pre.innerText='Adding...';
            let res3=await wc.fetch('win.pswd.php',{
              method:'add',
              args:JSON.stringify([
                [
                  this.dataset.server,
                  this.dataset.username,
                  npswd,
                ].join(' - '),
              ]),
            });
            this.innerText=':'+cname;
            this.pre.innerText=[res,res2,res3].join('\r\n---\r\n');
            return;
          }else if(this.dataset.name=='shutdown'){
            let sec=prompt('Time on second:','0');
            if(!sec){return;}
            this.innerText='Loading...';
            this.pre.innerText='Loading...';
            let cmd='shutdown /s /f /t '+sec,
            res=await wc[this.dataset.method](cmd);
            this.innerText=':'+cname;
            this.pre.innerText=res;
            return;
          }else if(this.dataset.name=='reboot'){
            let sec=prompt('Time on second:','0');
            if(!sec){return;}
            this.innerText='Loading...';
            this.pre.innerText='Loading...';
            let cmd='shutdown /r /f /t '+sec,
            res=await wc[this.dataset.method](cmd);
            this.innerText=':'+cname;
            this.pre.innerText=res;
            return;
          }else if(this.dataset.name=='batteries'){
            
            return;
          }
          this.innerText='Loading...';
          this.pre.innerText='Loading...';
          let res=await wc[this.dataset.method](this.dataset.cmd);
          this.innerText=':'+cname;
          this.pre.innerText=res;
          if(this.dataset.name=='battery'){
            window.open('//'+host+'/battery-report.html','_blank');
          }
        },{
          method:command.method,
          cmd:command.cmd,
          host:host,
          name:cname,
          server:server.name,
          username:username,
        }),
        liThree=WE.element('li',null,{
          'class':'li-button',
        }).appendTo(olThree);
        btn.appendTo(liThree);
        btn.pre=pre;
      }
    }
    pre.appendTo(liOne);
    let wc=new WinClient(server.host[0]);
    status.wc=wc;
    status.dataset.li=liOne.id;
    status.onclick=function(){
      let base='30px';
      for(let sli of statuses){
        let li=document.getElementById(sli.dataset.li);
        if(li.style.height==base&&sli.dataset.li==this.dataset.li){
          //li.style.height=li.dataset.height+'px';
          li.style.height='auto';
        }else{
          li.style.height=base;
        }
      }
    };
    statuses.push(status);
    liOne.dataset.height=liOne.offsetHeight;
  }
  let all=WE.element('div','all: ',{
    'class':'win-all',
  },[
    WE.button(':refresh',async function(){
      document.body.innerHTML='';
      return await init(servers,commands);
    }),
    WE.button(':status',async function(){
      this.innerText='Loading...';
      await isOnline(statuses);
      this.innerText=':status';
    }),
  ]).appendTo(document.body);
  for(let command of allb){
    WE.button(':'+command,async function(){
      let command=this.dataset.command;
      for(let name in servers){
        this.innerText='Loading... '+name;
        let wc=new WinClient(servers[name].host[0]);
        await wc[commands[command].method](commands[command].cmd);
      }
      this.innerText=':'+command;
    },{command}).appendTo(all);
  }
  for(let status of statuses){
    let base='30px',
    li=document.getElementById(status.dataset.li);
    li.style.height=base;
  }
  await isOnline(statuses);
  /**
  let check=setInterval(async ()=>{
    await isOnline(statuses);
  },20*1000);
  //*/
}

async function isOnline(statuses){
  for(let status of statuses){
    status.innerText='Loading...';
    status.classList.remove('status-online');
    status.classList.remove('status-offline');
    let res=await status.wc.on();
    if(res==1){
      status.classList.add('status-online');
      status.innerText='Online';
    }else{
      status.classList.add('status-offline');
      status.innerText='Offline';
    }
  }
  return true;
}

async function initRemote(host,remotes){
  let WE=new WinElement;
  for(let key in remotes){
    let remote=remotes[key];
    WE.button(':'+key,async function(){
      let wc=new WinClient(host);
      if(!wc.hasOwnProperty(this.dataset.method)){
        this.innerText=':error';
      }
      this.innerText='Loading...';
      let res=await wc[this.dataset.method](this.dataset.cmd);
      this.innerText=':'+this.dataset.key;
    },{
      method:remote.method,
      cmd:remote.cmd,
      key,
    }).appendTo(document.body);
  }
}


/* windows element */
;function WinElement(){
this.version='1.0.0';
/* button */
this.button=function(name,click,dset={}){
  let el=this.element('button',name,{
    'class':'win-button',
  });
  el.dataset.name=name;
  el.addEventListener('click',click,false);
  for(let k in dset){
    el.dataset[k]=dset[k];
  }
  return el;
};
/* element -- create new element */
this.element=function(tag,text,attr,children,html,content){
  let div=document.createElement(typeof tag==='string'?tag:'div');
  div.appendTo=function(el){
    if(typeof el==='object'&&el!==null
      &&typeof el.append==='function'){
      el.append(this);
    }else{
      console.warning('WinElement::warning: '+this.args.tag+' cannot be appended!');
    }
    return this;
  };
  if(typeof text==='string'){
    div.innerText=text;
  }
  if(typeof attr==='object'&&attr!==null){
    for(let i in attr){
      div.setAttribute(i,attr[i]);
    }
  }
  if(Array.isArray(children)){
    for(let i=0;i<children.length;i++){
      div.append(children[i]);
    }
  }
  if(typeof html==='string'){
    div.innerHTML=html;
  }
  if(typeof content==='string'){
    div.textContent=content;
  }
  div.args={
    tag:tag,
    text:text,
    attr:attr,
    children:children,
    html:html,
    content:content,
  };
  return div;
};
};

/* windows client */
;function WinClient(host='',path='win.php',prefix='win'){
this.version='1.1.0';
this.protocol=host.match(/^\d+\.\d+/)?'http:':'https:';
this.host=[this.protocol,'',host,path].join('/');
this.prefix=prefix;
/* request on -- tell the server is online */
this.on=async function(){
  return await this.request('on');
};
/* request test -- testing arguments are sent right */
this.test=async function(){
  return await this.request('test',arguments);
};
/* request write */
this.write=async function(file='',content=''){
  return await this.request('write',[file,content]);
};
/* request shell -- shell_exec */
this.shell=async function(cmd=''){
  return await this.request('shell',[cmd]);
};
/* request pass -- passthru */
this.pass=async function(cmd=''){
  return await this.request('pass',[cmd]);
};
/* request -- manage request by access token and prefix inside */
this.request=async function(method='test',args=[]){
  let res=await this.fetch(this.host,{
    token:this.prefix+this.token(),
    method:method,
    args:JSON.stringify(args),
  });
  return res;
};
/* generate access token */
this.token=function(t=60){
  let now=Math.ceil((new Date).getTime()/1000)+t;
  return now.toString(36);
};
/* fetch -- manage headers and method */
this.fetch=async function(url,data){
  let opt={
    mode:'cors',
    method:'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
    },
    body:new URLSearchParams(data).toString(),
  },
  res=await fetch(url,opt)
    .then(r=>r.text())
    .catch(e=>JSON.stringify(e));
  return res;
};
/* temp -- always return false */
this.temp=function(){
  return false;
};
};








