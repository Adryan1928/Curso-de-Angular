let preco = 100
let pagamento = 'tres'

if (pagamento === 'debito')
    console.log(preco - (preco/10))
else if (pagamento === 'pix')
    console.log(preco - (preco/100) * 15)
else if (pagamento === 'duas')
    console.log(preco)
else
    console.log(preco + preco/10)