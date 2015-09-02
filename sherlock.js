//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
ran1=_INPUT.split("\n");
c=ran1[0];


for(i=1;i<=c;i++){
  ran2=ran1[i].split(" ");
  ValMin=ran2[0];
  ValMax=ran2[1];
  CuadradosDeSherlock(ValMin,ValMax);
}
 function CuadradosDeSherlock(min,max){
   x=0;
   for (i=min;i<=max;i++){
     if(Math.sqrt(i)%1==0){
       x++
     }
     
   }
   console.log(x);
 }
