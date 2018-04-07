function encontrarDia() {
    var numeroDia = " ",
        Dia = " ";

    switch (numeroDia = document.getElementById("numD").value) {
        case numeroDia = "1":
            Dia = "Lunes";
            document.getElementById("resD").value = Dia;
            console.log("El numero " + numeroDia + " equivale al dia: " + Dia);
            break;
        case numeroDia = "2":
            Dia = "Martes";
            document.getElementById("resD").value = Dia;
            console.log("El numero " + numeroDia + " equivale al dia: " + Dia);
            break;
        case numeroDia = "3":
            Dia = "Miercoles";
            document.getElementById("resD").value = Dia;
            console.log("El numero " + numeroDia + " equivale al dia: " + Dia);
            break;
        case numeroDia = "4":
            Dia = "Jueves";
            document.getElementById("resD").value = Dia;
            console.log("El numero " + numeroDia + " equivale al dia: " + Dia);
            break;
        case numeroDia = "5":
            Dia = "Viernes";
            document.getElementById("resD").value = Dia;
            console.log("El numero " + numeroDia + " equivale al dia: " + Dia);
            break;
        case numeroDia = "6":
            Dia = "Sabado";
            document.getElementById("resD").value = Dia;
            console.log("El numero " + numeroDia + " equivale al dia: " + Dia);
            break;
        case numeroDia = "7":
            Dia = "Domingo";
            document.getElementById("resD").value = Dia;
            console.log("El numero " + numeroDia + " equivale al dia: " + Dia);
            break;
    }
}

function aBc() {
    var letr = "";
    var letras = [];
    var sel = document.getElementById("abc");

    for (var i = "A".charCodeAt(0), end = "Z".charCodeAt(0); i <= end; i++) {
        letras.push(String.fromCharCode(i));
    }
    letr = letras.join();
    console.log("Arreglo A-Z: \n" + letr);
    console.log("\n");

    for (var i = 0; i < letras.length; i++) {
        var opt = document.createElement("option");
        opt.innerHTML = letras[i];
        opt.value = letr[i];
        sel.appendChild(opt);
    }
}

function sumaPares() {
    var num = 0,
        res = 0;
    console.log("Arreglo sumas:");
    for (var i = 0; i < 10; i++) {
        num++
        if (num % 2 == 0) {
            res = res + num;
            console.log(num);
        }
    }
    console.log("El resultado es: " + res);
    console.log("\n");
}

function indicadorNumero() {
    var numE = document.getElementById("numI").value;
    var res = " ";

    if (numE < 0) {
        res = "Negativo";
        document.getElementById("numR").value = res;
        console.log(res);
    } else if (numE == 0) {
        res = "Cero";
        document.getElementById("numR").value = res;
        console.log(res);
    } else if (numE > 0) {
        res = "Positivo";
        document.getElementById("numR").value = res;
        console.log(res);
    }
}

function indiceIMC() {
    var peso = 0,
        est = 0,
        imc = 0;

    peso = parseFloat(document.getElementById("Peso").value);
    est = parseFloat(document.getElementById("Estatura").value);

    imc = peso / Math.pow(est, 2);
    console.log(imc);
    document.getElementById("Imc").value = imc;
}