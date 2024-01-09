let n = [7,7,7]

media = n.reduce((value, n) => value + n) / n.length

if (media < 5)
    console.log('Reprovado')
else if (media >= 5 && media <= 7)
    console.log('Recuperação')
else
    console.log('Aprovado')