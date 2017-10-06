(C=c.getContext`2d`).fillStyle="#fff";
// _: params data
// T: Absolute time since sound engine loads
// F: last data of the operators. 132 = 6*22
// S: current param
_=F=Array(S=78).fill(0);
// draw loop
W="strokeText";
(d=e=>requestAnimationFrame(d,C.fillRect(0,0,J=2048,J),
[..."012345ADSICTO"].map((x,i)=>C[W](x, 22 + i*17,40, C[W](x, 5, 57 + i*17))),
_.map((x,i)=>C[W](x, 22 + i%13*17, 57 + ~~(i/13)*17))))
($=Array(34).fill``);// $: array of voices 
//mouse behaviors
l=location;M=Math;
c.onmouseup=e=>S=78;
c.onmousedown=e=>S=~~((e.x-22)/17)+13*~~((e.y-47)/17);
c.onmousemove=e=>{_[S]=M.min(99,M.max(0,_[S]-e.movementY));l.hash=_.join`,`};
// loading synth patch
_=_.map((x,i)=>~~l.hash.substr(1).split`,`[i]);
// keyboard behavior. We store [gate, triggered time] at index corresponding to note
c.onkeyup=c.onkeydown=e=>$[z="zsxdcvgbhnjmq2w3er5t6y7ui9o0p[=]B\\".indexOf(e.key[0])]=[e.type[3]=="d",e.repeat?$[z][1]:T];
// L: mapper. o is the operator index, x is the parameter index
// initializes AudioContext and scriptProcessor
D=(G=new AudioContext).createScriptProcessor(J,0,1);D.connect(G.destination);
T=0;
D.onaudioprocess=e=>{
for(i=0;i<J;)
	e.outputBuffer.getChannelData(0)[i++]=(t=>{
	for(k=o=0;k<34;k++) // loops through each voices
		for(q=0,L=x=>_[13*q+x],N=t-$[k][1];$[k][0]&&L(12);q++) //loop through each operators,if the operator has a really low volume, don't bother computing
			a=L(6)/33,o += L(12)/900* //output volume
				(F[k*6+q]= //after computing the operators, store its value
					(N<a?N/a:M.max(L(8)/99,1-(N-a)*33/L(7)))* // attack? attack : decay+sustain
					M.sin(
						F.slice(k*6,k*6+6).reduce((x,y,j)=>x+L(j)/33*y,0)*L(9)/99 // pm stuff
						+
						(L(11)/99+L(10))*t*1382*2**((k-21)/12) // frequency coarse, tune, midi->Hz equal temperament
					)
				);
		return o;
	})(T+=1/G.sampleRate);
}
// crusher: http://www.iteral.com/jscrush/