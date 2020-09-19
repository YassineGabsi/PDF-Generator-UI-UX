

document.getElementById('certif-form').style.transform ='rotate(0)';
document.getElementById('email-form').style.display ='none';

function triggerCheck() {
    if(document.getElementById('tab-1').checked) {
        console.log("tab-1");
        document.getElementById('email-form').style.transform ='rotate(0)';
        document.getElementById('email-form').style.display ='inherit';

        document.getElementById('certif-form').style.transform ='rotateY(180deg)';
        document.getElementById('certif-form').style.display ='none';

    }else if(document.getElementById('tab-2').checked) {
        console.log("tab-2");
        document.getElementById('email-form').style.transform ='rotateY(180deg)';
        document.getElementById('email-form').style.display ='none';
        document.getElementById('certif-form').style.transform ='rotate(0)';
        document.getElementById('certif-form').style.display ='inherit';
    }
}

function resetEmailForm () {
    document.getElementById("email-f").reset();
}

function resetCertifForm () {
    document.getElementById("certif-f").reset();
}


