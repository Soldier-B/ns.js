function Namespace(ns, fn){
  'use strict';
  
  ns = ns.split('.').reduce(function(node, name){
    return node[name] || (node[name] = {});
  }, (0, eval)('this'));
	
  if('function' == typeof fn)
    fn.call(ns);
	
  return ns;
}
