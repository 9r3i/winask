/* windows client */
;function win(host='',path='win.php',prefix='win'){
this.version='1.0.0';
this.protocol=host.match(/^\d+\.\d+/)?'http:':'https:';
this.host=[this.protocol,'',host,path].join('/');
this.prefix=prefix;


this.button=function(name,click,dset={}){
  let el=document.createElement('button');
  el.innerText=name;
  el.dataset.name=name;
  el.classList.add('win-button');
  el.addEventListener('click',click,false);
  for(let k in dset){
    el.dataset[k]=dset[k];
  }
  return el;
};

this.on=async function(){
  return await this.request('on');
};
this.test=async function(){
  return await this.request('test',arguments);
};
this.shell=async function(cmd=''){
  return await this.request('shell',[cmd]);
};
this.pass=async function(cmd=''){
  return await this.request('pass',[cmd]);
};
this.request=async function(method='test',args=[]){
  let res=await this.fetch(this.host,{
    token:this.prefix+this.token(),
    method:method,
    args:JSON.stringify(args),
  });
  return res;
};
this.token=function(){
  let now=Math.ceil((new Date).getTime()/1000)+60;
  return now.toString(36);
};
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
this.temp=function(){
  return false;
};
};
