<?php
/* initialize */
new winPswd;
/**
 * ~ windows api for executing command line
 * authored by 9r3i
 * uri: github.com/9r3i
 * started at september 23rd 2025
 */
class winPswd{
  const version='1.0.0';
  protected $prefixKey='win';
  protected $methods=[
    'add',
    'get',
  ];
  public function __construct(){
    /* set default headers */
    $this->head();
    /* check request method as registered method */
    if(!isset($_POST['method'])
      ||!in_array($_POST['method'],$this->methods)
      ||!method_exists($this,$_POST['method'])){
      return $this->error('Invalid request.');
    }
    /* prepare argument decode from json array */
    $args=isset($_POST['args'])?@json_decode($_POST['args'],true):[];
    $args=is_array($args)?array_values($args):[];
    /* execute method */
    $out=@\call_user_func_array([$this,$_POST['method']],$args);
    /* return output to the result */
    return is_string($out)?$this->result($out)
      :$this->error('Request method "'.$_POST['method'].'" failed.');
  }
  private function get(string $server='',string $username=''){
    $o=@fopen(__DIR__.'/win.pswd.txt','rb');
    $res='-';
    while(!@feof($o)){
      $r=@fgets($o);
      if(is_string($r)
        &&strpos($r,$server)!==false
        &&strpos($r,$username)!==false){
        $res=explode(' - ',trim($r));
      }
    }
    @fclose($o);
    return json_encode($res);
  }
  private function add(string $content=''){
    $o=@fopen(__DIR__.'/win.pswd.txt','ab');
    $put=@fwrite($o,$content."\r\n");
    @fclose($o);
    return json_encode($put);
  }
  /* error output --> method: result */
  final protected function error(string $s=''){
    $s=$s?$s:'Unknown error.';
    return $this->result('Error: '.$s);
  }
  /* result output */
  final protected function result(string $s=''){
    header('HTTP/1.1 200 OK');
    header('Content-Length: '.strlen($s));
    exit($s);
  }
  /* default api headers -- [stand-alone] */
  final protected function head(){
    /* access control - to allow the access via ajax */
    header('Access-Control-Allow-Origin: *'); /* allow origin */
    header('Access-Control-Request-Method: POST, GET, OPTIONS'); /* request method */
    header('Access-Control-Request-Headers: X-PINGOTHER, Content-Type'); /* request header */
    header('Access-Control-Max-Age: 86400'); /* max age (24 hours) */
    header('Access-Control-Allow-Credentials: true'); /* allow credentials */
    /* set content type of response header */
    header('Content-Type: text/plain;charset=utf-8;');
    /* checking options */
    if(isset($_SERVER['REQUEST_METHOD'])
      &&strtoupper($_SERVER['REQUEST_METHOD'])=='OPTIONS'){
      header('Content-Language: en-US');
      header('Content-Encoding: gzip');
      header('Content-Length: 0');
      header('Vary: Accept-Encoding, Origin');
      header('HTTP/1.1 200 OK');
      exit;
    }
  }
}

