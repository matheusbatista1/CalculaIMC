function calcularImc(){
    const peso = parseFloat(document.querySelector("#inputPeso").value);
    const altura = parseFloat(document.querySelector("#inputAltura").value);
    const resultado = document.querySelector("#resLbl");

    if (peso <= 0 || altura <= 0 || !peso || !altura) {
        resultado.innerHTML = "Dados inválidos!"
        return;
    }
    let IMC = (peso/(altura * altura)).toFixed(1);
    if(IMC < 18.5) {
        resultado.innerHTML = `IMC: <strong>${IMC}</strong></br> Seu IMC é classificado como <strong>MAGREZA</strong>`;
        return;
    }else if(IMC >= 18.5 && IMC <= 24.9){
        resultado.innerHTML = `IMC: <strong>${IMC}</strong></br> Seu IMC é classificado como <strong>NORMAL</strong>`;
        return;
    }else if(IMC >= 25.0 && IMC <= 29.9){
        resultado.innerHTML = `IMC: <strong>${IMC}</strong></br> Seu IMC é classificado como <strong>SOBREPESO</strong>`;
        return;
    }else if(IMC >= 30.0 && IMC <= 39.9){
        resultado.innerHTML = `IMC: <strong>${IMC}</strong></br> Seu IMC é classificado como <strong>OBESIDADE</strong>`;
        return;
    }else{
        resultado.innerHTML = `IMC: <strong>${IMC}</strong></br> Seu IMC é classificado como <strong>OBESIDADE GRAVE</strong>`;
        return;
    }
}