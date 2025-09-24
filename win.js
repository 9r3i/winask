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
  battery:{
    method:'shell',
    cmd:'powercfg /batteryreport',
  },
  on:{
    method:'on',
    cmd:'',
  },
  test:{
    method:'test',
    cmd:'dir',
  },
};

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
    pre=WE.element('pre'),
    status=WE.element('span','...',{'class':'status'}),
    liOne=WE.element('li',name,{},[status]).appendTo(olOne),
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
          this.innerText='Loading...';
          this.pre.innerText='Loading...';
          let res=await wc[this.dataset.method](this.dataset.cmd);
          this.innerText=':'+cname;
          this.pre.innerText=res;
        },{
          method:command.method,
          cmd:command.cmd,
          host:host,
          name:cname,
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
    statuses.push(status);
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
  for(let command of ['shutdown','reboot','mute','taskkill']){
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
  await isOnline(statuses);
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
this.version='1.0.0';
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
