/**
 * # en base a los siguientes datos, implementar
# un modelo que permita calcular el valor total
# para lo siguiente:

# --> 10 unidades de naranjas

# luego recalcular el total agregando lo siguiente:

# --> 15 unidades de manzanas

# y finalmente agregar al carro una bolsa y una propina, 
# en este último caso donde el monto lo define el usuario.

# importante a considerar es que las promociones no
# son acumulables, es decir, solo puede haber una
# promocion activa en el carro. en caso de dos promociones
# sean aplicables, debe "ganar" la que aplique el mayor
# descuento.

---
products:
  orange:
    price_model: fixed
    price: 12

  apple:
    price_model: tiered
    tiers:
    - from: 1 (esto fija un rango desde)
      to: 10 (hasta donde se establece)
      price: 10 (precio del total)
    - from: 11 
      to: 20
      price: 9
    - from: 21
      to: 30
      price: 8

optionals:
  bag:
    price_model: fixed
    price: 2

  tip:
    price_model: user_defined
    min: 0.1 # en caso de agregar propina, no puede ser menor al 10% del valor de los productos

promotions:
  one:
    discount: 0.2 # 20% discount
    requirements:
      min_units: 20 # requiere un mínimo de 20 unidades en el carro

  two:
    discount: 0.1 # 10% discount
    requirements:
      min_amount: 100 # sólo aplica si el total es mayor a 100
 */


function totalValue(totalOrange, totalApp, bag, tip, promotions) {
    const precioTotalApp = totalPrecioApp(totalApp)
    const parcialValue = totalOrange + precioTotalApp
    const parametroPropina = 10 * parcialValue / 100
    if (bag) {
        parcialValue += bag
    }
    if (tip) {
        if (tip > parametroPropina) {
            parcialValue += tip
        }
    }
}



const totalPrecioApp = (totalApp) => {
    if (totalApp >= 1 && totalApp <= 10) {
        return 10
    }
    else if (totalApp >= 11 && totalApp <= 20) {
        return 9
    } else if (totalApp >= 21 && totalApp <= 30) {
        return 8
    } else {
        return 0
    }
};
