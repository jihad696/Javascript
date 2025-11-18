// 100000

console.log(100000)
console.log(100_000)
console.log(10 ** 5)
console.log(1e5)
console.log((+"0xA") * (1e4) )
console.log(100000.0)
console.log(100000.0000.toFixed(3));
console.log(parseInt("100000 this is one hundred thousands"))
console.log(Math.pow(10,5))
console.log(Math.sqrt(1e10))
console.log(Math.ceil(99999.9))

//=================================================
console.log(Math.abs(Number.MIN_SAFE_INTEGER)); // 9007199254740991

//==================================================
console.log(
  Math.sqrt( Math.sqrt( Number.MAX_SAFE_INTEGER.toString(2).length ** 4 ) ) 
  // Number.MAX_SAFE_INTEGER.toString(2).length => طول الرقم بالثنائي (53)
  // 53 ** 4 => رفعه للقوة 4
  // الجذر التربيعي مرتين => يعطي 16 بدون استخدام أي رقم صريح
);


//=====================================
let myVar = "100.56789 Views";
console.log(Number(parseInt(myVar)));
console.log(Number(parseFloat(myVar).toFixed(2)));

let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num));

let flt = 10.4;
console.log(Math.floor(flt));
console.log(Math.trunc(flt));
console.log(parseInt(flt));
console.log(Math.round(flt - 0.4));
console.log(Math.ceil(flt - 0.4));

console.log(Math.floor(Math.random() * (Math.floor(5))));

