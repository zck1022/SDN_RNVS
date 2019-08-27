!function(I){"use strict";var M=I.ht,h=M.Default,C=h.getInternal(),l=C.ui(),w=null,A="__segmentLengths",x="__lineTotalLength",n="__linePoints",S="__distance0",m="flow.count",V="flow.step",r="flow.element.max",z="flow.element.count",L="flow.element.min",y="flow.element.space",c="flow.element.autorotate",W="flow.element.background",v="flow.element.shadow.max",U="flow.element.shadow.min",e="flow.element.shadow.begincolor",B="flow.element.shadow.endcolor",d="flow.element.shadow.visible",T="flow.element.image",G="flow",O=M.Math.Vector2,o=new O;new O,new O,M.List;var K=M.Default._edgeProtectMethod,u=K.getStraightLinePoints,k=function(B,x){for(var i=[],Z=B.length,p=0;Z>p;p++){var l=B[p];l._as&&(l=l._as);for(var M=l[0],Y=1;Y<l.length;Y++)i.push([M,l[Y]]),M=l[Y]}for(var H=[],p=0;p<i.length;p++){var I=b(i[p][0],i[p][1],x);H.push(I)}return{distance:H,segments:i}},j=function(u,N,$){if(u){for(var W,Z=k(u,N),i=Z.distance,O=Z.segments,A=1/0,x=null,K=0,f=i.length;f>K;K++){var T=i[K];T.z<A&&(W=K,A=T.z,x=T)}if(null==$&&($=.1),x.z<$){for(var v=0,m=0;W>=m;m++)v+=h.getDistance(O[m][0],W>m?O[m][1]:x);return v}}},b=function(h,$,Y){var T=h.x,s=h.y,o=$.x,Z=$.y,c=Y.x,m=Y.y,B=o-T,C=Z-s,W=Math.sqrt(B*B+C*C),v=B/W,X=C/W,z=(-T+c)*v+(-s+m)*X,O={x:T+z*v,y:s+z*X};return O.x>=Math.min(h.x,$.x)&&O.x<=Math.max(h.x,$.x)&&O.y>=Math.min(h.y,$.y)&&O.y<=Math.max(h.y,$.y)||(O.x=Math.abs(O.x-h.x)<Math.abs(O.x-$.x)?h.x:$.x,O.y=Math.abs(O.y-h.y)<Math.abs(O.y-$.y)?h.y:$.y),B=c-O.x,C=m-O.y,O.z=Math.sqrt(B*B+C*C),O},s=function(w,N){if(w){var K=k(w,N).distance,W=1/0,d=null;return K.forEach(function(I){I.z<W&&(W=I.z,d=I)}),d}},g=K.calculateLineLength,i=K.calcSegmentIndexByDistance,N=K.calculatePointAlongLine,Y=function(_,Q,m){if(!_)return m;if(0===Q){var c=_[0][0],k=_[0][1];return m+Math.atan2(k.y-c.y,k.x-c.x)}if(100===Q){_=_[_.length-1];var c=_[_.length-2],k=_[_.length-1];return m+Math.atan2(k.y-c.y,k.x-c.x)}for(var J=0,b=[],P=_.length,Z=0;P>Z;Z++){var R=_[Z],U=g(R);J+=U,b.push(U)}for(var $=J*Q/100,y=i($,b),q=0,z=0;y>z;z++)q+=b[z];$-=q;for(var s=N(_[y],$),E=_[y],S=0,u=0,x=0;x<E.length-1;x++){var A=E[x],L=E[x+1],T=L.x-A.x,W=L.y-A.y,F=Math.sqrt(T*T+W*W);if(S+=F,S>$){u=x;break}}var K=E[u];return m+Math.atan2(s.y-K.y,s.x-K.x)},F=function(x){var Q=0;if(x)if(Array.isArray(x[0]))for(var o=x.length,p=0;o>p;p++){var P=x[p],Y=g(P);Q+=Y}else Q=g(x);return Q},H=function(A,F,D,V){return o.set(F,D).rotateAround(null,V),A?{x:A.x+o.x,y:A.y+o.y}:{x:o.x,y:o.y}},E=function(b){var Z=b._data,O=u(b);if(O){Z.s("flow.reverse")&&(O.reverse(),O.forEach(function(A){A.reverse()}));for(var p=0,E=[],t=O.length,s=0;t>s;s++){var v=O[s],V=g(v);p+=V,E.push(V)}if(Z[A]=E,Z[x]=p,Z[n]=O,Z instanceof M.Edge){var C=h.unionPoint(O),P=C.x+C.width/2,$=C.y+C.height/2;Z.$10e={x:P,y:$}}Q(b,!0)}},J=K.getPercentPosition,Q=function(t,I){var D=t._data,W=D[x],Q=D.s(m),o=D.s(V),i=0,b=D[A],R=D.s(r),u=D.s(L),U=D.s(z),h=(R-u)/(U-1),J=[];if(b){if(1===U)J.push(R);else if(2===U)J.push(R),J.push(u);else{if(!(U>2))return;J.push(R);for(var Z=U-2;Z>0;Z--)J.push(u+h*Z);J.push(u)}var T=0,N=0;J.forEach(function(f){U-1>T&&(N+=D.getFlowElementSpace(f)),T++}),N+=(R+u)/2,i=(W-Q*N+N)/Q;var M=t[S];for(null==M&&(M=0),I||(M+=o);M>W+N;){var P=t._overCount;P?P++:P=1,P>=Q&&(P=null),t._overCount=P,D.s("flow.autoreverse")?P?M-=i+N:(M=0,D.s("flow.reverse",!D.s("flow.reverse"))):M-=i+N}t[S]=M}},R="prototype",D=M.graph.GraphView[R],X=M.Data[R],f=l.DataUI[R],t=l.ShapeUI[R],$=l.EdgeUI[R],Z=M.DataModel[R],P=M.Style;P[r]==w&&(P[r]=7),P[L]==w&&(P[L]=0),P[m]==w&&(P[m]=1),P[V]==w&&(P[V]=3),P[z]==w&&(P[z]=10),P[y]==w&&(P[y]=3.5),P[c]==w&&(P[c]=!1),P[W]==w&&(P[W]="rgba(255, 255, 114, 0.4)"),P[e]==w&&(P[e]="rgba(255, 255, 0, 0.3)"),P[B]==w&&(P[B]="rgba(255, 255, 0, 0)"),P[d]==w&&(P[d]=1),P[v]==w&&(P[v]=22),P[U]==w&&(P[U]=4),D.calculatePointLength=function(L,G,r){var k=this.getDataUI(L),W=u(k);return j(W,G,r)},h.calculatePointLength=function(d,H,M,l){var V=u(w,d,H);return j(V,M,l)},h.calculateClosestPointOnLine=b,D.calculateClosestPoint=function(F,R){var J=this.getDataUI(F),I=u(J);return s(I,R)},h.calculateClosestPoint=function(R,S,J){var i=u(w,R,S);return s(i,J)},D.getPercentAngle=function(e,U){var q=this.getDataUI(e),t=u(q);return e.getRotation?e.getRotation():0,Y(t,U,e.getRotation?e.getRotation():0)},h.getPercentAngle=function(y,X,d){var K=u(w,y,X);return Y(K,d,0)},D.calculateLength=function(g){var _=this.getDataUI(g),n=u(_);return F(n)},h.calculateLength=function(n,l){var i=u(w,n,l);return F(i)},D.getPercentPosition=function(k,m){var s=this.getDataUI(k),S=u(s);return J(S,m)},h.getPercentPositionOnPoints=function(j,n,_){var E=u(w,j,n);return J(E,_)};var q=function(D){var Z=D.data,i=this.dm();if(Z&&"add"===D.kind){var L=i.$3e;L&&Z.s(G)&&L.indexOf(Z)<0&&L.push(Z)}"clear"===D.kind&&(i.$3e=[])},p=function(D){var w=D.property,j=D.data,m=D.newValue,Y=this.dm().$3e;if(Y&&"s:flow"===w)if(m)Y.indexOf(j)<0&&Y.push(j);else for(var O=Y.length,g=0;O>g;g++)if(Y[g]===j){Y.splice(g,1);break}},_=D.setDataModel;D.setDataModel=function(h){var F=this,v=F._dataModel;if(v!==h){v&&(v.umm(q,F),v.umd(p,F),v.$3e=[]),h.mm(q,F),h.md(p,F);var l=h.$3e=[];h.each(function(c){c.s(G)&&l.indexOf(c)<0&&l.push(c)}),_.call(F,h)}},X.getFlowElementSpace=function(){return this.s(y)};var a=function(Y){var $=this,q=$._data,g=q[x],K=q[A],B=q[n],E=q.s(m),h=0,_=$[S],l=q.s(r),Q=q.s(L),j=q.s(z),p=q.s(U),X=q.s(v),t=q.s(c),y=(X-p)/(j-1),P=(l-Q)/(j-1),u=q.getRotation?q.getRotation():0,D=q.getPosition?q.p():q.$10e,V=[],d=[];if(_!=w){if(1===j)V.push(l);else if(2===j)V.push(l),V.push(Q);else{if(!(j>2))return;V.push(l);for(var M=j-2;M>0;M--)V.push(Q+P*M);V.push(Q)}if(1===j)d.push(X);else if(2===j)d.push(X),d.push(p);else{if(!(j>2))return;d.push(X);for(var M=j-2;M>0;M--)d.push(p+y*M);d.push(p)}var k=0,G=0;V.forEach(function(R){j-1>k&&(G+=q.getFlowElementSpace(R)),k++}),G+=(l+Q)/2,h=(g-E*G+G)/E,Y.save();for(var M=0;E>M;M++){var R=_,F=0,C=$._overCount,b=0;q.s("flow.autoreverse")&&C&&C>E-(M+1)||(R-=M*(h+G),k=0,V.forEach(function(p){var G=R-F;if(G>=0&&g>G){var a=!0,Q=i(G,K);b=0;for(var n=0;Q>n;n++)b+=K[n];if(G-=b,a){var v=N(B[Q],G),X=u;if(t){for(var y=B[Q],J=0,w=0,E=0;E<y.length-1;E++){var U=y[E],Z=y[E+1],C=Z.x-U.x,h=Z.y-U.y,o=Math.sqrt(C*C+h*h);if(J+=o,J>G){w=E;break}}var s=y[w];X+=Math.atan2(v.y-s.y,v.x-s.x)}u&&(v=H(D,v.x-D.x,v.y-D.y,u)),$.$5e(Y,v,p,d[k],X)}}F+=q.getFlowElementSpace(V[k]),k++}))}Y.restore()}},$l=$._80o;$._80o=function(F){$l.call(this,F);var M=this,J=M._data,K=M.gv;J.s(G)&&K.$7e!=w&&a.call(M,F)};var Gp=t._80o;t._80o=function(d){Gp.call(this,d);var R=this,k=R._data,x=R.gv;k.s(G)&&x.$7e!=w&&a.call(R,d)};var Wf=$._79o,Hp=t._79o,xi=function(){var T=this,O=T._data,V=O.s(r),m=!1,K=w;if(T._6I||(m=!0),K=O instanceof M.Edge?Wf.call(T):Hp.call(T),O.s(G)&&m){var g=O.s(v),F=O.s(d);F&&g>V&&(V=g),V>0&&h.grow(K,Math.ceil(V/2)),E(T)}return!O.s(G)&&m&&(O[A]=O[x]=O[n]=T[S]=w),K};t._79o=xi,$._79o=xi,f.$5e=function(H,i,f,v,N){var z=this,s=z._data,b=z.gv,u=s.s(W),y=s.s(e),$=s.s(B),M=s.s(d),g=b.$8e,X=s.s(T);if(g==w&&(g=b.$8e={}),H.beginPath(),X!=w){var A=h.getImage(X),k=f/2;H.translate(i.x,i.y),H.rotate(N),H.translate(-i.x,-i.y),h.drawImage(H,A,i.x-k,i.y-k,f,f,s),H.translate(i.x,i.y),H.rotate(-N),H.translate(-i.x,-i.y)}else if(b.__flowBatch){var U=b.__flowBatchGroup;U||(U=b.__flowBatchGroup={});var q=[i.x,i.y,f/2];U[u]?U[u].push(q):U[u]=[q]}else H.fillStyle=u,H.arc(i.x,i.y,f/2,0,2*Math.PI,!0),H.fill();if(M){var S=22,Z=S+"_"+y+"_"+$,P=g[Z];if(P==w){var Y=document.createElement("canvas");C.setCanvas(Y,S,S);var p=Y.getContext("2d"),F=S/2,I=F,D=F;C.translateAndScale(p,0,0,1),p.beginPath();var L=p.createRadialGradient(I,D,0,I,I,F);L.addColorStop(0,y),L.addColorStop(1,$),p.fillStyle=L,p.arc(I,D,F,0,2*Math.PI,!0),p.fill(),P=g[Z]=Y}var k=v/2;h.drawImage(H,P,i.x-k,i.y-k,v,v,s)}},D.$9e=function(){var o=this,Y=o.dm().$3e;o._24I,Y.forEach(function(Y){o._24I[Y._id]=Y}),o.iv()};var Rk=Z.prepareRemove;Z.prepareRemove=function(u){Rk.call(this,u);var Q=u._dataModel,g=Q.$3e;if(g)for(var G=g.length,i=0;G>i;i++)if(g[i]===u){g.splice(i,1);break}},D.setFlowInterval=function(f){var c=this,E=c.$11e;c.$11e=f,c.fp("flowInterval",E,f),c.$7e!=w&&(clearInterval(c.$7e),delete c.$7e,c.enableFlow(f))},D.getFlowInterval=function(){return this.$11e},D.enableFlow=function(R){var e=this,j=e.dm(),z=j.$3e;e.$7e==w&&(z.forEach(function(Y){var V=e.getDataUI(Y);E(V)}),e.$7e=setInterval(function(){j.$3e.forEach(function(q){Q(e.getDataUI(q))}),e.$9e()},R||e.$11e||50))},D.disableFlow=function(){var t=this;clearInterval(t.$7e),delete t.$7e;var l=t.dm().$3e;l&&t.$9e()};var Fp=function(){this.__flowBatchGroup={}},Bm=function(q){var c=this.__flowBatchGroup;if(c){q.save();for(var z in c){q.fillStyle=z,q.beginPath();var S=c[z];S.forEach(function(U){q.moveTo(U[0],U[1]),q.arc(U[0],U[1],U[2],0,2*Math.PI,!0)}),q.fill()}q.restore()}};D.setFlowBatch=function(Z){var h=this;!!h.__flowBatch!=!!Z&&(h.__flowBatch=Z,Z?(h.addBottomPainter(Fp),h.addTopPainter(Bm)):(h.removeBottomPainter(Fp),h.removeTopPainter(Bm)))}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);