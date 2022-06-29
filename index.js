
moneyCofla = prompt("Cuanto dinero tienes Cofla?");
moneyRoberto = prompt("Cuanto dinero tienes Roberto?");
moneyPedro = prompt("Cuanto dinero tienes pedro?");

moneyCofla = parseInt(moneyCofla);

if (moneyCofla >= 0.6 && moneyCofla < 1) {
    alert("Cofla, Compra el helado de agua");
    alert("Cofla, te sobran: $" + (moneyCofla - 0.6));
}

else if (moneyCofla >= 1 && moneyCofla < 1.6) {
    alert("Cofla, Compra el helado de crema");
    alert("Cofla, te sobran: $" + (moneyCofla - 1));
}

else if (moneyCofla >= 1.6 && moneyCofla < 1.7) {
    alert("Cofla, Compra el helado de heladix");
    alert("Cofla, te sobran: $" + (moneyCofla - 1.6));
}

else if (moneyCofla >= 1.7 && moneyCofla < 1.8) {
    alert("Cofla, Compra el helado de heladovich");
    alert("Cofla, te sobran: $" + moneyCofla - 1.7);
}

else if (moneyCofla >= 1.8 && moneyCofla < 2.9) {
    alert(" Cofla, Compra el helado de helardo");
    alert("Cofla, te sobran: $" + (moneyCofla - 1.8));
}

else if (moneyCofla >= 2.9) {
    alert("Cofla, Compra el helado de Pote de 1/4 KG o con Confites");
    alert("Cofla, te sobran: $" + (moneyCofla - 2.9));
}

else {
    alert("Cofla, No te alcanza para ninguno. :(");
}

if (moneyRoberto >= 0.6 && moneyRoberto < 1) {
    alert("Roberto, Compra el helado de agua");
}

else if (moneyRoberto >= 1 && moneyRoberto < 1.6) {
    alert("Roberto, Compra el helado de crema");
}

else if (moneyRoberto >= 1.6 && moneyRoberto < 1.7) {
    alert("Roberto, Compra el helado de heladix");
}

else if (moneyRoberto >= 1.7 && moneyRoberto < 1.8) {
    alert("Roberto, Compra el helado de heladovich");
}

else if (moneyRoberto >= 1.8 && moneyRoberto < 2.9) {
    alert("Roberto, Compra el helado de helardo");
}

else if (moneyRoberto >= 2.9) {
    alert("Roberto, Compra el helado de Pote de 1/4 KG o con Confites");
}

else {
    alert("Roberto, No te alcanza para ninguno," + " Roberto." +" :(");
}

if (moneyPedro >= 0.6 && moneyPedro < 1) {
    alert("Pedro, Compra el helado de agua");
}

else if (moneyPedro>= 1 && moneyPedro < 1.6) {
    alert("Pedro, Compra el helado de crema");
}

else if (moneyPedro >= 1.6 && moneyPedro < 1.7) {
    alert("Compra el helado de heladix");
}

else if (moneyPedro >= 1.7 && moneyPedro < 1.8) {
    alert("Pedro, Compra el helado de heladovich");
}

else if (moneyPedro >= 1.8 && moneyPedro < 2.9) {
    alert("Pedro, Compra el helado de helardo");
}

else if (moneyPedro >= 2.9) {
    alert("Pedro, Compra el helado de Pote de 1/4 KG o con Confites");
}

else {
    alert("Pedro, No te alcanza para ninguno," + " Pedro." + " :(");
}

