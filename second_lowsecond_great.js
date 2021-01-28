// pour resoudre cet exercise, nous nous rassurerons que le tableau a l'entree est trie, si ce n'est pas le cas, on trie le tableau et on renvois les elements a la position 1 et taile tableau - 2
// on realise un tri fusion
function fusion(l1,l2){
 var l = [];
 while(l1.length && l2.length){
   if(l1[0] < l2[0]){
       l.push(l1.shift());
   }
   else{
       l.push(l2.shift());
   }
 }
 while(l1.length){
       l.push(l1.shift());
 }
 while(l2.length){
       l.push(l2.shift());
 }
 return l;
}
function trier(t){
 var n = t.length;
 if(n === 0 || n === 1){
    return t;
 }
 else{
 var t1 = trier(t.slice(0,n/2));
 var t2 = trier(t.slice(n/2));
  return fusion(t1,t2);
 }
}
function second_lowsecond_great(t){
 var res = trier(t);
  var sol = [];
  sol.push(res[1]);
  sol.push(res[res.length - 2]);
 return sol;
}
 tab = [1,2,3,4,5];
 second_lowsecond_great(tab);
