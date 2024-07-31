let soz = ['non', 'asal', 'banan', 'olma', 'aziza', 'gul', 'mashina',]

const n = [];
const n1 = [];

for (let i = 0; i < soz.length; i++) {
    if (soz[i].includes('n')) { 
        n.push(soz[i]); 
    }
}
for (let i = 0; i < soz.length; i++) {
    if (soz[i].includes('l')) { 
        n1.push(soz[i]); 
    }
}
for (let i = 0; i < soz.length; i++) {
    if (soz[i].includes('z')) { 
        n1.push(soz[i]); 
    }
}

console.log(soz, `Sozlar`);
console.log(n, `N harfi bor sozlar`);
console.log(n1, `N harfi yoq sozlar`);