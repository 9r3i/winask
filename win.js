
/* windows client */
;function win(host=''){
this.version='1.0.0';
this.protocol=host.match(/^\d+\.\d+/)?'http:':'https:';
this.host=[this.protocol,'',host,'win.php'].join('/');
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
    token:'win'+this.token(),
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


